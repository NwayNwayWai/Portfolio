import React, { useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';

interface CircularProgressProps {
  percentage: number;
  title: string;
  color?: string;
  size?: number;
  strokeWidth?: number;
}

const CircularProgress: React.FC<CircularProgressProps> = ({
  percentage,
  title,
  color = '#3B82F6',
  size = 120,
  strokeWidth = 8,
}) => {
  const [count, setCount] = useState(0);
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const ref = React.useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      const timer = setInterval(() => {
        setCount(prev => {
          const next = prev + 1;
          if (next >= percentage) {
            clearInterval(timer);
            return percentage;
          }
          return next;
        });
      }, 20);

      return () => clearInterval(timer);
    }
  }, [percentage, isInView]);

  return (
    <motion.div 
      ref={ref}
      className="flex flex-col items-center justify-center group"
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
    >
      <div className="relative" style={{ width: size, height: size }}>
        {/* Background circle */}
        <svg
          className="absolute transform -rotate-90"
          width={size}
          height={size}
        >
          <circle
            className="text-gray-700"
            strokeWidth={strokeWidth}
            stroke="currentColor"
            fill="transparent"
            r={radius}
            cx={size / 2}
            cy={size / 2}
          />
          <motion.circle
            className="transition-all duration-1000"
            strokeWidth={strokeWidth}
            stroke={color}
            fill="transparent"
            r={radius}
            cx={size / 2}
            cy={size / 2}
            style={{
              strokeDasharray: circumference,
            }}
            initial={{ strokeDashoffset: circumference }}
            animate={{ 
              strokeDashoffset: circumference - (count / 100) * circumference 
            }}
            transition={{ duration: 0.5 }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.span 
            className="text-2xl font-bold text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {count}%
          </motion.span>
        </div>
      </div>
      <motion.h4 
        className="mt-4 text-lg font-semibold text-white opacity-80 group-hover:opacity-100 transition-opacity duration-300"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 0.8, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {title}
      </motion.h4>
    </motion.div>
  );
};

export default CircularProgress;
