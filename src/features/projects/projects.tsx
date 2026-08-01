import { ProjectCard } from "@/components/ui/card/card";
import { ProgressiveList } from "@/components/ui/progressiveList/progressiveList";
import { Section } from "@/components/ui/section/section";
import { projects } from "@/data/projects/projects";

export const Projects = async () => {
  return (
    <Section id={"projects"} title="projects">
      <ProgressiveList
        id="projects-list"
        initialVisible={4}
        totalCount={projects.length}
        expandLabel={`Explore all ${projects.length} projects`}
        collapseLabel="Show fewer projects"
      >
        {projects.map((project) => (
          <ProjectCard key={JSON.stringify(project)} {...project} />
        ))}
      </ProgressiveList>
    </Section>
  );
};
