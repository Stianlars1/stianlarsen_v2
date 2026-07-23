// sleipner.tsx

import { ReactNode } from "react";
import { Experience } from "../types";

const description: ReactNode = (
  <span>
    Full Stack Developer building and maintaining front-end and back-end systems
    across Sleipner&apos;s platforms, delivering high-quality solutions for
    users and business alike.
  </span>
);

export const sleipner: Experience = {
  publishDate: "2026-01-01",
  startDate: "January 2026",
  endDate: "Present",
  title: "Full Stack Developer",
  company: "Sleipner motor",
  location: "Fredrikstad, Norway",
  description: description,
  descriptionList: [
    <li key={"Front"}>
      <strong>Front-End:</strong> TypeScript and Next.js for responsive,
      user-friendly interfaces.
    </li>,
    <li key={"Back"}>
      <strong>Back-End:</strong> Python services and legacy system integration.
    </li>,
  ],
  technologies: ["TypeScript", "React", "Next.js", "Python", "Legacy Systems"],
  companyUrl: "https://no.sleipnergroup.com/",
};
