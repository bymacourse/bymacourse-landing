import Image from "next/image";
import { cn } from "@/lib/cn";

const assets = {
  full: { src: "/brand/logo.webp", width: 400, height: 188 },
  mark: { src: "/brand/logo-mark.webp", width: 200, height: 228 },
} as const;

interface LogoProps {
  className?: string;
  variant?: "default" | "inverted";
  withWordmark?: boolean;
  priority?: boolean;
  alt?: string;
}

/**
 * BYMA Course logo (official asset).
 *
 * Sourced from the provided `logo.png` and exported with a transparent
 * background, preserving the original aspect ratio and colors. It is never
 * stretched, rotated, or recolored.
 *
 * On dark surfaces use `variant="inverted"`, which places the logo on a light
 * chip for contrast instead of altering the logo's colors.
 */
export function Logo({
  className,
  variant = "default",
  withWordmark = true,
  priority = false,
  alt = "BYMA Course",
}: LogoProps) {
  const asset = withWordmark ? assets.full : assets.mark;

  const image = (
    <Image
      src={asset.src}
      alt={alt}
      width={asset.width}
      height={asset.height}
      priority={priority}
      className={cn("block w-auto", withWordmark ? "h-10" : "h-9")}
    />
  );

  if (variant === "inverted") {
    return (
      <span
        className={cn(
          "inline-flex items-center rounded-xl bg-white px-3.5 py-2.5 shadow-sm",
          className,
        )}
      >
        {image}
      </span>
    );
  }

  return <span className={cn("inline-flex items-center", className)}>{image}</span>;
}
