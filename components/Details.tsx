import React from 'react';
import ProjectCard from './ProjectCard';
import {projects} from '../details/projects';
import {skills} from '../details/skills';
import Image from 'next/image';
import Link from 'next/link'


function Details() {
  return (
    <div className='md:max-w-[630px] pt-10 md:pt-24'>
      <div className='mb-5'>
        <h1 className='text-2xl font-bold mb-2'>Projects</h1>
        <div className='grid md:grid-cols-2'>
        {projects.map((project)=>{
            return( <ProjectCard key={project.title} title={project.title} description={project.description} tags={project.tags} link={project.link} source={project.source}  />)
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
