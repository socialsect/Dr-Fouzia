import type { Metadata } from "next";
import { HealthConcernContent } from "@/components/layout/HealthConcernContent";

export const metadata: Metadata = {
  title: "Brain Fog Treatment Dubai | Dr Fouzia Al Ali",
  description:
    "A structured brain fog programme in Dubai with a family physician. Dr Fouzia joins a medical review, lifestyle plan and Calm Mind Sessions skills over several visits.",
};

export default function BrainFogCognitiveWellnessPage() {
  return (
    <HealthConcernContent
      eyebrowLabel="Programme"
      highlightsEyebrow="Brain fog programme in Dubai"
      title="Brain Fog Treatment"
      highlight="in Dubai"
      description="A step-by-step programme for foggy, tired thinking. Brain fog is a description of how thinking feels: slow, hazy, forgetful or hard to hold together. It is not a diagnosis, and it has many possible causes. Dr Fouzia is a consultant family physician who offers this brain fog programme in Dubai. It runs over several visits, so you can find and address likely causes in a sensible order, learn skills for managing mental tiredness and review how you are getting on."
      highlightsTitle="Who it"
      highlightsAccent="suits."
      highlights={[
        "People whose thinking has felt slow or unreliable for weeks or months",
        "Those who forget words, appointments or tasks more than usual",
        "Professionals whose mental stamina has dropped",
        "People with tiredness, poor sleep or stress alongside the fog",
      ]}
      sections={[
        {
          eyebrow: "Brain fog treatment in Dubai",
          heading: "The order of",
          accent: "the programme.",
          paragraphs: [
            "The programme works through likely causes in a sensible order, treating what is found before moving to the next step.",
          ],
          bullets: [
            "Medical review: history, medicines, sleep, mood and routine, with blood tests where they would help such as iron, B12, thyroid, vitamin D and blood sugar",
            "Treat what is found: for example, correcting a deficiency or addressing poor sleep",
            "Lifestyle changes: regular meals, movement, caffeine, alcohol and screen habits",
            "Skills: pacing, planning and Calm Mind Sessions techniques for stress, worry and low mood",
            "Review and adjust at follow-up visits",
          ],
        },
        {
          eyebrow: "Mental fatigue treatment in Dubai",
          heading: "What helps with",
          accent: "a tired mind.",
          paragraphs: [
            "Mental fatigue often eases when recovery is planned: sleep routines, workload pacing, breaks and gentle activity. Dr Fouzia helps you build a routine that suits your work and family life, and reviews it with you.",
          ],
          links: [
            { label: "Fatigue and low energy", href: "/fatigue-low-energy-brain-fog" },
            { label: "Calm Mind Sessions for stress management", href: "/calm-mind-sessions-stress-management" },
          ],
        },
        {
          eyebrow: "Cognitive wellness in Dubai",
          heading: "When to seek",
          accent: "a wider review.",
          paragraphs: [
            "If memory problems are getting worse, family have noticed a change, or you are losing track of familiar tasks, tell Dr Fouzia so that a fuller assessment can be arranged, which may include a referral to a memory specialist. This programme is not a treatment for dementia or other brain conditions, and it does not replace specialist neurological care.",
          ],
          links: [
            { label: "Brain and cognitive wellness", href: "/brain-cognitive-wellness" },
            { label: "Supplement review", href: "/supplement-review" },
            { label: "Stress, sleep and energy reset", href: "/stress-sleep-energy-reset" },
          ],
        },
      ]}
      faqs={[
        {
          question: "What is brain fog and what causes it?",
          answer: "Brain fog describes difficulties with concentration, memory, mental clarity or information processing. It is not a medical diagnosis and may be associated with poor sleep, stress, hormonal changes, thyroid problems, nutritional deficiencies, medications or other health conditions.",
        },
        {
          question: "When should I seek medical help for brain fog in Dubai?",
          answer: "Consider a medical assessment if brain fog persists for several weeks, interferes with work or daily activities, or occurs alongside fatigue, sleep difficulties or memory concerns. Sudden confusion or a sudden change in mental function requires urgent medical assessment.",
        },
        {
          question: "What does the Brain Fog Cognitive Wellness Programme include?",
          answer: "The programme offered by Dr.Fawezya Al ALi involves a structured medical review, assessment of possible contributing factors, relevant investigations where indicated, lifestyle recommendations and follow-up. It also includes practical support for managing mental tiredness and improving daily routines.",
        },
        {
          question: "Can nutritional deficiencies cause brain fog?",
          answer: "Yes. Certain nutritional deficiencies, including low vitamin B12 or iron, may contribute to fatigue and cognitive difficulties. A doctor can review your symptoms and determine whether blood tests or nutritional interventions are appropriate.",
        },
        {
          question: "Can stress and poor sleep affect concentration and memory?",
          answer: "Yes. Ongoing stress and inadequate sleep can affect attention, memory, mental performance and emotional wellbeing. Addressing sleep habits, stress management and relevant medical concerns may help improve these difficulties.",
        },
        {
          question: "How do Clear mind sessions help with brain fog management?",
          answer: "Clear mind sessions focus on practical strategies for managing mental overload, unhelpful thinking patterns and stress-related difficulties. They can complement medical assessment and lifestyle recommendations when emotional or behavioural factors contribute to cognitive complaints.",
        },
        {
          question: "How can I book a brain fog assessment in Dubai?",
          answer: "You can contact Dr.Fawezya Al ALi through the official website to enquire about the Brain Fog Cognitive Wellness Programme. Share your symptoms, how long they have been present and any relevant medical reports when arranging your consultation.",
        }
      ]}
      safety={{
        text: "Sudden confusion, severe headache, weakness on one side, difficulty speaking or a head injury need emergency care now. In the UAE, call",
        emergencyLinks: [
          { label: "998 for an ambulance", href: "tel:998" },
        ],
        closing: "If you have thoughts of harming yourself or cannot keep yourself safe, call 999 or go to the nearest emergency department.",
      }}
      ctaTitle="Start with a review of what may"
      ctaAccent="be behind your brain fog."
      ctaDescription="Book a consultation with a doctor who has time to listen."
      showEnquiryForm
    />
  );
}
