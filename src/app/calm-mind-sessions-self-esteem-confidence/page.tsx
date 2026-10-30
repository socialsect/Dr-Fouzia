import type { Metadata } from "next";
import { HealthConcernContent } from "@/components/layout/HealthConcernContent";

export const metadata: Metadata = {
  title: "Calm Mind Sessions for Self-Esteem and Confidence Dubai",
  description:
    "Practical Calm Mind Sessions support for self-doubt, self-criticism and confidence concerns in Dubai.",
};

export default function CalmMindSessionsSelfEsteemConfidencePage() {
  return (
    <HealthConcernContent
      eyebrowLabel="Cognitive behavioural therapy"
      highlightsEyebrow="Signs worth discussing"
      title="Calm Mind Sessions for self-esteem"
      highlight="and confidence in Dubai"
      description="Change how you talk to yourself. Low self-esteem can show up as constant self-criticism, fear of getting things wrong, difficulty saying no or turning down opportunities because you doubt yourself. Dr Fouzia offers Calm Mind Sessions for self-esteem and confidence, helping you notice the beliefs behind self-doubt, examine how accurate they are and practise new ways of thinking and acting."
      highlightsTitle="Self-doubt"
      highlightsAccent="may show up as."
      highlights={[
        "A harsh inner voice focused on flaws and mistakes",
        "Comparing yourself with others and feeling you fall short",
        "Difficulty accepting praise or positive feedback",
        "Avoiding challenges, speaking up or meeting people for fear of judgement",
        "Saying yes when you want to say no, then feeling resentful or guilty",
        "Frequently seeking approval or reassurance",
      ]}
      sections={[
        {
          eyebrow: "Understanding the pattern",
          heading: "Notice what keeps",
          accent: "self-doubt in place.",
          paragraphs: [
            "A belief such as “I am not good enough” can lead to avoiding a challenge or overpreparing for it. That can make it harder to learn what you are capable of. Calm Mind Sessions offers a structured way to look at these patterns and test them gradually.",
          ],
        },
        {
          eyebrow: "What sessions may cover",
          heading: "Practise a fairer",
          accent: "way of seeing yourself.",
          paragraphs: [
            "Sessions can focus on beliefs that affect work, relationships or everyday choices. You agree what feels useful and may try small exercises between sessions.",
          ],
          bullets: [
            "Identify recurring beliefs and the situations that bring them up",
            "Look at evidence for and against a self-critical thought",
            "Practise responding to yourself in a more balanced way",
            "Try small behavioural experiments to see what happens",
            "Work on assertiveness and setting boundaries where relevant",
          ],
        },
        {
          eyebrow: "A collaborative approach",
          heading: "Focus on what matters",
          accent: "in your day-to-day life.",
          paragraphs: [
            "The focus is mainly on current patterns and practical goals. Earlier experiences can be discussed if they help make sense of a belief, but you do not need to talk through every part of your past.",
          ],
          links: [
            { label: "Calm Mind Sessions for low mood", href: "/calm-mind-sessions-low-mood-depression" },
            { label: "Calm Mind Sessions for perfectionism", href: "/calm-mind-sessions-perfectionism-procrastination" },
            { label: "Calm Mind Sessions for body image", href: "/calm-mind-sessions-body-image" },
            { label: "Emotional regulation", href: "/calm-mind-sessions-emotional-regulation" },
          ],
        },
      ]}
      faqs={[
        {
          question: "Is low self-esteem a mental illness?",
          answer:
            "No. It describes how you think and feel about yourself. It can occur alongside low mood or anxiety, and a clinician can help you consider what support fits.",
        },
        {
          question: "Do I have to talk about my childhood?",
          answer:
            "Only if it helps explain a current belief or pattern. Calm Mind Sessions can focus on what is happening now and the goals you choose.",
        },
        {
          question: "How many sessions will I need?",
          answer:
            "It varies with your goals and circumstances. You can review the plan together as you go.",
        },
      ]}
      safety={{
        text: "If you have thoughts of harming yourself or ending your life, or feel unable to keep yourself safe, get urgent help now. In the UAE, call",
        emergencyLinks: [
          { label: "998 for an ambulance", href: "tel:998" },
          { label: "999 for police", href: "tel:999" },
        ],
        closing: "or go to the nearest emergency department.",
      }}
      ctaTitle="Take a first step"
      ctaAccent="towards a kinder inner voice."
      ctaDescription="Talk through what has been feeling difficult with a doctor who has time to listen."
    />
  );
}
