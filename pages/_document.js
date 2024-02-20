import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
  
    return (
      <Html lang="kr">
        <Head>
          <meta charSet="UTF-8" />
          <link passHref rel="icon" href="/favicon.ico" />
          <meta name="naver-site-verification" content="f04f9ca85b84cf1b8cbc9a43ee7b7631b00eec76" />
          <meta name="google-site-verification" content="KBEHKYcq9MPiBUkVPEoE-7GtxlS5X60wWGHJPaY-ap4" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument