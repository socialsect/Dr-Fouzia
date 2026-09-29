import { ServicePage } from "@/components/layout/ServicePage";

export const metadata = {
  title: "About Dr. Fouzia | Functional Medicine Dubai",
  description:
    "Learn about Dr. Fouzia's approach to functional medicine, her expertise in hormone health, gut health, and personalised patient care in Dubai.",
};

export default function AboutDrFouziaPage() {
  return (
    <ServicePage
      eyebrow="Meet Your Doctor"
      title="About Dr. Fouzia"
      highlight="Functional & Integrative Medicine"
      description="Dr. Fouzia is a functional medicine practitioner dedicated to uncovering the root causes of chronic health concerns. Combining evidence-based medicine with a personalised, patient-centred approach, she helps individuals in Dubai restore balance and achieve lasting wellbeing."
      bullets={[
        "Specialised in hormone health, thyroid, and metabolic balance",
        "Expertise in gut health, food sensitivities, and digestive disorders",
        "Focus on stress, adrenal function, and sleep optimisation",
        "Evidence-based use of functional lab testing and biomarkers",
        "Collaborative care with nutrition, lifestyle, and supplement protocols",
        "Dedicated to empowering patients with knowledge and sustainable habits",
      ]}
      cta={{ label: "Book a consultation", href: "/book-consultation" }}
      secondCta={{ label: "Explore services", href: "/services" }}
      relatedLinks={[
        { label: "Functional Medicine", href: "/functional-medicine" },
        { label: "FM Consultation", href: "/functional-medicine-consultation" },
        { label: "All Services", href: "/services" },
      ]}
    />
  );
}
