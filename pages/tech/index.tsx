import React from "react";
import Head from "next/head";
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
        title="AI, Medical AI & Computer Vision Projects | Anshuman Swain"
        description="Explore my portfolio of AI, Medical AI, and Computer Vision projects. Including Medical AI research tools, Computer Vision models, image recognition systems, LLM-powered applications, and more. Specializing in Medical Imaging AI and Endoscopy analysis."
        keywords={[
          "AI Projects",
          "Medical AI Projects",
          "Computer Vision Projects",
          "Medical Imaging AI",
          "Computer Vision Engineer",
          "Medical AI Researcher",
          "Image Recognition",
          "Deep Learning Projects",
          "Machine Learning Projects",
          "Endoscopy AI",
          "Medical Image Analysis",
          "Anshuman Swain",
          "AI Portfolio",
          "Computer Vision Portfolio"
        ]}
        icon={"/favicon.ico"}
        themeColor={"#101b29"}
        facebook={{
          image: "https://answain.com/og-image.png",
          url: "https://answain.com/tech",
          type: "website",
        }}
        twitter={{
          image: "https://answain.com/og-image.png",
          site: "@an8human",
          card: "summary_large_image",
        }}
      />
      <Head>
        <link rel="canonical" href="https://answain.com/tech" />
      </Head>
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
