import type { Metadata } from "next";
import { HealthConcernContent } from "@/components/layout/HealthConcernContent";

export const metadata: Metadata = {
  title: "Calm Mind Sessions Dubai | Cognitive Behavioural Therapy | Dr Fouzia",
  description:
    "Looking for Calm Mind Sessions in Dubai? Dr Fouzia, a consultant family physician, offers structured sessions to explore worry, stress, sleep and mood.",
};

export default function CalmMindSessionsPage() {
  return (
    <HealthConcernContent
      eyebrowLabel="Cognitive behavioural therapy"
      highlightsEyebrow="A practical, collaborative approach"
      title="Calm Mind Sessions in Dubai"
      highlight="Practical skills for how you think and cope"
      description="Cognitive behavioural therapy, or Calm Mind Sessions, is a structured talking therapy. Sessions look at how your thoughts, feelings, body sensations and actions affect each other, and at habits that may keep a problem going. Dr Fouzia is a consultant family physician who offers Calm Mind Sessions in Dubai. She can also review physical factors such as sleep, medicines or other health concerns while you practise skills between sessions."
      highlightsTitle="Work together on"
      highlightsAccent="useful next steps."
      highlights={[
        "A first conversation to hear your story and agree what you want to work on",
        "Clear, time-limited goals reviewed along the way",
        "A look at how thoughts, feelings, body sensations and actions connect",
        "Practical exercises such as thought records and activity planning",
        "Gradual exposure to feared situations when it is appropriate and agreed",
        "Regular reviews of what is helping and what may need to change",
      ]}
      sections={[
        {
          eyebrow: "What happens at your first session",
          heading: "Start with your story and a",
          accent: "shared plan.",
          paragraphs: [
            "The first session is a chance to explain what has been troubling you and what you would like to change. Dr Fouzia can ask about your symptoms and relevant medical factors, then discuss goals and whether Calm Mind Sessions seems like a suitable next step.",
          ],
          bullets: [
            "Talk about what is troubling you and how long it has been happening",
            "Complete a short questionnaire and review relevant medical factors",
            "Agree on goals and a plan to review your progress",
          ],
        },
        {
          eyebrow: "Cognitive behavioural therapy in Dubai",
          heading: "Choose support for what",
          accent: "you are facing.",
          paragraphs: [
            "Explore the pages below to learn how Calm Mind Sessions may be used for different concerns. A first conversation can help identify what feels most relevant to you.",
          ],
          links: [
            { label: "Anxiety and excessive worry", href: "/calm-mind-sessions-anxiety" },
            { label: "Overthinking and rumination", href: "/calm-mind-sessions-overthinking" },
            { label: "Stress management", href: "/calm-mind-sessions-stress-management" },
            { label: "Panic attacks", href: "/calm-mind-sessions-panic-attacks" },
            { label: "Low mood and mild depression", href: "/calm-mind-sessions-low-mood-depression" },
            { label: "Health anxiety", href: "/calm-mind-sessions-health-anxiety" },
            { label: "Sleep difficulties and insomnia", href: "/calm-mind-sessions-sleep-insomnia" },
            { label: "Self-esteem and confidence", href: "/calm-mind-sessions-self-esteem-confidence" },
            { label: "Emotional regulation", href: "/calm-mind-sessions-emotional-regulation" },
            { label: "Perfectionism and procrastination", href: "/calm-mind-sessions-perfectionism-procrastination" },
            { label: "Body image and self-image", href: "/calm-mind-sessions-body-image" },
            { label: "Emotional eating", href: "/calm-mind-sessions-emotional-eating" },
            { label: "Work stress and burnout", href: "/calm-mind-sessions-burnout-work-stress" },
            { label: "Life transitions", href: "/calm-mind-sessions-life-transitions" },
          ],
        },
        {
          eyebrow: "Calm Mind Sessions treatment in Dubai",
          heading: "Practical work focused on",
          accent: "what matters now.",
          paragraphs: [
            "Calm Mind Sessions often focuses on current patterns and practical changes rather than reviewing your whole life history. It is not the right fit for every concern. If a different kind of support may suit you better, Dr Fouzia can discuss options and next steps.",
          ],
          links: [
            { label: "About Dr Fouzia", href: "/about-dr-fouzia" },
            { label: "Explore stress and sleep care", href: "/stress-sleep-nervous-system-health" },
          ],
        },
      ]}
      faqs={[
        {
          question: "What is Calm Mind Sessions?",
          answer:
            "Calm Mind Sessions is a structured talking therapy that helps you notice how thoughts, feelings and behaviour affect one another, then practise practical ways to respond to difficult situations.",
        },
        {
          question: "What might I do between sessions?",
          answer:
            "You may try an exercise agreed with your clinician, such as a thought record or activity plan, then discuss what you noticed at the next review.",
        },
        {
          question: "How many sessions will I need?",
          answer:
            "It varies by person and concern. Your plan can be reviewed with you as you go.",
        },
      ]}
      safety={{
        text: "Calm Mind Sessions is not an emergency service. If you may harm yourself or cannot keep yourself safe, get urgent help in the UAE now. Call",
        emergencyLinks: [
          { label: "998 for an ambulance", href: "tel:998" },
          { label: "999 for police", href: "tel:999" },
        ],
        closing: "or go to the nearest emergency department.",
      }}
      ctaTitle="Book a first conversation"
      ctaAccent="about Calm Mind Sessions."
      ctaDescription="Talk through what you are facing with a doctor who has time to listen."
    />
  );
}
