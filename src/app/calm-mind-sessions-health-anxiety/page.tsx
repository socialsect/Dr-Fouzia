import type { Metadata } from "next";
import { HealthConcernContent } from "@/components/layout/HealthConcernContent";

export const metadata: Metadata = {
  title: "Calm Mind Sessions for Health Anxiety Dubai",
  description:
    "A thoughtful medical review and practical Calm Mind Sessions support for persistent health worries in Dubai.",
};

export default function CalmMindSessionsHealthAnxietyPage() {
  return (
    <HealthConcernContent
      eyebrowLabel="Calm Mind Sessions"
      highlightsEyebrow="How health anxiety may look"
      title="Calm Mind Sessions for Health Anxiety"
      highlight="in Dubai"
      description="When worry about your health takes over, it can lead to frequent body checking, online symptom searches or repeated requests for reassurance that only help for a short time. Dr Fouzia is a consultant family physician who offers Calm Mind Sessions for health anxiety. She takes physical symptoms seriously, reviews them medically and can help you work on the worry patterns around them."
      highlightsTitle="Health worry"
      highlightsAccent="can take many forms."
      highlights={[
        "Checking your body, pulse or skin often for signs of illness",
        "Searching symptoms online for long periods",
        "Asking others or doctors for repeated reassurance",
        "Avoiding hospitals, news or conversations about illness",
        "Worrying a minor sensation means something serious",
        "Health worries affecting sleep, work or relationships",
      ]}
      sections={[
        {
          eyebrow: "A medical review first",
          heading: "Take symptoms seriously",
          accent: "and assess them carefully.",
          paragraphs: [
            "Your symptoms are not dismissed. Dr Fouzia reviews your history and any relevant results, then considers further tests where there is a clear medical reason. The aim is to make healthcare decisions based on your needs while also noticing when checking or reassurance may be feeding the worry cycle.",
          ],
        },
        {
          eyebrow: "What sessions may cover",
          heading: "Understand the worry",
          accent: "and what keeps it going.",
          paragraphs: [
            "The work can begin by mapping what happens when a worry appears: the trigger, the thought, the feeling and what you do next. From there, you can agree on practical ways to respond.",
          ],
          bullets: [
            "Look at alarming thoughts about illness alongside the available evidence",
            "Notice habits such as body checking, online searching or repeated reassurance",
            "Gradually reduce behaviours that are keeping worry going",
            "Practise tolerating some uncertainty, which no test or reassurance can remove entirely",
            "Make a plan for handling difficult days while keeping appropriate medical care",
          ],
        },
        {
          eyebrow: "Care that stays connected",
          heading: "Keep medical follow-up",
          accent: "proportionate to your needs.",
          paragraphs: [
            "Calm Mind Sessions does not mean avoiding your doctor or ignoring new symptoms. If you have a long-term condition, the plan can take that into account. New, changing or persistent physical symptoms still deserve an appropriate medical review.",
          ],
          links: [
            { label: "Calm Mind Sessions for anxiety", href: "/calm-mind-sessions-anxiety" },
            { label: "Calm Mind Sessions for panic attacks", href: "/calm-mind-sessions-panic-attacks" },
            { label: "Calm Mind Sessions for overthinking", href: "/calm-mind-sessions-overthinking" },
            { label: "Health marker review", href: "/health-marker-review" },
          ],
        },
      ]}
      faqs={[
        {
          question: "Could my symptoms still have a physical cause?",
          answer:
            "Yes. Physical symptoms deserve appropriate medical assessment. Calm Mind Sessions does not assume a symptom is imaginary; a clinician can review it and discuss the next step.",
        },
        {
          question: "Will I be told to stop seeing my doctor?",
          answer:
            "No. The aim is to help healthcare visits stay useful and proportionate, not to discourage appropriate medical care.",
        },
        {
          question: "How many sessions will I need?",
          answer:
            "It varies with your needs and goals. The plan can be reviewed together as you go.",
        },
      ]}
      safety={{
        text: "New severe chest pain, severe breathlessness, sudden weakness, confusion or another alarming symptom needs urgent medical attention. In the UAE, call",
        emergencyLinks: [{ label: "998 for an ambulance", href: "tel:998" }],
        closing: "If you have thoughts of harming yourself or cannot keep yourself safe, call 999 or 998, or go to the nearest emergency department.",
      }}
      ctaTitle="Talk through your concerns"
      ctaAccent="with a doctor."
      ctaDescription="A first conversation can help you discuss the symptoms and worries you are carrying."
    />
  );
}
