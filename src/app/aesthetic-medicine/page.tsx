import type { Metadata } from "next";
import { HealthConcernContent } from "@/components/layout/HealthConcernContent";

export const metadata: Metadata = {
  title: "Aesthetic Medicine Dubai | Dr Fouzia Al Ali",
  description:
    "Doctor-led, non-surgical aesthetic medicine in Dubai. Dr Fouzia offers a full consultation and safety check first, then a measured plan. Book a visit.",
};

export default function AestheticMedicinePage() {
  return (
    <HealthConcernContent
      eyebrowLabel="Aesthetic medicine"
      highlightsEyebrow="Non surgical aesthetic treatment in Dubai"
      title="Aesthetic Medicine"
      highlight="in Dubai"
      description="Measured, medical and planned with you. Aesthetic treatments are medical procedures, and they work best when they follow a proper consultation. Dr Fouzia is a consultant family physician who offers aesthetic medicine in Dubai. Every visit begins with listening to what you would like to change, reviewing your health and skin, and explaining the options, including the option to do nothing. Treatments are chosen to suit you, not a standard menu."
      highlightsTitle="What may"
      highlightsAccent="be offered."
      highlights={[
        "Wrinkle-softening treatments",
        "Dermal fillers",
        "Skin treatments for texture and tone",
        "PRP-based treatments",
        "Skin boosters",
        "Microneedling",
      ]}
      sections={[
        {
          eyebrow: "Aesthetic doctor in Dubai",
          heading: "Why a doctor-led",
          accent: "consultation matters.",
          paragraphs: [
            "An aesthetic doctor can look at your skin, health history, medicines and expectations together, check whether a treatment is safe for you and manage any side effects. If a treatment is not suitable, or not needed, you will be told.",
          ],
        },
        {
          eyebrow: "Aesthetic clinic in Dubai",
          heading: "What to expect",
          accent: "at your visit.",
          paragraphs: [
            "Every visit follows the same careful order, so you are fully informed before anything is done.",
          ],
          bullets: [
            "A consultation: your goals, health history, medicines, allergies and skin",
            "A discussion of options, risks, downtime, costs and what results are realistic",
            "A written consent process before any treatment",
            "Treatment on the day or at a later visit, as agreed",
            "Aftercare guidance and a follow-up review",
          ],
        },
        {
          eyebrow: "Anti aging aesthetics in Dubai",
          heading: "Setting realistic",
          accent: "expectations.",
          paragraphs: [
            "Aesthetic treatments can soften some signs of ageing, but results vary from person to person, usually need repeating and cannot be guaranteed. Dr Fouzia will tell you what is realistic for your skin and features. She may also talk about skin health basics such as sun protection and lifestyle.",
          ],
          links: [
            { label: "Anti-wrinkle treatments", href: "/anti-wrinkle-treatments" },
            { label: "Dermal fillers", href: "/dermal-fillers" },
            { label: "Skin boosters", href: "/skin-boosters" },
            { label: "PRP face", href: "/prp-face" },
            { label: "Microneedling", href: "/microneedling-dermapen" },
            { label: "Anti-aging consultation", href: "/anti-aging-aesthetic-consultation" },
          ],
        },
        {
          eyebrow: "Suitability and expectations",
          heading: "When a treatment",
          accent: "may not be right.",
          paragraphs: [
            "Treatments may not be suitable during pregnancy or breastfeeding, with certain skin, autoimmune or bleeding conditions, or while taking some medicines. Share your health history and expectations at the consultation. If a treatment is not suitable or not needed, Dr Fouzia will explain why and discuss an appropriate next step.",
          ],
        },
      ]}
      faqs={[
        {
          question: "Are treatments performed by a doctor?",
          answer:
            "Yes. Dr Fouzia performs the treatments herself.",
        },
        {
          question: "Is there downtime?",
          answer:
            "It varies by treatment and is explained at your consultation.",
        },
        {
          question: "Are results guaranteed?",
          answer:
            "No. Results vary between people.",
        },
        {
          question: "Do I have to go ahead with treatment after the consultation?",
          answer:
            "No. The consultation is advice only. You decide whether to proceed.",
        },
        {
          question: "How much does treatment cost?",
          answer: "Fees depend on the treatment and are discussed before you decide. Contact the clinic for current information.",
        },
        {
          question: "Can I see before-and-after photos?",
          answer: "Ask the clinic whether approved photos are available and shown with patient consent.",
        },
      ]}
      safety={{
        text: "Seek urgent care for severe pain, increasing swelling, vision changes, difficulty breathing, signs of infection or a skin reaction after any treatment. In the UAE, call",
        emergencyLinks: [
          { label: "998 for an ambulance", href: "tel:998" },
        ],
        closing: "for emergencies. Please contact the clinic first for anything that worries you.",
      }}
      ctaTitle="Book a consultation before"
      ctaAccent="deciding on any treatment."
      ctaDescription="Talk through your goals with a doctor who will give honest advice."
    />
  );
}
