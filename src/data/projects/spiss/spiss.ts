import { Project } from "../projects";

export const project_spiss: Project = {
  title: "Spiss - Evidence-Based CV Tailoring",
  publishDate: "2026-06-10",
  previewDate: "June 2026",
  description: [
    "Created Spiss, an AI-powered tool that generates consultant CVs tailored to specific job listings and tenders - with full source traceability. The core philosophy: no claims without sources. Every sentence in a generated CV is anchored in documented evidence from the candidate's own material.",
    "Built multi-format ingestion that extracts and structures experience from PDFs, Word documents, images, GitHub profiles, and websites into a master profile. A requirements matrix compares each job listing against documented qualifications and red-flags unmet requirements instead of fabricating them.",
    "Designed for job applicants and consultancies that need transparent, verifiable CVs per bid - preventing resume embellishment while making every claim auditable.",
  ],
  technologies: [
    "Next.js",
    "React",
    "TypeScript",
    "AI Integration",
    "Document Parsing",
    "GitHub API",
    "PostgreSQL",
    "Vercel",
  ],
  websiteUrl: "https://www.spiss.app",
};
