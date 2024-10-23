"use client";
import { useState } from "react";
import styles from "./css/previewCode.module.css";
import { CodePreview } from "@stianlarsen/react-code-preview";

const code = `
const DemoButton = () => {
    const [clicked, setClicked] = useState(false);
    const handleClick = () => {
        setClicked(true);
    };
    return (
        <button onClick={handleClick} className={styles.codePreviewDemoButton}>
          {clicked ? "Clicked 🎉" : "Click me"}
        </button>
)}
`;

export const PreviewCode = () => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(true);
  };
  return (
    <CodePreview
      code={code}
      style={{
        backgroundColor: "hsl(var(--background))",
        borderRadius: "1rem",
      }}
      component={() => (
        <button onClick={handleClick} className={styles.codePreviewDemoButton}>
          {clicked ? "Clicked 🎉" : "Click me"}
        </button>
      )}
    />
  );
};
