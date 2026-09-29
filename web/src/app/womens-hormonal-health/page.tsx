import { ServicePage } from "@/components/layout/ServicePage";

export const metadata = {
  title: "Women's Hormonal Health",
  description:
    "Specialist hormonal health support for women in Dubai. PCOS, perimenopause, menopause, and cycle-related concerns addressed with functional medicine.",
};

export default function WomensHormonalHealthPage() {
  return (
    <ServicePage
      eyebrow="Health Concern"
      title="Women's Hormonal Health"
      highlight="Hormones in balance, life in rhythm"
      description="Hormonal shifts affect everything — energy, mood, weight, sleep, and fertility. Whether you are navigating PCOS, perimenopause, menopause, or irregular cycles, Dr. Fouzia uses advanced testing and lifestyle strategies to restore hormonal harmony without a one-size-fits-all approach."
      bullets={[
        "PCOS diagnosis and metabolic management",
        "Perimenopause and menopause support",
        "Menstrual cycle irregularity evaluation",
        "Thyroid and adrenal hormone assessment",
        "Mood and libido optimisation",
        "Bone health and osteoporosis prevention",
      ]}
      cta={{ label: "Book a consultation", href: "/book-consultation" }}
      secondCta={{
        label: "Explore connected health",
        href: "/connected-health",
      }}
      relatedLinks={[
        { label: "Metabolic Health", href: "/metabolic-health-weight-management" },
        { label: "Stress & Sleep Health", href: "/stress-sleep-nervous-system-health" },
        { label: "Healthy Aging", href: "/healthy-aging-longevity" },
      ]}
    />
  );
}
