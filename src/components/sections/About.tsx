import { about } from "@/content/about";
import { Container } from "../layout/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";

export function About() {
  return (
    <section id="tentang" className="bg-surface py-20 sm:py-24 lg:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow={about.eyebrow}
              title={about.heading}
            />

            <div className="mt-6 space-y-4">
              {about.paragraphs.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 24)}
                  className="text-base leading-relaxed text-muted sm:text-lg"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <p className="mt-6 text-base leading-relaxed text-ink sm:text-lg">
              {about.closing}
            </p>
          </div>

          <Reveal className="lg:pt-4">
            <div className="rounded-xl bg-lavender p-8 sm:p-10">
              <p className="text-eyebrow font-semibold uppercase text-primary">
                Yang kami pegang
              </p>
              <p className="mt-4 font-display text-2xl font-bold leading-snug text-primary-dark sm:text-3xl">
                {about.highlight}
              </p>

              <hr className="my-8 border-primary/15" />

              <blockquote className="font-display text-lg font-semibold italic text-accent-strong sm:text-xl">
                &ldquo;{about.quote}&rdquo;
              </blockquote>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
