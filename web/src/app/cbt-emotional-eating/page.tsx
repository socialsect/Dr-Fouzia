import { ServicePage } from "@/components/layout/ServicePage";

export const metadata = {
  title: "CBT for Emotional Eating Dubai | Dr. Fouzia",
  description:
    "Cognitive Behavioural Therapy for emotional eating in Dubai. Dr. Fouzia helps you understand the connection between emotions and eating habits.",
};

export default function CBTEmotionalEatingPage() {
  return (
    <ServicePage
      eyebrow="Cognitive Behavioural Therapy"
      title="Emotional Eating"
      highlight="understand the connection between emotions and food"
      description="Emotional eating involves using food as a way to cope with difficult feelings — stress, boredom, sadness, loneliness, or anxiety — rather than eating in response to physical hunger. This pattern can lead to feelings of guilt, loss of control, and a cycle of restricting and overeating. CBT helps you understand the emotional triggers behind your eating habits, develop alternative coping strategies, and build a more mindful and balanced relationship with food."
      bullets={[
        "Identify the emotions that trigger eating episodes",
        "Develop alternative coping strategies for difficult feelings",
        "Distinguish between emotional and physical hunger",
        "Reduce guilt and shame around eating",
        "Build mindful eating habits and awareness",
        "Create sustainable, flexible approaches to food and body image",
      ]}
      cta={{ label: "Book a consultation", href: "/book-consultation" }}
      secondCta={{ label: "View all CBT services", href: "/cbt" }}
      relatedLinks={[
        { label: "Body Image & Self-Image", href: "/cbt-body-image" },
        { label: "Emotional Regulation", href: "/cbt-emotional-regulation" },
        { label: "Stress Management", href: "/cbt-stress-management" },
        { label: "Low Mood & Mild Depression", href: "/cbt-low-mood-depression" },
      ]}
    />
  );
}
