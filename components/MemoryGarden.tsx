
import React from 'react';
import { motion } from 'framer-motion';
import { MEMORIES } from '../constants';

export const MemoryGarden: React.FC = () => {
  return (
    <section className="py-24 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="font-handwriting text-5xl text-indigo-200 mb-4">Memory Garden</h2>
          <p className="text-slate-400">Where every moment blooms in celestial light.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          {MEMORIES.map((memory, index) => (
            <motion.div
              key={memory.id}
              initial={{ opacity: 0, scale: 0.8, rotate: index % 2 === 0 ? -2 : 2 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-col items-center group"
            >
              <div className="relative p-2 bg-gradient-to-tr from-slate-800 to-slate-900 rounded-[2rem] overflow-hidden shadow-2xl transition-all duration-500 group-hover:shadow-indigo-500/20">
                {/* Photo Frame (Petal Shape) */}
                <div className="w-full aspect-[3/4] overflow-hidden rounded-[1.8rem]">
                  <motion.img 
                    whileHover={{ scale: 1.1 }}
                    src={memory.imageUrl} 
                    alt={memory.title} 
                    className="w-full h-full object-cover transition-transform duration-700"
                  />
                </div>
                {/* Decorative Flowers */}
                <div className="absolute -bottom-4 -right-4 w-20 h-20 text-indigo-300/40 pointer-events-none group-hover:text-indigo-300 group-hover:rotate-12 transition-all duration-700">
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12,2L14.43,8.07L21,9.39L16.5,14.47L17.3,21L12,18.27L6.7,21L7.5,14.47L3,9.39L9.57,8.07L12,2Z" /></svg>
                </div>
              </div>
              
              <div className="mt-8 text-center px-4">
                <h3 className="text-2xl font-serif-magic text-indigo-100 mb-2">{memory.title}</h3>
                <p className="text-slate-400 italic font-light leading-relaxed">"{memory.note}"</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
