// sparebank1_utvikling.ts

import { ReactNode } from "react";
import { Experience } from "../types";

const description: ReactNode = (
  <span>
    At Sleipner Motor, I serve as a Full Stack Developer. My role involves
    developing and maintaining both front-end and back-end systems, ensuring
    seamless integration and functionality across our platforms. I work with a
    variety of technologies to deliver high-quality solutions that meet the
    needs of our users and business objectives.
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
      <strong>Front-End Development:</strong> Utilize TypeScript and Next.js to
      create responsive and user-friendly interfaces.
    </li>,
    <li key={"Back"}>
      <strong>Back-End Development:</strong> Work with Python to develop robust
      backend services.
    </li>,
  ],
  technologies: ["TypeScript", "React", "Next.js", "Python", "Legacy Systems"],
  companyUrl: "https://no.sleipnergroup.com/",
};
