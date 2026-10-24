import type { Metadata } from "next";
import { HealthConcernContent } from "@/components/layout/HealthConcernContent";

export const metadata: Metadata = {
  title: "PRP Hair Treatment Dubai | Dr Fouzia Al Ali",
  description:
    "Considering PRP hair treatment in Dubai? Dr Fouzia offers a doctor-led consultation to find the cause of hair loss and explain what PRP can and cannot do.",
};

export default function PRPHairPage() {
  return (
    <HealthConcernContent
      eyebrowLabel="Aesthetic medicine"
      highlightsEyebrow="PRP for hair loss in Dubai"
      title="PRP Hair Treatment"
      highlight="in Dubai"
      description="Find the cause first, then decide on treatment. Hair thinning has many causes, and PRP is only suited to some of them. PRP stands for platelet-rich plasma. A small sample of your own blood is processed to concentrate platelets, and the plasma is then injected into the scalp. Dr Fouzia is a consultant family physician who offers a doctor-led PRP hair consultation in Dubai. She starts by working out why your hair is thinning, explains what is known about PRP and its limits and helps you decide whether it makes sense for you."
      highlightsTitle="What may be"
      highlightsAccent="considered."
      highlights={[
        "A review of your hair and health history",
        "Medical causes that may need attention",
        "PRP where it may be appropriate",
        "Other options or referral when needed",
      ]}
      sections={[
        {
          eyebrow: "Hair PRP in Dubai",
          heading: "Why the cause",
          accent: "matters.",
          paragraphs: [
            "Hair loss can follow illness, stress, childbirth, crash dieting, thyroid problems, low iron or other deficiencies, hormone changes, medicines, scalp conditions or inherited patterns. PRP does not treat all of these. If a medical cause is found and treated, that may do more than any procedure.",
          ],
          links: [{ label: "Skin and hair health", href: "/skin-hair-health" }],
        },
        {
          eyebrow: "PRP hair treatment",
          heading: "How it works",
          accent: "and what is known.",
          paragraphs: [
            "A small blood sample is taken and processed to concentrate the platelets. The plasma is injected in small amounts into areas of the scalp with thinning. Treatment is usually given as a course of sessions over several months, depending on the plan agreed with your clinician.",
            "Studies suggest PRP may help some people with certain types of hair thinning, such as pattern hair loss, but results vary, study methods differ and there is no standard protocol. It is not a cure, and it may not work for everyone. Dr Fouzia will give you an honest view of what is known and unknown.",
          ],
        },
        {
          eyebrow: "Hair restoration in Dubai",
          heading: "Where PRP",
          accent: "fits.",
          paragraphs: [
            "PRP is one option among others. They may include treating an underlying condition, reviewing lifestyle and nutrition, and, where suitable, referral to a dermatologist or hair specialist. Blood tests may be considered when they would help assess likely causes.",
          ],
          links: [
            { label: "Personalised nutrition", href: "/personalised-nutrition" },
            { label: "Supplement review", href: "/supplement-review" },
          ],
        },
        {
          eyebrow: "A considered first visit",
          heading: "What to expect",
          accent: "at your visit.",
          paragraphs: [
            "The consultation covers your hair history, scalp, medical history, medicines, family history and goals. Your doctor reviews likely causes and discusses options, risks, costs and realistic outcomes before you decide.",
          ],
          bullets: [
            "Written consent before treatment",
            "Blood draw, processing and scalp treatment if you choose to proceed",
            "Aftercare advice and a follow-up review where agreed",
          ],
        },
        {
          eyebrow: "Suitability and care",
          heading: "When PRP may",
          accent: "not be suitable.",
          paragraphs: [
            "Treatment is generally not recommended if you are pregnant or breastfeeding, have a blood disorder such as low platelets, take blood-thinning medicines, have an active scalp infection or inflammatory condition, have certain immune conditions or active cancer, or are unwell on the day. Please share your full health history.",
            "Scalp tenderness, redness, swelling, headache and small bruises are common and usually settle within days. Less commonly, infection or scarring can occur. Your doctor will explain possible risks before you consent.",
          ],
        },
      ]}
      faqs={[
        {
          question: "Will PRP regrow my hair?",
          answer: "Results vary and cannot be promised. Some people see improvement and others do not.",
        },
        {
          question: "Is it an alternative to a hair transplant?",
          answer: "They are different approaches with different purposes. Dr Fouzia can discuss when a referral to a hair surgeon may be appropriate.",
        },
        {
          question: "How many sessions will I need?",
          answer: "The course depends on your assessment and treatment plan. A specific number cannot be promised in advance.",
        },
        {
          question: "Is there downtime?",
          answer: "Mild tenderness or redness may last a few days. Your clinician will explain what to expect.",
        },
        {
          question: "How much does it cost?",
          answer: "Please contact the clinic for current fees and what is included.",
        },
        {
          question: "Do you show before-and-after photos?",
          answer: "Ask the clinic whether approved photos are available and shown with patient consent.",
        },
      ]}
      safety={{
        text: "See a doctor promptly for sudden patchy hair loss, a painful or scaly scalp, or hair loss with other symptoms such as fatigue, weight change or rash. Seek urgent care for spreading redness, pus, fever or severe pain after treatment. In the UAE, call",
        emergencyLinks: [{ label: "998 for an ambulance", href: "tel:998" }],
        closing: "for emergencies. Contact the clinic for aftercare advice.",
      }}
      ctaTitle="Book a consultation to find out"
      ctaAccent="why your hair is thinning."
      ctaDescription="Talk through possible causes and treatment choices with a doctor who will give an honest view."
    />
  );
}
