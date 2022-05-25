import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Intent Shop</title>
        {/* <link rel="manifest" href="/manifest.json" /> */}

        <meta name="description" content="Bozorboyev Javohir Portfolio Shop" />
        <link rel="icon" href="favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
