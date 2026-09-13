import type { HabelStepData } from "@/lib/types";

interface HabelStepProps {
  step: HabelStepData;
  className?: string;
}

export function HabelStep({ step, className }: HabelStepProps) {
  return (
    <div
      className={
        "flex h-full flex-col rounded-xl border border-white/15 bg-white/10 p-6 backdrop-blur-sm " +
        (className ?? "")
      }
    >
      <span className="font-display text-sm font-bold tracking-widest text-accent-soft">
        {step.number}
      </span>
      <p className="mt-4 font-display text-2xl font-bold uppercase tracking-wide text-white sm:text-3xl">
        {step.en}
      </p>
      <p className="mt-1 text-base font-medium text-white/80">{step.label}</p>
      <p className="mt-4 text-sm leading-relaxed text-white/80">{step.copy}</p>
    </div>
  );
}
