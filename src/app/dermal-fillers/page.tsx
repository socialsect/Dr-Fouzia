import type { Metadata } from "next";
import { HealthConcernContent } from "@/components/layout/HealthConcernContent";

export const metadata: Metadata = {
  title: "Dermal Fillers Dubai | Dr Fouzia Al Ali",
  description:
    "Considering dermal fillers in Dubai? Dr Fouzia offers a doctor-led consultation covering options, risks and realistic expectations before any treatment.",
};

export default function DermalFillersPage() {
  return (
    <HealthConcernContent
      eyebrowLabel="Aesthetic medicine"
      highlightsEyebrow="Facial fillers in Dubai"
      title="Dermal Fillers"
      highlight="in Dubai"
      description="Understand your options before you decide. Dermal fillers are injectable gels placed under the skin to add volume or shape to areas such as the lips, cheeks, chin and jawline. They are a medical procedure, so a proper assessment should come first. Dr Fouzia is a consultant family physician who offers a doctor-led consultation for dermal fillers in Dubai. She reviews your face, health and goals, explains how treatment works, the possible risks and what is realistic, and you decide whether to go ahead."
      highlightsTitle="Areas that may"
      highlightsAccent="be discussed."
      highlights={[
        "Lip treatment: options, proportions and comfort with change",
        "Cheek treatment: support or volume in the mid-face",
        "Chin treatment: balance of the lower face in profile",
        "Jawline: how it relates to chin, cheeks and neck",
      ]}
      sections={[
        {
          eyebrow: "Facial fillers in Dubai",
          heading: "How they",
          accent: "work.",
          paragraphs: [
            "Most fillers are made from hyaluronic acid, a substance the body also produces naturally. The gel is injected in small amounts to add volume or support. Effects are temporary and fade over time as the body absorbs the product.",
          ],
        },
        {
          eyebrow: "What to expect at your visit",
          heading: "A careful order",
          accent: "at every step.",
          paragraphs: [
            "Nothing is done until you have been fully informed and have given written consent.",
          ],
          bullets: [
            "A consultation covering goals, medical history, medicines, allergies and previous treatments",
            "A discussion of options, risks, costs, downtime and what results are realistic",
            "Written consent before treatment",
            "Treatment in the clinic, which may use numbing cream or local anaesthetic",
            "Aftercare advice and a review where agreed",
          ],
        },
        {
          eyebrow: "Possible risks and side effects",
          heading: "What to",
          accent: "be aware of.",
          paragraphs: [
            "Swelling, bruising, tenderness, lumps and asymmetry are common and usually settle. Less commonly, infection, allergic reaction or a blocked blood vessel can occur. A blocked vessel is rare but serious and needs urgent treatment, which can lead to skin damage or, very rarely, vision loss. Your doctor will explain these risks before you consent.",
          ],
          links: [
            { label: "Aesthetic medicine", href: "/aesthetic-medicine" },
            { label: "Anti-wrinkle treatments", href: "/anti-wrinkle-treatments" },
            { label: "Facial contouring", href: "/facial-contouring" },
            { label: "Skin boosters", href: "/skin-boosters" },
          ],
        },
        {
          eyebrow: "Suitability and care",
          heading: "When fillers may",
          accent: "not be suitable.",
          paragraphs: [
            "Treatment is generally not recommended during pregnancy or breastfeeding, with an infection or active skin condition at the site, certain autoimmune or bleeding conditions, a history of severe allergy, or while taking some medicines. Share your full health history so your clinician can assess what is appropriate.",
          ],
        },
      ]}
      faqs={[
        {
          question: "Are fillers permanent?",
          answer:
            "Most hyaluronic acid fillers are temporary and are absorbed over time. The timing is discussed at your consultation.",
        },
        {
          question: "Can fillers be reversed?",
          answer:
            "Hyaluronic acid fillers can sometimes be dissolved. Ask at your consultation.",
        },
        {
          question: "Will I look \u201coverdone\u201d?",
          answer:
            "The aim is to discuss your goals and keep treatment measured, but results vary and cannot be guaranteed.",
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
        text: "Seek urgent care immediately for severe pain, a white, blue or mottled patch of skin, sudden vision change, difficulty breathing or swelling of the face or throat after treatment. In the UAE, call",
        emergencyLinks: [
          { label: "998 for an ambulance", href: "tel:998" },
        ],
        closing: "Contact the clinic first for any concern.",
      }}
      ctaTitle="Book a consultation to"
      ctaAccent="talk through your options."
      ctaDescription="Speak with a doctor who will give honest advice."
    />
  );
}
