import { Project } from "../projects";

export const project_minplen: Project = {
  title: "Min Plen - AI-Assisted Lawn Care Planner",
  publishDate: "2026-06-05",
  previewDate: "June 2026",
  description: [
    "Built Min Plen, a Norwegian lawn care guidance platform that generates step-by-step, seasonal maintenance plans tailored to local climate conditions. Users describe their lawn - soil type, shade, usage, problems like moss or compacted soil - and get a sequential task plan adapted to Norwegian growing seasons.",
    "Integrated AI-assisted plan suggestions where every change requires user approval, with support for user-supplied OpenAI or Anthropic API keys stored encrypted. Added photo history tracking so homeowners can document progress over time, and treated pesticide and chemical handling as explicit manual checkpoints for safety.",
    "Designed the entire experience for homeowners managing lawn projects over time - from new installations and repairs to family gardens - with a friendly, practical Norwegian voice.",
  ],
  technologies: [
    "Next.js",
    "React",
    "TypeScript",
    "AI Integration",
    "OpenAI API",
    "Anthropic API",
    "PostgreSQL",
    "Vercel",
  ],
  websiteUrl: "https://minplen.no",
};
