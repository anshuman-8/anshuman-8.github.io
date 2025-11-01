import React from 'react';
import Image from 'next/image';
import { format } from 'date-fns';

interface BlogHeadProps {
  frontmatter: {
    title: string;
    date?: string;
    cover_image?: string;
    category?: string[];
    description?: string;
  };
}

const BlogHead: React.FC<BlogHeadProps> = ({ frontmatter }) => {
  return (
    <header className="mb-12">
      {frontmatter.cover_image && (
        <div className="relative aspect-[21/9] mb-8 rounded-lg overflow-hidden">
          <Image
            src={`/blog-assets/${frontmatter.cover_image}`}
            alt={frontmatter.title}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-500 hover:scale-105"
            priority
          />
        </div>
      )}

      <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
        {frontmatter.title}
      </h1>

      {frontmatter.description && (
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
          {frontmatter.description}
        </p>
      )}

      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
        {frontmatter.date && (
          <time dateTime={frontmatter.date}>
            {format(new Date(frontmatter.date), 'MMMM d, yyyy')}
          </time>
        )}

        {frontmatter.category && frontmatter.category.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {frontmatter.category.map((cat) => (
              <span
                key={cat}
                className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 
                         text-gray-700 dark:text-gray-300"
              >
                {cat}
              </span>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default BlogHead;
