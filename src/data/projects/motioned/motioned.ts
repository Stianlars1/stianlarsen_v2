import { Project } from "../projects";

export const project_motioned: Project = {
  title: "Motioned - AI Micro-Animation Generator",
  publishDate: "2026-06-15",
  previewDate: "June 2026",
  description: [
    "Built Motioned, an AI-powered micro-animation generator for web interfaces. Describe the message — a hover, press, or toggle interaction — and get production-ready motion code exported as Tailwind CSS or CSS Modules.",
    "Combined a hand-tuned preset library of bento card animations with an AI generator that supports multiple animation engines: native CSS, Motion (motion/react), and GSAP. Every generation renders in a real-time preview that can be refined iteratively and shared via URL.",
    "Kept the tool free by letting users supply their own API keys, stored locally or encrypted server-side — no accounts, no lock-in.",
  ],
  technologies: [
    "Next.js",
    "React",
    "TypeScript",
    "Anthropic API",
    "OpenAI API",
    "Tailwind CSS",
    "Motion",
    "GSAP",
    "CSS Modules",
    "Vercel",
  ],
  websiteUrl: "https://motioned.io",
};
