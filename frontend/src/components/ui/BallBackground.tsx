"use client";

import { motion } from 'framer-motion';

const SPICED_COLORS = [
  '#861C1C', // Deep Red
  '#C06F30', // Terracotta
  '#F4B34F', // Golden Sand
  '#ECCEB6', // Light Peach
  '#2B1D1C', // Darkest Brown
];

export default function BallBackground() {
  return (
    <div className="fixed inset-0 -z-10 bg-[#E8E3CF] overflow-hidden">
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          initial={{
            x: Math.random() * 100 + '%',
            y: Math.random() * 100 + '%',
            scale: Math.random() * 0.5 + 0.5,
            opacity: 0.2 + Math.random() * 0.3,
          }}
          animate={{
            x: [
              Math.random() * 100 + '%',
              Math.random() * 100 + '%',
              Math.random() * 100 + '%',
            ],
            y: [
              Math.random() * 100 + '%',
              Math.random() * 100 + '%',
              Math.random() * 100 + '%',
            ],
          }}
          transition={{
            duration: 20 + Math.random() * 10,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute rounded-full blur-[80px]"
          style={{
            backgroundColor: SPICED_COLORS[i % SPICED_COLORS.length],
            width: Math.random() * 300 + 200 + 'px',
            height: Math.random() * 300 + 200 + 'px',
          }}
        />
      ))}
    </div>
  );
}
