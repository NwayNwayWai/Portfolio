"use client";
import React, { useState, useEffect } from "react";
import { motion, useAnimationControls } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { resumeData } from "@/data/resume";

const HomePage = () => {
  const [displayedText, setDisplayedText] = useState("");

  const name = resumeData.personalInfo.name;

  useEffect(() => {
    let currentIndex = 0;
    let typingInterval: NodeJS.Timeout;

    const startTyping = () => {
      typingInterval = setInterval(() => {
        if (currentIndex <= name.length) {
          setDisplayedText(name.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(typingInterval);
          setTimeout(() => {
            setDisplayedText("");
            currentIndex = 0;
            startTyping();
          }, 2000); // Delay before restarting typing
        }
      }, 150);
    };

    startTyping();

    return () => clearInterval(typingInterval);
  }, [name]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
    hover: {
      scale: 1.05,
      rotate: 5,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15,
      },
    },
  };

  const socialIconVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
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

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f172a] to-[#1e293b] flex items-center relative overflow-hidden">
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

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6 text-center lg:text-left"
          >
            <motion.span
              variants={textVariants}
              className="inline-block px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium"
            >
              Welcome to my portfolio
            </motion.span>

            <motion.h1
              variants={textVariants}
              className="text-4xl sm:text-5xl lg:text-5xl font-bold text-white flex items-center justify-center lg:justify-start"
            >
              {" Hi, I'm "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 ml-2">
                {displayedText}
              </span>
              <motion.span
                className="inline-block w-[4px] h-12 bg-blue-400 ml-1"
                animate={{
                  opacity: [0, 1],
                }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
              />
            </motion.h1>

            <motion.p
              variants={textVariants}
              className="text-xl sm:text-2xl text-blue-400 font-medium"
            >
              {resumeData.personalInfo.title}
            </motion.p>

            <motion.p
              variants={textVariants}
              className="text-gray-400 max-w-lg mx-auto lg:mx-0"
            >
              {resumeData.personalInfo.intro}
            </motion.p>

            {/* Social Links */}
            <motion.div
              variants={containerVariants}
              className="flex gap-4 justify-center lg:justify-start"
            >
              <motion.a
                variants={socialIconVariants}
                whileHover="hover"
                href={resumeData.personalInfo.contact.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-blue-400 hover:bg-blue-400/20 transition-colors duration-300"
              >
                <FaGithub className="w-6 h-6" />
              </motion.a>
              <motion.a
                variants={socialIconVariants}
                whileHover="hover"
                href={resumeData.personalInfo.contact.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-blue-400 hover:bg-blue-400/20 transition-colors duration-300"
              >
                <FaLinkedin className="w-6 h-6" />
              </motion.a>
            </motion.div>

            {/* CTA Button */}
            <motion.a
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              href="#contact"
              className="inline-block px-8 py-4 bg-blue-500 text-white rounded-full font-medium hover:bg-blue-600 transition-colors duration-300"
            >
              Get in Touch
            </motion.a>
          </motion.div>

          {/* Right Column - Profile Image */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            className="relative w-full max-w-md aspect-square rounded-[30px] overflow-hidden shadow-2xl border-2 border-white/10 mx-auto"
          >
            {resumeData.personalInfo.image && (
              <Image
                src={resumeData.personalInfo.image}
                alt={resumeData.personalInfo.name}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="rounded-[30px] object-cover"
              />
            )}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
