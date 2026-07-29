import { Section } from "@/components/ui/section/section";
import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { CopyInstallButton } from "./copy_install_button";
import styles from "./developer_resources.module.scss";

const INSTALL_COMMAND = "npx skills add Stianlars1/larsen-skills";

const tinifyLinks = [
  {
    label: "MCP server",
    href: "https://tinify.dev/mcp",
  },
  {
    label: "TypeScript client",
    href: "https://www.npmjs.com/package/@tinify-dev/client",
  },
  {
    label: "MCP package",
    href: "https://www.npmjs.com/package/@tinify-dev/mcp",
  },
  {
    label: "Claude plugin",
    href: "https://github.com/Stianlars1/tinify-plugin",
  },
  {
    label: "GitHub Action",
    href: "https://github.com/Stianlars1/tinify-compress-action",
  },
];

const ThemeLogo = ({
  onLight,
  onDark,
  alt,
}: {
  onLight: string;
  onDark: string;
  alt: string;
}) => (
  <div className={styles.logoSlot}>
    <Image
      className={`${styles.logo} ${styles.logoOnLight}`}
      src={onLight}
      alt={alt}
      width={72}
      height={72}
    />
    <Image
      className={`${styles.logo} ${styles.logoOnDark}`}
      src={onDark}
      alt=""
      aria-hidden="true"
      width={72}
      height={72}
    />
  </div>
);

export const DeveloperResources = () => {
  return (
    <Section id="developer-resources" title="AI & Developer Resources">
      <p className={styles.intro}>
        Skills, plugins and tooling I build for developers and AI agents.
      </p>

      <div className={styles.resources}>
        <article className={`${styles.resourceCard} ${styles.featuredCard}`}>
          <div className={styles.resourceHeader}>
            <ThemeLogo
              onLight="/developer-resources/larsen-skills-on-light.svg"
              onDark="/developer-resources/larsen-skills-on-dark.svg"
              alt="Larsen Skills logo"
            />

            <div>
              <h3 className={styles.resourceTitle}>Larsen Skills</h3>
              <p className={styles.description}>
                Eight portable Agent Skills for interface design, motion,
                accessibility, visual analysis and prototyping.
              </p>
              <ul className={styles.tags} aria-label="Supported agent tools">
                <li className={styles.tag}>Codex</li>
                <li className={styles.tag}>Claude Code</li>
                <li className={styles.tag}>Cursor</li>
                <li className={`${styles.tag} ${styles.tagAccent}`}>
                  8 skills
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.cardContent}>
            <div className={styles.installRow}>
              <code className={styles.command}>{INSTALL_COMMAND}</code>
              <CopyInstallButton command={INSTALL_COMMAND} />
            </div>
            <Link
              className={styles.primaryLink}
              href="https://github.com/Stianlars1/larsen-skills"
              target="_blank"
              rel="noopener noreferrer"
            >
              Explore the skills
              <FiArrowUpRight aria-hidden="true" />
            </Link>
          </div>
        </article>

        <article className={styles.resourceCard}>
          <div className={styles.resourceHeader}>
            <ThemeLogo
              onLight="/developer-resources/tinify-on-light.png"
              onDark="/developer-resources/tinify-on-dark.png"
              alt="Tinify logo"
            />

            <div>
              <h3 className={styles.resourceTitle}>Tinify developer tools</h3>
              <p className={styles.description}>
                Use Tinify from code, your editor or CI.
              </p>
            </div>
          </div>

          <div className={styles.cardContent}>
            <ul className={styles.resourceLinks}>
              {tinifyLinks.map((resource) => (
                <li key={resource.href}>
                  <Link
                    className={styles.resourceLink}
                    href={resource.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {resource.label}
                    <FiArrowUpRight aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </article>
      </div>
    </Section>
  );
};
