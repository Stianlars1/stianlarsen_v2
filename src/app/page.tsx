import {About} from "@/features/about/about";
import {Experience} from "@/features/experience/experience";
import {OpenSourceProjects} from "@/features/open_source/open_source";
import {Projects} from "@/features/projects/projects";
import {Page} from "@/ui_layout/page/page";
import {HiddenSeoContent} from "@/lib/seo/HiddenSeoContent/HiddenSeoContent";

export default async function Home() {
  return (
    <Page>
      <About />
      <Experience />
      <Projects />
      <OpenSourceProjects />
        <HiddenSeoContent />
    </Page>
  );
}
