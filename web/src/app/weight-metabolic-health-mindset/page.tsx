import { ServicePage } from "@/components/layout/ServicePage";

export const metadata = {
  title: "Weight & Metabolic Health Mindset Programme | Dr. Fouzia Dubai",
  description:
    "A holistic approach to weight management combining metabolic health, nutrition, and psychological mindset with Dr. Fouzia in Dubai.",
};

export default function WeightMetabolicHealthMindsetPage() {
  return (
    <ServicePage
      eyebrow="Programme"
      title="Weight & Metabolic Health Mindset"
      highlight="a different approach to weight management"
      description="Dr. Fouzia's Weight & Metabolic Health Programme goes beyond calorie counting. This programme explores the metabolic, hormonal, and psychological factors that influence your weight — including insulin resistance, thyroid function, stress hormones, emotional eating, and your relationship with food. Combining functional medicine testing with CBT-based mindset work, it offers a sustainable, evidence-based path to a healthier weight and better metabolic health."
      bullets={[
        "Metabolic and hormonal assessment (insulin, thyroid, cortisol)",
        "CBT for emotional eating, cravings, and food relationship",
        "Personalised nutrition plan based on your metabolic profile",
        "Stress management for cortisol-driven weight gain",
        "Behavioural strategies for sustainable habit change",
        "Addresses PCOS, insulin resistance, and metabolic syndrome",
      ]}
      cta={{ label: "Book a consultation", href: "/book-consultation" }}
      secondCta={{ label: "Learn about our approach", href: "/our-approach" }}
      relatedLinks={[
        { label: "CBT for Emotional Eating", href: "/cbt-emotional-eating" },
        { label: "Gut-Brain Health Programme", href: "/gut-brain-health-program" },
        { label: "Women's Midlife Wellness", href: "/womens-midlife-wellness" },
        { label: "Healthy Aging & Biological Age Reset", href: "/healthy-aging-biological-age-reset" },
      ]}
    />
  );
}
