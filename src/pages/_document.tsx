import Document, { Html, Head, Main, NextScript } from 'next/document';
class MyDocument extends Document {
  render() {
    const parsedLang = this.props.__NEXT_DATA__.page.slice(1).split("/")[0];
    const lang = ["en", "es", "pt"].includes(parsedLang) ? parsedLang : "en"

    return (
      <Html prefix="og: https://ogp.me/ns#" lang={lang}>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument