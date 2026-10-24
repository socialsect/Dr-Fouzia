import type { Metadata } from "next";
import { HealthConcernContent } from "@/components/layout/HealthConcernContent";

export const metadata: Metadata = {
  title: "Functional Medicine and CBT Dubai | Dr Fouzia Al Ali",
  description:
    "Combine functional medicine and CBT in one plan. Dr Fouzia, a family physician in Dubai, joins medical review with practical therapy skills. Book a consultation.",
};

export default function IntegratedFunctionalMedicineCBTPage() {
  return (
    <HealthConcernContent
      eyebrowLabel="Programme"
      highlightsEyebrow="Integrated health in Dubai"
      title="Functional Medicine and CBT"
      highlight="in Dubai"
      description="One doctor, body and mind together. Physical symptoms and emotional strain often feed each other. Poor sleep lowers mood, stress upsets digestion and constant worry can leave you exhausted. This programme brings functional medicine and CBT together under one doctor, Dr Fouzia, a consultant family physician in Dubai. You get a careful medical review of what may be contributing, alongside practical therapy skills for the thoughts, habits and stress that go with it."
      highlightsTitle="What &ldquo;integrated&rdquo;"
      highlightsAccent="means here."
      highlights={[
        "One doctor sees the whole picture, so you do not repeat your story to several clinics",
        "Medical causes are checked first, so therapy is aimed correctly",
        "Lifestyle and nutrition advice is given alongside therapy skills",
        "Progress in body and mind is reviewed together at each step",
      ]}
      sections={[
        {
          eyebrow: "Functional medicine CBT",
          heading: "How the two parts",
          accent: "work together.",
          paragraphs: [
            "Functional medicine looks at factors such as sleep, nutrition, digestion, hormones and stress, using a detailed history and selected tests alongside standard medical assessment. CBT teaches practical skills for worry, low mood, stress and unhelpful habits. Together they let you work on what is happening in the body and how you cope with it, side by side.",
          ],
          links: [
            { label: "Functional medicine", href: "/functional-medicine" },
            { label: "CBT", href: "/cbt" },
          ],
        },
        {
          eyebrow: "Mind body health in Dubai",
          heading: "Who the programme",
          accent: "suits.",
          paragraphs: [
            "People with ongoing tiredness, digestive symptoms, hormonal changes or stress-related symptoms who also feel anxious, low or overwhelmed. Those who have had tests that did not explain how they feel. Anyone who wants one coordinated plan instead of separate appointments.",
          ],
        },
        {
          eyebrow: "Holistic health in Dubai",
          heading: "What the programme",
          accent: "includes.",
          paragraphs: [
            "The programme is built around your history, symptoms and goals, reviewed and adjusted at each step.",
          ],
          bullets: [
            "A first consultation covering medical history, symptoms, routine and goals",
            "A medical review, with blood tests only where they would change your plan",
            "A written plan with priorities in order, covering lifestyle, nutrition and, where useful, supplements",
            "CBT sessions for the concerns you choose to work on",
            "Follow-up reviews to see what is helping and adjust",
          ],
        },
      ]}
      faqs={[
        {
          question: "How long does the programme last?",
          answer:
            "This is confirmed during your first consultation, based on your needs and goals.",
        },
        {
          question: "Can I do CBT alone or functional medicine alone?",
          answer:
            "Yes. See the separate pages for each. Both are available as standalone consultations.",
        },
        {
          question: "What does it cost?",
          answer:
            "Fees are confirmed at your first consultation. Message us for current information.",
        },
        {
          question: "Do you offer it online?",
          answer:
            "Yes, both parts of the programme are available online as well as in person in Dubai.",
        },
      ]}
      safety={{
        text: "If you have thoughts of harming yourself, or feel unable to keep yourself safe, get urgent help now. Chest pain, fainting or severe breathlessness also need urgent medical care. In the UAE, call",
        emergencyLinks: [
          { label: "998 for an ambulance", href: "tel:998" },
          { label: "999 for police", href: "tel:999" },
        ],
        closing: "or go to the nearest emergency department.",
      }}
      ctaTitle="Start with one conversation"
      ctaAccent="about the whole picture."
      ctaDescription="Talk through your health with a doctor who has time to listen."
    />
  );
}
