import { Project } from "../projects";

export const project_ampera: Project = {
  title: "Ampera AS - Energy Contractor Platform",
  publishDate: "2026-04-01",
  previewDate: "April 2026",
  description: [
    "Built the full website for Ampera AS, a Norwegian energy contractor (energientreprenør) based in Østfold/Viken. The platform serves as a B2B lead-generation site targeting grid operators like Elvia, Norgesnett, and BKK, showcasing 10 specialized distribution network and allied services.",
    "Developed a headless CMS architecture using Payload CMS 3 with PostgreSQL and AWS S3 for media storage. The CMS features custom content blocks (hero, text, checklist, columns, quotes, stats, FAQ, contact), reusable across all service pages and editorial content.",
    "Implemented multiple conversion flows including a Byggestrøm (temporary construction power) booking system, LFS safety leader inquiry forms, and general contact forms - all with server-side validation, reCAPTCHA v3 integration, and automatic CMS capture of submissions.",
    "Designed a complete HSL-based design system with CSS custom properties and CSS Modules, GSAP-powered animations, and interactive 3D elements via Spline. All UI text is in Norwegian with a direct, professional brand voice - no marketing fluff.",
  ],
  technologies: [
    "Next.js 16",
    "React 19",
    "TypeScript",
    "Payload CMS 3",
    "PostgreSQL",
    "AWS S3",
    "CSS Modules",
    "GSAP 3",
    "Zod",
    "Radix UI",
    "Spline 3D",
    "Lexical Rich Text",
    "Playwright",
    "Vercel",
  ],
  websiteUrl: "https://ampera.as",
};
