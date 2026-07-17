"use client";

import { motion } from "framer-motion";
import { Stars } from "./stars";

export function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#020617]">
      {/* Base Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1e3a8a_0%,#020617_55%,#000814_100%)]" />

      {/* Aurora Blue */}
      <motion.div
        className="absolute left-[-10%] top-[5%] h-[650px] w-[650px] rounded-full bg-blue-600/20 blur-[180px]"
        animate={{
          x: [0, 40, -20, 0],
          y: [0, 30, -20, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Cyan Glow */}
      <motion.div
        className="absolute right-[-10%] bottom-[5%] h-[600px] w-[600px] rounded-full bg-cyan-500/20 blur-[180px]"
        animate={{
          x: [0, -30, 20, 0],
          y: [0, -20, 30, 0],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Purple Glow */}
      <motion.div
        className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/10 blur-[180px]"
        animate={{
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `
            linear-gradient(to right, white 1px, transparent 1px),
            linear-gradient(to bottom, white 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_45%,rgba(0,0,0,0.75)_100%)]" />

      {/* Stars */}
      <Stars />
    </div>
  );
}
