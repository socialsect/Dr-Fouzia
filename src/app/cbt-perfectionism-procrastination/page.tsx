import { ServicePage } from "@/components/layout/ServicePage";

export const metadata = {
  title: "CBT for Perfectionism & Procrastination Dubai | Dr. Fouzia",
  description:
    "Cognitive Behavioural Therapy for perfectionism and procrastination in Dubai. Dr. Fouzia helps you overcome the paralysis of perfection and take meaningful action.",
};

export default function CBTPerfectionismProcrastinationPage() {
  return (
    <ServicePage
      eyebrow="Cognitive Behavioural Therapy"
      title="Perfectionism & Procrastination"
      highlight="overcome the paralysis of perfection"
      description="Perfectionism and procrastination often go hand in hand. The fear of not doing something perfectly can lead to avoidance, delay, and a cycle of self-criticism that erodes productivity and wellbeing. You may set impossibly high standards, struggle to start tasks, or find yourself stuck in endless planning and preparation. CBT helps you understand the link between perfectionism and avoidance, challenge the beliefs that fuel the cycle, and develop a more flexible, action-oriented approach to your goals."
      bullets={[
        "Identify the perfectionist beliefs driving procrastination",
        "Challenge all-or-nothing thinking about performance",
        "Develop realistic goal-setting and task management skills",
        "Build tolerance for imperfection and mistakes",
        "Break large tasks into manageable, action-oriented steps",
        "Reduce self-criticism and increase self-motivation",
      ]}
      cta={{ label: "Book a consultation", href: "/book-consultation" }}
      secondCta={{ label: "View all CBT services", href: "/cbt" }}
      relatedLinks={[
        { label: "Overthinking & Rumination", href: "/cbt-overthinking" },
        { label: "Self-Esteem & Confidence", href: "/cbt-self-esteem-confidence" },
        { label: "Stress Management", href: "/cbt-stress-management" },
        { label: "Work Stress & Burnout", href: "/cbt-burnout-work-stress" },
      ]}
    />
  );
}
