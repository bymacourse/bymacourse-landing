import type { Activity } from "@/lib/types";

/**
 * Learning activities — limited to the officially mentioned activities.
 * Descriptions are proposals derived from that list; no additional
 * programs or features are invented.
 */
export const activities: Activity[] = [
  {
    id: "materi",
    title: "Materi",
    description:
      "Materi Bahasa Inggris yang praktis dan dekat dengan kehidupan sehari-hari.",
    icon: "materi",
  },
  {
    id: "quiz",
    title: "Quiz",
    description: "Latihan singkat untuk menguji pemahamanmu.",
    icon: "quiz",
  },
  {
    id: "sentence-making",
    title: "Sentence Making",
    description: "Berlatih menyusun kalimat Bahasa Inggris sendiri.",
    icon: "sentence",
  },
  {
    id: "reading",
    title: "Reading",
    description: "Melatih pemahaman melalui bacaan.",
    icon: "reading",
  },
  {
    id: "speaking-practice",
    title: "Speaking Practice",
    description:
      "Berlatih berbicara agar lebih percaya diri menggunakan Bahasa Inggris.",
    icon: "speaking",
  },
];

export const activitiesMeta = {
  eyebrow: "Aktivitas Pembelajaran",
  heading: "Kegiatan yang membentuk kebiasaanmu",
  description:
    "Siswa belajar secara konsisten melalui berbagai aktivitas yang membantu Bahasa Inggris menjadi bagian dari keseharian.",
} as const;
