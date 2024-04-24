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
          <meta name="naver-site-verification" content="2df15550216fa6edb5393b963de67882420dd222" />
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