import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import SEO from "@bradgarropy/next-seo";

interface Props {
  posts: {
    slug: string;
    frontmatter: {
      title: string;
      date?: string;
      cover_image?: string;
      category?: string[];
      description?: string;
    };
  }[];
}

const Blog: React.FC<Props> = ({ posts }) => {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <SEO
        title="Blog | Anshuman Swain"
        description="Technical blog posts about AI, Machine Learning, Web Development, and more."
        keywords={["Blog", "Technical Writing", "AI", "Machine Learning", "Web Development"]}
        icon="/favicon.ico"
        twitter={{
          image: "/og-image.png",
          site: "@an8human",
          card: "summary_large_image",
        }}
      />
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Blog Posts
        </h1>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 max-w-6xl mx-auto">
          {posts.map((post) => (
            <Link 
              href={`/blog/${post.slug}`} 
              key={post.slug}
              className="group no-underline"
            >
              <article className="h-full overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-lg 
                                hover:shadow-xl transition-shadow duration-300">
                <div className="relative w-full h-48 overflow-hidden bg-gray-100 dark:bg-gray-700">
                  {post.frontmatter.cover_image ? (
                    <Image
                      src={`/blog-assets/${post.frontmatter.cover_image}`}
                      alt={post.frontmatter.title}
                      width={800}
                      height={400}
                      style={{ objectFit: 'cover' }}
                      className="group-hover:scale-105 transition-transform duration-300"
                      priority
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-gray-400 dark:text-gray-500">No cover image</span>
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  {post.frontmatter.category && (
                    <div className="flex flex-wrap gap-2 mb-3">
                      {post.frontmatter.category.map((cat) => (
                        <span
                          key={cat}
                          className="px-2 py-1 text-xs rounded-full bg-blue-100 dark:bg-blue-900/30 
                                   text-blue-800 dark:text-blue-200"
                        >
                          {cat}
                        </span>
                      ))}
                    </div>
                  )}
                  
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 
                               group-hover:text-blue-600 dark:group-hover:text-blue-400 
                               transition-colors duration-200 line-clamp-2">
                    {post.frontmatter.title}
                  </h2>
                  
                  {post.frontmatter.description && (
                    <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-2 mb-4">
                      {post.frontmatter.description}
                    </p>
                  )}
                  
                  {post.frontmatter.date && (
                    <time className="block text-sm text-gray-500 dark:text-gray-400">
                      {new Date(post.frontmatter.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </time>
                  )}
                </div>
              </article>
            </Link>
          ))}
        </div>
      </main>
    </div>
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

      // Normalize cover_image path
      if (data.cover_image) {
        // Remove any leading /blog-assets/ or blog-assets/ and any leading slashes
        data.cover_image = data.cover_image.replace(/^(\/)?blog-assets\//, '').replace(/^\/+/, '');
      }

      return {
        slug,
        frontmatter: data,
      };
    })
    .sort((a, b) => {
      const dateA = new Date(a.frontmatter.date || '');
      const dateB = new Date(b.frontmatter.date || '');
      return dateB.getTime() - dateA.getTime();
    });

  return {
    props: {
      posts,
    },
  };
}
