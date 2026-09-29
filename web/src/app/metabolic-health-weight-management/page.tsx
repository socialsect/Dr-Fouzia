import { ServicePage } from "@/components/layout/ServicePage";

export const metadata = {
  title: "Metabolic Health & Weight Management",
  description:
    "Evidence-based metabolic health and weight management in Dubai. Address insulin resistance, blood sugar, and lipid markers through functional medicine.",
};

export default function MetabolicHealthWeightManagementPage() {
  return (
    <ServicePage
      eyebrow="Health Concern"
      title="Metabolic Health & Weight Management"
      highlight="Beyond the scale — metabolic balance"
      description="Weight management is a metabolic issue, not a willpower issue. Insulin resistance, inflammation, thyroid function, and gut health all influence your body's set point. Dr. Fouzia looks at the full metabolic picture to help you achieve sustainable, healthy weight loss."
      bullets={[
        "Insulin resistance and HbA1c screening",
        "Comprehensive lipid and cholesterol panel",
        "Thyroid function and metabolic rate assessment",
        "Body composition analysis",
        "Anti-inflammatory nutrition planning",
        "Sustainable lifestyle behaviour change",
      ]}
      cta={{ label: "Book a consultation", href: "/book-consultation" }}
      secondCta={{
        label: "Explore connected health",
        href: "/connected-health",
      }}
      relatedLinks={[
        { label: "Personalised Nutrition", href: "/personalised-nutrition" },
        { label: "Healthy Aging", href: "/healthy-aging-longevity" },
        { label: "Health Marker Review", href: "/health-marker-review" },
      ]}
    />
  );
}
