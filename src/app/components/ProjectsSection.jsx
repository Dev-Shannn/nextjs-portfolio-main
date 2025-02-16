"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "No Projects Yet",
    description: "I haven't completed any projects yet, but stay tuned for updates!",
    image: "/images/projects/placeholder.png",
    tag: ["All"],
    gitUrl: "#",
    previewUrl: "https://www.linkedin.com/in/nishant-prakash-pandey",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" className="text-white py-6 px-4 sm:py-12 xl:px-12">
      <h2 className="text-center text-4xl font-bold mb-4 md:mb-6">My Projects</h2>

      {/* Single "All" Tag */}
      <div className="flex justify-center py-4">
        <ProjectTag isSelected={true} />
      </div>

      {/* Projects Grid */}
      <ul ref={ref} className="grid md:grid-cols-3 gap-4 md:gap-8">
        {projectsData.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
