import { ServicePage } from "@/components/layout/ServicePage";

export const metadata = {
  title: "Calm Mind Sessions for Life Transitions Dubai | Dr. Fouzia",
  description:
    "Cognitive Behavioural Therapy for navigating life transitions in Dubai. Dr. Fouzia helps you adjust to change with resilience and clarity.",
};

export default function CalmMindSessionsLifeTransitionsPage() {
  return (
    <ServicePage
      eyebrow="Cognitive Behavioural Therapy"
      title="Life Transitions"
      highlight="navigate change with resilience and clarity"
      description="Life transitions — whether expected or unexpected — can be among the most stressful experiences we face. Moving to a new city, starting or ending a relationship, changing careers, becoming a parent, bereavement, retirement, or any significant shift in circumstances can trigger anxiety, sadness, uncertainty, and a loss of identity. Calm Mind Sessions helps you process these changes, develop adaptive coping strategies, and build the resilience needed to thrive in your new reality."
      bullets={[
        "Process the emotional impact of major life changes",
        "Develop adaptive coping strategies for uncertainty",
        "Rebuild a sense of identity and purpose after transition",
        "Manage anxiety about the future and unknown outcomes",
        "Strengthen resilience and problem-solving skills",
        "Create a forward-looking plan aligned with your new circumstances",
      ]}
      cta={{ label: "Book a consultation", href: "/contact" }}
      secondCta={{ label: "View all Calm Mind Sessions services", href: "/calm-mind-sessions" }}
      relatedLinks={[
        { label: "Stress Management", href: "/calm-mind-sessions-stress-management" },
        { label: "Low Mood & Mild Depression", href: "/calm-mind-sessions-low-mood-depression" },
        { label: "Anxiety & Excessive Worry", href: "/calm-mind-sessions-anxiety" },
        { label: "Emotional Regulation", href: "/calm-mind-sessions-emotional-regulation" },
      ]}
      faqs={[
        {
          question: "What kinds of life changes can Calm Mind Sessions help with?",
          answer:
            "They can support people adjusting to a move, a change in work or relationships, becoming a parent, bereavement, retirement or another significant shift. The focus is on the thoughts, feelings and habits that shape how you cope.",
        },
        {
          question: "Do I need a mental health diagnosis to book?",
          answer:
            "No. You can seek support because a change feels difficult, even if you do not have a diagnosis. A first conversation can help clarify whether this approach is a good fit.",
        },
        {
          question: "How many sessions will I need?",
          answer:
            "It varies with the change and what you want to work on. Goals are agreed together and reviewed as you go.",
        },
      ]}
    />
  );
}
