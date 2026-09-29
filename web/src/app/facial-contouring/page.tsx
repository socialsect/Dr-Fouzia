import { ServicePage } from "@/components/layout/ServicePage";

export const metadata = {
  title: "Facial Contouring Dubai | Dr. Fouzia",
  description:
    "Non-surgical facial contouring in Dubai with Dr. Fouzia. Sculpt and define your facial features with expertly placed dermal fillers and advanced techniques.",
};

export default function FacialContouringPage() {
  return (
    <ServicePage
      eyebrow="Aesthetic Medicine"
      title="Facial Contouring"
      highlight="sculpted definition without surgery"
      description="Facial contouring with Dr. Fouzia is a non-surgical approach to enhancing your facial structure and achieving better balance and proportion. Using dermal fillers placed with precision at key anatomical points, Dr. Fouzia can define your jawline, sharpen your chin, lift your cheeks, and create a more harmonious facial profile — all without surgery, incisions, or extended downtime. Every treatment plan is customised to complement your unique bone structure and features."
      bullets={[
        "Non-surgical jawline and chin definition",
        "Cheek augmentation for lift and structure",
        "Temple restoration for a balanced facial profile",
        "Nose reshaping with non-surgical rhinoplasty techniques",
        "Tailored to your facial anatomy and proportions",
        "Immediate results with minimal recovery time",
      ]}
      cta={{ label: "Book a consultation", href: "/book-consultation" }}
      secondCta={{ label: "View all treatments", href: "/aesthetic-medicine" }}
      relatedLinks={[
        { label: "Dermal Fillers", href: "/dermal-fillers" },
        { label: "Anti-Wrinkle Treatments", href: "/anti-wrinkle-treatments" },
        { label: "Anti-Aging Consultation", href: "/anti-aging-aesthetic-consultation" },
        { label: "Skin Rejuvenation", href: "/skin-rejuvenation" },
      ]}
    />
  );
}
