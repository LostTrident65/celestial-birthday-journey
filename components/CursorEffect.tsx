
import React, { useEffect, useState, useCallback } from 'react';

interface Sparkle {
  id: number;
  x: number;
  y: number;
  size: number;
}

export const CursorEffect: React.FC = () => {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  const addSparkle = useCallback((x: number, y: number) => {
    const id = Date.now();
    const newSparkle: Sparkle = {
      id,
      x,
      y,
      size: Math.random() * 8 + 4
    };

    setSparkles(prev => [...prev.slice(-15), newSparkle]);

    setTimeout(() => {
      setSparkles(prev => prev.filter(s => s.id !== id));
    }, 1000);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (Math.random() > 0.85) {
        addSparkle(e.clientX, e.clientY);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [addSparkle]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]">
      {sparkles.map(s => (
        <div
          key={s.id}
          className="absolute bg-yellow-200 rounded-full blur-[2px] animate-pulse opacity-60"
          style={{
            left: s.x,
            top: s.y,
            width: s.size,
            height: s.size,
            transform: 'translate(-50%, -50%)',
            transition: 'all 1s linear',
            opacity: 0,
            scale: 0.2
          }}
        />
      ))}
    </div>
  );
};
