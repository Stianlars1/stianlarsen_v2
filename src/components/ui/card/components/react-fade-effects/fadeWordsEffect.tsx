"use client";
import { FadedWords } from "@stianlarsen/react-fade-effects";

export const OpenSourceFadeWordsTitle = ({
  title,
  duration = 1,
}: {
  title: string;
  duration: number;
}) => {
  const text = title;
  const splitChar = /[\/\-]/;

  return (
    <FadedWords
      delay={0}
      duration={duration}
      variant="up"
      scaleSize={1.1}
      words={text}
      splitChar={splitChar}
      includeSpaces={false}
      once={false}
      filter
    />
  );
};
export const OpenSourceFadeWordsDesc = ({ title }: { title: string }) => {
  const text = title;

  return (
    <FadedWords
      delay={0}
      variant="up"
      scaleSize={1.1}
      filter
      duration={1}
      staggerTime={0.02}
      translateAmount={5}
      words={text}
      once={false}
    />
  );
};
