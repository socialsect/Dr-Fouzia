import type { Metadata } from "next";
import { HealthConcernContent } from "@/components/layout/HealthConcernContent";

export const metadata: Metadata = {
  title: "Calm Mind Sessions for Perfectionism Dubai | Dr Fouzia Al Ali",
  description:
    "Stuck putting things off or never satisfied with your work? Dr Fouzia offers Calm Mind Sessions for perfectionism and procrastination in Dubai. Book a consultation.",
};

export default function CalmMindSessionsPerfectionismProcrastinationPage() {
  return (
    <HealthConcernContent
      eyebrowLabel="Calm Mind Sessions"
      highlightsEyebrow="Perfectionism therapy in Dubai"
      title="Calm Mind Sessions for Perfectionism and Procrastination"
      highlight="in Dubai"
      description="When &ldquo;good enough&rdquo; never feels good enough. Perfectionism and procrastination often travel together. Very high standards and a fear of getting things wrong can make it hard to begin, hard to finish and hard to feel satisfied with the result. Dr Fouzia is a consultant family physician who offers Calm Mind Sessions for perfectionism in Dubai. Sessions help you spot the rules you set yourself, test what happens when you loosen them and practise taking action without waiting for the perfect moment. She also checks for tiredness, low mood or anxiety that may be adding to the delay."
      highlightsTitle="How it"
      highlightsAccent="can look."
      highlights={[
        "Setting standards so high that they are tiring or impossible to meet",
        "Checking, redoing or polishing work far beyond what is needed",
        "Harsh self-criticism after small mistakes",
        "Difficulty delegating or letting others help",
        "Feeling that anything less than excellent counts as failure",
      ]}
      sections={[
        {
          eyebrow: "Procrastination therapy in Dubai",
          heading: "Why putting things off",
          accent: "is not laziness.",
          paragraphs: [
            "Delay is often a way of avoiding the discomfort of a task, such as the fear of doing it badly. Avoiding brings short-term relief but builds pressure and guilt later. Calm Mind Sessions breaks the cycle by making tasks smaller and testing your predictions about what will happen.",
          ],
        },
        {
          eyebrow: "Fear of failure therapy in Dubai",
          heading: "What sessions",
          accent: "may cover.",
          paragraphs: [
            "Sessions are structured around the patterns that keep perfectionism and procrastination going, with practical steps you can try between meetings.",
          ],
          bullets: [
            "Mapping your perfectionism cycle: the rule, the fear, the behaviour and the result",
            "Testing unhelpful beliefs such as \u201cif it is not perfect, it is worthless\u201d",
            "Behavioural experiments: deliberately aiming for \u201cgood enough\u201d and noting the outcome",
            "Breaking tasks into steps and setting time limits",
            "Practising self-kindness after mistakes",
            "A plan to keep progress after sessions end",
          ],
        },
        {
          eyebrow: "Calm Mind Sessions for procrastination in Dubai",
          heading: "Tools you",
          accent: "practise.",
          paragraphs: [
            "Task planning, \u201cfive-minute starts\u201d, scheduled breaks and an activity log. You try each between sessions and review what worked.",
          ],
          links: [
            { label: "Calm Mind Sessions for low mood", href: "/calm-mind-sessions-low-mood-depression" },
            { label: "Calm Mind Sessions for anxiety", href: "/calm-mind-sessions-anxiety" },
            { label: "Calm Mind Sessions for self-esteem", href: "/calm-mind-sessions-self-esteem-confidence" },
            { label: "Calm Mind Sessions for overthinking", href: "/calm-mind-sessions-overthinking" },
          ],
        },
      ]}
      faqs={[
        {
          question: "Is perfectionism always a problem?",
          answer:
            "Wanting to do well is healthy. It becomes a problem when it causes distress, avoidance or exhaustion.",
        },
        {
          question: "Could procrastination be ADHD?",
          answer:
            "It can be, for some people. If that is a concern, Dr Fouzia will discuss it and suggest the right next step.",
        },
        {
          question: "How many sessions will I need?",
          answer:
            "It varies with your goals and circumstances. You can review the plan together as you go.",
        },
        {
          question: "Can I have sessions online?",
          answer:
            "Yes, sessions are available online as well as in person in Dubai.",
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
      ctaTitle="Take the first step,"
      ctaAccent="even an imperfect one."
      ctaDescription="Talk it through with a doctor who has time to listen."
    />
  );
}
