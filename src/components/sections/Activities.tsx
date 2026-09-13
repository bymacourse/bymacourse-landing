import { activities, activitiesMeta } from "@/content/activities";
import { Container } from "../layout/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { ActivityCard } from "../ui/ActivityCard";
import { Reveal } from "../ui/Reveal";
import { cn } from "@/lib/cn";

export function Activities() {
  return (
    <section id="aktivitas" className="bg-background py-20 sm:py-24 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow={activitiesMeta.eyebrow}
          title={activitiesMeta.heading}
          description={activitiesMeta.description}
          align="center"
        />

        <ul className="mt-14 grid list-none gap-6 sm:grid-cols-2 lg:grid-cols-6">
          {activities.map((activity, index) => (
            <Reveal
              as="li"
              key={activity.id}
              delay={index * 60}
              className={cn(
                "lg:col-span-2",
                index === 3 && "lg:col-start-2",
              )}
            >
              <ActivityCard activity={activity} />
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
