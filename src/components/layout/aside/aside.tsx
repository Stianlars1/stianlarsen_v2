import { Tooltip } from "@/components/ui/tooltip/tooltip";
import { ME } from "@/data/about_me/me";
import { Socials } from "@/data/social/social";
import Image from "next/image";
import styles from "./css/aside.module.scss";

export const Aside = () => {
  const { fullName, workingTitle } = ME;
  const workingTitleCharacters = Array.from(workingTitle);

  return (
    <header className={styles.asideWrapper}>
      <aside className={styles.asideContent}>
        <header className={styles.header}>
          <Image
            src="/stian/STIAN_PHOTO.jpg"
            alt="Portrait image of Stian Larsen"
            width={150}
            height={150}
            priority
            quality={100}
            className={styles.image}
          />
          <div className={styles.headerInfoWrapper}>
            <h1 className={styles.title}>{fullName}</h1>
            <p className={styles.jobTitle}>
              <span className={styles.visuallyHidden}>{workingTitle}</span>
              <span className={styles.typewriter} aria-hidden="true">
                {workingTitleCharacters.map((character, index) => (
                  <span
                    className={styles.typewriterCharacter}
                    style={{ animationDelay: `${index * 46}ms` }}
                    key={`${character}-${index}`}
                  >
                    {character}
                  </span>
                ))}
              </span>
            </p>
          </div>
        </header>
        <nav className={styles.nav}>
          {Socials.map((social) => (
            <Tooltip content={social.name} key={social.name}>
              <a
                className={styles.navLink}
                href={social.url}
                target={social.target}
                rel={social.rel}
                aria-label={social.name}
              >
                {social.icon({ className: styles.icon, size: 24 })}
              </a>
            </Tooltip>
          ))}
        </nav>
      </aside>
    </header>
  );
};
