import { ServicePage } from "@/components/layout/ServicePage";

export const metadata = {
  title: "CBT for Self-Esteem & Confidence Dubai | Dr. Fouzia",
  description:
    "Cognitive Behavioural Therapy for low self-esteem and lack of confidence in Dubai. Dr. Fouzia helps you build a healthier, more realistic self-image.",
};

export default function CBTSelfEsteemConfidencePage() {
  return (
    <ServicePage
      eyebrow="Cognitive Behavioural Therapy"
      title="Self-Esteem & Confidence"
      highlight="build a healthier self-image"
      description="Low self-esteem and lack of confidence can affect every area of your life — from relationships and career to your ability to set boundaries and pursue goals. You may have a harsh inner critic that constantly tells you that you are not good enough, or you may avoid opportunities because of fear of failure or judgement. CBT helps you understand the origins of these beliefs, challenge their accuracy, and develop a more balanced and compassionate view of yourself."
      bullets={[
        "Identify the origins of negative self-beliefs",
        "Challenge your inner critic and self-defeating thoughts",
        "Build self-compassion and realistic self-appraisal",
        "Develop confidence in social and professional settings",
        "Practice assertiveness and boundary-setting skills",
        "Create sustainable habits that reinforce positive self-worth",
      ]}
      cta={{ label: "Book a consultation", href: "/book-consultation" }}
      secondCta={{ label: "View all CBT services", href: "/cbt" }}
      relatedLinks={[
        { label: "Low Mood & Mild Depression", href: "/cbt-low-mood-depression" },
        { label: "Body Image & Self-Image", href: "/cbt-body-image" },
        { label: "Perfectionism & Procrastination", href: "/cbt-perfectionism-procrastination" },
        { label: "Emotional Regulation", href: "/cbt-emotional-regulation" },
      ]}
    />
  );
}
