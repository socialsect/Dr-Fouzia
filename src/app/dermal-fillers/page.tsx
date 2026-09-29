import { ServicePage } from "@/components/layout/ServicePage";

export const metadata = {
  title: "Dermal Fillers Dubai | Dr. Fouzia",
  description:
    "Dermal filler treatments in Dubai with Dr. Fouzia. Restore volume, enhance facial contours, and achieve natural-looking results with hyaluronic acid fillers.",
};

export default function DermalFillersPage() {
  return (
    <ServicePage
      eyebrow="Aesthetic Medicine"
      title="Dermal Fillers"
      highlight="restore volume, define contours, look like yourself"
      description="Dermal fillers are a versatile, non-surgical treatment used to restore lost volume, smooth deep lines, and enhance facial contours. Dr. Fouzia uses premium hyaluronic acid fillers that integrate naturally with your tissue, giving you results that look and feel like your own skin. Whether you want to soften nasolabial folds, enhance your lips, restore cheek volume, or refine your jawline, every treatment is approached with precision and an eye for facial harmony."
      bullets={[
        "Premium hyaluronic acid fillers for natural, reversible results",
        "Lip enhancement — subtle volume, shape, and symmetry",
        "Cheek and mid-face restoration for youthful contours",
        "Nasolabial fold and marionette line softening",
        "Jawline and chin definition for facial balance",
        "Results immediately with minimal downtime",
      ]}
      cta={{ label: "Book a consultation", href: "/book-consultation" }}
      secondCta={{ label: "View all treatments", href: "/aesthetic-medicine" }}
      relatedLinks={[
        { label: "Facial Contouring", href: "/facial-contouring" },
        { label: "Anti-Wrinkle Treatments", href: "/anti-wrinkle-treatments" },
        { label: "Skin Boosters", href: "/skin-boosters" },
        { label: "Anti-Aging Consultation", href: "/anti-aging-aesthetic-consultation" },
      ]}
    />
  );
}
