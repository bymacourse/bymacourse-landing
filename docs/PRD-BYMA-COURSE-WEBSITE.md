# Product Requirements Document (PRD)

## BYMA Course — Official Website / Landing Page

| Field | Value |
|---|---|
| **Document** | PRD-BYMA-COURSE-WEBSITE |
| **Product** | BYMA Course Official Website |
| **Product type** | Marketing website / responsive single-page landing page |
| **Primary language** | Bahasa Indonesia (ID) |
| **Status** | Draft — open questions resolved; awaiting implementation approval |
| **Phase** | Phase 1 (PRD only — no implementation) |
| **Author role** | PM / UX Strategist / UI-UX Designer / Brand Designer / Senior Frontend Architect |
| **Repository** | `C:\Herd\bymacourse-landing` (empty, greenfield, not a git repo at time of writing) |
| **Target deploy** | GitHub Pages (static export) → `https://bymacourse.com` |
| **Approval gate** | Implementation begins only after the exact phrase: `PRD approved, lanjut implementasi` |

> **Reading note:** Sections marked **(DRAFT COPY)** contain proposed Indonesian website copy derived strictly from the official source material. Any copy not directly quoted from source is clearly marked as a proposal and must not introduce unsupported claims.

---

## 1. Executive Summary

BYMA Course is an online English course built on a single belief: **ability is not built by study alone, but by habit** — consistent practice and real use. Its proprietary learning framework is **HABEL (Habit-Based English Learning)**, expressed through the cycle **LEARN → PRACTICE → REPEAT → USE** (Belajar → Berlatih → Mengulang → Menggunakan).

This project delivers a **modern, mobile-first, Bahasa Indonesia marketing landing page** that transforms the existing presentation material into a polished web experience. The site must, within 5–10 seconds of arrival, communicate three things: (1) BYMA is an online English course, (2) its philosophy is "making English a habit", and (3) it has a clear method — HABEL — that the visitor can understand and trust.

The page is a **single-page anchor-navigated experience** with one primary conversion goal: **register / contact BYMA Course**. It is a greenfield build (the repository is currently empty) that will be implemented in **Next.js (App Router) + TypeScript + Tailwind CSS** and deployed to **GitHub Pages** as a fully static export, served at `https://bymacourse.com`.

Because large amounts of operational data (contact channels, pricing, schedule, tutors, testimonials) are not yet available, this PRD enforces a strict **no-fabrication rule**: unknown values are represented as `TBD` and surfaced through a **configurable content layer**, so the site can ship with placeholders and be completed later without code changes.

---

## 2. Product Background

BYMA Course currently communicates through presentation material (slides). That format is linear, offline, and not optimized for discovery, sharing, SEO, or conversion. Prospective students who encounter BYMA need a persistent, always-available, mobile-friendly destination that:

- explains what BYMA is and who it is for,
- explains the HABEL method clearly and memorably,
- makes the learning experience tangible,
- establishes credibility through vision and mission,
- and gives a clear next step.

The brand already has a distinct visual DNA (deep purple, magenta, pink-purple, lavender, warm cream, large bold typography, geometric and organic blob shapes, asymmetric layouts). This website must **preserve that DNA** while elevating it into a professional, modern education landing page — explicitly avoiding the "PowerPoint exported to HTML" look.

### Source material inventory (authoritative)

The following content is provided and authoritative. Meaning must not be changed; light restructuring for web readability is allowed.

- **About text** (4 paragraphs + supporting quote)
- **HABEL** definition and framework (LEARN → PRACTICE → REPEAT → USE)
- **Learning activities** list (materi, quiz, sentence making, reading, speaking practice, plus "berbagai aktivitas…")
- **Vision** (single statement)
- **Mission** (5 statements)
- **Tagline:** "Make English a Habit"
- **Brand/visual direction** and logo description (geometric, pink-purple gradient)

---

## 3. Problem Statement

**For prospective students:**
- People who want to improve their English struggle most with **consistency**, not with access to material. They start, stop, and lose momentum, and they lack a structured habit.
- Many learners consume theory but rarely **use** English, so ability does not transfer to real life.
- Prospective learners cannot currently evaluate BYMA Course quickly: there is no single web destination that explains the method, the experience, and the next step.

**For BYMA Course:**
- There is no owned web presence to explain the brand, capture interest, and convert visitors into students.
- The method that differentiates BYMA — **HABEL** — is buried in a presentation and not presented as a compelling, scannable story.
- Without a landing page, there is no reliable place to send traffic from social/ads/word-of-mouth, and no foundation for future SEO.

**Problem statement (one sentence):**
> Prospective English learners who struggle with consistency lack a clear, trustworthy, mobile-friendly place to understand BYMA Course and its HABEL method, and BYMA lacks an owned conversion surface to turn interest into enrollment.

---

## 4. Product Goals

**Primary goals**
1. Communicate within 5–10 seconds that BYMA Course is an online English course with a habit-based philosophy.
2. Make **HABEL** the memorable centerpiece: LEARN → PRACTICE → REPEAT → USE.
3. Drive a single primary conversion action (register / contact) via clear, repeated CTAs.
4. Build trust through authentic, source-faithful About, Vision, and Mission content.
5. Ship a fast, accessible, SEO-ready page that scores **Lighthouse ≥ 90** across Performance, Accessibility, Best Practices, and SEO.

**Secondary goals**
6. Establish a scalable content architecture so pricing, FAQ, testimonials, and program details can be added later without rework.
7. Preserve and elevate the brand's existing visual DNA into a modern education aesthetic.
8. Create a reusable design system (tokens + components) for future pages.

**Success indicators (to be instrumented, targets TBD pending baseline)**
- Primary CTA click-through rate.
- Scroll depth reaching the HABEL section and Final CTA.
- Bounce/engagement on mobile viewports.
- Lighthouse scores ≥ 90 in all four categories.

---

## 5. Non-Goals

This MVP explicitly does **not** include:

1. **No user accounts / login / student dashboard.**
2. **No LMS functionality** — no course delivery, video hosting, or assignment submission.
3. **No payment processing or checkout.**
4. **No pricing tables or package comparison** (data not available).
5. **No blog / CMS / content marketing engine** (future roadmap).
6. **No multi-language switcher** — Bahasa Indonesia only for MVP (English tagline retained as brand element).
7. **No testimonials, student statistics, or tutor profiles** — data not available and must not be fabricated.
8. **No live chat widget** in MVP (contact via WhatsApp link and remaining `TBD` channels when supplied).
9. **No dark mode** — the brief explicitly avoids a dark website aesthetic.
10. **No scroll hijacking, heavy parallax, or heavy animation libraries.**

---

## 6. Target Audience

**Primary audience — prospective students who:**
- want to improve their English,
- struggle with consistent learning,
- want more practical English practice,
- want to become more confident using English,
- prefer online learning,
- need practice beyond theory.

**Possible audience segments (from source — categories only):**
- students (pelajar),
- university students (mahasiswa),
- fresh graduates,
- workers (pekerja),
- general English learners.

> **IMPORTANT:** The source does **not** define an exact age range. This PRD does **not** invent one. Any future age-based messaging must come from BYMA.

**Audience needs summary**
| Need | How the site addresses it |
|---|---|
| "Will this actually help me improve?" | HABEL method + activities section |
| "I can't stay consistent." | Habit-first messaging, encouraging tone |
| "Is this practical or just theory?" | Practice/use emphasis, activity cards |
| "Is this legit / trustworthy?" | About, Vision, Mission |
| "What do I do next?" | Repeated, clear CTAs |

---

## 7. Personas (illustrative, non-fabricated)

> Personas below are **UX design aids** derived only from the stated audience categories. They introduce **no** statistics, ages, or claims. Names are placeholders.

### Persona A — "Rani, the university student"
- **Context:** Studies and is aware English matters for her future, but learns in bursts and loses momentum.
- **Goal:** Build a consistent routine and become comfortable speaking.
- **Pain:** Material feels theoretical; she doesn't practice enough.
- **What convinces her:** A clear method, practical activities (speaking practice), an encouraging tone.

### Persona B — "Dimas, the fresh graduate / worker"
- **Context:** Needs English for work/career but has limited, irregular free time.
- **Goal:** Practical English he can use day to day; improvement he can feel.
- **Pain:** No habit, no accountability, no structure.
- **What convinces him:** "Habit over theory", flexible online format, clear next step.

### Persona C — "Sari, the general learner"
- **Context:** Wants to try learning English online, unsure where to start.
- **Goal:** A friendly, low-pressure starting point.
- **Pain:** Intimidated by "must be perfect" expectations.
- **What convinces her:** The line "Di BYMA, kamu tidak dituntut untuk langsung sempurna."

---

## 8. User Needs

**Functional needs**
- Quickly understand what BYMA Course is and who it's for.
- Understand the HABEL method and its 4 steps.
- See what learning activities look like in practice.
- Find a clear way to register or contact BYMA.

**Emotional needs**
- Feel encouraged, not judged ("tidak dituntut untuk langsung sempurna").
- Feel that improvement is achievable through habit.
- Feel confident this is a supportive place to learn and make mistakes.

**Trust needs**
- See a coherent brand with a real philosophy (Vision/Mission).
- No exaggerated claims — honesty builds confidence.

**Accessibility needs**
- Readable on a small phone in one hand, with sufficient contrast and touch targets.
- Keyboard/screen-reader navigable.

---

## 9. Main User Journey

Target journey (must be achievable in a single scroll or via anchor nav):

```
Visitor arrives (search / social / link)
        ↓
[5–10s] Understands: BYMA = online English course
        ↓
Understands philosophy: making English a habit
        ↓
Learns what BYMA is (Tentang)
        ↓
Discovers HABEL (definition)
        ↓
Understands the cycle: LEARN → PRACTICE → REPEAT → USE
        ↓
Sees learning activities (tangible proof of the method)
        ↓
Reads Why BYMA (benefits) → gains trust
        ↓
Reads Vision & Mission → gains trust
        ↓
Final CTA
        ↓
Clicks: Daftar Sekarang / Hubungi Kami  →  (registrationUrl: TBD · whatsappUrl: https://wa.me/6281226109432)
```

**Emotional arc:** curious → reassured → inspired → confident → ready to act.

---

## 10. Information Architecture

### Recommended final order (single-page anchor flow) — **Approved**

| # | Section | Anchor ID | Nav label | Purpose |
|---|---------|-----------|-----------|---------|
| 1 | Navbar | — | — | Wayfinding + persistent CTA |
| 2 | Hero | `#home` | Home | Instant positioning + primary CTA |
| 3 | Tentang BYMA Course | `#tentang` | Tentang Kami | What/who is BYMA |
| 4 | **HABEL Method** | `#habel` | HABEL Method | **Centerpiece differentiator** |
| 5 | Learning Activities | `#aktivitas` | — | Make HABEL tangible |
| 6 | Why BYMA | `#why` | — | Benefit reinforcement / trust |
| 7 | Visi & Misi | `#visi-misi` | Visi & Misi | Institutional trust |
| 8 | Final CTA | `#daftar` | Daftar | Conversion |
| 9 | Footer | — | — | Brand, nav, contact placeholders |

### Why this order (recommendation + rationale)

1. **HABEL moved up to position 4** (from the proposed #5). The method is BYMA's strongest differentiator and most memorable asset; it should land while attention is highest, immediately after the "what is this" (Hero) and "who is this" (Tentang) questions are answered. This makes the narrative: *what → who → how (HABEL) → proof (Activities) → why (Benefits) → credibility (Visi & Misi) → act (CTA).*
2. **Activities directly follow HABEL** so the abstract cycle is immediately grounded in concrete practices (materi, quiz, sentence making, reading, speaking practice).
3. **Why BYMA after Activities** acts as a benefit bridge — it reframes the method into visitor value before the more institutional Vision/Mission.
4. **Vision + Mission merged into one section** (`#visi-misi`) because the navigation exposes a single "Visi & Misi" item, and two consecutive short sections would feel thin and repetitive. Mission is presented as a numbered list within the same block.
5. **Final CTA immediately before Footer**, after maximum trust has been accumulated.

### Alternative order (if stakeholder prefers the original)
Hero → Tentang → Why BYMA → HABEL → Activities → Visi → Misi → CTA → Footer.
*(Trade-off: HABEL arrives later; recommended only if user testing shows benefits-first messaging converts better. To be validated.)*

### Navigation model
- **Single-page anchor navigation** (recommended for MVP).
- Items: **Home · Tentang Kami · HABEL Method · Visi & Misi · Daftar**
- `Daftar` is a **button-styled** item pointing to the primary CTA target (or directly to `registrationUrl` once available).

---

## 11. Page / Section Specifications

Global rules for all sections:
- Consistent vertical rhythm via a spacing scale (Section 25).
- Each section has a single clear heading (`h2`), with `h1` reserved for the Hero only.
- Alternating backgrounds (cream / surface / purple block) to create rhythm without clutter.
- Every section is responsive mobile-first and free of horizontal overflow.

| Section | Background tone | Key elements | CTA |
|---|---|---|---|
| Navbar | Transparent over hero → solid on scroll | Logo, nav links, Daftar button, mobile menu | Daftar |
| Hero | Cream / light with decorative blobs | Eyebrow, H1, supporting copy, 2 CTAs, hero visual | Mulai Belajar / Kenali HABEL |
| Tentang | Surface / light pink rounded block | Section heading, About paragraphs, supporting quote | — |
| HABEL | Purple/magenta block (signature moment) | Definition + 4 steps + directional flow | Kenali HABEL |
| Activities | Cream | Heading + 5 activity cards | — |
| Why BYMA | Surface | Heading + 4 benefit cards | — |
| Visi & Misi | Cream with purple accents | Vision statement + 5 missions | — |
| Final CTA | Strong purple/magenta block | Headline, supporting text, 2 CTAs | Daftar Sekarang / Hubungi Kami |
| Footer | Deep purple (dark text on brand block) | Brand, tagline, nav, contact placeholders | — |

> Note: a dark **footer** is acceptable as a brand block; the brief's "avoid dark website aesthetic" refers to the overall site being dark. Footer will use the brand's deep purple with sufficient contrast.

---

## 12. Hero Requirements

**Objective:** Communicate the product within ~5–10 seconds.

**Content (recommended)**

- **Eyebrow:** `Online English Course`
- **Headline (H1):** `Make English a Habit`
  - *(Official tagline; must not be replaced. English retained as brand statement.)*
- **Supporting copy (DRAFT COPY — proposal):**
  > BYMA Course membantu kamu membangun kemampuan Bahasa Inggris melalui kebiasaan belajar dan praktik yang konsisten.
- **Primary CTA:** `Mulai Belajar` → `registrationUrl` (**TBD** placeholder)
- **Secondary CTA:** `Kenali HABEL Method` → smooth-scroll to `#habel`

**Requirements**
- `h1` used once, here.
- Two CTAs with clear visual hierarchy (primary = solid brand; secondary = outline/ghost).
- Hero visual: educational/language-learning imagery or a branded geometric composition using the logo + blob shapes. Must not stretch or recolor the logo.
- Decorative floating shapes: subtle, low-motion, `aria-hidden`.
- Above-the-fold on mobile 360px: eyebrow + headline + at least the primary CTA visible without scroll.
- No autoplay video. No carousel.

**Acceptance:** A first-time visitor can state (a) it's an online English course, and (b) it's about building habits — after ~5–10 seconds.

---

## 13. About Requirements (Tentang BYMA Course)

**Objective:** Explain what BYMA is, faithfully to the official About text.

**Source content (authoritative — meaning unchanged):**

> "BYMA Course adalah kursus Bahasa Inggris online yang percaya bahwa kemampuan tidak dibangun hanya dengan belajar, tetapi melalui kebiasaan untuk terus berlatih dan menggunakannya.
>
> Melalui HABEL (Habit-Based English Learning), kami menghadirkan proses belajar yang praktis, interaktif, dan dekat dengan kehidupan sehari-hari.
>
> Siswa belajar secara konsisten melalui materi, quiz, sentence making, reading, speaking practice, serta berbagai aktivitas yang membantu Bahasa Inggris menjadi bagian dari keseharian.
>
> Di BYMA, kamu tidak dituntut untuk langsung sempurna.
>
> Kami ingin membantumu mulai, berlatih, berkembang, dan semakin percaya diri menggunakan Bahasa Inggris."

**Supporting quote:** "Make English a Habit"

**Requirements**
- Restructure into short, scannable paragraphs (2–4 lines each on desktop; shorter on mobile).
- Highlight the supportive line ("Di BYMA, kamu tidak dituntut untuk langsung sempurna.") as a pull-quote or emphasized block — this is an emotional anchor.
- Do not alter meaning. Do not add claims.
- May pair with a relevant learning image.

**Layout concept:** Two-column on desktop (text + image / decorative block); single column on mobile.

---

## 14. HABEL Requirements

**Objective:** Make HABEL the strongest visual and content section of the site.

**Definition (authoritative):**
> "HABEL (Habit-Based English Learning) adalah pendekatan pembelajaran BYMA Course yang berfokus pada pembentukan kebiasaan belajar dan penggunaan Bahasa Inggris secara konsisten."

**Framework (authoritative):** `LEARN → PRACTICE → REPEAT → USE` / `Belajar → Berlatih → Mengulang → Menggunakan`

**Four steps (structure):**
| # | English | Indonesian |
|---|---|---|
| 01 | LEARN | Belajar |
| 02 | PRACTICE | Berlatih |
| 03 | REPEAT | Mengulang |
| 04 | USE | Menggunakan |

**Explanatory copy (DRAFT COPY — strictly derived, no new learning claims):**
- **01 LEARN / Belajar** — Mulai dengan memahami materi Bahasa Inggris yang praktis dan relevan.
- **02 PRACTICE / Berlatih** — Terapkan yang kamu pelajari lewat latihan seperti quiz, sentence making, dan reading.
- **03 REPEAT / Mengulang** — Ulangi latihan secara konsisten agar kemampuanmu semakin terbentuk.
- **04 USE / Menggunakan** — Gunakan Bahasa Inggris dalam keseharian, termasuk speaking practice, supaya kebiasaanmu tumbuh.

> Copy above only restates the given framework and the officially mentioned activities. It introduces no new method or guarantee. Final wording subject to stakeholder review.

**UX representation (recommended)**
- **Desktop:** horizontal 4-step flow `LEARN → PRACTICE → REPEAT → USE` with connecting arrows, each step as a `HabelStep` card with number, English label, Indonesian label, and short copy. Signature purple/magenta background block.
- **Mobile:** vertical stacked flow with downward connectors:
  ```
  LEARN
   ↓
  PRACTICE
   ↓
  REPEAT
   ↓
  USE
  ```
- **Alternative considered:** numbered timeline / progress track with a moving highlight on scroll. Recommended only if it does not harm performance or accessibility; the static flow is the safe default.
- Animated directional flow (subtle) is allowed — see Section 32.

**Requirements**
- The definition sentence appears verbatim.
- All four steps present, correctly ordered, with both English and Indonesian labels.
- Section is visually distinct (the "signature" moment) — strongest color usage on the page.
- Accessible: ordered list semantics; connectors `aria-hidden`; content readable without animation.

---

## 15. Activities Requirements (Aktivitas Pembelajaran)

**Objective:** Show what learning at BYMA actually looks like. Easy to scan.

**Official activities (authoritative — do not invent others):**
- materi
- quiz
- sentence making
- reading
- speaking practice
- "berbagai aktivitas untuk membantu Bahasa Inggris menjadi bagian dari keseharian"

**Recommended cards (5):**
| Card | Title | Draft short description (proposal) |
|---|---|---|
| 1 | Materi | Materi Bahasa Inggris yang praktis dan dekat dengan kehidupan sehari-hari. |
| 2 | Quiz | Latihan singkat untuk menguji pemahamanmu. |
| 3 | Sentence Making | Berlatih menyusun kalimat Bahasa Inggris sendiri. |
| 4 | Reading | Melatih pemahaman melalui bacaan. |
| 5 | Speaking Practice | Berlatih berbicara agar lebih percaya diri menggunakan Bahasa Inggris. |

> Descriptions are proposals derived from the official list; they add no new programs/features. Subject to stakeholder review.

**Requirements**
- Card grid: 1 col mobile, 2 cols tablet, 3 cols desktop (or a balanced 5-card arrangement avoiding orphan cards).
- Each card: icon/illustration, title, short description.
- Consistent card styling (radius, shadow, hover state).
- Must not invent activities beyond the official list.

---

## 16. Vision Requirements (Visi)

**Source (authoritative — meaning unchanged):**
> "Menjadi kursus Bahasa Inggris online yang membantu setiap siswa menjadikan Bahasa Inggris sebagai kemampuan yang tumbuh melalui kebiasaan belajar dan praktik yang konsisten."

**Requirements**
- Presented verbatim within the `Visi & Misi` section as the opening block.
- Visually prominent (large type / highlighted panel), labeled clearly `Visi`.
- May be paired with a subtle decorative shape; no fabricated supporting claims.

---

## 17. Mission Requirements (Misi)

**Source (authoritative — meaning unchanged):**
1. "Membangun kebiasaan belajar Bahasa Inggris secara konsisten melalui pendekatan HABEL (Habit-Based English Learning)."
2. "Menghadirkan pembelajaran yang praktis dan relevan dengan penggunaan Bahasa Inggris dalam kehidupan sehari-hari."
3. "Mendorong siswa untuk aktif menggunakan Bahasa Inggris bukan hanya memahami teori."
4. "Menciptakan pengalaman belajar yang interaktif dan suportif agar siswa lebih percaya diri untuk berlatih dan belajar dari kesalahan."
5. "Membantu siswa mencapai perkembangan yang terukur melalui latihan, feedback, evaluasi, dan praktik berkelanjutan."

**Requirements**
- Rendered as an ordered list of 5 `MissionCard`s within the `Visi & Misi` section.
- Each mission keeps its full text, verbatim.
- Numbering (01–05) is decorative/structural, not a claim of priority.
- Grid: 1 col mobile, 2 cols desktop (last card may span or sit centered).

---

## 18. CTA Requirements

**Primary conversion:** register / contact BYMA.

**Final CTA content (recommended)**
- **Headline:** `Ready to Build Your English Habit?`
- **Supporting text (DRAFT COPY):**
  > Mulai kebiasaan belajar Bahasa Inggris dan jadikan praktik sebagai bagian dari keseharianmu.
- **Primary CTA:** `Daftar Sekarang` → `registrationUrl` (**TBD**)
- **Secondary CTA:** `Hubungi Kami` → WhatsApp (**provided:** https://wa.me/6281226109432)

**Requirements**
- **Do not invent contact or registration URLs.** All destinations come from the config layer. WhatsApp is provided (`https://wa.me/6281226109432`); `registrationUrl` remains `TBD`.
- **Decided:** when a destination is `TBD`, the button still renders and remains usable — it smooth-scrolls to the footer contact block, so no dead link is ever shown.
- CTAs repeated in: Navbar (`Daftar`), Hero (primary), HABEL section (soft), Final CTA (primary + secondary).
- Clear visual hierarchy; primary uses solid brand color, secondary uses outline.
- Buttons vs links: navigation to an external URL = `<a>`; in-page actions = `<button>` or anchor with `href="#id"`.

---

## 19. Footer Requirements

**Recommended footer**

```
BYMA Course
"Make English a Habit"

Navigation:  Home · Tentang Kami · HABEL Method · Visi & Misi

Contact:
  WhatsApp: +62 812-2610-9432  →  https://wa.me/6281226109432
  TikTok: @bymacourse           →  https://www.tiktok.com/@bymacourse
  Instagram: @bymacourse        →  https://www.instagram.com/bymacourse
```

**Requirements**
- Brand name + tagline (tagline verbatim).
- Anchor navigation repeated.
- **Provided contact channels:** WhatsApp `6281226109432` (`https://wa.me/6281226109432`, display `+62 812-2610-9432`), TikTok `@bymacourse`, Instagram `@bymacourse`. Registration URL remains `TBD`. Do **not** invent account names, emails, numbers, or URLs.
- **Decided:** social/contact items with `TBD` values render as **non-clickable labels**, so the slots are visibly reserved without dead links. Slots are kept in config for later swap.
- Include a copyright line: `© {year} BYMA Course`.
- Sufficient contrast for all footer text on the brand background.

---

## 20. Content Strategy

**Principles**
1. **Faithful to source.** Official About, HABEL, Vision, Mission, and tagline are used verbatim (or restructured without changing meaning).
2. **No unsupported claims.** Never assert guaranteed fluency, rankings, student counts, certified tutors, speed improvements, etc.
3. **Tone:** friendly, encouraging, direct, easy to understand; use **"kamu"**, not overly formal language.
4. **Scan-first.** Short paragraphs, clear headings, cards, and lists. Long source paragraphs are broken up.
5. **One idea per section.** Each section answers one question in the journey.
6. **Bahasa Indonesia primary.** The English tagline and HABEL acronym are retained as brand elements.

**Voice examples**
| Do | Don't |
|---|---|
| "Bangun kebiasaan belajar Bahasa Inggris." | "Kuasai Bahasa Inggris dalam 30 hari!" |
| "Belajar, berlatih, mengulang, menggunakan." | "Metode terbukti 2x lebih cepat." |
| "Kamu tidak dituntut untuk langsung sempurna." | "Dijamin lancar berbahasa Inggris." |

**Content sources & ownership**
- All final copy is subject to BYMA stakeholder review.
- Any `DRAFT COPY` in this PRD is a proposal, not approved final copy.

**Glossary / consistency**
- Use `BYMA Course` (not "Byma" / "BymaCourse") in body copy.
- Use `HABEL` uppercase, expanded on first use: "HABEL (Habit-Based English Learning)".
- Use `LEARN → PRACTICE → REPEAT → USE` consistently for the framework.

---

## 21. Brand Strategy

**Brand essence:** Learning English is a habit, not a one-time achievement.

**Positioning statement (derived):**
> For English learners who struggle to stay consistent, BYMA Course is an online English course that builds ability through HABEL (Habit-Based English Learning) — practical, interactive, and close to daily life — so that English becomes part of your everyday routine.

**Brand pillars**
1. **Habit over theory** — consistency is the core promise.
2. **Practical & relevant** — English for real, everyday use.
3. **Interactive & supportive** — try, make mistakes, grow.
4. **Encouraging** — no pressure to be perfect; progress over perfection.

**Personality:** friendly, modern, encouraging, supportive, energetic, youthful, educational, practical, approachable.

**Avoid:** overly corporate, generic SaaS aesthetic, excessive gradients, excessive animation, clutter, dark website aesthetic, overly formal education styling.

**Signature assets:** the tagline, the HABEL acronym, and the LEARN→PRACTICE→REPEAT→USE cycle.

---

## 22. Visual Direction

**Preserve the existing visual DNA:**
- deep purple, magenta, pink-purple, lavender / light purple,
- warm cream / off-white backgrounds,
- dark text,
- large typography, bold headings,
- geometric shapes and organic blob shapes,
- purple/magenta color blocks,
- cream backgrounds,
- rounded light-pink content boxes,
- asymmetric layouts,
- educational / learning photography.

**Elevate it (must NOT look like a converted slide deck):**
- intentional whitespace and consistent vertical rhythm,
- a real type hierarchy (not every line bold and huge),
- restrained use of shapes (decorative, not competing with content),
- consistent card/radius/shadow system,
- purposeful asymmetry rather than random offsets,
- real, relevant imagery rather than generic stock.

**Layout language**
- Max content width ~1200–1280px (Section 26).
- Alternate cream and surface backgrounds; use one or two strong purple/magenta "moment" blocks (HABEL and Final CTA).
- Rounded content boxes (light pink / lavender) as a recurring motif from the source material.

---

## 23. Color System Recommendation

> **IMPORTANT:** No official HEX values have been provided. The values below are **implementation approximations subject to approval**. They are **not** claimed to be official brand colors and must be validated against the actual brand/logo by the stakeholder.

Proposed tokens (CSS variables):

| Token | Approx. HEX | Role |
|---|---|---|
| `--color-primary-dark` | `#3B1E5A` | Deep purple — headings, footer background, strong blocks |
| `--color-primary` | `#6D28D9` | Primary purple — buttons, links, accents |
| `--color-accent` | `#D6336C` | Magenta/pink — accents, highlights, gradient end |
| `--color-accent-soft` | `#F7D6E6` | Light pink — rounded content boxes |
| `--color-lavender` | `#EDE4FB` | Lavender/light purple — surfaces, subtle backgrounds |
| `--color-background` | `#FBF7F1` | Warm cream/off-white — page background |
| `--color-surface` | `#FFFFFF` | Cards / elevated surfaces |
| `--color-text` | `#1F1633` | Primary dark text |
| `--color-muted` | `#6B6480` | Secondary/muted text |
| `--color-border` | `#E7E1EE` | Borders / dividers |

**Gradient:** a pink-purple gradient derived from `--color-primary` → `--color-accent` may be used for the logo treatment, HABEL accents, and select buttons. Use sparingly.

**Contrast requirements (WCAG AA)**
- Body text on cream/surface must be ≥ 4.5:1.
- Large text ≥ 3:1.
- Text on primary/accent buttons must be verified (white on `--color-primary` and `--color-accent` to be contrast-checked; adjust shade if needed).
- Never rely on color alone to convey meaning.

---

## 24. Typography Recommendation

**Decided: two free Google Fonts**

| Role | Font | Why |
|---|---|---|
| Display / headings | **Poppins** | Geometric, friendly, modern, rounded — matches the brand's geometric shapes and youthful education tone; strong at large sizes. |
| Body / UI | **Inter** | Highly legible at small sizes, excellent for Indonesian text, neutral so it doesn't compete with headings. |

**Alternatives (single-family option):** **Plus Jakarta Sans** (Indonesian-designed, modern, friendly) for both headings and body — acceptable if we prefer one family and minimal payload.

**Rules**
- Maximum ~2 families.
- Load via `next/font` (self-hosted, `display: swap`, subset `latin` + needed glyphs) to avoid layout shift and external requests.
- Use `font-display: swap` and preload critical weights only.
- No paid fonts.

**Type scale (proposed, desktop → mobile)**

| Token | Size (desktop / mobile) | Weight | Usage |
|---|---|---|---|
| `--fs-h1` | 56–64px / 36–40px | 700 | Hero headline |
| `--fs-h2` | 40–48px / 30–32px | 700 | Section headings |
| `--fs-h3` | 28–32px / 24px | 600 | Card/step titles |
| `--fs-body` | 18px / 16px | 400 | Paragraphs |
| `--fs-small` | 14px / 14px | 400 | Captions, footer |
| `--fs-eyebrow` | 13–14px | 600 | Eyebrow labels (uppercase, letter-spaced) |

**Line-height:** headings 1.1–1.25; body 1.6–1.7. **Measure:** cap body line length at ~60–75 characters.

---

## 25. Component / System Recommendation

Reusable UI components (to be implemented in Phase 2 — **not now**):

| Component | Responsibility |
|---|---|
| `Navbar` | Logo, nav links, CTA, scroll state |
| `MobileMenu` | Accessible mobile navigation (focus trap, ESC, 44px targets) |
| `Container` | Max-width + responsive horizontal padding |
| `SectionHeading` | Eyebrow + `h2` + optional subtitle |
| `Button` | Variants: primary, secondary/outline, ghost; sizes; states |
| `Hero` | Hero composition |
| `FeatureCard` | Why BYMA benefit card |
| `HabelStep` | Single HABEL step (number, EN/ID labels, copy) |
| `HabelFlow` | Container managing desktop-horizontal / mobile-vertical flow |
| `ActivityCard` | Learning activity card |
| `VisionBlock` | Vision statement presentation |
| `MissionCard` | Single mission item |
| `CTASection` | Final CTA block |
| `Footer` | Brand, nav, contact placeholders |
| `Logo` | Aspect-ratio-preserving logo wrapper |

**Design tokens / scales**

- **Spacing scale (px):** 4, 8, 12, 16, 24, 32, 48, 64, 80, 96, 120 → exposed as `--space-*`.
  - Section vertical padding: 64px mobile → 96–120px desktop.
- **Radius scale:** `sm 8px`, `md 12px`, `lg 20px`, `xl 28px`, `pill 9999px`.
  - Cards: `lg`–`xl`; buttons: `pill` (matches friendly brand).
- **Shadow scale:**
  - `sm`: `0 1px 2px rgba(31,22,51,.06)`
  - `md`: `0 8px 24px rgba(31,22,51,.08)`
  - `lg`: `0 20px 48px rgba(109,40,217,.12)` (used sparingly, e.g., hero card)
- **Max content width:** `1200px` (allow `1280px` on wide screens). Prose blocks narrower (~720–800px).
- **Button states:** default, hover (slightly darker / lifted), active (pressed), focus-visible (visible ring ≥ 3:1), disabled.
- **Typography hierarchy:** exactly one `h1`; sections use `h2`; cards use `h3`; never skip levels.
- **Breakpoints:**
  - `sm`: 640px
  - `md`: 768px
  - `lg`: 1024px
  - `xl`: 1280px
  - `2xl`: 1536px
  - (Tailwind default scale unless repo conventions dictate otherwise; repo is empty, so defaults apply.)

---

## 26. Responsive Requirements

**Mobile-first.**

- **Critical mobile widths to verify:** 360, 375, 390, 414.
- **Desktop reference widths:** 1280, 1366, 1440, 1920.
- **No horizontal overflow** at any width (test at 320px too).
- **Max content width ~1200–1280px**, centered with responsive gutters (16px mobile → 32–48px desktop).
- **Paragraph measure** capped (~60–75ch) so text never spans full width on large screens.
- **Images:** responsive `srcset`/`sizes`, `width`/`height` set to prevent CLS, `object-fit: cover`.
- **Fluid type** via `clamp()` for headings to avoid awkward jumps.
- **HABEL responsive behavior:**
  - Desktop: horizontal `LEARN → PRACTICE → REPEAT → USE`.
  - Mobile: vertical stack with down arrows (as specified).
- **Touch targets:** ≥ 44×44px.
- **No fixed pixel layouts** that break at 360px.

---

## 27. Mobile UX

- Single-column flow; generous tap targets; thumb-friendly CTA placement.
- Sticky, accessible mobile menu (hamburger). Requirements:
  - `aria-expanded`, `aria-controls`, `aria-label`.
  - Focus moves into menu on open; ESC closes; focus returns to trigger.
  - Body scroll lock while open.
  - Closes on anchor selection.
- Hero above the fold: eyebrow + headline + primary CTA visible without scrolling at 360px.
- HABEL vertical flow with clear directional connectors.
- Avoid hover-only interactions; ensure tap equivalents.
- Reduce motion / performance sensitivity: lighter animations on small devices.
- No horizontal scrolling tables or wide content.

---

## 28. Desktop UX

- Two-column compositions (Hero, About) with balanced whitespace.
- Max width ~1200–1280px; content centered.
- HABEL horizontal 4-step flow with connectors.
- Card grids: 3 columns for activities, 2–4 for benefits, 2 for missions.
- Subtle hover states on cards/buttons; visible focus for keyboard users.
- Sticky navbar with scroll-state change (transparent → solid + shadow).
- Smooth anchor scrolling with scroll-margin-top so headings aren't hidden under the sticky navbar.

---

## 29. Accessibility (Target: WCAG 2.1 AA)

Requirements:

1. **Semantic HTML:** `header`, `nav`, `main`, `section`, `footer`; one `h1`; logical heading order.
2. **Keyboard navigation:** all interactive elements reachable and operable; logical tab order; skip-to-content link.
3. **Visible focus states:** `:focus-visible` ring with ≥ 3:1 contrast; never remove outlines without replacement.
4. **Alt text:** meaningful alt for informative images; empty alt + `aria-hidden` for decorative shapes.
5. **Contrast:** ≥ 4.5:1 body, ≥ 3:1 large text; verify button/link colors (Section 23).
6. **Heading hierarchy:** no skipped levels; sections labeled by their `h2`.
7. **Accessible mobile navigation:** focus trap, ESC, `aria-expanded`, return focus.
8. **Touch targets:** ≥ 44×44px.
9. **`prefers-reduced-motion`:** disable/shorten entrance and floating animations.
10. **Button/link semantics:** `<a>` for navigation, `<button>` for actions; external links have discernible text.
11. **Language:** `<html lang="id">`; English brand phrases marked with `lang="en"` where helpful.
12. **Forms (future):** labels, error messaging, `aria-describedby` (N/A for MVP).
13. **Color independence:** never convey meaning by color alone.
14. **Zoom:** usable at 200% without loss of content/function.
15. **Automated check:** run axe/Lighthouse a11y in verification (Phase 2).

---

## 30. SEO

**Title:** `BYMA Course | Make English a Habit`

**Meta description:**
> BYMA Course adalah kursus Bahasa Inggris online dengan pendekatan HABEL (Habit-Based English Learning) untuk membantu kamu belajar, berlatih, dan menggunakan Bahasa Inggris secara konsisten.

**Content concepts (natural, not stuffed):** kursus Bahasa Inggris online, belajar Bahasa Inggris, speaking practice, Habit-Based English Learning, HABEL, BYMA Course.

**Requirements**
- **Open Graph + Twitter Card:** `og:title`, `og:description`, `og:type=website`, `og:image` (1200×630 branded image — asset required), `og:locale=id_ID`, Twitter `summary_large_image`.
- **Canonical:** `<link rel="canonical">` set to the production domain `https://bymacourse.com`.
- **Favicon:** provide favicon + `apple-touch-icon` + web manifest (derived from logo; asset required).
- **Semantic structure:** proper landmarks, one `h1`, descriptive `h2`s matching search intent.
- **Structured data:** `Organization` + `EducationalOrganization` JSON-LD (name, url, logo, sameAs social links once available). Only include fields with real data; omit `TBD`.
- **Sitemap & robots:** single-page sitemap; `robots.txt` allowing indexing; canonical domain `https://bymacourse.com`.
- **Metadata via Next.js Metadata API** (`metadata` export / `generateMetadata`).
- **Performance contributes to SEO** (Section 31).
- **Do not keyword stuff.** No hidden text.

---

## 31. Performance

**Targets (Lighthouse, mobile):** Performance ≥ 90, Accessibility ≥ 90, Best Practices ≥ 90, SEO ≥ 90.

**Recommendations**
- **Image optimization:** use `next/image` (or optimized static assets), modern formats (AVIF/WebP), responsive `srcset`, explicit dimensions.
- **Lazy loading:** `loading="lazy"` below the fold; eager/priority for hero image only.
- **Minimal JS:** mostly static rendering; interactive JS limited to navbar/mobile menu and light animation. No heavy libraries.
- **Minimal dependencies:** avoid animation libraries (use CSS + IntersectionObserver); avoid icon libraries if a few inline SVGs suffice.
- **Responsive assets:** serve appropriately sized images per breakpoint.
- **Font optimization:** self-host via `next/font`, subset, preload critical weights, `display: swap`.
- **Avoid unnecessary animation libraries** (no GSAP/Framer by default; CSS transitions preferred).
- **Static rendering:** default to statically rendered page (no server work per request) for fastest TTFB.
- **Caching:** GitHub Pages CDN caching; immutable hashed assets under `/_next/static/`.
- **Budget:** keep initial JS minimal; avoid layout shift (CLS ~0); LCP < 2.5s on 4G.

---

## 32. Animation Principles

**Philosophy:** subtle, purposeful, fast; motion supports comprehension, never distracts.

**Allowed**
- Fade-up section entrance (short, ~300–500ms, once per section).
- Subtle hero entrance (staggered fade/slide).
- Card hover state (lift/shadow/scale ~1.02).
- Animated HABEL directional flow (e.g., arrow/connector highlight, gentle pulse).
- Smooth scrolling for anchor navigation.
- Subtle decorative floating shapes (very slow, low amplitude).

**Avoid**
- Scroll hijacking.
- Heavy parallax.
- Constant/distracting motion.
- Excessive text animation.
- Animation that harms performance.
- Motion that ignores `prefers-reduced-motion`.

**Rules**
- Respect `prefers-reduced-motion: reduce` → disable transforms/floating, keep content instantly visible.
- Never gate content visibility behind animation (content must be present without JS).
- Use `transform`/`opacity` only (GPU-friendly). Avoid animating layout properties.
- Reveal animations triggered once via IntersectionObserver; no animation library required.

---

## 33. Image / Asset Strategy

**Required assets (currently missing from repo):**

| Asset | Status | Notes |
|---|---|---|
| Logo (transparent PNG/SVG) | **Required — missing** | Source material shows a geometric pink-purple gradient logo. Request original vector/transparent asset. If only low-quality exists, flag as blocking. |
| Favicon / app icons | **Required — missing** | Derive from logo. |
| OG/social share image | **Required — missing** | 1200×630 branded composition. |
| Hero visual | Needed | Language-learning relevant (student speaking/conversing/studying online). |
| About image | Needed | Learning/study imagery. |
| Activity illustrations/icons | Needed | Consistent icon set for 5 activity cards. |
| Decorative shapes | Generated in code (SVG/CSS) | Blob/geometric shapes built as CSS/SVG, not images. |

**Photography direction**
- Communicate: English learning, students learning, speaking, conversation, online learning, study/practice, confidence.
- Avoid irrelevant generic corporate imagery.
- Prefer real, diverse, warm imagery; consistent color treatment aligned with brand.

**Logo rules (must preserve)**
- Preserve aspect ratio; no stretching.
- No rotation.
- No arbitrary recoloring.
- Maintain contrast against background.
- Leave sufficient clear space (min ~0.5× logo height on all sides).
- Prefer requesting original transparent PNG/SVG for production.

**Asset handling**
- Optimize all raster images; prefer WebP/AVIF.
- Store in a predictable `/public` or asset directory with descriptive names.
- Provide `alt` text for all informative images.
- **Flag:** if only low-quality logo/photography is available from the source, this is a blocking asset requirement to resolve with BYMA before launch.

---

## 34. Technical Architecture Recommendation

> Repository is **empty**. No existing stack, dependencies, or design system to inherit. Stack is therefore a greenfield decision.

### Decision: Next.js (App Router) + TypeScript + Tailwind CSS → static export on GitHub Pages

**Why Next.js + TypeScript + Tailwind**
- Best-in-class SEO/metadata via the Metadata API (required by Section 30).
- Built-in image optimization and font optimization (Sections 31, 24).
- TypeScript gives safe, typed content/data modules (Section 36).
- Tailwind enables a token-driven design system with minimal CSS and no runtime cost.
- Large ecosystem and hiring familiarity; strong growth path (pricing, FAQ, blog, forms).

**Why GitHub Pages**
- Deployment target is **GitHub Pages**, published from the `bymacourse` GitHub
  organization at `https://bymacourse.com` (apex) and `https://www.bymacourse.com`.
- Zero hosting cost, HTTPS via a provisioned Let's Encrypt certificate, and a
  global CDN.
- Deployment is automated by a GitHub Actions workflow on every push to `main`.
- **Cloudflare Workers was evaluated and is explicitly not used.**

**Rendering mode (decided):**
- **Fully static export** (`output: "export"` → `out/`). Every route is
  prerendered; there are no API routes, server actions, or dynamic params.
- Static export is required by GitHub Pages (which serves files only, no server
  runtime) and is the fastest, cheapest option for a marketing page.
- `next/image` runs with `unoptimized: true` because assets are pre-optimized at
  build time.
- **Growth path:** if server-side features are needed later, the site can move to
  a server-capable host (e.g. Vercel/Cloudflare) with minimal changes, since the
  codebase stays on Next.js App Router.

**Alternatives considered**
| Option | Verdict |
|---|---|
| **Astro + TS + Tailwind** | Excellent performance; smaller ecosystem and less familiar growth path. Viable fallback. |
| **React + Vite + TS + Tailwind** | Fine SPA, weaker SEO/SSR story out of the box; more manual metadata work. Not recommended for a marketing site. |
| **Plain HTML/CSS/JS** | Simplest, but conflicts with content/data separation and future scalability. Not recommended. |
| **Laravel (sibling `C:\Herd` projects)** | **Ruled out.** Confirmed no Laravel backend is planned; this is a standalone Next.js marketing site. |
| **Cloudflare Workers (OpenNext)** | **Ruled out** — GitHub Pages was chosen instead (see above). |

**Deployment notes**
- `.github/workflows/deploy-pages.yml` builds the static export and publishes it
  via `actions/deploy-pages`.
- `public/CNAME` declares the apex domain `bymacourse.com`; it is copied into the
  build output so Pages keeps the custom domain configured.
- `NEXT_PUBLIC_SITE_URL=https://bymacourse.com` is set in the workflow so
  canonical, Open Graph, and JSON-LD URLs resolve correctly.
- DNS: apex `A`/`AAAA` records to GitHub Pages IPs, `www` `CNAME` to
  `bymacourse.github.io`.

---

## 35. Folder Architecture

Implemented structure (App Router, static export).

```
bymacourse-landing/
├─ .github/
│  └─ workflows/
│     └─ deploy-pages.yml     # build + deploy to GitHub Pages
├─ docs/
│  └─ PRD-BYMA-COURSE-WEBSITE.md
├─ public/
│  ├─ brand/
│  │  ├─ logo.webp            # official lockup (transparent)
│  │  ├─ logo-mark.webp       # mark only
│  │  └─ og-image.png         # 1200×630 social image
│  └─ CNAME                   # bymacourse.com
├─ src/
│  ├─ app/
│  │  ├─ layout.tsx           # metadata, fonts, lang="id", JSON-LD
│  │  ├─ page.tsx             # single-page composition
│  │  ├─ globals.css          # design tokens + base styles
│  │  ├─ icon.png             # favicon
│  │  ├─ apple-icon.png       # apple touch icon
│  │  └─ manifest.ts          # web manifest
│  ├─ components/
│  │  ├─ layout/              # Navbar, MobileMenu, Footer, Container
│  │  ├─ sections/            # Hero, About, Habel, Activities, WhyByma, VisionMission, CtaSection
│  │  └─ ui/                  # Button, SectionHeading, cards, HabelStep, Logo, Reveal, Icon
│  ├─ content/                # typed content/data modules
│  │  ├─ site.config.ts
│  │  ├─ navigation.ts
│  │  ├─ hero.ts
│  │  ├─ about.ts
│  │  ├─ benefits.ts
│  │  ├─ habel.ts
│  │  ├─ activities.ts
│  │  ├─ vision.ts
│  │  ├─ missions.ts
│  │  ├─ cta.ts
│  │  ├─ contact.ts
│  │  └─ social-links.ts
│  └─ lib/
│     ├─ types.ts             # shared content types
│     └─ cn.ts                # class name helper
├─ next.config.ts
├─ tailwind.config.ts
├─ tsconfig.json
├─ package.json
└─ README.md
```

**Rules**
- Components are presentational; they receive content via props from `src/content/*`.
- No copy hardcoded inside components (except structural labels).
- `src/content/*` is the single source of truth for editable content.

---

## 36. Content / Data Architecture

**Principle:** content is separated from rendering logic so copy and links can change without touching components.

Proposed typed modules (with illustrative shapes — implementation in Phase 2):

```ts
// site.config.ts
export const siteConfig = {
  name: "BYMA Course",
  tagline: "Make English a Habit",
  description: "...",
  url: "TBD",
  locale: "id_ID",
};

// navigation.ts
export const navigation = [
  { label: "Home", href: "#home" },
  { label: "Tentang Kami", href: "#tentang" },
  { label: "HABEL Method", href: "#habel" },
  { label: "Visi & Misi", href: "#visi-misi" },
  { label: "Daftar", href: "#daftar", cta: true },
];

// habel.ts
export const habel = {
  definition: "HABEL (Habit-Based English Learning) adalah ...",
  steps: [
    { id: "learn",    number: "01", en: "LEARN",    id_label: "Belajar",      copy: "..." },
    { id: "practice", number: "02", en: "PRACTICE", id_label: "Berlatih",     copy: "..." },
    { id: "repeat",   number: "03", en: "REPEAT",   id_label: "Mengulang",    copy: "..." },
    { id: "use",      number: "04", en: "USE",      id_label: "Menggunakan",  copy: "..." },
  ],
};

// contact.ts
export const contact = {
  whatsappNumber: "6281226109432",
  whatsappDisplay: "+62 812-2610-9432",
  whatsappUrl: "https://wa.me/6281226109432",
  tiktokHandle: "@bymacourse",
  tiktokUrl: "https://www.tiktok.com/@bymacourse",
  instagramHandle: "@bymacourse",
  instagramUrl: "https://www.instagram.com/bymacourse",
  registrationUrl: "TBD",
};
```

**Rules**
- Every `TBD` value is centralized (config/env) and clearly typed, so replacing it later is a one-line change. (WhatsApp, TikTok, and Instagram are real; registration remains `TBD`.)
- Components gracefully handle `TBD` (e.g., hide social link, fallback CTA behavior).
- Types live in `src/lib/types.ts` to enforce content shape.
- Optional: source some values from environment variables at build time for environment-specific links.

---

## 37. Analytics Recommendations

**Decided for MVP:** analytics is **omitted** (privacy-first, minimal JS). The events below are documented for a later phase; if added, prefer a lightweight, privacy-friendly tool (e.g., Plausible or Umami) rather than a heavy tag manager.

**Events to track (when analytics is enabled):**
| Event | Trigger |
|---|---|
| `cta_click` | Any primary/secondary CTA click (with `location` param: navbar/hero/habel/final) |
| `nav_click` | Navbar/mobile menu anchor click |
| `scroll_depth` | 25 / 50 / 75 / 100% |
| `section_view` | HABEL, Activities, Final CTA entering viewport |
| `outbound_contact` | WhatsApp/TikTok/Instagram click |

**Notes**
- No personally identifiable information collected.
- Respect cookie/consent requirements for the target market if applicable.
- Keep analytics script async/deferred so it doesn't affect Lighthouse.

---

## 38. Error / Edge Cases

| Case | Expected behavior |
|---|---|
| `registrationUrl` is `TBD` | Primary CTA smooth-scrolls to the footer contact block. No dead link. **(Decided)** |
| `whatsappUrl` is provided | "Hubungi Kami" opens `https://wa.me/6281226109432`. **(Resolved)** |
| Social link is `TBD` | Render as a non-clickable label; real values become links. **(Decided)** |
| JavaScript disabled | Full content visible; anchor navigation still works via native `href="#id"`; only menu toggle/hover enhance. |
| Slow connection | Text content renders first; images lazy-load; no blocking animation. |
| Reduced motion enabled | Animations disabled; content instantly visible. |
| Missing image asset | Fallback decorative shape or placeholder block with correct dimensions (no layout shift). |
| Low-quality logo only | Use best available but flag as blocking; do not upscale/stretch. |
| Very narrow viewport (320px) | No horizontal overflow; typography scales down. |
| Very wide viewport (1920px+) | Content capped at max width; centered; no stretched paragraphs. |
| Long translated strings | Layout allows wrapping; no fixed-width text containers. |
| Browser without `IntersectionObserver` | Reveal animations degrade to always-visible. |
| Anchor target hidden by sticky navbar | `scroll-margin-top` applied to section anchors. |

---

## 39. Missing Data

The following are **not available** and must be represented as `TBD`. **Do not fabricate.**

- ~~WhatsApp number~~ → **provided:** `6281226109432` (`https://wa.me/6281226109432`)
- ~~TikTok~~ → **provided:** `@bymacourse`
- ~~Instagram~~ → **provided:** `@bymacourse`
- Physical address
- Registration URL
- Pricing
- Program / package details
- Class schedule
- Tutor profiles
- Testimonials
- Student statistics
- Payment information
- FAQ
- Accreditation / certification information

**Additional missing items discovered:**
- Official brand HEX colors (only described qualitatively) — still `TBD`; tokens remain approximations.
- ~~Official logo file~~ → **provided:** `logo.png` at repo root, exported to `public/brand/` with a transparent background.
- Brand photography assets.
- ~~Production domain~~ → **resolved:** `bymacourse.com` (apex + `www`), pointed at GitHub Pages.
- Legal pages (privacy policy, terms) — not provided.

**Handling rule:** all of the above live in the content/config layer with a `TBD` sentinel and safe fallback UI.

---

## 40. Assumptions

1. The repository is greenfield and empty (confirmed at time of writing).
2. Brand assets (logo, palette, photography) exist only in the presentation, not in the repo.
3. No official HEX values, fonts, or brand guidelines are provided; all design tokens are implementation approximations.
4. Primary language is Bahasa Indonesia; the English tagline is retained as a brand statement.
5. Single-page MVP with anchor navigation is acceptable.
6. Registration/contact flows are external and currently unknown.
7. No age segmentation is defined; none will be invented.
8. HABEL explanatory copy will be strictly derived from the framework and official activities.
9. Deployment target is GitHub Pages as a static export, at `https://bymacourse.com`.
10. BYMA will supply final copy review/approval for all `DRAFT COPY`.
11. Analytics remains deferred; the hosting domain is confirmed as `bymacourse.com`.

---

## 41. Risks

| # | Risk | Impact | Likelihood | Mitigation |
|---|---|---|---|---|
| 1 | Missing contact/registration links | Blocks primary conversion | High | Config placeholders + fallback CTA behavior; ship and swap later |
| 2 | Logo/photography unavailable or low quality | Brand/visual quality | High | Request originals early; flag as blocking; use placeholders meanwhile |
| 3 | Unapproved `DRAFT COPY` mistaken for final | Brand/legal | Medium | Clearly label drafts; require stakeholder review before launch |
| 4 | Accidental unsupported marketing claims | Trust/legal | Medium | Enforce content rules + review checklist |
| 5 | Static export limits future server-side features | Schedule/technical | Low | Site is fully static by design; migrate to a server-capable host if dynamic features are later required |
| 6 | Design drifts into "slide deck" or "generic SaaS" | Brand quality | Medium | Follow visual direction; design review against checklist |
| 7 | Accessibility regressions | Usability/compliance | Medium | WCAG AA checklist + automated + manual checks |
| 8 | Performance regressions from animation/images | SEO/UX | Medium | Budgets, lazy loading, reduced-motion, no heavy libs |
| 9 | Scope creep (pricing/FAQ/blog) | Timeline | Medium | Non-goals documented; roadmap separates phases |
| 10 | Official color/logo mismatch with approximations | Brand accuracy | Medium | Mark tokens as approximations; validate against real assets |

---

## 42. Future Roadmap

**Phase 2 — Implementation (after approval)**
- Scaffold Next.js + TS + Tailwind with static export and the GitHub Pages workflow.
- Build design tokens + components.
- Implement all sections with approved copy.
- Integrate real assets.
- Verify: Lighthouse, a11y, responsive (360/375/390/414 + desktop), no overflow.

**Phase 3 — Content completion**
- Replace all `TBD` with real contact/registration data.
- Final copy review by BYMA.

**Phase 4 — Growth (post-MVP, needs data/approval)**
- Pricing & program packages.
- FAQ (with structured data).
- Testimonials & student stories (only with real, permitted data).
- Tutor profiles.
- Blog / articles for SEO.
- Registration form (with validation) or integration with existing enrollment system.
- Analytics dashboard + conversion optimization.

**Phase 5 — Scale**
- Additional pages (programs, about, contact).
- Multi-language (if required).
- CMS integration for non-technical editing.

---

## 43. Acceptance Criteria

**Content**
- [ ] Hero communicates "online English course" + "better English through habits" within 5–10s.
- [ ] Official tagline used verbatim: "Make English a Habit"
- [ ] About text faithful to source (meaning unchanged).
- [ ] HABEL definition verbatim; 4 steps correct and ordered.
- [ ] Activities limited to official list (materi, quiz, sentence making, reading, speaking practice).
- [ ] Vision and 5 missions verbatim (meaning unchanged).
- [ ] No unsupported claims anywhere.
- [ ] All unknown data rendered as `TBD` (no fabrication).

**UX / UI**
- [ ] Single-page anchor nav works (Home, Tentang Kami, HABEL Method, Visi & Misi, Daftar).
- [ ] Sticky navbar with scroll-state change.
- [ ] Mobile menu accessible (focus trap, ESC, `aria-expanded`, 44px targets).
- [ ] HABEL: horizontal on desktop, vertical with arrows on mobile.
- [ ] CTAs present in navbar, hero, HABEL, final CTA; hierarchy clear.

**Responsive**
- [ ] No horizontal overflow at 320/360/375/390/414/768/1024/1280/1366/1440/1920.
- [ ] Paragraph measure capped; max content width respected.
- [ ] Images responsive with no layout shift.

**Accessibility**
- [ ] WCAG AA contrast verified.
- [ ] Keyboard navigable with visible focus.
- [ ] One `h1`, logical heading order.
- [ ] Alt text present; decorative shapes hidden from AT.
- [ ] `prefers-reduced-motion` respected.
- [ ] `lang="id"` set.

**SEO / Performance**
- [ ] Title, meta description, canonical, OG/Twitter tags, favicon present.
- [ ] JSON-LD for Organization/EducationalOrganization (real data only).
- [ ] Lighthouse ≥ 90 in Performance, Accessibility, Best Practices, SEO.
- [ ] LCP < 2.5s (4G, mobile); CLS ≈ 0.

**Technical**
- [ ] Builds and runs on Next.js (App Router) + TS + Tailwind.
- [ ] Deploys successfully to GitHub Pages via GitHub Actions, live at `https://bymacourse.com`.
- [ ] Content separated from rendering (all copy in `src/content/*`).
- [ ] No heavy animation/UI libraries added unnecessarily.

---

## 44. Definition of Done

The MVP is **Done** when:

1. The PRD is approved and all open questions resolved or explicitly deferred.
2. The single-page site is implemented per this PRD with all sections present and in the recommended order.
3. All official source content is used faithfully; no unsupported claims exist.
4. All missing data is handled via `TBD` placeholders with graceful fallbacks.
5. All acceptance criteria in Section 43 pass.
6. Lighthouse ≥ 90 across all four categories (mobile).
7. Accessibility verified (automated + manual keyboard/screen-reader spot check) to WCAG AA baseline.
8. Responsive verified at the required mobile and desktop widths with no overflow.
9. The build deploys successfully to **GitHub Pages** and is live at `https://bymacourse.com`.
10. BYMA has reviewed and approved final copy and assets (or explicitly approved shipping with placeholders).
11. No console errors; no broken links; no fabricated data.

---

## 45. Open Questions

### 45.1 Resolved decisions (confirmed by stakeholder)

| # | Question | Decision |
|---|----------|----------|
| 1 | Stack confirmation | **Next.js + TypeScript + Tailwind CSS**, static export on **GitHub Pages**. Confirmed. |
| 2 | Brand assets | **Ship with placeholders now** — approximate tokens + placeholder assets; logo/photography/HEX flagged as blocking for launch. |
| 3 | CTA destinations | `registrationUrl`: **`TBD`**. `whatsappUrl`: **provided** — `https://wa.me/6281226109432`. |
| 4 | CTA fallback when `TBD` | **Scroll to footer contact block.** No dead links. |
| 5 | Production domain | **Resolved:** `bymacourse.com` (apex + `www`) on GitHub Pages. |
| 6 | Footer social links | **Show as non-clickable labels** for any `TBD` value. |
| 7 | Section order | **Approved:** HABEL moved to position 4 (right after Tentang). |
| 8 | Visi & Misi | **Approved:** merged into one anchored section (`#visi-misi`). |
| 9 | Typography | **Poppins (headings) + Inter (body)** — two free Google Fonts. |
| 10 | Analytics | **Omitted for MVP**; documented as an optional later phase. |
| 11 | Laravel | **Ruled out** — standalone static Next.js site. |

### 45.2 Still open (non-blocking — proceed with defaults)

| # | Question | Default if unanswered |
|---|----------|-----------------------|
| 12 | Who is the designated reviewer for all `DRAFT COPY`? | BYMA stakeholder; drafts shipped and labeled until review. |
| 13 | Are privacy policy / terms required for launch? | Not included in MVP; add before launch if legally required. |
| 14 | Confirm Bahasa Indonesia only (no English toggle)? | Bahasa Indonesia only; English tagline retained as brand element. |
| 15 | Production domain | **Resolved:** `bymacourse.com`. |
| 16 | Real contact/registration values | WhatsApp, TikTok, and Instagram **provided**; registration remains `TBD` with decided fallbacks. |

---

## Appendix A — Official Source Content (Verbatim Reference)

### A.1 About
> "BYMA Course adalah kursus Bahasa Inggris online yang percaya bahwa kemampuan tidak dibangun hanya dengan belajar, tetapi melalui kebiasaan untuk terus berlatih dan menggunakannya.
>
> Melalui HABEL (Habit-Based English Learning), kami menghadirkan proses belajar yang praktis, interaktif, dan dekat dengan kehidupan sehari-hari.
>
> Siswa belajar secara konsisten melalui materi, quiz, sentence making, reading, speaking practice, serta berbagai aktivitas yang membantu Bahasa Inggris menjadi bagian dari keseharian.
>
> Di BYMA, kamu tidak dituntut untuk langsung sempurna.
>
> Kami ingin membantumu mulai, berlatih, berkembang, dan semakin percaya diri menggunakan Bahasa Inggris."

**Supporting quote:** "Make English a Habit"

### A.2 HABEL
> "HABEL (Habit-Based English Learning) adalah pendekatan pembelajaran BYMA Course yang berfokus pada pembentukan kebiasaan belajar dan penggunaan Bahasa Inggris secara konsisten."

Framework: LEARN → PRACTICE → REPEAT → USE / Belajar → Berlatih → Mengulang → Menggunakan

### A.3 Learning Activities
- materi
- quiz
- sentence making
- reading
- speaking practice
- berbagai aktivitas untuk membantu Bahasa Inggris menjadi bagian dari keseharian

### A.4 Vision
> "Menjadi kursus Bahasa Inggris online yang membantu setiap siswa menjadikan Bahasa Inggris sebagai kemampuan yang tumbuh melalui kebiasaan belajar dan praktik yang konsisten."

### A.5 Mission
1. "Membangun kebiasaan belajar Bahasa Inggris secara konsisten melalui pendekatan HABEL (Habit-Based English Learning)."
2. "Menghadirkan pembelajaran yang praktis dan relevan dengan penggunaan Bahasa Inggris dalam kehidupan sehari-hari."
3. "Mendorong siswa untuk aktif menggunakan Bahasa Inggris bukan hanya memahami teori."
4. "Menciptakan pengalaman belajar yang interaktif dan suportif agar siswa lebih percaya diri untuk berlatih dan belajar dari kesalahan."
5. "Membantu siswa mencapai perkembangan yang terukur melalui latihan, feedback, evaluasi, dan praktik berkelanjutan."

### A.6 Tagline
"Make English a Habit"

---

## Appendix B — Repository Inspection Record

| Item | Finding |
|---|---|
| Path | `C:\Herd\bymacourse-landing` |
| Contents | Empty (0 entries) |
| Git | Not a git repository |
| Stack | None |
| Dependencies | None |
| Design system | None |
| Reusable components | None |
| Assets / logo / images | None present in repo |
| Build tooling | None |
| Local toolchain | Node v26.8.2, npm 11.19.1, git 2.55.0 |
| Sibling projects | Unrelated (`C:\Herd\*`) — not inherited |

**Conclusion:** greenfield. All architectural decisions are open; stack recommended in Section 34.

---

*End of PRD — Phase 1 complete. All blocking open questions resolved (Section 45.1). No implementation performed. Awaiting explicit approval: "PRD approved, lanjut implementasi".*
