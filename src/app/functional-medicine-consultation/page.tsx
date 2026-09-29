import { ServicePage } from "@/components/layout/ServicePage";

export const metadata = {
  title: "Functional Medicine Consultation | Dr. Fouzia Dubai",
  description:
    "Book a dedicated functional medicine consultation with Dr. Fouzia in Dubai. In-depth assessment, advanced lab testing guidance, and a personalised protocol to restore your health.",
};

export default function FunctionalMedicineConsultationPage() {
  return (
    <ServicePage
      eyebrow="The Consultation"
      title="Functional Medicine Consultation"
      highlight="In-Depth, Unhurried, Personalised"
      description="The functional medicine consultation goes beyond a standard appointment. Dr. Fouzia takes the time to understand your complete health history, identify patterns, and develop a targeted plan to address the underlying imbalances driving your symptoms."
      bullets={[
        "Extended appointment allowing thorough exploration of your health",
        "Detailed review of symptoms, medical history, and lifestyle factors",
        "Assessment of hormonal, metabolic, gut, and immune function",
        "Recommendations for functional lab testing where appropriate",
        "Clear, actionable initial protocol covering nutrition and lifestyle",
        "Scheduled follow-up to review results and refine your plan",
      ]}
      cta={{ label: "Book a consultation", href: "/book-consultation" }}
      secondCta={{ label: "What is functional medicine?", href: "/functional-medicine" }}
      relatedLinks={[
        { label: "About Dr. Fouzia", href: "/about-dr-fouzia" },
        { label: "All Services", href: "/services" },
      ]}
    />
  );
}
