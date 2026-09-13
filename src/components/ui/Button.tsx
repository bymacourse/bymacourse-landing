import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Icon } from "./Icon";

type ButtonVariant = "primary" | "secondary" | "ghost" | "light";
type ButtonSize = "md" | "lg";

interface ButtonProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  href: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
  withArrow?: boolean;
}

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors duration-200 focus-visible:outline-3 focus-visible:outline-offset-2";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-white shadow-md hover:bg-primary-hover focus-visible:outline-primary-dark",
  secondary:
    "border-2 border-primary bg-transparent text-primary hover:bg-lavender focus-visible:outline-primary",
  ghost:
    "border-2 border-white/70 bg-transparent text-white hover:bg-white/10 focus-visible:outline-white",
  light:
    "bg-white text-primary-dark shadow-md hover:bg-lavender focus-visible:outline-white",
};

const sizes: Record<ButtonSize, string> = {
  md: "min-h-11 px-6 py-3 text-sm sm:text-base",
  lg: "min-h-12 px-7 py-3.5 text-base",
};

export function Button({
  href,
  variant = "primary",
  size = "md",
  children,
  className,
  withArrow = false,
  ...rest
}: ButtonProps) {
  const isExternal = /^https?:\/\//i.test(href);

  return (
    <a
      href={href}
      {...(isExternal
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
      className={cn(base, variants[variant], sizes[size], className)}
      {...rest}
    >
      {children}
      {withArrow ? <Icon name="arrow-right" className="h-5 w-5" /> : null}
    </a>
  );
}
