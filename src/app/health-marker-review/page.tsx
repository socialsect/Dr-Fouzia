import { ServicePage } from "@/components/layout/ServicePage";

export const metadata = {
  title: "Health Marker Review",
  description:
    "In-depth health marker review in Dubai. Go beyond standard blood tests with functional medicine analysis of your complete health picture.",
};

export default function HealthMarkerReviewPage() {
  return (
    <ServicePage
      eyebrow="Health Concern"
      title="Health Marker Review"
      highlight="Know what your numbers actually mean"
      description="Standard blood tests often miss early dysfunction because they use broad 'normal' ranges. Dr. Fouzia reviews your full health marker profile — including optimal-range values — to catch problems before they become symptoms and to track your progress with precision."
      bullets={[
        "Comprehensive blood panel interpretation",
        "Optimal vs. standard reference range analysis",
        "Cardiovascular and metabolic risk markers",
        "Thyroid, iron, and vitamin status review",
        "Inflammation and immune function markers",
        "Trending and tracking over time",
      ]}
      cta={{ label: "Book a consultation", href: "/book-consultation" }}
      secondCta={{
        label: "Explore connected health",
        href: "/connected-health",
      }}
      relatedLinks={[
        { label: "Biological Age Reset", href: "/biological-age-reset" },
        { label: "Healthy Aging", href: "/healthy-aging-longevity" },
        { label: "Metabolic Health", href: "/metabolic-health-weight-management" },
      ]}
    />
  );
}
