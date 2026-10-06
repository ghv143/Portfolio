"use client";

import KineticHeadline from "./KineticHeadline";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 border-t border-ink/10 px-5 py-24 sm:px-8 sm:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="mb-6 text-sm uppercase tracking-[0.25em] text-muted">
            (05) — Contact
          </p>
        </Reveal>

        <KineticHeadline
          text="Let's make something worth watching."
          className="max-w-4xl font-display text-5xl font-semibold leading-[1.02] tracking-tight sm:text-7xl"
        />

        <div className="mt-14 grid gap-10 border-t border-ink/10 pt-10 sm:grid-cols-2">
          <Reveal>
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-muted">
                Email
              </p>
              <a
                href="mailto:harishvarmagunturu@gmail.com"
                data-cursor="hover"
                className="group mt-2 inline-flex items-center gap-2 font-display text-2xl tracking-tight transition-colors hover:text-accent sm:text-3xl"
              >
                harishvarmagunturu@gmail.com
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  ↗
                </span>
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-muted">
                Phone
              </p>
              <a
                href="tel:+918309938864"
                data-cursor="hover"
                className="mt-2 inline-block font-display text-2xl tracking-tight transition-colors hover:text-accent sm:text-3xl"
              >
                +91 83099 38864
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.14}>
          <a
            href="mailto:harishvarmagunturu@gmail.com"
            data-cursor="hover"
            className="mt-12 inline-flex items-center gap-3 rounded-full bg-ink px-7 py-4 text-sm font-medium text-paper transition-transform hover:-translate-y-0.5"
          >
            Start a conversation
            <span className="inline-block h-2 w-2 rounded-full bg-paper" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
