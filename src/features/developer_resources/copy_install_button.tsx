"use client";

import { copy } from "@stianlarsen/copy-to-clipboard";
import { FiCheck, FiCopy } from "react-icons/fi";
import { useEffect, useRef, useState } from "react";
import styles from "./developer_resources.module.scss";

export const CopyInstallButton = ({ command }: { command: string }) => {
  const [copied, setCopied] = useState(false);
  const resetTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (resetTimer.current) {
        clearTimeout(resetTimer.current);
      }
    };
  }, []);

  const handleCopy = () => {
    copy(command, () => {
      setCopied(true);

      if (resetTimer.current) {
        clearTimeout(resetTimer.current);
      }

      resetTimer.current = setTimeout(() => setCopied(false), 1800);
    });
  };

  return (
    <button
      type="button"
      className={styles.copyButton}
      onClick={handleCopy}
      aria-label={copied ? "Install command copied" : "Copy install command"}
    >
      <span aria-live="polite">{copied ? "Copied" : "Copy"}</span>
      {copied ? <FiCheck aria-hidden="true" /> : <FiCopy aria-hidden="true" />}
    </button>
  );
};
