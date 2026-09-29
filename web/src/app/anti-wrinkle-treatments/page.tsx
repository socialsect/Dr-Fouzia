import { ServicePage } from "@/components/layout/ServicePage";

export const metadata = {
  title: "Anti-Wrinkle Treatments Dubai | Dr. Fouzia",
  description:
    "Anti-wrinkle injections in Dubai with Dr. Fouzia. Smooth fine lines and prevent new wrinkles with natural-looking, medically administered treatments.",
};

export default function AntiWrinkleTreatmentsPage() {
  return (
    <ServicePage
      eyebrow="Aesthetic Medicine"
      title="Anti-Wrinkle Treatments"
      highlight="smooth, refreshed, and naturally you"
      description="Anti-wrinkle treatments are one of the most popular and effective ways to reduce the appearance of fine lines and prevent deeper wrinkles from forming. Dr. Fouzia uses medical-grade botulinum toxin to gently relax the muscles responsible for expression lines — smoothing your skin while maintaining natural movement. Whether you're looking to soften crow's feet, forehead lines, or frown lines, every treatment is precisely tailored to your face for a subtle, refreshed result."
      bullets={[
        "Medical-grade botulinum toxin administered by Dr. Fouzia",
        "Targets forehead lines, frown lines, and crow's feet",
        "Preventative treatment to slow wrinkle formation",
        "Results in 3–14 days with minimal downtime",
        "Natural-looking — you'll look refreshed, not frozen",
        "Treatments spaced every 3–4 months for best results",
      ]}
      cta={{ label: "Book a consultation", href: "/book-consultation" }}
      secondCta={{ label: "View all treatments", href: "/aesthetic-medicine" }}
      relatedLinks={[
        { label: "Dermal Fillers", href: "/dermal-fillers" },
        { label: "Facial Contouring", href: "/facial-contouring" },
        { label: "Anti-Aging Consultation", href: "/anti-aging-aesthetic-consultation" },
        { label: "Skin Rejuvenation", href: "/skin-rejuvenation" },
      ]}
    />
  );
}
