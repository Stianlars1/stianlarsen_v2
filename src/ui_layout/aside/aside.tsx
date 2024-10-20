import { ME } from "@/data/about_me/me";
import { Socials } from "@/data/social/social";
import Image from "next/image";
import Link from "next/link";
import styles from "./css/aside.module.css";
export const Aside = () => {
  const { fullName, workingTitle } = ME;
  return (
    <header className={styles.asideWrapper}>
      <aside className={styles.asideContent}>
        <header className={styles.header}>
          <Image
            src="/stian/STIAN_PHOTO.jpg"
            alt="Portrait image of Stian Larsen"
            width={0}
            height={0}
            sizes="100vw"
            priority
            quality={100}
            className={styles.image}
          />
          <div className={styles.headerInfoWrapper}>
            <h1 className={styles.title}>{fullName}</h1>
            <p className={styles.jobTitle}>{workingTitle}</p>
          </div>
        </header>
        <nav className={styles.nav}>
          {Socials.map((social) => (
            <Link
              className={styles.navLink}
              key={social.name}
              href={social.url}
              target={social.target}
              rel={social.rel}
            >
              {social.icon({ className: styles.icon, size: 24 })}
            </Link>
          ))}
        </nav>
      </aside>
    </header>
  );
};
