import { ServicePage } from "@/components/layout/ServicePage";

export const metadata = {
  title: "Fatigue, Low Energy & Brain Fog",
  description:
    "Root-cause evaluation for chronic fatigue, low energy, and brain fog in Dubai. Functional medicine testing and personalised treatment plans.",
};

export default function FatigueLowEnergyBrainFogPage() {
  return (
    <ServicePage
      eyebrow="Health Concern"
      title="Fatigue, Low Energy & Brain Fog"
      highlight="When tiredness becomes your normal"
      description="Persistent fatigue and brain fog are not age-appropriate or stress-inevitable. Thyroid dysfunction, nutrient deficiencies, blood sugar dysregulation, and chronic inflammation are common hidden drivers. Dr. Fouzia maps the full picture to help you reclaim energy and mental clarity."
      bullets={[
        "Comprehensive thyroid and metabolic panel",
        "Iron, B12, folate, and vitamin D assessment",
        "Blood sugar and insulin resistance screening",
        "Sleep quality evaluation",
        "Adrenal and stress-response assessment",
        "Targeted nutrition and supplement protocols",
      ]}
      cta={{ label: "Book a consultation", href: "/book-consultation" }}
      secondCta={{
        label: "Explore connected health",
        href: "/connected-health",
      }}
      relatedLinks={[
        { label: "Brain & Cognitive Wellness", href: "/brain-cognitive-wellness" },
        { label: "Metabolic Health", href: "/metabolic-health-weight-management" },
        { label: "Stress & Sleep Health", href: "/stress-sleep-nervous-system-health" },
      ]}
    />
  );
}
