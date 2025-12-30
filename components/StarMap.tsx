
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { STAR_CONSTELLATION } from '../constants';
import { StarPoint } from '../types';

export const StarMap: React.FC = () => {
  const [activeStar, setActiveStar] = useState<StarPoint | null>(null);

  return (
    <section className="py-24 px-4 relative z-10 overflow-hidden">
      <div className="max-w-5xl mx-auto text-center mb-16">
        <motion.h2 
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           className="font-serif-magic text-4xl text-white"
        >
          Your <span className="text-indigo-300">Cosmic Map</span>
        </motion.h2>
        <p className="text-slate-400 mt-4">Click the brightest stars to reveal their secrets.</p>
      </div>

      <div className="relative h-[600px] w-full max-w-4xl mx-auto border border-indigo-900/30 rounded-full bg-indigo-950/10 shadow-[inset_0_0_100px_rgba(79,70,229,0.1)]">
        {/* Constellation Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          {STAR_CONSTELLATION.map((star, i) => {
            if (i === STAR_CONSTELLATION.length - 1) return null;
            const next = STAR_CONSTELLATION[i + 1];
            return (
              <motion.line
                key={`line-${i}`}
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.2 }}
                transition={{ duration: 1.5, delay: star.delay }}
                x1={`${star.x}%`} y1={`${star.y}%`}
                x2={`${next.x}%`} y2={`${next.y}%`}
                stroke="white" strokeWidth="1"
                strokeDasharray="5,5"
              />
            );
          })}
        </svg>

        {/* Stars */}
        {STAR_CONSTELLATION.map((star) => (
          <motion.button
            key={star.id}
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", delay: star.delay }}
            whileHover={{ scale: 1.5, zIndex: 20 }}
            onClick={() => setActiveStar(star)}
            className="absolute p-2 group"
            style={{ left: `${star.x}%`, top: `${star.y}%`, transform: 'translate(-50%, -50%)' }}
          >
            <div className="relative w-4 h-4 rounded-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)] group-hover:shadow-[0_0_25px_rgba(165,180,252,1)] transition-all" />
            <div className="absolute inset-0 rounded-full animate-ping bg-white/30" />
          </motion.button>
        ))}

        {/* Modal Overlay */}
        <AnimatePresence>
          {activeStar && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="absolute inset-0 z-30 flex items-center justify-center p-6 bg-[#05070a]/80 backdrop-blur-md rounded-full"
            >
              <div className="max-w-md text-center">
                {activeStar.image && (
                    <motion.img 
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        src={activeStar.image} 
                        className="w-48 h-48 mx-auto object-cover rounded-full border-4 border-indigo-400/30 mb-6 shadow-2xl"
                    />
                )}
                <h3 className="font-serif-magic text-2xl text-white mb-4">Constellation Note</h3>
                <p className="text-indigo-200 text-lg italic mb-8">"{activeStar.note}"</p>
                <button 
                  onClick={() => setActiveStar(null)}
                  className="text-xs uppercase tracking-widest text-slate-500 hover:text-white transition-colors"
                >
                  Return to Sky
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
