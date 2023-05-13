import '../styles/globals.css'
import Head from 'next/head';
import type { AppProps } from 'next/app'
import SEO from "@bradgarropy/next-seo"

function MyApp({ Component, pageProps }: AppProps) {
 
  return (<>
     <Head>
        <title>Anshuman</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Primary Meta Tags */}
        {/* <title>Anshuman Swain</title>
        <meta name="title" content="Anshuman Swain" />
        <meta
          name="description"
          content="Hey, I'm Anshuman Swain, A CSE(AI) undergrad(2025) from India.I like to work on Web & Mobile Apps, and make applications that help people. Checkout my Portfolio and projects that I have made."
        /> */}

        {/* Open Graph / Facebook */}
        {/* <meta property="og:type" content="website" />
        <meta property="og:url" content="https://anshuman.8.github.io" />
        <meta property="og:image:width" content="400" /> 
        <meta property="og:image:height" content="300" />
        <meta property="og:title" content="Anshuman's Portfolio" />
        <meta property="og:title:secure_url" content="Anshuman's Portfolio" />
        <meta
          property="og:description"
          content="Hey, I'm Anshuman Swain, A CSE(AI) undergrad(2025) from India.I like to work on Web & Mobile Apps, and make applications that help people. Checkout my Portfolio and projects that I have made."
        />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:image:secure_url" content="/og-image.png" /> */}

        {/* Twitter */}
        {/* <meta property="twitter:card" content="summary" />
        <meta property="twitter:creator:id" content="@Anshuman_8_" />
        <meta property="twitter:title" content="Anshuman's Portfolio" />
        <meta property="twitter:image" content="https://ibb.co/mG3Dfh8" />
        <meta property="twitter:description" content="Hey, I'm Anshuman Swain, A CSE(AI) undergrad(2025) from ,India.I like to work on Web & Mobile Apps, and make applications that help people. Checkout my Portfolio and projects that I have made." />
        <link rel="apple-touch-icon" href="/favicon.png" /> */}

      </Head>
      <SEO 
      title="Anshuman's Portfolio"
      description="Hey, I'm Anshuman Swain, A CSE(AI) undergrad(2025) from India.I like to work on Web & Mobile Apps, and make applications that help people. Checkout my Portfolio and projects that I have made."
      keywords={["Anshuman","Anshuman Swain","Anshuman's Portfolio","Developer","software developer","website","blog","portfolio","Anshuman's personal portfolio"]}
      icon={"/favicon.ico"}
      themeColor={"#334155"}
      facebook={{
        image: "/og-image.png",
        url: "https://anshuman.8.github.io",
        type: "website",
      }}
      twitter={{
        image: "/og-image.png",
        site: "@Anshuman_8_",
        card: "summary_large_image",
      }}
      />
   <Component {...pageProps} />
  </>)
}

export default MyApp
