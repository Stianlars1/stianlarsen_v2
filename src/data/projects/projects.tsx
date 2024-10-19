import { ReactElement, ReactNode } from "react";
import { project_audiovisualizer } from "./audioVisualizer/audioVisualizer";
import { project_qr_kode } from "./qr-kode/project_qr-kode";
import { skipperenutleie } from "./skipperenutleie/skipperenutleie";
import { project_strek_kode } from "./strek-kode/project_strek-kode";
import { project_taskbuddy } from "./taskBuddy/project_taskbuddy";
import { project_tinify } from "./tinify/tinify";

export interface Project {
  publishDate: string; // e.g., "2023-05-01" (Date when the entry was published)
  title: string; // e.g., "Full Stack Web Developer, Accessibility"
  description: string | ReactNode | ReactNode[] | ReactElement | ReactElement[]; // Detailed description of the role
  technologies: string[]; // e.g., ["JavaScript", "TypeScript", "React"]
  websiteUrl: string; // e.g., "https://www.sparebank1.no"
  githubUrl?: string; // e.g., "
  previewDate: string;
}

export const projects: Project[] = [
  project_tinify,
  project_taskbuddy,
  project_strek_kode,
  project_qr_kode,
  skipperenutleie,
  project_audiovisualizer,
].sort(
  (a, b) =>
    new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
);
