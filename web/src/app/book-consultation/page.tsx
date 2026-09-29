import { ServicePage } from "@/components/layout/ServicePage";

export const metadata = {
  title: "Book a Consultation | Dr. Fouzia Functional Medicine Dubai",
  description:
    "Schedule your functional medicine consultation with Dr. Fouzia in Dubai. Take the first step towards understanding your health and building a personalised plan for lasting wellbeing.",
};

export default function BookConsultationPage() {
  return (
    <ServicePage
      eyebrow="Get Started"
      title="Book Your Consultation"
      highlight="Your Health Journey Begins Here"
      description="A consultation with Dr. Fouzia is a thorough, unhurried conversation about your health. She will listen to your full health history, explore potential root causes, and begin building a clear, actionable plan tailored to you."
      bullets={[
        "Extended initial consultation to explore your full health picture",
        "Comprehensive review of symptoms, history, and lifestyle factors",
        "Guidance on relevant functional lab testing if indicated",
        "Personalised initial recommendations and next steps",
        "Supportive, judgement-free environment focused on your goals",
        "Follow-up plans to track progress and adjust protocols",
      ]}
      cta={{ label: "Book now", href: "/book-consultation" }}
      secondCta={{ label: "Learn about functional medicine", href: "/functional-medicine" }}
      relatedLinks={[
        { label: "FM Consultation", href: "/functional-medicine-consultation" },
        { label: "About Dr. Fouzia", href: "/about-dr-fouzia" },
        { label: "All Services", href: "/services" },
      ]}
    />
  );
}
