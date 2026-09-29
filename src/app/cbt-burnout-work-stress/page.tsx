import { ServicePage } from "@/components/layout/ServicePage";

export const metadata = {
  title: "CBT for Work Stress & Burnout Dubai | Dr. Fouzia",
  description:
    "Cognitive Behavioural Therapy for work stress and burnout in Dubai. Dr. Fouzia helps professionals reclaim their energy, motivation, and work-life balance.",
};

export default function CBTBurnoutWorkStressPage() {
  return (
    <ServicePage
      eyebrow="Cognitive Behavioural Therapy"
      title="Work Stress & Burnout"
      highlight="reclaim your energy and balance"
      description="Work stress and burnout are increasingly common in Dubai's fast-paced professional environment. Burnout goes beyond ordinary tiredness — it is a state of chronic physical and emotional exhaustion often accompanied by cynicism, detachment, and a sense of ineffectiveness. CBT helps you identify the factors contributing to your burnout, develop healthier work habits, set boundaries, and restore a sense of purpose and energy in both your professional and personal life."
      bullets={[
        "Identify the cognitive and behavioural patterns driving burnout",
        "Develop practical boundary-setting skills at work",
        "Learn strategies to manage workload and prevent overload",
        "Rebuild energy through structured self-care routines",
        "Address perfectionism and people-pleasing tendencies",
        "Create a sustainable approach to career and personal goals",
      ]}
      cta={{ label: "Book a consultation", href: "/book-consultation" }}
      secondCta={{ label: "View all CBT services", href: "/cbt" }}
      relatedLinks={[
        { label: "Stress Management", href: "/cbt-stress-management" },
        { label: "Sleep Difficulties & Insomnia", href: "/cbt-sleep-insomnia" },
        { label: "Perfectionism & Procrastination", href: "/cbt-perfectionism-procrastination" },
        { label: "Anxiety & Excessive Worry", href: "/cbt-anxiety" },
      ]}
    />
  );
}
