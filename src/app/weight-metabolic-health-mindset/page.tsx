import type { Metadata } from "next";
import { HealthConcernContent } from "@/components/layout/HealthConcernContent";

export const metadata: Metadata = {
  title: "Weight Management Dubai | Dr Fouzia Al Ali",
  description:
    "A doctor-led weight management programme in Dubai. Dr Fouzia joins a metabolic health review, practical nutrition and CBT skills for habits and mindset.",
};

export default function WeightMetabolicHealthMindsetPage() {
  return (
    <HealthConcernContent
      eyebrowLabel="Programme"
      highlightsEyebrow="Weight management programme in Dubai"
      title="Weight Management"
      highlight="in Dubai"
      description="A medical review, not a crash diet. Weight is shaped by many things besides willpower, including sleep, stress, hormones, medicines, blood sugar and daily routines. Dr Fouzia is a consultant family physician who offers a weight management programme in Dubai. It starts with a medical review of your metabolic health, then builds a realistic plan around food, movement and habits, with CBT skills to help you keep it going when life gets busy."
      highlightsTitle="What the programme"
      highlightsAccent="looks at."
      highlights={[
        "Your weight history and what has and has not worked before",
        "Blood sugar, blood pressure and cholesterol",
        "Thyroid function and other medical contributors where indicated",
        "Medicines that may affect weight",
        "Sleep, stress, and how you eat when pressure is high",
        "Daily movement and what is realistic for you",
      ]}
      sections={[
        {
          eyebrow: "Metabolic health in Dubai",
          heading: "The medical",
          accent: "review first.",
          paragraphs: [
            "Weight gain can sometimes be linked to conditions such as thyroid disease, polycystic ovary syndrome, insulin resistance or some medicines. Dr Fouzia reviews your history and arranges tests only where they would change your care.",
          ],
          links: [
            { label: "Metabolic health and weight management", href: "/metabolic-health-weight-management" },
          ],
        },
        {
          eyebrow: "Weight loss doctor in Dubai",
          heading: "What to expect from a",
          accent: "doctor-led approach.",
          paragraphs: [
            "A doctor can look at your weight alongside your health conditions and medicines, set safe goals and tell you when weight is not the main problem. The aim is steady, sustainable change, not a fixed number or a fast result. No programme can promise a specific amount of weight loss.",
          ],
        },
        {
          eyebrow: "Healthy weight programme in Dubai",
          heading: "What the programme",
          accent: "includes.",
          paragraphs: [
            "The programme is built around your history, preferences and goals, and adjusted at each review.",
          ],
          bullets: [
            "A first consultation covering weight history, health, routine and goals",
            "A medical review, with blood tests only where they would help",
            "A nutrition plan built around your preferences, culture and schedule, with no extreme diets",
            "Movement guidance suited to your fitness and any health conditions",
            "CBT skills for habits, motivation, stress eating and self-criticism",
            "Follow-up reviews to track progress and adjust",
          ],
        },
      ]}
      faqs={[
        {
          question: "How much weight will I lose?",
          answer:
            "This varies and cannot be promised. Goals are agreed with you after your medical review.",
        },
        {
          question: "Do I have to follow a diet?",
          answer:
            "You will get a plan built around you. It will not be a crash diet.",
        },
        {
          question: "Do I need blood tests?",
          answer:
            "Often useful, but only where there is a reason.",
        },
        {
          question: "Can I do it online?",
          answer:
            "Yes, the programme is available online as well as in person in Dubai.",
        },
      ]}
      safety={{
        text: "Seek urgent care for chest pain, severe breathlessness, fainting, or signs of a very low food intake such as dizziness and palpitations. In the UAE, call",
        emergencyLinks: [
          { label: "998 for an ambulance", href: "tel:998" },
        ],
        closing: "If you have thoughts of harming yourself or cannot keep yourself safe, call 999 or go to the nearest emergency department.",
      }}
      ctaTitle="Start with a medical review of"
      ctaAccent="your weight and metabolic health."
      ctaDescription="Book a consultation with a doctor who has time to listen."
    />
  );
}
