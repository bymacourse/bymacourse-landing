import { navigation } from "@/content/navigation";
import { socialLinks } from "@/content/social-links";
import { siteConfig } from "@/content/site.config";
import { contactAnchorId } from "@/content/contact";
import { Container } from "./Container";
import { Logo } from "../ui/Logo";
import { Icon } from "../ui/Icon";

export function Footer() {
  const year = new Date().getFullYear();
  const links = navigation.filter((item) => !item.cta);

  return (
    <footer id={contactAnchorId} className="bg-primary-dark text-white">
      <Container className="py-14 sm:py-16">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Logo variant="inverted" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
              &ldquo;{siteConfig.tagline}&rdquo;
            </p>
          </div>

          <nav aria-label="Navigasi footer">
            <h2 className="text-eyebrow font-semibold uppercase text-white/60">
              Navigasi
            </h2>
            <ul className="mt-4 space-y-3">
              {links.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-white/80 transition-colors hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-eyebrow font-semibold uppercase text-white/60">
              Kontak
            </h2>
            <ul className="mt-4 space-y-3">
              {socialLinks.map((link) =>
                link.href ? (
                  <li key={link.id}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2.5 text-sm text-white/80 transition-colors hover:text-white"
                    >
                      <Icon name={link.icon} className="h-5 w-5 shrink-0" />
                      <span>
                        {link.label}: {link.value}
                      </span>
                    </a>
                  </li>
                ) : (
                  <li key={link.id}>
                    <span className="inline-flex items-center gap-2.5 text-sm text-white/60">
                      <Icon name={link.icon} className="h-5 w-5 shrink-0" />
                      <span>
                        {link.label}: {link.value}
                      </span>
                    </span>
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/15 pt-6">
          <p className="text-sm text-white/60">
            &copy; {year} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
