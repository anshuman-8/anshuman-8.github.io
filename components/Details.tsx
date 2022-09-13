import React from 'react';
import ProjectCard from './ProjectCard';
import {projects} from '../content/projects';
import {skills} from '../content/skills';
import Image from 'next/image';


function Details() {
  return (
    <div className='max-w-[310px] pt-10'>
      <div>
        <h1 className='text-2xl font-bold'>Projects</h1>
        {projects.map((project)=>{
            return( <ProjectCard key={project.title} title={project.title} description={project.description} tags={project.tags} link={project.link} source={project.source} />)
        })}
      </div> 
      <div>
        <h1 className='text-2xl font-bold'>Skills</h1>
        {skills.map((skill)=>{
            return (<Image key={skill.name} src={`/images/svg${skill.image}`} height={'60px'} width={'60px'}></Image>)
        })}
      </div>
    </div>
  )
}

export default Details
