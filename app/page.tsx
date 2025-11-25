"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

const container: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 8 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.42, 0, 0.58, 1], // cubic-bezier array
    },
  },
};

export default function CleanAnimatedPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50 flex items-center justify-center p-6">
      {/* Subtle floating shapes */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -left-32 -top-20 w-96 h-96 rounded-full bg-gradient-to-tr from-indigo-200 to-indigo-400 opacity-20 blur-3xl"
          animate={{ x: [0, 20, 0], y: [0, -10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -right-28 -bottom-16 w-72 h-72 rounded-full bg-gradient-to-tr from-pink-200 to-rose-300 opacity-18 blur-3xl"
          animate={{ x: [0, -18, 0], y: [0, 10, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Center card */}
      <motion.section
        initial="hidden"
        animate="show"
        variants={container}
        className="relative z-10 w-full max-w-3xl bg-white/80 backdrop-blur-md border border-gray-100 shadow-lg rounded-2xl p-10 md:p-16"
      >
        <motion.h1 variants={item} className="text-3xl md:text-4xl font-extrabold text-slate-800 leading-tight">
          Hello World!
        </motion.h1>

        <motion.p variants={item} className="mt-4 text-slate-600 max-w-2xl">
          A minimal Next.js page using Tailwind CSS and Framer Motion. It includes entrance
          animations, subtle floating backgrounds, and a clean call-to-action.
        </motion.p>

        <motion.div variants={item} className="mt-6 flex flex-col sm:flex-row gap-3">
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-xl px-5 py-3 bg-indigo-600 text-white font-medium shadow hover:scale-[1.02] active:scale-98 transform transition"
          >
            Get started
          </a>

          <a
            href="#"
            className="inline-flex items-center justify-center rounded-xl px-5 py-3 border border-slate-200 text-slate-700 font-medium bg-white hover:bg-slate-50 transition"
          >
            Learn more
          </a>
        </motion.div>

        <motion.div variants={item} className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Feature title="Fast" desc="Blazing performance and small bundle size." />
          <Feature title="Accessible" desc="Semantic HTML and keyboard-friendly interactions." />
          <Feature title="Beautiful" desc="Clean layout with subtle motion." />
        </motion.div>

        <motion.footer variants={item} className="mt-8 text-xs text-slate-400">
          Built with ♥ using Next.js, Tailwind CSS & Framer Motion.
        </motion.footer>
      </motion.section>
    </main>
  );
}

function Feature({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="p-4 rounded-lg border border-slate-100 bg-white">
      <h4 className="font-semibold text-slate-800">{title}</h4>
      <p className="mt-2 text-sm text-slate-500">{desc}</p>
    </div>
  );
}