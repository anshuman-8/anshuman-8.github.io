import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { remark } from 'remark';
import html from 'remark-html';
import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';
import SEO from '@bradgarropy/next-seo';
import LoadingBar from 'react-top-loading-bar';
import Post from '../../components/Blogs/Post';
import Navbar from '../../components/Navbar';

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

const BlogPost: React.FC<Props> = ({ frontmatter, content }) => {
  const [progress, setProgress] = useState(2);

  useEffect(() => {
    const scrollHeight = () => {
      const el = document.documentElement;
      const ScrollTop = el.scrollTop || document.body.scrollTop;
      const ScrollHeight = el.scrollHeight || document.body.scrollHeight;
      const percent = (ScrollTop / (ScrollHeight - el.clientHeight)) * 100;
      setProgress(percent);
    };

    window.addEventListener('scroll', scrollHeight);
    return () => window.removeEventListener('scroll', scrollHeight);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <SEO
        title={frontmatter.title}
        description={frontmatter.description}
        icon="/favicon.ico"
        keywords={frontmatter.category}
        twitter={{
          image: `/blog-assets/${frontmatter.cover_image}`,
          card: 'summary_large_image',
          site: '@an8human',
        }}
      />
      <Head>
        <title>{frontmatter.title}</title>
        <meta name="description" content={frontmatter.description} />
        <meta name="keywords" content={frontmatter.category?.join(',')} />
        <meta name="author" content="Anshuman Swain" />
        <meta property="og:title" content={frontmatter.title} />
        <meta property="og:description" content={frontmatter.description} />
        <meta property="og:image" content={`/blog-assets/${frontmatter.cover_image}`} />
        <meta property="og:type" content="article" />
      </Head>

      <Navbar />
      
      <LoadingBar 
        color="#60a5fa" 
        progress={progress} 
        height={4} 
        onLoaderFinished={() => setProgress(0)}
      />
      
      <main className="container mx-auto px-4 py-8">
        <Post frontmatter={frontmatter} content={content} />
      </main>
    </div>
  );
};

export default BlogPost;

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

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const markdownWithMetadata = fs.readFileSync(
    path.join('content/blog', params.slug + '.md'),
    'utf-8'
  );

  const { data, content } = matter(markdownWithMetadata);
  const processedContent = await remark()
    .use(html)
    .process(content);

  return {
    props: {
      frontmatter: data,
      content: processedContent.toString(),
    },
  };
}