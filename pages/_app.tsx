import '../styles/globals.css'
import Head from 'next/head';
import { useEffect,useState } from 'react';
import type { AppProps } from 'next/app'
import SEO from "@bradgarropy/next-seo"
import { FaMoon, FaSun } from "react-icons/fa";
import Navbar from '../components/Navbar';

function MyApp({ Component, pageProps }: AppProps) {

  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    setIsDark(
        (window.matchMedia("(prefers-color-scheme:light)").matches
          ? false
          : true)
    );
  }, []);
 
  return (<>
     <Head>
        <title>Anshuman</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:image:secure_url" content="/og-image.png" />
        <meta property="og:author" content="Anshuman Swain"/>

      </Head>
      <SEO 
      title="Anshuman Swain"
      description="Hey, I'm Anshuman Swain, A CSE(AI) undergrad(2025) from India.I like to work on Web & Mobile Apps, and make applications that help people. Checkout my Portfolio and projects that I have made."
      keywords={["Anshuman","anshuman","Anshuman Swain","Anshuman's Portfolio","Developer","software developer","website","blog","portfolio","Anshuman's personal portfolio"]}
      icon={"/favicon.ico"}
      themeColor={"#334155"}
      
      facebook={{
        image: "/og-image.png",
        url: "https://anshuman.8.vercel.app/",
        type: "website",
      }}
      twitter={{
        image: "/og-image.png",
        site: "@an8human",
        card: "summary_large_image",
      }}
      />
      <div className={isDark ? "dark" : ""}>
      <div className=' bg-orange-50 dark:bg-slate-700 dark:text-white min-h-screen'>

        {/* <Navbar/> */}
        <button
          className="top-7 md:top-12 fixed md:right-16 right-6 bg-slate-500 px-3 py-2 rounded-xl z-20"
          onClick={() => setIsDark(!isDark)}>
          {!isDark ? <FaSun className="icon" color="#F79B08" size={24} /> : <FaMoon className="icon" color="#F4E34F" size={24}/>}
        </button>
        <Component {...pageProps} />
      </div>
      </div>
  </>)
}

export default MyApp
