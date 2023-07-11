import {useState, useEffect} from 'react'

import fs from "fs";
import path from "path";
import React from 'react';
import Head from 'next/head'
import {remark} from 'remark'
import html from 'remark-html'
import matter from "gray-matter";
import LoadingBar from 'react-top-loading-bar'
import Post from "../../components/Blogs/Post";

interface Props {
  frontmatter: {
    title: string;
    date?: string;
    cover_image?: string;
    tags?: string[];
    description?: string;
  }
  content: string
}

const BlogPost = ({frontmatter, content}:Props) => {

  const [progress, setProgress] = useState(2)

  useEffect(() => {
    window.addEventListener('scroll', scrollHeight);
    return () => window.removeEventListener('scroll', scrollHeight);
  });

  const scrollHeight = () => {
    var el = document.documentElement;
    var ScrollTop = el.scrollTop || document.body.scrollTop;
    var ScrollHeight = el.scrollHeight || document.body.scrollHeight;
    var percent = (ScrollTop / (ScrollHeight - el.clientHeight)) * 100;
    // store percentage in state
    setProgress(percent);
  };

  return (
    <div> 
      <Head>
        <title>{frontmatter.title}</title>
        <meta name="description" content={frontmatter.description} />
        <meta name="keywords" content={frontmatter.tags?.join(",")} />
        <meta name="author" content="Anshuman Swain" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className="mx-auto">
        <div className="flex flex-row p-auto dark:bg-primary-dark bg-secondary-light ">
          <LoadingBar color="#60a5fa" progress={progress} height={4} onLoaderFinished={()=>setProgress(100)}/>
          <div className=" w-full max-w-6xl md:my-2.5  mx-auto">
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
  
  export async function getStaticProps({ params }:any) {
    const markdownWithMetadata = fs.readFileSync(
      path.join('content/blog', params.slug + '.md'),
      'utf-8'
    );
  
    const { data, content } = matter(markdownWithMetadata);

    const contentResult = await remark().use(html).process(content)
    return {
      props: {
        frontmatter: data,
        content: contentResult.toString(),
        // content: htmlContent,
      },
    };
  }