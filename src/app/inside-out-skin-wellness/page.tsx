import type { Metadata } from "next";
import { HealthConcernContent } from "@/components/layout/HealthConcernContent";

export const metadata: Metadata = {
  title: "Skin Wellness Dubai | Inside-Out Programme | Dr Fouzia",
  description:
    "A doctor-led skin wellness programme in Dubai. Dr Fouzia looks at hormones, nutrition, stress and sleep alongside your skincare. Book a consultation.",
};

export default function InsideOutSkinWellnessPage() {
  return (
    <HealthConcernContent
      eyebrowLabel="Programme"
      highlightsEyebrow="Skin health programme in Dubai"
      title="Skin Wellness"
      highlight="in Dubai"
      description="Looking after skin from the inside as well as the surface. Skin responds to more than the products you put on it. Hormones, sleep, stress, food, medicines and underlying conditions can all play a part in breakouts, redness, dryness, pigmentation or dull-looking skin. Dr Fouzia is a consultant family physician who offers this skin wellness programme in Dubai. It starts with a medical review and builds a plan covering skincare habits, nutrition, sleep and stress, with Calm Mind Sessions skills where stress and skin seem linked."
      highlightsTitle="Concerns we"
      highlightsAccent="look at."
      highlights={[
        "Acne and breakouts",
        "Redness and rosacea",
        "Dry, itchy or sensitive skin, and eczema",
        "Uneven tone and pigmentation",
        "Skin that looks tired, dull or older than you feel",
        "Skin changes that follow hormone shifts, stress or illness",
      ]}
      sections={[
        {
          eyebrow: "Functional medicine skin health in Dubai",
          heading: "The medical",
          accent: "review first.",
          paragraphs: [
            "Some skin problems need a dermatologist, and some signal an internal issue such as thyroid disease, iron deficiency or polycystic ovary syndrome. Dr Fouzia reviews your history, skin, medicines and, where useful, selected blood tests. She will refer you to a dermatologist when a skin condition needs specialist or prescription care.",
          ],
          links: [
            { label: "Skin and hair health", href: "/skin-hair-health" },
          ],
        },
        {
          eyebrow: "Healthy skin in Dubai",
          heading: "What the programme",
          accent: "includes.",
          paragraphs: [
            "The programme is built around your skin concerns, history and goals, and adjusted at each review.",
          ],
          bullets: [
            "A first consultation covering skin history, routine, products, sleep, stress and goals",
            "A medical review, with tests only where there is a reason",
            "A simple skincare routine, avoiding long product lists",
            "Nutrition and lifestyle guidance, with supplements only when justified",
            "Calm Mind Sessions skills for stress, picking, self-criticism and appearance worry where relevant",
            "Follow-up reviews to see how your skin is responding and adjust",
          ],
        },
        {
          eyebrow: "Skin rejuvenation in Dubai",
          heading: "Where this programme",
          accent: "fits.",
          paragraphs: [
            "This programme is medical and lifestyle-based. It does not include injectables, lasers or other cosmetic procedures. If you are interested in those, they are on the aesthetic medicine pages and begin with a separate consultation.",
          ],
          links: [
            { label: "Aesthetic medicine", href: "/aesthetic-medicine" },
            { label: "Personalised nutrition", href: "/personalised-nutrition" },
            { label: "Supplement review", href: "/supplement-review" },
            { label: "Calm Mind Sessions for stress management", href: "/calm-mind-sessions-stress-management" },
          ],
        },
        {
          eyebrow: "Who the programme suits",
          heading: "Support for ongoing",
          accent: "skin concerns.",
          paragraphs: [
            "The programme is for adults with ongoing skin concerns who want to understand possible internal contributors alongside external care. It does not replace dermatology assessment or prescription treatment when those are needed. Dr Fouzia can help identify when a specialist review is the right next step.",
          ],
        },
      ]}
      faqs={[
        {
          question: "Will this clear my acne or rosacea?",
          answer:
            "Results vary and cannot be promised. The aim is to find and address likely contributors and agree a plan.",
        },
        {
          question: "Do I need blood tests?",
          answer:
            "Only where your history points to a reason.",
        },
        {
          question: "Can I do it online?",
          answer:
            "Yes, the programme is available online as well as in person in Dubai.",
        },
        {
          question: "What does it cost?",
          answer:
            "Fees are confirmed at your first consultation. Message us for current information.",
        },
        {
          question: "Do you prescribe skin medicines?",
          answer: "The right care depends on your assessment. Dr Fouzia can discuss appropriate treatment or refer you for specialist care when needed.",
        },
      ]}
      safety={{
        text: "See a doctor promptly for a mole that changes, a sore that does not heal, a sudden widespread rash, facial swelling or breathing difficulty. In the UAE, call",
        emergencyLinks: [
          { label: "998 for an ambulance", href: "tel:998" },
        ],
        closing: "for severe reactions.",
      }}
      ctaTitle="Start with a medical look at"
      ctaAccent="what may be affecting your skin."
      ctaDescription="Book a consultation with a doctor who has time to listen."
    />
  );
}
