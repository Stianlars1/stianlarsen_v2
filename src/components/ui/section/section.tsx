import { ReactNode } from "react";
import styles from "./css/section.module.css";
export type Sections = "experience" | "projects";
export const Section = ({
  title,
  children,
}: {
  title: Sections;
  children: ReactNode;
}) => {
  return (
    <section className={styles.section}>
      <header className={styles.header}>
        <h2 className={styles.title}>{title.toUpperCase()}</h2>
      </header>
      {children}
    </section>
  );
};
