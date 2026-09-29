import { ServicePage } from "@/components/layout/ServicePage";

export const metadata = {
  title: "Skin Boosters Dubai | Dr. Fouzia",
  description:
    "Skin booster treatments in Dubai with Dr. Fouzia. Deep hydration and skin quality improvement with hyaluronic acid micro-injections for radiant, glowing skin.",
};

export default function SkinBoostersPage() {
  return (
    <ServicePage
      eyebrow="Aesthetic Medicine"
      title="Skin Boosters"
      highlight="deep hydration that shows from within"
      description="Skin boosters are a revolutionary treatment that works from within the skin to improve hydration, texture, and overall quality. Unlike traditional fillers that add volume, skin boosters deliver micro-injections of hyaluronic acid deep into the dermis, where they attract and retain moisture, stimulate collagen production, and create a naturally luminous, healthy complexion. Dr. Fouzia uses skin boosters to treat the face, neck, hands, and décolletage for lasting radiance."
      bullets={[
        "Deep dermal hydration for dry, tired, or dull skin",
        "Improves skin texture, tone, and elasticity",
        "Stimulates natural collagen production over time",
        "Treats face, neck, décolletage, and hands",
        "Subtle, natural results — glowing, not glossy",
        "Series of 2–3 sessions spaced 2–4 weeks apart",
      ]}
      cta={{ label: "Book a consultation", href: "/book-consultation" }}
      secondCta={{ label: "View all treatments", href: "/aesthetic-medicine" }}
      relatedLinks={[
        { label: "Microneedling & Dermapen", href: "/microneedling-dermapen" },
        { label: "PRP Face", href: "/prp-face" },
        { label: "Skin Rejuvenation", href: "/skin-rejuvenation" },
        { label: "Inside-Out Skin Wellness", href: "/inside-out-skin-wellness" },
      ]}
    />
  );
}
