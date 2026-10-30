import type { Metadata } from "next";
import { HealthConcernContent } from "@/components/layout/HealthConcernContent";

export const metadata: Metadata = {
  title: "Calm Mind Sessions for Low Mood and Mild Depression Dubai",
  description:
    "Support for low mood and mild depression in Dubai, with a medical review and practical Calm Mind Sessions skills tailored to your needs.",
};

export default function CalmMindSessionsLowMoodDepressionPage() {
  return (
    <HealthConcernContent
      eyebrowLabel="Cognitive behavioural therapy"
      highlightsEyebrow="Signs worth discussing"
      title="Calm Mind Sessions for low mood and mild depression"
      highlight="in Dubai"
      description="Small steps back towards what matters to you. Low mood can make ordinary tasks feel heavy, take the interest out of things you used to enjoy and leave you tired, withdrawn or self-critical. Dr Fouzia is a consultant family physician who offers Calm Mind Sessions for low mood and mild depression. She can review possible physical contributors and help you practise skills for thought and behaviour patterns that may be keeping low mood going."
      highlightsTitle="Low mood can"
      highlightsAccent="affect daily life."
      highlights={[
        "Feeling low, flat or empty for much of the day",
        "Losing interest or pleasure in usual activities",
        "Poor sleep, appetite changes or ongoing tiredness",
        "Trouble concentrating or making decisions",
        "Withdrawing from friends, family or work",
        "Harsh self-criticism or feeling like a burden",
      ]}
      sections={[
        {
          eyebrow: "A considered first visit",
          heading: "Start with your health",
          accent: "and your story.",
          paragraphs: [
            "Low mood can have more than one contributor. Dr Fouzia may review your health history, medicines and sleep, and consider blood tests such as thyroid, iron, B12 or vitamin D when clinically useful. Assessment is a conversation about what you are experiencing and how it affects daily life.",
          ],
        },
        {
          eyebrow: "What sessions may cover",
          heading: "Build a plan around",
          accent: "small, useful steps.",
          paragraphs: [
            "Calm Mind Sessions looks at the links between thoughts, feelings and actions. The work is collaborative and paced with you; the focus is on practical changes that fit your circumstances.",
          ],
          bullets: [
            "Notice patterns between mood, thoughts and daily activity",
            "Plan small activities that may bring structure, achievement or enjoyment",
            "Examine self-critical thoughts and consider a more balanced view",
            "Gradually return to routines, sleep patterns or social contact",
            "Agree what to watch for and how to seek support if things change",
          ],
        },
        {
          eyebrow: "Support that fits",
          heading: "Choose the next step",
          accent: "with your clinician.",
          paragraphs: [
            "Low mood is not always the same as depression, and Calm Mind Sessions is not the only form of care. If symptoms are more severe, persistent or complex, Dr Fouzia can discuss whether additional or specialist mental health support should be part of the plan.",
          ],
          links: [
            { label: "Calm Mind Sessions for anxiety", href: "/calm-mind-sessions-anxiety" },
            { label: "Calm Mind Sessions for sleep difficulties", href: "/calm-mind-sessions-sleep-insomnia" },
            { label: "Calm Mind Sessions for self-esteem", href: "/calm-mind-sessions-self-esteem-confidence" },
            { label: "Fatigue and low energy", href: "/fatigue-low-energy-brain-fog" },
          ],
        },
      ]}
      faqs={[
        {
          question: "Is low mood the same as depression?",
          answer:
            "Not always. Low mood can be temporary or one part of depression. A clinician can talk with you about how long it has been happening, the symptoms you notice and how it affects your daily life.",
        },
        {
          question: "Will I need antidepressants?",
          answer:
            "Not necessarily. Options depend on your assessment and preferences. Do not start, stop or change prescribed medicine without discussing it with the prescriber.",
        },
        {
          question: "How many sessions will I need?",
          answer:
            "It varies with the concern, your goals and how you respond to the work. The plan can be reviewed with you as you go.",
        },
      ]}
      safety={{
        text: "If you have thoughts of harming yourself or ending your life, or feel unable to keep yourself safe, get urgent help now. In the UAE, call",
        emergencyLinks: [
          { label: "998 for an ambulance", href: "tel:998" },
          { label: "999 for police", href: "tel:999" },
        ],
        closing: "or go to the nearest emergency department.",
      }}
      ctaTitle="Take a first step"
      ctaAccent="at your pace."
      ctaDescription="Talk it through with a doctor who has time to listen."
    />
  );
}
