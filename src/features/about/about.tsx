import Link from "next/link";
import styles from "./css/about.module.css";

const TASKBUDDY_URL = "https://taskbuddy.dev/";
const TINIFY_URL = "https://tinify.dev/";
export const About = () => {
  return (
    <section className={styles.section}>
      <header>
        <p>
          I’m <strong style={{ color: "hsl(var(--blue))" }}>Stian</strong>, a
          passionate full stack web developer based in Norway, currently
          crafting innovative solutions at SpareBank 1 Utvikling. With a
          Bachelor’s degree in Computer Science and over two years of hands-on
          experience from professional roles and personal projects, I thrive at
          the intersection of design and backend engineering.
        </p>
        <p>
          My journey into technology began in my father’s hobby room, where
          tinkering with computers sparked a lifelong fascination. From building
          a SoundCloud clone to launching{" "}
          <Link
            aria-label="Link to Stian Larsen's own task management app located at TaskBuddy.dev"
            href={TASKBUDDY_URL}
            target="_blank"
            rel="noreferrer"
          >
            TaskBuddy.dev
          </Link>{" "}
          and{" "}
          <Link
            aria-label="Link to Stian Larsen's image processing tool at Tinify.dev"
            href={TINIFY_URL}
            target="_blank"
            rel="noreferrer"
          >
            Tinify.dev
          </Link>{" "}
          , I enjoy creating tools that simplify and enhance everyday tasks.
          When I’m not coding, I cherish time with my girlfriend and our
          18-month-old son, binge-watching movies or brainstorming the{" "}
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
