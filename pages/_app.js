import 'styles/font.css';

import Layout from 'components/layout/Layout';
import { ViewportProvider } from 'hooks/useViewport';

import Head from 'next/head';

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Orkhan | A React Developer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="/images/favicons/site.webmanifest" />
        <meta property="og:title" content="Orkhan | A React Developer" />
        <meta property="og:description" content="Orkhan's portfolio." />

        <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"></script>
      </Head>

      <ViewportProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ViewportProvider>
    </>
  );
};

export default MyApp;
