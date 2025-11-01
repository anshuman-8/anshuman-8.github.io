import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import BlogHead from './BlogHead';
import CodeBlock from './CodeBlock';
import BlogImage from './BlogImage';

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

const Post: React.FC<Props> = ({ frontmatter, content }) => {
  // Process content to wrap code blocks with CodeBlock component
  const processContent = () => {
    let processedContent = content;

    // Replace code blocks
    processedContent = processedContent.replace(
      /<pre><code class="language-(\w+)">([\s\S]*?)<\/code><\/pre>/g,
      (_, lang, code) => `<div class="code-block" data-language="${lang}">${code}</div>`
    );

    // Replace markdown images
    processedContent = processedContent.replace(
      /!\[(.*?)\]\((.*?)\)/g,
      (_, alt, src) => {
        // Clean up the src path
        src = src.replace(/^\/+/, '').replace(/^blog-assets\//, '');
        return `<div class="blog-image" data-src="${src}" data-alt="${alt || ''}"></div>`;
      }
    );

    // Replace HTML img tags
    processedContent = processedContent.replace(
      /<img.*?src="(.*?)".*?alt="(.*?)".*?>/g,
      (_, src, alt) => {
        // Clean up the src path
        src = src.replace(/^\/+/, '').replace(/^blog-assets\//, '');
        return `<div class="blog-image" data-src="${src}" data-alt="${alt || ''}"></div>`;
      }
    );

    return processedContent;
  };

  useEffect(() => {
    const container = document.querySelector('.blog-content');
    if (!container) return;

    // Replace code blocks with CodeBlock component
    container.querySelectorAll('.code-block').forEach((block) => {
      const language = block.getAttribute('data-language') || 'text';
      const code = block.innerHTML;
      const wrapper = document.createElement('div');
      const root = createRoot(wrapper);
      root.render(<CodeBlock code={code} language={language} />);
      block.parentNode?.replaceChild(wrapper, block);
    });

    // Replace images with BlogImage component
    container.querySelectorAll('.blog-image').forEach((img) => {
      const src = img.getAttribute('data-src') || '';
      const alt = img.getAttribute('data-alt') || '';
      const wrapper = document.createElement('div');
      const root = createRoot(wrapper);
      root.render(<BlogImage src={src} alt={alt} />);
      img.parentNode?.replaceChild(wrapper, img);
    });
  }, [content]);

  return (
    <article className="max-w-3xl mx-auto">
      <BlogHead frontmatter={frontmatter} />
      
      <div className="prose prose-lg dark:prose-invert mx-auto mt-8">
        <div
          className="blog-content"
          dangerouslySetInnerHTML={{ __html: processContent() }}
        />
      </div>
    </article>
  );
};

export default Post;
