import { ServicePage } from "@/components/layout/ServicePage";

export const metadata = {
  title: "Functional Medicine | Dr. Fouzia Dubai",
  description:
    "Discover functional medicine with Dr. Fouzia in Dubai — a root-cause approach to chronic health that looks beyond symptoms to restore balance and long-term wellbeing.",
};

export default function FunctionalMedicinePage() {
  return (
    <ServicePage
      eyebrow="The Approach"
      title="Functional Medicine"
      highlight="Root-Cause, Patient-Centred Care"
      description="Functional medicine asks why an illness has occurred, not just what disease has developed. By investigating the interconnected systems of the body — and the unique factors that influence your health — it enables targeted, effective care that addresses the source of the problem."
      bullets={[
        "Focus on identifying and addressing root causes of chronic illness",
        "Systems-based approach connecting gut, hormones, immune, and metabolism",
        "Advanced functional lab testing for deeper diagnostic insight",
        "Personalised treatment plans combining nutrition, lifestyle, and supplements",
        "Emphasis on prevention, not just management of disease",
        "Collaborative partnership between practitioner and patient",
      ]}
      cta={{ label: "Book a consultation", href: "/book-consultation" }}
      secondCta={{ label: "About Dr. Fouzia", href: "/about-dr-fouzia" }}
      relatedLinks={[
        { label: "FM Consultation", href: "/functional-medicine-consultation" },
        { label: "All Services", href: "/services" },
      ]}
    />
  );
}
