import type { NextPage } from 'next'
import { useEffect,useState } from 'react';
import Profile from '../components/Profile';
import Details from '../components/Details';


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
        className="my-10 fixed right-10 mx-20"
        onClick={() => setIsDark(!isDark)}>
        toggle
      </button>

      <main className="bg-orange-50 dark:bg-slate-700 min-h-screen ">
        <div className='md:container md:mx-auto px-10 lg:px-20'>
          <div className='lg:flex lg:flex-row justify-center'>
            <Profile/>
            <Details/>
          </div>
        </div>
      </main>

      <footer></footer>
    </div>
  );
}

export default Home
