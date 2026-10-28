import type { Metadata } from "next";
import { HealthConcernContent } from "@/components/layout/HealthConcernContent";

export const metadata: Metadata = {
  title: "Facial Contouring Dubai | Dr Fouzia Al Ali",
  description:
    "Thinking about facial contouring in Dubai? Dr Fouzia offers a doctor-led consultation on non-surgical options, risks and realistic expectations first.",
};

export default function FacialContouringPage() {
  return (
    <HealthConcernContent
      eyebrowLabel="Aesthetic medicine"
      highlightsEyebrow="Facial contouring treatment in Dubai"
      title="Facial Contouring"
      highlight="in Dubai"
      description="A considered look at your facial proportions. Facial contouring is about the balance and shape of the face, particularly the jawline, chin and cheeks. Some non-surgical treatments use injectable gels to add support or definition in these areas. Dr Fouzia is a consultant family physician who offers a doctor-led facial contouring consultation in Dubai. She looks at your face as a whole, explains what could and could not be achieved, the risks and the alternatives, and helps you decide whether treatment is right for you."
      highlightsTitle="Areas that may"
      highlightsAccent="be discussed."
      highlights={[
        "Jawline: how it relates to chin, cheeks and neck, and whether treatment would help",
        "Cheek: support or volume in the mid-face, depending on anatomy, age and goals",
        "Chin: balance of the lower face in profile",
        "The whole face is considered before recommending any change",
      ]}
      sections={[
        {
          eyebrow: "Facial contouring treatment in Dubai",
          heading: "How it",
          accent: "works.",
          paragraphs: [
            "Non-surgical contouring usually involves placing a dermal filler, often hyaluronic acid, at selected points to add volume or structure. The effect is temporary, and it fades as the body absorbs the product. It does not change bone and is not a substitute for surgery.",
          ],
          links: [
            { label: "Dermal fillers", href: "/dermal-fillers" },
          ],
        },
        {
          eyebrow: "What to expect at your visit",
          heading: "A careful order",
          accent: "at every step.",
          paragraphs: [
            "Nothing is done until you have been fully informed and have given written consent.",
          ],
          bullets: [
            "A consultation covering goals, medical history, medicines, allergies and previous treatments",
            "A face assessment and a discussion of options, risks, costs and realistic outcomes",
            "Written consent before treatment",
            "Treatment in the clinic, with numbing cream or local anaesthetic where used",
            "Aftercare advice and a review where agreed",
          ],
        },
        {
          eyebrow: "Possible risks and side effects",
          heading: "What to",
          accent: "be aware of.",
          paragraphs: [
            "Swelling, bruising, tenderness, lumps and asymmetry are common and usually settle. Less commonly, infection, allergic reaction or a blocked blood vessel can occur. A blocked vessel is rare but serious and needs urgent treatment. Your doctor will explain these risks before you consent.",
          ],
          links: [
            { label: "Aesthetic medicine", href: "/aesthetic-medicine" },
            { label: "Anti-wrinkle treatments", href: "/anti-wrinkle-treatments" },
            { label: "Skin boosters", href: "/skin-boosters" },
            { label: "Book a consultation", href: "/contact" },
          ],
        },
        {
          eyebrow: "Suitability and care",
          heading: "When contouring may",
          accent: "not be suitable.",
          paragraphs: [
            "Treatment is generally not recommended during pregnancy or breastfeeding, with an infection or active skin condition at the site, certain autoimmune or bleeding conditions, a history of severe allergy, or while taking some medicines. Share your health history and concerns at consultation so your doctor can discuss what is appropriate.",
          ],
        },
      ]}
      faqs={[
        {
          question: "How long does it last?",
          answer:
            "Effects fade over time as the filler is absorbed. The timing is discussed at your consultation.",
        },
        {
          question: "Is there downtime?",
          answer:
            "Some swelling or bruising is common and varies by person.",
        },
        {
          question: "Can I have contouring and other treatments together?",
          answer:
            "This is discussed at consultation based on your goals and suitability.",
        },
        {
          question: "How much does it cost?",
          answer:
            "Fees are confirmed at your consultation. Message us for current information.",
        },
        {
          question: "Do you show before-and-after photos?",
          answer: "Ask the clinic whether approved photos are available and shown with patient consent.",
        },
      ]}
      safety={{
        text: "Seek urgent care immediately for severe pain, a white, blue or mottled patch of skin, sudden vision change, difficulty breathing or facial swelling after treatment. In the UAE, call",
        emergencyLinks: [
          { label: "998 for an ambulance", href: "tel:998" },
        ],
        closing: "Contact the clinic first for any concern.",
      }}
      ctaTitle="Book a consultation to"
      ctaAccent="talk through your options."
      ctaDescription="Speak with a doctor who will give honest advice."
    />
  );
}
