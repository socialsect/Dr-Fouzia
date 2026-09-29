import { ServicePage } from "@/components/layout/ServicePage";

export const metadata = {
  title: "Microneedling & Dermapen Dubai | Dr. Fouzia",
  description:
    "Microneedling and Dermapen treatments in Dubai with Dr. Fouzia. Stimulate collagen, improve skin texture, and reduce scars, fine lines, and pigmentation.",
};

export default function MicroneedlingDermapenPage() {
  return (
    <ServicePage
      eyebrow="Aesthetic Medicine"
      title="Microneedling & Dermapen"
      highlight="your skin's natural renewal, activated"
      description="Microneedling is a minimally invasive skin rejuvenation treatment that uses fine needles to create controlled micro-injuries in the skin, triggering your body's natural collagen and elastin production. Dr. Fouzia uses Dermapen — a state-of-the-art microneedling device — for precise, comfortable, and effective treatments. This procedure is ideal for improving skin texture, reducing acne scars, minimising pores, softening fine lines, and evening out skin tone."
      bullets={[
        "Dermapen microneedling for precision and comfort",
        "Stimulates collagen and elastin for firmer, smoother skin",
        "Reduces acne scars, surgical scars, and stretch marks",
        "Minimises pores and improves skin texture",
        "Can be combined with PRP or growth factors for enhanced results",
        "Suitable for face, neck, hands, and body",
      ]}
      cta={{ label: "Book a consultation", href: "/book-consultation" }}
      secondCta={{ label: "View all treatments", href: "/aesthetic-medicine" }}
      relatedLinks={[
        { label: "PRP Face", href: "/prp-face" },
        { label: "Skin Boosters", href: "/skin-boosters" },
        { label: "Skin Rejuvenation", href: "/skin-rejuvenation" },
        { label: "Inside-Out Skin Wellness", href: "/inside-out-skin-wellness" },
      ]}
    />
  );
}
