import {checkWebsiteStatus} from "@/app/actions/actions";
import {Suspense} from "react";
import styles from "./css/projectStatus.module.css";

export const ProjectStatus = async ({ url }: { url: string }) => {
  const status = await checkWebsiteStatus(url);

  return (
    <Suspense
      fallback={
        <span className={`${styles.status} ${styles.active}`}>{status}</span>
      }
    >
      {status === "ACTIVE" ? (
        <span className={`${styles.status} ${styles.active}`}>{status}</span>
      ) : (
        <span className={`${styles.status} ${styles.inactive}`}>{status}</span>
      )}
    </Suspense>
  );
};
