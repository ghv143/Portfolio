"use client";

import DotPattern from "@/components/ui/dot-pattern-1";
import KamranMascot from "@/components/KamranMascot";

/**
 * NameHero — the primary, editorial hero that puts the name front and centre
 * over a subtle dot-pattern background. Strict black & white, Poppins type.
 * Responsive: the name scales from mobile up to a dominant desktop display.
 * This is the single hero for the page (no duplicate name blocks).
 */
export function NameHero() {
  return (
    <section
      id="top"
      className="mx-auto flex min-h-[88vh] max-w-7xl items-center px-5 pb-16 pt-28 sm:px-6"
    >
      <div className="relative w-full overflow-hidden border border-white/15 bg-black">
        {/* Dot pattern sits behind content */}
        <DotPattern width={6} height={6} className="fill-white/15 md:fill-white/25" />

        <div className="relative z-20 flex min-h-[480px] flex-col items-center gap-10 px-6 py-16 sm:min-h-[520px] md:px-12 lg:flex-row lg:justify-between lg:gap-12 lg:px-20">
          {/* Left — name + text */}
          <div className="flex flex-col">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-white/60 sm:text-sm md:text-base">
              Video Editor · VFX Artist
            </p>

            <h1 className="font-display text-5xl font-semibold leading-[0.95] tracking-tightest text-white sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
              Gunturu
              <br />
              Harish Varma
            </h1>

            <p className="mt-6 max-w-2xl text-balance text-base leading-relaxed text-white/60 md:text-lg lg:text-xl">
              Turning ideas, briefs, and raw assets into polished video, motion
              graphics, and visual effects — tuned for pacing, color, and the
              way an audience feels every frame.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                data-cursor="hover"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-transform hover:-translate-y-0.5"
              >
                Start a project
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
              <a
                href="#skills"
                data-cursor="hover"
                className="text-sm text-white/60 underline-offset-4 transition-colors hover:text-white hover:underline"
              >
                See what I bring
              </a>
            </div>
          </div>

          {/* Right — large mascot beside the name */}
          <div className="shrink-0">
            <KamranMascot size={240} />
          </div>
        </div>

        {/* Corner markers — white (dark mode) */}
        <div className="absolute -left-1.5 -top-1.5 z-30 h-3 w-3 bg-white" />
        <div className="absolute -bottom-1.5 -left-1.5 z-30 h-3 w-3 bg-white" />
        <div className="absolute -right-1.5 -top-1.5 z-30 h-3 w-3 bg-white" />
        <div className="absolute -bottom-1.5 -right-1.5 z-30 h-3 w-3 bg-white" />
      </div>
    </section>
  );
}

export default NameHero;
