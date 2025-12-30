
import React, { useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export const AudioToggle: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="fixed top-8 right-8 z-[100]">
      <button
        onClick={() => setIsPlaying(!isPlaying)}
        className="w-12 h-12 flex items-center justify-center bg-white/5 hover:bg-white/10 backdrop-blur-md rounded-full border border-white/20 transition-all duration-300"
        title={isPlaying ? "Mute Music" : "Play Music"}
      >
        {isPlaying ? (
          <Volume2 className="text-indigo-200 w-5 h-5" />
        ) : (
          <VolumeX className="text-slate-500 w-5 h-5" />
        )}
      </button>
      {isPlaying && (
        <div className="absolute -bottom-8 right-0 text-[10px] text-indigo-300/60 uppercase tracking-widest whitespace-nowrap">
          Playing: Celestial Lullaby
        </div>
      )}
      {/* 
          NOTE: To add real audio:
          <audio autoPlay loop src="/your-music.mp3" ref={audioRef} /> 
      */}
    </div>
  );
};
