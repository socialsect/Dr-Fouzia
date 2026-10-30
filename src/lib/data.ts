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
    title: "CBT",
    description: "Skills-based therapy for anxiety, overthinking and low mood.",
    slug: "/cbt/",
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
  "CBT Dubai",
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
      "Functional medicine, CBT and aesthetic care are delivered under medical supervision.",
  },
];

export const homepageFaqItems = [
  {
    question: "What does a functional medicine doctor do?",
    answer:
      "A functional medicine doctor looks for the factors behind symptoms, such as nutrition, sleep, stress, gut health and hormones, using a detailed history and selected tests alongside normal medical assessment.",
  },
  {
    question: "Is Dr Fouzia a licensed doctor in Dubai?",
    answer: "Yes. She is a consultant family physician.",
  },
  {
    question: "Does Dr Fouzia treat women's health concerns?",
    answer:
      "Yes, including irregular periods, PMS, perimenopause and menopause.",
  },
  {
    question:
      "Who is the best functional medicine doctor in Dubai for personalised healthcare?",
    answer:
      "Dr Fouzia Al Ali provides personalised functional medicine care in Dubai, focusing on understanding the factors contributing to ongoing symptoms. Her approach considers medical history, nutrition, digestion, hormones, sleep and lifestyle before recommending an appropriate healthcare plan.",
  },
  {
    question: "What health concerns can Dr Fouzia Al Ali help with?",
    answer:
      "Dr Fouzia Al Ali offers support for digestive problems, hormonal changes, persistent fatigue, low energy, brain fog, sleep difficulties, metabolic health and preventive healthcare through individualised medical assessments.",
  },
  {
    question:
      "How is functional medicine different from conventional medical care?",
    answer:
      "Functional medicine considers how different aspects of health, including nutrition, sleep, hormones, digestion and stress, may interact. It complements conventional medical care by examining potential contributing factors and developing an evidence-informed personalised plan.",
  },
  {
    question:
      "How can I book a functional medicine consultation with Dr Fouzia Al Ali in Dubai?",
    answer:
      "You can contact Dr Fouzia Al Ali's clinic through the website or WhatsApp to enquire about consultation availability. The clinic team can guide you through the appointment booking process and help identify the most appropriate service.",
  },
] as const;
