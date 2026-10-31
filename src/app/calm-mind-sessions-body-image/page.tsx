import type { Metadata } from "next";
import { HealthConcernContent } from "@/components/layout/HealthConcernContent";

export const metadata: Metadata = {
  title: "Calm Mind Sessions for Body Image Dubai | Dr Fouzia Al Ali",
  description:
    "Struggling with how you see your body? Dr Fouzia offers Calm Mind Sessions for body image in Dubai, a supportive, step-by-step approach. Book a consultation.",
};

export default function CalmMindSessionsBodyImagePage() {
  return (
    <HealthConcernContent
      eyebrowLabel="Calm Mind Sessions"
      highlightsEyebrow="Body image therapy in Dubai"
      title="Calm Mind Sessions for Body Image"
      highlight="in Dubai"
      description="Change the way you see and treat yourself. Unhappiness with appearance can take up a great deal of mental space. It may mean checking mirrors, comparing yourself with others, avoiding photos or social events, or feeling that your worth depends on how you look. Dr Fouzia is a consultant family physician who offers Calm Mind Sessions for body image in Dubai. Sessions help you understand the thoughts and habits that keep body image concerns going, and practise ways of relating to yourself that are less harsh. People of any gender and age can struggle with this."
      highlightsTitle="How it"
      highlightsAccent="can look."
      highlights={[
        "Spending a lot of time thinking about a particular body part or your shape",
        "Checking, avoiding or covering up in mirrors, photos or clothes",
        "Comparing yourself with people in person or on social media",
        "Pulling back from friends, activities or intimacy because of how you feel",
        "Letting body worries shape what you eat, wear or do",
        "Feeling that others are judging how you look",
      ]}
      sections={[
        {
          eyebrow: "Self image therapy in Dubai",
          heading: "What sits",
          accent: "behind it.",
          paragraphs: [
            "Body image is shaped by many things, including past comments, social media, cultural ideals and how you feel generally. It is not a fixed fact about your body. It is a way of seeing, and it can change.",
          ],
        },
        {
          eyebrow: "Body image counselling in Dubai",
          heading: "What sessions",
          accent: "may cover.",
          paragraphs: [
            "Sessions are structured and practical, working through the thoughts and habits that keep body image concerns in place.",
          ],
          bullets: [
            "Mapping your pattern: the trigger, the thought, the feeling and the behaviour",
            "Noticing and testing critical thoughts about appearance",
            "Reducing checking, comparing and avoidance, gradually and at your pace",
            "Building a wider sense of who you are beyond appearance",
            "Practising self-compassion and kinder self-talk",
            "A plan to keep progress after sessions end",
          ],
        },
        {
          eyebrow: "Appearance anxiety therapy in Dubai",
          heading: "When worry about",
          accent: "looks is strong.",
          paragraphs: [
            "Some people experience intense, distressing preoccupation with a perceived flaw that others cannot see or find minor. If this is true for you, Dr Fouzia will talk it through carefully and tell you whether a specialist assessment would help.",
          ],
          links: [
            { label: "Calm Mind Sessions for self-esteem", href: "/calm-mind-sessions-self-esteem-confidence" },
            { label: "Calm Mind Sessions for emotional eating", href: "/calm-mind-sessions-emotional-eating" },
            { label: "Calm Mind Sessions for anxiety", href: "/calm-mind-sessions-anxiety" },
            { label: "Calm Mind Sessions for low mood", href: "/calm-mind-sessions-low-mood-depression" },
          ],
        },
      ]}
      faqs={[
        {
          question: "Is body image a vanity issue?",
          answer:
            "No. It is a common source of distress and can affect mental health and daily life.",
        },
        {
          question: "Do you work with eating problems?",
          answer:
            "Dr Fouzia will ask about eating and, if needed, suggest the right level of support.",
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
        text: "If you are restricting food, purging, exercising compulsively or feeling unable to stop, please tell a doctor soon. Urgent help is needed for fainting, chest pain, a very slow or irregular heartbeat, or thoughts of harming yourself. In the UAE, call",
        emergencyLinks: [
          { label: "998 for an ambulance", href: "tel:998" },
          { label: "999 for police", href: "tel:999" },
        ],
        closing: "or go to the nearest emergency department.",
      }}
      ctaTitle="Take the first step towards"
      ctaAccent="a kinder view of yourself."
      ctaDescription="Talk it through with a doctor who has time to listen."
    />
  );
}
