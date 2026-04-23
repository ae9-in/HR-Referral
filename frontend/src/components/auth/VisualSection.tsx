"use client";

import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface VisualSectionProps {
  title?: string;
  subtitle?: string;
}

export default function VisualSection({ 
  title = "Start Your Journey With Us.", 
  subtitle = "Experience weightless productivity with our next-generation platform architecture."
}: VisualSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 40, stiffness: 200 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      mouseX.set(x * 50); 
      mouseY.set(y * 50);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div 
      ref={containerRef}
      className="relative hidden lg:flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-[#7a0d1e] via-[#4a0812] to-[#120204] text-white"
    >
      {/* Background Animated Ornaments */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Large glass circle */}
        <motion.div 
          animate={{ 
            y: [-30, 30, -30],
            rotate: [0, 5, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[10%] left-[10%] w-[280px] h-[280px] rounded-full bg-white/5 backdrop-blur-3xl border border-white/10 shadow-2xl"
        />

        {/* Floating Glass Rectangle */}
        <motion.div 
          animate={{ 
            y: [50, -50, 50],
            x: [-20, 20, -20],
            rotate: [12, 10, 12]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[10%] right-[5%] w-[320px] h-[450px] rounded-[40px] bg-white/[0.03] backdrop-blur-2xl border border-white/5 shadow-2xl"
        />

        {/* Faint Grid Lines */}
        <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      {/* Main Content */}
      <motion.div 
        style={{ x: smoothX, y: smoothY }}
        className="relative z-10 max-w-2xl px-12"
      >
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-4 py-1.5 backdrop-blur-md">
          <div className="h-2 w-2 rounded-full bg-slate-400 animate-pulse"></div>
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/60">Antigravity Mode Active</span>
        </div>

        <h2 className="mb-6 text-[84px] font-black italic leading-[0.85] tracking-tighter text-white drop-shadow-2xl">
          Start Your<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-white">Journey</span><br />
          With Us.
        </h2>

        <p className="max-w-md text-xl text-white/50 leading-relaxed font-medium mt-10">
          {subtitle}
        </p>

        <div className="h-10 invisible"></div>
      </motion.div>

      {/* Interactive Sparkles layer */}
      <div className="absolute inset-0 pointer-events-none z-20">
         <div className="absolute top-1/4 left-1/3 w-1 h-1 bg-white rounded-full blur-[2px] animate-pulse" />
         <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-white rounded-full blur-[4px] animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
    </div>
  );
}
