import Document, { Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <meta charset="UTF-8" />
          <meta
            name="description"
            content="A site for my programing portfolio"
          />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <link type="text/css" rel="stylesheet" href="#" />
          <link
            href="https://fonts.googleapis.com/css?family=Roboto"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
        <style global jsx>
          {`
            body {
              font-family: "Roboto", sans-serif;
            }
          `}
        </style>
      </html>
    );
  }
}

export default MyDocument;
