"use client";
import React from "react";
import Image from "next/image";

const HomePage = () => {
  return (
    <div
      className="min-h-screen  bg-gradient-to-b from-[#0F172A] to-[#1E293B]"
      id="home"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      {/* Main content */}
      <div className="relative min-h-screen flex flex-col lg:flex-row items-center justify-center gap-8 px-6 lg:px-20">
        {/* Left side - Text content */}
        <div className="flex-1 space-y-8 text-center lg:text-left">
          <div className="space-y-4">
            <div className="inline-block px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium">
              Frontend Developer
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold text-white">
              {`Hi, I'm`}

              <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text ml-2">
                Nway Nway Wai
              </span>
            </h1>

            <p className="text-lg text-gray-400 max-w-2xl mx-auto lg:mx-0">
              A passionate Frontend Developer based in Thailand, specializing in
              crafting modern and responsive web applications. With expertise in
              React, Next.js, and TypeScript, I focus on creating seamless user
              experiences with clean, efficient code.
            </p>
          </div>

          {/* CTA Buttons */}
        </div>

        {/* Right side - Image */}
        <div className="flex-1 relative max-w-md w-full aspect-square">
          <div className="relative w-full h-full">
            {/* Decorative background elements */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-lg" />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full" />

            {/* Main image container */}
            <div className="relative w-full h-full rounded-full border-4 border-white/10 overflow-hidden">
              <Image
                src="/nway.JPG"
                alt="Nway Nway Wai"
                fill
                style={{ objectFit: "cover" }}
                className="transition-transform duration-500 hover:scale-105"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
