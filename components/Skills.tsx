"use client";

import { useRef, useState, useLayoutEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  AnimatePresence,
} from "framer-motion";
import AnimatedHeading from "./AnimatedHeading";
import Reveal from "./Reveal";

type Group = { title: string; blurb: string; items: string[] };

const groups: Group[] = [
  {
    title: "Design",
    blurb: "Clean, considered visuals that lead the eye.",
    items: ["Photo editing", "Thumbnails", "Graphical templates"],
  },
  {
    title: "Editing",
    blurb: "Pacing and rhythm that keep people watching.",
    items: [
      "Video editing",
      "Pacing",
      "Transitions",
      "Audio mixing",
      "Color correction & grading",
    ],
  },
  {
    title: "Motion",
    blurb: "Type and graphics that move with intent.",
    items: [
      "Animated typography",
      "Motion graphics",
      "Keyframing",
      "Visual transitions",
    ],
  },
  {
    title: "VFX",
    blurb: "Invisible fixes and bold composite work.",
    items: [
      "Green-screen removal",
      "Compositing",
      "Rotoscoping",
      "Camera tracking",
    ],
  },
  {
    title: "AI + 3D",
    blurb: "Modern pipelines that speed up production.",
    items: [
      "AI-video generation",
      "AI prompting",
      "3D modelling",
      "Texturing",
      "Rendering",
    ],
  },
];

export default function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [distance, setDistance] = useState(0);

  // Measure how far the track must travel so the last card lands flush,
  // regardless of breakpoint / card width.
  useLayoutEffect(() => {
    const measure = () => {
      const track = trackRef.current;
      if (!track) return;
      const overflow = track.scrollWidth - window.innerWidth;
      // Leave a small end margin so the final card isn't glued to the edge.
      setDistance(Math.max(0, overflow + 32));
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  // Vertical scroll through the tall section drives horizontal card travel.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Smooth the progress for buttery horizontal motion.
  const smooth = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    mass: 0.4,
  });

  // Translate the track by the measured pixel distance.
  const x = useTransform(smooth, [0, 1], [0, -distance]);

  // Progress bar width.
  const barWidth = useTransform(smooth, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative h-[320vh] scroll-mt-0 bg-paper"
    >
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
        {/* Heading */}
        <div className="mx-auto mb-10 w-full max-w-6xl px-5 sm:px-8">
          <Reveal>
            <p className="text-sm uppercase tracking-[0.25em] text-muted">
              (02) — Capabilities
            </p>
          </Reveal>
          <div className="mt-4 flex items-end justify-between gap-6">
            <AnimatedHeading
              as="h2"
              text="A full visual toolkit"
              className="max-w-3xl font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl"
            />
            <span className="hidden shrink-0 text-xs uppercase tracking-[0.2em] text-muted sm:flex sm:items-center sm:gap-2">
              Scroll
              <span className="inline-block h-px w-10 bg-ink/40" />
              Explore
            </span>
          </div>
        </div>

        {/* Horizontal track */}
        <motion.div
          ref={trackRef}
          style={{ x }}
          className="flex gap-6 pl-5 pr-5 sm:gap-8 sm:pl-8 sm:pr-8"
        >
          {groups.map((g, i) => (
            <Card key={g.title} group={g} index={i} />
          ))}
        </motion.div>

        {/* Progress bar */}
        <div className="mx-auto mt-10 w-full max-w-6xl px-5 sm:px-8">
          <div className="h-px w-full bg-ink/10">
            <motion.div style={{ width: barWidth }} className="h-px bg-ink" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Card({ group, index }: { group: Group; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.article
      data-cursor="hover"
      onHoverStart={() => setOpen(true)}
      onHoverEnd={() => setOpen(false)}
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -10 }}
      className="group relative flex h-[62vh] w-[78vw] shrink-0 flex-col justify-between overflow-hidden rounded-3xl border border-ink/15 bg-paper p-8 transition-colors duration-500 hover:bg-ink hover:text-paper sm:w-[52vw] lg:w-[34vw]"
    >
      {/* Giant index watermark */}
      <span
        aria-hidden
        className="pointer-events-none absolute -right-4 -top-10 select-none font-display text-[14rem] font-bold leading-none tracking-tightest text-ink/[0.04] transition-colors duration-500 group-hover:text-paper/[0.06]"
      >
        {index + 1}
      </span>

      <div className="relative z-10">
        <span className="text-sm text-muted transition-colors group-hover:text-paper/60">
          0{index + 1} / 05
        </span>
        <h3 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
          {group.title}
        </h3>
        <p className="mt-3 max-w-xs text-balance text-base leading-relaxed text-ink/60 transition-colors group-hover:text-paper/70">
          {group.blurb}
        </p>
      </div>

      {/* Interactive expanding skill list */}
      <div className="relative z-10">
        <div className="mb-4 h-px w-full bg-ink/10 transition-colors group-hover:bg-paper/15" />
        <ul className="flex flex-col gap-2">
          {group.items.map((it, j) => (
            <motion.li
              key={it}
              initial={false}
              animate={{
                opacity: open ? 1 : 0.55,
                x: open ? 0 : -4,
              }}
              transition={{ duration: 0.35, delay: open ? j * 0.05 : 0 }}
              className="flex items-center gap-3 text-[0.98rem]"
            >
              <motion.span
                animate={{ width: open ? 20 : 6 }}
                transition={{ duration: 0.35, delay: open ? j * 0.05 : 0 }}
                className="inline-block h-px shrink-0 bg-ink transition-colors group-hover:bg-paper"
              />
              {it}
            </motion.li>
          ))}
        </ul>

        <AnimatePresence>
          {open && (
            <motion.span
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 6 }}
              className="mt-5 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-paper/70"
            >
              {group.items.length} capabilities
              <span className="inline-block h-1 w-1 rounded-full bg-paper" />
            </motion.span>
          )}
        </AnimatePresence>
      </div>
    </motion.article>
  );
}
