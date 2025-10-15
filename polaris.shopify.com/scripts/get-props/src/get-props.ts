#!/usr/bin/env ts-node

import * as ts from 'typescript';
import * as fs from 'fs';
import path from 'path';
import globby from 'globby';
import {Type, FilteredTypes, AllTypes} from '../../../src/types';

type NodeParser = (
  ast: AllTypes,
  node: ts.Node,
  checker: ts.TypeChecker,
  program: ts.Program,
  filePath: string,
) => void;

const compilerOptions = {
  target: ts.ScriptTarget.ES5,
  module: ts.ModuleKind.CommonJS,
};

export function normalizePath(path: string): string {
  let normalizedPath = path;
  if (normalizedPath.startsWith('.')) {
    normalizedPath = normalizedPath.replace(/^\.{1,2}\//, '');
  } else if (normalizedPath.includes('polaris.shopify.com')) {
    // Extract everything from 'polaris.shopify.com' onwards
    const match = normalizedPath.match(/polaris\.shopify\.com.*$/);
    normalizedPath = match ? match[0] : normalizedPath;
  } else if (normalizedPath.includes('/polaris/')) {
    normalizedPath = normalizedPath.split(/\/(polaris\/)+/).at(-1)!;
  } else if (normalizedPath.startsWith('/')) {
    normalizedPath = normalizedPath.replace('/', '');
  }
  return normalizedPath;
}

export function getProps(filePaths: string[]): AllTypes {
  let ast: AllTypes = {};
  let program = ts.createProgram(filePaths, compilerOptions);
  let checker = program.getTypeChecker();

  let filePath = '';

  for (const sourceFile of program.getSourceFiles()) {
    if (!sourceFile.isDeclarationFile) {
      ts.forEachChild(sourceFile, (child) => {
        filePath = normalizePath(sourceFile.fileName);
        visit(child);
      });
    }
  }

  return ast;

  function visit(
    node: ts.Node | ts.Declaration,
    level = 0,
  ): string | undefined {
    // Escape hatch
    if (level > 10) {
      return undefined;
    }

    const parserArgs = [ast, node, checker, program, filePath] as const;

    switch (node.kind) {
      case ts.SyntaxKind.EnumDeclaration:
        parseEnumDeclaration(...parserArgs);
        break;

      case ts.SyntaxKind.InterfaceDeclaration:
        parseInterfaceDeclaration(...parserArgs);
        break;

      case ts.SyntaxKind.TypeAliasDeclaration:
        parseTypeAliasDeclaration(...parserArgs);
        break;
    }
  }
}

const parseInterfaceDeclaration: NodeParser = (
  ast,
  node,
  checker,
  _program,
  filePath,
) => {
  const interfaceDeclaration = node as ts.InterfaceDeclaration;
  const type = checker.getTypeAtLocation(interfaceDeclaration.name);
  const symbol = checker.getSymbolAtLocation(interfaceDeclaration.name);

  if (!symbol) throw new Error('Expected interface declaration to have symbol');

  const members: Type[] = [];

  interfaceDeclaration.members.forEach((member) => {
    if (member.kind === ts.SyntaxKind.IndexSignature) {
      const indexSignature = member as ts.IndexSignatureDeclaration;
      const name = `[${indexSignature.parameters
        .map((param) => `${param.name.getText()}: ${param.type?.getText()}`)
        .join(', ')}]`;
      const value = indexSignature.type.getText();
      members.push({filePath, name, value});
    }
  });

  for (const prop of type.getProperties()) {
    const valueDeclaration = prop.valueDeclaration;
    if (valueDeclaration) {
      const name = prop.getName();
      const description = getSymbolComment(prop, checker);
      const syntaxKind = ts.SyntaxKind[valueDeclaration.kind];
      const type = checker.getTypeOfSymbolAtLocation(prop, valueDeclaration);
      const value = checker.typeToString(type);
      const {deprecationMessage, defaultValue} = parseJSDocTags(prop);

      let memberNode: Type = {
        filePath,
        syntaxKind,
        name,
        value,
        description,
      };

      if (
        valueDeclaration.kind === ts.SyntaxKind.PropertySignature ||
        valueDeclaration.kind === ts.SyntaxKind.MethodSignature
      ) {
        const signature = valueDeclaration as
          | ts.MethodSignature
          | ts.PropertySignature;
        if (signature.questionToken !== undefined) {
          memberNode.isOptional = true;
        }
      }

      if (deprecationMessage) {
        memberNode.deprecationMessage = deprecationMessage;
      }
      if (defaultValue) {
        memberNode.defaultValue = defaultValue;
      }

      members.push(memberNode);
    }
  }

  const name = interfaceDeclaration.name.escapedText.toString();
  const description = getSymbolComment(symbol, checker);
  const value = interfaceDeclaration.getText();

  if (!ast[name]) {
    ast[name] = {};
  }
  ast[name][filePath] = {
    filePath,
    name,
    description,
    members,
    value,
  };
};

const parseTypeAliasDeclaration: NodeParser = (
  ast,
  node,
  checker,
  _program,
  filePath,
) => {
  const typeAliasDeclaration = node as ts.TypeAliasDeclaration;
  const symbol = checker.getSymbolAtLocation(typeAliasDeclaration.name);

  if (!symbol) {
    throw new Error('Expected type alias declaration to have a symbol');
  }

  const description = getSymbolComment(symbol, checker);
  const name = symbol.escapedName.toString();
  const syntaxKind = ts.SyntaxKind[typeAliasDeclaration.kind];
  const typeRefNode = typeAliasDeclaration.type as ts.TypeReferenceNode;
  let value = typeAliasDeclaration.type.getText();

  for (const typeArg of typeRefNode.typeArguments ?? []) {
    if (typeArg.kind === ts.SyntaxKind.UnionType) {
      value = checker.typeToString(checker.getTypeAtLocation(typeArg));
    }
  }

  if (typeAliasDeclaration.type.kind === ts.SyntaxKind.UnionType) {
    const unionType = typeAliasDeclaration.type as ts.UnionTypeNode;
    value = unionType.types.map((type) => type.getText()).join(' | ');
  } else if (
    typeAliasDeclaration.type.kind === ts.SyntaxKind.IntersectionType
  ) {
    const unionType = typeAliasDeclaration.type as ts.UnionTypeNode;
    value = unionType.types.map((type) => type.getText()).join(' & ');
  }

  if (!ast[name]) {
    ast[name] = {};
  }
  ast[name][filePath] = {
    filePath,
    syntaxKind,
    name,
    value,
    description,
  };
};

const parseEnumDeclaration: NodeParser = (
  ast,
  node,
  checker,
  _program,
  filePath,
) => {
  const enumDeclation = node as ts.EnumDeclaration;
  const symbol = checker.getSymbolAtLocation(enumDeclation.name);

  if (!symbol) throw new Error('Expected enum to have a matching symbol');

  const syntaxKind = ts.SyntaxKind[enumDeclation.kind];
  const name = enumDeclation.name.getText();
  const value = enumDeclation.getText();
  const members: Type[] = enumDeclation.members.map((member) => {
    const type = checker.getTypeAtLocation(member.name);
    return {
      filePath,
      name: member.name.getText(),
      value: type.isLiteral() ? type.value.valueOf() : '',
    };
  });

  if (!ast[name]) {
    ast[name] = {};
  }
  ast[name][filePath] = {
    filePath,
    syntaxKind,
    name,
    value,
    members,
  };
};

function parseJSDocTags(symbol: ts.Symbol): {
  deprecationMessage?: string;
  defaultValue?: string;
} {
  const tags = symbol.getJsDocTags();
  let deprecationMessage: string | undefined = undefined;
  let defaultValue: string | undefined = undefined;

  tags.forEach((tag) => {
    if (tag.name.toLowerCase() === 'default' && tag.text) {
      defaultValue = tag.text.map((t) => t.text).join('');
    }
    if (tag.name.toLowerCase() === 'deprecated') {
      deprecationMessage = tag.text
        ? tag.text.map((t) => t.text).join('')
        : 'Deprecated';
    }
  });

  return {deprecationMessage, defaultValue};
}

function getSymbolComment(
  symbol: ts.Symbol,
  checker: ts.TypeChecker,
): string | undefined {
  return symbol
    .getDocumentationComment(checker)
    .map((comment) => (comment.kind === 'text' ? comment.text : ''))
    .join('\n');
}

const isExecutedThroughCommandLine = require.main === module;
if (isExecutedThroughCommandLine) {
  globby([
    '../polaris-react/src/**/*.ts',
    '../polaris-react/src/**/*.tsx',
  ]).then((files) => {
    let filesWithoutTests = files.filter((file) => !file.endsWith('test.tsx'));
    const ast = getProps(filesWithoutTests);

    const cacheDir = path.join(__dirname, '../../../.cache');
    if (!fs.existsSync(cacheDir)) {
      fs.mkdirSync(cacheDir, {recursive: true});
    }

    fs.writeFileSync(
      path.join(cacheDir, 'props.ts'),
      `import type {AllTypes} from '../src/types';
export default ${JSON.stringify(ast)} satisfies AllTypes;`,
    );
  });
}

const nonPolarisTypes = [
  'React',
  'ReactNode',
  'any',
  'CSSProperties',
  'ElementType',
  'MouseEvent',
  'File',
  'HTMLElement',
];

export function getRelevantTypes(
  ast: AllTypes,
  name: string,
  filePath: string,
  status: string,
): FilteredTypes {
  if (status === 'Deprecated') {
    return {};
  }

  let matchingNode = ast[name][filePath];

  if (!matchingNode) {
    matchingNode = Object.values(ast[name])[0];
  }

  if (!matchingNode) {
    throw new Error(
      `Expected to find a Props definition at ast['${name}']['${filePath}'] or at least Object.values(ast['${name}])[0]`,
    );
  }

  const pascalCaseRegex = /[A-Z]+[a-z]+(?:[A-Z][a-z]+)*/gm;
  let output: FilteredTypes = {};

  extractTypes(matchingNode);

  function extractTypes(node: Type) {
    output[node.name] = node;

    let typeDefinitionString: string = node.members
      ? node.members.map((member) => member.value.toString()).join(' ')
      : node.value.toString();

    let detectedTypeDefinitions = typeDefinitionString.match(pascalCaseRegex);
    detectedTypeDefinitions?.forEach((name) => {
      if (nonPolarisTypes.includes(name)) return;
      if (Object.keys(output).includes(name)) return;

      const typeDefinitionInSameFile = ast[name]
        ? ast[name][node.filePath]
        : undefined;

      if (typeDefinitionInSameFile) {
        extractTypes(typeDefinitionInSameFile);
      } else {
        const typeDefinitionsWithSameName = ast[name];
        const typeDefinitionsWithSameNameCount = Object.keys(
          typeDefinitionsWithSameName || {},
        ).length;

        if (typeDefinitionsWithSameNameCount === 1) {
          extractTypes(Object.values(typeDefinitionsWithSameName)[0]);
        } else {
          console.warn(
            `Found ${typeDefinitionsWithSameNameCount} definitions for type ${name}`,
          );
        }
      }
    });
  }

  return output;
}
