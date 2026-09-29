import { ServicePage } from "@/components/layout/ServicePage";

export const metadata = {
  title: "Gut-Brain Health Programme | Dr. Fouzia Dubai",
  description:
    "Explore the connection between your gut and mental health with Dr. Fouzia's Gut-Brain Health Programme in Dubai. Functional medicine and CBT for digestive and emotional wellbeing.",
};

export default function GutBrainHealthProgramPage() {
  return (
    <ServicePage
      eyebrow="Programme"
      title="Gut-Brain Health Programme"
      highlight="because your gut speaks to your brain"
      description="The gut-brain axis is one of the most exciting areas of modern medicine. Your digestive health directly influences your mood, energy, sleep, and cognitive function. Dr. Fouzia's Gut-Brain Health Programme investigates the link between your gut and your mental wellbeing, using functional testing, nutritional strategies, and CBT to address issues like bloating, IBS, brain fog, and mood disturbances from both ends of the axis."
      bullets={[
        "Investigates the gut-brain connection behind your symptoms",
        "Functional testing for food sensitivities and microbiome health",
        "Personalised nutrition and supplementation plans",
        "CBT for stress-related digestive issues and IBS",
        "Addresses bloating, discomfort, and irregular digestion",
        "Improves mood, focus, and energy through gut health",
      ]}
      cta={{ label: "Book a consultation", href: "/book-consultation" }}
      secondCta={{ label: "Learn about our approach", href: "/our-approach" }}
      relatedLinks={[
        { label: "Integrated Functional Medicine & CBT", href: "/integrated-functional-medicine-cbt" },
        { label: "Brain Fog & Cognitive Wellness", href: "/brain-fog-cognitive-wellness" },
        { label: "Stress, Sleep & Energy Reset", href: "/stress-sleep-energy-reset" },
        { label: "Weight & Metabolic Health", href: "/weight-metabolic-health-mindset" },
      ]}
    />
  );
}
