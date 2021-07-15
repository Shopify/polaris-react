import path from 'path';
import {promisify} from 'util';

import {createFilter} from '@rollup/pluginutils';
import sass from 'sass';
import postcss from 'postcss';
import cssModules from 'postcss-modules';

export function styles({
  output,
  plugins = [],
  modules = {},
  mode,
  include = ['**/*.css', '**/*.scss'],
  exclude,
} = {}) {
  if (!['standalone', 'esnext'].includes(mode)) {
    throw new Error(
      `Expected mode to be either "standalone" or "esnext", but got "${mode}"`,
    );
  }

  const filter = createFilter(include, exclude);

  const renderSass = promisify(sass.render);

  const styleProcessor = postcss([
    cssModules({
      ...modules,
      // eslint-disable-next-line no-empty-function
      getJSON() {},
    }),
    ...plugins,
  ]);

  let inputRoot;

  const processedExt = '.css';

  const cssByFile = {};

  function transformStandalone(rollup, id, postCssOutput) {
    cssByFile[id] = postCssOutput.css;

    const properties = JSON.stringify(postCssOutput.tokens, null, 2);
    // no-tresshake to ensure that css files with no exports or unused exports
    // (e.g. AppProvider that contains global css but no classnames and thus no
    // exports) still appear in the bundle's list of modules in generateBundle
    return {
      code: `export default ${properties};`,
      moduleSideEffects: 'no-treeshake',
    };
  }

  function transformEsNext(rollup, id, postCssOutput) {
    const relativePath = `./${path.relative(
      path.dirname(id),
      id.replace(/\.scss$/, processedExt),
    )}`;

    rollup.emitFile({
      type: 'asset',
      fileName: id
        .replace(`${inputRoot}/`, '')
        .replace(/\.scss$/, processedExt),
      source: postCssOutput.css,
    });

    const properties = JSON.stringify(postCssOutput.tokens, null, 2);
    // No need to specify no-treeshake here as .css files get treated as
    // external and thus their imports will not be tree shaken away anyway
    return {
      code: `import './${relativePath}';\nexport default ${properties};`,
    };
  }

  function generateBundleStandalone(rollup, generateOptions, bundle) {
    // generateBundle gets called once per call to bundle.write(). We call
    // that twice - once for the commonjs build (the index.js file), once for
    // the esm build (the esm folder). We only want to do perform this logic
    // once in the commonjs build
    if (!(generateOptions.file && generateOptions.format === 'cjs')) {
      return;
    }

    if (typeof output !== 'string') {
      return;
    }

    // Items are added to cssByFile based on the order that transforms are
    // resolved. This may change between runs so we can't rely on it.
    // The contents of the emitted css file should use the order in which the
    // files were referenced in the compiled javascript, which can be obtained
    // by looking at bundles[].modules.
    const bundleModuleIds = flatMap(Object.values(bundle), (fileInfo) =>
      Object.keys(fileInfo.modules),
    );

    const missingReferences = Object.keys(cssByFile).filter(
      (id) => !bundleModuleIds.includes(id),
    );

    if (missingReferences.length) {
      const formatedMissingIds = missingReferences.join('\n');
      rollup.warn(
        `cssByFile contains ids not present in bundleModuleIds. Your output may be incomplete. Missing:\n${formatedMissingIds} `,
      );
    }

    let css = bundleModuleIds
      .filter((id) => id in cssByFile)
      .map((id) => cssByFile[id])
      .join('\n\n');

    try {
      css = hoistCharsetDeclaration(css);
    } catch (err) {
      rollup.error(err.message);
    }

    // Regular css file
    rollup.emitFile({type: 'asset', fileName: output, source: css});
  }

  return {
    name: 'styles',

    buildStart({input}) {
      inputRoot = path.dirname(input[0]);
    },

    // Treat CSS files as external - don't try and resolve them within Rollup
    // This only gets triggered in esnext mode when we emit imports of css files
    resolveId(source, importer) {
      if (source.endsWith(processedExt)) {
        return {
          id: path.resolve(path.dirname(importer), source),
          external: true,
        };
      }
    },

    async transform(source, id) {
      if (!filter(id)) {
        return null;
      }

      const sassOutput = await renderSass({
        data: source,
        includePaths: [path.dirname(id)],
      }).then((result) => result.css.toString());

      const postCssOutput = await styleProcessor
        .process(sassOutput, {from: id})
        .then((result) => ({
          css: result.css,
          tokens: result.messages.find(({plugin, type}) => {
            return plugin === 'postcss-modules' && type === 'export';
          }).exportTokens,
        }));

      if (mode === 'standalone') {
        return transformStandalone(this, id, postCssOutput);
      }
      if (mode === 'esnext') {
        return transformEsNext(this, id, postCssOutput);
      }
    },

    generateBundle(generateOptions, bundles) {
      if (mode === 'standalone') {
        return generateBundleStandalone(this, generateOptions, bundles);
      }
    },
  };
}

// We're still using node 10. Array.flat(fn)/Array.flatMap(fn) are added in v11
function flatMap(array, fn) {
  return array.reduce((memo, item) => memo.concat(fn(item)), []);
}

// An @charset declaration must be at the top of a css file rather than part
// way through. Because we're combining multiple files we need to make sure
// that's handled correctly.
function hoistCharsetDeclaration(css) {
  let result = css;

  const charsetRegex = /(?<=\n|^)@charset .*;\n/;
  let standaloneCssFileCharset = '';
  let charsetMatch;

  // This would be a lot more readable with String.matchAll in node v12
  while ((charsetMatch = charsetRegex.exec(result)) !== null) {
    // If multiple source files have a charset but they differ then we've
    // got a problem when it comes to combining them. This shouldn't ever
    // happen though as prettier/editorconfig should force all our source
    // files to be UTF-8
    if (
      standaloneCssFileCharset !== '' &&
      charsetMatch[0] === standaloneCssFileCharset
    ) {
      throw new Error(
        'Found multiple conflicting @charset declarations in css content',
      );
    }

    standaloneCssFileCharset = charsetMatch[0];
    result = result.replace(charsetMatch[0], '');
  }

  return `${standaloneCssFileCharset}${result}`;
}
