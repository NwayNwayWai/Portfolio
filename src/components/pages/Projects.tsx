"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

const ProjectsPage = () => {
  const projects = [
    {
      title: "BeyondPatrol",
      description:
        "A smart security system that uses AI to monitor and protect spaces in real-time. It helps security teams work better by automatically spotting and responding to potential issues.",
      role: "Frontend Developer",
      keyFeatures: [
        "Live video monitoring",
        "Smart threat detection",
        "Quick alerts",
        "Easy-to-use dashboard",
        "Video recording",
        "Data insights",
      ],
      contributions: [
        "Built user-friendly interface with Next.js",
        "Added live video streaming",
        "Created clean, modern layouts",
        "Set up live data updates",
        "Made reusable components",
        "Improved video loading speed",
      ],
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Supabase",
        "WebRTC",
      ],
      link: "https://beyondsensor.com/products/beyondpatrol/",
    },
  ];

  return (
    <div className="min-h-screen py-20 px-4 bg-gradient-to-b from-[#0F172A] to-[#1E293B]">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Page Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium mb-4">
            Projects
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My Work
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {`Here are some cool projects I've worked on. Check them out and see what I've been working on!`}
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#1E293B]/50 backdrop-blur-sm p-8 rounded-2xl border border-white/5 hover:border-blue-500/20 transition-all duration-300"
            >
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-6">{project.description}</p>

                {/* Role */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-2">
                    Role
                  </h4>
                  <p className="text-gray-400">{project.role}</p>
                </div>

                {/* Key Features */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-2">
                    Key Features
                  </h4>
                  <ul className="list-disc list-inside text-gray-400 space-y-1">
                    {project.keyFeatures.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>

                {/* My Contributions */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-2">
                    My Contributions
                  </h4>
                  <ul className="list-disc list-inside text-gray-400 space-y-1">
                    {project.contributions.map((contribution, i) => (
                      <li key={i}>{contribution}</li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-2">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-blue-500/5 text-blue-400 rounded-full text-sm font-medium border border-blue-500/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Link */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full text-sm font-medium hover:bg-blue-500/20 transition-colors duration-300"
                >
                  <FaExternalLinkAlt />
                  View Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
