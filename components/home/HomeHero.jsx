"use client";

import { motion } from "framer-motion";

export default function HomeHero() {
  return (
    <div className="flex flex-col justify-end md:justify-center items-center md:h-2/3 lg:h-2/3 h-1/3 text-amber-50">
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
        className="flex flex-col justify-center items-center leading-8"
      >
        <p className="lg:text-9xl text-shadow-lg/50 text-6xl md:text-3xl font-dancing">
          Asmine
        </p>
        <p className="lg:text-4xl text-shadow-lg/50 text-xl mt-4 font-dancing">
          Designing with feeling
        </p>
      </motion.div>
    </div>
  );
}
