"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FaCode,
  FaDesktop,
  FaMobile,
  FaDatabase,
  FaTools,
  FaRocket,
} from "react-icons/fa";

const ServicesPage = () => {
  const services = [
    {
      icon: <FaCode className="w-8 h-8" />,
      title: "Frontend Development",
      description:
        "Building responsive and modern web applications using Next.js, React, and TypeScript. Creating pixel-perfect UIs with Tailwind CSS.",
      skills: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    },
    {
      icon: <FaDesktop className="w-8 h-8" />,
      title: "Responsive Design",
      description:
        "Designing and implementing responsive layouts that work seamlessly across all devices and screen sizes.",
      skills: ["Mobile-First Design", "CSS Grid", "Flexbox", "Media Queries"],
    },
    {
      icon: <FaDatabase className="w-8 h-8" />,
      title: "Backend Integration",
      description:
        "Integrating frontend applications with backend services and databases using modern technologies.",
      skills: ["Supabase", "Firebase", "RESTful APIs", "Real-time Data"],
    },
    {
      icon: <FaTools className="w-8 h-8" />,
      title: "Component Development",
      description:
        "Creating reusable, maintainable, and scalable component libraries for efficient development.",
      skills: [
        "Component Design",
        "State Management",
        "UI Libraries",
        "Custom Hooks",
      ],
    },
    {
      icon: <FaMobile className="w-8 h-8" />,
      title: "Mobile Development",
      description:
        "Developing mobile applications using modern frameworks and native technologies.",
      skills: ["React Native", "Android Development", "Java", "Mobile UI/UX"],
    },
    {
      icon: <FaRocket className="w-8 h-8" />,
      title: "Performance Optimization",
      description:
        "Optimizing web applications for speed, performance, and better user experience.",
      skills: [
        "Code Splitting",
        "Lazy Loading",
        "Bundle Optimization",
        "Caching",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
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
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  const iconVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
      },
    },
    hover: {
      scale: 1.2,
      rotate: 360,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15,
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
          What I Do
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
          className="text-4xl md:text-5xl font-bold text-white mb-4"
        >
          My Services
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-gray-400 text-lg max-w-2xl mx-auto"
        >
          Specialized in frontend development with a focus on modern web
          technologies
        </motion.p>
      </motion.div>

      {/* Services Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10"
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover="hover"
            className="bg-[#1E293B]/50 backdrop-blur-sm p-8 rounded-2xl border border-white/5 hover:border-blue-500/20 transition-all duration-300 group"
          >
            {/* Icon */}
            <motion.div variants={iconVariants} className="text-blue-400 mb-6">
              {service.icon}
            </motion.div>

            {/* Title */}
            <motion.h3
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-2xl lg:text-3xl font-bold text-white mb-6"
            >
              {service.title}
            </motion.h3>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-gray-400 mb-6"
            >
              {service.description}
            </motion.p>

            {/* Skills */}
            <div className="flex flex-wrap gap-2">
              {service.skills.map((skill, skillIndex) => (
                <motion.span
                  key={skillIndex}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + skillIndex * 0.1 }}
                  className="bg-blue-400/5 text-blue-300 px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ServicesPage;
