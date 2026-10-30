import type { Metadata } from "next";
import { HealthConcernContent } from "@/components/layout/HealthConcernContent";

export const metadata: Metadata = {
  title: "Stress Sleep Fatigue Treatment Dubai | Dr Fouzia",
  description:
    "Tired, wired and sleeping badly? Dr Fouzia\u2019s stress, sleep and energy programme in Dubai joins a medical review with Calm Mind Sessions skills and a personal plan.",
};

export default function StressSleepEnergyResetPage() {
  return (
    <HealthConcernContent
      eyebrowLabel="Programme"
      highlightsEyebrow="Stress and sleep programme in Dubai"
      title="Stress, Sleep and Fatigue Treatment"
      highlight="in Dubai"
      description="A structured reset when you are running on empty. When stress, poor sleep and low energy have been going on for months, each one makes the others worse. You sleep badly, struggle through the day and feel too wired to rest. Dr Fouzia is a consultant family physician who offers this stress, sleep and fatigue programme in Dubai. It combines a medical review of what may be draining you with Calm Mind Sessions skills for stress and sleep, and ends in a written plan that fits your life."
      highlightsTitle="Who it"
      highlightsAccent="suits."
      highlights={[
        "People who feel tired most days despite trying to rest",
        "Those who lie awake, wake often or feel unrefreshed in the morning",
        "Professionals and carers whose stress has built up over months",
        "People whose usual blood tests were \u201cnormal\u201d but who still feel exhausted",
      ]}
      sections={[
        {
          eyebrow: "Fatigue treatment in Dubai",
          heading: "The medical",
          accent: "review first.",
          paragraphs: [
            "Ongoing tiredness has many possible causes, including anaemia, thyroid problems, low vitamin D or B12, sleep apnoea, low mood, long-term illness and some medicines. Dr Fouzia reviews your history, arranges tests only where they would change your care, and checks for anything that needs treating before the programme begins.",
          ],
          links: [
            { label: "Fatigue and low energy", href: "/fatigue-low-energy-brain-fog" },
          ],
        },
        {
          eyebrow: "Sleep health in Dubai",
          heading: "What gets",
          accent: "worked on.",
          paragraphs: [
            "Sleep is looked at in detail, alongside the habits, routines and health factors that affect it.",
          ],
          bullets: [
            "Your sleep pattern, timings and bedroom habits",
            "Caffeine, alcohol, screens and late meals",
            "A structured Calm Mind Sessions approach to insomnia where it applies",
            "Snoring and breathing pauses, with referral for a sleep study if needed",
          ],
        },
        {
          eyebrow: "Energy reset in Dubai",
          heading: "What the programme",
          accent: "includes.",
          paragraphs: [
            "The programme is built around your history and goals, and adjusted at each review.",
          ],
          bullets: [
            "A first consultation covering stress, sleep, energy, routine and goals",
            "A medical review, with blood tests only where they would help",
            "Calm Mind Sessions skills for stress, worry and unhelpful thinking",
            "A sleep plan, with gradual changes you agree to",
            "Practical energy habits: meals, movement, breaks and pacing",
            "Follow-up reviews to see what is helping and adjust",
          ],
        },
      ]}
      faqs={[
        {
          question: "How long does the programme last?",
          answer:
            "This is confirmed at your first consultation, based on your symptoms and goals.",
        },
        {
          question: "Will I need supplements?",
          answer:
            "Only where your history or test results show a reason.",
        },
        {
          question: "How is this different from the Stress, Sleep and Nervous System page?",
          answer:
            "That page explains the concern and the medical consultation. This page describes the structured programme.",
        },
        {
          question: "Can I do it online?",
          answer:
            "Yes, the programme is available online as well as in person in Dubai.",
        },
      ]}
      safety={{
        text: "Seek urgent care for chest pain, fainting, severe breathlessness or sudden confusion. Take care driving if you are very sleepy. In the UAE, call",
        emergencyLinks: [
          { label: "998 for an ambulance", href: "tel:998" },
        ],
        closing: "If you have thoughts of harming yourself or cannot keep yourself safe, call 999 or go to the nearest emergency department.",
      }}
      ctaTitle="Start your reset with"
      ctaAccent="one conversation."
      ctaDescription="Talk through your stress, sleep and energy with a doctor who has time to listen."
    />
  );
}
