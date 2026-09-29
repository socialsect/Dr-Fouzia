import { ServicePage } from "@/components/layout/ServicePage";

export const metadata = {
  title: "Skin & Hair Health",
  description:
    "Address skin and hair concerns from the inside out. Functional medicine approach to acne, eczema, hair loss, and premature aging in Dubai.",
};

export default function SkinHairHealthPage() {
  return (
    <ServicePage
      eyebrow="Health Concern"
      title="Skin & Hair Health"
      highlight="Glowing skin and strong hair start inside"
      description="Skin and hair problems are often external reflections of internal imbalances — gut health, hormonal fluctuations, nutrient deficiencies, and chronic inflammation. Dr. Fouzia investigates the root cause so your skin and hair can thrive from within, not just on the surface."
      bullets={[
        "Acne, eczema, and rosacea root-cause investigation",
        "Hormonal skin and hair loss assessment",
        "Nutrient testing for skin and hair health",
        "Gut-skin axis evaluation",
        "Anti-inflammatory and collagen-support protocols",
        "Evidence-based skincare and supplement guidance",
      ]}
      cta={{ label: "Book a consultation", href: "/book-consultation" }}
      secondCta={{
        label: "Explore connected health",
        href: "/connected-health",
      }}
      relatedLinks={[
        { label: "Women's Hormonal Health", href: "/womens-hormonal-health" },
        { label: "Gut & Digestive Health", href: "/gut-digestive-health" },
        { label: "Personalised Nutrition", href: "/personalised-nutrition" },
      ]}
    />
  );
}
