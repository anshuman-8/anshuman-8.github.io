import React from "react";
import Image from "next/image";
import ProjectCard from "./ProjectCard";
import { skills } from "../details/skills";
import { projects } from "../details/projects";

function Details() {
  return (
    <div className="md:max-w-[630px] pt-10 md:pt-18">
      <div className="mb-5">
        <h1 className="text-2xl font-bold mb-2">About Me</h1>
        <div className="text-gray-800 dark:text-slate-50 text-base">
          <p>
            {
              "I'm a young enthusiast who loves dreaming up exciting new creations, all about bringing cool ideas to life. I can learn things fast and quickly adapt to various domains, from web and mobile development to computer vision and large language models. My curiosity drives me to take on exciting projects, and I'm a general reader who explores topics ranging from philosophy to technology. In my free time, you'll find me enjoying music, delving into philosophical texts, and staying updated on X(Twitter). I'm also dedicated to my fitness, regularly going jogging and hitting the gym when time allows."
            }
          </p>
          <p className="py-3">
            {
              "I'm always eager to make a positive impact on the world and currently engaged in Medical AI research related to Endoscopy ultrasound image analysis."
            }
          </p>
        </div>
      </div>
      <div className="mb-5">
        <h1 className="text-2xl font-bold mb-2">Projects</h1>
        <div className="grid md:grid-cols-2">
          {projects.map((project) => {
            return (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                tags={project.tags}
                link={project.link}
                source={project.source}
              />
            );
          })}
        </div>
      </div>
      <div className="mb-3">
        <h1 className="text-2xl font-bold mb-2">Skills</h1>
        <div className="px-2 pt-3 pb-3">
          {skills.map((skill) => {
            return (
              <a key={skill.name} className=" px-2 inline hover:mb-2">
                <Image
                  title={skill.name}
                  src={`/images/svg${skill.image}`}
                  height={"40px"}
                  width={"40px"}
                  alt={skill.name}
                  className="duration-100 hover:scale-105"
                ></Image>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Details;
