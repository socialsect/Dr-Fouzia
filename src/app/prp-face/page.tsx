import type { Metadata } from "next";
import { HealthConcernContent } from "@/components/layout/HealthConcernContent";

export const metadata: Metadata = {
  title: "PRP Face Dubai | Dr Fouzia Al Ali",
  description:
    "Considering PRP for your face in Dubai? Dr Fouzia offers a doctor-led consultation on PRP, how it works, the risks and realistic expectations first.",
};

export default function PRPFacePage() {
  return (
    <HealthConcernContent
      eyebrowLabel="Aesthetic medicine"
      highlightsEyebrow="PRP skin treatment in Dubai"
      title="PRP Face Treatment"
      highlight="in Dubai"
      description="Using your own blood, explained honestly. PRP stands for platelet-rich plasma. A small sample of your blood is spun in a machine to separate a concentrated plasma, which is then applied to or injected into the skin. It is used in aesthetic medicine for skin quality, though evidence is still developing and results vary between people. Dr Fouzia is a consultant family physician who offers a doctor-led PRP consultation in Dubai. She assesses your skin and health, explains what the treatment can and cannot do and helps you decide whether it suits you."
      highlightsTitle="Concerns that may"
      highlightsAccent="be discussed."
      highlights={[
        "Skin that looks tired or has uneven texture",
        "Fine lines",
        "Acne scarring",
        "Uneven skin tone",
      ]}
      sections={[
        {
          eyebrow: "PRP facial in Dubai",
          heading: "How the treatment",
          accent: "works.",
          paragraphs: [
            "A small blood sample is taken, as for a blood test. The sample is processed in a centrifuge to concentrate the platelets. The plasma is then applied to the skin, usually with microneedling, or injected in small amounts. The skin goes through its natural healing process.",
            "Because PRP is made from your own blood, some risks associated with a foreign substance are lower, but it is still a procedure with risks. It is not risk-free.",
          ],
          links: [{ label: "Microneedling", href: "/microneedling-dermapen" }],
        },
        {
          eyebrow: "PRP skin rejuvenation in Dubai",
          heading: "What the evidence",
          accent: "says.",
          paragraphs: [
            "Research on PRP for the skin shows some promise, but studies vary in method, and there is no standard protocol. Effects are not guaranteed, and a course of sessions is often suggested. Dr Fouzia will give you an honest view of what is known and unknown.",
            "She will also tell you whether PRP is suitable for your skin, or whether another approach, or no treatment, would be better.",
          ],
          links: [{ label: "Skin and hair health", href: "/skin-hair-health" }],
        },
        {
          eyebrow: "A considered first visit",
          heading: "What to expect",
          accent: "at your visit.",
          paragraphs: [
            "Your consultation covers your skin, goals, medical history, medicines, allergies and previous treatments. You can ask questions before deciding whether to proceed.",
          ],
          bullets: [
            "A discussion of options, risks, costs and realistic outcomes",
            "Written consent before treatment",
            "Blood draw, processing and treatment at the visit where appropriate",
            "Aftercare advice, including sun protection, and a review where agreed",
          ],
        },
        {
          eyebrow: "Suitability and care",
          heading: "When PRP may",
          accent: "not be suitable.",
          paragraphs: [
            "Treatment is generally not recommended if you are pregnant or breastfeeding, have a blood disorder such as low platelets, take blood-thinning medicines, have an active infection or skin condition at the site, have active cancer or certain immune conditions, or are unwell on the day. Please share your full health history so your doctor can assess what is appropriate.",
            "Redness, swelling, bruising and tenderness are common and usually settle within days. Less commonly, infection, prolonged redness, pigment changes or scarring can occur. Your doctor will explain possible risks before you consent.",
          ],
        },
      ]}
      faqs={[
        {
          question: "Is PRP safe because it comes from my own blood?",
          answer: "It avoids some risks, but it is still a medical procedure with possible side effects.",
        },
        {
          question: "Is it the same as a vampire facial?",
          answer: "People sometimes use that phrase for PRP combined with microneedling. Your clinician can explain the procedure in plain terms.",
        },
        {
          question: "How many sessions will I need?",
          answer: "It depends on your skin and the plan agreed at consultation. A specific course cannot be promised in advance.",
        },
        {
          question: "Is there downtime?",
          answer: "Redness and swelling can last a few days. Your clinician will explain what to expect for your treatment.",
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
        text: "Seek urgent care for spreading redness, pus, fever, severe pain or an allergic reaction after treatment. In the UAE, call",
        emergencyLinks: [{ label: "998 for an ambulance", href: "tel:998" }],
        closing: "for emergencies. Contact the clinic for aftercare advice.",
      }}
      ctaTitle="Book a consultation to"
      ctaAccent="talk through your options."
      ctaDescription="Speak with a doctor who will explain what is known, what remains uncertain and whether PRP is suitable for you."
    />
  );
}
