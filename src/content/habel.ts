import type { HabelStepData } from "@/lib/types";

/**
 * HABEL (Habit-Based English Learning) — official definition and framework.
 * The definition is verbatim. Step copy restates the framework and the
 * officially mentioned activities only; it introduces no new learning claims.
 */
export const habel = {
  eyebrow: "HABEL Method",
  heading: "HABEL (Habit-Based English Learning)",
  definition:
    "HABEL (Habit-Based English Learning) adalah pendekatan pembelajaran BYMA Course yang berfokus pada pembentukan kebiasaan belajar dan penggunaan Bahasa Inggris secara konsisten.",
  steps: [
    {
      id: "learn",
      number: "01",
      en: "LEARN",
      label: "Belajar",
      copy: "Mulai dengan memahami materi Bahasa Inggris yang praktis dan relevan.",
    },
    {
      id: "practice",
      number: "02",
      en: "PRACTICE",
      label: "Berlatih",
      copy: "Terapkan yang kamu pelajari melalui latihan seperti quiz, sentence making, dan reading.",
    },
    {
      id: "repeat",
      number: "03",
      en: "REPEAT",
      label: "Mengulang",
      copy: "Ulangi latihan secara konsisten agar kemampuanmu semakin terbentuk.",
    },
    {
      id: "use",
      number: "04",
      en: "USE",
      label: "Menggunakan",
      copy: "Gunakan Bahasa Inggris dalam keseharian, termasuk speaking practice, supaya kebiasaanmu tumbuh.",
    },
  ] satisfies HabelStepData[],
} as const;
