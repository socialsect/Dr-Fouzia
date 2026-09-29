import { ServicePage } from "@/components/layout/ServicePage";

export const metadata = {
  title: "PRP Hair Treatment Dubai | Dr. Fouzia",
  description:
    "Platelet-Rich Plasma (PRP) hair restoration in Dubai with Dr. Fouzia. Stimulate natural hair growth and improve hair density with non-surgical PRP therapy.",
};

export default function PRPHairPage() {
  return (
    <ServicePage
      eyebrow="Aesthetic Medicine"
      title="PRP Hair"
      highlight="non-surgical hair restoration using your own biology"
      description="PRP (Platelet-Rich Plasma) hair treatment is a non-surgical, evidence-based therapy for hair thinning and hair loss. Dr. Fouzia draws a small sample of your blood, concentrates the platelets and growth factors, and injects them into the scalp where hair thinning is occurring. These growth factors stimulate dormant hair follicles, promote new hair growth, and improve hair thickness and density — offering a natural alternative to hair transplant surgery."
      bullets={[
        "Non-surgical treatment for hair thinning and early hair loss",
        "Uses your own growth factors — natural and safe",
        "Stimulates dormant hair follicles for new growth",
        "Improves hair density and strand thickness",
        "Suitable for men and women with various types of hair loss",
        "Series of 3–4 sessions spaced 4–6 weeks apart",
      ]}
      cta={{ label: "Book a consultation", href: "/book-consultation" }}
      secondCta={{ label: "View all treatments", href: "/aesthetic-medicine" }}
      relatedLinks={[
        { label: "PRP Face", href: "/prp-face" },
        { label: "Microneedling & Dermapen", href: "/microneedling-dermapen" },
        { label: "Anti-Aging Consultation", href: "/anti-aging-aesthetic-consultation" },
        { label: "Healthy Aging & Biological Age Reset", href: "/healthy-aging-biological-age-reset" },
      ]}
    />
  );
}
