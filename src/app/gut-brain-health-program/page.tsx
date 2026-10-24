import type { Metadata } from "next";
import { HealthConcernContent } from "@/components/layout/HealthConcernContent";

export const metadata: Metadata = {
  title: "Gut Brain Health Dubai | Dr Fouzia Al Ali",
  description:
    "Digestive symptoms and stress often go together. Dr Fouzia offers a gut brain health programme in Dubai, joining medical review, nutrition and CBT skills.",
};

export default function GutBrainHealthProgramPage() {
  return (
    <HealthConcernContent
      eyebrowLabel="Programme"
      highlightsEyebrow="Gut brain consultation in Dubai"
      title="Gut Brain Health Programme"
      highlight="in Dubai"
      description="When digestion and stress affect each other. Many people notice that stress upsets their stomach, and that a troubled gut can leave them anxious, tired or foggy. Researchers call this two-way link the gut-brain axis, and it is an active area of study. Dr Fouzia is a consultant family physician who offers a gut brain health programme in Dubai. It joins a careful medical review of your digestive symptoms with nutrition support and CBT skills for stress and worry, in one plan."
      highlightsTitle="Who it"
      highlightsAccent="suits."
      highlights={[
        "People with bloating, discomfort, constipation or loose stools that flare with stress",
        "Those diagnosed with irritable bowel syndrome (IBS), or who suspect it",
        "People whose digestion, mood, sleep or concentration all seem to be affected",
        "Anyone who has had normal tests but still has symptoms",
      ]}
      sections={[
        {
          eyebrow: "Gut brain axis in Dubai",
          heading: "What the",
          accent: "term means.",
          paragraphs: [
            "The gut and the brain communicate through nerves, hormones and the immune system. Stress, sleep, food and mood can all influence digestion, and digestive symptoms can in turn affect how you feel. This does not mean one causes the other in every case. The programme looks at where the link may apply to you.",
          ],
        },
        {
          eyebrow: "Functional medicine gut health in Dubai",
          heading: "The medical",
          accent: "review first.",
          paragraphs: [
            "Digestive symptoms can have causes that need proper checking, such as coeliac disease, inflammatory bowel disease, infection, thyroid problems or medicine side effects. Dr Fouzia reviews your history and symptoms, arranges tests only where they would change your care, and checks first for warning signs.",
          ],
          links: [
            { label: "Gut and digestive health", href: "/gut-digestive-health" },
          ],
        },
        {
          eyebrow: "Digestive health and stress in Dubai",
          heading: "What the programme",
          accent: "includes.",
          paragraphs: [
            "The programme is built around your symptoms, history and goals, and adjusted at each review.",
          ],
          bullets: [
            "A first consultation covering digestive symptoms, stress, sleep, mood and routine",
            "A medical review, with tests only where there is a reason",
            "Nutrition support: regular meal patterns, food diary review and gradual changes, not extreme diets",
            "CBT skills for stress, worry and gut-related anxiety",
            "Follow-up reviews to see what is helping and adjust",
          ],
        },
      ]}
      faqs={[
        {
          question: "Is IBS caused by stress?",
          answer:
            "Stress does not cause IBS on its own, but it can make symptoms worse in many people. A doctor should confirm the diagnosis first.",
        },
        {
          question: "Will I have to follow a restrictive diet?",
          answer:
            "No. Any dietary changes are agreed with you and reviewed.",
        },
        {
          question: "Can I do the programme online?",
          answer:
            "Yes, the programme is available online as well as in person in Dubai.",
        },
        {
          question: "How long does it last?",
          answer:
            "This is confirmed at your first consultation, based on your symptoms and goals.",
        },
      ]}
      safety={{
        text: "See a doctor urgently for blood in stool, black stools, unexplained weight loss, persistent vomiting, severe or worsening abdominal pain, trouble swallowing or a family history of bowel cancer. In the UAE, call",
        emergencyLinks: [
          { label: "998 for an ambulance", href: "tel:998" },
        ],
        closing: "If you have thoughts of harming yourself or cannot keep yourself safe, call 999 or go to the nearest emergency department.",
      }}
      ctaTitle="Talk through your gut, mood"
      ctaAccent="and stress together."
      ctaDescription="Book a consultation with a doctor who has time to listen."
    />
  );
}
