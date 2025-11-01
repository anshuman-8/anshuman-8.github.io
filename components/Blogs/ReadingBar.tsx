import React, { useState, useEffect } from 'react';

export default function ReadingBar() {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const scrollHeight = () => {
      const el = document.documentElement;
      const scrollTop = el.scrollTop || document.body.scrollTop;
      const scrollHeight = el.scrollHeight || document.body.scrollHeight;
      const percent = (scrollTop / (scrollHeight - el.clientHeight)) * 100;
      
      // Use requestAnimationFrame for smooth animation
      requestAnimationFrame(() => {
        setHeight(Math.min(100, Math.max(0, percent)));
      });
    };

    window.addEventListener('scroll', scrollHeight);
    return () => window.removeEventListener('scroll', scrollHeight);
  }, []);

  return (
    <div className="fixed left-0 top-0 z-50 w-full h-1 bg-gray-200 dark:bg-slate-800">
      <div 
        className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-150 ease-out"
        style={{ 
          width: `${height}%`,
          boxShadow: `0 0 10px ${height > 0 ? 'rgba(147, 51, 234, 0.5)' : 'transparent'}`
        }}
      />
    </div>
  );
}
