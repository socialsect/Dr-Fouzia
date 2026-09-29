import { ServicePage } from "@/components/layout/ServicePage";

export const metadata = {
  title: "CBT for Body Image & Self-Image Dubai | Dr. Fouzia",
  description:
    "Cognitive Behavioural Therapy for body image concerns and self-image issues in Dubai. Dr. Fouzia helps you develop a healthier, more compassionate relationship with your body.",
};

export default function CBTBodyImagePage() {
  return (
    <ServicePage
      eyebrow="Cognitive Behavioural Therapy"
      title="Body Image & Self-Image"
      highlight="develop a compassionate relationship with your body"
      description="Negative body image affects people of all genders and ages, manifesting as persistent dissatisfaction with your appearance, comparing yourself to others, avoiding social situations, or engaging in restrictive eating or excessive exercise. These patterns can significantly impact your mental health, relationships, and quality of life. CBT helps you understand the thoughts and behaviours that maintain negative body image, challenge distorted perceptions, and develop a more balanced and compassionate view of yourself."
      bullets={[
        "Identify cognitive distortions related to body image",
        "Reduce appearance-based comparison behaviours",
        "Challenge the influence of social media and cultural standards",
        "Develop body appreciation and functionality-focused thinking",
        "Reduce avoidance of activities due to body image concerns",
        "Build lasting self-compassion and self-acceptance",
      ]}
      cta={{ label: "Book a consultation", href: "/book-consultation" }}
      secondCta={{ label: "View all CBT services", href: "/cbt" }}
      relatedLinks={[
        { label: "Self-Esteem & Confidence", href: "/cbt-self-esteem-confidence" },
        { label: "Emotional Eating", href: "/cbt-emotional-eating" },
        { label: "Low Mood & Mild Depression", href: "/cbt-low-mood-depression" },
        { label: "Emotional Regulation", href: "/cbt-emotional-regulation" },
      ]}
    />
  );
}
