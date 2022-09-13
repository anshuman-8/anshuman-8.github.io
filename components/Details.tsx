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
    <div className='my-7 text-2xl font-bold hover:underline hover:text-blue-500 flex flex-row justify-start items-center'>
        <a href="https://anshuman-8.github.io/blog " className='mr-[0.2rem] hover:mr-3 duration-100'>Blogs</a>
        <svg xmlns='http://www.w3.org/2000/svg' width='26' height='26' viewBox='0 0 26 26' fill={isDark?'none':'#ffffff'} stroke='#000000' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
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
        <div className='px-2 pt-3'>
        {skills.map((skill)=>{
            return (<div key={skill.name} className='inline px-1'><Image  src={`/images/svg${skill.image}`} height={'60px'} width={'60px'} alt={skill.name} className=""></Image></div>)
        })}
        </div>
        
      </div>
    </div>
  )
}

export default Details
