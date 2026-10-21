import type { Metadata } from "next";
import { HealthConcernContent } from "@/components/layout/HealthConcernContent";

export const metadata: Metadata = {
  title: "Emotional Regulation Therapy Dubai",
  description:
    "Explore practical CBT skills for feeling overwhelmed by strong emotions, with a medical review for contributing factors in Dubai.",
};

export default function CBTEmotionalRegulationPage() {
  return (
    <HealthConcernContent
      eyebrowLabel="Cognitive behavioural therapy"
      highlightsEyebrow="How emotional overwhelm may feel"
      title="Emotional regulation therapy"
      highlight="in Dubai"
      description="Learn to ride the wave instead of being swept away. Strong feelings are part of life. When they come quickly, feel difficult to settle or strain relationships, work or sleep, practical support may help. Dr Fouzia offers emotional regulation support using CBT skills and can review health factors such as sleep, stress, pain, medicines or hormonal changes that may affect how emotions feel."
      highlightsTitle="Emotional overwhelm"
      highlightsAccent="can feel like."
      highlights={[
        "Feelings that rise quickly and feel hard to settle",
        "Snapping at people and regretting it later",
        "Holding feelings in until they spill over",
        "Feeling numb or shutting down in stressful moments",
        "Taking a long time to recover after an upset",
        "Feeling confused by the intensity of your reaction",
      ]}
      sections={[
        {
          eyebrow: "What sessions may cover",
          heading: "Understand the moment",
          accent: "before choosing a response.",
          paragraphs: [
            "A session can help you notice what happened, what you thought, what you felt and what you did next. Together, you can look for early signs and choose practical skills to try in situations that feel difficult.",
          ],
          bullets: [
            "Name emotions and notice early body signals",
            "Map triggers and the thoughts linked to them",
            "Examine thoughts that may be intensifying a feeling",
            "Practise paced breathing, grounding or a brief pause",
            "Plan a response for situations you find hardest",
          ],
        },
        {
          eyebrow: "Skills between sessions",
          heading: "Practise small steps",
          accent: "in everyday situations.",
          paragraphs: [
            "You might try a short emotion diary, a “stop and check” routine or a coping plan for a known trigger. You can review what felt useful and adjust the approach together.",
          ],
        },
        {
          eyebrow: "When other factors play a part",
          heading: "Look at the whole",
          accent: "picture of your health.",
          paragraphs: [
            "Poor sleep, ongoing stress, hormonal changes, pain and some medicines may affect how intensely emotions are felt. A consultation can consider these factors and whether a different or additional form of support would suit you better.",
          ],
          links: [
            { label: "CBT for anxiety", href: "/cbt-anxiety" },
            { label: "CBT for low mood", href: "/cbt-low-mood-depression" },
            { label: "CBT for stress management", href: "/cbt-stress-management" },
            { label: "CBT for self-esteem", href: "/cbt-self-esteem-confidence" },
          ],
        },
      ]}
      faqs={[
        {
          question: "Is it normal to feel emotions strongly?",
          answer:
            "Yes. People experience feelings with different intensity. It may be useful to seek support when emotions cause ongoing distress or make daily life or relationships harder.",
        },
        {
          question: "How is this different from anxiety or low mood therapy?",
          answer:
            "Those pages focus on specific concerns. This page focuses on noticing and responding to strong feelings more generally; an assessment can help identify what fits your situation.",
        },
        {
          question: "How many sessions will I need?",
          answer:
            "It varies with your needs and the kind of support that is suitable. The plan can be reviewed with you as you go.",
        },
      ]}
      safety={{
        text: "If you have thoughts of harming yourself or another person, or feel unable to keep yourself safe, get urgent help now. In the UAE, call",
        emergencyLinks: [
          { label: "998 for an ambulance", href: "tel:998" },
          { label: "999 for police", href: "tel:999" },
        ],
        closing: "or go to the nearest emergency department.",
      }}
      ctaTitle="Take a first step"
      ctaAccent="towards steadier emotions."
      ctaDescription="Talk through what you have been experiencing with a doctor who has time to listen."
    />
  );
}
