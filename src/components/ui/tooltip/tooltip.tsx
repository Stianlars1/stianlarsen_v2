"use client";
import React, { ReactNode, useEffect, useRef, useState } from "react";
import styles from "./css/tooltip.module.css";
interface TooltipProps {
  children: ReactNode;
  content: ReactNode;
}

export const Tooltip: React.FC<TooltipProps> = ({ children, content }) => {
  const [hover, setHover] = useState<boolean>(false);
  const tooltipRef = useRef<HTMLDivElement | null>(null);
  const tooltipContentRef = useRef<HTMLDivElement | null>(null);

  // Function to adjust tooltip position dynamically
  const updateTooltipPosition = () => {
    if (
      !tooltipContentRef.current ||
      !tooltipRef.current ||
      typeof window === "undefined"
    )
      return;

    const { left, right, top } =
      tooltipContentRef.current.getBoundingClientRect();

    const padding = 30;

    if (left < padding) {
      tooltipRef.current.style.left = `${Math.abs(left) + padding}px`;
    }

    if (right > window.innerWidth - padding) {
      tooltipContentRef.current.style.transform = `translateX(${window.innerWidth - right - padding}px)`;
    }

    if (top < 0) {
      tooltipContentRef.current.style.top = "unset";
      tooltipContentRef.current.style.bottom = "0";
      tooltipRef.current.style.transform = "translateY(calc(100% + 8px))";
    }
  };

  const onMouseEnter = () => {
    setHover(true);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        if (hover) updateTooltipPosition();
      };
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, [hover]);

  useEffect(() => {
    if (hover) {
      updateTooltipPosition();
    }
  }, [hover]);

  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={() => setHover(false)}
      className={styles.tooltipWrapper}
    >
      {hover && (
        <div className={styles.tooltipContentWrapper} ref={tooltipRef}>
          <div className={styles.tooltipContent} ref={tooltipContentRef}>
            {content}
          </div>
        </div>
      )}
      {children}
    </div>
  );
};
