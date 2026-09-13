interface DecorativeBlobsProps {
  className?: string;
}

/**
 * Purely decorative background shapes. Hidden from assistive technology and
 * static under `prefers-reduced-motion` (see global motion rules).
 */
export function DecorativeBlobs({ className }: DecorativeBlobsProps) {
  return (
    <div
      aria-hidden="true"
      className={"pointer-events-none absolute inset-0 overflow-hidden " + (className ?? "")}
    >
      <div className="absolute -left-16 top-10 h-56 w-56 rounded-full bg-lavender opacity-70 blur-2xl motion-safe:animate-float" />
      <div className="absolute -right-10 bottom-0 h-64 w-64 rounded-full bg-accent-soft opacity-60 blur-2xl motion-safe:animate-float [animation-delay:1.5s]" />
    </div>
  );
}
