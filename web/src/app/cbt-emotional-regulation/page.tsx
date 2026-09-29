import { ServicePage } from "@/components/layout/ServicePage";

export const metadata = {
  title: "CBT for Emotional Regulation Dubai | Dr. Fouzia",
  description:
    "Cognitive Behavioural Therapy for emotional regulation difficulties in Dubai. Dr. Fouzia helps you understand, manage, and express emotions more effectively.",
};

export default function CBTEmotionalRegulationPage() {
  return (
    <ServicePage
      eyebrow="Cognitive Behavioural Therapy"
      title="Emotional Regulation"
      highlight="understand and manage your emotions"
      description="Difficulty regulating emotions can manifest as intense mood swings, difficulty calming down after being upset, emotional outbursts, or feeling overwhelmed by everyday experiences. You may find that your emotional reactions feel disproportionate to the situation, or that you suppress your feelings until they build up. CBT helps you develop a greater understanding of your emotional patterns, learn practical strategies to manage intense feelings, and respond to situations with greater balance and clarity."
      bullets={[
        "Understand the function and triggers of intense emotions",
        "Develop strategies to manage anger, frustration, and distress",
        "Learn to identify and label emotions accurately",
        "Reduce emotional reactivity through cognitive reappraisal",
        "Build tolerance for uncomfortable feelings",
        "Express emotions more effectively in relationships",
      ]}
      cta={{ label: "Book a consultation", href: "/book-consultation" }}
      secondCta={{ label: "View all CBT services", href: "/cbt" }}
      relatedLinks={[
        { label: "Anxiety & Excessive Worry", href: "/cbt-anxiety" },
        { label: "Low Mood & Mild Depression", href: "/cbt-low-mood-depression" },
        { label: "Stress Management", href: "/cbt-stress-management" },
        { label: "Self-Esteem & Confidence", href: "/cbt-self-esteem-confidence" },
      ]}
    />
  );
}
