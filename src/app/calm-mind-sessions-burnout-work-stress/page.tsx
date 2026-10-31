import type { Metadata } from "next";
import { HealthConcernContent } from "@/components/layout/HealthConcernContent";

export const metadata: Metadata = {
  title: "Burnout Therapy Dubai | Dr Fouzia Al Ali",
  description:
    "Exhausted and detached from work? Dr Fouzia offers burnout therapy in Dubai using Calm Mind Sessions, with a medical check and practical support for work stress.",
};

export default function CalmMindSessionsBurnoutWorkStressPage() {
  return (
    <HealthConcernContent
      eyebrowLabel="Calm Mind Sessions"
      highlightsEyebrow="Burnout treatment in Dubai"
      title="Burnout Therapy"
      highlight="in Dubai"
      description="When work has taken more than it has given. Burnout is more than a busy week. It tends to build over months of heavy demands and too little recovery, leaving you drained, detached from your work and doubting whether anything you do makes a difference. Dr Fouzia is a consultant family physician who offers burnout therapy in Dubai using Calm Mind Sessions. She starts by checking for medical causes of exhaustion, such as thyroid problems, anaemia, sleep disorders or low mood, then helps you look at the habits, thinking patterns and workplace pressures feeding the strain."
      highlightsTitle="How it"
      highlightsAccent="can look."
      highlights={[
        "Persistent tiredness that rest does not fix",
        "Dreading work, or feeling cynical, numb or detached from it",
        "Feeling less capable or effective than before",
        "Trouble concentrating, irritability or tearfulness",
        "Poor sleep, headaches or frequent illness",
        "Using caffeine, alcohol or long hours just to keep going",
      ]}
      sections={[
        {
          eyebrow: "Work stress therapy in Dubai",
          heading: "Common",
          accent: "pressures.",
          paragraphs: [
            "Long hours, heavy workloads, unclear expectations, tight deadlines, difficult colleagues and always being reachable are common causes. For stress that has not yet reached exhaustion, see the stress management page.",
          ],
          links: [
            { label: "Calm Mind Sessions for stress management", href: "/calm-mind-sessions-stress-management" },
          ],
        },
        {
          eyebrow: "Calm Mind Sessions for burnout in Dubai",
          heading: "What sessions",
          accent: "may cover.",
          paragraphs: [
            "Sessions combine a medical review with practical Calm Mind Sessions exercises focused on the patterns that keep you stuck.",
          ],
          bullets: [
            "A review of your workload, hours, sleep and recovery",
            "A medical check, including relevant blood tests where your history suggests them",
            "Testing thoughts such as \u201cI must never let anyone down\u201d or \u201crest is laziness\u201d",
            "Setting boundaries, planning your day and learning to delegate or say no",
            "Rebuilding recovery: sleep, breaks, movement and time away from work",
            "Planning what to change at work, and what is outside your control",
          ],
        },
        {
          eyebrow: "Workplace stress therapy in Dubai",
          heading: "Realistic",
          accent: "expectations.",
          paragraphs: [
            "Therapy can change how you respond and what you do, but it cannot change an unsafe or unreasonable workplace. Dr Fouzia can discuss options such as speaking to your manager, adjusting hours or taking a period of leave, and can provide a medical opinion where appropriate.",
          ],
          links: [
            { label: "Calm Mind Sessions for sleep difficulties", href: "/calm-mind-sessions-sleep-insomnia" },
            { label: "Calm Mind Sessions for perfectionism", href: "/calm-mind-sessions-perfectionism-procrastination" },
            { label: "Calm Mind Sessions for low mood", href: "/calm-mind-sessions-low-mood-depression" },
            { label: "Fatigue and low energy", href: "/fatigue-low-energy-brain-fog" },
          ],
        },
      ]}
      faqs={[
        {
          question: "Is burnout a medical diagnosis?",
          answer:
            "Burnout is recognised as an occupational phenomenon, not a medical condition. The symptoms can overlap with depression, anxiety and physical illness, which is why a medical review is useful.",
        },
        {
          question: "How many sessions will I need?",
          answer:
            "It varies with your goals and circumstances. You can review the plan together as you go.",
        },
        {
          question: "Do I need to take time off work?",
          answer:
            "Not always. Dr Fouzia will help you decide based on how you are coping and what is possible.",
        },
        {
          question: "Can I have sessions online?",
          answer:
            "Yes, sessions are available online as well as in person in Dubai.",
        },
      ]}
      safety={{
        text: "If you have thoughts of harming yourself or ending your life, or feel unable to keep yourself safe, get urgent help now. Chest pain, fainting or severe breathlessness also need urgent medical care. In the UAE, call",
        emergencyLinks: [
          { label: "998 for an ambulance", href: "tel:998" },
          { label: "999 for police", href: "tel:999" },
        ],
        closing: "or go to the nearest emergency department.",
      }}
      ctaTitle="Take the first step towards"
      ctaAccent="recovering from work strain."
      ctaDescription="Talk it through with a doctor who has time to listen."
    />
  );
}
