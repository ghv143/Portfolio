"use client";

import AnimatedHeading from "./AnimatedHeading";
import Reveal from "./Reveal";
import { WordRotate } from "./ui/word-rotate";

const aiTools = ["Gemini", "Google Flow", "Higgsfield"];

export default function Software() {
  return (
    <section id="software" className="scroll-mt-24 px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="mb-5 text-sm uppercase tracking-[0.25em] text-muted">
            (04) — Toolkit
          </p>
        </Reveal>

        {/* Main highlight: "Software I work in" + giant rotating tool name */}
        <div className="flex flex-col items-center py-10 text-center sm:py-16">
          <AnimatedHeading
            as="h2"
            text="Software I work in"
            className="font-display text-3xl font-semibold leading-tight tracking-tight text-ink/70 sm:text-4xl"
          />

          <Reveal delay={0.1}>
            <span className="mt-6 block text-sm uppercase tracking-[0.3em] text-muted">
              Fluent in
            </span>
          </Reveal>

          <WordRotate
            duration={1500}
            words={[
              "Photoshop",
              "Premiere Pro",
              "After Effects",
              "DaVinci Resolve",
              "Blender",
              "Nuke",
            ]}
            className="font-display text-6xl font-bold leading-[0.95] tracking-tightest text-ink sm:text-8xl lg:text-9xl"
          />

          <Reveal delay={0.15}>
            <div className="mt-4 h-px w-24 bg-ink/20" />
          </Reveal>
        </div>

        {/* AI Tools */}
        <Reveal delay={0.1}>
          <div className="mx-auto mt-10 flex max-w-3xl flex-col rounded-2xl border border-white/15 bg-white/5 p-7 text-white sm:p-10">
            <h3 className="font-display text-xl font-semibold tracking-tight">
              AI Tools
            </h3>
            <p className="mt-2 text-sm text-white/60">
              Powering faster ideation &amp; production
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {aiTools.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/20 px-4 py-2 text-sm text-white/90"
                >
                  {t}
                </span>
              ))}
            </div>
            <p className="mt-8 max-w-xl text-sm leading-relaxed text-white/60">
              AI-generated visual assets and prompting workflows that support
              ideation and speed up creative output.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
