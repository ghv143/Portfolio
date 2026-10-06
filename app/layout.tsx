import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Cursor from "@/components/Cursor";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Gunturu Harish Varma — Video Editor & VFX Artist",
  description:
    "Visual content professional turning ideas, briefs, and raw assets into polished video, motion graphics, and VFX. Editing, color grading, compositing, and AI-driven production.",
  keywords: [
    "video editor",
    "VFX artist",
    "motion graphics",
    "color grading",
    "compositing",
    "Gunturu Harish Varma",
  ],
  openGraph: {
    title: "Gunturu Harish Varma — Video Editor & VFX Artist",
    description:
      "Polished video, motion graphics, and VFX. Editing, color grading, compositing, and AI-driven production.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.className}>
      <body className="grain">
        <Cursor />
        {children}
      </body>
    </html>
  );
}
