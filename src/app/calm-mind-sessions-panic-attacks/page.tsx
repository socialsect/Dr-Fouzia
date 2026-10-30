import type { Metadata } from "next";
import { HealthConcernContent } from "@/components/layout/HealthConcernContent";

export const metadata: Metadata = {
  title: "Calm Mind Sessions for Panic Attacks Dubai | Dr Fouzia Al Ali",
  description:
    "Having sudden surges of fear or a racing heart? Dr Fouzia offers Calm Mind Sessions for panic attacks in Dubai, with a medical review and practical skills.",
};

export default function CalmMindSessionsPanicAttacksPage() {
  return (
    <HealthConcernContent
      eyebrowLabel="Cognitive behavioural therapy"
      highlightsEyebrow="Calm Mind Sessions for panic attacks in Dubai"
      title="Calm Mind Sessions for Panic Attacks in Dubai"
      highlight="Make sense of panic, then practise what helps"
      description="A panic attack can arrive without warning, with a pounding heart, breathlessness, dizziness, tingling or a strong feeling that something terrible is happening. It can be frightening, and some people begin to fear the next one. Dr Fouzia is a consultant family physician who offers Calm Mind Sessions for panic attacks in Dubai. She starts by reviewing whether symptoms need medical assessment, then can help you understand the panic cycle and practise skills for responding to it."
      highlightsTitle="Understand the pattern"
      highlightsAccent="and practise your response."
      highlights={[
        "Review your symptoms and medical history before agreeing next steps",
        "Learn how body sensations, interpretations and fear can interact",
        "Examine frightening thoughts about what a sensation may mean",
        "Gradually approach avoided sensations or places when appropriate",
        "Practise breathing or grounding tools for difficult moments",
        "Review exercises and make a plan for continuing practice",
      ]}
      sections={[
        {
          eyebrow: "Panic attack therapy in Dubai",
          heading: "What panic can",
          accent: "feel like.",
          paragraphs: [
            "People describe panic in different ways. An episode may include physical sensations and fear, followed by worry about having another attack or avoiding a place where one happened.",
          ],
          bullets: [
            "A racing or pounding heart",
            "Shortness of breath or a feeling of choking",
            "Chest tightness, sweating, shaking or tingling",
            "Dizziness, nausea or feeling detached from yourself",
            "A sudden wave of fear that peaks within minutes",
            "Worry about another attack or avoiding places where one happened",
          ],
        },
        {
          eyebrow: "Panic treatment in Dubai",
          heading: "Check symptoms before assuming",
          accent: "they are panic.",
          paragraphs: [
            "Panic-like symptoms can overlap with heart, thyroid or breathing problems, and can also be affected by some medicines or caffeine. If this is a first episode, symptoms are new, or you have not had them assessed, Dr Fouzia can review your history and consider appropriate checks before discussing therapy.",
          ],
          links: [
            { label: "Read about health marker reviews", href: "/health-marker-review" },
            { label: "Explore Calm Mind Sessions for health anxiety", href: "/calm-mind-sessions-health-anxiety" },
          ],
        },
        {
          eyebrow: "Calm Mind Sessions for panic disorder in Dubai",
          heading: "Learn the panic cycle and",
          accent: "practise new steps.",
          paragraphs: [
            "Sessions are structured and collaborative. You agree goals, learn skills and try exercises between sessions. Your progress is reviewed regularly; the clinician can adjust the plan with you.",
          ],
          bullets: [
            "Understand how a body sensation, a frightening interpretation and more fear can reinforce one another",
            "Examine thoughts such as ‘I am having a heart attack’ or ‘I will lose control’",
            "Gradually approach sensations or places you have been avoiding, at an agreed pace",
            "Notice safety habits, such as always sitting near an exit, and discuss whether they keep fear going",
            "Practise breathing, grounding and other agreed tools between sessions",
          ],
        },
        {
          eyebrow: "Who this suits",
          heading: "When fear of another attack",
          accent: "starts to limit you.",
          paragraphs: [
            "A consultation may be useful if you have repeated panic attacks or avoid places and activities because you fear another one. If panic sits alongside health worries or low mood, these can be discussed as part of a wider plan.",
          ],
          links: [
            { label: "Explore Calm Mind Sessions for anxiety", href: "/calm-mind-sessions-anxiety" },
            { label: "Explore Calm Mind Sessions for stress management", href: "/calm-mind-sessions-stress-management" },
          ],
        },
      ]}
      faqs={[
        {
          question: "Can a panic attack be dangerous?",
          answer:
            "Panic can feel frightening, and its symptoms can resemble other conditions. A first episode or new or concerning symptoms should be discussed with a doctor.",
        },
        {
          question: "Is panic the same as anxiety?",
          answer:
            "They are related. Panic attacks are sudden surges of fear; anxiety is often a longer-lasting state of worry. They can overlap.",
        },
        {
          question: "How many sessions will I need?",
          answer:
            "It varies. Your plan can be reviewed with you regularly.",
        },
        {
          question: "Will I need medicine?",
          answer:
            "Not necessarily. Dr Fouzia can talk through options with you and will not change any medicine without your agreement.",
        },
      ]}
      safety={{
        text: "Chest pain, pain spreading to the arm or jaw, fainting, or breathlessness that does not settle needs urgent medical assessment. Call",
        emergencyLinks: [{ label: "998 for an ambulance", href: "tel:998" }],
        closing: "for an ambulance in the UAE.",
        additionalText: "If you may harm yourself or cannot keep yourself safe, seek emergency help now. Call",
        additionalLinks: [
          { label: "998 for an ambulance", href: "tel:998" },
          { label: "999 for police", href: "tel:999" },
        ],
        additionalClosing: "in the UAE, or go to the nearest emergency department.",
      }}
      ctaTitle="Take the first step towards"
      ctaAccent="understanding your panic."
      ctaDescription="Talk it through with a doctor who has time to listen."
    />
  );
}
