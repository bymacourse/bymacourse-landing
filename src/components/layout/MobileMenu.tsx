"use client";

import { useEffect, useRef } from "react";
import { navigation } from "@/content/navigation";
import { registrationHref } from "@/content/contact";
import { cn } from "@/lib/cn";
import { Logo } from "../ui/Logo";
import { Icon } from "../ui/Icon";
import { Button } from "../ui/Button";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!open) return;

    previouslyFocused.current = document.activeElement as HTMLElement | null;

    const getFocusable = (): HTMLElement[] => {
      const panel = panelRef.current;
      if (!panel) return [];
      return Array.from(
        panel.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled])',
        ),
      );
    };

    getFocusable()[0]?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key === "Tab") {
        const items = getFocusable();
        if (items.length === 0) return;
        const first = items[0];
        const last = items[items.length - 1];

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      previouslyFocused.current?.focus();
    };
  }, [open, onClose]);

  return (
    <>
      <div
        aria-hidden="true"
        onClick={onClose}
        className={cn(
          "fixed inset-0 z-40 bg-primary-dark/50 transition-opacity duration-300 lg:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      />

      <div
        id="mobile-menu"
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Menu navigasi"
        inert={!open}
        className={cn(
          "fixed inset-y-0 right-0 z-50 flex w-[min(20rem,85vw)] flex-col bg-surface shadow-lg transition-transform duration-300 lg:hidden",
          open ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex h-16 items-center justify-between border-b border-border px-4">
          <Logo withWordmark={false} alt="" />
          <button
            type="button"
            onClick={onClose}
            aria-label="Tutup menu navigasi"
            className="inline-flex h-11 w-11 items-center justify-center rounded-md text-primary-dark hover:bg-lavender"
          >
            <Icon name="close" className="h-6 w-6" />
          </button>
        </div>

        <nav aria-label="Navigasi seluler" className="flex-1 px-4 py-6">
          <ul className="space-y-1">
            {navigation
              .filter((item) => !item.cta)
              .map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={onClose}
                    className="flex min-h-11 items-center rounded-md px-3 py-3 text-base font-medium text-ink hover:bg-lavender hover:text-primary"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
          </ul>
        </nav>

        <div className="border-t border-border p-4">
          <Button
            href={registrationHref}
            onClick={onClose}
            className="w-full"
            withArrow
          >
            Daftar
          </Button>
        </div>
      </div>
    </>
  );
}
