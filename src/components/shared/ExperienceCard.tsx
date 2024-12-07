import React from 'react';
import { motion } from 'framer-motion';

interface ExperienceCardProps {
  title: string;
  company: string;
  period: string;
  description: string;
  delay?: number;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  title,
  company,
  period,
  description,
  delay = 0,
}) => {
  return (
    <motion.div
      className="flex-shrink-0 w-[350px] bg-[#111827]/50 rounded-2xl p-6 hover:bg-[#111827]/70 transition-all duration-300 border border-white/5 hover:border-blue-500/20"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5 }}
    >
      <span className="inline-block px-4 py-1.5 bg-blue-500 bg-opacity-20 text-blue-400 rounded-full text-sm font-medium mb-4">
        {period}
      </span>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <h4 className="text-blue-400 font-semibold mb-3">{company}</h4>
      <p className="text-gray-400 leading-relaxed text-sm line-clamp-3 hover:line-clamp-none transition-all duration-300">
        {description}
      </p>
    </motion.div>
  );
};

export default ExperienceCard;
