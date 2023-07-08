import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Image from "next/image";
import Navbar from "../../components/Navbar";

interface Props {
  posts: {
    slug: string;
    frontmatter: {
      title: string;
      date?: string;
      cover_image?: string;
      tags?: string[];
      description?: string;
    };
  }[];
}

const Blog = ({ posts }: Props) => {
  return (
    <main>
      <Navbar />
      <div className="container mx-2 md:mx-5 py-4 md:py-10 min-h-max">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 lg:mx-6 justify-center">
          {posts.map((post) => (
            <a
              key={post.slug}
              title={post.frontmatter.title}
              className="flex flex-col justify-start cursor-pointer  mx-5 md:mx-10 max-w-lg border border-slate-400 rounded-xl dark:bg-slate-200/30 bg-slate-500/5 hover:scale-105 hover:shadow-xl duration-200 my-5 min-w-[250px]"
              href={`/blog/${post.slug}?title=${encodeURIComponent(
                post.frontmatter.title
              )}`}
            >
              <>
                <Image
                  src={`/blog-assets/${post.frontmatter?.cover_image}`}
                  className="w-[435px] rounded-xl mx-auto"
                  alt="Cover"
                  height={300}
                  width={435}
                />
                <div className="card-body  mx-4 ">
                  <h3 className="text-2xl font-bold my-2">
                    {post.frontmatter.title}
                  </h3>
                  <h6 className="space-x-3 my-3 text-sm ">
                    {post.frontmatter.tags?.map((tag) => {
                      return (
                        <span
                          key={tag}
                          className="bg-slate-600 text-slate-200 rounded-xl text-xs md:text-sm px-1 md:px-3 py-[2px] md:py-2 mx-[2px]"
                        >
                          {tag}
                        </span>
                      );
                    })}
                  </h6>
                  <p className=" dark:text-slate-100 text-slate-700 mb-5 font-light text-base">
                    {post.frontmatter.description}
                  </p>
                </div>
              </>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Blog;

export async function getStaticProps() {
  const files = fs.readdirSync("content/blog");

  const posts = files.map((filename) => {
    const slug = filename.replace(".md", "");
    const markdownWithMetadata = fs.readFileSync(
      path.join("content/blog", filename),
      "utf-8"
    );

    const { data } = matter(markdownWithMetadata);

    return {
      slug,
      frontmatter: data,
    };
  });

  return {
    props: {
      posts,
    },
  };
}
