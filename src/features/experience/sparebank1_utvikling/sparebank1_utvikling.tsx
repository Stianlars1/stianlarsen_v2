// sparebank1_utvikling.ts

import { ReactNode } from "react";
import { Experience } from "../types";
import { hasLeftSparebank1 } from "@/features/experience/utils";

const description: ReactNode = (
  <span>
    At SpareBank 1 Utvikling, I serve as a Full Stack Developer on{" "}
    <strong>Team Overview</strong>, responsible for building and maintaining
    critical front-end and back-end services for the bank&apos;s primary user
    interface across mobile and desktop platforms. Our team delivers the landing
    page that provides users with a comprehensive overview of their daily
    transactions, accounts, loans, debts, and financial tools.
  </span>
);

export const sparebank1_utvikling: Experience = {
  publishDate: "2023-05-01",
  startDate: "June 2023",
  endDate: hasLeftSparebank1() ? "2025-12-31" : "Present",
  title: "Full Stack Developer",
  company: "SpareBank 1 Utvikling",
  location: "Oslo, Norway",
  description: description,
  descriptionList: [
    <li key={"Front"}>
      <strong>Front-End Development:</strong> Utilize TypeScript and React to
      create responsive and user-friendly interfaces.
    </li>,
    <li key={"Back"}>
      <strong>Back-End Development:</strong> Work with Kotlin and Spring Boot to
      develop robust backend services.
    </li>,
    <li key={"Agile"}>
      <strong>Agile Methodologies:</strong> Engage in mob programming and agile
      practices to accelerate development cycles and enhance code quality.
    </li>,

    <li key={"Data"}>
      <strong>Data-Driven Decisions:</strong> Leverage user interaction data to
      inform product decisions, ensuring features meet user needs and business
      objectives.
    </li>,
    <li key={"Cross"}>
      <strong>Cross-Functional Collaboration:</strong> Collaborate with
      designers, product managers, and other developers to meet quarterly OKRs
      and drive continuous improvement.
    </li>,
  ],
  technologies: [
    "TypeScript",
    "React",
    "Kotlin",
    "Spring Boot",
    "AWS",
    "Agile",
    "Mob Programming",
  ],
  companyUrl: "https://www.sparebank1.no",
};
