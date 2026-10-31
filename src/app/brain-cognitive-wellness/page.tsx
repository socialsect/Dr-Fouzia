import type { Metadata } from "next";
import { HealthConcernContent } from "@/components/layout/HealthConcernContent";

export const metadata: Metadata = {
  title: "Brain Health Doctor Dubai",
  description:
    "Dr Fouzia reviews changes in concentration, memory and mental fatigue, considers possible medical causes and helps you plan next steps.",
};

export default function BrainCognitiveWellnessPage() {
  return (
    <HealthConcernContent
      title="Brain Health Doctor in Dubai"
      highlight="Clearer thinking starts with a proper review"
      description="Brain fog, trouble concentrating and memory slips can have several causes. Dr Fouzia is a consultant family physician who reviews cognitive concerns alongside sleep, stress, nutrition, blood sugar, thyroid health, mood and medicines before deciding what to do next."
      highlightsTitle="Start with a review"
      highlightsAccent="built around you."
      highlights={[
        "A structured conversation about memory, focus, mood and daily function",
        "Medical checks considered first, with tests selected for your history",
        "Sleep, stress, workload and recovery reviewed together",
        "Blood sugar and metabolic health considered when relevant",
        "Food-first nutrition, with supplements only for a clear reason",
        "Practical priorities and follow-up to review how you are doing",
      ]}
      sections={[
        {
          eyebrow: "Brain fog doctor in Dubai",
          heading: "What could be behind",
          accent: "it?",
          paragraphs: [
            "Brain fog describes difficulty thinking clearly; it is not a diagnosis. Possible contributors include broken sleep, long-term stress, low iron or B12, thyroid changes, hormonal shifts, low mood and some medicines.",
            "Your clinician can review your history and decide whether selected tests are useful, so you are not tested for everything at once.",
          ],
          links: [
            { label: "Review health markers", href: "/health-marker-review" },
            { label: "Explore stress and sleep care", href: "/stress-sleep-nervous-system-health" },
          ],
        },
        {
          eyebrow: "Cognitive health in Dubai",
          heading: "When changes deserve a",
          accent: "closer look.",
          paragraphs: [
            "A medical review may help when a change in thinking is new, persistent or affecting everyday life. Mention what changed, when it began and whether someone close to you has noticed it too.",
          ],
          bullets: [
            "Concentration or memory has changed noticeably over weeks or months",
            "You are losing track of tasks that used to feel manageable",
            "Family or colleagues have noticed a change",
            "Tiredness, low mood or poor sleep is happening alongside it",
          ],
        },
        {
          eyebrow: "Mental fatigue and recovery",
          heading: "Make room for",
          accent: "steady steps.",
          paragraphs: [
            "A plan may include sleep routines, pacing your workload, regular meals, movement and short breaks. If worry or low mood is part of the picture, Calm Mind Sessions skills may also be discussed.",
          ],
          links: [
            { label: "Explore Calm Mind Sessions for stress management", href: "/calm-mind-sessions-stress-management" },
            { label: "Read about fatigue and brain fog", href: "/fatigue-low-energy-brain-fog" },
          ],
        },
        {
          eyebrow: "What to expect",
          heading: "A clear review, then a",
          accent: "practical plan.",
          paragraphs: [
            "The visit starts with your symptoms, timeline and daily routine. A physical review and selected blood tests may follow if they are useful. You and Dr Fouzia can then agree on priorities and whether follow-up is appropriate.",
          ],
        },
      ]}
      faqs={[
        {
          question: "What is cognitive wellness and why is it important?",
          answer: "Cognitive wellness refers to maintaining functions such as memory, attention, concentration, learning and problem-solving. It is influenced by sleep, nutrition, physical activity, cardiovascular health, stress and underlying medical conditions.",
        },
        {
          question: "When should I consult a brain health doctor in Dubai?",
          answer: "Consider consulting a doctor if you experience persistent memory difficulties, reduced concentration, mental fatigue or changes in cognitive performance. A medical assessment can help identify possible contributing factors and determine whether specialist evaluation is needed.",
        },
        {
          question: "What causes poor concentration and memory problems?",
          answer: "Poor concentration and memory difficulties can be associated with sleep deprivation, chronic stress, low iron, vitamin B12 deficiency, thyroid disorders, hormonal changes, mood conditions and certain medications. The underlying cause varies between individuals.",
        },
        {
          question: "Can functional medicine support cognitive health?",
          answer: "A functional medicine approach can assess factors that may influence cognitive wellbeing, including nutrition, metabolic health, sleep, stress and hormonal changes. Dr.Fawezya Al ALi combines this assessment with conventional medical principles to guide appropriate recommendations.",
        },
        {
          question: "Which health markers are important for brain health?",
          answer: "Depending on your symptoms and medical history, relevant markers may include blood glucose, thyroid function, iron status, vitamin B12, blood pressure and cholesterol. A doctor determines which investigations are appropriate for your individual circumstances.",
        },
        {
          question: "Can lifestyle changes help maintain cognitive wellness?",
          answer: "Yes. Regular physical activity, balanced nutrition, sufficient sleep, social engagement and management of cardiovascular risk factors support overall brain health. These habits form an important part of a long-term cognitive wellness plan.",
        },
        {
          question: "How can I arrange a cognitive health assessment with Dr.Fawezya Al ALi?",
          answer: "You can contact Dr.Fawezya Al ALi in Dubai to discuss memory, concentration or other cognitive concerns. Your consultation can include a review of symptoms, medical history, lifestyle and relevant investigations.",
        }
      ]}
      safety={{
        text: "Sudden confusion, a severe headache, weakness on one side, difficulty speaking or a fall with head injury needs emergency care in the UAE. Call",
        emergencyLinks: [
          { label: "998 for an ambulance", href: "tel:998" },
          { label: "999 for police", href: "tel:999" },
        ],
        closing: "or go to the nearest emergency department.",
      }}
      ctaTitle="Book a review of how you are"
      ctaAccent="thinking and feeling."
      ctaDescription="Talk through your concerns with a doctor who has time to listen."
      showEnquiryForm
    />
  );
}
