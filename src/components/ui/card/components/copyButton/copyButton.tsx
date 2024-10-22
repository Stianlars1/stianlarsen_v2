"use client";
import { copy } from "@stianlarsen/copy-to-clipboard";
import { useState } from "react";
import styles from "./css/copyButton.module.css";
export const CopyButton = ({ text }: { text: string }) => {
  const [copied, setCopied] = useState(false);
  const handleClick = (e: any) => {
    e.preventDefault();
    copy(text, () => setCopied(!copied));
  };
  return (
    <button onClick={handleClick} className={styles.copyButton}>
      {copied ? "Copied 🎉" : "copy 👈"}
    </button>
  );
};
