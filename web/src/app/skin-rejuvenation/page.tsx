import { ServicePage } from "@/components/layout/ServicePage";

export const metadata = {
  title: "Skin Rejuvenation Dubai | Dr. Fouzia",
  description:
    "Advanced skin rejuvenation treatments in Dubai with Dr. Fouzia. Restore youthful texture, tone, and radiance with personalised non-surgical treatments.",
};

export default function SkinRejuvenationPage() {
  return (
    <ServicePage
      eyebrow="Aesthetic Medicine"
      title="Skin Rejuvenation"
      highlight="restore your skin's natural vitality"
      description="Skin rejuvenation encompasses a range of non-surgical treatments designed to improve the overall quality, texture, and appearance of your skin. Dr. Fouzia takes a holistic approach — combining treatments like microneedling, PRP, skin boosters, and laser therapy with medical-grade skincare and lifestyle guidance to address your specific skin concerns. Whether you're dealing with sun damage, pigmentation, dullness, fine lines, or uneven skin tone, a personalised skin rejuvenation plan can help you achieve healthier, more radiant skin."
      bullets={[
        "Comprehensive skin assessment and personalised treatment plan",
        "Microneedling, PRP, and skin boosters for collagen stimulation",
        "Pigmentation and sun damage correction",
        "Laser and light-based treatments for tone and texture",
        "Medical-grade skincare protocols for home use",
        "Addresses dullness, fine lines, scars, and uneven skin tone",
      ]}
      cta={{ label: "Book a consultation", href: "/book-consultation" }}
      secondCta={{ label: "View all treatments", href: "/aesthetic-medicine" }}
      relatedLinks={[
        { label: "Microneedling & Dermapen", href: "/microneedling-dermapen" },
        { label: "PRP Face", href: "/prp-face" },
        { label: "Skin Boosters", href: "/skin-boosters" },
        { label: "Inside-Out Skin Wellness", href: "/inside-out-skin-wellness" },
        { label: "Anti-Aging Consultation", href: "/anti-aging-aesthetic-consultation" },
      ]}
    />
  );
}
