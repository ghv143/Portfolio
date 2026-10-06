"use client";

const items = [
  "Video Editing",
  "Motion Graphics",
  "Color Grading",
  "VFX & Compositing",
  "Rotoscoping",
  "Camera Tracking",
  "3D & Rendering",
  "AI Production",
];

export default function Marquee() {
  const row = [...items, ...items];
  return (
    <div className="border-y border-white/15 bg-black py-5 text-white">
      <div className="flex overflow-hidden">
        <div className="flex shrink-0 animate-marquee items-center gap-10 pr-10">
          {row.map((it, i) => (
            <span
              key={i}
              className="flex items-center gap-10 whitespace-nowrap font-display text-xl tracking-tight sm:text-2xl"
            >
              {it}
              <span className="text-white/50">✦</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
