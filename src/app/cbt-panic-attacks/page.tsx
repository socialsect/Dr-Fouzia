import { ServicePage } from "@/components/layout/ServicePage";

export const metadata = {
  title: "CBT for Panic Attacks Dubai | Dr. Fouzia",
  description:
    "Specialised Cognitive Behavioural Therapy for panic attacks in Dubai. Learn to understand, manage, and overcome panic with Dr. Fouzia's expert guidance.",
};

export default function CBTPanicAttacksPage() {
  return (
    <ServicePage
      eyebrow="Cognitive Behavioural Therapy"
      title="Panic Attacks"
      highlight="understand and overcome panic"
      description="Panic attacks can be terrifying — the sudden onset of intense fear, racing heart, shortness of breath, dizziness, and a overwhelming sense of losing control. Many people develop a fear of panic itself, leading to avoidance of situations where they worry another attack might occur. CBT is the gold-standard treatment for panic, helping you understand the mechanics of panic, break the cycle of fear, and gradually reclaim the activities and places you have been avoiding."
      bullets={[
        "Understand the physiology of panic and why it happens",
        "Learn breathing and grounding techniques for acute episodes",
        "Challenge catastrophic misinterpretations of bodily sensations",
        "Gradually reduce avoidance of panic-triggering situations",
        "Build confidence in your ability to cope",
        "Prevent future panic episodes through sustained practice",
      ]}
      cta={{ label: "Book a consultation", href: "/book-consultation" }}
      secondCta={{ label: "View all CBT services", href: "/cbt" }}
      relatedLinks={[
        { label: "Anxiety & Excessive Worry", href: "/cbt-anxiety" },
        { label: "Health Anxiety", href: "/cbt-health-anxiety" },
        { label: "Stress Management", href: "/cbt-stress-management" },
        { label: "Emotional Regulation", href: "/cbt-emotional-regulation" },
      ]}
    />
  );
}
