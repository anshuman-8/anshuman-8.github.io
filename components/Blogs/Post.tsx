import { LeftArrow } from "../../public/assets/icons";
import { useState } from "react";
import BlogHead from "../../components/Blogs/BlogHead";
import Link from "next/link";

interface Props {
  frontmatter: {
    title: string;
    date?: string;
    cover_image?: string;
    category?: string[];
    description?: string;
  };
  content: string;
}

const Post = ({ frontmatter, content }: Props) => {

  const codeContent = content.replace(
    /<pre>(.*?)<\/pre>/gs,
    (match, p1) =>
      `<pre class="bg-slate-50 dark:bg-slate-700 overflow-auto">${p1.replace(
        /<code>/gs,
        '<code class="text-green-500">'
      )}</pre>`
  );
  
  return (
    <div className="bg-white dark:bg-slate-900 my-2 md:my-3 mx-2 p-6 md:py-20 md:pb-28 rounded-xl md:mx-6 md:px-48 shadow-xl min-h-screen">
      <article>
        <Link href="/blog">
          <a className="relative top-2 left-4 flex flex-row items-center space-x-2 text-lg hover:underline">
            <LeftArrow />
            <span className="">back</span>
          </a>
        </Link>

        <BlogHead frontmatter={frontmatter} />
        <main className="prose-base md:prose-xl md:prose-slate prose-code:overflow-auto prose-code:font-semibold  prose-a:underline prose-a:text-blue-600">
          <div
            dangerouslySetInnerHTML={{
              __html: content.replace(
                /<pre>/g,
                '<pre class="bg-slate-100 dark:bg-slate-800 overflow-auto shadow-inner">'
              ).replace(/<img>/g, '<img class="rounded-xl shadow-xl">'),
            }}
          />
        </main>
      </article>
    </div>
  );
};

export default Post;
