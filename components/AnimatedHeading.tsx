"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type AnimatedHeadingProps = {
  text: string;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3";
};

/**
 * AnimatedHeading (transitions.dev inspired).
 * Reveals a heading word-by-word with a masked slide-up, giving a smooth,
 * editorial "type sets itself" feel.
 */
export default function AnimatedHeading({
  text,
  className,
  delay = 0,
  as = "h2",
}: AnimatedHeadingProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const words = text.split(" ");
  const Tag = motion[as];

  return (
    <Tag ref={ref} className={className} aria-label={text}>
      <span aria-hidden className="inline">
        {words.map((word, i) => (
          <span
            key={`${word}-${i}`}
            className="inline-block overflow-hidden align-top"
          >
            <motion.span
              className="inline-block"
              initial={{ y: "110%" }}
              animate={inView ? { y: "0%" } : { y: "110%" }}
              transition={{
                duration: 0.75,
                delay: delay + i * 0.07,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {word}
              {i < words.length - 1 ? "\u00A0" : ""}
            </motion.span>
          </span>
        ))}
      </span>
    </Tag>
  );
}
