import { ServicePage } from "@/components/layout/ServicePage";

export const metadata = {
  title: "Biological Age Reset",
  description:
    "Discover and reduce your biological age in Dubai. Advanced biomarker testing and personalised protocols to reverse biological aging.",
};

export default function BiologicalAgeResetPage() {
  return (
    <ServicePage
      eyebrow="Health Concern"
      title="Biological Age Reset"
      highlight="Your real age isn't the one on your ID"
      description="Biological age reflects how well your cells are actually functioning — and it can be different from your calendar age. Through advanced biomarker testing and targeted interventions, Dr. Fouzia helps identify where you are aging faster than necessary and designs protocols to slow, halt, or reverse that process."
      bullets={[
        "Advanced biological age biomarker testing",
        "Epigenetic and DNA methylation analysis",
        "Telomere length assessment",
        "Mitochondrial function evaluation",
        "Personalised anti-aging nutrition and supplementation",
        "Lifestyle protocols for cellular rejuvenation",
      ]}
      cta={{ label: "Book a consultation", href: "/book-consultation" }}
      secondCta={{
        label: "Explore connected health",
        href: "/connected-health",
      }}
      relatedLinks={[
        { label: "Healthy Aging & Longevity", href: "/healthy-aging-longevity" },
        { label: "Health Marker Review", href: "/health-marker-review" },
        { label: "Personalised Nutrition", href: "/personalised-nutrition" },
      ]}
    />
  );
}
