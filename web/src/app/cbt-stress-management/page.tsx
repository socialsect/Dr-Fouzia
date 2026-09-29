import { ServicePage } from "@/components/layout/ServicePage";

export const metadata = {
  title: "CBT for Stress Management Dubai | Dr. Fouzia",
  description:
    "Evidence-based stress management through CBT in Dubai. Dr. Fouzia helps you build resilience and develop effective coping strategies for life's demands.",
};

export default function CBTStressManagementPage() {
  return (
    <ServicePage
      eyebrow="Cognitive Behavioural Therapy"
      title="Stress Management"
      highlight="build resilience and reclaim balance"
      description="Chronic stress affects every aspect of your life — your health, relationships, work performance, and overall wellbeing. Whether your stress comes from work pressures, family responsibilities, financial concerns, or the fast pace of Dubai living, CBT provides effective tools to manage and reduce its impact. Dr. Fouzia helps you identify your stress triggers, develop healthier responses, and build lasting resilience."
      bullets={[
        "Identify personal stress triggers and warning signs",
        "Develop practical time management and boundary-setting skills",
        "Learn relaxation and grounding techniques",
        "Challenge stress-amplifying thinking patterns",
        "Build sustainable self-care routines",
        "Improve work-life balance and reduce overwhelm",
      ]}
      cta={{ label: "Book a consultation", href: "/book-consultation" }}
      secondCta={{ label: "View all CBT services", href: "/cbt" }}
      relatedLinks={[
        { label: "Work Stress & Burnout", href: "/cbt-burnout-work-stress" },
        { label: "Anxiety & Excessive Worry", href: "/cbt-anxiety" },
        { label: "Sleep Difficulties & Insomnia", href: "/cbt-sleep-insomnia" },
        { label: "Emotional Regulation", href: "/cbt-emotional-regulation" },
      ]}
    />
  );
}
