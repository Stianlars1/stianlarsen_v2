import {ReactNode} from "react";
import styles from "./css/section.module.css";

export type Sections = "experience" | "projects" | "Open Source Projects";
export const Section = ({
  title,
  children,
                            id
}: {
  title: Sections;
  children: ReactNode;
    id: string
}) => {
  return (
      <section id={id} className={styles.section}>
      <header className={styles.header}>
        <h2 className={styles.title}>{title.toUpperCase()}</h2>
      </header>
      {children}
    </section>
  );
};
