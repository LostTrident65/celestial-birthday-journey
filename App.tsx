
import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion';
import { OpeningScene } from './components/OpeningScene';
import { StarBackground } from './components/StarBackground';
import { CursorEffect } from './components/CursorEffect';
import { MemoryGarden } from './components/MemoryGarden';
import { StarMap } from './components/StarMap';
import { WishSection } from './components/WishSection';
import { AudioToggle } from './components/AudioToggle';

const App: React.FC = () => {
  const [journeyStarted, setJourneyStarted] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Handle scroll to top on start
  const handleBegin = () => {
    setJourneyStarted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-[#05070a] text-slate-200">
      <StarBackground />
      <CursorEffect />
      <AudioToggle />

      <AnimatePresence>
        {!journeyStarted ? (
          <OpeningScene onBegin={handleBegin} />
        ) : (
          <motion.main 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative"
          >
            {/* Scroll Progress Indicator */}
            <motion.div 
              className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 origin-left z-[110]"
              style={{ scaleX }}
            />

            {/* Intro Content */}
            <header className="h-screen flex flex-col items-center justify-center text-center px-4 relative">
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className="z-10"
              >
                <h4 className="text-indigo-300 font-light tracking-[0.5em] uppercase mb-6 animate-pulse">Scroll to explore</h4>
                <div className="w-px h-24 bg-gradient-to-b from-indigo-500 to-transparent mx-auto mb-10" />
                <h2 className="font-serif-magic text-3xl sm:text-5xl text-white opacity-80 italic">"The universe is in her eyes..."</h2>
              </motion.div>
              
              {/* Moon placeholder in scrollable area */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />
            </header>

            <MemoryGarden />
            
            <StarMap />
            
            <WishSection />

            <footer className="py-20 text-center text-slate-600 text-xs tracking-[0.3em] uppercase">
              Celestial Journey &copy; {new Date().getFullYear()} • Created with Stardust
            </footer>
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
