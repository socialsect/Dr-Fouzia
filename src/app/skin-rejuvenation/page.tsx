import type { Metadata } from "next";
import { HealthConcernContent } from "@/components/layout/HealthConcernContent";

export const metadata: Metadata = {
  title: "Skin Rejuvenation Dubai | Dr Fouzia Al Ali",
  description:
    "Exploring skin rejuvenation in Dubai? Dr Fouzia offers a doctor-led consultation on skin treatment options, risks and realistic expectations before you decide.",
};

export default function SkinRejuvenationPage() {
  return (
    <HealthConcernContent
      eyebrowLabel="Aesthetic medicine"
      highlightsEyebrow="Facial rejuvenation in Dubai"
      title="Skin Rejuvenation"
      highlight="in Dubai"
      description="A doctor’s guide to your skin treatment options. Skin rejuvenation covers a range of treatments and habits related to how skin looks and feels, including texture, tone and signs of sun damage. Not every option suits every person, and results vary. Dr Fouzia is a consultant family physician who offers a doctor-led skin rejuvenation consultation in Dubai. She assesses your skin and health, explains which options may be worth considering and which are not, and helps you plan at a pace you are comfortable with."
      highlightsTitle="Concerns that can"
      highlightsAccent="be discussed."
      highlights={[
        "Sun damage and uneven skin tone",
        "Pigmentation",
        "Dull or rough-feeling skin",
        "Fine lines",
        "Acne scarring",
      ]}
      sections={[
        {
          eyebrow: "Skin rejuvenation treatment in Dubai",
          heading: "Options that may",
          accent: "be discussed.",
          paragraphs: [
            "Depending on your concerns and suitability, the consultation may cover microneedling, PRP for the face, skin boosters, skincare and sun protection. Nothing is done at the consultation unless you choose it and give consent.",
          ],
          links: [
            { label: "Microneedling", href: "/microneedling-dermapen" },
            { label: "PRP for the face", href: "/prp-face" },
            { label: "Skin boosters", href: "/skin-boosters" },
          ],
        },
        {
          eyebrow: "A considered skin plan",
          heading: "Start with",
          accent: "the basics.",
          paragraphs: [
            "Daily sun protection, a simple routine, sleep, smoking and nutrition all affect skin over time, and they can make any treatment work better or worse. Dr Fouzia talks through these alongside treatment choices.",
            "She will tell you what is realistic and whether a different approach, such as skincare changes or a skin check by a dermatologist, would be better.",
          ],
          links: [
            { label: "Inside-Out Skin Wellness", href: "/inside-out-skin-wellness" },
            { label: "Skin and hair health", href: "/skin-hair-health" },
          ],
        },
        {
          eyebrow: "A considered first visit",
          heading: "What to expect",
          accent: "at your visit.",
          paragraphs: [
            "Your consultation covers your skin, goals, medical history, medicines, allergies and previous treatments. Dr Fouzia assesses your skin and discusses options, risks, costs and realistic outcomes.",
          ],
          bullets: [
            "A written plan, if you would like one, with no obligation to proceed",
            "Written consent before any treatment",
            "Aftercare advice and a review where agreed",
          ],
        },
        {
          eyebrow: "Suitability and care",
          heading: "When treatment may",
          accent: "not be suitable.",
          paragraphs: [
            "Some treatments are not recommended if you are pregnant or breastfeeding, have an infection or active skin condition, a history of keloid scarring, certain autoimmune or bleeding conditions, recent sun exposure or take some medicines. Please share your full health history so your clinician can assess what is appropriate.",
          ],
        },
      ]}
      faqs={[
        {
          question: "Which treatment is best for me?",
          answer: "That depends on your skin, goals and health. The consultation is for working that out.",
        },
        {
          question: "How many sessions will I need?",
          answer: "It varies by treatment. Your clinician can discuss a suitable plan after assessing you.",
        },
        {
          question: "Is there downtime?",
          answer: "It varies by treatment and is explained at consultation.",
        },
        {
          question: "How much does it cost?",
          answer: "Please contact the clinic for current fees and what is included.",
        },
        {
          question: "Do you show before-and-after photos?",
          answer: "Please ask the clinic which photos, if any, are approved for use and shown with patient consent.",
        },
      ]}
      safety={{
        text: "See a doctor promptly for a mole that changes, a sore that does not heal or a sudden widespread rash. Seek urgent care for spreading redness, pus, fever or an allergic reaction after any treatment. In the UAE, call",
        emergencyLinks: [{ label: "998 for an ambulance", href: "tel:998" }],
        closing: "for emergencies. Contact the clinic for aftercare advice.",
      }}
      ctaTitle="Book a consultation to"
      ctaAccent="talk through your skin options."
      ctaDescription="Speak with a doctor who will give honest advice about your skin and the options available."
    />
  );
}
