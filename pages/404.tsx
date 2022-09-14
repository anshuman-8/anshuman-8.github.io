import React,{useState, useEffect} from 'react'
import Link from 'next/link'
import Head from 'next/head';

function Error404() {
    const [isDark, setIsDark] = useState(true);

    useEffect(() => {
      setIsDark(
          (window.matchMedia("(prefers-color-scheme:light)").matches
            ? false
            : true)
      );
    }, []);
    
  return (
    <div className={isDark ? "dark" : ""}>
     <div className='h-screen bg-orange-50 text-black dark:bg-slate-700 dark:text-white '>
       <Head>
      <title>404 - Anshuman Swain </title>
      <meta name="description" content="Page not found" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
      <div className='items-center h-1/2 justify-center flex flex-col'>
        <h1 className='text-7xl'>404</h1>
        <h2 className='text-4xl mb-14'>Page Not Found</h2>
        <p className='text-center underline hover:text-blue-500 my-5'><a href="https://github.com/anshuman-8">anshuman-8</a></p>
        <Link href="/" ><a className='bg-orange-100 hover:bg-orange-200 dark:hover:bg-slate-800 p-3 rounded-xl hover:underline dark:bg-slate-600'>Back to Portfolio</a></Link>
      </div>
    </div>
    </div>
    
  )
}

export default Error404;