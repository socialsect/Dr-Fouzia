import { ServicePage } from "@/components/layout/ServicePage";

export const metadata = {
  title: "CBT for Sleep Difficulties & Insomnia Dubai | Dr. Fouzia",
  description:
    "Cognitive Behavioural Therapy for insomnia and sleep difficulties in Dubai. Dr. Fouzia uses CBT-I, the gold-standard non-medication treatment for poor sleep.",
};

export default function CBTSleepInsomniaPage() {
  return (
    <ServicePage
      eyebrow="Cognitive Behavioural Therapy"
      title="Sleep Difficulties & Insomnia"
      highlight="restore restful, restorative sleep"
      description="Poor sleep affects your mood, concentration, physical health, and quality of life. Whether you struggle to fall asleep, stay asleep through the night, or wake feeling unrefreshed, CBT for Insomnia (CBT-I) is the most effective, evidence-based treatment available — and it does not rely on medication. Dr. Fouzia uses CBT-I to help you address the thoughts and behaviours that perpetuate sleep difficulties, building sustainable habits for deep, restorative rest."
      bullets={[
        "Identify and change thoughts that interfere with sleep",
        "Re-establish a healthy sleep-wake cycle",
        "Optimise your sleep environment and routine",
        "Reduce nighttime worry and hyperarousal",
        "Build long-term sleep habits without medication",
        "Improve daytime energy, mood, and functioning",
      ]}
      cta={{ label: "Book a consultation", href: "/book-consultation" }}
      secondCta={{ label: "View all CBT services", href: "/cbt" }}
      relatedLinks={[
        { label: "Stress Management", href: "/cbt-stress-management" },
        { label: "Anxiety & Excessive Worry", href: "/cbt-anxiety" },
        { label: "Burnout & Work Stress", href: "/cbt-burnout-work-stress" },
        { label: "Emotional Regulation", href: "/cbt-emotional-regulation" },
      ]}
    />
  );
}
