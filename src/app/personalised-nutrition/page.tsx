import type { Metadata } from "next";
import { HealthConcernContent } from "@/components/layout/HealthConcernContent";

export const metadata: Metadata = {
  title: "Personalised Nutrition Dubai",
  description:
    "A doctor-led nutrition consultation in Dubai, shaped around your health history, symptoms, food preferences and everyday routine.",
};

export default function PersonalisedNutritionPage() {
  return (
    <HealthConcernContent
      title="Personalised Nutrition in Dubai"
      highlight="A plan built around you, not a template"
      description="A diet that suits a friend may not suit you. Dr Fouzia is a consultant family physician who starts with your medical history, symptoms, relevant results and daily routine, then helps shape food choices you can use at home, at work and when eating out."
      highlightsTitle="Nutrition support"
      highlightsAccent="that fits real life."
      highlights={[
        "A nutrition consultation with a doctor who reviews your health history",
        "Eating patterns, energy and relevant test results considered together",
        "Food choices discussed around digestive symptoms, with red flags checked first",
        "Meal timing and choices tailored to your metabolic health where relevant",
        "Evidence-based eating patterns adapted to your preferences",
        "Practical ideas for shopping, cooking and eating out in Dubai",
      ]}
      sections={[
        {
          eyebrow: "Nutrition doctor in Dubai",
          heading: "Why the person guiding you",
          accent: "matters.",
          paragraphs: [
            "Food choices sit alongside your health conditions, medicines and test results. This is especially relevant when you have thyroid concerns, diabetes risk, digestive symptoms, hormonal changes or a family history that affects what is suitable.",
            "The aim is to make a plan that respects your culture, budget, schedule and food preferences.",
          ],
          links: [
            { label: "Explore gut and digestive health", href: "/gut-digestive-health" },
            { label: "Explore metabolic health", href: "/metabolic-health-weight-management" },
          ],
        },
        {
          eyebrow: "Nutritional assessment in Dubai",
          heading: "Start with the whole",
          accent: "picture.",
          paragraphs: [
            "A nutrition review can cover your usual meals and drinks, supplements, symptoms, medicines and goals. Blood tests are considered when your history suggests they could help guide care.",
          ],
          bullets: [
            "Your health history, symptoms and current medicines",
            "Usual meals, snacks, drinks, supplements and eating times",
            "Measurements such as height or weight when relevant to your review",
            "Tests only when the result could help change your plan",
            "Your culture, budget, schedule and food preferences",
          ],
        },
        {
          eyebrow: "Your nutrition plan",
          heading: "Small changes you can",
          accent: "keep using.",
          paragraphs: [
            "You receive written priorities, practical food swaps and meal ideas to try. The plan can be reviewed and adjusted as your health, routine or goals change; it is not a fixed menu or an extreme diet.",
          ],
          links: [
            { label: "Read about health marker reviews", href: "/health-marker-review" },
            { label: "See supplement review information", href: "/supplement-review" },
          ],
        },
        {
          eyebrow: "Who this suits",
          heading: "For a more informed approach to",
          accent: "everyday eating.",
          paragraphs: [
            "This consultation may suit adults with ongoing tiredness, digestive discomfort, blood sugar or weight concerns, and people who want food guidance that takes their medical history into account.",
          ],
        },
      ]}
      faqs={[
        {
          question: "Do I need a food intolerance test?",
          answer:
            "Not by default. Your doctor can first review your symptoms and decide whether a test is relevant, what it can show and whether the result would change your care.",
        },
        {
          question: "Will I have to follow a strict diet?",
          answer:
            "The focus is on practical, sustainable changes that fit your health and routine, rather than a fixed or extreme menu.",
        },
        {
          question: "Are supplements included in a nutrition plan?",
          answer:
            "Only when your history or test results give a clear reason to discuss them. Food-based advice remains central to the nutrition consultation.",
        },
        {
          question: "How many visits will I need?",
          answer:
            "That depends on your goals and whether follow-up would be useful. Contact the clinic for current visit options and fees.",
        },
        {
          question: "Can children or pregnant patients book?",
          answer:
            "Please contact the clinic first so the team can confirm whether this consultation is suitable for your circumstances.",
        },
      ]}
      safety={{
        text: "A nutrition plan is not a substitute for medical assessment. Seek prompt medical care for severe abdominal pain, black stools, vomiting blood or unexplained weight loss.",
      }}
      ctaTitle="Start with a nutrition plan"
      ctaAccent="built around you."
      ctaDescription="Talk through your health and eating habits with a doctor who has time to listen."
    />
  );
}
