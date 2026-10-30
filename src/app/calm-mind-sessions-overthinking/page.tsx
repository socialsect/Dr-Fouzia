import type { Metadata } from "next";
import { HealthConcernContent } from "@/components/layout/HealthConcernContent";

export const metadata: Metadata = {
  title: "Calm Mind Sessions for Overthinking Dubai | Dr Fouzia Al Ali",
  description:
    "Stuck replaying conversations or worrying about what’s next? Dr Fouzia offers Calm Mind Sessions for overthinking and rumination in Dubai, with practical skills.",
};

export default function CalmMindSessionsOverthinkingPage() {
  return (
    <HealthConcernContent
      eyebrowLabel="Cognitive behavioural therapy"
      highlightsEyebrow="Calm Mind Sessions for overthinking in Dubai"
      title="Calm Mind Sessions for Overthinking in Dubai"
      highlight="Step out of the mental replay"
      description="Overthinking can feel like a mind that will not stop: replaying a conversation, rehearsing what might go wrong or circling a decision without reaching an answer. Dr Fouzia is a consultant family physician who offers Calm Mind Sessions for overthinking in Dubai. Sessions help you notice the pattern, understand what may keep it going and practise other ways to respond, while considering whether tiredness, poor sleep or low mood are adding to it."
      highlightsTitle="Find a way through"
      highlightsAccent="the thought loop."
      highlights={[
        "Notice what starts repetitive thinking and what happens next",
        "Tell useful problem-solving apart from going over the same ground",
        "Practise shifting attention towards what you can act on",
        "Use thought records and behavioural experiments where appropriate",
        "Review habits such as repeated reassurance-seeking",
        "Try short exercises between sessions and discuss what you notice",
      ]}
      sections={[
        {
          eyebrow: "Overthinking treatment in Dubai",
          heading: "How repetitive thinking can",
          accent: "show up.",
          paragraphs: [
            "Repetitive thinking may affect sleep, concentration, relationships or work. A consultation can help you describe the pattern and consider whether Calm Mind Sessions or another kind of support is a good fit.",
          ],
          bullets: [
            "Replaying past events or conversations and picking them apart",
            "Rehearsing future problems that may never happen",
            "Struggling to decide, then doubting the decision",
            "Lying awake with a busy mind",
            "Feeling drained after long stretches of thinking without a clearer answer",
          ],
        },
        {
          eyebrow: "Rumination therapy in Dubai",
          heading: "Thinking more does not always",
          accent: "solve the problem.",
          paragraphs: [
            "Rumination is repetitive thinking about problems, mistakes or feelings that goes over the same ground. It can feel productive, but may keep worry or low mood going rather than lead to a solution. Calm Mind Sessions can help you distinguish useful problem-solving from repetitive loops.",
          ],
          links: [
            { label: "Explore Calm Mind Sessions for anxiety", href: "/calm-mind-sessions-anxiety" },
            { label: "Read about low mood support", href: "/calm-mind-sessions-low-mood-depression" },
          ],
        },
        {
          eyebrow: "Calm Mind Sessions for rumination in Dubai",
          heading: "Practise different ways to",
          accent: "respond.",
          paragraphs: [
            "Sessions may map what starts a loop, the thoughts and feelings that follow, and the actions that keep it going. You can then practise an agreed exercise between sessions and review what helped.",
          ],
          bullets: [
            "Notice the loop early and name it",
            "Use scheduled thinking time or a problem-solving step when useful",
            "Shift attention towards something you can act on",
            "Reduce repeated checking or reassurance-seeking when it feeds the loop",
            "Try thought records, behavioural experiments or a short daily routine",
          ],
        },
        {
          eyebrow: "Who this suits",
          heading: "When your thoughts are getting",
          accent: "in the way.",
          paragraphs: [
            "This page may be relevant if repetitive thinking is affecting your sleep, concentration, relationships or work. If low mood or anxiety is also strong, Dr Fouzia can discuss a broader plan and whether another form of care would fit better.",
          ],
          links: [
            { label: "Explore Calm Mind Sessions for sleep difficulties", href: "/calm-mind-sessions-sleep-insomnia" },
            { label: "Explore Calm Mind Sessions for perfectionism", href: "/calm-mind-sessions-perfectionism-procrastination" },
          ],
        },
      ]}
      faqs={[
        {
          question: "Is overthinking a mental health condition?",
          answer:
            "Overthinking by itself is not a diagnosis. Repetitive thinking can occur alongside anxiety or low mood, and may be worth discussing when it affects everyday life.",
        },
        {
          question: "How is this different from anxiety therapy?",
          answer:
            "Anxiety often centres on fear and threat, while rumination may revisit past events. The two can overlap; a first conversation can help decide what to focus on.",
        },
        {
          question: "How many sessions will I need?",
          answer:
            "It varies. Your plan can be reviewed with you as you go.",
        },
      ]}
      safety={{
        text: "If you have thoughts of harming yourself or ending your life, get urgent help in the UAE now. Call",
        emergencyLinks: [
          { label: "998 for an ambulance", href: "tel:998" },
          { label: "999 for police", href: "tel:999" },
        ],
        closing: "or go to the nearest emergency department.",
      }}
      ctaTitle="Take the first step towards"
      ctaAccent="a quieter mind."
      ctaDescription="Talk it through with a doctor who has time to listen."
    />
  );
}
