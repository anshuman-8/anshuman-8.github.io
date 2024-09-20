import React from "react";
import Image from "next/image";
import Link from "next/link";
import { skills } from "../details/skills";

function Details() {
  return (
    <div className="md:max-w-[630px] pt-10 md:pt-18">
      <div className="mb-5">
        <h1 className="text-2xl font-bold mb-2">About Me</h1>
        <div className="text-gray-800 dark:text-slate-50 text-base">
          <p>
            {
              "Just a enthusiast who loves dreaming up exciting new creations, all about bringing cool ideas to life. I can learn things fast and quickly adapt to various domains, from web and mobile development to computer vision and large language models. My curiosity drives me to take on exciting projects, and I'm particularly interested in research work, which I find deeply rewarding"}
              </p>
              <p>{
              "In my free time, I enjoy listening to music, exploring philosophical texts, and staying updated on X (Twitter). I'm dedicated to fitness, regularly hitting the gym and jogging whenever possible. I'm also a huge fan of Formula 1, drawn by both the thrill of the race and the engineering behind it."
            }
          </p>
          <p className="py-3">
            {
              "I'm always eager to make a positive impact on the world and currently engaged in Medical AI research related to Endoscopy ultrasound image analysis."
            }
          </p>
        </div>
      </div>
     
      <div className="mb-3">
        <h1 className="text-2xl font-bold mb-2">Skills</h1>
        <div className="px-2 pt-3 pb-3">
          {skills.map((skill) => {
            return (
              <div key={skill.name} className=" px-2 inline hover:mb-2">
                <Image
                  title={skill.name}
                  src={`/images/svg${skill.image}`}
                  height={40}
                  width={40}
                  alt={skill.name}
                  className="duration-100 hover:scale-105"
                ></Image>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Details;
