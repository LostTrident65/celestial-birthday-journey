
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BIRTHDAY_PERSON_NAME, BIRTHDAY_DATE } from '../constants';

export const WishSection: React.FC = () => {
  const [isWished, setIsWished] = useState(false);

  const triggerWish = () => {
    setIsWished(true);
    // You could trigger more elaborate effects here
  };

  return (
    <section className="py-32 px-4 relative z-10 text-center">
      <div className="max-w-3xl mx-auto">
        <AnimatePresence mode="wait">
          {!isWished ? (
            <motion.div
              key="pre-wish"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 1.5, filter: 'blur(10px)' }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-indigo-300 font-light tracking-[0.3em] uppercase mb-6">Final Destination</h2>
              <h3 className="font-serif-magic text-4xl sm:text-6xl text-white mb-10 leading-tight">
                The Universe holds a<br/>special secret.
              </h3>
              <p className="text-slate-400 mb-12 max-w-lg mx-auto">
                Close your eyes, think of your deepest desire, and let the stars hear your heart.
              </p>
              
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(165, 180, 252, 0.6)" }}
                whileTap={{ scale: 0.95 }}
                onClick={triggerWish}
                className="group relative px-12 py-5 rounded-full overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 group-hover:from-indigo-500 group-hover:to-purple-500 transition-all duration-300" />
                <span className="relative z-10 text-white font-bold tracking-widest uppercase flex items-center gap-2">
                    Make a Wish <span className="text-xl">✨</span>
                </span>
              </motion.button>
            </motion.div>
          ) : (
            <motion.div
              key="post-wish"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                type: "spring", 
                damping: 12, 
                stiffness: 100 
              }}
              className="relative"
            >
              {/* Explosion of light background */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[120px]" />
              
              <motion.div
                initial={{ y: 50 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.5, duration: 1 }}
              >
                <h4 className="text-indigo-300 font-handwriting text-4xl mb-6">Happiest Birthday</h4>
                <h1 className="font-serif-magic text-6xl sm:text-8xl md:text-9xl text-white font-bold mb-8 drop-shadow-[0_0_30px_rgba(255,255,255,0.5)]">
                  {BIRTHDAY_PERSON_NAME}
                </h1>
                <p className="text-xl text-slate-300 tracking-widest uppercase mb-12">{BIRTHDAY_DATE}</p>
                
                <div className="max-w-xl mx-auto bg-white/5 backdrop-blur-sm p-8 sm:p-12 rounded-[3rem] border border-white/10 shadow-2xl">
                    <p className="text-slate-200 text-lg sm:text-xl italic leading-relaxed font-light">
                      "To the chaos wrapped in kindness, and the smile that fixes everything. May this year bring laughter louder than fear, and dreams bigger than doubts."
                    </p>
                    <div className="mt-8 text-indigo-300 font-handwriting text-3xl">With infinite love. - Monnacioo</div>
                </div>
                
                <motion.div 
                    animate={{ y: [0, -20, 0] }}
                    transition={{ repeat: Infinity, duration: 4 }}
                    className="mt-16 text-4xl"
                >
                    🌙
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Floating Elements on Wish */}
      {isWished && (
        <div className="fixed inset-0 pointer-events-none">
            {[...Array(20)].map((_, i) => (
                <motion.div
                    key={i}
                    initial={{ 
                        opacity: 0, 
                        x: Math.random() * window.innerWidth, 
                        y: window.innerHeight + 50 
                    }}
                    animate={{ 
                        opacity: [0, 1, 0], 
                        y: -100,
                        rotate: 360
                    }}
                    transition={{ 
                        duration: Math.random() * 3 + 2, 
                        repeat: Infinity,
                        delay: Math.random() * 5
                    }}
                    className="absolute text-indigo-300/40"
                    style={{ fontSize: Math.random() * 20 + 10 }}
                >
                    {['🌸', '✨', '⭐', '💫'][Math.floor(Math.random() * 4)]}
                </motion.div>
            ))}
        </div>
      )}
    </section>
  );
};
