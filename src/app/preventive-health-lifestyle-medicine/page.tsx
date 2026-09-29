import { ServicePage } from "@/components/layout/ServicePage";

export const metadata = {
  title: "Preventive Health & Lifestyle Medicine",
  description:
    "Proactive preventive health and lifestyle medicine in Dubai. Reduce disease risk, optimise wellbeing, and build resilience through evidence-based strategies.",
};

export default function PreventiveHealthLifestyleMedicinePage() {
  return (
    <ServicePage
      eyebrow="Health Concern"
      title="Preventive Health & Lifestyle Medicine"
      highlight="The best treatment is never needing it"
      description="Most chronic diseases develop silently over years before symptoms appear. Preventive health means catching risk factors early and using lifestyle as medicine — nutrition, movement, sleep, stress management, and connection — to build a body that resists disease and recovers quickly."
      bullets={[
        "Comprehensive preventive health screening",
        "Cardiovascular and metabolic risk assessment",
        "Lifestyle behaviour change coaching",
        "Movement and exercise prescription",
        "Stress and resilience building strategies",
        "Long-term health optimisation planning",
      ]}
      cta={{ label: "Book a consultation", href: "/book-consultation" }}
      secondCta={{
        label: "Explore connected health",
        href: "/connected-health",
      }}
      relatedLinks={[
        { label: "Health Marker Review", href: "/health-marker-review" },
        { label: "Healthy Aging & Longevity", href: "/healthy-aging-longevity" },
        { label: "Metabolic Health", href: "/metabolic-health-weight-management" },
      ]}
    />
  );
}
