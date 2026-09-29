import { ServicePage } from "@/components/layout/ServicePage";

export const metadata = {
  title: "Brain & Cognitive Wellness",
  description:
    "Brain fog, memory lapses, and focus issues addressed through functional medicine in Dubai. Nutritional, metabolic, and lifestyle strategies for cognitive health.",
};

export default function BrainCognitiveWellnessPage() {
  return (
    <ServicePage
      eyebrow="Health Concern"
      title="Brain & Cognitive Wellness"
      highlight="A sharp mind starts with the right foundations"
      description="Cognitive issues like brain fog, poor concentration, and memory lapses are signals — not sentences. Nutrient deficiencies, blood sugar instability, chronic inflammation, and sleep disruption are all modifiable drivers. Dr. Fouzia targets the root causes to help you think clearly and perform at your best."
      bullets={[
        "Comprehensive cognitive health assessment",
        "Nutrient testing for brain function (B12, omega-3, iron)",
        "Blood sugar and metabolic brain support",
        "Sleep and stress impact evaluation",
        "Anti-inflammatory and neuroprotective nutrition",
        "Personalised supplement and lifestyle protocols",
      ]}
      cta={{ label: "Book a consultation", href: "/book-consultation" }}
      secondCta={{
        label: "Explore connected health",
        href: "/connected-health",
      }}
      relatedLinks={[
        { label: "Fatigue & Brain Fog", href: "/fatigue-low-energy-brain-fog" },
        { label: "Stress & Sleep Health", href: "/stress-sleep-nervous-system-health" },
        { label: "Healthy Aging", href: "/healthy-aging-longevity" },
      ]}
    />
  );
}
