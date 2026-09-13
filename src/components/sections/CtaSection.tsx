import { cta } from "@/content/cta";
import { registrationHref, whatsappHref } from "@/content/contact";
import { Container } from "../layout/Container";
import { Button } from "../ui/Button";

export function CtaSection() {
  return (
    <section
      id="daftar"
      className="relative overflow-hidden bg-gradient-brand-deep py-20 sm:py-24 lg:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -left-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
        <div className="absolute -bottom-20 -right-10 h-72 w-72 rounded-full bg-white/10 blur-2xl" />
      </div>

      <Container className="relative">
        <div className="mx-auto max-w-prose text-center">
          <h2 className="font-display text-h2-mobile font-bold tracking-tight text-white sm:text-h2-desktop">
            {cta.heading}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/90 sm:text-lg">
            {cta.supporting}
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
            <Button href={registrationHref} variant="light" size="lg" withArrow>
              {cta.primaryLabel}
            </Button>
            <Button href={whatsappHref} variant="ghost" size="lg">
              {cta.secondaryLabel}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
