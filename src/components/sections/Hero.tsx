import { hero } from "@/content/hero";
import { habel } from "@/content/habel";
import { activities } from "@/content/activities";
import { registrationHref } from "@/content/contact";
import { Container } from "../layout/Container";
import { Button } from "../ui/Button";
import { Icon } from "../ui/Icon";
import { Reveal } from "../ui/Reveal";

const ACCENT = "a Habit";

function Headline() {
  const index = hero.headline.indexOf(ACCENT);

  if (index === -1) {
    return <>{hero.headline}</>;
  }

  return (
    <>
      {hero.headline.slice(0, index)}
      <span className="text-gradient-brand">{ACCENT}</span>
      {hero.headline.slice(index + ACCENT.length)}
    </>
  );
}

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-background">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -left-24 top-16 h-72 w-72 rounded-full bg-lavender opacity-70 blur-2xl" />
        <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-accent-soft opacity-50 blur-2xl" />
      </div>

      <Container className="relative pb-16 pt-28 sm:pb-20 sm:pt-32 lg:pb-28 lg:pt-40">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Reveal>
              <p className="inline-flex items-center rounded-full border border-border bg-surface px-4 py-1.5 text-eyebrow font-semibold uppercase text-accent-strong shadow-sm">
                {hero.eyebrow}
              </p>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="mt-6 font-display text-h1-mobile font-bold tracking-tight text-primary-dark sm:text-h1-desktop">
                <Headline />
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-6 max-w-prose text-base leading-relaxed text-muted sm:text-lg">
                {hero.supporting}
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button href={registrationHref} size="lg" withArrow>
                  {hero.primaryCta}
                </Button>
                <Button href={hero.secondaryHref} variant="secondary" size="lg">
                  {hero.secondaryCta}
                </Button>
              </div>
            </Reveal>
          </div>

          <Reveal delay={200} className="mx-auto w-full max-w-md lg:max-w-none">
            <div className="rounded-xl bg-gradient-brand p-1 shadow-lg">
              <div className="rounded-[1.5rem] bg-surface p-6 sm:p-8">
                <p className="text-eyebrow font-semibold uppercase text-accent-strong">
                  HABEL Method
                </p>
                <p className="mt-2 font-display text-xl font-bold text-primary-dark sm:text-2xl">
                  LEARN &rarr; PRACTICE &rarr; REPEAT &rarr; USE
                </p>

                <ul className="mt-6 space-y-3">
                  {habel.steps.map((step) => (
                    <li
                      key={step.id}
                      className="flex items-center gap-3 rounded-lg bg-lavender/60 px-4 py-3"
                    >
                      <span className="font-display text-sm font-bold text-primary">
                        {step.number}
                      </span>
                      <span className="font-display text-sm font-bold uppercase tracking-wide text-primary-dark sm:text-base">
                        {step.en}
                      </span>
                      <span className="text-sm text-muted">{step.label}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <ul className="mt-5 flex list-none flex-wrap justify-center gap-2">
              {activities.map((activity) => (
                <li
                  key={activity.id}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-2 text-sm font-semibold text-primary-dark shadow-sm"
                >
                  <Icon name={activity.icon} className="h-4 w-4 text-accent-strong" />
                  {activity.title}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
