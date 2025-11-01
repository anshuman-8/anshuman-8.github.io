import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import SEO from '@bradgarropy/next-seo';
import Navbar from '../components/Navbar';

function Error404() {
  return (
    <>
      <SEO
        title="404 - Page Not Found | Anshuman Swain"
        description="The page you're looking for doesn't exist."
        icon="/favicon.ico"
      />
      <Head>
        <meta name="robots" content="noindex, follow" />
      </Head>
      <Navbar />
      <div className='min-h-screen bg-[#FFFBF5] dark:bg-[#101b29] dark:text-white flex items-center justify-center'>
        <div className='text-center px-4'>
          <h1 className='text-8xl md:text-9xl font-bold mb-4 bg-gradient-to-r from-orange-500 to-pink-500 text-transparent bg-clip-text'>
            404
          </h1>
          <h2 className='text-3xl md:text-4xl font-semibold mb-8 text-gray-900 dark:text-white'>
            Page Not Found
          </h2>
          <p className='text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto'>
            The page you're looking for doesn't exist or has been moved. 
            Let's get you back on track.
          </p>
          <div className='space-y-4'>
            <Link 
              href="/"
              className='inline-block bg-orange-100 hover:bg-orange-200 dark:bg-slate-800 dark:hover:bg-slate-700 
                       px-6 py-3 rounded-xl transition-colors duration-200 font-medium 
                       text-gray-800 dark:text-slate-200 shadow-lg hover:shadow-xl'
            >
              Back to Portfolio
            </Link>
            <div className='pt-4'>
              <a 
                href="https://github.com/anshuman-8" 
                target="_blank"
                rel="noopener noreferrer"
                className='text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 
                         underline transition-colors duration-200'
              >
                Check out my GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Error404;