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
          question: "What is personalised nutrition and how does it work?",
          answer: "Personalised nutrition involves developing dietary recommendations based on an individual's medical history, health concerns, nutritional needs, food preferences and lifestyle. Dr.Fawezya Al ALi creates practical nutrition guidance rather than recommending the same diet to everyone.",
        },
        {
          question: "Who should consider a personalised nutrition consultation in Dubai?",
          answer: "People with digestive symptoms, metabolic health concerns, hormonal changes, nutritional deficiencies or specific dietary requirements may benefit from personalised nutrition guidance. It can also help individuals looking to develop sustainable eating habits.",
        },
        {
          question: "Can personalised nutrition help improve digestive health?",
          answer: "Yes. Appropriate dietary adjustments may help manage certain digestive symptoms, depending on their cause. Nutrition recommendations can consider food triggers, meal timing, dietary patterns and relevant medical conditions.",
        },
        {
          question: "Does personalised nutrition consider blood test results?",
          answer: "Yes. Relevant blood test results may be considered when developing a nutrition plan. Depending on your health history, this could include glucose, iron, vitamin levels, cholesterol or thyroid markers.",
        },
        {
          question: "Can I receive a personalised diet plan for hormonal health?",
          answer: "Nutrition guidance can support overall health during hormonal changes, including perimenopause and menopause. Recommendations may consider protein intake, fibre, calcium, vitamin D, metabolic health and individual dietary requirements.",
        },
        {
          question: "How is personalised nutrition different from a general diet plan?",
          answer: "A general diet plan often follows standard calorie or food recommendations, whereas personalised nutrition considers medical history, medications, digestive health, lifestyle and individual preferences. This helps make dietary guidance more relevant and practical.",
        },
        {
          question: "How can I book a personalised nutrition consultation with Dr.Fawezya Al ALi?",
          answer: "Contact Dr.Fawezya Al ALi through the official website to arrange a nutrition consultation in Dubai. You can discuss your dietary concerns, medical conditions and wellness goals during your appointment.",
        }
      ]}
      safety={{
        text: "A nutrition plan is not a substitute for medical assessment. Seek prompt medical care for severe abdominal pain, black stools, vomiting blood or unexplained weight loss.",
      }}
      ctaTitle="Start with a nutrition plan"
      ctaAccent="built around you."
      ctaDescription="Talk through your health and eating habits with a doctor who has time to listen."
      showEnquiryForm
    />
  );
}
