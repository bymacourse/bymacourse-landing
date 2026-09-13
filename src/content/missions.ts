import type { Mission } from "@/lib/types";

/**
 * Missions — official wording, unchanged. Numbering is structural,
 * not a claim of priority.
 */
export const missions: Mission[] = [
  {
    id: "mission-1",
    number: "01",
    text: "Membangun kebiasaan belajar Bahasa Inggris secara konsisten melalui pendekatan HABEL (Habit-Based English Learning).",
  },
  {
    id: "mission-2",
    number: "02",
    text: "Menghadirkan pembelajaran yang praktis dan relevan dengan penggunaan Bahasa Inggris dalam kehidupan sehari-hari.",
  },
  {
    id: "mission-3",
    number: "03",
    text: "Mendorong siswa untuk aktif menggunakan Bahasa Inggris bukan hanya memahami teori.",
  },
  {
    id: "mission-4",
    number: "04",
    text: "Menciptakan pengalaman belajar yang interaktif dan suportif agar siswa lebih percaya diri untuk berlatih dan belajar dari kesalahan.",
  },
  {
    id: "mission-5",
    number: "05",
    text: "Membantu siswa mencapai perkembangan yang terukur melalui latihan, feedback, evaluasi, dan praktik berkelanjutan.",
  },
];

export const visionMissionMeta = {
  eyebrow: "Visi & Misi",
  heading: "Arah yang kami bangun bersama",
} as const;
