import { ServicePage } from "@/components/layout/ServicePage";

export const metadata = {
  title: "Healthy Aging & Longevity",
  description:
    "Proactive healthy aging and longevity strategies in Dubai. Functional medicine approaches to cellular health, hormone balance, and disease prevention.",
};

export default function HealthyAgingLongevityPage() {
  return (
    <ServicePage
      eyebrow="Health Concern"
      title="Healthy Aging & Longevity"
      highlight="Aging well is a skill you can learn"
      description="Aging is inevitable — but declining health is not. Cellular maintenance, hormonal balance, muscle preservation, and cognitive protection all respond to targeted intervention. Dr. Fouzia builds personalised longevity plans that keep you strong, sharp, and vibrant for decades."
      bullets={[
        "Hormone optimisation for midlife and beyond",
        "Muscle mass and bone density preservation",
        "Cellular health and mitochondrial support",
        "Cognitive decline prevention strategies",
        "Cardiovascular and metabolic risk reduction",
        "Sleep and recovery optimisation",
      ]}
      cta={{ label: "Book a consultation", href: "/book-consultation" }}
      secondCta={{
        label: "Explore connected health",
        href: "/connected-health",
      }}
      relatedLinks={[
        { label: "Biological Age Reset", href: "/biological-age-reset" },
        { label: "Brain & Cognitive Wellness", href: "/brain-cognitive-wellness" },
        { label: "Health Marker Review", href: "/health-marker-review" },
      ]}
    />
  );
}
