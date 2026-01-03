"use client";
import { OpenSourceCard } from "@/components/ui/card/openSourceCard";
import { OrderedList } from "@/components/ui/orderedList/orderedList";
import { OpenSourceType } from "@/data/open_source/openSource";
import { useState } from "react";
import styles from "./css/opensourcelist.module.css";

export const OrderedListOpenSource = ({
  openSourceProjects,
}: {
  openSourceProjects: OpenSourceType[];
}) => {
  const [showExamples, setShowExamples] = useState(false);

  if (!openSourceProjects || openSourceProjects.length === 0) {
    return <></>;
  }
  return (
    <>
      <div className={styles.opHeader}>
        <label className={styles.label}>Show examples</label>
        <input
          className={styles.input}
          type="checkbox"
          checked={showExamples}
          onChange={() => setShowExamples(!showExamples)}
        />
      </div>
      <OrderedList>
        {openSourceProjects.map((project) => (
          <OpenSourceCard
            key={JSON.stringify(project.packageName)}
            {...project}
            showExamples={showExamples}
          />
        ))}
      </OrderedList>
    </>
  );
};
