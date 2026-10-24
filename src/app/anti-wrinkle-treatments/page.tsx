import type { Metadata } from "next";
import { HealthConcernContent } from "@/components/layout/HealthConcernContent";

export const metadata: Metadata = {
  title: "Anti Wrinkle Treatment Dubai | Dr Fouzia Al Ali",
  description:
    "Considering anti wrinkle treatment in Dubai? Dr Fouzia offers a full doctor-led consultation first, covering options, risks and realistic expectations.",
};

export default function AntiWrinkleTreatmentsPage() {
  return (
    <HealthConcernContent
      eyebrowLabel="Aesthetic medicine"
      highlightsEyebrow="Wrinkle treatment in Dubai"
      title="Anti Wrinkle Treatment"
      highlight="in Dubai"
      description="A consultation first, a considered plan second. Lines around the eyes, forehead and between the brows form from repeated facial movement, sun exposure and the natural changes in skin over time. Anti wrinkle injections are one option some people consider. Dr Fouzia is a consultant family physician who offers a doctor-led consultation in Dubai before any treatment. She reviews your health, explains how treatment works, what it involves, the risks and what is realistic, and you decide whether to go ahead."
      highlightsTitle="Areas often"
      highlightsAccent="discussed."
      highlights={[
        "Lines across the forehead",
        "Frown lines between the eyebrows",
        "Lines at the outer corners of the eyes",
        "Other areas, as discussed at consultation",
      ]}
      sections={[
        {
          eyebrow: "Anti wrinkle injections in Dubai",
          heading: "What the",
          accent: "treatment is.",
          paragraphs: [
            "Anti wrinkle injections are given in small amounts into targeted facial muscles to reduce the movement that creases the skin above them. They are a medical procedure and the medicine used is prescription-only, so they should only be given after assessment by a licensed doctor. Whether treatment is suitable depends on your face, your goals and your health. Not every line needs treating.",
          ],
        },
        {
          eyebrow: "Facial wrinkle treatment in Dubai",
          heading: "What to expect",
          accent: "at your visit.",
          paragraphs: [
            "Effects take days to appear and wear off over time, so repeat treatment is needed to maintain them.",
          ],
          bullets: [
            "A consultation covering your goals, medical history, medicines, allergies and skin",
            "A discussion of options, risks, possible side effects, costs and what results are realistic",
            "Written consent before anything is done",
            "Treatment, which is quick and is usually done in the clinic during the same visit",
            "Aftercare advice, and a review where agreed",
          ],
        },
        {
          eyebrow: "Aesthetic doctor in Dubai",
          heading: "Why a doctor-led",
          accent: "approach matters.",
          paragraphs: [
            "A doctor can check whether treatment is safe for you, tailor it to your face, and manage side effects or complications if they occur. Dr Fouzia will tell you if treatment is not suitable, not needed or better delayed.",
            "Possible side effects include redness, swelling, bruising, headache or a drooping eyelid or brow. These usually settle with time. Rare complications can occur and will be explained at your consultation.",
          ],
          links: [
            { label: "Aesthetic medicine", href: "/aesthetic-medicine" },
            { label: "Dermal fillers", href: "/dermal-fillers" },
            { label: "Facial contouring", href: "/facial-contouring" },
            { label: "Skin boosters", href: "/skin-boosters" },
          ],
        },
        {
          eyebrow: "Treatment suitability",
          heading: "When treatment may",
          accent: "not be suitable.",
          paragraphs: [
            "Treatment is generally not recommended during pregnancy or breastfeeding, with certain neuromuscular conditions, an infection at the treatment site or an allergy to the product, or while taking some medicines. Share your full medical history so the doctor can assess your individual situation.",
          ],
        },
      ]}
      faqs={[
        {
          question: "Is it safe?",
          answer:
            "It is a medical procedure with risks. Safety depends on a proper assessment and a trained doctor. Risks are explained before you consent.",
        },
        {
          question: "Will I look \u201cfrozen\u201d?",
          answer:
            "The aim is to discuss your goals and use a measured approach, but individual results vary and cannot be guaranteed.",
        },
        {
          question: "How long does it last?",
          answer:
            "Effects fade over a few months. The timing is discussed at your consultation.",
        },
        {
          question: "How much does it cost?",
          answer:
            "Fees are confirmed at your consultation. Message us for current information.",
        },
        {
          question: "When do effects appear and how long do they last?",
          answer: "Effects take days to appear and fade over time. Timing varies and is discussed at your consultation.",
        },
        {
          question: "Do you show before-and-after photos?",
          answer: "Ask the clinic whether approved photos are available and shown with patient consent.",
        },
      ]}
      safety={{
        text: "Seek urgent care for difficulty breathing or swallowing, widespread rash, swelling of the face or throat, drooping that affects vision, or severe pain after treatment. In the UAE, call",
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
