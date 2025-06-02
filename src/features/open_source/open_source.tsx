import {getNpmDownloads} from "@/app/actions/actions";
import {Section} from "@/components/ui/section/section";
import {open_source_projects_map, OpenSourceType,} from "@/data/open_source/openSource";
import {Suspense} from "react";
import {CgSpinner} from "react-icons/cg";
import {OrderedListOpenSource} from "./orderedListOpenSource";

export const OpenSourceProjects = async () => {
  const projectsWithDownloads = await Promise.all(
    open_source_projects_map.map(async (project) => {
      const downloads = await getNpmDownloads(
        project.packageName,
        "last-month",
      );
      return { ...project, downloads } as OpenSourceType;
    }),
  );

  return (
    <Section id={"open-source"} title="Open Source Projects">
      <Suspense fallback={<CgSpinner style={{ marginTop: "1.5rem" }} />}>
        <OrderedListOpenSource openSourceProjects={projectsWithDownloads} />
      </Suspense>
    </Section>
  );
};
