import type { Metadata } from "next";
import { HealthConcernContent } from "@/components/layout/HealthConcernContent";

export const metadata: Metadata = {
  title: "Skin Boosters Dubai | Dr Fouzia Al Ali",
  description:
    "Considering skin boosters in Dubai? Dr Fouzia offers a doctor-led consultation on injectable hydration treatments, risks and realistic expectations first.",
};

export default function SkinBoostersPage() {
  return (
    <HealthConcernContent
      eyebrowLabel="Aesthetic medicine"
      highlightsEyebrow="Skin hydration treatment in Dubai"
      title="Skin Boosters"
      highlight="in Dubai"
      description="A closer look at injectable skin hydration. Skin boosters are small injections of a hyaluronic acid-based gel placed just under the skin surface. They are aimed at skin hydration and quality, not at adding volume the way fillers do. Dr Fouzia is a consultant family physician who offers a doctor-led skin booster consultation in Dubai. She assesses your skin and health, explains what the treatment involves and its limits, and helps you decide whether it is right for you."
      highlightsTitle="What can"
      highlightsAccent="be discussed."
      highlights={[
        "Skin that feels dry, dull or rough",
        "How treatment fits alongside sun protection and skincare",
        "Areas such as the face, neck and hands",
        "Whether skin boosters or another approach would suit you better",
      ]}
      sections={[
        {
          eyebrow: "Skin booster treatment in Dubai",
          heading: "How it",
          accent: "works.",
          paragraphs: [
            "Hyaluronic acid is a substance that holds water. In skin boosters, tiny amounts are placed at many points across the skin so that the gel spreads out through the tissue. Effects are temporary, and treatment is usually repeated in a short course. Evidence on how well different products work is still developing, and results vary.",
          ],
        },
        {
          eyebrow: "Injectable skin boosters in Dubai",
          heading: "What to expect",
          accent: "at your visit.",
          paragraphs: [
            "Nothing is done until you have been fully informed and have given written consent.",
          ],
          bullets: [
            "A consultation covering your skin, goals, medical history, medicines, allergies and previous treatments",
            "A discussion of options, risks, costs and realistic outcomes",
            "Written consent before treatment",
            "Treatment with multiple small injections, using numbing cream where appropriate",
            "Aftercare advice and a review where agreed",
          ],
        },
        {
          eyebrow: "Skin rejuvenation in Dubai",
          heading: "How this treatment",
          accent: "fits.",
          paragraphs: [
            "Skin boosters are one option among others. Dr Fouzia also considers non-injectable steps first, such as daily skincare, sun protection and lifestyle, where those would help. If you are interested in the medical and lifestyle side of skin health, see the Inside-Out Skin Wellness programme.",
            "Possible side effects include redness, swelling, small bumps, bruising and tenderness, which usually settle within days. Less commonly, infection, lumps or an allergic reaction can occur. Your doctor will explain these risks before you consent.",
          ],
          links: [
            { label: "Inside-Out skin wellness", href: "/inside-out-skin-wellness" },
            { label: "Aesthetic medicine", href: "/aesthetic-medicine" },
            { label: "Dermal fillers", href: "/dermal-fillers" },
            { label: "Skin and hair health", href: "/skin-hair-health" },
          ],
        },
        {
          eyebrow: "Suitability and care",
          heading: "When skin boosters",
          accent: "may not be suitable.",
          paragraphs: [
            "Treatment is generally not recommended during pregnancy or breastfeeding, with an infection or active skin condition at the site, certain autoimmune or bleeding conditions, a history of severe allergy, or while taking some medicines. Share your full health history so your doctor can assess what is appropriate.",
          ],
        },
      ]}
      faqs={[
        {
          question: "How is this different from dermal fillers?",
          answer:
            "Fillers add volume and shape. Skin boosters aim to improve skin hydration.",
        },
        {
          question: "How many sessions will I need?",
          answer:
            "It depends on your skin and the product used. The typical course is discussed at your consultation.",
        },
        {
          question: "Is there downtime?",
          answer:
            "Some redness or small bumps can last a few days.",
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
        text: "Seek urgent care for severe pain, spreading redness, fever, a white, blue or mottled patch of skin, difficulty breathing or facial swelling after treatment. In the UAE, call",
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
