import { Project } from "../projects";

export const project_payload_img_convert: Project = {
  title: "payload-img-convert - Image Conversion Plugin for Payload CMS",
  publishDate: "2026-03-02",
  previewDate: "March 2026",
  description: [
    "An open-source Payload CMS v3 plugin that automatically converts and resizes uploaded images to modern formats like WebP and AVIF using Sharp. Solves the gap where Payload 3 lacks built-in format conversion - no manual work needed, just install and configure.",
    "Features automatic format conversion (WebP, AVIF, PNG, JPEG), aspect-ratio-preserving resize, max file size guards, per-format quality options, and a kill switch for disabling conversion without schema drift. SVGs and GIFs are intelligently skipped.",
    "Includes custom admin UI components: a format selector dropdown in the upload sidebar with file size savings display (e.g., 'Saved 42%'), a collapsible resize panel with oversize image detection and auto-fill suggestions, and quality degradation warnings for lossy-to-lossy re-conversion.",
    "Built with zero Sharp dependency - uses Payload's managed Sharp instance. Supports re-conversion of existing uploads without re-uploading. Published on npm with three entry points: main plugin, type exports, and client components for Next.js RSC compatibility.",
  ],
  technologies: [
    "TypeScript",
    "Payload CMS 3",
    "React 19",
    "Sharp",
    "SWC",
    "Next.js",
    "npm",
  ],
  websiteUrl: "https://payload-img-convert.com",
  githubUrl: "https://github.com/stianlars1/payload-img-convert",
};
