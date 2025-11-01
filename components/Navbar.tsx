import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from 'next/router';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string) => {
    return router.pathname === path 
      ? 'text-black dark:text-white border-b-2 border-gray-800 dark:border-white' 
      : 'text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white';
  };

  const navItems = [
    { path: '/', label: 'Portfolio' },
    { path: '/blog', label: 'Blogs' },
    { path: '/tech', label: 'Projects' }
  ];

  return (
    <nav className="relative z-10 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-center space-x-12">
          {navItems.map((item) => (
            <Link 
              key={item.path} 
              href={item.path} 
              className={`${isActive(item.path)} text-xl font-medium transition-all duration-200 py-1`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-md text-gray-700 dark:text-gray-300 
                     hover:text-black dark:hover:text-white focus:outline-none 
                     focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <HiX className="h-6 w-6" />
            ) : (
              <HiMenu className="h-6 w-6" />
            )}
          </button>

          {isMenuOpen && (
            <div 
              className="absolute top-16 left-0 right-0 bg-white dark:bg-slate-900 py-2 px-4 shadow-lg rounded-b-lg"
              role="menu"
              aria-label="Navigation menu"
            >
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`${isActive(item.path)} block py-2 text-lg font-medium transition-all duration-200 
                           focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-inset`}
                  onClick={() => setIsMenuOpen(false)}
                  role="menuitem"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
