import { ServicePage } from "@/components/layout/ServicePage";

export const metadata = {
  title: "Stress, Sleep & Energy Reset Programme | Dr. Fouzia Dubai",
  description:
    "Restore your energy, improve your sleep, and manage stress with Dr. Fouzia's Stress, Sleep & Energy Reset Programme in Dubai.",
};

export default function StressSleepEnergyResetPage() {
  return (
    <ServicePage
      eyebrow="Programme"
      title="Stress, Sleep & Energy Reset"
      highlight="when burnout has become your baseline"
      description="Chronic stress, poor sleep, and low energy often feed into each other in a vicious cycle. Dr. Fouzia's Stress, Sleep & Energy Reset Programme is designed to break that cycle. Combining functional medicine assessments with CBT-based stress management and sleep optimisation strategies, this programme helps you understand what's driving your fatigue and gives you a clear, personalised plan to restore balance."
      bullets={[
        "Identifies the biological and psychological drivers of fatigue",
        "Personalised sleep optimisation using CBT for insomnia (CBT-I)",
        "Stress hormone assessment and adrenal support strategies",
        "Practical tools for energy management throughout the day",
        "Nutritional and lifestyle adjustments for sustained vitality",
        "Suitable for burnout, adrenal fatigue, and chronic exhaustion",
      ]}
      cta={{ label: "Book a consultation", href: "/book-consultation" }}
      secondCta={{ label: "Learn about our approach", href: "/our-approach" }}
      relatedLinks={[
        { label: "CBT for Sleep & Insomnia", href: "/cbt-sleep-insomnia" },
        { label: "Stress Management", href: "/cbt-stress-management" },
        { label: "CBT for Burnout & Work Stress", href: "/cbt-burnout-work-stress" },
        { label: "Brain Fog & Cognitive Wellness", href: "/brain-fog-cognitive-wellness" },
      ]}
    />
  );
}
