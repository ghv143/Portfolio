"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  MotionValue,
} from "framer-motion";

type KineticHeadlineProps = {
  text: string;
  className?: string;
};

/**
 * KineticHeadline — Apple-style scroll-driven kinetic typography.
 *
 * Each word brightens and lifts as the headline travels through the viewport,
 * so the sentence "writes itself" in sync with the scroll — the signature of
 * older Apple product pages (e.g. the big statement blocks).
 */
export default function KineticHeadline({
  text,
  className,
}: KineticHeadlineProps) {
  const ref = useRef<HTMLHeadingElement>(null);
  const words = text.split(" ");

  // Progress from when the block enters the bottom to when it reaches center-top.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "start 0.25"],
  });

  return (
    <h2
      ref={ref}
      className={className}
      aria-label={text}
    >
      <span aria-hidden className="flex flex-wrap">
        {words.map((word, i) => {
          const start = i / words.length;
          const end = start + 1 / words.length;
          return (
            <Word
              key={`${word}-${i}`}
              progress={scrollYProgress}
              range={[start, end]}
            >
              {word}
            </Word>
          );
        })}
      </span>
    </h2>
  );
}

function Word({
  children,
  progress,
  range,
}: {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.12, 1]);
  const y = useTransform(progress, range, ["0.25em", "0em"]);
  return (
    <span className="mr-[0.25em] inline-block overflow-hidden">
      <motion.span className="inline-block" style={{ opacity, y }}>
        {children}
      </motion.span>
    </span>
  );
}
