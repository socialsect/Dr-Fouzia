import type { Metadata } from "next";
import { HealthConcernContent } from "@/components/layout/HealthConcernContent";

export const metadata: Metadata = {
  title: "Brain Fog Treatment Dubai | Dr Fouzia Al Ali",
  description:
    "A structured brain fog programme in Dubai with a family physician. Dr Fouzia joins a medical review, lifestyle plan and CBT skills over several visits.",
};

export default function BrainFogCognitiveWellnessPage() {
  return (
    <HealthConcernContent
      eyebrowLabel="Programme"
      highlightsEyebrow="Brain fog programme in Dubai"
      title="Brain Fog Treatment"
      highlight="in Dubai"
      description="A step-by-step programme for foggy, tired thinking. Brain fog is a description of how thinking feels: slow, hazy, forgetful or hard to hold together. It is not a diagnosis, and it has many possible causes. Dr Fouzia is a consultant family physician who offers this brain fog programme in Dubai. It runs over several visits, so you can find and address likely causes in a sensible order, learn skills for managing mental tiredness and review how you are getting on."
      highlightsTitle="Who it"
      highlightsAccent="suits."
      highlights={[
        "People whose thinking has felt slow or unreliable for weeks or months",
        "Those who forget words, appointments or tasks more than usual",
        "Professionals whose mental stamina has dropped",
        "People with tiredness, poor sleep or stress alongside the fog",
      ]}
      sections={[
        {
          eyebrow: "Brain fog treatment in Dubai",
          heading: "The order of",
          accent: "the programme.",
          paragraphs: [
            "The programme works through likely causes in a sensible order, treating what is found before moving to the next step.",
          ],
          bullets: [
            "Medical review: history, medicines, sleep, mood and routine, with blood tests where they would help such as iron, B12, thyroid, vitamin D and blood sugar",
            "Treat what is found: for example, correcting a deficiency or addressing poor sleep",
            "Lifestyle changes: regular meals, movement, caffeine, alcohol and screen habits",
            "Skills: pacing, planning and CBT techniques for stress, worry and low mood",
            "Review and adjust at follow-up visits",
          ],
        },
        {
          eyebrow: "Mental fatigue treatment in Dubai",
          heading: "What helps with",
          accent: "a tired mind.",
          paragraphs: [
            "Mental fatigue often eases when recovery is planned: sleep routines, workload pacing, breaks and gentle activity. Dr Fouzia helps you build a routine that suits your work and family life, and reviews it with you.",
          ],
          links: [
            { label: "Fatigue and low energy", href: "/fatigue-low-energy-brain-fog" },
            { label: "CBT for stress management", href: "/cbt-stress-management" },
          ],
        },
        {
          eyebrow: "Cognitive wellness in Dubai",
          heading: "When to seek",
          accent: "a wider review.",
          paragraphs: [
            "If memory problems are getting worse, family have noticed a change, or you are losing track of familiar tasks, tell Dr Fouzia so that a fuller assessment can be arranged, which may include a referral to a memory specialist. This programme is not a treatment for dementia or other brain conditions, and it does not replace specialist neurological care.",
          ],
          links: [
            { label: "Brain and cognitive wellness", href: "/brain-cognitive-wellness" },
            { label: "Supplement review", href: "/supplement-review" },
            { label: "Stress, sleep and energy reset", href: "/stress-sleep-energy-reset" },
          ],
        },
      ]}
      faqs={[
        {
          question: "How is this different from the Brain and Cognitive Wellness page?",
          answer:
            "That page explains the concern and a consultation. This page describes the multi-visit programme.",
        },
        {
          question: "Do I need brain scans?",
          answer:
            "Not usually. They are arranged only if your symptoms suggest a reason.",
        },
        {
          question: "Will I need supplements?",
          answer:
            "Only where a test or your history shows a clear need.",
        },
        {
          question: "Can I do it online?",
          answer:
            "Yes, the programme is available online as well as in person in Dubai.",
        },
        {
          question: "What causes brain fog and difficulty concentrating?",
          answer:
            "Brain fog can be associated with poor sleep, prolonged stress, nutritional deficiencies, thyroid problems, hormonal changes, low mood and certain medications. It is a symptom rather than a medical diagnosis and should be assessed when persistent.",
        },
        {
          question: "How can I improve mental clarity and concentration?",
          answer:
            "Improving mental clarity may involve addressing sleep problems, reviewing nutrition, managing stress, maintaining physical activity and investigating relevant medical causes. Dr Fouzia Al Ali develops recommendations based on individual assessment.",
        },
        {
          question:
            "What is included in a brain fog wellness programme in Dubai?",
          answer:
            "The programme involves reviewing medical history, sleep, mood, medications, nutrition and relevant health markers. It may also include lifestyle recommendations, follow-up assessments and Clear mind sessions to support concentration and mental wellness.",
        },
        {
          question: "When should I see a doctor for persistent brain fog?",
          answer:
            "Seek medical advice if brain fog continues for weeks, affects work or daily activities, or occurs alongside fatigue, sleep difficulties or memory problems. Sudden confusion or sudden neurological symptoms require urgent medical attention.",
        },
      ]}
      safety={{
        text: "Sudden confusion, severe headache, weakness on one side, difficulty speaking or a head injury need emergency care now. In the UAE, call",
        emergencyLinks: [
          { label: "998 for an ambulance", href: "tel:998" },
        ],
        closing: "If you have thoughts of harming yourself or cannot keep yourself safe, call 999 or go to the nearest emergency department.",
      }}
      ctaTitle="Start with a review of what may"
      ctaAccent="be behind your brain fog."
      ctaDescription="Book a consultation with a doctor who has time to listen."
      showEnquiryForm
    />
  );
}
