import type { Metadata } from "next";
import { HealthConcernContent } from "@/components/layout/HealthConcernContent";

export const metadata: Metadata = {
  title: "Healthy Aging Programme Dubai | Dr Fouzia Al Ali",
  description:
    "A healthy aging programme in Dubai with a family physician. Dr Fouzia joins health checks, lifestyle planning and follow-up to support how you age.",
};

export default function HealthyAgingBiologicalAgeResetPage() {
  return (
    <HealthConcernContent
      eyebrowLabel="Programme"
      highlightsEyebrow="Longevity programme in Dubai"
      title="Healthy Aging Programme"
      highlight="in Dubai"
      description="A structured plan for the years ahead. Ageing well is less about a number and more about staying strong, clear-headed and independent for as long as possible. Dr Fouzia is a consultant family physician who offers a healthy aging programme in Dubai. It starts with a detailed health review, looks at the habits and risks that matter most for you, and sets out a plan covering movement, food, sleep, stress and preventive checks, with follow-up to adjust it as you go."
      highlightsTitle="What the programme"
      highlightsAccent="looks at."
      highlights={[
        "Heart and metabolic health: blood pressure, cholesterol and blood sugar",
        "Strength, balance and everyday movement",
        "Sleep quality and stress",
        "Food patterns and body composition",
        "Bone health, vision, hearing and screening that is due",
        "Medicines and supplements, and whether each is needed",
      ]}
      sections={[
        {
          eyebrow: "Healthy aging doctor in Dubai",
          heading: "Why a doctor-led",
          accent: "plan helps.",
          paragraphs: [
            "Many \u201canti-ageing\u201d offers are sold without medical context. A doctor can look at your history, family risks, medicines and test results together, focus on what has good evidence, and tell you when something is not worth your money.",
          ],
        },
        {
          eyebrow: "Biological age reset in Dubai",
          heading: "What the",
          accent: "term means.",
          paragraphs: [
            "\u201cBiological age\u201d is a way of describing how your body is ageing compared with your calendar age. Some tests estimate it, but these estimates are still developing and are not yet standard medical practice. Dr Fouzia may discuss them if you are curious, but your plan is built on established health measures and your own goals. No programme can reverse your age.",
          ],
          links: [
            { label: "Biological age reset", href: "/biological-age-reset" },
          ],
        },
        {
          eyebrow: "Longevity medicine in Dubai",
          heading: "What the programme",
          accent: "includes.",
          paragraphs: [
            "The programme is built around your health history, family risks and goals, and adjusted at each review.",
          ],
          bullets: [
            "A first consultation covering health history, family history, routine and goals",
            "A medical review, with tests chosen for a reason",
            "A written plan with priorities in order and realistic steps",
            "CBT-informed support for habits, motivation and stress where useful",
            "Follow-up reviews to track progress and adjust",
          ],
        },
      ]}
      faqs={[
        {
          question: "Can you tell me my biological age?",
          answer:
            "Some tests estimate it, but they are not yet validated for routine use. Dr Fouzia will explain what any result can and cannot tell you.",
        },
        {
          question: "Do I need lots of tests?",
          answer:
            "No. Tests are chosen where the result would change your care.",
        },
        {
          question: "Is this the same as the Healthy Aging and Longevity page?",
          answer:
            "That page explains the topic and consultation. This one describes the structured programme.",
        },
        {
          question: "What does it cost?",
          answer:
            "Fees are confirmed at your first consultation. Message us for current information.",
        },
      ]}
      safety={{
        text: "Seek urgent care for chest pain, sudden weakness, trouble speaking, severe headache or fainting. Please do not start new supplements or exercise regimes without checking with your doctor if you have a heart condition or take regular medicines. In the UAE, call",
        emergencyLinks: [
          { label: "998 for an ambulance", href: "tel:998" },
        ],
        closing: "or go to the nearest emergency department.",
      }}
      ctaTitle="Plan your next decades with"
      ctaAccent="a doctor who has time to listen."
      ctaDescription="Book a consultation to look at your health and goals."
    />
  );
}
