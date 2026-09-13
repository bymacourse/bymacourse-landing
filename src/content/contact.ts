import { isTbd } from "./site.config";

/**
 * Contact configuration.
 *
 * WhatsApp is provided. Email, Instagram, and the registration URL are
 * still TBD and must never be fabricated.
 */
export const contact = {
  whatsappNumber: "6281226109432",
  whatsappDisplay: "+62 812-2610-9432",
  whatsappUrl: "https://wa.me/6281226109432",
  tiktokHandle: "@bymacourse",
  tiktokUrl: "https://www.tiktok.com/@bymacourse",
  instagramHandle: "@bymacourse",
  instagramUrl: "https://www.instagram.com/bymacourse",
  registrationUrl: "TBD",
} as const;

export const contactAnchorId = "kontak";
export const contactAnchor = `#${contactAnchorId}`;

/**
 * Primary CTA target. Per PRD decision: when the registration URL is TBD,
 * the CTA smooth-scrolls to the footer contact block instead of linking
 * to a dead destination.
 */
export const registrationHref = isTbd(contact.registrationUrl)
  ? contactAnchor
  : contact.registrationUrl;

export const whatsappHref = contact.whatsappUrl;
