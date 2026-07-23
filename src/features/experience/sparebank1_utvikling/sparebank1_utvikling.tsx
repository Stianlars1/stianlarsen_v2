// sparebank1_utvikling.ts

import { ReactNode } from "react";
import { Experience } from "../types";
import { hasLeftSparebank1 } from "@/features/experience/utils";

const description: ReactNode = (
  <span>
    Full Stack Developer on <strong>Team Overview</strong>, building and
    maintaining the bank&apos;s primary landing page - the daily overview of
    accounts, transactions, loans, and financial tools across mobile and
    desktop.
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
      <strong>Front-End:</strong> TypeScript and React for responsive,
      user-friendly interfaces.
    </li>,
    <li key={"Back"}>
      <strong>Back-End:</strong> Kotlin and Spring Boot services on AWS.
    </li>,
    <li key={"Agile"}>
      <strong>Ways of Working:</strong> Mob programming, agile practices, and
      data-driven product decisions with designers and product managers.
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
