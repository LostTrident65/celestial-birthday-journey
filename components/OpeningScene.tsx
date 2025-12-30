
import React from 'react';
import { motion } from 'framer-motion';
import { BIRTHDAY_PERSON_NAME } from '../constants';

interface OpeningSceneProps {
  onBegin: () => void;
}

export const OpeningScene: React.FC<OpeningSceneProps> = ({ onBegin }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#05070a] overflow-hidden"
    >
      <div className="relative text-center px-4">
        {/* Rising Moon */}
        <motion.div
          initial={{ y: 300, opacity: 0, scale: 0.5 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 2.5, ease: "easeOut" }}
          className="absolute left-1/2 -top-64 -translate-x-1/2 w-48 h-48 sm:w-64 sm:h-64 rounded-full bg-gradient-to-tr from-indigo-100 to-white shadow-[0_0_80px_rgba(255,255,255,0.4)] flex items-center justify-center"
        >
            <div className="absolute inset-0 rounded-full bg-indigo-50/20 blur-xl animate-pulse" />
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="relative z-10"
        >
          <h2 className="text-indigo-200 text-xl font-light tracking-widest uppercase mb-4">Tonight is special...</h2>
          <h1 className="font-serif-magic text-5xl sm:text-7xl md:text-8xl text-white mb-8">
            The World<br/><span className="italic text-indigo-300">Awaits</span>
          </h1>
          <p className="text-slate-400 max-w-md mx-auto mb-12 text-sm sm:text-base">
            Step into a realm where the stars align just for you, {BIRTHDAY_PERSON_NAME}.
          </p>

          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(165, 180, 252, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            onClick={onBegin}
            className="px-8 py-3 bg-transparent border border-indigo-300 text-indigo-100 rounded-full font-medium tracking-wide transition-all duration-300 hover:bg-indigo-300/10"
          >
            Begin the Journey
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};
