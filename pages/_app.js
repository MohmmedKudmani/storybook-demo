import Head from 'next/head'
import Theme from '../components/Theme'

export function App(props) {
  const { Component, pageProps } = props

  return (
    <>
      <Head>
        <title>Storybook Demo</title>
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width'
        />
      </Head>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  )
}

export default App
