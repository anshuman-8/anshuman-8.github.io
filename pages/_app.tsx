import '../styles/globals.css'
import Head from 'next/head';
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
 
  return (<>
     <Head>
        <title>Anshuman</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Primary Meta Tags */}
        <title>Anshuman Swain</title>
        <meta name="title" content="Anshuman Swain" />
        <meta
          name="description"
          content="I am a CSE AI undergrad at Amrita Vishwa Vidhyapeetham, Kerala, batch of 2024.I like to work with TS, JS and it's various frameworks. Python is my 2nd language of choice.I have built many projects on AI-ML.This website shows my contact details, past experience along with some of the projects that I have worked on."
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://pritish.github.io" />
        <meta property="og:title" content="Anshuman's Portfolio" />
        <meta
          property="og:description"
          content="I am a CSE undergrad at Galgotias, Uttar Pradesh, batch of 2024.I like to work with TS, JS and it's various frameworks. Python is my 2nd language of choice.I have built many projects on AI-ML.This website shows my contact details, past experience along with some of the projects that I have worked on."
        />
        <meta property="og:image" content="/og-image.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary" />
        <link rel="apple-touch-icon" href="/logo192.png" />
        {/* <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        /> */}
      </Head>
   <Component {...pageProps} />
  </>)
}

export default MyApp
