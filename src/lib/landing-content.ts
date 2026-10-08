/**
 * Landing page copy — SOURCE OF TRUTH: LANDING-PAGE-BRIEF.md (DOCX).
 * Do not invent medical claims, testimonials, qualifications, pricing,
 * clinic details or licence numbers here.
 *
 * TODO(ar): only the strings supplied by the brief are translated below.
 * Every section without an `ar` entry falls back to English and needs
 * clinic-approved translation before Arabic campaigns go live.
 */

export interface ServiceCard {
  num: string;
  title: string;
  who: string;
  approach: string;
  waService: string;
}

export interface Review {
  quote: string;
  name: string;
  service: string;
}

export interface VideoItem {
  id: string;
  code: string;
  title: string;
  category: "gut" | "womens" | "cbt" | "functional" | null;
  /** TODO(clinic): self-hosted vertical MP4. Null → placeholder tile. */
  src: string | null;
  /** TODO(clinic): poster still. Null → brand placeholder. */
  poster: string | null;
}

const en = {
  header: {
    brand: "Dr. Fouzia Al Ali",
    whatsapp: "WhatsApp us",
    waMessage: "Hi, I found Dr. Fouzia's page and I have a question.",
  },
  hero: {
    headline1: "Medical care that looks at the",
    headlineHighlight: "whole picture",
    headline2: "",
    // Held for A/B testing — brief lists it as the alternative headline.
    altHeadline: "Conventional or functional medicine? You don't have to choose.",
    sub: "Personalized care for gut health, women's health, fatigue and stress, plus one-to-one CBT for women in Arabic.",
    trust: [
      "Dr. Fouzia Al Ali, Consultant Family Physician",
      "Al Borj Medical Center, Dubai",
      "In person and online",
    ],
    primaryCta: "Chat with us on WhatsApp",
    secondaryCta: "Prefer a call back? Leave your details",
    waMessage: "Hi, I found Dr. Fouzia's page and I'd like to ask about a consultation.",
    photoAlt: "Dr. Fouzia in the clinic",
  },
  soundFamiliar: {
    heading: "Does this sound familiar?",
    quotes: [
      "All my tests are normal, but I'm tired all the time.",
      "My stomach is always bloated, and everything I eat seems to bother me.",
      "Since my 40s, my body, sleep and mood have changed.",
      "My mind never stops thinking, even when I'm exhausted.",
      "I take lots of supplements, but I don't know if I need them.",
      "I don't feel like myself anymore, and I don't know where to start.",
    ],
    closing: "You're not alone, and you don't have to figure it out on your own.",
    cta: "Ask us on WhatsApp",
    waMessage: "Hi, I found Dr. Fouzia's page and I recognise myself in some of these questions.",
  },
  philosophy: {
    heading: "Her philosophy",
    quote:
      "The question isn't only 'what condition do you have?' It's also 'what factors may be influencing your health, and what can we safely improve?'",
    attribution: "Dr. Fouzia Al Ali",
    pillars: [
      {
        title: "Medicine first.",
        body: "Conventional medicine is the foundation of safe care. Functional medicine works alongside it, never instead of it.",
      },
      {
        title: "The whole picture.",
        body: "Symptoms rarely have one single cause. We look at nutrition, sleep, stress, gut health, hormonal changes, activity and medications together.",
      },
      {
        title: "Practical, not excessive.",
        body: "Tests and supplements only when there's a clear reason. Often, nutrition, sleep, movement and stress matter more.",
      },
    ],
  },
  services: {
    heading: "How Dr. Fouzia can help",
    askLabel: "Ask about this",
    waTemplate: (service: string) =>
      `Hi, I found Dr. Fouzia's page and I'd like to ask about ${service}.`,
    cards: [
      {
        num: "01",
        title: "Gut and digestive health",
        who: "Ongoing bloating, constipation, reflux or irregular bowels",
        approach:
          "A detailed look at diet, stress, sleep, medications and previous tests, with a personalized plan.",
        waService: "gut and digestive health",
      },
      {
        num: "02",
        title: "Women's health",
        who: "Perimenopause, menopause, and changes in sleep, mood, weight and energy",
        approach:
          "Proper medical attention to hormonal changes, alongside the lifestyle factors that also play a part.",
        waService: "women's health",
      },
      {
        num: "03",
        title: "CBT for women (in Arabic)",
        who: "Overthinking, anxiety, chronic stress, poor sleep, low mood, emotional overwhelm",
        approach:
          "One-to-one, structured and practical sessions, delivered personally by Dr. Fouzia. Confidential, online or in person.",
        waService: "CBT for women (in Arabic)",
      },
      {
        num: "04",
        title: "Fatigue and brain fog",
        who: "Tired all the time, poor focus, often with normal tests",
        approach:
          "Looking at sleep, stress, nutrition, hormonal and metabolic factors together.",
        waService: "fatigue and brain fog",
      },
      {
        num: "05",
        title: "Healthy aging and longevity",
        who: "People who want to protect their energy, strength and long-term health",
        approach: "A preventive, personalized plan for the years ahead.",
        waService: "healthy aging",
      },
      {
        num: "06",
        title: "Nutrition and supplement review",
        who: "Taking several supplements or herbs without guidance",
        approach:
          "Reviewing everything you take alongside your medical history, to keep what's appropriate.",
        waService: "nutrition and supplement review",
      },
    ] as ServiceCard[],
  },
  why: {
    heading: "Why patients choose Dr. Fouzia",
    points: [
      { lead: "Consultant Family Physician", rest: ", DHA licensed" },
      {
        lead: "Conventional and functional medicine together",
        rest: ", so you don't have to choose",
      },
      { lead: "Time to listen:", rest: " a first consultation of around 60 minutes" },
      {
        lead: "No automatic testing or supplements",
        rest: ", only what's clinically appropriate",
      },
      { lead: "CBT in Arabic, for women", rest: ", confidential and without judgement" },
      { lead: "In person in Dubai or online", rest: ", wherever suits you" },
    ],
  },
  process: {
    heading: "What to expect",
    steps: [
      {
        num: "01",
        title: "Message us.",
        body: "Tell our team what's going on, and we'll find a time that suits you.",
      },
      {
        num: "02",
        title: "Your consultation.",
        body: "Around 60 minutes, one to one. We go through your symptoms, history, medications, supplements, nutrition, sleep and stress, and review any tests you already have.",
      },
      {
        num: "03",
        title: "Your plan.",
        body: "You leave with a clearer picture of what may be affecting your health, a personalized plan, and clear next steps.",
      },
    ],
    tip: "Tip: bring your recent test results and a list of everything you take.",
    cta: "Book on WhatsApp",
    waMessage: "Hi, I found Dr. Fouzia's page and I'd like to book a consultation.",
  },
  videoWall: {
    heading: "Hear it from Dr. Fouzia",
    filters: [
      { id: "all", label: "All" },
      { id: "gut", label: "Gut health" },
      { id: "womens", label: "Women's health" },
      { id: "cbt", label: "CBT" },
      { id: "functional", label: "Functional medicine" },
    ],
    cta: "Have a question of your own?",
    ctaButton: "Ask Dr. Fouzia's team on WhatsApp",
    waMessage: "Hi, I found Dr. Fouzia's page and I have a question of my own.",
    comingSoon: "Video coming soon",
    // TODO(clinic): six self-hosted vertical videos (brief §H).
    // Category mapping was not specified by the brief — review before launch.
    videos: [
      { id: "s1", code: "S1", title: "Why am I bloated after everything I eat?", category: "gut", src: null, poster: null },
      { id: "s2", code: "S2", title: "Normal tests, still exhausted", category: "functional", src: null, poster: null },
      { id: "s3", code: "S3", title: "Overthinking isn't just your personality", category: "cbt", src: null, poster: null },
      { id: "l1", code: "L1", title: "Since turning 40, I don't feel like myself", category: "womens", src: null, poster: null },
      { id: "l4", code: "L4", title: "Functional or conventional medicine?", category: "functional", src: null, poster: null },
      // TODO(clinic): brief item 6 — "her best-performing Instagram reel on
      // healthy aging or stress". Actual title + file still to be supplied.
      { id: "reel", code: "—", title: "Healthy aging & stress — her best reel", category: null, src: null, poster: null },
    ] as VideoItem[],
  },
  reviews: {
    heading: "What patients say",
    /**
     * TODO(clinic): 4–6 real reviews from Google or Instagram, used with the
     * patient's consent (brief §I PLACEHOLDER). Rules: experience-focused
     * only (feeling listened to, clear explanations, realistic plan).
     * No cure/results/before-after claims. CBT reviews anonymous.
     * Section renders nothing until reviews are added here.
     */
    reviews: [] as Review[],
    /** TODO(clinic): optional Google rating badge, if available. */
    googleRating: null as string | null,
    googleBadgeLabel: "Google rating",
  },
  doctor: {
    heading: "Meet Dr. Fouzia",
    title: "Dr. Fouzia Al Ali, Consultant Family Physician",
    bio: "Dr. Fouzia is a DHA-licensed Consultant Family Physician with a diploma and additional training in Cognitive Behavioral Therapy. She combines evidence-based medical care with a personalized, functional medicine approach, looking at nutrition, sleep, stress, lifestyle and medical history together. She sees patients at Al Borj Medical Center in Dubai and online, and delivers one-to-one CBT sessions for women in Arabic.",
    // TODO(clinic): brief §J — "Dr. Fouzia to add: qualifications, years of
    // experience, languages, and a personal line on why she practises this way."
  },
  faq: {
    heading: "Frequently asked questions",
    items: [
      {
        q: "Does functional medicine replace my regular doctor?",
        a: "No. It works alongside conventional medicine, never instead of diagnosis, emergency care, medication or specialist treatment.",
      },
      {
        q: "Will I need lots of tests?",
        a: "Not necessarily. Tests are guided by your history and symptoms, and only recommended when clinically appropriate.",
      },
      {
        q: "Will I be given supplements?",
        a: "Only if there's a clear reason. Nutrition, sleep, movement and stress often matter more.",
      },
      {
        q: "Who are the CBT sessions for?",
        a: "Women looking for one-to-one support, in Arabic, for overthinking, anxiety, stress, sleep or low mood. Sessions are confidential, online or in person.",
      },
      {
        q: "Can I have my consultation online?",
        a: "Yes, both functional medicine consultations and CBT sessions are available online.",
      },
      {
        q: "How much does a consultation cost?",
        // TODO(clinic): brief §K — "[To be confirmed with the clinic: show
        // the price, or 'Message us for current fees']". Using the brief's
        // own suggested fallback; no price invented.
        a: "Message us for current fees.",
      },
    ],
  },
  finalCta: {
    heading: "Not sure where to start? Tell us what's going on.",
    sub: "Message us on WhatsApp, or leave your details and our clinic team will get back to you the same working day.",
    whatsappCta: "Chat with us on WhatsApp",
    waMessage: "Hi, I found Dr. Fouzia's page and I'm not sure where to start.",
  },
  footer: {
    clinicLine: "Al Borj Medical Center, Dubai",
    detailsLabel: "Clinic details",
    // TODO(clinic): address, map link, opening hours, phone — brief §M bracketed.
    addressTODO: "TODO(clinic): address + map link",
    hoursTODO: "TODO(clinic): opening hours",
    phoneTODO: "TODO(clinic): phone number",
    licenceTODO: "TODO(clinic): DHA licence / advertising permit number, if required",
    instagramLabel: "Instagram",
    privacyLabel: "Privacy policy",
    disclaimer:
      "This page is for general information and does not replace a medical consultation. Individual results vary. In a medical emergency, call 998 or go to the nearest emergency department.",
    disclaimerLabel: "Important",
    rights: "Dr. Fouzia Al Ali. All rights reserved.",
  },
  forms: {
    f1Title: "Get in touch with Dr. Fouzia's team",
    name: "Full name",
    phone: "WhatsApp number",
    concernLabel: "What would you like help with?",
    concernPlaceholder: "Please select…",
    messageLabel: "Briefly, what are you experiencing?",
    messagePlaceholder: "e.g. constant bloating for a few months",
    consultationLabel: "Preferred consultation",
    consultationOptions: [
      { id: "in-person", label: "In person in Dubai" },
      { id: "online", label: "Online" },
    ],
    languageLabel: "Preferred language",
    languageOptions: [
      { id: "arabic", label: "Arabic" },
      { id: "english", label: "English" },
    ],
    consent: "I agree to be contacted by Dr. Fouzia's clinic team about my enquiry.",
    privacyLink: "Privacy policy",
    f1Submit: "Send my enquiry",
    f2Submit: "Send to Dr. Fouzia's team",
    f1Micro: "Our team will reply on WhatsApp the same working day.",
    cbtNote: "CBT sessions are one-to-one, in Arabic, for women.",
    success:
      "Thank you. Our team will contact you on WhatsApp the same working day.",
    successCta: "Chat with us on WhatsApp",
    successWaMessage: "Hi, I just sent an enquiry through Dr. Fouzia's page.",
    errorFallback: "Something went wrong. Please try again, or message us on WhatsApp.",
    optional: "optional",
  },
  stickyBar: {
    whatsapp: "WhatsApp us",
    enquiry: "Send enquiry",
    waMessage: "Hi, I found Dr. Fouzia's page and I'd like to ask a question.",
  },
};

export type LandingCopy = typeof en;

/**
 * Arabic strings supplied by the brief (marked "for review" in the DOCX).
 * TODO(ar): every section below this object's supplied entries still needs
 * clinic-approved translation — the UI falls back to English for them.
 */
const ar: DeepPartial<LandingCopy> = {
  header: {
    whatsapp: "تواصلي معنا على الواتساب",
  },
  hero: {
    // Brief §B: "(Arabic draft, for review)" — رعاية طبية تنظر للصورة الكاملة
    headline1: "رعاية طبية تنظر للصورة",
    headlineHighlight: "الكاملة",
    headline2: "",
  },
};

type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends object ? (T[K] extends (...args: never[]) => unknown ? T[K] : DeepPartial<T[K]>) : T[K];
};

function mergeDeep<T extends Record<string, unknown>>(base: T, patch: DeepPartial<T>): T {
  const out: Record<string, unknown> = { ...base };
  for (const [key, value] of Object.entries(patch)) {
    if (value === undefined) continue;
    const current = out[key];
    if (
      value !== null &&
      typeof value === "object" &&
      !Array.isArray(value) &&
      current !== null &&
      typeof current === "object" &&
      !Array.isArray(current)
    ) {
      out[key] = mergeDeep(current as Record<string, unknown>, value as Record<string, unknown>);
    } else {
      out[key] = value;
    }
  }
  return out as T;
}

export function getCopy(lang: "en" | "ar"): LandingCopy {
  if (lang === "ar") return mergeDeep(en as unknown as Record<string, unknown>, ar as Record<string, unknown>) as unknown as LandingCopy;
  return en;
}

export { en };
