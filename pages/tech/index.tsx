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
    <main>
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
      <div className="md:container md:mx-auto mx-1 py-4 md:py-10 min-h-max">
        <div className="grid px-5 md:px-1 lg:grid-cols-3 md:grid-cols-2 lg:mx-6 justify-center">

        {projects.map((project) => {
          return (
            <ProjectCard
              key={project.title}
              title={project.title}
              image={project.image}
              description={project.description}
              tags={project.tags}
              link={project.link}
              source={project.source}
            />
          );
        })}
        </div>
      </div>
    </main>
  );
}
