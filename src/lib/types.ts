export type IconName =
  | "habit"
  | "practical"
  | "interactive"
  | "supportive"
  | "materi"
  | "quiz"
  | "sentence"
  | "reading"
  | "speaking"
  | "whatsapp"
  | "tiktok"
  | "mail"
  | "instagram"
  | "arrow-right"
  | "arrow-down"
  | "menu"
  | "close"
  | "check";

export interface NavItem {
  label: string;
  href: string;
  cta?: boolean;
}

export interface Benefit {
  id: string;
  title: string;
  description: string;
  icon: IconName;
}

export interface HabelStepData {
  id: string;
  number: string;
  en: string;
  label: string;
  copy: string;
}

export interface Activity {
  id: string;
  title: string;
  description: string;
  icon: IconName;
}

export interface Mission {
  id: string;
  number: string;
  text: string;
}

export interface ContactChannel {
  id: string;
  label: string;
  value: string;
  href?: string;
  icon: IconName;
}
