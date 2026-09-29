import { ServicePage } from "@/components/layout/ServicePage";

export const metadata = {
  title: "Integrated Functional Medicine & CBT | Dr. Fouzia Dubai",
  description:
    "A unique programme combining Functional Medicine and Cognitive Behavioural Therapy to address the root causes of chronic symptoms — mind and body together.",
};

export default function IntegratedFunctionalMedicineCBTPage() {
  return (
    <ServicePage
      eyebrow="Programme"
      title="Integrated Functional Medicine & CBT"
      highlight="healing from the inside out"
      description="Dr. Fouzia's signature programme bridges the gap between physical and psychological health. By combining Functional Medicine — which investigates the biological root causes of your symptoms — with the cognitive and behavioural strategies of CBT, this programme offers a truly whole-person approach. Ideal for clients with chronic fatigue, gut issues, hormonal imbalances, or stress-driven conditions who want to understand and treat the full picture."
      bullets={[
        "Combines biological investigation with psychological support",
        "Addresses root causes, not just symptoms",
        "Personalised lab testing and functional assessments",
        "CBT strategies for stress, sleep, and behaviour change",
        "Nutritional and lifestyle medicine alongside therapy",
        "Ideal for chronic, multi-system, or stress-related conditions",
      ]}
      cta={{ label: "Book a consultation", href: "/book-consultation" }}
      secondCta={{ label: "Learn about our approach", href: "/our-approach" }}
      relatedLinks={[
        { label: "Gut-Brain Health Programme", href: "/gut-brain-health-program" },
        { label: "Stress, Sleep & Energy Reset", href: "/stress-sleep-energy-reset" },
        { label: "Brain Fog & Cognitive Wellness", href: "/brain-fog-cognitive-wellness" },
        { label: "CBT", href: "/cbt" },
      ]}
    />
  );
}
