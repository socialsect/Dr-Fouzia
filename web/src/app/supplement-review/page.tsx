import { ServicePage } from "@/components/layout/ServicePage";

export const metadata = {
  title: "Supplement Review",
  description:
    "Professional supplement review and optimisation in Dubai. Ensure your supplements are evidence-based, safe, and right for your specific health needs.",
};

export default function SupplementReviewPage() {
  return (
    <ServicePage
      eyebrow="Health Concern"
      title="Supplement Review"
      highlight="More supplements is not better health"
      description="Most people take supplements based on trends, not evidence. Some are unnecessary, some interact with medications, and some are simply wasted money. Dr. Fouzia reviews your current regimen against your lab results and health goals to ensure every supplement earns its place."
      bullets={[
        "Full review of current supplement regimen",
        "Interaction and safety screening",
        "Lab-guided supplement optimisation",
        "Removal of unnecessary or redundant supplements",
        "Evidence-based product recommendations",
        "Quality and bioavailability assessment",
      ]}
      cta={{ label: "Book a consultation", href: "/book-consultation" }}
      secondCta={{
        label: "Explore connected health",
        href: "/connected-health",
      }}
      relatedLinks={[
        { label: "Personalised Nutrition", href: "/personalised-nutrition" },
        { label: "Health Marker Review", href: "/health-marker-review" },
        { label: "Gut & Digestive Health", href: "/gut-digestive-health" },
      ]}
    />
  );
}
