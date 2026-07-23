import Link from "next/link";
import styles from "./css/about.module.css";

const STATION_URL = "https://www.usestation.app";
const FRAMESNAPPER_URL = "https://www.framesnapper.app";
const DOTVIEWER_URL = "https://dotviewer.app";
const LARSEN_UTVIKLING_URL = "https://www.larsenutvikling.no";
const DBHOST_URL = "https://dbhost.app";
const TINIFY_URL = "https://tinify.dev/";
const SPISS_URL = "https://www.spiss.app";

export const About = () => {
  return (
    <section id={"about"} className={styles.section}>
      <header>
        <p>
          I’m <strong style={{ color: "hsl(var(--blue))" }}>Stian</strong>, a
          passionate full stack web developer based in Norway, currently
          crafting innovative solutions at Sleipner Motor. With a Bachelor’s
          degree in Computer Science and over three years of hands-on experience
          from professional roles and personal projects, I thrive at the
          intersection of design and backend engineering.
        </p>
        <p>
          My journey into technology began in my father&apos;s hobby room, where
          tinkering with computers sparked a lifelong fascination. Today that
          fascination has grown into my own company,{" "}
          <Link
            aria-label="Link to Larsen Utvikling, Stian Larsen's development company"
            href={LARSEN_UTVIKLING_URL}
            target="_blank"
            rel="noreferrer"
          >
            Larsen Utvikling
          </Link>
          , where I design and ship my own products: native macOS apps like{" "}
          <Link
            aria-label="Link to Station, Stian Larsen's macOS command center for local development"
            href={STATION_URL}
            target="_blank"
            rel="noreferrer"
          >
            Station
          </Link>
          ,{" "}
          <Link
            aria-label="Link to FrameSnapper, Stian Larsen's macOS app for extracting frames from video"
            href={FRAMESNAPPER_URL}
            target="_blank"
            rel="noreferrer"
          >
            FrameSnapper
          </Link>{" "}
          and{" "}
          <Link
            aria-label="Link to dotViewer, Stian Larsen's macOS Quick Look extension for code and dotfiles"
            href={DOTVIEWER_URL}
            target="_blank"
            rel="noreferrer"
          >
            dotViewer
          </Link>
          , the evidence-based CV tool{" "}
          <Link
            aria-label="Link to Spiss, Stian Larsen's evidence-based CV tailoring tool"
            href={SPISS_URL}
            target="_blank"
            rel="noreferrer"
          >
            Spiss
          </Link>
          , and{" "}
          <Link
            aria-label="Link to DBHost, Stian Larsen's managed PostgreSQL hosting platform"
            href={DBHOST_URL}
            target="_blank"
            rel="noreferrer"
          >
            DBHost
          </Link>{" "}
          - my honest, personal MVP for managed PostgreSQL hosting. Most
          recently I relaunched{" "}
          <Link
            aria-label="Link to Stian Larsen's image processing tool at Tinify.dev"
            href={TINIFY_URL}
            target="_blank"
            rel="noreferrer"
          >
            Tinify.dev
          </Link>{" "}
          with a public API, account plans, credits, and a complete redesign. I
          enjoy creating tools that simplify and enhance everyday tasks. When
          I&apos;m not coding, I cherish time at home with my little family,
          binge-watching movies or brainstorming the{" "}
          <Link
            aria-label="Link to nextjs org site, the provider of the React framework"
            href={"https://nextjs.org/"}
            target="_blank"
            rel="noreferrer"
          >
            next
          </Link>{" "}
          web application.
        </p>
        <p>
          Driven by ambition, creativity, and a love for problem-solving, I’m
          dedicated to building user-friendly, high-performance applications
          that make a real difference. Let’s connect and create something
          amazing together!
        </p>
      </header>
    </section>
  );
};
