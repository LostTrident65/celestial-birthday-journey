import React, { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

export const AudioToggle: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Create audio once
  useEffect(() => {
    audioRef.current = new Audio("/music/celestial-lullaby.mp3");
    audioRef.current.loop = true;
    audioRef.current.volume = 0.5;

    return () => {
      audioRef.current?.pause();
      audioRef.current = null;
    };
  }, []);

  // Play / Pause when state changes
  useEffect(() => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.play().catch(() => {
        // Mobile browsers require user interaction
        setIsPlaying(false);
      });
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  return (
    <div className="fixed top-8 right-8 z-[100]">
      <button
        onClick={() => setIsPlaying(!isPlaying)}
        className="w-12 h-12 flex items-center justify-center bg-white/5 hover:bg-white/10 backdrop-blur-md rounded-full"
        title={isPlaying ? "Mute Music" : "Play Music"}
      >
        {isPlaying ? (
          <Volume2 className="text-indigo-200 w-5 h-5" />
        ) : (
          <VolumeX className="text-slate-500 w-5 h-5" />
        )}
      </button>

      {isPlaying && (
        <div className="absolute -bottom-8 right-0 text-[10px] text-indigo-300/60 uppercase tracking-widest">
          Playing: Celestial Lullaby
        </div>
      )}
    </div>
  );
};
