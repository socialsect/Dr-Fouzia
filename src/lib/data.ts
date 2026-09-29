export const healthFactors = [
  {
    id: "medical",
    title: "Medical history",
    description:
      "Your history, symptoms, medications and previous investigations help build a fuller clinical picture. Understanding what has been tried before shapes what comes next.",
    connections: ["Hormones", "Gut health", "Metabolism"],
    relatedServices: ["Functional Medicine", "Health Marker Review"],
  },
  {
    id: "nutrition",
    title: "Nutrition & movement",
    description:
      "Eating patterns, hydration, activity levels and strength are considered as part of a lifestyle assessment. Small changes in daily habits can shift how the body functions.",
    connections: ["Metabolism", "Gut health", "Energy"],
    relatedServices: ["Personalised Nutrition", "Metabolic Health"],
  },
  {
    id: "sleep",
    title: "Sleep & stress",
    description:
      "Sleep quality, stress load and recovery patterns are relevant to how you feel and function. These factors often sit behind symptoms that seem unrelated.",
    connections: ["Hormones", "Energy", "Brain function"],
    relatedServices: ["Stress, Sleep & Energy Reset", "CBT"],
  },
  {
    id: "hormones",
    title: "Hormones & metabolism",
    description:
      "Hormonal and metabolic factors are explored in the context of symptoms and medical history. These systems interact with nearly everything else in the body.",
    connections: ["Energy", "Weight", "Mood"],
    relatedServices: ["Women's Hormonal Health", "Metabolic Health"],
  },
  {
    id: "gut",
    title: "Gut & wellbeing",
    description:
      "Digestive symptoms are considered alongside lifestyle, stress, sleep and other health factors. The gut connects to immunity, mood and energy in ways that are still being understood.",
    connections: ["Nutrition", "Brain function", "Immunity"],
    relatedServices: ["Gut & Digestive Health", "Brain & Cognitive Wellness"],
  },
] as const;

export type HealthFactor = (typeof healthFactors)[number];

export const services = [
  {
    num: "01",
    title: "Functional Medicine",
    description:
      "A broader look at symptoms, lifestyle, nutrition, sleep, stress, hormones, gut health, medications and medical history.",
    slug: "/functional-medicine/",
  },
  {
    num: "02",
    title: "Women's Hormonal Health",
    description:
      "Personalized support across hormonal changes, stress, sleep, mood and everyday habits.",
    slug: "/womens-hormonal-health/",
  },
  {
    num: "03",
    title: "Gut & Digestive Health",
    description:
      "Explore digestive concerns alongside stress, sleep, mood and lifestyle factors.",
    slug: "/gut-digestive-health/",
  },
  {
    num: "04",
    title: "Stress, Sleep & Energy",
    description:
      "Support for persistent stress, poor sleep, fatigue, mental overload and reduced energy.",
    slug: "/stress-sleep-nervous-system-health/",
  },
  {
    num: "05",
    title: "Metabolic Health",
    description:
      "Nutrition, metabolic health strategies, lifestyle medicine and behavior-change support.",
    slug: "/metabolic-health-weight-management/",
  },
  {
    num: "06",
    title: "Healthy Aging",
    description:
      "A personalized focus on nutrition, movement, muscle health, sleep, stress and cognitive wellbeing.",
    slug: "/healthy-aging-longevity/",
  },
  {
    num: "07",
    title: "CBT",
    description:
      "Structured, practical therapy for eligible clients. Addresses anxiety, overthinking, stress and more.",
    slug: "/cbt/",
  },
  {
    num: "08",
    title: "Aesthetic Medicine",
    description:
      "Non-surgical aesthetic treatments including anti-wrinkle, fillers, skin boosters and more.",
    slug: "/aesthetic-medicine/",
  },
] as const;

export const tickerItems = [
  "Hormonal changes",
  "Gut & digestive health",
  "Stress & sleep",
  "Fatigue & brain fog",
  "Metabolic health",
  "Healthy aging",
  "Weight management",
  "Skin & hair wellness",
  "Women's health",
  "Energy & vitality",
  "Emotional wellbeing",
  "Mental clarity",
];

export const processSteps = [
  {
    num: "01",
    title: "Consultation",
    time: "30\u201345 min \u00B7 In-clinic or online",
    description:
      "Share your health history, symptoms, lifestyle, questions and goals. This is an unhurried conversation, not a rushed appointment.",
  },
  {
    num: "02",
    title: "Assessment",
    time: "Built around your life",
    description:
      "Explore relevant factors and consider tests only when clinically appropriate. A clear picture leads to a clear plan.",
  },
  {
    num: "03",
    title: "Personalized plan",
    time: "Follow-up as needed",
    description:
      "Discuss practical strategies and follow-up based on the clinical assessment. Your plan adapts as you progress.",
  },
];

export const whyCards = [
  {
    title: "Holistic, not piecemeal",
    description:
      "The system is treated, not just the symptom. Gut, hormones, sleep, stress, all considered together.",
  },
  {
    title: "1:1 personalized",
    description:
      "No templates. Every protocol is built for one person's biology, history and life.",
  },
  {
    title: "Backed by science",
    description:
      "Evidence-based medicine combined with lifestyle, behavioral change and clinical nutrition.",
  },
  {
    title: "Continuity of care",
    description:
      "Follow-up keeps your plan moving as your body responds and changes.",
  },
];
