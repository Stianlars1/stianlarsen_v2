import { ExperienceCard } from "@/components/ui/card/card";
import { Section } from "@/components/ui/section/section";
import { sparebank1_utvikling } from "@/features/experience/sparebank1_utvikling/sparebank1_utvikling";
import { hasStartedSleipner } from "@/features/experience/utils";
import { sleipner } from "@/features/experience/sleipner_motor/sleipner";

export const Experience = () => {
  const experienceMap = [
    ...(hasStartedSleipner() ? [sleipner] : []),
    sparebank1_utvikling,
  ].sort(
    (a, b) =>
      new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime(),
  );
  return (
    <Section id={"experience"} title="experience">
      <ol>
        {experienceMap.map((experience) => (
          <ExperienceCard key={experience.company} {...experience} />
        ))}
      </ol>
    </Section>
  );
};
