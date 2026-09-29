import { ServicePage } from "@/components/layout/ServicePage";

export const metadata = {
  title: "PRP Face Treatment Dubai | Dr. Fouzia",
  description:
    "Platelet-Rich Plasma (PRP) facial treatments in Dubai with Dr. Fouzia. Harness your body's own growth factors for natural skin rejuvenation and collagen stimulation.",
};

export default function PRPFacePage() {
  return (
    <ServicePage
      eyebrow="Aesthetic Medicine"
      title="PRP Face"
      highlight="your body's own healing power, concentrated"
      description="PRP (Platelet-Rich Plasma) facial treatment uses your own blood's growth factors to rejuvenate your skin naturally. A small blood sample is drawn and centrifuged to concentrate the platelets and growth factors, which are then injected or applied to your skin via microneedling. This stimulates collagen production, improves skin texture, and promotes a healthier, more youthful complexion — all using your body's own biology, with no risk of allergic reaction."
      bullets={[
        "Uses your own blood — completely natural, no risk of reaction",
        "Stimulates collagen and elastin production",
        "Improves skin texture, tone, and elasticity",
        "Reduces fine lines, acne scars, and pigmentation",
        "Can be combined with microneedling for enhanced results",
        "Minimal downtime — return to activities within 1–2 days",
      ]}
      cta={{ label: "Book a consultation", href: "/book-consultation" }}
      secondCta={{ label: "View all treatments", href: "/aesthetic-medicine" }}
      relatedLinks={[
        { label: "PRP Hair", href: "/prp-hair" },
        { label: "Microneedling & Dermapen", href: "/microneedling-dermapen" },
        { label: "Skin Boosters", href: "/skin-boosters" },
        { label: "Skin Rejuvenation", href: "/skin-rejuvenation" },
      ]}
    />
  );
}
