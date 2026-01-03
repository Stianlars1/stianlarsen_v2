import { getNpmDownloads } from "@/app/actions/actions";
import Image from "next/image";
import { Suspense } from "react";
import styles from "./css/openSourceDownloadBadge.module.css";

interface OpenSourceDownloadBadgeProps {
  packageName: string;
  period?: "last-week" | "last-month" | "last-day";
}

export const OpenSourceDownloadsBadge = async ({
  packageName,
  period = "last-month",
}: OpenSourceDownloadBadgeProps) => {
  const downloads = await getNpmDownloads(packageName, period);

  if (downloads === null) {
    console.error(`Failed to fetch downloads for ${packageName}`);
    return null; // Handle error or return a placeholder
  }

  return (
    <Suspense fallback={<></>}>
      <div className={styles.downloadsBadge}>
        <span>
          {downloads.toLocaleString()} downloads {period.replace("-", " ")}
        </span>
      </div>
    </Suspense>
  );
};

interface OpenSourceDownloadShieldBadgeProps {
  packageName: string;
  period?: "dw" | "dm" | "dy"; // Downloads per week, month, year
}

export const OpenSourceDownloadShieldBadge = ({
  packageName,
  period = "dw",
}: OpenSourceDownloadShieldBadgeProps) => {
  const badgeUrl = `https://img.shields.io/npm/${period}/${encodeURIComponent(
    packageName,
  )}.svg`;

  return (
    <Image
      src={badgeUrl}
      alt={`${packageName} downloads`}
      width={0}
      height={0}
      quality={100}
      priority
      fetchPriority="auto"
      className={styles.shieldIoImage}
    />
  );
};
