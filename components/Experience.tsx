"use client";

import AnimatedHeading from "./AnimatedHeading";
import Reveal from "./Reveal";

const bullets = [
  "Turned ideas, briefs, and raw assets into polished visual content using video editing, motion graphics, animated text, transitions, and visual effects.",
  "Shaped content with attention to pacing, composition, typography, sound, and overall viewing flow so information is easier to understand and engage with.",
  "Created green-screen replacements and composites, combining visual elements into cohesive final shots across multiple forms of video content.",
  "Mixed dialogue, music, and sound effects to improve clarity and create a complete viewing experience.",
  "Applied color correction and grading to give content a consistent visual tone and finished look.",
  "Used AI-generated assets and prompting workflows to support ideation and speed up production — improving efficiency by 30%.",
  "Designed thumbnails, graphical templates, job creatives, and promotional content for digital channels including LinkedIn and WhatsApp.",
  "Supported candidate/resume information workflows alongside creative work — contributing to faster recruitment and selecting the right talent.",
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-24 border-y border-white/10 px-5 py-24 text-white sm:px-8 sm:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 flex flex-col gap-5">
          <Reveal>
            <p className="text-sm uppercase tracking-[0.25em] text-white/50">
              (03) — Experience
            </p>
          </Reveal>
          <AnimatedHeading
            as="h2"
            text="Where I've been working"
            className="font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl"
          />
        </div>

        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <h3 className="font-display text-3xl font-semibold tracking-tight">
                Parsipanny Technologies
              </h3>
              <p className="mt-2 text-white/70">
                Graphic Designer &amp; Support Specialist
              </p>
              <p className="mt-4 inline-flex rounded-full border border-white/20 px-3 py-1 text-sm text-white/60">
                April 2024 — Present
              </p>
              <p className="mt-6 max-w-sm text-balance leading-relaxed text-white/70">
                Working across multiple streams — bridging creative production
                and day-to-day operational needs in talent acquisition.
              </p>
            </div>
          </Reveal>

          <ul className="flex flex-col">
            {bullets.map((b, i) => (
              <Reveal key={i} delay={i * 0.04}>
                <li className="flex gap-5 border-t border-white/10 py-5">
                  <span className="font-display text-sm text-white/60">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-balance leading-relaxed text-white/80">
                    {b}
                  </p>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
