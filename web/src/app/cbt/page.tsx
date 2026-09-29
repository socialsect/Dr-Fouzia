import { ServicePage } from "@/components/layout/ServicePage";

export const metadata = {
  title: "Cognitive Behavioural Therapy (CBT) Dubai | Dr. Fouzia",
  description:
    "Evidence-based Cognitive Behavioural Therapy in Dubai with Dr. Fouzia. CBT helps you identify and change unhelpful thought patterns and behaviours.",
};

export default function CBTPage() {
  return (
    <ServicePage
      eyebrow="Cognitive Behavioural Therapy"
      title="Cognitive Behavioural Therapy"
      highlight="for lasting change"
      description="Cognitive Behavioural Therapy (CBT) is one of the most extensively researched and effective forms of psychotherapy available today. It is a structured, collaborative approach that helps you understand the connection between your thoughts, emotions, and behaviours. At our Dubai practice, Dr. Fouzia uses CBT to help clients develop practical skills to manage a wide range of psychological difficulties, from anxiety and depression to stress, sleep problems, and low self-esteem."
      bullets={[
        "Identifies and challenges unhelpful thinking patterns",
        "Builds practical coping strategies you can use daily",
        "Structured sessions with measurable progress",
        "Effective for anxiety, depression, stress, insomnia, and more",
        "Time-limited therapy focused on your specific goals",
        "Supported by decades of scientific research",
      ]}
      cta={{ label: "Book a consultation", href: "/book-consultation" }}
      secondCta={{ label: "Learn about our approach", href: "/our-approach" }}
      relatedLinks={[
        { label: "Anxiety & Excessive Worry", href: "/cbt-anxiety" },
        { label: "Overthinking & Rumination", href: "/cbt-overthinking" },
        { label: "Stress Management", href: "/cbt-stress-management" },
        { label: "Panic Attacks", href: "/cbt-panic-attacks" },
        { label: "Low Mood & Mild Depression", href: "/cbt-low-mood-depression" },
      ]}
    />
  );
}
