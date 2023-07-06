import fs from "fs";
import path from "path";
import React from 'react';
import matter from "gray-matter";

const Post = ({frontmatter, content}) => {
  return (
    <div> 
      <h1>{frontmatter.title}</h1>
      <p>{frontmatter.date}</p>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  )
}

export default Post

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
  
    return {
      props: {
        frontmatter: data,
        content: content,
        // content: htmlContent,
      },
    };
  }