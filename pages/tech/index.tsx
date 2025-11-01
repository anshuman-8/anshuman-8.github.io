import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Image from "next/image";
import { projects } from "../../details/projects";
import ProjectCard from "../../components/ProjectCard";
import Navbar from "../../components/Navbar";
import SEO from "@bradgarropy/next-seo";

export default function index() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-slate-900">
      <SEO
        title="Projects"
        description="Hey, I'm Anshuman Swain, A CSE(AI) undergrad(2025) from India. AI enthusiast, proficient in Machine Learning, Computer Vision, and developing amazing Web and Mobile apps. Checkout my Portfolio and projects that I have made."
        keywords={["Blogs", "Anshuman's Projects", "Anshuman's personal blog"]}
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              image={project.image}
              description={project.description}
              tags={project.tags}
              link={project.link}
              source={project.source}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
