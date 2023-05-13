import type { NextPage } from 'next'
import { useEffect,useState } from 'react';
import Profile from '../components/Profile';
import Details from '../components/Details';
import Image from 'next/image';
import { FaMoon, FaSun } from "react-icons/fa";
import HeroBG from "../public/hero-spiro.svg"

const Home: NextPage = () => {
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
      <button
        className="top-5 md:top-12 fixed md:right-16 right-4 "
        onClick={() => setIsDark(!isDark)}>
        {!isDark ? <FaSun className="icon" color="#F79B08" size={24} /> : <FaMoon className="icon" color="#F4E34F" size={24}/>}
      </button>

      <main className="bg-orange-50 dark:bg-slate-700 min-h-screen dark:text-white">
        <div className='md:container md:mx-auto px-10 lg:px-20'>
          <div className='lg:flex lg:flex-row justify-center'>
            <Profile isDark={isDark}/>
            <Details isDark={isDark}/>
          </div>
        </div>
      </main>

      <footer></footer>
    </div>
  );
}

export default Home
