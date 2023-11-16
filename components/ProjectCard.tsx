import React from "react";
import Image from "next/image";

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
    <div className="bg-white dark:text-gray-300 rounded-xl p-3 md:max-w-[430px] lg:m-3 m-1 shadow-2xl hover:shadow-sm dark:bg-slate-800">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="md:w-3/4 ">
          <Image
            src={imageSrc}
            width={180}
            height={115}
            alt="Project Image"
            className="rounded-md object-cover w-full h-full"
          />
          <div className="flex-col max-w-[150px] md:mx-auto mt-2 space-y-2">
            {source && source !== "" && (
              <a
                href={source}
                className="flex-shrink-0 block border border-slate-700 dark:border-white py-1 px-2 text-center rounded-md cursor-pointer transition-all duration-300 ease-in-out hover:bg-gray-200 dark:hover:bg-gray-600 active:bg-gray-300 dark:active:bg-gray-700"
              >
                Code
              </a>
            )}
            {link && link !== "" && (
              <a
                href={link}
                className="flex-shrink-0 block border border-slate-700 dark:border-white py-1 px-2 text-center rounded-md cursor-pointer transition-all duration-300 ease-in-out hover:bg-gray-200 dark:hover:bg-gray-600 active:bg-gray-300 dark:active:bg-gray-700"
              >
                Visit
              </a>
            )}
          </div>
        </div>
        <div className="md:w-2/3 mt-4 md:mt-0 md:ml-4">
          <p className="text-2xl">{title}</p>

          <p className="text-sm my-2 text-slate-700 dark:text-slate-300">
            {tags.map((tag, index) => {
              return tag + (index === tags.length - 1 ? "" : ", ");
            })}
          </p>
          <p className="text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
