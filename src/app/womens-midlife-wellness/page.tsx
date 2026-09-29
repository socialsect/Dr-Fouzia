import { ServicePage } from "@/components/layout/ServicePage";

export const metadata = {
  title: "Women's Midlife Wellness Programme | Dr. Fouzia Dubai",
  description:
    "Navigate perimenopause and menopause with confidence. Dr. Fouzia's Women's Midlife Wellness Programme in Dubai combines functional medicine and CBT for hormonal, emotional, and cognitive health.",
};

export default function WomensMidlifeWellnessPage() {
  return (
    <ServicePage
      eyebrow="Programme"
      title="Women's Midlife Wellness"
      highlight="thriving through perimenopause and beyond"
      description="Perimenopause and menopause are not just about hot flashes — they can bring anxiety, low mood, brain fog, sleep disruption, and changes in energy and metabolism. Dr. Fouzia's Women's Midlife Wellness Programme takes a holistic approach, combining functional medicine testing for hormonal health with CBT strategies for the emotional and cognitive shifts that often accompany this transition. You don't have to just cope — you can thrive."
      bullets={[
        "Comprehensive hormonal and metabolic assessment",
        "CBT for mood changes, anxiety, and sleep disruption during menopause",
        "Nutritional support for bone health, weight, and energy",
        "Practical strategies for brain fog and cognitive changes",
        "Lifestyle medicine for long-term health and vitality",
        "Safe, evidence-based, and personalised to your stage of life",
      ]}
      cta={{ label: "Book a consultation", href: "/book-consultation" }}
      secondCta={{ label: "Learn about our approach", href: "/our-approach" }}
      relatedLinks={[
        { label: "Healthy Aging & Biological Age Reset", href: "/healthy-aging-biological-age-reset" },
        { label: "Weight & Metabolic Health", href: "/weight-metabolic-health-mindset" },
        { label: "Stress, Sleep & Energy Reset", href: "/stress-sleep-energy-reset" },
        { label: "Brain Fog & Cognitive Wellness", href: "/brain-fog-cognitive-wellness" },
      ]}
    />
  );
}
