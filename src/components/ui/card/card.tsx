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
import { PreviewCode } from "./components/previewCode/previewCode";
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
    showExamples,
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

  if (showExamples && (isCodePreviewCard || isCopyCard)) {
    return (
      <li
        key={JSON.stringify(packageName + showExamples)}
        className={`${styles.openSource}  ${showExamples && (isCodePreviewCard || isCopyCard) ? styles.noHoverCard : ""}`}
      >
        <header className={styles.header}>
          <span>{publishDate}</span>

          {downloads && (
            <div className={styles.downloadsBadge}>
              <span>{downloads.toLocaleString()} downloads last month</span>
            </div>
          )}
        </header>

        <div className={styles.content}>
          <h3 className={styles.title}>
            <Link
              className={styles.linkTitle}
              href={websiteUrl ? websiteUrl : npmUrl}
            >
              {title}

              <LuExternalLink className={styles.titleLink} />
            </Link>
          </h3>

          {!isReactFadeEffectsCard && (
            <p className={styles.description}>{description}</p>
          )}

          {showExamples && isCopyCard && (
            <CopyButton text={`Copy was successfull🎉`} />
          )}
          {showExamples && isCodePreviewCard && <PreviewCode />}
        </div>
      </li>
    );
  }

  return (
    <Link
      href={websiteUrl ? websiteUrl : npmUrl}
      className={`${styles.openSource} ${
        showExamples && isReactGradientAnimationCard
          ? styles.gradientLinkBg
          : ""
      }`}
    >
      {showExamples && isLightBeamCard && <Beam className={styles.lightBeam} />}
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
            showExamples && isReactFadeEffectsCard ? styles.fadeTitle : ""
          } ${showExamples && isMeteorsCard ? styles.meteorsTitle : ""}`}
        >
          {showExamples && isReactFadeEffectsCard && (
            <OpenSourceFadeWordsTitle duration={1} title={title} />
          )}

          {(!isReactFadeEffectsCard ||
            (isReactFadeEffectsCard && !showExamples)) &&
            title}

          <LuExternalLink className={styles.titleLink} />
        </h3>

        {showExamples && isReactFadeEffectsCard && (
          <div className={styles.description}>
            <OpenSourceFadeWordsDesc title={description} />
          </div>
        )}

        {(!isReactFadeEffectsCard ||
          (isReactFadeEffectsCard && !showExamples)) && (
          <p
            className={`${styles.description} ${
              showExamples && isReactGradientAnimationCard
                ? styles.gradientDescription
                : ""
            } ${showExamples && isMeteorsCard ? styles.meteorsDescription : ""} ${
              showExamples && isLightBeamCard ? styles.lightBeamDesc : ""
            }`}
          >
            {description}
          </p>
        )}

        {showExamples && isCopyCard && (
          <CopyButton text={`Copy was successfull🎉`} />
        )}
        {showExamples && isCodePreviewCard && <PreviewCode />}
      </div>

      {showExamples && isReactGradientAnimationCard && (
        <ReactGradientAnimationBackground className={styles.gradientBg} />
      )}

      {showExamples && isMeteorsCard && <MeteorsBackground />}

      {showExamples && isBorderBeamCard && <OpenSourceBorderBeam />}
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
