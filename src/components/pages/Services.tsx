"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaDesktop, FaMobile, FaDatabase, FaTools, FaRocket } from "react-icons/fa";

const ServicesPage = () => {
  const services = [
    {
      icon: <FaCode className="w-8 h-8" />,
      title: "Frontend Development",
      description: "Building responsive and modern web applications using Next.js, React, and TypeScript. Creating pixel-perfect UIs with Tailwind CSS.",
      skills: ["Next.js", "React", "TypeScript", "Tailwind CSS"]
    },
    {
      icon: <FaDesktop className="w-8 h-8" />,
      title: "Responsive Web Design",
      description: "Designing and implementing responsive layouts that work seamlessly across all devices and screen sizes.",
      skills: ["Mobile-First Design", "CSS Grid", "Flexbox", "Media Queries"]
    },
    {
      icon: <FaDatabase className="w-8 h-8" />,
      title: "Backend Integration",
      description: "Integrating frontend applications with backend services and databases using modern technologies.",
      skills: ["Supabase", "Firebase", "RESTful APIs", "Real-time Data"]
    },
    {
      icon: <FaTools className="w-8 h-8" />,
      title: "Component Development",
      description: "Creating reusable, maintainable, and scalable component libraries for efficient development.",
      skills: ["Component Design", "State Management", "UI Libraries", "Custom Hooks"]
    },
    {
      icon: <FaMobile className="w-8 h-8" />,
      title: "Mobile Development",
      description: "Developing mobile applications using modern frameworks and native technologies.",
      skills: ["React Native", "Android Development", "Java", "Mobile UI/UX"]
    },
    {
      icon: <FaRocket className="w-8 h-8" />,
      title: "Performance Optimization",
      description: "Optimizing web applications for speed, performance, and better user experience.",
      skills: ["Code Splitting", "Lazy Loading", "Bundle Optimization", "Caching"]
    }
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
            What I Do
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My Services
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Specialized in frontend development with a focus on modern web technologies
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#1E293B]/50 backdrop-blur-sm p-8 rounded-2xl border border-white/5 hover:border-blue-500/20 transition-all duration-300 hover:-translate-y-1 group"
            >
              {/* Icon */}
              <div className="text-blue-400 mb-6 transform transition-transform group-hover:scale-110">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-4">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 mb-6">
                {service.description}
              </p>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {service.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-blue-500/5 text-blue-400 rounded-full text-sm font-medium border border-blue-500/10"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
