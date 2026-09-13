import type { Benefit } from "@/lib/types";

/**
 * Why BYMA — value cards derived strictly from the official source material.
 * No statistics or claims that are not present in the source.
 */
export const benefits: Benefit[] = [
  {
    id: "habit-based",
    title: "Habit-Based",
    description:
      "Pembelajaran dirancang untuk membangun kebiasaan belajar dan praktik yang konsisten.",
    icon: "habit",
  },
  {
    id: "practical",
    title: "Practical",
    description:
      "Pembelajaran dekat dengan penggunaan Bahasa Inggris dalam kehidupan sehari-hari.",
    icon: "practical",
  },
  {
    id: "interactive",
    title: "Interactive",
    description:
      "Siswa aktif berlatih dan menggunakan Bahasa Inggris, bukan hanya memahami teori.",
    icon: "interactive",
  },
  {
    id: "supportive",
    title: "Supportive",
    description:
      "Siswa didorong untuk mencoba, belajar dari kesalahan, dan berkembang.",
    icon: "supportive",
  },
];
