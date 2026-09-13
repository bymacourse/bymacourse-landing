import { vision } from "@/content/vision";
import { missions, visionMissionMeta } from "@/content/missions";
import { Container } from "../layout/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { MissionCard } from "../ui/MissionCard";
import { Reveal } from "../ui/Reveal";

export function VisionMission() {
  return (
    <section id="visi-misi" className="bg-background py-20 sm:py-24 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow={visionMissionMeta.eyebrow}
          title={visionMissionMeta.heading}
          align="center"
        />

        <Reveal className="mt-14">
          <div className="rounded-xl bg-lavender p-8 sm:p-12">
            <p className="text-eyebrow font-semibold uppercase text-primary">
              {vision.label}
            </p>
            <p className="mt-4 max-w-4xl font-display text-xl font-bold leading-snug text-primary-dark sm:text-2xl lg:text-3xl">
              {vision.text}
            </p>
          </div>
        </Reveal>

        <h3 className="mt-16 font-display text-h3-mobile font-bold text-primary-dark sm:text-h3-desktop">
          Misi
        </h3>

        <ul className="mt-8 grid list-none gap-6 sm:grid-cols-2">
          {missions.map((mission, index) => (
            <Reveal
              as="li"
              key={mission.id}
              delay={index * 50}
              className={index === missions.length - 1 ? "sm:col-span-2" : ""}
            >
              <MissionCard mission={mission} />
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
