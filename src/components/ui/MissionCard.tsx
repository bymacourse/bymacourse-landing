import type { Mission } from "@/lib/types";

export function MissionCard({ mission }: { mission: Mission }) {
  return (
    <div className="flex h-full gap-4 rounded-xl border border-border bg-surface p-6 shadow-sm">
      <span
        aria-hidden="true"
        className="font-display text-xl font-bold text-accent"
      >
        {mission.number}
      </span>
      <p className="text-base leading-relaxed text-ink/90">{mission.text}</p>
    </div>
  );
}
