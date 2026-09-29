import { ServicePage } from "@/components/layout/ServicePage";

export const metadata = {
  title: "Services | Dr. Fouzia Functional Medicine Dubai",
  description:
    "Explore the full range of functional medicine services offered by Dr. Fouzia in Dubai — from comprehensive consultations to targeted hormone, gut, and metabolic health programmes.",
};

export default function ServicesPage() {
  return (
    <ServicePage
      eyebrow="What We Offer"
      title="Our Services"
      highlight="Tailored to You"
      description="Every service is designed around understanding your unique health story. Using advanced functional testing and personalised protocols, Dr. Fouzia addresses root causes rather than masking symptoms — helping you build a foundation for long-term health."
      bullets={[
        "Comprehensive functional medicine consultations",
        "Hormone health assessment and optimisation",
        "Thyroid evaluation and management",
        "Gut health and microbiome analysis",
        "Metabolic health and blood sugar balance",
        "Adrenal and stress response support",
        "Nutritional deficiency testing and correction",
        "Personalised supplement and lifestyle plans",
      ]}
      cta={{ label: "Book a consultation", href: "/book-consultation" }}
      relatedLinks={[
        { label: "About Dr. Fouzia", href: "/about-dr-fouzia" },
        { label: "Functional Medicine", href: "/functional-medicine" },
        { label: "FM Consultation", href: "/functional-medicine-consultation" },
      ]}
    />
  );
}
