import { benefits } from "@/content/benefits";
import { whyBymaMeta } from "@/content/cta";
import { Container } from "../layout/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { FeatureCard } from "../ui/FeatureCard";
import { Reveal } from "../ui/Reveal";

export function WhyByma() {
  return (
    <section id="why" className="bg-surface py-20 sm:py-24 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow={whyBymaMeta.eyebrow}
          title={whyBymaMeta.heading}
          description={whyBymaMeta.description}
          align="center"
        />

        <ul className="mt-14 grid list-none gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <Reveal as="li" key={benefit.id} delay={index * 60}>
              <FeatureCard benefit={benefit} />
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
