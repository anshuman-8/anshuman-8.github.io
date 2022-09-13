import React from 'react'

interface IProjects{
    title: string;
    description: string;
    link?: string;
    source: string,
    tags: string[];

}

function ProjectCard({title,tags,description,link,source}:IProjects) {
  return (
    <div className='bg-white rounded-xl py-3 px-2 min-w-[250px]'>
        <div className='flex flex-row justify-between'>
        <p className='text-2xl pl-2'>{title}</p>
        <a href={link} className='align-baseline text-sm underline px-2'>view</a>

        </div>
      <p className='text-sm my-2 mx-2 text-gray-600'>{tags.map((tag)=>{return tag+", "})}</p>
      <p className='text-base px-2'> {description} </p>
      <div className='my-2 mx-4'>
        <a href={source} className='flex flex-row hover:underline'>
        <span className='hover:pr-[0.3rem] duration-100'>Source Code</span>
        <div className=''>
        <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='#000000' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
                <path d='M5 12h13M12 5l7 7-7 7' />
            </svg>
        </div>
     
        </a>
       
      </div>
    </div>
  )
}

export default ProjectCard
