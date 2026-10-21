import type { Metadata } from "next";
import { HealthConcernContent } from "@/components/layout/HealthConcernContent";

export const metadata: Metadata = {
  title: "CBT for Stress Dubai | Dr Fouzia Al Ali",
  description:
    "Feeling overloaded by work or life? Dr Fouzia offers CBT for stress in Dubai, with practical skills for coping, boundaries and recovery.",
};

export default function CBTStressManagementPage() {
  return (
    <HealthConcernContent
      eyebrowLabel="Cognitive behavioural therapy"
      highlightsEyebrow="Stress management in Dubai"
      title="CBT for Stress in Dubai"
      highlight="Practical ways to cope when life piles up"
      description="Stress can come from work, family duties, money worries or the pace of life in Dubai. When it lasts, it can affect sleep, mood, concentration and the body. Dr Fouzia is a consultant family physician who offers CBT for stress in Dubai. Sessions help you notice triggers, understand your responses and practise skills for handling daily pressure, while considering whether health factors may also need attention."
      highlightsTitle="Build a practical"
      highlightsAccent="toolkit for daily life."
      highlights={[
        "Recognise stress triggers and your early warning signs",
        "Practise simple ways to settle the body, such as breathing or grounding",
        "Examine thoughts like ‘I must handle everything’ or ‘I cannot say no’",
        "Plan, prioritise and set boundaries that work for you",
        "Review routines around sleep, movement, meals and breaks",
        "Leave with a short list of habits to keep practising",
      ]}
      sections={[
        {
          eyebrow: "Stress management therapy in Dubai",
          heading: "How ongoing stress can",
          accent: "show up.",
          paragraphs: [
            "Stress is a response to pressure, not a diagnosis. When it persists, it can affect how you feel and manage everyday activities. It may help to talk with a clinician when stress is affecting your health, relationships or work.",
          ],
          bullets: [
            "Feeling tense, irritable or unable to relax",
            "Headaches, muscle tension, stomach upset or a racing heart",
            "Poor sleep, tiredness or trouble concentrating",
            "Pulling away from friends or activities you used to enjoy",
            "Relying more on caffeine, alcohol or late nights to cope",
          ],
        },
        {
          eyebrow: "CBT stress treatment in Dubai",
          heading: "Sessions combine review with",
          accent: "skills practice.",
          paragraphs: [
            "A first review can cover what is putting pressure on you, how long it has been going on and what changes you have noticed. Physical contributors such as sleep difficulties or other health concerns can be considered when your history suggests they may matter.",
          ],
          bullets: [
            "Review current stressors and how long they have lasted",
            "Consider relevant physical factors based on your history",
            "Practise an agreed skill in a session and between visits",
            "Review what is helping and what may need adjusting",
          ],
        },
        {
          eyebrow: "Work stress therapy in Dubai",
          heading: "Look at the pressure and your",
          accent: "room to respond.",
          paragraphs: [
            "Long hours, heavy workloads, unclear expectations, difficult colleagues and being constantly reachable can all add to work stress. CBT can help you examine your responses, priorities and boundaries. If stress has become exhaustion or detachment from work, read about burnout support.",
          ],
          links: [
            { label: "Explore CBT for work stress and burnout", href: "/cbt-burnout-work-stress" },
            { label: "Read about stress and sleep care", href: "/stress-sleep-nervous-system-health" },
          ],
        },
        {
          eyebrow: "Who this suits",
          heading: "When pressure is affecting",
          accent: "your daily life.",
          paragraphs: [
            "This page may be relevant if stress is affecting your health, relationships or work. If it overlaps with ongoing sleep problems, Dr Fouzia can discuss whether a broader review would be useful.",
          ],
        },
      ]}
      faqs={[
        {
          question: "Is stress a medical condition?",
          answer:
            "Stress is a response to pressure, not a diagnosis. When it lasts, it can contribute to health problems and may be worth addressing.",
        },
        {
          question: "How many sessions will I need?",
          answer:
            "It varies. Your plan can be reviewed with you regularly.",
        },
        {
          question: "Can CBT remove stress completely?",
          answer:
            "No. The aim is to practise ways to cope better and reduce stress’s impact on you.",
        },
        {
          question: "Do I need medical tests?",
          answer:
            "Only if your symptoms or history suggest a physical cause may need checking. Dr Fouzia can discuss this with you before deciding on next steps.",
        },
      ]}
      safety={{
        text: "If you have thoughts of harming yourself or ending your life, get urgent help now. Call",
        emergencyLinks: [
          { label: "998 for an ambulance", href: "tel:998" },
          { label: "999 for police", href: "tel:999" },
        ],
        closing: "in the UAE, or go to the nearest emergency department.",
        additionalText: "Chest pain, fainting or severe breathlessness need urgent medical assessment. Call",
        additionalLinks: [{ label: "998 for an ambulance", href: "tel:998" }],
        additionalClosing: "in the UAE.",
      }}
      ctaTitle="Take a first step towards"
      ctaAccent="handling stress better."
      ctaDescription="Talk it through with a doctor who has time to listen."
    />
  );
}
