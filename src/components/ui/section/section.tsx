import { ReactNode } from "react";
import styles from "./css/section.module.css";

export type Sections =
  | "experience"
  | "projects"
  | "Open Source Projects"
  | "macOS Apps";
export const Section = ({
  title,
  children,
  id,
  preserveTitleCase = false,
}: {
  title: Sections;
  children: ReactNode;
  id: string;
  preserveTitleCase?: boolean;
}) => {
  return (
    <section id={id} className={styles.section}>
      <header className={styles.header}>
        <h2 className={styles.title}>
          {preserveTitleCase ? title : title.toUpperCase()}
        </h2>
      </header>
      {children}
    </section>
  );
};
