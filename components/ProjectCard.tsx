import React from 'react'


interface IProjects{
    title: string;
    description: string;
    link?: string;
    source: string,
    tags: string[];
    isDark?: boolean;
}

function ProjectCard({title,tags,description,link,source,isDark}:IProjects,) {

    // function useHorizontalScroll() {
    //     const elRef = useRef();
    //     useEffect(() => {
    //       const el = elRef.current;
    //       if (el) {
    //         const onWheel = e => {
    //           if (e.deltaY == 0) return;
    //           e.preventDefault();
    //           el.scrollTo({
    //             left: el.scrollLeft + e.deltaY,
    //             behavior: "smooth"
    //           });
    //         };
    //         el.addEventListener("wheel", onWheel);
    //         return () => el.removeEventListener("wheel", onWheel);
    //       }
    //     }, []);
    //     return elRef;
    //   }

  return (
    <div className='bg-white rounded-xl py-3 px-2 md:max-w-[300px] mx-1 my-2 shadow-2xl hover:shadow-sm dark:bg-slate-600'>
        <div className='flex flex-row justify-between'>
        <p className='text-2xl pl-2'>{title}</p>
        <a href={link} className={link===""?"text-slate-500 align-baseline text-sm cursor-default px-2":"align-baseline text-sm underline px-2"}>view</a>

        </div>
      <p className={isDark?"text-sm my-2 mx-2 text-slate-300":"text-sm my-2 mx-2 text-grey-600"}>{tags.map((tag,index)=>{return tag+(index===tags.length-1?"":", ")})}</p>
      <p className='text-base px-2 py-1'> {description} </p>
      <div className='my-2 mx-4'>
        <a href={source} className='flex flex-row hover:underline items-center'>
        <span className='hover:pr-[0.3rem] duration-100'>Source Code</span>
        <div className=''>
        <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke={!isDark?'#000000':'#ffffff'} strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
                <path d='M5 12h13M12 5l7 7-7 7' />
            </svg>
        </div>
     
        </a>
       
      </div>
    </div>
  )
}

export default ProjectCard
