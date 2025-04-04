"use client";
import React, { useState, useRef } from "react";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

// Empty projects data
const projectsData = []; // No projects added yet

const ProjectCard = ({ title, description, imgUrl, gitUrl, previewUrl }) => {
  return (
    <div className="project-card bg-gray-800 p-6 rounded-lg">
      <img src={imgUrl} alt={title} className="w-full h-48 object-cover rounded-lg mb-4" />
      <h3 className="text-xl font-bold text-white">{title}</h3>
      <p className="text-white mb-4">{description}</p>
      <div className="flex gap-4">
        {gitUrl && <a href={gitUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500">GitHub</a>}
        {previewUrl && <a href={previewUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500">Preview</a>}
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag onClick={handleTagChange} name="All" isSelected={tag === "All"} />
        <ProjectTag onClick={handleTagChange} name="Web" isSelected={tag === "Web"} />
        <ProjectTag onClick={handleTagChange} name="Mobile" isSelected={tag === "Mobile"} />
      </div>

      {filteredProjects.length === 0 ? (
        <p className="text-center text-lg text-white mt-10">
          🚀 No projects to display yet. Stay tuned for updates!
        </p>
      ) : (
        <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
          {filteredProjects.map((project, index) => (
            <motion.li
              key={project.id}
              initial={{ y: 50, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
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
      )}
    </section>
  );
};

export default ProjectsSection;
