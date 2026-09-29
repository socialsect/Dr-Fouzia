import { ServicePage } from "@/components/layout/ServicePage";

export const metadata = {
  title: "Stress, Sleep & Nervous System Health",
  description:
    "Functional medicine support for chronic stress, sleep disorders, and nervous system dysregulation in Dubai. Restore calm, resilience, and deep rest.",
};

export default function StressSleepNervousSystemHealthPage() {
  return (
    <ServicePage
      eyebrow="Health Concern"
      title="Stress, Sleep & Nervous System Health"
      highlight="When your body won't switch off"
      description="Chronic stress and poor sleep are not just uncomfortable — they drive inflammation, hormonal imbalance, weight gain, and cognitive decline. Dr. Fouzia addresses the nervous system directly, combining functional testing with evidence-based strategies for deeper rest and greater resilience."
      bullets={[
        "Sleep quality and architecture assessment",
        "Cortisol and adrenal function testing",
        "Nervous system regulation techniques",
        "CBT-based insomnia management",
        "Magnesium and adaptogen protocols",
        "Breathwork and vagal tone optimisation",
      ]}
      cta={{ label: "Book a consultation", href: "/book-consultation" }}
      secondCta={{
        label: "Explore connected health",
        href: "/connected-health",
      }}
      relatedLinks={[
        { label: "Brain & Cognitive Wellness", href: "/brain-cognitive-wellness" },
        { label: "Fatigue & Brain Fog", href: "/fatigue-low-energy-brain-fog" },
        { label: "Women's Hormonal Health", href: "/womens-hormonal-health" },
      ]}
    />
  );
}
