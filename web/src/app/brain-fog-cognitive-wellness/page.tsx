import { ServicePage } from "@/components/layout/ServicePage";

export const metadata = {
  title: "Brain Fog & Cognitive Wellness Programme | Dr. Fouzia Dubai",
  description:
    "Clear the fog and reclaim your focus. Dr. Fouzia's Brain Fog & Cognitive Wellness Programme in Dubai investigates and treats the root causes of cognitive fatigue.",
};

export default function BrainFogCognitiveWellnessPage() {
  return (
    <ServicePage
      eyebrow="Programme"
      title="Brain Fog & Cognitive Wellness"
      highlight="clarity, focus, and mental energy"
      description="Brain fog is not a diagnosis — it's a signal that something needs attention. Whether it's difficulty concentrating, forgetfulness, mental fatigue, or feeling 'switched off', Dr. Fouzia's Brain Fog & Cognitive Wellness Programme investigates the underlying causes — from nutritional deficiencies and gut health to sleep quality, stress, and hormonal imbalances. Combining functional medicine testing with cognitive strategies, this programme helps you restore mental clarity and perform at your best."
      bullets={[
        "Comprehensive assessment of cognitive function and lifestyle factors",
        "Testing for nutritional deficiencies, thyroid, and hormonal markers",
        "Gut health investigation (the gut-brain connection matters)",
        "Sleep quality assessment and optimisation",
        "CBT strategies for focus, mental stamina, and clarity",
        "Personalised plan targeting your specific cognitive concerns",
      ]}
      cta={{ label: "Book a consultation", href: "/book-consultation" }}
      secondCta={{ label: "Learn about our approach", href: "/our-approach" }}
      relatedLinks={[
        { label: "Gut-Brain Health Programme", href: "/gut-brain-health-program" },
        { label: "Stress, Sleep & Energy Reset", href: "/stress-sleep-energy-reset" },
        { label: "CBT for Overthinking", href: "/cbt-overthinking" },
        { label: "Healthy Aging & Biological Age Reset", href: "/healthy-aging-biological-age-reset" },
      ]}
    />
  );
}
