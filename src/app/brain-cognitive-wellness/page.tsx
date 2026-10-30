import type { Metadata } from "next";
import { HealthConcernContent } from "@/components/layout/HealthConcernContent";

export const metadata: Metadata = {
  title: "Brain Health Doctor Dubai",
  description:
    "Dr Fouzia reviews changes in concentration, memory and mental fatigue, considers possible medical causes and helps you plan next steps.",
};

export default function BrainCognitiveWellnessPage() {
  return (
    <HealthConcernContent
      title="Brain Health Doctor in Dubai"
      highlight="Clearer thinking starts with a proper review"
      description="Brain fog, trouble concentrating and memory slips can have several causes. Dr Fouzia is a consultant family physician who reviews cognitive concerns alongside sleep, stress, nutrition, blood sugar, thyroid health, mood and medicines before deciding what to do next."
      highlightsTitle="Start with a review"
      highlightsAccent="built around you."
      highlights={[
        "A structured conversation about memory, focus, mood and daily function",
        "Medical checks considered first, with tests selected for your history",
        "Sleep, stress, workload and recovery reviewed together",
        "Blood sugar and metabolic health considered when relevant",
        "Food-first nutrition, with supplements only for a clear reason",
        "Practical priorities and follow-up to review how you are doing",
      ]}
      sections={[
        {
          eyebrow: "Brain fog doctor in Dubai",
          heading: "What could be behind",
          accent: "it?",
          paragraphs: [
            "Brain fog describes difficulty thinking clearly; it is not a diagnosis. Possible contributors include broken sleep, long-term stress, low iron or B12, thyroid changes, hormonal shifts, low mood and some medicines.",
            "Your clinician can review your history and decide whether selected tests are useful, so you are not tested for everything at once.",
          ],
          links: [
            { label: "Review health markers", href: "/health-marker-review" },
            { label: "Explore stress and sleep care", href: "/stress-sleep-nervous-system-health" },
          ],
        },
        {
          eyebrow: "Cognitive health in Dubai",
          heading: "When changes deserve a",
          accent: "closer look.",
          paragraphs: [
            "A medical review may help when a change in thinking is new, persistent or affecting everyday life. Mention what changed, when it began and whether someone close to you has noticed it too.",
          ],
          bullets: [
            "Concentration or memory has changed noticeably over weeks or months",
            "You are losing track of tasks that used to feel manageable",
            "Family or colleagues have noticed a change",
            "Tiredness, low mood or poor sleep is happening alongside it",
          ],
        },
        {
          eyebrow: "Mental fatigue and recovery",
          heading: "Make room for",
          accent: "steady steps.",
          paragraphs: [
            "A plan may include sleep routines, pacing your workload, regular meals, movement and short breaks. If worry or low mood is part of the picture, Calm Mind Sessions skills may also be discussed.",
          ],
          links: [
            { label: "Explore Calm Mind Sessions for stress management", href: "/calm-mind-sessions-stress-management" },
            { label: "Read about fatigue and brain fog", href: "/fatigue-low-energy-brain-fog" },
          ],
        },
        {
          eyebrow: "What to expect",
          heading: "A clear review, then a",
          accent: "practical plan.",
          paragraphs: [
            "The visit starts with your symptoms, timeline and daily routine. A physical review and selected blood tests may follow if they are useful. You and Dr Fouzia can then agree on priorities and whether follow-up is appropriate.",
          ],
        },
      ]}
      faqs={[
        {
          question: "Is brain fog a sign of dementia?",
          answer:
            "Brain fog has many possible causes and does not by itself mean dementia. Ongoing or noticeable changes in memory or thinking should be discussed with a doctor.",
        },
        {
          question: "Which tests might I need?",
          answer:
            "It depends on your symptoms and history. A clinician may consider tests such as iron, B12, thyroid function or blood sugar when relevant, and explain why each is being considered.",
        },
        {
          question: "Can supplements fix brain fog?",
          answer:
            "Only take a supplement when there is a clear reason for it. A clinician can review your diet, medicines and test results before discussing whether one is appropriate.",
        },
        {
          question: "How long will it take to improve?",
          answer:
            "That varies with the cause. Your doctor can discuss reasonable expectations after reviewing your symptoms and health history.",
        },
        {
          question:
            "How can I improve brain health and cognitive function naturally?",
          answer:
            "Brain health can be supported through regular physical activity, adequate sleep, balanced nutrition, social engagement and effective stress management. Medical assessment is important when memory or concentration difficulties are persistent.",
        },
        {
          question:
            "What causes memory problems and poor concentration in adults?",
          answer:
            "Memory and concentration difficulties can be associated with sleep disorders, stress, hormonal changes, thyroid conditions, low iron, vitamin B12 deficiency, low mood and medication effects. A medical assessment helps identify potential contributors.",
        },
        {
          question:
            "What does a cognitive wellness assessment in Dubai include?",
          answer:
            "A cognitive wellness assessment may include a review of memory, concentration, sleep, mood, nutrition, medical history and medications. Dr Fouzia Al Ali may recommend relevant investigations or further evaluation depending on the findings.",
        },
        {
          question:
            "Are Clear mind sessions suitable for people experiencing mental fatigue?",
          answer:
            "Clear mind sessions are intended to provide practical support for concentration, mental clarity and managing cognitive fatigue. Suitability depends on individual needs, and persistent or worsening cognitive symptoms should first receive appropriate medical assessment.",
        },
      ]}
      safety={{
        text: "Sudden confusion, a severe headache, weakness on one side, difficulty speaking or a fall with head injury needs emergency care in the UAE. Call",
        emergencyLinks: [
          { label: "998 for an ambulance", href: "tel:998" },
          { label: "999 for police", href: "tel:999" },
        ],
        closing: "or go to the nearest emergency department.",
      }}
      ctaTitle="Book a review of how you are"
      ctaAccent="thinking and feeling."
      ctaDescription="Talk through your concerns with a doctor who has time to listen."
      showEnquiryForm
    />
  );
}
