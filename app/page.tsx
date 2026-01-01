"use client";

import { motion } from "framer-motion";
import "./globals.css";

export default function NewYearPage() {
  return (
    <div className="ny-container">
      <motion.h1
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        className="ny-title"
      >
        🎉 Happy New Year 2026 🎉
      </motion.h1>

      <motion.p
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="ny-subtitle"
      >
        Dream Big • Work Hard • Stay Consistent
      </motion.p>

      <div className="confetti">
        {Array.from({ length: 40 }).map((_, i) => (
          <span key={i} style={{ "--i": i } as React.CSSProperties} />
        ))}
      </div>
    </div>
  );
}
