import { About } from "@/features/about/about";
import { Experience } from "@/features/experience/experience";
import { OpenSourceProjects } from "@/features/open_source/open_source";
import { Projects } from "@/features/projects/projects";
import { Page } from "@/ui_layout/page/page";
import { Metadata, Viewport } from "next";
import { rootMeta, useThisViewport } from "./rootMeta";
export const metadata: Metadata = rootMeta;
export const viewport: Viewport = useThisViewport;
export default async function Home() {
  return (
    <Page>
      <About />
      <Experience />
      <Projects />
      <OpenSourceProjects />
    </Page>
  );
}
