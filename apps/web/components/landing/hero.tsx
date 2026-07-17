"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center px-6 pt-28">
      <motion.div
        className="mx-auto max-w-6xl text-center"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
      >
        <motion.span
          className="inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-xs font-medium text-blue-400 sm:text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          🚀 Telegram Cloud Storage Reimagined
        </motion.span>

        <motion.h1
          className="mt-8 text-5xl font-black leading-tight tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.7,
          }}
        >
          Your Universe.
          <br />
          <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-600 bg-clip-text text-transparent">
            Your Files.
          </span>
        </motion.h1>

        <motion.p
          className="mx-auto mt-8 max-w-3xl px-2 text-base leading-8 text-slate-400 sm:text-lg lg:text-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.5,
          }}
        >
          Store, organize, search and manage your Telegram cloud beautifully
          with a fast, modern and elegant interface.
        </motion.p>

        <motion.div
          className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.7,
          }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="w-full rounded-2xl bg-blue-600 px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-blue-600/30 transition sm:w-auto"
          >
            Continue with Telegram
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="flex w-full items-center justify-center gap-2 rounded-2xl border border-slate-700 px-8 py-4 text-lg text-white transition hover:border-blue-500 sm:w-auto"
          >
            Live Demo
            <ArrowRight size={20} />
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}
