import { ServicePage } from "@/components/layout/ServicePage";

export const metadata = {
  title: "Aesthetic Medicine Dubai | Dr. Fouzia",
  description:
    "Advanced aesthetic treatments in Dubai with Dr. Fouzia. Anti-wrinkle injections, dermal fillers, skin boosters, PRP, microneedling, and personalised facial aesthetics.",
};

export default function AestheticMedicinePage() {
  return (
    <ServicePage
      eyebrow="Aesthetic Medicine"
      title="Aesthetic Medicine"
      highlight="science-led beauty, delivered with precision"
      description="Dr. Fouzia's aesthetic medicine practice in Dubai combines medical expertise with an artistic eye to deliver natural, refined results. Every treatment is personalised to your unique facial anatomy, skin type, and aesthetic goals. From anti-wrinkle injections and dermal fillers to advanced skin rejuvenation and PRP therapies, Dr. Fouzia takes a less-is-more approach that enhances your features without looking artificial. All treatments are performed by Dr. Fouzia herself — a qualified medical doctor with specialist training in aesthetic medicine."
      bullets={[
        "All treatments performed by Dr. Fouzia — a qualified medical doctor",
        "Personalised treatment plans tailored to your facial anatomy",
        "Natural, subtle results that enhance — never overdo",
        "Anti-wrinkle injections, dermal fillers, and contouring",
        "Skin boosters, PRP, and microneedling for skin quality",
        "Comprehensive consultation before every procedure",
      ]}
      cta={{ label: "Book a consultation", href: "/book-consultation" }}
      secondCta={{ label: "View all treatments", href: "/aesthetic-medicine" }}
      relatedLinks={[
        { label: "Anti-Wrinkle Treatments", href: "/anti-wrinkle-treatments" },
        { label: "Dermal Fillers", href: "/dermal-fillers" },
        { label: "Skin Boosters", href: "/skin-boosters" },
        { label: "PRP Face", href: "/prp-face" },
        { label: "Microneedling", href: "/microneedling-dermapen" },
        { label: "Anti-Aging Consultation", href: "/anti-aging-aesthetic-consultation" },
      ]}
    />
  );
}
