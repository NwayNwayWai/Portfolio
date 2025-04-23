"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Box } from "@radix-ui/themes";
import { resumeData } from "@/data/resume";
import CircularProgress from "../shared/CircularProgress";
import {
  FaGraduationCap,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaUser,
  FaCode,
} from "react-icons/fa";

const AboutMePage = () => {
  const mainSkills = [
    { name: "Web Development", percentage: 90 },
    { name: "React/Next.js", percentage: 85 },
    { name: "TypeScript", percentage: 80 },
    { name: "UI/UX Design", percentage: 75 },
  ];

  return (
    <Box
      className="min-h-screen bg-gradient-to-b from-[#111827] to-[#1E293B] py-24"
      id="about-me"
    >
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium mb-4">
            About me
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Personal Info
          </h1>
        </motion.div>
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            {/* Profile Image with Shape */}
            <div className="relative group mx-auto lg:mx-0 max-w-md">
              <div className="relative w-full aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl ">
                <Image
                  src="/nway.JPG"
                  alt="Nway Nway Wai"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-32 h-32 border-t-4 border-l-4 border-blue-500 rounded-tl-[40px]" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b-4 border-r-4 border-blue-500 rounded-br-[40px]" />
            </div>

            {/* Contact Info */}
            <div className="bg-[#1E293B]/50 backdrop-blur-sm p-8 lg:p-10 rounded-[30px] space-y-6 shadow-xl border border-white/5 hover:border-blue-500/20 transition-colors duration-300 w-full lg:w-[80%]">
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6">
                Contact Info
              </h3>
              <div className="space-y-6">
                {[
                  {
                    icon: <FaMapMarkerAlt className="text-blue-500 text-2xl" />,
                    label: "Location",
                    value: resumeData.personalInfo.contact.address,
                  },
                  {
                    icon: <FaEnvelope className="text-blue-500 text-2xl" />,
                    label: "Email",
                    value: resumeData.personalInfo.contact.email,
                  },
                  {
                    icon: <FaPhone className="text-blue-500 text-2xl" />,
                    label: "Phone",
                    value: resumeData.personalInfo.contact.phone,
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-6 group"
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="w-14 h-14 bg-blue-500 bg-opacity-10 rounded-2xl flex items-center justify-center group-hover:bg-blue-500 group-hover:bg-opacity-20 transition-all duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-gray-400 text-sm mb-1">
                        {item.label}
                      </h4>
                      <p className="text-white font-medium">{item.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            {/* About Text */}
            <div className="bg-[#1E293B]/50 backdrop-blur-sm p-8 lg:p-10 rounded-[30px] shadow-xl border border-white/5 hover:border-blue-500/20 transition-colors duration-300">
              <h3 className="text-2xl lg:text-3xl font-bold text-white flex items-center gap-4 mb-6">
                <FaUser className="text-blue-500 text-2xl" />
                About Me
              </h3>
              <p className="text-gray-300 leading-relaxed text-base lg:text-lg">
                {resumeData.personalInfo.bio}
              </p>
            </div>

            {/* Skills */}
            <div className="bg-[#1E293B]/50 backdrop-blur-sm p-8 lg:p-10 rounded-[30px] shadow-xl border border-white/5 hover:border-blue-500/20 transition-colors duration-300">
              <h3 className="text-2xl lg:text-3xl font-bold text-white flex items-center gap-4 mb-8">
                <FaCode className="text-blue-500 text-2xl" />
                Skills
              </h3>
              <div className="grid grid-cols-2 gap-6 lg:gap-8">
                {mainSkills.map((skill) => (
                  <CircularProgress
                    key={skill.name}
                    percentage={skill.percentage}
                    title={skill.name}
                  />
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="bg-[#1E293B]/50 backdrop-blur-sm p-8 lg:p-10 rounded-[30px] shadow-xl border border-white/5 hover:border-blue-500/20 transition-colors duration-300">
              <h3 className="text-2xl lg:text-3xl font-bold text-white flex items-center gap-4 mb-6">
                <FaGraduationCap className="text-blue-500 text-2xl" />
                Education
              </h3>
              <motion.div
                className="bg-[#111827]/50 rounded-2xl p-6 lg:p-8 hover:bg-[#111827]/70 transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <span className="inline-block px-4 py-1.5 bg-blue-500 bg-opacity-20 text-blue-400 rounded-full text-sm font-medium mb-4">
                  {resumeData.education.period}
                </span>
                <h3 className="text-xl lg:text-2xl font-bold text-white mb-3">
                  {resumeData.education.degree}
                </h3>
                <h4 className="text-blue-400 font-semibold text-base lg:text-lg">
                  {resumeData.education.university}
                </h4>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </Box>
  );
};

export default AboutMePage;
