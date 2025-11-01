import React from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineTwitter,
  AiFillMail,
} from "react-icons/ai";

const Contacts = () => (
  <div className="mb-8 max-w-[400px]">
    <h1 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
      Connect With Me
    </h1>
    <div className="grid grid-cols-2 gap-6">
      <a
        href="https://github.com/anshuman-8"
        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors duration-300"
      >
        <AiFillGithub className="text-gray-800 dark:text-gray-200" size={28} />
        <div className="font-medium">Github</div>
      </a>
      <a
        href="https://twitter.com/an8human"
        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors duration-300"
      >
        <AiOutlineTwitter className="text-gray-800 dark:text-gray-200" size={28} />
        <span className="font-medium">X (Twitter)</span>
      </a>
      <a
        href="https://www.linkedin.com/in/anshuman-swain-1529b2219/"
        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors duration-300"
      >
        <AiFillLinkedin className="text-gray-800 dark:text-gray-200" size={28} />
        <div className="font-medium">LinkedIn</div>
      </a>
      <a
        href="mailto:anshuman8swain@gmail.com"
        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors duration-300"
      >
        <AiFillMail className="text-gray-800 dark:text-gray-200" size={28} />
        <div className="font-medium">Email</div>
      </a>
    </div>
  </div>
);

const AboutMe = () => (
  <div className="mb-8">
    <h1 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
      About Me
    </h1>
    <div className="text-gray-800 dark:text-gray-200 text-lg space-y-4 leading-relaxed">
      <p>
        Just a enthusiast who loves dreaming up exciting new creations, all about bringing cool ideas to life. 
        I can learn things fast and quickly adapt to various domains, from web and mobile development to computer 
        vision and large language models. My curiosity drives me to take on exciting projects, and I'm particularly 
        interested in research work, which I find deeply rewarding.
      </p>
      <p>
        In my free time, I enjoy listening to music, exploring philosophical texts, and staying updated on X (Twitter). 
        I'm dedicated to fitness, regularly hitting the gym and jogging whenever possible. I'm also a huge fan of 
        Formula 1, drawn by both the thrill of the race and the engineering behind it.
      </p>
      <p>
        I'm always eager to make a positive impact on the world and currently engaged in Medical AI research 
        related to Endoscopy ultrasound image analysis.
      </p>
    </div>
  </div>
);

const Information = () => (
  <div className="space-y-12 max-w-[900px] py-8">
    <Contacts />
    <AboutMe />
  </div>
);

export default Information;
