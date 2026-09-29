import { ServicePage } from "@/components/layout/ServicePage";

export const metadata = {
  title: "Inside-Out Skin Wellness Programme | Dr. Fouzia Dubai",
  description:
    "True skin health starts from within. Dr. Fouzia's Inside-Out Skin Wellness Programme combines functional medicine and dermatological insights for radiant, healthy skin in Dubai.",
};

export default function InsideOutSkinWellnessPage() {
  return (
    <ServicePage
      eyebrow="Programme"
      title="Inside-Out Skin Wellness"
      highlight="radiant skin starts from within"
      description="Your skin reflects your internal health. Dr. Fouzia's Inside-Out Skin Wellness Programme investigates the hormonal, nutritional, gut health, and stress factors that influence your skin from the inside. Rather than relying solely on topical treatments, this programme addresses the root causes of skin concerns like acne, rosacea, pigmentation, premature aging, and dullness — combining functional medicine testing with personalised nutrition, lifestyle strategies, and CBT for stress-related skin conditions."
      bullets={[
        "Functional testing for hormonal, nutritional, and gut-related skin triggers",
        "Personalised nutrition plan for skin health and repair",
        "Stress management for cortisol-driven skin conditions",
        "Addresses acne, rosacea, pigmentation, and premature aging",
        "Gut health optimisation for clearer, healthier skin",
        "Complements aesthetic treatments for lasting results",
      ]}
      cta={{ label: "Book a consultation", href: "/book-consultation" }}
      secondCta={{ label: "Learn about our approach", href: "/our-approach" }}
      relatedLinks={[
        { label: "Aesthetic Medicine", href: "/aesthetic-medicine" },
        { label: "Skin Rejuvenation", href: "/skin-rejuvenation" },
        { label: "Gut-Brain Health Programme", href: "/gut-brain-health-program" },
        { label: "Healthy Aging & Biological Age Reset", href: "/healthy-aging-biological-age-reset" },
      ]}
    />
  );
}
