import '../styles/globals.css'
import Head from 'next/head';
import { useEffect,useState } from 'react';
import type { AppProps } from 'next/app'
import { FaMoon, FaSun } from "react-icons/fa";

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
        {/* <title>Anshuman</title> */}
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:image:secure_url" content="/og-image.png" />
        <meta property="og:author" content="Anshuman Swain"/>

      </Head>
      <div className={isDark ? "dark" : ""}>
      <div className=' bg-orange-50 dark:bg-[#091d36] dark:text-white min-h-screen'>

        {/* <Navbar/> */}
        <button
          className="top-7 md:top-12 fixed md:right-16 right-6 bg-slate-500/90 px-3 py-2 rounded-xl z-20 shadow-md"
          onClick={() => setIsDark(!isDark)}>
          {!isDark ? <FaSun className="icon" color="#F79B08" size={24} /> : <FaMoon className="icon" color="#F4E34F" size={24}/>}
        </button>
        <Component {...pageProps} />
      </div>
      </div>
  </>)
}

export default MyApp
