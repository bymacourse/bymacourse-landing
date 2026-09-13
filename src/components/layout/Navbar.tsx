"use client";

import { useEffect, useState } from "react";
import { navigation } from "@/content/navigation";
import { registrationHref } from "@/content/contact";
import { cn } from "@/lib/cn";
import { Container } from "./Container";
import { Logo } from "../ui/Logo";
import { Button } from "../ui/Button";
import { Icon } from "../ui/Icon";
import { MobileMenu } from "./MobileMenu";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = navigation.filter((item) => !item.cta);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled
          ? "border-b border-border bg-background/95 backdrop-blur"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <Container>
        <div className="flex h-16 items-center justify-between gap-4 sm:h-18">
          <a
            href="#home"
            aria-label="BYMA Course — kembali ke atas"
            className="rounded-md"
          >
            <Logo priority alt="" />
          </a>

          <nav aria-label="Navigasi utama" className="hidden lg:block">
            <ul className="flex items-center gap-8">
              {links.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm font-medium text-ink/80 transition-colors hover:text-primary"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden lg:block">
            <Button href={registrationHref}>Daftar</Button>
          </div>

          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label="Buka menu navigasi"
            className="inline-flex h-11 w-11 items-center justify-center rounded-md text-primary-dark hover:bg-lavender lg:hidden"
          >
            <Icon name="menu" className="h-6 w-6" />
          </button>
        </div>
      </Container>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </header>
  );
}
