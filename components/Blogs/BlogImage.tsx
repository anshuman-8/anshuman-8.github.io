import React, { useState } from 'react';
import Image from 'next/image';

interface BlogImageProps {
  src: string;
  alt: string;
  caption?: string;
}

const BlogImage: React.FC<BlogImageProps> = ({ src, alt, caption }) => {
  const [isZoomed, setIsZoomed] = useState(false);
  const [error, setError] = useState(false);

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  // Clean up the src path
  const cleanSrc = () => {
    // If it's an absolute URL, return as is
    if (src.startsWith('http')) return src;
    
    // Remove any leading /blog-assets/ or blog-assets/ and any leading slashes
    const cleanPath = src.replace(/^(\/)?blog-assets\//, '').replace(/^\/+/, '');
    
    // Always prepend /blog-assets/
    return `/blog-assets/${cleanPath}`;
  };

  const imageSrc = cleanSrc();

  if (error) {
    console.error(`Failed to load image: ${imageSrc}`);
    return null;
  }

  return (
    <figure className="my-8">
      <div 
        className={`relative overflow-hidden rounded-lg cursor-pointer ${
          isZoomed ? 'fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4' : ''
        }`}
        onClick={toggleZoom}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleZoom();
          }
        }}
        aria-label={isZoomed ? 'Close zoomed image' : `Zoom ${alt || 'image'}`}
      >
        <div className={`relative ${isZoomed ? 'w-full h-full' : 'aspect-[16/9]'}`}>
          <Image
            src={imageSrc}
            alt={alt}
            layout={isZoomed ? "fill" : "fill"}
            objectFit="contain"
            className={`rounded-lg ${
              !isZoomed ? 'hover:scale-105 transition-transform duration-300' : ''
            }`}
            quality={isZoomed ? 100 : 75}
            priority={isZoomed}
            onError={() => setError(true)}
          />
        </div>
        {isZoomed && (
          <button
            className="absolute top-4 right-4 z-10 text-white text-sm px-4 py-2 rounded-lg 
                     bg-gray-800/50 hover:bg-gray-800/80 transition-colors duration-200
                     focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
            onClick={(e) => {
              e.stopPropagation();
              setIsZoomed(false);
            }}
            aria-label="Close zoomed image"
          >
            Close
          </button>
        )}
      </div>
      {caption && (
        <figcaption className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};

export default BlogImage; 