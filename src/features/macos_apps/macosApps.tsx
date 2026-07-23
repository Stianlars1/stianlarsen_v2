import { Section } from "@/components/ui/section/section";
import { macosApps } from "@/data/macos_apps/macosApps";
import { AppCard } from "./appCard";
import styles from "./css/macosApps.module.scss";

export const MacosApps = () => {
  return (
    <Section id={"macos-apps"} title="macOS Apps" preserveTitleCase>
      <ul className={styles.grid}>
        {macosApps.map((app) => (
          <AppCard key={app.name} {...app} />
        ))}
      </ul>
    </Section>
  );
};
