"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaExternalLinkAlt, FaArrowRight, FaTimes } from "react-icons/fa";
import Image from "next/image";
import { resumeData } from "@/data/resume";

interface Project {
  position: string;
  company: string;
  location: string;
  period: string;
  description: string;
  technologies: string[];
  link: string;
  image: string;
  category: string;
  shortDescription: string;
}

const ProjectsPage = () => {
  const projects = resumeData.recentProjects;
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
    hover: {
      y: -10,
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  const imageVariants = {
    hover: {
      scale: 1.1,
      transition: { duration: 0.3 },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f172a] to-[#1e293b] py-20 px-4 sm:px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            opacity: [0.5, 0.8, 0.5],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[150px] -top-60 -left-60"
        />
        <motion.div
          animate={{
            opacity: [0.5, 0.8, 0.5],
            scale: [1.2, 1, 1.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1,
          }}
          className="absolute w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[150px] -bottom-60 -right-60"
        />
        <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[130px] -translate-x-1/2 -translate-y-1/2 animate-pulse" />
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="inline-block px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium mb-4"
        >
          My Work
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
          className="text-4xl md:text-5xl font-bold text-white mb-4"
        >
          Recent Projects
        </motion.h1>
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-4 relative z-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              variants={projectVariants}
              whileHover="hover"
              onHoverStart={() => setHoveredProject(i)}
              onHoverEnd={() => setHoveredProject(null)}
              className="group relative"
            >
              <div className="relative overflow-hidden bg-white/[0.03] backdrop-blur-xl rounded-xl">
                <div className="relative w-full aspect-[16/10] overflow-hidden">
                  <motion.div
                    variants={imageVariants}
                    className="w-full h-full flex"
                  >
                    {project.image && (
                      <Image
                        src={project.image}
                        alt={project.shortDescription}
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                        className="object-cover transition-transform duration-300"
                      />
                    )}
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredProject === i ? 1 : 0 }}
                    className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
                  />
                </div>

                <div className="px-6 pt-4 pb-6">
                  <motion.h3
                    initial={{ y: 0 }}
                    animate={{ y: hoveredProject === i ? -5 : 0 }}
                    className="text-xl font-bold text-white mb-2"
                  >
                    {project.projectName}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0.7 }}
                    animate={{ opacity: hoveredProject === i ? 1 : 0.7 }}
                    className="text-gray-400 mb-4"
                  >
                    {project.technologies.slice(0, 2).join(", ")}
                  </motion.p>

                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedProject(i)}
                    className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-500 text-white absolute bottom-6 right-6 hover:bg-blue-600 transition-all duration-300 group"
                  >
                    <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 w-full"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 100, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 100, scale: 0.9 }}
              transition={{ type: "spring", damping: 15 }}
              className="bg-white/[0.03] backdrop-blur-xl rounded-2xl p-8  w-full relative"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-gray-300 hover:text-white transition-colors"
              >
                <FaTimes size={20} />
              </motion.button>

              <div className="flex flex-col md:flex-row gap-6">
                {/* Image Section */}
                <div className="md:w-1/2 w-full  md:h-auto relative rounded-xl overflow-hidden">
                  {projects[selectedProject].image && (
                    <Image
                      src={projects[selectedProject].image}
                      alt={projects[selectedProject].shortDescription}
                      layout="fill"
                      objectFit="cover"
                      className="object-cover"
                    />
                  )}
                </div>

                {/* Content Section */}
                <div className="md:w-1/2 w-full flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {projects[selectedProject].projectName}
                    </h3>
                    <p className="text-lg text-white mb-2">
                      {projects[selectedProject].shortDescription}
                    </p>
                    <p className="text-blue-400 mb-2">
                      {projects[selectedProject].period}
                    </p>
                    <p className="text-gray-300 mb-6 whitespace-pre-line">
                      {projects[selectedProject].description}
                    </p>
                  </div>

                  <div className="space-y-4 text-sm">
                    <div>
                      <h4 className="text-white font-medium mb-1">
                        Technologies
                      </h4>
                      <ul className="flex flex-wrap gap-2">
                        {projects[selectedProject].technologies.map(
                          (tech, index) => (
                            <li
                              key={index}
                              className="bg-blue-400/10 text-blue-300 px-3 py-1 rounded-full border border-blue-500/20"
                            >
                              {tech}
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                    {projects[selectedProject].link && (
                      <div>
                        <h4 className="text-white font-medium mb-1">
                          Project Link
                        </h4>
                        <a
                          href={projects[selectedProject].link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-400 hover:text-blue-300 inline-flex items-center gap-2"
                        >
                          Visit Project <FaExternalLinkAlt size={12} />
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectsPage;
