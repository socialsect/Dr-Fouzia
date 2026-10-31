export const healthFactors = [
  {
    id: "medical",
    title: "Medical history",
    description:
      "Your timeline, past illnesses, family history and medicines. Patterns across the years often point to the next step.",
  },
  {
    id: "nutrition",
    title: "Food and movement",
    description:
      "What you eat, when you eat and how you move. Small, realistic changes come before restrictive diets.",
  },
  {
    id: "sleep",
    title: "Sleep & stress",
    description:
      "Sleep quality, workload and recovery. Poor rest and constant pressure can drive tiredness, gut upset and low mood.",
  },
  {
    id: "hormones",
    title: "Hormones & metabolism",
    description:
      "Cycle changes, thyroid, blood sugar and weight. Tests are chosen only when the result would change your care.",
  },
  {
    id: "gut",
    title: "Gut and wellbeing",
    description:
      "Digestion, appetite and energy through the day. Red-flag symptoms are checked first.",
  },
] as const;

export type HealthFactor = (typeof healthFactors)[number];

export const services = [
  {
    num: "01",
    title: "Functional medicine",
    description: "A detailed review of what is behind ongoing symptoms.",
    slug: "/functional-medicine/",
  },
  {
    num: "02",
    title: "Women's hormonal health",
    description: "Support for cycles, PMS, perimenopause and menopause.",
    slug: "/womens-hormonal-health/",
  },
  {
    num: "03",
    title: "Gut and digestive health",
    description: "Bloating, reflux and bowel changes, checked safely.",
    slug: "/gut-digestive-health/",
  },
  {
    num: "04",
    title: "Stress, sleep and nervous system",
    description: "Practical care for poor sleep and constant tension.",
    slug: "/stress-sleep-nervous-system-health/",
  },
  {
    num: "05",
    title: "Fatigue and brain fog",
    description: "Medical causes first, then a plan to rebuild energy.",
    slug: "/fatigue-low-energy-brain-fog/",
  },
  {
    num: "06",
    title: "Metabolic health and weight",
    description: "Blood sugar, insulin resistance and sustainable habits.",
    slug: "/metabolic-health-weight-management/",
  },
  {
    num: "07",
    title: "Calm Mind Sessions",
    description: "Skills-based therapy for anxiety, overthinking and low mood.",
    slug: "/calm-mind-sessions/",
  },
  {
    num: "08",
    title: "Aesthetic medicine",
    description: "Doctor-led, non-surgical treatments after a full consultation.",
    slug: "/aesthetic-medicine/",
  },
] as const;

export const tickerItems = [
  "Functional medicine Dubai",
  "Family physician Dubai",
  "Women's health doctor Dubai",
  "Gut health",
  "Fatigue and low energy",
  "Sleep and stress",
  "Hormonal health",
  "Healthy aging",
  "Calm Mind Sessions Dubai",
  "Aesthetic medicine Dubai",
];

export const processSteps = [
  {
    num: "01",
    title: "Consultation",
    description:
      "We go through your symptoms, history, daily routine and what you want to change.",
  },
  {
    num: "02",
    title: "Medical review",
    description:
      "A physical check and, only if useful, blood tests or other investigations. You will know why each one is needed.",
  },
  {
    num: "03",
    title: "Your written plan",
    description:
      "A short, prioritised list of next steps, then follow-up visits to adjust as you go.",
  },
];

export const whyCards = [
  {
    title: "Whole-person view",
    description:
      "Sleep, stress, food, hormones and gut health are looked at together, not in separate appointments.",
  },
  {
    title: "One doctor throughout",
    description:
      "The same physician follows your progress from the first visit onwards.",
  },
  {
    title: "Evidence first",
    description:
      "Recommendations are explained, and supplements are suggested only with a reason.",
  },
  {
    title: "Doctor-led in every area",
    description:
      "Functional medicine, Calm Mind Sessions and aesthetic care are delivered under medical supervision.",
  },
];

export const homepageFaqItems = [
  {
    question: "What does a functional medicine doctor in Dubai do?",
    answer: "A functional medicine doctor investigates how different aspects of health, including digestion, hormones, nutrition, sleep and metabolism, may contribute to ongoing symptoms. Dr.Fawezya Al ALi uses a personalised medical approach to understand these factors and recommend appropriate investigations and lifestyle changes.",
  },
  {
    question: "When should I consult a functional medicine doctor in Dubai?",
    answer: "Consider consulting a functional medicine doctor if you experience persistent fatigue, digestive problems, hormonal changes, poor sleep, brain fog or recurring health concerns that need a broader medical assessment. Dr.Fawezya Al ALi can review your symptoms, medical history and lifestyle to identify appropriate next steps.",
  },
  {
    question: "What health conditions can Dr.Fawezya Al ALi help with?",
    answer: "Dr.Fawezya Al ALi provides medical support for digestive health concerns, women's hormonal health, fatigue, low energy, brain fog, metabolic health, preventive healthcare and healthy ageing. The recommended approach depends on your symptoms, medical history and individual health requirements.",
  },
  {
    question: "How is functional medicine different from conventional medical care?",
    answer: "Conventional medicine focuses on diagnosing and treating medical conditions, while functional medicine also considers how nutrition, lifestyle, sleep, stress and other factors may influence health. Dr.Fawezya Al ALi integrates both approaches, maintaining appropriate medical assessment and evidence-based care.",
  },
  {
    question: "Can I book a personalised health consultation in Dubai?",
    answer: "Yes. You can arrange a consultation with Dr.Fawezya Al ALi in Dubai to discuss your symptoms, health concerns and wellness goals. Your appointment helps determine whether further investigations, lifestyle changes or specialised services are appropriate.",
  },
  {
    question: "Does functional medicine include nutrition and lifestyle guidance?",
    answer: "Yes. Functional medicine may include personalised nutrition recommendations, sleep improvement strategies, physical activity guidance, stress management and selected supplements when medically justified. Recommendations are based on your health assessment rather than a standardised wellness plan.",
  },
  {
    question: "How do I choose the right health service at Dr.Fawezya Al ALi's clinic?",
    answer: "The right service depends on your primary health concern. You may require a functional medicine consultation for ongoing symptoms, digestive health support for gut concerns, women's hormonal care for menstrual or menopause-related changes, or preventive health assessment for long-term wellness. A consultation can help identify the most appropriate starting point.",
  }
] as const;
