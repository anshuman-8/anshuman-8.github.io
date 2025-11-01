import React from "react";
import Image from "next/image";
import { FiGithub, FiExternalLink } from "react-icons/fi";

interface IProjects {
  title: string;
  description: string;
  link?: string;
  source: string;
  image?: string;
  tags: string[];
}

function ProjectCard({
  title,
  tags,
  image,
  description,
  link,
  source,
}: IProjects) {
  const defaultImage = "/projects/github-default.png";
  const imageSrc = image ? image : defaultImage;

  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl 
                    transition-all duration-300 w-full max-w-md mx-auto">
      <div className="relative h-48">
        <Image
          src={imageSrc}
          alt={`${title} preview`}
          className="object-cover"
          layout="fill"
          objectFit="cover"
          loading="lazy"
        />
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            {title}
          </h3>
          <div className="flex space-x-3">
            {source && (
              <a
                href={source}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white 
                         transition-colors duration-200"
                title="View Source"
              >
                <FiGithub className="w-5 h-5" />
              </a>
            )}
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white 
                         transition-colors duration-200"
                title="Visit Project"
              >
                <FiExternalLink className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>

        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
          {description}
        </p>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-slate-700 text-gray-600 
                       dark:text-gray-300 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
