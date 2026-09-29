import { ServicePage } from "@/components/layout/ServicePage";

export const metadata = {
  title: "Overthinking Reset Programme | Dr. Fouzia Dubai",
  description:
    "Break free from cycles of overthinking and rumination with Dr. Fouzia's Overthinking Reset Programme in Dubai. Practical, evidence-based strategies for a quieter mind.",
};

export default function OverthinkingResetPage() {
  return (
    <ServicePage
      eyebrow="Programme"
      title="Overthinking Reset"
      highlight="quiet the noise in your mind"
      description="Overthinking can feel like a mental loop you can't escape — replaying conversations, worrying about the future, or getting stuck in self-criticism. Dr. Fouzia's Overthinking Reset Programme is designed to help you understand the patterns driving your rumination and build the skills to break free. Using a blend of CBT, mindfulness, and behavioural strategies, this programme gives you practical tools to quiet your mind and reclaim your time and energy."
      bullets={[
        "Identifies the triggers and patterns behind your overthinking",
        "Teaches CBT techniques to challenge repetitive thought loops",
        "Builds mindfulness skills for present-moment awareness",
        "Reduces mental fatigue and decision paralysis",
        "Includes journaling and self-reflection exercises",
        "Structured programme with measurable progress",
      ]}
      cta={{ label: "Book a consultation", href: "/book-consultation" }}
      secondCta={{ label: "Learn about our approach", href: "/our-approach" }}
      relatedLinks={[
        { label: "CBT for Overthinking", href: "/cbt-overthinking" },
        { label: "Stress Management", href: "/cbt-stress-management" },
        { label: "Brain Fog & Cognitive Wellness", href: "/brain-fog-cognitive-wellness" },
        { label: "Anxiety & Excessive Worry", href: "/cbt-anxiety" },
      ]}
    />
  );
}
