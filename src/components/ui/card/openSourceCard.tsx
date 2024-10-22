"use client";
import { OpenSourceType } from "@/data/open_source/openSource";
import Link from "next/link";
import { LuExternalLink } from "react-icons/lu";
import { OpenSourceBorderBeam } from "./components/borderBeam/borderBeam";
import { CopyButton } from "./components/copyButton/copyButton";
import { ReactGradientAnimationBackground } from "./components/gradientBg/gradientBg";
import { Beam } from "./components/lightBeam/lightBeam";
import { MeteorsBackground } from "./components/meteorsBackground/meteorsBackground";
import { PreviewCode } from "./components/previewCode/previewCode";
import {
  OpenSourceFadeWordsDesc,
  OpenSourceFadeWordsTitle,
} from "./components/react-fade-effects/fadeWordsEffect";
import styles from "./css/card.module.css";

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

  if (showExamples && isCodePreviewCard) {
    return (
      <li
        className={`${styles.openSource} ${
          showExamples && isReactGradientAnimationCard
            ? styles.gradientLinkBg
            : ""
        } ${showExamples && isCodePreviewCard ? styles.codePreviewCard : ""}`}
      >
        {showExamples && isLightBeamCard && (
          <Beam className={styles.lightBeam} />
        )}
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
            <Link href={websiteUrl ? websiteUrl : npmUrl}>
              {showExamples && isReactFadeEffectsCard && (
                <OpenSourceFadeWordsTitle duration={1} title={title} />
              )}

              {!isReactFadeEffectsCard && title}

              <LuExternalLink className={styles.titleLink} />
            </Link>
          </h3>

          {showExamples && isReactFadeEffectsCard && (
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
      </li>
    );
  }
  return (
    <>
      <Link
        href={websiteUrl ? websiteUrl : npmUrl}
        className={`${styles.openSource} ${
          showExamples && isReactGradientAnimationCard
            ? styles.gradientLinkBg
            : ""
        }`}
      >
        {showExamples && isLightBeamCard && (
          <Beam className={styles.lightBeam} />
        )}
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

            {!isReactFadeEffectsCard && title}

            <LuExternalLink className={styles.titleLink} />
          </h3>

          {showExamples && isReactFadeEffectsCard && (
            <div className={styles.description}>
              <OpenSourceFadeWordsDesc title={description} />
            </div>
          )}

          {!isReactFadeEffectsCard && (
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
    </>
  );
};
