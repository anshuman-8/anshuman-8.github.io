import React from 'react';
import ProjectCard from './ProjectCard';
import {projects} from '../content/projects';
import {skills} from '../content/skills';
import Image from 'next/image';

interface IProps {
    isDark:boolean
}

function Details({isDark}:IProps) {
  return (
    <div className='md:max-w-[630px] pt-10 md:pt-24'>
    <div className='mt-1 md:mt-5 mb-7 text-2xl font-bold hover:underline hover:text-blue-500 flex flex-row justify-start items-center'>
        <a href="https://anshuman-8.github.io/blog " className='mr-[0.2rem] hover:mr-3 duration-100'>Blogs</a>
        <svg xmlns='http://www.w3.org/2000/svg' width='26' height='26' viewBox='0 0 26 26' fill='none' stroke={!isDark?'#000000':'#ffffff'} strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
                <path d='M5 12h13M12 5l7 7-7 7' />
            </svg>
    </div>
      <div className='mb-5'>
        <h1 className='text-2xl font-bold mb-2'>Projects</h1>
        <div className='grid md:grid-cols-2'>
        {projects.map((project)=>{
            return( <ProjectCard key={project.title} title={project.title} description={project.description} tags={project.tags} link={project.link} source={project.source} isDark={isDark} />)
        })}
        </div>
        
      </div> 
      <div className='mb-3'>
        <h1 className='text-2xl font-bold mb-2'>Skills</h1>
        <div className='px-2 pt-3 pb-3'>
        {skills.map((skill)=>{
            return (<a key={skill.name}  className=' px-2 inline hover:mb-2'><Image title={skill.name}  src={`/images/svg${skill.image}`} height={'40px'} width={'40px'} alt={skill.name} className="duration-100 hover:scale-105"></Image></a>)
        })}
        </div>
      </div>
    </div>
  )
}

export default Details
