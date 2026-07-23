import type {
  Graph,
  Organization,
  Person,
  ProfilePage,
  SoftwareApplication,
  SoftwareSourceCode,
  WebApplication,
  WebSite,
} from "schema-dts";
import { projects, Project } from "@/data/projects/projects";
import { macosApps } from "@/data/macos_apps/macosApps";
import { open_source_projects_map } from "@/data/open_source/openSource";

const HOST = "https://stianlarsen.com";
const PERSON_ID = `${HOST}#person`;
const WEBSITE_ID = `${HOST}#website`;
const LARSEN_UTVIKLING_ID = `${HOST}#larsen-utvikling`;

// Project.description allows ReactNode for rendering; JSON-LD needs plain text.
const toPlainText = (description: Project["description"]): string => {
  if (typeof description === "string") return description;
  if (Array.isArray(description)) {
    return description.filter((part) => typeof part === "string").join(" ");
  }
  return "";
};

const isIdePlugin = (project: Project) =>
  project.technologies.includes("IntelliJ Platform SDK");

const person: Person = {
  "@type": "Person",
  "@id": PERSON_ID,
  name: "Stian Larsen",
  givenName: "Stian",
  familyName: "Larsen",
  jobTitle: "Full Stack Web Developer",
  description:
    "I'm Stian, a passionate full stack web developer based in Norway, currently crafting innovative solutions at Sleipner Motor. With a Bachelor's degree in Computer Science and over three years of hands-on experience from professional roles and personal projects, I thrive at the intersection of design and backend engineering.",
  url: HOST,
  image: `${HOST}/stian/STIAN_PHOTO.jpg`,
  worksFor: {
    "@type": "Organization",
    name: "Sleipner Motor",
    url: "https://no.sleipnergroup.com/",
  },
  affiliation: { "@id": LARSEN_UTVIKLING_ID },
  knowsAbout: [
    "TypeScript",
    "React",
    "Next.js",
    "Kotlin",
    "Spring Boot",
    "Swift",
    "SwiftUI",
    "macOS Development",
    "Python",
    "PostgreSQL",
    "AWS",
  ],
  sameAs: [
    "https://github.com/Stianlars1",
    "https://www.linkedin.com/in/stianlars1",
    "https://www.instagram.com/stianlarsen",
    "https://www.x.com/litehode",
    "https://www.npmjs.com/~stianlarsen",
  ],
};

const larsenUtvikling: Organization = {
  "@type": "Organization",
  "@id": LARSEN_UTVIKLING_ID,
  name: "Larsen Utvikling",
  url: "https://www.larsenutvikling.no",
  description:
    "Larsen Utvikling is Stian Larsen's Norwegian development company (ENK), delivering websites, web applications, native apps, and headless CMS solutions - and the umbrella for products like Station, FrameSnapper, dotViewer, DBHost, and Spiss.",
  founder: { "@id": PERSON_ID },
};

const website: WebSite = {
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  name: "Stian Larsen Portfolio",
  url: HOST,
  description:
    "Professional portfolio of Stian Larsen, Full Stack Web Developer from Oslo, Norway. Showcasing web development projects, native macOS apps, open source contributions, and professional experience.",
  author: { "@id": PERSON_ID },
  publisher: { "@id": PERSON_ID },
};

const profilePage: ProfilePage = {
  "@type": "ProfilePage",
  "@id": `${HOST}#homepage`,
  name: "Stian Larsen | Full Stack Web Developer",
  url: HOST,
  description:
    "I'm Stian, a passionate full stack web developer based in Norway, currently crafting innovative solutions at Sleipner Motor.",
  isPartOf: { "@id": WEBSITE_ID },
  mainEntity: { "@id": PERSON_ID },
};

// Native macOS apps, derived from the same data that renders the site.
const macosAppNodes: SoftwareApplication[] = macosApps.map((app) => ({
  "@type": "SoftwareApplication",
  name: app.name,
  url: app.websiteUrl,
  description: app.tagline,
  datePublished: app.publishDate,
  author: { "@id": PERSON_ID },
  applicationCategory: "DeveloperApplication",
  operatingSystem: "macOS",
}));

// Projects, derived from the projects data. IDE plugins are desktop software;
// everything else on the list is a web application.
const projectNodes: (WebApplication | SoftwareApplication)[] = projects.map(
  (project) =>
    isIdePlugin(project)
      ? {
          "@type": "SoftwareApplication",
          name: project.title,
          url: project.websiteUrl,
          description: toPlainText(project.description),
          datePublished: project.publishDate,
          author: { "@id": PERSON_ID },
          applicationCategory: "DeveloperApplication",
          operatingSystem: "Windows, macOS, Linux",
        }
      : {
          "@type": "WebApplication",
          name: project.title,
          url: project.websiteUrl,
          description: toPlainText(project.description),
          datePublished: project.publishDate,
          author: { "@id": PERSON_ID },
          applicationCategory: "WebApplication",
          operatingSystem: "Web Browser",
        },
);

// Open source npm packages, derived from the open source data.
const openSourceNodes: SoftwareSourceCode[] = open_source_projects_map.map(
  (pkg) => ({
    "@type": "SoftwareSourceCode",
    name: pkg.title,
    url: pkg.websiteUrl ?? pkg.npmUrl,
    codeRepository: pkg.npmUrl,
    description: pkg.description,
    datePublished: pkg.publishDate,
    author: { "@id": PERSON_ID },
    programmingLanguage: "TypeScript",
  }),
);

export const portfolioJsonLd: Graph = {
  "@context": "https://schema.org",
  "@graph": [
    person,
    larsenUtvikling,
    website,
    profilePage,
    ...macosAppNodes,
    ...projectNodes,
    ...openSourceNodes,
  ],
};
