import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <meta name="theme-color" content="#101b29" media="(prefers-color-scheme: dark)" />
        <meta name="theme-color" content="#FFFBF5" media="(prefers-color-scheme: light)" />
        <meta name="author" content="Anshuman Swain" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://anshuman-8.vercel.app" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}