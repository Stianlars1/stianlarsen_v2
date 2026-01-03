import { ProjectCard } from "@/components/ui/card/card";
import { OrderedList } from "@/components/ui/orderedList/orderedList";
import { Section } from "@/components/ui/section/section";
import { projects } from "@/data/projects/projects";

export const Projects = async () => {
  return (
    <Section id={"projects"} title="projects">
      <OrderedList>
        {projects.map((project) => (
          <ProjectCard key={JSON.stringify(project)} {...project} />
        ))}
      </OrderedList>
    </Section>
  );
};
