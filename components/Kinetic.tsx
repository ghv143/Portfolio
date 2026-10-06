"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import KineticHeadline from "./KineticHeadline";

/**
 * Kinetic — an Apple-style kinetic typography section that now carries the
 * full "About" content. A tall sticky stage:
 *   1. "What I bring to the table" writes itself word-by-word on scroll.
 *   2. "A visual content professional" + the two paragraphs reveal.
 *   3. The three stats fade in.
 * All tied to scroll progress for the older-Apple scroll-driven feel.
 */

const stats = [
  { value: "30%", label: "Faster production with AI workflows" },
  { value: "Multi", label: "Streams of visual content" },
  { value: "End-to-end", label: "Concept to final delivery" },
];

export default function Kinetic() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Headline stage lifts gently and fades as the body takes over.
  const headScale = useTransform(scrollYProgress, [0, 0.35], [0.92, 1.04]);
  const headOpacity = useTransform(
    scrollYProgress,
    [0, 0.1, 0.34, 0.42],
    [0, 1, 1, 0]
  );

  // Body (eyebrow + sub-headline + paragraphs) reveals as the headline clears.
  const bodyOpacity = useTransform(scrollYProgress, [0.4, 0.5, 0.86, 0.96], [0, 1, 1, 0]);
  const bodyY = useTransform(scrollYProgress, [0.4, 0.5], ["2rem", "0rem"]);

  return (
    <section
      id="about"
      ref={ref}
      className="relative h-[420vh] scroll-mt-0 text-white"
      aria-label="About — What I bring to the table"
    >
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden px-5 sm:px-8">
        {/* Stage 1 — kinetic headline */}
        <motion.div
          style={{ scale: headScale, opacity: headOpacity }}
          className="absolute mx-auto max-w-5xl text-center"
        >
          <KineticHeadline
            text="What I bring to the table"
            className="justify-center text-balance font-display text-5xl font-semibold leading-[1.02] tracking-tightest sm:text-7xl lg:text-8xl"
          />
        </motion.div>

        {/* Stage 2 — the About content */}
        <motion.div
          style={{ opacity: bodyOpacity, y: bodyY }}
          className="mx-auto grid w-full max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr]"
        >
          <div>
            <p className="mb-5 text-sm uppercase tracking-[0.25em] text-white/50">
              (01) — About
            </p>
            <h3 className="font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              A visual content professional
            </h3>
          </div>

          <div className="flex flex-col gap-6 text-lg leading-relaxed text-white/70">
            <p className="text-balance">
              I approach each deliverable as more than an obligation —
              considering visual hierarchy, pacing, typography, sound, and the
              way an audience will experience the final piece.
            </p>
            <p className="text-balance">
              I&apos;m comfortable taking a requirement from initial concept
              through multiple discussions in creative execution and final
              delivery — shaping content so information is easier to understand
              and genuinely engaging.
            </p>

            <div className="mt-4 grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
              {stats.map((s) => (
                <div key={s.value}>
                  <div className="font-display text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                    {s.value}
                  </div>
                  <div className="mt-1 text-sm leading-snug text-white/50">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
