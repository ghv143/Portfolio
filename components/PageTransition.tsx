"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

/**
 * PageTransition (transitions.dev inspired).
 * A one-time intro: paper panels slide away to reveal the page, with the
 * name briefly centered. Runs only on first load, then unmounts.
 */
export default function PageTransition() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1700);
    return () => clearTimeout(t);
  }, []);

  if (done) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[90]">
      <motion.div
        className="absolute inset-0 flex items-center justify-center bg-black"
        initial={{ y: 0 }}
        animate={{ y: "-100%" }}
        transition={{ duration: 0.9, delay: 0.9, ease: [0.76, 0, 0.24, 1] }}
      >
        <motion.span
          className="font-display text-2xl tracking-tight text-white sm:text-3xl"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: [0, 1, 1, 0], y: [10, 0, 0, -6] }}
          transition={{ duration: 1.3, times: [0, 0.25, 0.7, 1], ease: "easeInOut" }}
        >
          Harish&nbsp;Varma
        </motion.span>
      </motion.div>
    </div>
  );
}
