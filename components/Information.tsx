import React from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineTwitter,
  AiFillMail,
  AiOutlineFile,
} from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";
import { skills } from "../details/skills";

const Contacts = () => (
  <div className="mb-5 max-w-[400px]">
    <h1 className="text-2xl font-bold mb-4">Contacts/ Social Links</h1>
    <div className="grid grid-cols-2 gap-x-3 gap-y-4">
      <a
        href="https://github.com/anshuman-8"
        className="flex flex-row items-center hover:underline"
      >
        <AiFillGithub className="mx-2" size={35} />
        <div>Github</div>
      </a>
      <a
        href="https://twitter.com/an8human"
        className="flex flex-row items-center hover:underline"
      >
        <AiOutlineTwitter className="mx-2" size={35} />
        <span>X (Twitter)</span>
      </a>
      <a
        href="https://www.linkedin.com/in/anshuman-swain-1529b2219/"
        className="flex flex-row items-center hover:underline"
      >
        <AiFillLinkedin className="mx-2" size={35} />
        <div>Linkedin</div>
      </a>
      <a
        href="mailto:anshuman8swain@gmail.com"
        className="flex flex-row items-center hover:underline"
      >
        <AiFillMail className="mx-2" size={35} />
        <div>Mail</div>
      </a>
    </div>
  </div>
);

const AboutMe = () => (
  <div className="mb-5">
    <h1 className="text-2xl font-bold mb-2">About Me</h1>
    <div className="text-gray-800 dark:text-slate-100 text-base px-3">
      <p>
        {
          "Just a enthusiast who loves dreaming up exciting new creations, all about bringing cool ideas to life. I can learn things fast and quickly adapt to various domains, from web and mobile development to computer vision and large language models. My curiosity drives me to take on exciting projects, and I'm particularly interested in research work, which I find deeply rewarding"
        }
      </p>
      <p className="py-3">
        {
          "In my free time, I enjoy listening to music, exploring philosophical texts, and staying updated on X (Twitter). I'm dedicated to fitness, regularly hitting the gym and jogging whenever possible. I'm also a huge fan of Formula 1, drawn by both the thrill of the race and the engineering behind it."
        }
      </p>
      <p className="py-3">{`I'm always eager to make a positive impact on the world and currently engaged in Medical AI research related to Endoscopy ultrasound image analysis.`}</p>
    </div>
  </div>
);

// const Skills = () => (
//   <div className="mb-5">
//     <h1 className="text-2xl font-bold mb-2">Skills</h1>
//     <div className="px-2 pt-3 pb-3">
//       {skills.map((skill) => (
//         <span key={skill.name} className=" px-2 inline hover:mb-2">
//           <Image
//             title={skill.name}
//             src={`/images/svg${skill.image}`}
//             height={40}
//             width={40}
//             alt={skill.name}
//             className="duration-100 hover:scale-105"
//           />
//         </span>
//       ))}
//     </div>
//   </div>
// );

const Information = () => (
  <div className="space-y-7 md:space-y-10 max-w-[900px]">
    <Contacts />
    <AboutMe />
    {/* <Skills /> */}
  </div>
);

export default Information;
