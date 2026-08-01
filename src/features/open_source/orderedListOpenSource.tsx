"use client";
import { OpenSourceCard } from "@/components/ui/card/openSourceCard";
import { ProgressiveList } from "@/components/ui/progressiveList/progressiveList";
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
      <ProgressiveList
        id="open-source-list"
        initialVisible={4}
        totalCount={openSourceProjects.length}
        expandLabel={`Browse all ${openSourceProjects.length} packages`}
        collapseLabel="Show fewer packages"
      >
        {openSourceProjects.map((project) => (
          <OpenSourceCard
            key={JSON.stringify(project.packageName)}
            {...project}
            showExamples={showExamples}
          />
        ))}
      </ProgressiveList>
    </>
  );
};
