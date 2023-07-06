import React from "react";
import Link from "next/link";
import { useRouter } from 'next/router';


const Navbar = () => {
    const router = useRouter();

    const isActive = (path:string) => {
      return router.pathname === path ? 'text-black dark:text-white underline' : 'text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white ';
    };
  
  return (
    <nav className="container mx-auto flex py-6">
      <div className="px-12 lg:px-24 ">
        <Link href="/" className="">
        <a className={`text-4xl font-bold mx-5 ${isActive('/')}`}>
            Portfolio
          </a>
        </Link>
        <Link href="/blog" className="">
        <a className={`text-4xl font-bold mx-5 ${isActive('/blog')}`}>
            Blogs
          </a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
