import { ServicePage } from "@/components/layout/ServicePage";

export const metadata = {
  title: "CBT for Anxiety & Excessive Worry Dubai | Dr. Fouzia",
  description:
    "Specialised Cognitive Behavioural Therapy for anxiety and excessive worry in Dubai. Break free from chronic worry with Dr. Fouzia's evidence-based approach.",
};

export default function CBTAnxietyPage() {
  return (
    <ServicePage
      eyebrow="Cognitive Behavioural Therapy"
      title="Anxiety & Excessive Worry"
      highlight="break free from the cycle of worry"
      description="Anxiety and excessive worry can feel overwhelming and uncontrollable, often hijacking your ability to concentrate, relax, and enjoy life. Whether you experience generalised anxiety, persistent worry about multiple areas of life, or physical symptoms like restlessness and tension, CBT offers a proven pathway to relief. Dr. Fouzia works with you to understand your specific anxiety patterns and develop targeted strategies to regain control."
      bullets={[
        "Learn to recognise and challenge anxious thought patterns",
        "Reduce the physical symptoms of anxiety",
        "Develop a healthier relationship with uncertainty",
        "Practical tools to manage worry before it spirals",
        "Build confidence in handling everyday challenges",
        "Long-term strategies to prevent relapse",
      ]}
      cta={{ label: "Book a consultation", href: "/book-consultation" }}
      secondCta={{ label: "View all CBT services", href: "/cbt" }}
      relatedLinks={[
        { label: "Overthinking & Rumination", href: "/cbt-overthinking" },
        { label: "Panic Attacks", href: "/cbt-panic-attacks" },
        { label: "Health Anxiety", href: "/cbt-health-anxiety" },
        { label: "Stress Management", href: "/cbt-stress-management" },
      ]}
    />
  );
}
