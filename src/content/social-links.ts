import type { ContactChannel } from "@/lib/types";
import { contact } from "./contact";

/**
 * Footer contact/social list. Channels without a real value are rendered
 * as non-clickable labels (e.g. "Email: TBD") rather than dead links.
 */
export const socialLinks: ContactChannel[] = [
  {
    id: "whatsapp",
    label: "WhatsApp",
    value: contact.whatsappDisplay,
    href: contact.whatsappUrl,
    icon: "whatsapp",
  },
  {
    id: "tiktok",
    label: "TikTok",
    value: contact.tiktokHandle,
    href: contact.tiktokUrl,
    icon: "tiktok",
  },
  {
    id: "instagram",
    label: "Instagram",
    value: contact.instagramHandle,
    href: contact.instagramUrl,
    icon: "instagram",
  },
];
