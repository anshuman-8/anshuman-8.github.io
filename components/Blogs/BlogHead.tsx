import React from "react";
import { TagIcon, CalenderIcon } from "../../public/assets/icons";

interface FrontmatterProps {
  frontmatter: {
    title: string;
    date?: string;
    cover_image?: string;
    tags?: string[];
    description?: string;
  };
}

export default function BlogHead({ frontmatter }: FrontmatterProps) {
  return (
    <header>
      <div className="my-5 flex-col">
        <div className="prose-base text-base md:text-xl lg:text-2xl text-center mt-8 text-gray-800 dark:text-gray-50 mb-14 leading-relaxed">
          <h1>{frontmatter.title}</h1>
        </div>

        <div className="flex flex-row my-5 align-middle">
          <div>
            <TagIcon className={"fill-blue-700 dark:fill-blue-400 h-6 w-6"} />
          </div>
          <div className="ml-3">
            {frontmatter.tags?.map((tag) => {
              return (
                <span
                  key={tag}
                  className="bg-slate-600 text-slate-200 rounded-xl text-sm px-2 md:px-3 py-1 md:py-2 mx-1"
                >
                  {tag}
                </span>
              );
            })}
          </div>
        </div>

        <div className="flex flex-row my-5 mb-8">
          <div className="">
            <CalenderIcon />
          </div>
          <div className="ml-4 font-normal text-lg">{frontmatter.date}</div>
        </div>

        <img
          src={`/blog-assets/${frontmatter.cover_image}`}
          alt="post-cover"
          className="mb-10 shadow-2xl rounded-xl w-fit-content mx-auto "
        />
      </div>
    </header>
  );
}
