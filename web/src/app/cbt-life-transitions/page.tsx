import { ServicePage } from "@/components/layout/ServicePage";

export const metadata = {
  title: "CBT for Life Transitions Dubai | Dr. Fouzia",
  description:
    "Cognitive Behavioural Therapy for navigating life transitions in Dubai. Dr. Fouzia helps you adjust to change with resilience and clarity.",
};

export default function CBTLifeTransitionsPage() {
  return (
    <ServicePage
      eyebrow="Cognitive Behavioural Therapy"
      title="Life Transitions"
      highlight="navigate change with resilience and clarity"
      description="Life transitions — whether expected or unexpected — can be among the most stressful experiences we face. Moving to a new city, starting or ending a relationship, changing careers, becoming a parent, bereavement, retirement, or any significant shift in circumstances can trigger anxiety, sadness, uncertainty, and a loss of identity. CBT helps you process these changes, develop adaptive coping strategies, and build the resilience needed to thrive in your new reality."
      bullets={[
        "Process the emotional impact of major life changes",
        "Develop adaptive coping strategies for uncertainty",
        "Rebuild a sense of identity and purpose after transition",
        "Manage anxiety about the future and unknown outcomes",
        "Strengthen resilience and problem-solving skills",
        "Create a forward-looking plan aligned with your new circumstances",
      ]}
      cta={{ label: "Book a consultation", href: "/book-consultation" }}
      secondCta={{ label: "View all CBT services", href: "/cbt" }}
      relatedLinks={[
        { label: "Stress Management", href: "/cbt-stress-management" },
        { label: "Low Mood & Mild Depression", href: "/cbt-low-mood-depression" },
        { label: "Anxiety & Excessive Worry", href: "/cbt-anxiety" },
        { label: "Emotional Regulation", href: "/cbt-emotional-regulation" },
      ]}
    />
  );
}
