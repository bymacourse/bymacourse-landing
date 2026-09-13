import type { Activity } from "@/lib/types";
import { Icon } from "./Icon";

export function ActivityCard({ activity }: { activity: Activity }) {
  return (
    <div className="flex h-full flex-col rounded-xl border border-border bg-surface p-6 shadow-sm transition-shadow duration-200 hover:shadow-md">
      <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent-soft text-accent">
        <Icon name={activity.icon} className="h-6 w-6" />
      </span>
      <h3 className="mt-5 font-display text-xl font-semibold text-primary-dark">
        {activity.title}
      </h3>
      <p className="mt-2 text-base leading-relaxed text-muted">
        {activity.description}
      </p>
    </div>
  );
}
