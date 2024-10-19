import { ExperienceCard } from "@/components/ui/card/card";
import { Section } from "@/components/ui/section/section";
import { experiences } from "@/data/experiences/experiences";
export const Experience = () => {
  return (
    <Section title="experience">
      <ol>
        {experiences.map((experience) => (
          <ExperienceCard key={JSON.stringify(experience)} {...experience} />
        ))}
      </ol>
    </Section>
  );
};
