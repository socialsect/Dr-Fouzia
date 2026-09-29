import { ServicePage } from "@/components/layout/ServicePage";

export const metadata = {
  title: "Anti-Aging Aesthetic Consultation Dubai | Dr. Fouzia",
  description:
    "Comprehensive anti-aging consultation in Dubai with Dr. Fouzia. A personalised assessment of your skin, facial anatomy, and aesthetic goals to create a bespoke treatment plan.",
};

export default function AntiAgingAestheticConsultationPage() {
  return (
    <ServicePage
      eyebrow="Aesthetic Medicine"
      title="Anti-Aging Aesthetic Consultation"
      highlight="your face, your plan, your pace"
      description="Every face tells a different story, and every aesthetic plan should be as unique as the person sitting in front of me. Dr. Fouzia's Anti-Aging Aesthetic Consultation is a thorough, unhurried assessment of your skin quality, facial structure, areas of concern, and aesthetic goals. Together, you'll explore which treatments — from anti-wrinkle injections and fillers to skin boosters, PRP, and skincare — will help you achieve natural, confident results at every age."
      bullets={[
        "In-depth assessment of skin quality, laxity, and volume loss",
        "Facial anatomy analysis and personalised treatment mapping",
        "Discussion of all suitable options — no pressure, no hard sell",
        "Bespoke treatment plan with clear timelines and pricing",
        "Comprehensive skincare and lifestyle recommendations",
        "Follow-up and adjustment as your treatment progresses",
      ]}
      cta={{ label: "Book a consultation", href: "/book-consultation" }}
      secondCta={{ label: "View all treatments", href: "/aesthetic-medicine" }}
      relatedLinks={[
        { label: "Anti-Wrinkle Treatments", href: "/anti-wrinkle-treatments" },
        { label: "Dermal Fillers", href: "/dermal-fillers" },
        { label: "Skin Boosters", href: "/skin-boosters" },
        { label: "Skin Rejuvenation", href: "/skin-rejuvenation" },
        { label: "Healthy Aging & Biological Age Reset", href: "/healthy-aging-biological-age-reset" },
      ]}
    />
  );
}
