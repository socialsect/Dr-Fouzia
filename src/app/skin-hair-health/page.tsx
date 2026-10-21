import type { Metadata } from "next";
import { HealthConcernContent } from "@/components/layout/HealthConcernContent";

export const metadata: Metadata = {
  title: "Skin and Hair Health Dubai",
  description:
    "A medical review for skin and hair concerns in Dubai, considering possible health factors and referral to dermatology when appropriate.",
};

export default function SkinHairHealthPage() {
  return (
    <HealthConcernContent
      title="Skin and Hair Health in Dubai"
      highlight="Look beneath the surface first"
      description="Skin and hair changes can be linked to hormones, nutrition, digestion, stress or medicines, or they may need assessment as a skin condition in their own right. Dr Fouzia is a consultant family physician who starts with your history and an examination, then considers which everyday or medical factors may be relevant."
      highlightsTitle="A review shaped around"
      highlightsAccent="your concerns."
      highlights={[
        "Acne, eczema, rosacea and other common skin concerns assessed",
        "Hair loss reviewed by its pattern, timing and likely contributors",
        "Hormone and cycle history considered when symptoms occur together",
        "Iron, thyroid or vitamin tests considered only when your history suggests a need",
        "Diet and digestive symptoms discussed when relevant",
        "Skincare and supplement guidance kept simple and evidence-aware",
      ]}
      sections={[
        {
          eyebrow: "Hair health doctor in Dubai",
          heading: "First understand the pattern of",
          accent: "hair change.",
          paragraphs: [
            "Hair shedding can follow illness, stress, childbirth, major dietary changes or low iron. Thinning may also be linked to thyroid conditions, hormone changes or inherited patterns. Because the causes and next steps differ, the first step is to understand what applies to you.",
          ],
          links: [
            { label: "Explore women’s hormonal health", href: "/womens-hormonal-health" },
            { label: "Read about health marker reviews", href: "/health-marker-review" },
          ],
        },
        {
          eyebrow: "Skin health doctor in Dubai",
          heading: "Review the skin concern and",
          accent: "the wider picture.",
          paragraphs: [
            "A review can cover how long the concern has lasted, what changes it, current skincare, medicines and supplements, and whether hormones, diet or stress may be relevant. Some conditions need diagnosis and treatment from a dermatologist.",
          ],
          bullets: [
            "When the skin or hair change began and how it has progressed",
            "Current skincare, medicines and supplements",
            "Hormonal factors, diet and stress where relevant",
            "Whether referral to a dermatologist would help",
          ],
        },
        {
          eyebrow: "Working alongside dermatology",
          heading: "Whole-person care can",
          accent: "support specialist care.",
          paragraphs: [
            "A family physician can review general health and lifestyle factors that may be relevant to skin or hair symptoms. This supports, but does not replace, dermatology. If a concern needs specialist assessment or prescription treatment, Dr Fouzia can discuss referral.",
          ],
          links: [
            { label: "Explore aesthetic medicine", href: "/aesthetic-medicine" },
            { label: "Explore gut and digestive health", href: "/gut-digestive-health" },
          ],
        },
        {
          eyebrow: "Who this suits",
          heading: "For ongoing skin or hair",
          accent: "concerns.",
          paragraphs: [
            "This consultation may suit adults with persistent acne, eczema, rosacea, hair shedding or thinning, especially when other symptoms such as fatigue, irregular periods or digestive trouble are also present.",
          ],
        },
      ]}
      faqs={[
        {
          question: "Can you treat hair loss?",
          answer:
            "Treatment depends on the cause. Dr Fouzia can review general health factors and explain whether further assessment or referral to a dermatologist is appropriate.",
        },
        {
          question: "Do I need blood tests?",
          answer:
            "Sometimes. Tests are considered when your history or examination suggests a likely cause and a result could help guide next steps.",
        },
        {
          question: "Is this the same as seeing a dermatologist?",
          answer:
            "No. Dr Fouzia is a family physician. She can assess general health factors and discuss referral when a skin specialist is needed.",
        },
        {
          question: "Do you offer cosmetic skin treatments?",
          answer:
            "Cosmetic services are described on the separate aesthetic medicine page, linked above.",
        },
      ]}
      safety={{
        text: "Arrange prompt medical review for a changing mole, a sore that does not heal, a sudden widespread rash or sudden patchy hair loss with scalp pain. Swelling with breathing difficulty is an emergency. Call",
        emergencyLinks: [{ label: "998 for an ambulance", href: "tel:998" }],
        closing: "in the UAE.",
      }}
      ctaTitle="Talk through your skin and hair"
      ctaAccent="concerns."
      ctaDescription="Share your story with a doctor who has time to listen."
    />
  );
}
