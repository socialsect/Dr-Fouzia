import type { Metadata } from "next";
import { HealthConcernContent } from "@/components/layout/HealthConcernContent";

export const metadata: Metadata = {
  title: "Calm Mind Sessions for Anxiety Dubai | Dr Fouzia Al Ali",
  description:
    "Struggling with constant worry or anxiety? Dr Fouzia offers Calm Mind Sessions for anxiety in Dubai, with practical skills and a medical review when appropriate.",
};

export default function CalmMindSessionsAnxietyPage() {
  return (
    <HealthConcernContent
      eyebrowLabel="Calm Mind Sessions"
      highlightsEyebrow="Calm Mind Sessions for anxiety in Dubai"
      title="Calm Mind Sessions for Anxiety in Dubai"
      highlight="Learn to loosen worry’s grip"
      description="Anxiety can show up as racing thoughts, a tight chest, restlessness, trouble sleeping or a sense that something is about to go wrong. Dr Fouzia is a consultant family physician who offers Calm Mind Sessions for anxiety in Dubai. Sessions help you understand how worry works, examine the thoughts that feed it and practise coping skills, while considering whether health factors may be adding to your symptoms."
      highlightsTitle="Work with worry"
      highlightsAccent="one step at a time."
      highlights={[
        "Map triggers, thoughts, feelings and what you do in response",
        "Examine anxious predictions and consider a more balanced view",
        "Gradually approach avoided situations at a pace you agree",
        "Practise breathing or relaxation tools for body tension",
        "Try practical exercises between sessions",
        "Review what is helping and plan how to keep using the skills",
      ]}
      sections={[
        {
          eyebrow: "Anxiety therapy in Dubai",
          heading: "Signs it may be time to",
          accent: "seek support.",
          paragraphs: [
            "Worry is a normal response to uncertainty. A conversation with a clinician may help when it is hard to control, spreads across many parts of life or starts interfering with everyday routines.",
          ],
          bullets: [
            "Worry feels hard to control and covers many areas of life",
            "Tension, headaches, stomach upset or a pounding heart without a clear explanation",
            "Difficulty switching off, concentrating or falling asleep",
            "Avoiding situations or tasks because of fear or ‘what if’ thoughts",
            "Anxiety is affecting work, relationships or daily routines",
          ],
        },
        {
          eyebrow: "Anxiety treatment in Dubai",
          heading: "A medical review can help",
          accent: "set the right focus.",
          paragraphs: [
            "Thyroid problems, anaemia, caffeine, some medicines and poor sleep can cause or worsen anxiety symptoms. Dr Fouzia can review your history and discuss whether any checks are appropriate before agreeing on next steps.",
          ],
          links: [
            { label: "Read about health marker reviews", href: "/health-marker-review" },
            { label: "Explore stress and sleep care", href: "/stress-sleep-nervous-system-health" },
          ],
        },
        {
          eyebrow: "Calm Mind Sessions for anxiety in Dubai",
          heading: "Learn to understand your",
          accent: "worry pattern.",
          paragraphs: [
            "Sessions can explore what triggers worry, how you respond and which habits may keep it going. Exercises are agreed together and practised between sessions, then reviewed so the plan can be adjusted.",
          ],
          bullets: [
            "Notice triggers, thoughts, feelings and responses",
            "Test anxious predictions and build a more balanced view",
            "Gradually face avoided situations at an agreed pace",
            "Practise tools for physical tension and make a plan for using them",
          ],
          links: [
            { label: "Explore Calm Mind Sessions for panic attacks", href: "/calm-mind-sessions-panic-attacks" },
            { label: "Explore Calm Mind Sessions for overthinking", href: "/calm-mind-sessions-overthinking" },
          ],
        },
        {
          eyebrow: "Who this suits",
          heading: "When worry starts to affect",
          accent: "everyday life.",
          paragraphs: [
            "A consultation may be worth exploring if persistent worry is affecting your sleep, concentration, work, relationships or routines. Calm Mind Sessions is not the right fit for every concern; Dr Fouzia can discuss other next steps if needed.",
          ],
        },
      ]}
      faqs={[
        {
          question: "Is worry the same as anxiety?",
          answer:
            "Worry can be a normal response to a concern. It may need more attention when it becomes excessive, difficult to control or interferes with daily life.",
        },
        {
          question: "How many sessions will I need?",
          answer:
            "It varies. Your plan can be reviewed with you regularly.",
        },
        {
          question: "Will I need medication?",
          answer:
            "Not necessarily. Dr Fouzia can discuss options with you and will not change your medicines without your agreement.",
        },
        {
          question: "Where do I start if I am not sure it is anxiety?",
          answer:
            "Book a consultation to talk through what is happening. Dr Fouzia can help you consider possible next steps.",
        },
      ]}
      safety={{
        text: "If you have thoughts of harming yourself or feel unable to keep yourself safe, get urgent help in the UAE now. Call",
        emergencyLinks: [
          { label: "998 for an ambulance", href: "tel:998" },
          { label: "999 for police", href: "tel:999" },
        ],
        closing: "or go to the nearest emergency department.",
      }}
      ctaTitle="Take the first step towards"
      ctaAccent="calmer thinking."
      ctaDescription="Talk it through with a doctor who has time to listen."
    />
  );
}
