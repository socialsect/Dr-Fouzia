import type { Metadata } from "next";
import { HealthConcernContent } from "@/components/layout/HealthConcernContent";

export const metadata: Metadata = {
  title: "Emotional Eating Therapy Dubai | Dr Fouzia Al Ali",
  description:
    "Eating to cope with stress or feelings? Dr Fouzia offers emotional eating therapy in Dubai using Calm Mind Sessions, with a supportive, non-judgemental approach.",
};

export default function CalmMindSessionsEmotionalEatingPage() {
  return (
    <HealthConcernContent
      eyebrowLabel="Cognitive behavioural therapy"
      highlightsEyebrow="Emotional eating treatment in Dubai"
      title="Emotional Eating Therapy"
      highlight="in Dubai"
      description="Understand what food is doing for you. Many people turn to food when they feel stressed, bored, lonely or low. Sometimes it brings comfort for a moment, followed by guilt or a sense of losing control. Dr Fouzia is a consultant family physician who offers emotional eating therapy in Dubai using Calm Mind Sessions. Sessions help you notice what triggers the urge, understand what the eating does for you and practise other ways of coping, without shame and without a diet."
      highlightsTitle="How it"
      highlightsAccent="can look."
      highlights={[
        "Eating in response to feelings rather than physical hunger",
        "Eating quickly, secretly or until uncomfortable",
        "Feeling guilty or ashamed afterwards",
        "Urges that feel strong and hard to resist at certain times or places",
        "Thinking about food a lot, or swinging between strict rules and giving in",
        "Feeling that food is the only thing that helps you cope",
      ]}
      sections={[
        {
          eyebrow: "Calm Mind Sessions for emotional eating in Dubai",
          heading: "What sessions",
          accent: "may cover.",
          paragraphs: [
            "Sessions are structured around the link between feelings and eating, with practical steps you try between meetings.",
          ],
          bullets: [
            "Keeping a simple diary of urges, feelings and what happened, with no calorie counting",
            "Spotting triggers such as stress, tiredness, loneliness or particular situations",
            "Testing thoughts like \u201cI have blown it, so I may as well carry on\u201d",
            "Building other ways to meet the need behind the urge, such as rest, connection or a break",
            "Regular, kind eating routines that reduce extreme hunger, agreed with you",
            "Handling slips without self-criticism, and planning for tougher times",
          ],
        },
        {
          eyebrow: "Emotional eating therapist in Dubai",
          heading: "A doctor\u2019s",
          accent: "view.",
          paragraphs: [
            "Dr Fouzia can also review medical factors that affect appetite and mood, such as poor sleep, hormonal changes, stress and some medicines. This page is about the link between feelings and eating. It is not a weight-loss programme.",
          ],
        },
        {
          eyebrow: "Binge eating support in Dubai",
          heading: "When to get",
          accent: "specialist help.",
          paragraphs: [
            "If you often eat large amounts in a short time, feel out of control, and feel distressed afterwards, this may be binge eating disorder, which benefits from specialist assessment. Dr Fouzia will talk it through with you and arrange the right care.",
          ],
          links: [
            { label: "Calm Mind Sessions for body image", href: "/calm-mind-sessions-body-image" },
            { label: "Calm Mind Sessions for stress management", href: "/calm-mind-sessions-stress-management" },
            { label: "Calm Mind Sessions for emotional regulation", href: "/calm-mind-sessions-emotional-regulation" },
            { label: "Calm Mind Sessions for low mood", href: "/calm-mind-sessions-low-mood-depression" },
          ],
        },
      ]}
      faqs={[
        {
          question: "Is emotional eating the same as an eating disorder?",
          answer:
            "Not necessarily. Many people eat emotionally at times. When it becomes frequent, feels out of control or causes distress, it is worth getting help.",
        },
        {
          question: "Will you put me on a diet?",
          answer:
            "No. Calm Mind Sessions here focuses on thoughts, feelings and habits, not on restricting food.",
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
        text: "Urgent medical care is needed for fainting, chest pain, a very slow or irregular heartbeat, repeated vomiting or thoughts of harming yourself. In the UAE, call",
        emergencyLinks: [
          { label: "998 for an ambulance", href: "tel:998" },
          { label: "999 for police", href: "tel:999" },
        ],
        closing: "or go to the nearest emergency department.",
      }}
      ctaTitle="Take the first step towards"
      ctaAccent="a calmer relationship with food."
      ctaDescription="Talk it through with a doctor who has time to listen."
    />
  );
}
