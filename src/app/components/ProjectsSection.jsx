<section id="projects" className="px-4 md:px-8">
  <div className="text-center max-w-2xl mx-auto">
    <h2 className="text-4xl font-bold text-white mt-4 mb-4 md:mb-6 leading-snug">
      My Projects
    </h2>
    <p className="text-[#ADB7BE] text-lg md:text-xl leading-relaxed">
      A collection of my work, showcasing my journey in web and mobile development.
    </p>
  </div>

  {/* Project Tags */}
  <div className="flex flex-wrap justify-center items-center gap-2 py-6">
    <ProjectTag
      onClick={handleTagChange}
      name="All"
      isSelected={tag === "All"}
    />
    <ProjectTag
      onClick={handleTagChange}
      name="Web"
      isSelected={tag === "Web"}
    />
    <ProjectTag
      onClick={handleTagChange}
      name="Mobile"
      isSelected={tag === "Mobile"}
    />
  </div>

  {/* Project Grid */}
  <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
    {filteredProjects.map((project, index) => (
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
