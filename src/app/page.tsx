import { About } from "@/features/about/about";
import { Experience } from "@/features/experience/experience";
import { MacosApps } from "@/features/macos_apps/macosApps";
import { OpenSourceProjects } from "@/features/open_source/open_source";
import { Projects } from "@/features/projects/projects";
import { Page } from "@/components/layout/page/page";
import { HiddenSeoContent } from "@/lib/seo/HiddenSeoContent/HiddenSeoContent";
import { Metadata, Viewport } from "next";
import { viewportROOT } from "@/app/viewportROOT";
import { metadataROOT } from "@/app/metadataROOT";
import { PortfolioStructuredData } from "@/lib/seo/StructuredData/StructuredData";

export const metadata: Metadata = metadataROOT;
export const viewport: Viewport = viewportROOT;
export default async function Home() {
  return (
    <>
      <PortfolioStructuredData />

      <Page>
        <About />
        <Experience />
        <MacosApps />
        <Projects />
        <OpenSourceProjects />
        <HiddenSeoContent />
      </Page>
    </>
  );
}
