import { ServicePage } from "@/components/layout/ServicePage";

export const metadata = {
  title: "CBT for Health Anxiety Dubai | Dr. Fouzia",
  description:
    "Specialised CBT for health anxiety and hypochondria in Dubai. Dr. Fouzia helps you break free from the cycle of health-related worry and reassurance seeking.",
};

export default function CBTHealthAnxietyPage() {
  return (
    <ServicePage
      eyebrow="Cognitive Behavioural Therapy"
      title="Health Anxiety"
      highlight="stop the cycle of health worry"
      description="Health anxiety involves persistent worry about having or developing a serious illness, often despite medical reassurance. You may find yourself constantly checking your body for symptoms, researching diseases online, or seeking repeated medical tests. CBT is the leading treatment for health anxiety, helping you break the cycle of monitoring, catastrophising, and reassurance seeking that keeps the anxiety alive. Dr. Fouzia guides you through this process with sensitivity and clinical expertise."
      bullets={[
        "Understand how health anxiety maintains itself",
        "Reduce body checking and symptom monitoring behaviours",
        "Limit online health research and reassurance seeking",
        "Challenge catastrophic interpretations of bodily sensations",
        "Build tolerance of uncertainty about health",
        "Restore confidence in your body and wellbeing",
      ]}
      cta={{ label: "Book a consultation", href: "/book-consultation" }}
      secondCta={{ label: "View all CBT services", href: "/cbt" }}
      relatedLinks={[
        { label: "Panic Attacks", href: "/cbt-panic-attacks" },
        { label: "Anxiety & Excessive Worry", href: "/cbt-anxiety" },
        { label: "Overthinking & Rumination", href: "/cbt-overthinking" },
        { label: "Emotional Regulation", href: "/cbt-emotional-regulation" },
      ]}
    />
  );
}
