import { ReactElement, ReactNode } from "react";

export interface Experience {
  publishDate: string; // e.g., "2023-05-01" (Date when the entry was published)
  startDate: string; // e.g., "2024"
  endDate?: string; // e.g., "Present"
  title: string; // e.g., "Full Stack Web Developer, Accessibility"
  company: string; // e.g., "Spb1"
  location?: string; // e.g., "Remote" or "Boston, MA"
  description: string | ReactNode | ReactNode[] | ReactElement | ReactElement[]; // Detailed description of the role
  responsibilities?: string[]; // An array of bullet points (if applicable)
  technologies: string[]; // e.g., ["JavaScript", "TypeScript", "React"]
  companyUrl?: string; // e.g., "https://www.sparebank1.no"
  descriptionList?: ReactNode[];
}
