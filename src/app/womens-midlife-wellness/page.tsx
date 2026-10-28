import type { Metadata } from "next";
import { HealthConcernContent } from "@/components/layout/HealthConcernContent";

export const metadata: Metadata = {
  title: "Women\u2019s Wellness Dubai | Midlife Programme | Dr Fouzia",
  description:
    "Support through perimenopause and menopause in Dubai. Dr Fouzia\u2019s women\u2019s midlife programme joins a medical review, lifestyle plan and CBT skills.",
};

export default function WomensMidlifeWellnessPage() {
  return (
    <HealthConcernContent
      eyebrowLabel="Programme"
      highlightsEyebrow="Women's midlife health in Dubai"
      title="Women's Wellness Programme"
      highlight="in Dubai"
      description="Support for the midlife transition, body and mind. Perimenopause and menopause can bring more than hot flushes. Many women notice changes in sleep, mood, energy, memory, weight, periods and confidence, often all at once. Dr Fouzia is a consultant family physician who offers this women\u2019s midlife wellness programme in Dubai. It combines a thorough medical review with lifestyle guidance and CBT skills, so you get a plan for how you feel now and for the years ahead."
      highlightsTitle="What can"
      highlightsAccent="change."
      highlights={[
        "Irregular, heavier or lighter periods",
        "Hot flushes and night sweats",
        "Poor sleep or waking in the night",
        "Low mood, irritability or anxiety",
        "Trouble concentrating or \u201cbrain fog\u201d",
        "Changes in energy, weight, skin, joints or sexual comfort",
      ]}
      sections={[
        {
          eyebrow: "Perimenopause support in Dubai",
          heading: "The medical",
          accent: "review first.",
          paragraphs: [
            "Symptoms like tiredness, low mood and irregular periods can also come from thyroid problems, anaemia, stress or other conditions. Dr Fouzia reviews your history, symptoms and, where useful, selected tests, so changes are not assumed to be hormonal. Treatment options are discussed in the consultation, including whether hormone-related treatment is suitable for you and who should prescribe it.",
            "Not every woman has all of these changes, and some have none. A consultation helps work out what is part of the transition and what is not.",
          ],
        },
        {
          eyebrow: "Menopause wellness in Dubai",
          heading: "What the programme",
          accent: "includes.",
          paragraphs: [
            "The programme is built around your symptoms, history and goals, and reviewed at each step.",
          ],
          bullets: [
            "A first consultation covering periods, symptoms, sleep, mood, health history and goals",
            "A medical review, with tests only where they would change your care",
            "Lifestyle guidance on food, movement, sleep and bone and heart health",
            "CBT skills for low mood, worry, sleep problems and the thoughts that can come with this stage",
            "Follow-up reviews to see what is helping and adjust",
          ],
        },
        {
          eyebrow: "Women's health programme in Dubai",
          heading: "Who it",
          accent: "suits.",
          paragraphs: [
            "Women in their late thirties, forties, fifties and beyond who notice changes in their periods, mood, sleep or energy, or who want to plan ahead for menopause. This programme is not a replacement for gynaecology, cancer screening or urgent care. Dr Fouzia will refer you if a symptom needs a specialist.",
          ],
          links: [
            { label: "Women's hormonal health", href: "/womens-hormonal-health" },
            { label: "CBT for sleep difficulties", href: "/cbt-sleep-insomnia" },
            { label: "CBT for anxiety", href: "/cbt-anxiety" },
            { label: "Fatigue and low energy", href: "/fatigue-low-energy-brain-fog" },
          ],
        },
      ]}
      faqs={[
        {
          question: "When does perimenopause start?",
          answer:
            "It often begins in the mid-forties, but can start earlier or later. Periods may change years before they stop.",
        },
        {
          question: "Do I need hormone tests?",
          answer:
            "Not always. Symptoms and age are often enough, and tests can be misleading during perimenopause. Dr Fouzia advises on whether any are useful.",
        },
        {
          question: "Can I do the programme online?",
          answer:
            "Yes, the programme is available online as well as in person in Dubai.",
        },
        {
          question: "What does it cost?",
          answer:
            "Fees are confirmed at your first consultation. Message us for current information.",
        },
      ]}
      safety={{
        text: "See a doctor promptly for bleeding after menopause, very heavy bleeding, bleeding between periods, a breast lump, chest pain or severe pelvic pain. If you have thoughts of harming yourself or cannot keep yourself safe, get urgent help now. In the UAE, call",
        emergencyLinks: [
          { label: "998 for an ambulance", href: "tel:998" },
          { label: "999 for police", href: "tel:999" },
        ],
        closing: "or go to the nearest emergency department.",
      }}
      ctaTitle="Talk through this stage with"
      ctaAccent="a doctor who has time to listen."
      ctaDescription="Book a consultation to look at your symptoms and your options."
      showEnquiryForm
    />
  );
}
