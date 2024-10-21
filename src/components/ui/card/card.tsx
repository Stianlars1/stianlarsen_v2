import { Experience } from "@/data/experiences/experiences";
import { OpenSourceType } from "@/data/open_source/openSource";
import { Project } from "@/data/projects/projects";
import Link from "next/link";

import { LuExternalLink } from "react-icons/lu";
import { OpenSourceBorderBeam } from "./components/borderBeam/borderBeam";
import { CopyButton } from "./components/copyButton/copyButton";
import { ReactGradientAnimationBackground } from "./components/gradientBg/gradientBg";
import { Beam } from "./components/lightBeam/lightBeam";
import { MeteorsBackground } from "./components/meteorsBackground/meteorsBackground";
import { ProjectStatus } from "./components/projectStatus/projectStatus";
import {
  OpenSourceFadeWordsDesc,
  OpenSourceFadeWordsTitle,
} from "./components/react-fade-effects/fadeWordsEffect";
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
export const OpenSourceCard = (project: OpenSourceType) => {
  const {
    websiteUrl,
    title,
    description,
    publishDate,
    npmUrl,
    downloads,
    packageName,
  } = project;

  const isReactGradientAnimationCard =
    packageName === "react-gradient-animation";

  const isReactFadeEffectsCard =
    packageName === "@stianlarsen/react-fade-effects";

  const isMeteorsCard = packageName === "@stianlarsen/meteors";
  const isBorderBeamCard = packageName === "@stianlarsen/border-beam";
  const isCopyCard = packageName === "@stianlarsen/copy-to-clipboard";
  const isLightBeamCard = packageName === "@stianlarsen/react-light-beam";
  const isCodePreviewCard = packageName === "@stianlarsen/react-code-preview";
  return (
    <>
      <Link
        href={websiteUrl ? websiteUrl : npmUrl}
        className={`${styles.openSource} ${
          isReactGradientAnimationCard ? styles.gradientLinkBg : ""
        }`}
      >
        {isLightBeamCard && <Beam className={styles.lightBeam} />}
        <header className={styles.header}>
          <span>{publishDate}</span>

          {downloads && (
            <div className={styles.downloadsBadge}>
              <span>{downloads.toLocaleString()} downloads last month</span>
            </div>
          )}
        </header>

        <div className={styles.content}>
          <h3
            className={`${styles.title} ${
              isReactFadeEffectsCard ? styles.fadeTitle : ""
            } ${isMeteorsCard ? styles.meteorsTitle : ""}`}
          >
            {isReactFadeEffectsCard && (
              <OpenSourceFadeWordsTitle duration={1} title={title} />
            )}

            {!isReactFadeEffectsCard && title}

            <LuExternalLink className={styles.titleLink} />
          </h3>

          {isReactFadeEffectsCard && (
            <div className={styles.description}>
              <OpenSourceFadeWordsDesc title={description} />
            </div>
          )}

          {!isReactFadeEffectsCard && (
            <p
              className={`${styles.description} ${
                isReactGradientAnimationCard ? styles.gradientDescription : ""
              } ${isMeteorsCard ? styles.meteorsDescription : ""} ${
                isLightBeamCard ? styles.lightBeamDesc : ""
              }`}
            >
              {description}
            </p>
          )}

          {isCopyCard && <CopyButton text={`Copy was successfull🎉`} />}

          {/* {isCodePreviewCard && <CodePreviewer />} */}
        </div>

        {isReactGradientAnimationCard && (
          <ReactGradientAnimationBackground className={styles.gradientBg} />
        )}

        {isMeteorsCard && <MeteorsBackground />}

        {isBorderBeamCard && <OpenSourceBorderBeam />}
      </Link>
    </>
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
