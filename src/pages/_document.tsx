import Document, { Html, Head, Main, NextScript } from 'next/document';
class MyDocument extends Document {
  render() {
    const lang = this.props.__NEXT_DATA__.page.slice(1).split("/")[0];

    return (
      <Html lang={["en", "es", "pt"].includes(lang) ? lang : "en"}>
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