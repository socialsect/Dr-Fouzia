import { ServicePage } from "@/components/layout/ServicePage";

export const metadata = {
  title: "Personalised Nutrition",
  description:
    "Tailored nutrition plans based on your unique biology. Functional medicine food strategies, elimination protocols, and microbiome support in Dubai.",
};

export default function PersonalisedNutritionPage() {
  return (
    <ServicePage
      eyebrow="Health Concern"
      title="Personalised Nutrition"
      highlight="No two bodies eat the same way"
      description="Generic diet advice fails because it ignores your individual biology — your gut health, genetics, inflammation markers, and metabolic profile. Dr. Fouzia uses functional testing to build a nutrition plan that is specific to your body, your goals, and your lifestyle."
      bullets={[
        "Food sensitivity and intolerance testing",
        "Gut microbiome-informed dietary guidance",
        "Anti-inflammatory nutrition protocols",
        "Blood sugar stabilisation through diet",
        "Mediterranean and whole-food dietary frameworks",
        "Practical meal planning for real life in Dubai",
      ]}
      cta={{ label: "Book a consultation", href: "/book-consultation" }}
      secondCta={{
        label: "Explore connected health",
        href: "/connected-health",
      }}
      relatedLinks={[
        { label: "Gut & Digestive Health", href: "/gut-digestive-health" },
        { label: "Metabolic Health", href: "/metabolic-health-weight-management" },
        { label: "Supplement Review", href: "/supplement-review" },
      ]}
    />
  );
}
