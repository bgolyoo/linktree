import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link href="/css/fontawesome.css" rel="stylesheet" />
        <link href="/css/brands.css" rel="stylesheet" />
      </Head>
      <body className="bg-neutral-200">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
