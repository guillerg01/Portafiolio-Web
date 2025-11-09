"use client";

import { motion } from "framer-motion";

export function BackgroundCircles() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        scale: [1, 1.5, 2, 2.5, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1],
      }}
      transition={{ duration: 3, repeat: Infinity }}
      className="pointer-events-none absolute inset-0 flex items-center justify-center"
    >
      <div className="absolute mt-16 h-32 w-32 rounded-full border border-gray-700" />
      <div className="absolute mt-16 h-48 w-48 rounded-full border border-gray-700" />
      <div className="absolute mt-16 h-72 w-72 rounded-full border border-gray-700/70" />
      <div className="absolute mt-16 h-96 w-96 rounded-full border border-[#F7AB0A]/30" />
      <div className="absolute mt-16 h-[28rem] w-[28rem] rounded-full border border-gray-700/30" />
    </motion.div>
  );
}


