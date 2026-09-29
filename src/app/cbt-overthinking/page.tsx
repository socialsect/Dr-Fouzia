import { ServicePage } from "@/components/layout/ServicePage";

export const metadata = {
  title: "CBT for Overthinking & Rumination Dubai | Dr. Fouzia",
  description:
    "Cognitive Behavioural Therapy for overthinking and rumination in Dubai. Stop getting stuck in repetitive negative thought cycles with Dr. Fouzia.",
};

export default function CBTOverthinkingPage() {
  return (
    <ServicePage
      eyebrow="Cognitive Behavioural Therapy"
      title="Overthinking & Rumination"
      highlight="break free from repetitive thought loops"
      description="Overthinking and rumination involve getting stuck in repetitive, often negative, thought loops that drain your mental energy and interfere with daily functioning. You may find yourself replaying past events, worrying about the future, or struggling to make decisions. CBT helps you recognise these patterns and develop the skills to shift your focus, engage with the present, and respond more flexibly to difficult thoughts and feelings."
      bullets={[
        "Identify triggers that lead to rumination cycles",
        "Learn techniques to interrupt repetitive thinking",
        "Develop decision-making confidence",
        "Reduce mental exhaustion and fatigue",
        "Practice mindfulness-based attention skills",
        "Build a more balanced and constructive thinking style",
      ]}
      cta={{ label: "Book a consultation", href: "/book-consultation" }}
      secondCta={{ label: "View all CBT services", href: "/cbt" }}
      relatedLinks={[
        { label: "Anxiety & Excessive Worry", href: "/cbt-anxiety" },
        { label: "Low Mood & Mild Depression", href: "/cbt-low-mood-depression" },
        { label: "Emotional Regulation", href: "/cbt-emotional-regulation" },
        { label: "Perfectionism & Procrastination", href: "/cbt-perfectionism-procrastination" },
      ]}
    />
  );
}
