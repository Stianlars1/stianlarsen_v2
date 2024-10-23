import { Experience } from "@/data/experiences/experiences";
import { Project } from "@/data/projects/projects";
import Link from "next/link";
import { LuExternalLink } from "react-icons/lu";
import { ProjectStatus } from "./components/projectStatus/projectStatus";
import styles from "./css/card.module.css";

export const ProjectCard = async (props: Project) => {
  const { websiteUrl, title, description, technologies, previewDate } = props;
  return (
    <Link href={websiteUrl} className={styles.project}>
      <header className={styles.header}>
        <span>{previewDate}</span>

        <ProjectStatus url={websiteUrl} />
      </header>

      <div className={styles.content}>
        <h3 className={styles.title}>
          {title} <LuExternalLink className={styles.titleLink} />
        </h3>

        <p className={styles.description}>{description}</p>

        <ul className={styles.techList}>
          {technologies.sort().map((tech) => (
            <li className={styles.techItem} key={JSON.stringify(tech)}>
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </Link>
  );
};

export const ExperienceCard = (props: Experience) => {
  // q: give me the circle symbol below in a comment
  // *
  const {
    title,
    company,
    startDate,
    endDate,
    description,
    technologies,
    companyUrl,
    descriptionList,
  } = props;
  return (
    <Link href={companyUrl || ""} className={styles.experience}>
      <header className={styles.header}>
        {startDate} - {endDate}
      </header>

      <div className={styles.content}>
        <h3 className={styles.title}>
          {title} <span style={{ fontSize: "1rem" }}>•</span> {company}{" "}
          <LuExternalLink className={styles.titleLink} />
        </h3>

        <p className={styles.description}>{description}</p>
        <ul className={styles.descriptionList}>
          {descriptionList?.map((item) => item)}
        </ul>

        <ul className={styles.techList}>
          {technologies.sort().map((tech) => (
            <li className={styles.techItem} key={JSON.stringify(tech)}>
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </Link>
  );
};
