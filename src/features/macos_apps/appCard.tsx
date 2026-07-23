import { BorderBeam } from "@stianlarsen/border-beam";
import Image from "next/image";
import Link from "next/link";
import { LuExternalLink } from "react-icons/lu";
import { MacosApp } from "@/data/macos_apps/macosApps";
import styles from "./css/macosApps.module.scss";

export const AppCard = (props: MacosApp) => {
  const { name, tagline, websiteUrl, icon } = props;
  return (
    <li className={styles.cardWrapper}>
      <Link
        href={websiteUrl}
        target="_blank"
        rel="noreferrer"
        aria-label={`Link to ${name}, Stian Larsen's macOS app`}
        className={styles.card}
      >
        <Image
          src={icon}
          alt={`${name} app icon`}
          width={80}
          height={80}
          className={styles.icon}
        />

        <div className={styles.content}>
          <h3 className={styles.title}>
            {name} <LuExternalLink className={styles.titleLink} />
          </h3>
          <p className={styles.tagline}>{tagline}</p>
        </div>

        <BorderBeam
          size={120}
          duration={8}
          borderWidth={1}
          colorFrom="hsl(var(--blue))"
          colorTo="hsl(var(--blue) / 0.2)"
        />
      </Link>
    </li>
  );
};
