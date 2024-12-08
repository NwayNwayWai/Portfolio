"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaCalendar, FaBuilding } from "react-icons/fa";
import { resumeData } from "@/data/resume";

const ExperiencePage = () => {
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
            My Journey
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Work Experience
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A timeline of my professional experience and growth as a developer
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-blue-500/20" />

          {resumeData.workExperience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative mb-12 ${
                index % 2 === 0
                  ? "md:pr-12 md:ml-auto md:w-1/2"
                  : "md:pl-12 md:w-1/2"
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-[-8px] md:left-auto md:right-[-8px] w-4 h-4 bg-blue-500 rounded-full transform md:translate-x-1/2">
                <div className="absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-25" />
              </div>

              {/* Experience Card */}
              <div className="ml-8 md:ml-0 bg-[#1E293B]/50 backdrop-blur-sm p-8 rounded-2xl border border-white/5 hover:border-blue-500/20 transition-all duration-300 hover:-translate-y-1">
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full text-sm font-medium">
                    <FaCalendar className="text-blue-500" />
                    {exp.period}
                  </span>
                  <span className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 text-purple-400 rounded-full text-sm font-medium">
                    <FaBuilding className="text-purple-500" />
                    {exp.company}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3">
                  {exp.position}
                </h3>
                <p className="text-gray-400 leading-relaxed whitespace-pre-line mb-4">
                  {exp.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-500/5 text-blue-400 rounded-full text-sm font-medium border border-blue-500/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;
