import type { Metadata } from "next";
import { HealthConcernContent } from "@/components/layout/HealthConcernContent";

export const metadata: Metadata = {
  title: "Functional Medicine and Calm Mind Sessions Dubai | Dr Fouzia Al Ali",
  description:
    "Combine functional medicine and Calm Mind Sessions in one plan. Dr Fouzia, a family physician in Dubai, joins medical review with practical therapy skills. Book a consultation.",
};

export default function IntegratedFunctionalMedicineCalmMindSessionsPage() {
  return (
    <HealthConcernContent
      eyebrowLabel="Programme"
      highlightsEyebrow="Integrated health in Dubai"
      title="Functional Medicine and Calm Mind Sessions"
      highlight="in Dubai"
      description="One doctor, body and mind together. Physical symptoms and emotional strain often feed each other. Poor sleep lowers mood, stress upsets digestion and constant worry can leave you exhausted. This programme brings functional medicine and Calm Mind Sessions together under one doctor, Dr Fouzia, a consultant family physician in Dubai. You get a careful medical review of what may be contributing, alongside practical therapy skills for the thoughts, habits and stress that go with it."
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
          eyebrow: "Functional medicine and Calm Mind Sessions",
          heading: "How the two parts",
          accent: "work together.",
          paragraphs: [
            "Functional medicine looks at factors such as sleep, nutrition, digestion, hormones and stress, using a detailed history and selected tests alongside standard medical assessment. Calm Mind Sessions teaches practical skills for worry, low mood, stress and unhelpful habits. Together they let you work on what is happening in the body and how you cope with it, side by side.",
          ],
          links: [
            { label: "Functional medicine", href: "/functional-medicine" },
            { label: "Calm Mind Sessions", href: "/calm-mind-sessions" },
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
            "Calm Mind Sessions for the concerns you choose to work on",
            "Follow-up reviews to see what is helping and adjust",
          ],
        },
      ]}
      faqs={[
        {
          question: "What is an integrated functional medicine programme?",
          answer: "An integrated functional medicine programme combines medical assessment with personalised lifestyle guidance and practical emotional wellbeing support. Dr.Fawezya Al ALi considers how physical symptoms, sleep, stress, nutrition and daily habits may influence one another.",
        },
        {
          question: "Who can benefit from an integrated functional medicine programme?",
          answer: "Individuals experiencing ongoing stress alongside physical concerns such as digestive discomfort, fatigue, sleep difficulties or low mood may benefit from an integrated assessment. The programme is tailored to individual health needs and clinical suitability.",
        },
        {
          question: "How does an integrated approach address physical and emotional health?",
          answer: "An integrated approach recognises that physical health and emotional wellbeing can influence one another. It combines medical evaluation, lifestyle recommendations and practical strategies for managing stress and unhelpful thinking patterns.",
        },
        {
          question: "What are Calm mind sessions and how do they support wellbeing?",
          answer: "Calm mind sessions provide practical support for recognising stress triggers, managing worry and developing healthier responses to challenging situations. They complement medical care when stress-related factors are relevant to a patient's overall wellbeing.",
        },
        {
          question: "Does the programme include functional medicine and nutrition guidance?",
          answer: "Yes. Depending on individual requirements, the programme may include medical assessment, relevant laboratory investigations, personalised nutrition recommendations, lifestyle modifications and follow-up reviews.",
        },
        {
          question: "Can an integrated health programme help with sleep problems and chronic stress?",
          answer: "The programme can address lifestyle and emotional factors that may contribute to poor sleep and ongoing stress. However, medical causes of sleep disturbance should also be evaluated before deciding on appropriate management.",
        },
        {
          question: "How can I book an integrated functional medicine consultation in Dubai?",
          answer: "You can contact Dr.Fawezya Al ALi through the clinic's official website to discuss programme suitability. An initial consultation helps establish your health priorities and the most appropriate combination of medical and wellbeing support.",
        }
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
      showEnquiryForm
    />
  );
}
