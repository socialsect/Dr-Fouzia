import type { Metadata } from "next";
import { HealthConcernContent } from "@/components/layout/HealthConcernContent";

export const metadata: Metadata = {
  title: "Anti Aging Consultation Dubai | Dr Fouzia Al Ali",
  description:
    "Book an anti aging consultation in Dubai with a doctor. Dr Fouzia assesses your skin and goals and explains your options, risks and costs before any treatment.",
};

export default function AntiAgingAestheticConsultationPage() {
  return (
    <HealthConcernContent
      eyebrowLabel="Aesthetic medicine"
      highlightsEyebrow="Aesthetic consultation in Dubai"
      title="Anti Aging Consultation"
      highlight="in Dubai"
      description="Unhurried advice before any decision. Deciding on aesthetic care is easier when you have clear, honest information. Dr Fouzia is a consultant family physician who offers an anti aging consultation in Dubai that is about advice first, not treatment. She takes time to look at your skin and face, hear what you would like to change, explain the options and risks and tell you plainly when a treatment is not needed or not right for you. You leave with a plan you can think about, with no obligation to go ahead."
      highlightsTitle="What the visit"
      highlightsAccent="covers."
      highlights={[
        "Your goals and what you would like to leave unchanged",
        "Your medical history, medicines and allergies",
        "Your skin, facial proportions and areas of concern",
        "Options, risks, costs and timing",
      ]}
      sections={[
        {
          eyebrow: "Anti aging doctor in Dubai",
          heading: "Why see a doctor",
          accent: "first.",
          paragraphs: [
            "A doctor can check that treatment is safe for you, tell you which options have evidence and which do not, and manage side effects if they occur. Dr Fouzia may also suggest simple steps that cost little, such as sun protection and skincare changes, before any procedure.",
          ],
          links: [{ label: "Skin and hair health", href: "/skin-hair-health" }],
        },
        {
          eyebrow: "Facial rejuvenation consultation in Dubai",
          heading: "Options that may",
          accent: "be discussed.",
          paragraphs: [
            "Depending on your goals and suitability, the conversation may cover the following. Only treatments the clinic offers and is licensed to provide should be considered. Nothing is done at the consultation unless you choose it and give consent.",
          ],
          bullets: [
            "Wrinkle-softening injections",
            "Dermal fillers",
            "Skin boosters",
            "Microneedling",
            "PRP treatments",
            "Skincare and sun protection",
          ],
          links: [
            { label: "Anti-wrinkle treatments", href: "/anti-wrinkle-treatments" },
            { label: "Dermal fillers", href: "/dermal-fillers" },
            { label: "Skin boosters", href: "/skin-boosters" },
            { label: "Microneedling", href: "/microneedling-dermapen" },
            { label: "PRP for the face", href: "/prp-face" },
          ],
        },
        {
          eyebrow: "Aesthetic assessment in Dubai",
          heading: "A careful look",
          accent: "at your skin and face.",
          paragraphs: [
            "The assessment may consider skin type and condition, signs of sun damage, facial volume and symmetry, the areas you are concerned about and how they fit with your whole face. The consultation is a chance to talk through each concern and understand what is realistic.",
          ],
        },
        {
          eyebrow: "Who it suits",
          heading: "Advice without",
          accent: "pressure.",
          paragraphs: [
            "The consultation is for adults curious about aesthetic options, people considering their first treatment and those who have had treatment elsewhere and would like a medical opinion. Some treatments are not recommended during pregnancy or breastfeeding, with an infection or active skin condition, certain autoimmune or bleeding conditions, or while taking some medicines.",
            "If worry about appearance is causing significant distress, Dr Fouzia may suggest support before treatment. Share your health history so she can discuss what is suitable for you.",
          ],
        },
      ]}
      faqs={[
        {
          question: "Do I have to book a treatment?",
          answer: "No. The consultation is for advice. You decide whether to proceed.",
        },
        {
          question: "What should I bring?",
          answer: "Bring a list of your medicines and any previous treatments, and any photos or products you would like to discuss.",
        },
        {
          question: "Can I have treatment on the same day?",
          answer: "Please ask the clinic about its current policy. Any treatment depends on assessment and your consent.",
        },
        {
          question: "How much does the consultation cost?",
          answer: "Contact the clinic for current fees and what is included.",
        },
        {
          question: "Do you show before-and-after photos?",
          answer: "Please ask the clinic which photos, if any, are approved for use and shown with patient consent.",
        },
      ]}
      safety={{
        text: "If you have an urgent concern after any treatment, contact the clinic. Seek emergency care for difficulty breathing, severe pain or sudden vision changes. In the UAE, call",
        emergencyLinks: [{ label: "998 for an ambulance", href: "tel:998" }],
        closing: "for emergencies.",
      }}
      ctaTitle="Book an unhurried"
      ctaAccent="consultation."
      ctaDescription="Talk through your goals with a doctor who will give honest advice."
    />
  );
}
