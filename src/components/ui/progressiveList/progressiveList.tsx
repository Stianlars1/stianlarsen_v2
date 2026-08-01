"use client";

import { OrderedList } from "@/components/ui/orderedList/orderedList";
import { FiChevronDown } from "react-icons/fi";
import {
  MouseEvent as ReactMouseEvent,
  ReactNode,
  TransitionEvent,
  useId,
  useRef,
  useState,
} from "react";
import styles from "./progressiveList.module.scss";

type ProgressiveListPhase =
  | "collapsed"
  | "expanding"
  | "expanded"
  | "collapsing";

export interface ProgressiveListProps {
  id: string;
  initialVisible?: number;
  totalCount: number;
  expandLabel: string;
  collapseLabel: string;
  children: ReactNode;
}

export const ProgressiveList = ({
  id,
  initialVisible = 4,
  totalCount,
  expandLabel,
  collapseLabel,
  children,
}: ProgressiveListProps) => {
  const [phase, setPhase] = useState<ProgressiveListPhase>("collapsed");
  const controlRef = useRef<HTMLDivElement>(null);
  const motionEnabledRef = useRef(true);
  const revealNextRef = useRef(false);
  const statusId = useId();
  const hasHiddenItems = totalCount > initialVisible;
  const isExpanded = phase === "expanded" || phase === "collapsing";
  const isTransitioning = phase === "expanding" || phase === "collapsing";

  const restoreCollapsedPosition = (behavior: ScrollBehavior) => {
    requestAnimationFrame(() => {
      controlRef.current?.scrollIntoView({
        behavior,
        block: "end",
      });
    });
  };

  const toggleList = (event: ReactMouseEvent<HTMLButtonElement>) => {
    if (event.detail === 0) {
      motionEnabledRef.current = false;
      revealNextRef.current = false;

      if (isExpanded) {
        setPhase("collapsed");
        restoreCollapsedPosition("auto");
      } else {
        setPhase("expanded");
      }

      return;
    }

    motionEnabledRef.current = true;

    setPhase((currentPhase) => {
      switch (currentPhase) {
        case "collapsed":
          revealNextRef.current = true;
          return "expanding";
        case "expanding":
          revealNextRef.current = false;
          return "collapsed";
        case "expanded":
          revealNextRef.current = false;
          return "collapsing";
        case "collapsing":
          revealNextRef.current = false;
          return "expanded";
      }
    });
  };

  const finishTransition = (event: TransitionEvent<HTMLDivElement>) => {
    if (
      event.currentTarget !== event.target ||
      event.propertyName !== "opacity"
    ) {
      return;
    }

    if (phase === "expanding") {
      setPhase("expanded");
      return;
    }

    if (phase === "collapsing") {
      setPhase("collapsed");

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      restoreCollapsedPosition(reduceMotion ? "auto" : "smooth");
    }
  };

  if (!hasHiddenItems) {
    return <OrderedList>{children}</OrderedList>;
  }

  return (
    <div className={styles.progressiveList}>
      <div
        id={id}
        className={styles.listRegion}
        data-expanded={isExpanded}
        data-initial-visible={initialVisible}
        data-reveal-next={phase === "expanded" && revealNextRef.current}
      >
        <OrderedList>{children}</OrderedList>
      </div>

      <div
        ref={controlRef}
        className={styles.control}
        data-instant={!motionEnabledRef.current}
        data-layout={isExpanded ? "expanded" : "collapsed"}
        data-transitioning={isTransitioning}
        onTransitionEnd={finishTransition}
      >
        <button
          type="button"
          className={styles.button}
          aria-controls={id}
          aria-describedby={statusId}
          aria-expanded={isExpanded}
          data-expanded={isExpanded}
          data-instant={!motionEnabledRef.current}
          onClick={toggleList}
        >
          <span>{isExpanded ? collapseLabel : expandLabel}</span>
          <span className={styles.iconShell} aria-hidden="true">
            <FiChevronDown className={styles.icon} />
          </span>
        </button>
      </div>

      <span id={statusId} className={styles.visuallyHidden} aria-live="polite">
        {isExpanded
          ? `Showing all ${totalCount}`
          : `Showing ${initialVisible} of ${totalCount}`}
      </span>
    </div>
  );
};
