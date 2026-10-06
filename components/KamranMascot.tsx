"use client";

import { motion } from "framer-motion";
import { Mascot } from "page-mascot";

/**
 * Kamran mascot (from the page-mascot package).
 * Follows the reader's cursor and reacts when poked. Rendered client-side
 * and animated in alongside the name.
 */
export default function KamranMascot({ size = 120 }: { size?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 1.9, ease: [0.16, 1, 0.3, 1] }}
      className="shrink-0"
    >
      <Mascot
        directions="/mascots/kamran-directions.webp"
        reactions="/mascots/kamran-reactions.webp"
        size={size}
        label="Kamran"
      />
    </motion.div>
  );
}
