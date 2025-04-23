"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaBuilding, FaCalendar, FaMapMarkerAlt } from "react-icons/fa";
import { resumeData } from "@/data/resume";

const ExperiencePage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
    hover: {
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
      },
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
        className="text-center mb-16 relative z-10"
      >
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="inline-block px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium mb-4"
        >
          My Journey
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
          className="text-4xl md:text-5xl font-bold text-white mb-4"
        >
          Work Experience
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-gray-400 text-lg max-w-2xl mx-auto"
        >
          My professional journey and career highlights
        </motion.p>
      </motion.div>

      {/* Experience Timeline */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto relative z-10"
      >
        {/* Timeline Line */}
        <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px top-0 h-full w-[2px] bg-gradient-to-b from-blue-500/50 via-purple-500/50 to-transparent" />

        {resumeData.workExperience.map((experience, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover="hover"
            className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Timeline Dot */}
            <motion.div
              variants={iconVariants}
              className="absolute left-[-9px] md:left-1/2 md:-translate-x-1/2 w-5 h-5 rounded-full bg-blue-500 border-4 border-[#0f172a] z-10"
            />

            {/* Content Card */}
            <div
              className={`flex-1 ${
                index % 2 === 0
                  ? "md:pr-12 md:text-right"
                  : "md:pl-12 md:text-left"
              }`}
            >
              <div className="bg-[#1E293B]/50 backdrop-blur-sm p-6 rounded-xl border border-white/5 hover:border-blue-500/20 transition-all duration-300">
                <motion.h3
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-xl font-bold text-white mb-2"
                >
                  {experience.position}
                </motion.h3>

                <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-400">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex items-center gap-2"
                  >
                    <FaBuilding className="text-blue-400" />
                    {experience.company}
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="flex items-center gap-2"
                  >
                    <FaCalendar className="text-blue-400" />
                    {experience.period}
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                    className="flex items-center gap-2"
                  >
                    <FaMapMarkerAlt className="text-blue-400" />
                    {experience.location}
                  </motion.div>
                </div>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="text-gray-400 mb-4 whitespace-pre-line"
                >
                  {experience.description}
                </motion.p>

                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.7 + techIndex * 0.1 }}
                      className="bg-blue-400/5 text-blue-300 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ExperiencePage;
