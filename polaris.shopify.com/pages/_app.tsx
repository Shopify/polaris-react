import type {AppProps} from 'next/app';
import Head from 'next/head';
import Script from 'next/script';
import {useEffect, StrictMode} from 'react';
import {useRouter} from 'next/router';
import '@shopify/polaris/build/esm/styles.css';
import pkg from '../package.json';

import {className} from '../src/utils/various';
import Frame from '../src/components/Frame';
import '../src/styles/globals.scss';
import ViewTransition from '../src/components/ViewTransition';
import InterstitialModal from '../src/components/InterstitialModal';
import {useSafeDarkMode} from '../src/hooks/useSafeDarkMode';

const PUBLIC_GA_ID = 'UA-49178120-32';

const gaPageView = (url: string) => {
  window.gtag('config', PUBLIC_GA_ID, {
    page_path: url,
    custom_map: {
      metric1: 'search_term',
      metric2: 'result_rank',
      metric3: 'selected_result',
    },
  });
};

// Remove dark mode flicker. Minified version of https://github.com/donavon/use-dark-mode/blob/develop/noflash.js.txt
const noflash = `!function(){var b="darkMode",g="dark-mode",j="light-mode";function d(a){document.body.classList.add(a?g:j),document.body.classList.remove(a?j:g)}var e="(prefers-color-scheme: dark)",c=window.matchMedia(e),h=c.media===e,a=null;try{a=localStorage.getItem(b)}catch(k){}var f=null!==a;if(f&&(a=JSON.parse(a)),f)d(a);else if(h)d(c.matches),localStorage.setItem(b,c.matches);else{var i=document.body.classList.contains(g);localStorage.setItem(b,JSON.stringify(i))}}()`;

function MyApp({Component, pageProps}: AppProps) {
  const router = useRouter();
  const isProd = process.env.NODE_ENV === 'production';
  const darkMode = useSafeDarkMode(false);

  // We're using router.pathname here to check for a specific incoming route to render in a Fragment instead of
  // the Page component. This will work fine for statically generated assets / pages
  // Any SSR pages may break due to router sometimes being undefined on first render.
  // see https://stackoverflow.com/questions/61040790/userouter-withrouter-receive-undefined-on-query-in-first-render

  useEffect(() => {
    if (!isProd) return;

    const handleRouteChange = (url: string) => {
      gaPageView(url);
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    router.events.on('hashChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
      router.events.off('hashChangeComplete', handleRouteChange);
    };
  }, [router.events, isProd]);

  const ogImagePath = `/og-images${
    router.asPath === '/'
      ? '/home'
      : new URL(router.asPath, 'https://polaris.shopify.com').pathname
  }.png`;

  const isPolarisExample = router.asPath.startsWith('/examples');
  const isPolarisSandbox = router.asPath.startsWith('/sandbox');

  useEffect(() => {
    document.documentElement.style.setProperty(
      'color-scheme',
      darkMode.value ? 'dark' : 'light',
    );
  }, [darkMode.value]);

  return (
    <>
      <Script
        id="dux-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
              const loadScript = (src) => {
                const promise = new Promise((resolve, reject) => {
                  const script = document.createElement('script');
                  script.src = src;
                  script.type = 'module';
                  script.onload = () => {
                    resolve(true);
                  };
                  script.onerror = () => {
                    reject(false);
                  };
                  document.body.appendChild(script);
                });
                return promise;
              }
              // example loading from CDN
              loadScript('https://cdn.shopify.com/shopifycloud/dux/dux-portal-4.4.0.min.js').then(() => {
                Dux.init({
                  eventHandlerEndpoint: 'https://www.shopify.com/__dux',
                  mode: 'production',
                  service: 'polaris-react',
                  enableActiveConsent: true,
                  enableConsentBuffer: true,
                  enableLogger: {
                    cookieBlocker: true,
                  },
                  countryCode: 'GB',
                  enableGtm: true,
                  enableGtmLoader: true,
                  gtmAccountId: '${PUBLIC_GA_ID}',
                })
              });
            `,
        }}
      />

      <script dangerouslySetInnerHTML={{__html: noflash}}></script>

      <Head>
        <meta name="robots" content="noai, noimageai" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="shortcut icon" href="/images/favicon.png" />
        <meta property="og:image" content={ogImagePath} />
      </Head>

      <div
        style={
          {
            background: isPolarisExample ? '#fafafa' : 'unset',
            '--polaris-shopify-com-version': pkg.version,
          } as React.CSSProperties
        }
        className={className(
          !isPolarisExample && 'styles-for-site-but-not-polaris-examples',
        )}
      >
        {isPolarisExample || isPolarisSandbox ? (
          <Component {...pageProps} />
        ) : (
          <Frame darkMode={darkMode}>
            <ViewTransition>
              <StrictMode>
                <Component {...pageProps} />
              </StrictMode>
            </ViewTransition>
          </Frame>
        )}
      </div>
      <InterstitialModal />
    </>
  );
}

export default MyApp;
