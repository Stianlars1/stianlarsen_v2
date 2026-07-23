import { Project } from "../projects";

export const project_dbhost: Project = {
  title: "DBHost - Managed PostgreSQL Hosting",
  publishDate: "2026-03-27",
  previewDate: "April 2026",
  description: [
    "A managed Database-as-a-Service platform where developers can provision PostgreSQL databases in seconds. Sign up, create a database, and get a connection string - no infrastructure to manage.",
    "Features a web dashboard with a built-in SQL Explorer, REST API for programmatic access, a CLI (@dbhost-app/cli), scoped API keys, PgBouncer connection pooling on every database, and automated daily backups with on-demand triggers.",
    "Built on a split-plane architecture: a Next.js control plane on Vercel handles auth, billing, and the dashboard, while a Python FastAPI agent on an AWS Lightsail VPS manages the actual PostgreSQL instances, PgBouncer config, and backup pipelines.",
    "Includes an admin panel with user/database management, activity history, and incident monitoring. Offers Free, Pro, and Business tiers with Stripe-powered billing.",
  ],
  technologies: [
    "Next.js 16",
    "React 19",
    "TypeScript",
    "Python",
    "FastAPI",
    "PostgreSQL 16",
    "PgBouncer",
    "Drizzle ORM",
    "Clerk",
    "Stripe",
    "AWS Lightsail",
    "CSS Modules",
    "Caddy",
  ],
  websiteUrl: "https://dbhost.app",
};
