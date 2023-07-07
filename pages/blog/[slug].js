import fs from "fs";
import path from "path";
import React from 'react';
import matter from "gray-matter";
import ReadingBar from "../../components/Blogs/ReadingBar";
import Post from "../../components/Blogs/Post";
import {remark} from 'remark'
import html from 'remark-html'
import { log } from "console";

const BlogPost = ({frontmatter, content}) => {
  return (
    <div> 
      <div className="mx-auto">
        <div className="flex flex-row p-auto dark:bg-primary-dark bg-secondary-light ">
          {/* // left */}
          <div className="hidden md:flex items-center justify-center fixed top-1/4 transform -translate-y-1/2 w-0 md:w-28 md:pb-5 md:pt-5 h-screen">
            <ReadingBar />
          </div>

          {/* right */}
          <div className=" w-full md:w-[90%] md:my-2.5 md:pl-[18vw]  mx-auto">
            <Post frontmatter={frontmatter} content={content} />
          </div>{" "}
        </div>
      </div>
    </div>
  )
}

export default BlogPost

export async function getStaticPaths() {
    const files = fs.readdirSync('content/blog');
  
    const paths = files.map((filename) => ({
      params: { slug: filename.replace('.md', '') },
    }));
  
    return {
      paths,
      fallback: false,
    };
  }
  
  export async function getStaticProps({ params }) {
    const markdownWithMetadata = fs.readFileSync(
      path.join('content/blog', params.slug + '.md'),
      'utf-8'
    );
  
    const { data, content } = matter(markdownWithMetadata);

    const contentResult = await remark().use(html).process(content)
      log(contentResult.toString())
    return {
      props: {
        frontmatter: data,
        content: contentResult.toString(),
        // content: htmlContent,
      },
    };
  }