/**
 * Global site configuration.
 *
 * `url` is TBD until the production domain is confirmed. It is used for
 * canonical and Open Graph metadata.
 */
export const siteConfig = {
  name: "BYMA Course",
  tagline: "Make English a Habit",
  taglineTitle: "Make English a Habit",
  description:
    "BYMA Course adalah kursus Bahasa Inggris online dengan pendekatan HABEL (Habit-Based English Learning) untuk membantu kamu belajar, berlatih, dan menggunakan Bahasa Inggris secara konsisten.",
  url: "TBD",
  locale: "id_ID",
  lang: "id",
} as const;

export const isTbd = (value: string): boolean =>
  !value || value.trim().toUpperCase() === "TBD";
