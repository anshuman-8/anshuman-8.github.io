import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import SEO from "@bradgarropy/next-seo";

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
    <main className="overflow-auto">
      <SEO
        title="Blog"
        description="Hey, I'm Anshuman Swain, A CSE(AI) undergrad(2025) from India. AI enthusiast, proficient in Machine Learning, Computer Vision, and developing amazing Web and Mobile apps. Checkout my Portfolio and projects that I have made."
        keywords={["Blogs", "Anshuman's Blog", "Anshuman's personal blog"]}
        icon={"/favicon.ico"}
        themeColor={"#334155"}
        facebook={{
          image: "/og-image.png",
          url: "https://anshuman.8.vercel.app/",
          type: "website",
        }}
        twitter={{
          image: "/og-image.png",
          site: "@an8human",
          card: "summary_large_image",
        }}
      />
      <Navbar />
      <div className="md:container md:mx-auto mx-1 py-4 md:py-10 min-h-max">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 lg:mx-6 justify-center">
          {posts.map((post) => (
            <a
              key={post.slug}
              title={post.frontmatter.title}
              className="flex flex-col justify-start cursor-pointer mx-1 md:mx-5 lg:mx-7 max-w-lg rounded-lg dark:bg-[#0d171f]/80 bg-slate-200/30 hover:translate-y-[-6px] hover:shadow-xl shadow-lg duration-200 my-5 min-w-[280px]"
              href={`/blog/${post.slug}`}
            >
              <>
                <Image
                  src={`/blog-assets/${post.frontmatter?.cover_image}`}
                  className="w-[435px] h-full rounded-xl mx-auto"
                  alt={"Cover: " + post.frontmatter.title}
                  height={300}
                  width={435}
                />
                <div className="card-body  mx-4 ">
                  <div className="my-3 text-sm ">
                   
                    <span className="dark:text-slate-200 text-xs md:text-sm py-[2px] md:py-2 mx-[2px]">
                      {post.frontmatter.tags?.join(' \u00b7 ' )}
                    </span>
                  </div>
                  <h3 className="text-lg md:text-2xl font-bold my-2 text-gray-900 dark:text-gray-100">
                    {post.frontmatter.title}
                  </h3>

                  <p className="dark:text-slate-300 text-slate-700 mb-5 font-light text-xs md:text-sm max-h-[2.75rem] overflow-hidden line-clamp-2 relative">
                    {post.frontmatter.description}...
                    {/* <span className="absolute bottom-0 right-0 bg-white pr-1">...</span> */}
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

  const posts = files
    .map((filename) => {
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
    })
    .reverse();

  return {
    props: {
      posts,
    },
  };
}
