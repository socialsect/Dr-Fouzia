import { ServicePage } from "@/components/layout/ServicePage";

export const metadata = {
  title: "CBT for Low Mood & Mild Depression Dubai | Dr. Fouzia",
  description:
    "Cognitive Behavioural Therapy for low mood and mild depression in Dubai. Dr. Fouzia helps you rediscover motivation and build a more fulfilling life.",
};

export default function CBTLowMoodDepressionPage() {
  return (
    <ServicePage
      eyebrow="Cognitive Behavioural Therapy"
      title="Low Mood & Mild Depression"
      highlight="rediscover motivation and joy"
      description="Low mood and mild depression can make everyday tasks feel exhausting, drain your interest in activities you once enjoyed, and leave you feeling disconnected from the people and goals that matter most. CBT is one of the most effective treatments for depression, helping you identify and shift the negative thought patterns and behavioural habits that maintain low mood. Dr. Fouzia provides a compassionate, structured approach to help you regain a sense of purpose and wellbeing."
      bullets={[
        "Identify the thoughts and behaviours that maintain low mood",
        "Rebuild motivation through behavioural activation",
        "Develop a more balanced and compassionate inner dialogue",
        "Restore interest in meaningful activities and relationships",
        "Learn to manage setbacks and prevent relapse",
        "Build practical skills for long-term emotional wellbeing",
      ]}
      cta={{ label: "Book a consultation", href: "/book-consultation" }}
      secondCta={{ label: "View all CBT services", href: "/cbt" }}
      relatedLinks={[
        { label: "Overthinking & Rumination", href: "/cbt-overthinking" },
        { label: "Self-Esteem & Confidence", href: "/cbt-self-esteem-confidence" },
        { label: "Emotional Regulation", href: "/cbt-emotional-regulation" },
        { label: "Sleep Difficulties & Insomnia", href: "/cbt-sleep-insomnia" },
      ]}
    />
  );
}
