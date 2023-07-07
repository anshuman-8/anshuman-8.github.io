import React, { useState, useEffect } from 'react';

export default function ReadingBar() {

  useEffect(() => {
    window.addEventListener('scroll', scrollHeight);
    return () => window.removeEventListener('scroll', scrollHeight);
  });

  const [height, setHeight] = useState(1);

  // scroll function
  const scrollHeight = () => {
    var el = document.documentElement;
    var ScrollTop = el.scrollTop || document.body.scrollTop;
    var ScrollHeight = el.scrollHeight || document.body.scrollHeight;
    var percent = (ScrollTop / (ScrollHeight - el.clientHeight)) * 50;
    // store percentage in state
    setHeight(percent);
  };

  return (
    <div className='mx-auto px-10 '>
      <div className="fixed m-3 ml-13 w-1 h-1/2 bg-gray-300 rounded-xl"></div>
      <div className="fixed m-3 ml-13 w-1 h-screen bg-gradient-to-b from-cyan-800 via-sky-700 to-purple-800 rounded-xl" style={{ height: height + '%' }}></div>
    </div>
  );
}
