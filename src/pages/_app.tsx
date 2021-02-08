import { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Brewer's Partner</title>
        <link rel="shortcut icon" href="/img/logobrewerpartner.png" />
        <link rel="apple-touch-icon" href="/img/logobrewerpartner.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="A simple brew calculator for lazzy peoples"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
