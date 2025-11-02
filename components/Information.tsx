import React from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineTwitter,
  AiFillMail,
} from "react-icons/ai";

const Contacts = () => (
  <div className="mb-8 max-w-[400px]">
    <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
      Connect With Me
    </h2>
    <div className="grid grid-cols-2 gap-6">
      <a
        href="https://github.com/anshuman-8"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 
                 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 
                 focus:ring-offset-2 dark:focus:ring-offset-slate-900"
        aria-label="Visit my GitHub profile"
      >
        <AiFillGithub className="text-gray-800 dark:text-gray-200" size={28} />
        <span className="font-medium text-gray-800 dark:text-gray-200">GitHub</span>
      </a>
      <a
        href="https://twitter.com/an8human"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 
                 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 
                 focus:ring-offset-2 dark:focus:ring-offset-slate-900"
        aria-label="Visit my X (Twitter) profile"
      >
        <AiOutlineTwitter className="text-gray-800 dark:text-gray-200" size={28} />
        <span className="font-medium text-gray-800 dark:text-gray-200">X (Twitter)</span>
      </a>
      <a
        href="https://www.linkedin.com/in/anshuman-swain-1529b2219/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 
                 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 
                 focus:ring-offset-2 dark:focus:ring-offset-slate-900"
        aria-label="Visit my LinkedIn profile"
      >
        <AiFillLinkedin className="text-gray-800 dark:text-gray-200" size={28} />
        <span className="font-medium text-gray-800 dark:text-gray-200">LinkedIn</span>
      </a>
      <a
        href="mailto:anshuman8swain@gmail.com"
        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 
                 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 
                 focus:ring-offset-2 dark:focus:ring-offset-slate-900"
        aria-label="Send me an email"
      >
        <AiFillMail className="text-gray-800 dark:text-gray-200" size={28} />
        <span className="font-medium text-gray-800 dark:text-gray-200">Email</span>
      </a>
    </div>
  </div>
);

const AboutMe = () => (
  <div className="mb-8">
    <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
      About Me
    </h2>
    <div className="text-gray-800 dark:text-gray-200 text-lg space-y-4 leading-relaxed">
      <p>
        I&apos;m an enthusiastic creator passionate about bringing innovative ideas to life through technology. 
        My ability to quickly learn and adapt allows me to work across diverse domains—from web and mobile 
        development to computer vision and large language models. I&apos;m particularly drawn to challenging 
        research projects and find great satisfaction in pushing the boundaries of what&apos;s possible with AI.
      </p>
      <p>
        When I&apos;m not coding, you&apos;ll find me listening to music, diving into philosophical texts, or keeping 
        up with the latest tech discussions on X (Twitter). I maintain a dedicated fitness routine, regularly 
        hitting the gym and going for runs. I&apos;m also an avid Formula 1 fan, captivated by both the high-speed 
        racing and the cutting-edge engineering that makes it all possible.
      </p>
      <p>
        I&apos;m driven by a desire to make meaningful contributions to the world through technology. Currently, 
        I&apos;m deeply engaged in Medical AI research, focusing on endoscopy ultrasound image analysis to improve 
        healthcare outcomes.
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
