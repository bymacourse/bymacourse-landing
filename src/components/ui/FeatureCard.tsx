import type { Benefit } from "@/lib/types";
import { Icon } from "./Icon";

export function FeatureCard({ benefit }: { benefit: Benefit }) {
  return (
    <div className="h-full rounded-xl border border-border bg-surface p-6 shadow-sm transition-shadow duration-200 hover:shadow-md sm:p-7">
      <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-lavender text-primary">
        <Icon name={benefit.icon} className="h-6 w-6" />
      </span>
      <h3 className="mt-5 font-display text-h3-mobile font-semibold text-primary-dark">
        {benefit.title}
      </h3>
      <p className="mt-3 text-base leading-relaxed text-muted">
        {benefit.description}
      </p>
    </div>
  );
}
