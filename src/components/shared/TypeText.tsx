"use client";
import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

type TypingTextProps = {
  texts: string[]; // Array of strings to type
  speed?: number; // Optional typing speed
  backSpeed?: number; // Optional backspacing speed
  loop?: boolean; // Loop through the texts
};

const TypingText: React.FC<TypingTextProps> = ({
  texts,
  speed = 50,
  backSpeed = 25,
  loop = true,
}) => {
  const typedRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typedRef.current) {
      const typed = new Typed(typedRef.current, {
        strings: texts,
        typeSpeed: speed,
        backSpeed: backSpeed,
        loop: loop,
        smartBackspace: true,
        showCursor: true,
        cursorChar: "|", // Customize cursor character
      });

      return () => {
        typed.destroy(); // Cleanup on unmount
      };
    }
  }, [texts, speed, backSpeed, loop]);

  return (
    <div className="text-5xl text-blue-500 font-semibold">
      <span ref={typedRef} className="border-r-2 border-gray-800 pr-1"></span>
    </div>
  );
};

export default TypingText;
