"use client";

import { motion } from "framer-motion";
import "./globals.css";

export default function NewYearPage() {
  return (
    <div className="container">
      <motion.h1
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        className="title"
      >
        🎉 Happy New Year 2026 🎉
      </motion.h1>

      <motion.p
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="subtitle"
      >
        New year • New goals • New achievements
      </motion.p>

      <div className="fireworks">
        {[...Array(20)].map((_, i) => (
          <span key={i} />
        ))}
      </div>
    </div>
  );
}
