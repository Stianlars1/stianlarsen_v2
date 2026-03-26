"use client";
import { OpenSourceType } from "@/data/open_source/openSource";
import dynamic from "next/dynamic";
import Link from "next/link";
import { LuExternalLink } from "react-icons/lu";
import styles from "./css/card.module.scss";

const OpenSourceBorderBeam = dynamic(
  () =>
    import("./components/borderBeam/borderBeam").then(
      (module) => module.OpenSourceBorderBeam,
    ),
  { ssr: false },
);

const CopyButton = dynamic(
  () =>
    import("./components/copyButton/copyButton").then(
      (module) => module.CopyButton,
    ),
  { ssr: false },
);

const ReactGradientAnimationBackground = dynamic(
  () =>
    import("./components/gradientBg/gradientBg").then(
      (module) => module.ReactGradientAnimationBackground,
    ),
  { ssr: false },
);

const Beam = dynamic(
  () =>
    import("./components/lightBeam/lightBeam").then((module) => module.Beam),
  { ssr: false },
);

const MeteorsBackground = dynamic(
  () =>
    import("./components/meteorsBackground/meteorsBackground").then(
      (module) => module.MeteorsBackground,
    ),
  { ssr: false },
);

const PreviewCode = dynamic(
  () =>
    import("./components/previewCode/previewCode").then(
      (module) => module.PreviewCode,
    ),
  { ssr: false },
);

const OpenSourceFadeWordsDesc = dynamic(
  () =>
    import("./components/react-fade-effects/fadeWordsEffect").then(
      (module) => module.OpenSourceFadeWordsDesc,
    ),
  { ssr: false },
);

const OpenSourceFadeWordsTitle = dynamic(
  () =>
    import("./components/react-fade-effects/fadeWordsEffect").then(
      (module) => module.OpenSourceFadeWordsTitle,
    ),
  { ssr: false },
);

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
        key={packageName}
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
            <CopyButton
              className={styles.copyCardButton}
              text={`Copy was successfull🎉`}
            />
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
