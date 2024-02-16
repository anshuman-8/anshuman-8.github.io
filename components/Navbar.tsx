import React from "react";
import Link from "next/link";
import { useRouter } from 'next/router';


const Navbar = () => {
    const router = useRouter();

    const isActive = (path:string) => {
      return router.pathname === path ? 'text-black dark:text-white underline underline-offset-8' : 'text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white ';
    };
  
  return (
    <nav className="md:container mx-auto flex py-6 overflow-y-auto">
      <div className=" mx-auto">
        <Link href="/" className="">
        <span className={`text-2xl md:text-4xl hover:cursor-pointer font-bold mx-5 ${isActive('/')}`}>
            Portfolio
          </span>
        </Link>
        <Link href="/blog" className="">
        <span className={`text-2xl md:text-4xl hover:cursor-pointer font-bold mx-5 ${isActive('/blog')}`}>
            Blogs
          </span>
        </Link>
        <Link href="/tech" className="">
        <span className={`text-2xl md:text-4xl hover:cursor-pointer font-bold mx-5 ${isActive('/tech')}`}>
            Projects
          </span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
