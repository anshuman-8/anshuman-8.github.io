import React from 'react';
import ProjectCard from './ProjectCard';
import {projects} from '../content/projects';
import {skills} from '../content/skills';
import Image from 'next/image';


function Details() {
  return (
    <div className='md:max-w-[630px] pt-10 md:pt-36'>
      <div className='mb-3'>
        <h1 className='text-2xl font-bold mb-2'>Projects</h1>
        <div className='grid md:grid-cols-2'>
        {projects.map((project)=>{
            return( <ProjectCard key={project.title} title={project.title} description={project.description} tags={project.tags} link={project.link} source={project.source} />)
        })}
        </div>
        
      </div> 
      <div className='mb-3'>
        <h1 className='text-2xl font-bold mb-2'>Skills</h1>
        <div className='px-5 pt-3'>
        {skills.map((skill)=>{
            return (<Image key={skill.name} src={`/images/svg${skill.image}`} height={'60px'} width={'60px'}></Image>)
        })}
        </div>
        
      </div>
    </div>
  )
}

export default Details
