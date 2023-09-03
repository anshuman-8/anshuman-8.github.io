import { Html, Head, Main, NextScript } from "next/document";
import Script from 'next/script';

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon.png"></link>
        <meta name="theme-color" content="#fff" />
      </Head>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-Y7X62DYQJS"></Script>
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());                   
            gtag('config', 'G-Y7X62DYQJS');
          `}
        </Script>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}