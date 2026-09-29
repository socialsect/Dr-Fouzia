import { ServicePage } from "@/components/layout/ServicePage";

export const metadata = {
  title: "Healthy Aging & Biological Age Reset | Dr. Fouzia Dubai",
  description:
    "Reverse the signs of biological aging with Dr. Fouzia's Healthy Aging Programme in Dubai. Functional medicine and lifestyle strategies for longevity and vitality.",
};

export default function HealthyAgingBiologicalAgeResetPage() {
  return (
    <ServicePage
      eyebrow="Programme"
      title="Healthy Aging & Biological Age Reset"
      highlight="age well, from the inside out"
      description="Your biological age is not the same as your calendar age. Dr. Fouzia's Healthy Aging Programme uses functional medicine testing, advanced biomarkers, and evidence-based lifestyle strategies to help you slow biological aging and optimise your healthspan. This programme addresses the key pillars of healthy aging — cellular health, hormone balance, cognitive resilience, sleep quality, and metabolic flexibility — so you can feel and function at your best for years to come."
      bullets={[
        "Advanced biomarker testing to assess biological age",
        "Personalised nutrition for cellular health and longevity",
        "Hormone optimisation and metabolic support",
        "Cognitive resilience strategies and brain health protocols",
        "Sleep optimisation for deep restoration and repair",
        "Sustainable lifestyle changes for long-term vitality",
      ]}
      cta={{ label: "Book a consultation", href: "/book-consultation" }}
      secondCta={{ label: "Learn about our approach", href: "/our-approach" }}
      relatedLinks={[
        { label: "Women's Midlife Wellness", href: "/womens-midlife-wellness" },
        { label: "Stress, Sleep & Energy Reset", href: "/stress-sleep-energy-reset" },
        { label: "Brain Fog & Cognitive Wellness", href: "/brain-fog-cognitive-wellness" },
        { label: "Inside-Out Skin Wellness", href: "/inside-out-skin-wellness" },
      ]}
    />
  );
}
