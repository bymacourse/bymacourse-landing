import { habel } from "@/content/habel";
import { Container } from "../layout/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { HabelStep } from "../ui/HabelStep";
import { Button } from "../ui/Button";
import { Icon } from "../ui/Icon";

export function Habel() {
  return (
    <section
      id="habel"
      className="relative overflow-hidden bg-primary-dark py-20 text-white sm:py-24 lg:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-primary opacity-40 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-accent opacity-25 blur-3xl" />
      </div>

      <Container className="relative">
        <SectionHeading
          eyebrow={habel.eyebrow}
          title={habel.heading}
          description={habel.definition}
          align="center"
          tone="inverted"
        />

        <ol className="mt-14 flex list-none flex-col gap-0 lg:flex-row lg:gap-3">
          {habel.steps.map((step, index) => (
            <li
              key={step.id}
              className="flex flex-col gap-4 lg:flex-1 lg:flex-row lg:items-stretch lg:gap-3"
            >
              <HabelStep step={step} className="flex-1" />

              {index < habel.steps.length - 1 ? (
                <span
                  aria-hidden="true"
                  className="flex items-center justify-center text-accent-soft"
                >
                  <Icon name="arrow-down" className="h-6 w-6 lg:hidden" />
                  <Icon
                    name="arrow-right"
                    className="hidden h-6 w-6 motion-safe:animate-flow-pulse lg:block"
                  />
                </span>
              ) : null}
            </li>
          ))}
        </ol>

        <div className="mt-12 flex justify-center">
          <Button href="#aktivitas" variant="ghost" size="lg">
            Lihat Aktivitas Belajar
          </Button>
        </div>
      </Container>
    </section>
  );
}
