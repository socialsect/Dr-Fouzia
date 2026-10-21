import type { Metadata } from "next";
import { HealthConcernContent } from "@/components/layout/HealthConcernContent";

export const metadata: Metadata = {
  title: "CBT for Insomnia Dubai",
  description:
    "CBT for insomnia in Dubai, with a review of health factors that may be affecting sleep and a plan tailored to you.",
};

export default function CBTSleepInsomniaPage() {
  return (
    <HealthConcernContent
      eyebrowLabel="Cognitive behavioural therapy"
      highlightsEyebrow="Signs worth discussing"
      title="CBT for insomnia"
      highlight="in Dubai"
      description="Retrain the habits that can keep you awake. Trouble falling asleep, waking in the night or waking too early can leave you tired, irritable and dreading bedtime. Dr Fouzia offers CBT for insomnia, often called CBT-I, a structured approach to the thoughts and routines around sleep. She can also review possible medical contributors such as sleep apnoea, thyroid problems, pain or medicines."
      highlightsTitle="Sleep difficulties"
      highlightsAccent="can affect your days."
      highlights={[
        "Taking a long time to fall asleep",
        "Waking often at night or too early and struggling to return to sleep",
        "Feeling unrefreshed or tired during the day",
        "Lying awake worrying about sleep itself",
        "Relying on routines or substances to try to get to sleep",
        "Sleep problems lasting several weeks or longer",
      ]}
      sections={[
        {
          eyebrow: "A medical review first",
          heading: "Understand what may",
          accent: "be disturbing sleep.",
          paragraphs: [
            "Poor sleep is not always insomnia. Snoring with breathing pauses, restless legs, shift work, hormonal changes, low mood and some medicines can all affect sleep. Dr Fouzia can review the factors that apply to you and discuss whether a sleep study or specialist opinion may be appropriate.",
          ],
        },
        {
          eyebrow: "What CBT-I may cover",
          heading: "Build a routine",
          accent: "that works for you.",
          paragraphs: [
            "CBT-I looks at sleep patterns, habits and thoughts that can maintain difficulty sleeping. Exercises are selected with you and adjusted to your situation.",
          ],
          bullets: [
            "Keep a sleep diary to understand your pattern over time",
            "Set regular times for bed and getting up, tailored to you",
            "Reconnect the bed with sleep rather than wakefulness or worry",
            "Examine unhelpful thoughts about sleep and daytime functioning",
            "Plan a wind-down routine and what to do after a difficult night",
          ],
        },
        {
          eyebrow: "Sleep support",
          heading: "Make changes",
          accent: "safely and gradually.",
          paragraphs: [
            "Some CBT-I approaches change the amount of time spent in bed. These are not suitable for everyone and can affect daytime alertness at first. Discuss your health, daily responsibilities and any medicine with your clinician; do not stop or change sleeping tablets without the prescriber.",
          ],
          links: [
            { label: "Stress and sleep care", href: "/stress-sleep-nervous-system-health" },
            { label: "CBT for anxiety", href: "/cbt-anxiety" },
            { label: "CBT for overthinking", href: "/cbt-overthinking" },
            { label: "CBT for stress management", href: "/cbt-stress-management" },
          ],
        },
      ]}
      faqs={[
        {
          question: "Do I have to stop my sleeping tablets?",
          answer:
            "No. Any change to prescribed medicine should be discussed with you and the prescriber first.",
        },
        {
          question: "Will I feel more tired at first?",
          answer:
            "Some people notice more tiredness while adjusting sleep routines. Your clinician can discuss how to monitor alertness and adapt the plan safely.",
        },
        {
          question: "How many sessions will I need?",
          answer:
            "It varies. Your clinician can review what is helping and discuss the next step with you.",
        },
      ]}
      safety={{
        text: "If you are very sleepy, take care with driving or operating machinery. Severe breathing difficulty or chest pain needs urgent medical care; in the UAE call",
        emergencyLinks: [{ label: "998 for an ambulance", href: "tel:998" }],
        closing: "If you may harm yourself or cannot keep yourself safe, call 999 or 998, or go to the nearest emergency department.",
      }}
      ctaTitle="Take the first step"
      ctaAccent="towards better nights."
      ctaDescription="Talk it through with a doctor who has time to listen."
    />
  );
}
