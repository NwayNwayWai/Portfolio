import React from 'react';
import { motion } from 'framer-motion';

interface SectionTitleProps {
  subtitle: string;
  title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ subtitle, title }) => {
  return (
    <motion.div
      className="mb-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-blue-500 font-bold text-lg mb-2">{subtitle}</h3>
      <h2 className="text-4xl font-bold text-white relative inline-block">
        {title}
        <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-blue-500"></span>
      </h2>
    </motion.div>
  );
};

export default SectionTitle;
