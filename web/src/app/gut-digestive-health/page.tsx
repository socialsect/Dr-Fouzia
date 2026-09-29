import { ServicePage } from "@/components/layout/ServicePage";

export const metadata = {
  title: "Gut & Digestive Health",
  description:
    "Comprehensive gut health assessment and treatment in Dubai. Address IBS, bloating, food intolerances, and microbiome imbalances with functional medicine.",
};

export default function GutDigestiveHealthPage() {
  return (
    <ServicePage
      eyebrow="Health Concern"
      title="Gut & Digestive Health"
      highlight="Your gut shapes your whole health"
      description="Digestive symptoms are rarely just about food. Bloating, IBS, reflux, and food intolerances often signal deeper imbalances in your microbiome, gut lining, or the gut-brain axis. Dr. Fouzia investigates the root cause — not just the symptom — to restore lasting digestive comfort."
      bullets={[
        "IBS, bloating, and constipation relief",
        "Food intolerance and sensitivity testing",
        "Microbiome analysis and targeted probiotic therapy",
        "Gut lining repair for leaky gut",
        "Reflux and SIBO management",
        "Gut-brain axis support for stress-related gut issues",
      ]}
      cta={{ label: "Book a consultation", href: "/book-consultation" }}
      secondCta={{
        label: "Explore connected health",
        href: "/connected-health",
      }}
      relatedLinks={[
        { label: "Personalised Nutrition", href: "/personalised-nutrition" },
        { label: "Supplement Review", href: "/supplement-review" },
        { label: "Stress & Sleep Health", href: "/stress-sleep-nervous-system-health" },
      ]}
    />
  );
}
