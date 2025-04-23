import React from "react";
import { FaTimes, FaExternalLinkAlt } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const ProjectModal = ({ project, onClose }: any) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 "
      >
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-slate-900 rounded-xl shadow-xl max-w-6xl w-full p-6 relative text-white"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-white transition"
          >
            <FaTimes size={20} />
          </button>

          {/* Content Layout */}
          <div className="flex flex-col md:flex-row gap-6">
            {/* Image Section */}

            {/* Content Section */}
            <div className="w-full md:w-1/2 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-bold mb-2">{project.position}</h2>
                <p className="text-blue-400 mb-4">{project.company}</p>
                <p className="text-gray-300 mb-6 leading-relaxed whitespace-pre-line">
                  {project.description}
                </p>
              </div>

              <div className="space-y-4 text-sm">
                <div>
                  <h4 className="text-white font-medium mb-1">Technologies</h4>
                  <ul className="flex flex-wrap gap-2">
                    {project.technologies.map((tech: string, i: number) => (
                      <li
                        key={i}
                        className="bg-blue-400/10 text-blue-300 px-3 py-1 rounded-full border border-blue-500/20"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
                {project.link && (
                  <div>
                    <h4 className="text-white font-medium mb-1">Live URL</h4>
                    <a
                      href={project.link}
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
    </AnimatePresence>
  );
};

export default ProjectModal;
