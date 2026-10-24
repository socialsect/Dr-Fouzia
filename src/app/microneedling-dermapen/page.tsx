import type { Metadata } from "next";
import { HealthConcernContent } from "@/components/layout/HealthConcernContent";

export const metadata: Metadata = {
  title: "Microneedling Dubai | Dr Fouzia Al Ali",
  description:
    "Considering microneedling in Dubai? Dr Fouzia offers a doctor-led consultation on the treatment, risks and realistic expectations before you decide.",
};

export default function MicroneedlingDermapenPage() {
  return (
    <HealthConcernContent
      eyebrowLabel="Aesthetic medicine"
      highlightsEyebrow="Microneedling for skin in Dubai"
      title="Microneedling"
      highlight="in Dubai"
      description="A medical look at a popular skin treatment. Microneedling uses very fine needles to make tiny, controlled pricks in the skin. The skin then goes through its natural healing process. It is used for concerns such as uneven texture, acne scarring and fine lines, although how well it works varies between people. Dr Fouzia is a consultant family physician who offers a doctor-led microneedling consultation in Dubai. She assesses your skin and health, explains the treatment and its limits and helps you decide whether it suits you."
      highlightsTitle="Concerns that may"
      highlightsAccent="be discussed."
      highlights={[
        "Uneven skin texture",
        "Acne scarring",
        "Fine lines",
        "Enlarged-looking pores",
        "Uneven skin tone",
      ]}
      sections={[
        {
          eyebrow: "Dermapen in Dubai",
          heading: "What the",
          accent: "treatment is.",
          paragraphs: [
            "A microneedling pen is a handheld device with a cluster of fine needles that move in and out of the skin at set depths. Depth and technique are chosen according to the area and your skin. Each tiny puncture triggers the skin\u2019s repair response. With a course of sessions, some people notice changes in texture or appearance, but results vary and cannot be guaranteed. Evidence is stronger for some uses, such as acne scars, than for others.",
          ],
        },
        {
          eyebrow: "Microneedling treatment in Dubai",
          heading: "What to expect",
          accent: "at your visit.",
          paragraphs: [
            "Nothing is done until you have been fully informed and have given written consent.",
          ],
          bullets: [
            "A consultation covering your skin, goals, medical history, medicines, allergies and previous treatments",
            "A discussion of options, risks, costs and realistic outcomes",
            "Written consent before treatment",
            "Treatment, with numbing cream applied beforehand",
            "Aftercare advice, including sun protection, and a review where agreed",
          ],
        },
        {
          eyebrow: "Skin rejuvenation in Dubai",
          heading: "Where microneedling",
          accent: "fits.",
          paragraphs: [
            "Microneedling is one of several options for skin quality. Dr Fouzia will tell you whether it is suitable for your skin, or whether another approach would be better.",
            "Possible side effects include redness, swelling, dryness and tenderness, which usually settle within days. Less commonly, infection, prolonged redness, pigmentation changes or scarring can occur. Your doctor will explain these risks before you consent.",
          ],
          links: [
            { label: "Skin rejuvenation", href: "/skin-rejuvenation" },
            { label: "Inside-Out skin wellness", href: "/inside-out-skin-wellness" },
            { label: "PRP face", href: "/prp-face" },
            { label: "Skin boosters", href: "/skin-boosters" },
          ],
        },
        {
          eyebrow: "Suitability and care",
          heading: "When microneedling",
          accent: "may not be suitable.",
          paragraphs: [
            "Treatment is generally not recommended during pregnancy or breastfeeding, with active acne flare-ups, a skin infection, eczema or psoriasis at the site, a tendency to keloid scarring, a bleeding disorder or recent isotretinoin treatment, or while taking some medicines. Please share your full health history so your clinician can assess what is appropriate.",
          ],
        },
      ]}
      faqs={[
        {
          question: "Does it hurt?",
          answer:
            "Numbing cream is used, and many people describe it as uncomfortable but tolerable. Experience varies.",
        },
        {
          question: "How many sessions will I need?",
          answer:
            "It depends on your skin and goals. The typical course is discussed at your consultation.",
        },
        {
          question: "Is there downtime?",
          answer:
            "Redness and dryness can last a few days.",
        },
        {
          question: "How much does it cost?",
          answer:
            "Fees are confirmed at your consultation. Message us for current information.",
        },
        {
          question: "Do you show before-and-after photos?",
          answer: "Ask the clinic whether approved photos are available and shown with patient consent.",
        },
      ]}
      safety={{
        text: "Seek urgent care for spreading redness, pus, fever, severe pain or an allergic reaction after treatment. In the UAE, call",
        emergencyLinks: [
          { label: "998 for an ambulance", href: "tel:998" },
        ],
        closing: "for emergencies. Contact the clinic first for any concern.",
      }}
      ctaTitle="Book a consultation to"
      ctaAccent="talk through your options."
      ctaDescription="Speak with a doctor who will give honest advice."
    />
  );
}
