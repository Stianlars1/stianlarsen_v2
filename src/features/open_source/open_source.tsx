import { getNpmDownloads } from "@/app/actions";
import { OpenSourceCard } from "@/components/ui/card/card";
import { OrderedList } from "@/components/ui/orderedList/orderedList";
import { Section } from "@/components/ui/section/section";
import { open_source_projects_map } from "@/data/open_source/openSource";
import { Suspense } from "react";
export const OpenSourceProjects = async () => {
  const projectsWithDownloads = await Promise.all(
    open_source_projects_map.map(async (project) => {
      const downloads = await getNpmDownloads(
        project.packageName,
        "last-month",
      );
      return { ...project, downloads };
    }),
  );

  return (
    <Section title="Open Source Projects">
      <Suspense fallback={<div>Loading...</div>}>
        <OrderedList>
          {projectsWithDownloads.map((project) => (
            <OpenSourceCard key={JSON.stringify(project)} {...project} />
          ))}
        </OrderedList>
      </Suspense>
    </Section>
  );
};
