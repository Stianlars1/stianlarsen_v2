import { ReactElement, ReactNode } from "react";
import { project_audiovisualizer } from "./audioVisualizer/audioVisualizer";
import { qr_code } from "./qr-kode/project_qr-kode";
import { skipperenutleie } from "./skipperenutleie/skipperenutleie";
import { project_strek_kode } from "./strek-kode/project_strek-kode";
import { taskbuddy_app } from "./taskBuddy/taskbuddy_app";
import { taskbuddy_landingpage } from "./taskBuddy/taskbuddy_landingpage";
import { project_tinify } from "./tinify/tinify";
import { project_colorPalette } from "@/data/projects/colorPalette/colorPalette";
import { project_sonio } from "@/data/projects/sonio/sonio";
import { project_cssVariablesAssistant } from "@/data/projects/cssVariablesAssistant/cssVariablesAssistant";
import { project_rampkit } from "@/data/projects/rampkit/rampkit";

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
  project_rampkit,
  project_cssVariablesAssistant,
  project_sonio,
  project_colorPalette,
  project_tinify,
  taskbuddy_app,
  taskbuddy_landingpage,
  project_strek_kode,
  qr_code,
  skipperenutleie,
  project_audiovisualizer,
].sort(
  (a, b) =>
    new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime(),
);
