import type { Metadata } from "next";
import { HealthConcernContent } from "@/components/layout/HealthConcernContent";

export const metadata: Metadata = {
  title: "Supplement Review Dubai",
  description:
    "Review vitamins, supplements and medicines with Dr Fouzia in Dubai, including what may be useful, unnecessary or worth discussing for safety.",
};

export default function SupplementReviewPage() {
  return (
    <HealthConcernContent
      title="Supplement Review in Dubai"
      highlight="Keep what helps, question the rest"
      description="It can be hard to know which vitamins, powders or capsules you need. Dr Fouzia is a consultant family physician who reviews what you take, why you take it, your health conditions, medicines and relevant test results."
      highlightsTitle="A safer, simpler"
      highlightsAccent="supplement routine."
      highlights={[
        "A full list of products, doses, brands and timing",
        "Each product considered alongside your symptoms, diet and history",
        "Possible interactions with prescription and over-the-counter medicines reviewed",
        "Vitamin levels or tests considered when your history suggests a need",
        "Tests chosen only when a result could change your plan",
        "A clear list of what to continue, change, pause or discuss further",
      ]}
      sections={[
        {
          eyebrow: "Medical supplement review in Dubai",
          heading: "Why a clinician’s view",
          accent: "helps.",
          paragraphs: [
            "Supplements can overlap or interact with medicines, and some may not be needed if your diet already meets the need. The review considers your health conditions, prescription medicines, pregnancy plans and test results before discussing next steps.",
            "Bring the products you take so the recommendations can be specific to you. Do not stop a prescribed medicine without first speaking with the clinician who prescribed it.",
          ],
          links: [
            { label: "Explore personalised nutrition", href: "/personalised-nutrition" },
            { label: "Read about health marker reviews", href: "/health-marker-review" },
          ],
        },
        {
          eyebrow: "What to bring",
          heading: "Bring the details that make the",
          accent: "review useful.",
          paragraphs: [
            "If you can, bring the packaging or clear photos of the labels. Include products you take occasionally as well as those you use every day.",
          ],
          bullets: [
            "Every supplement, vitamin, herbal product and powder, with its dose",
            "Your prescription medicines",
            "Recent blood test results, if available",
            "A note of why you started each product and how long you have taken it",
          ],
        },
        {
          eyebrow: "After the review",
          heading: "Leave with clear next",
          accent: "steps.",
          paragraphs: [
            "You receive a short written summary of what to keep, change or stop, with the reasons explained. Follow-up can review how you are doing and whether any tests need repeating.",
          ],
        },
        {
          eyebrow: "Who this suits",
          heading: "For anyone taking several",
          accent: "products.",
          paragraphs: [
            "A review may be useful if you take several supplements, use regular medicines, are planning a pregnancy or want to understand whether the products you use are appropriate for you.",
          ],
        },
      ]}
      faqs={[
        {
          question: "What is a medical supplement review?",
          answer: "A medical supplement review evaluates the vitamins, minerals, herbal products and other supplements you currently take. Dr.Fawezya Al ALi considers their purpose, dosage, ingredients, potential interactions, medical conditions and relevant test results.",
        },
        {
          question: "When should I consult a doctor for a supplement review in Dubai?",
          answer: "Consider a supplement review if you take multiple vitamins, minerals or herbal products, are unsure about appropriate dosages, experience possible side effects or take supplements alongside prescription medications. A medical review helps assess whether your current routine is appropriate.",
        },
        {
          question: "Can taking multiple supplements cause side effects?",
          answer: "Yes. Taking multiple supplements may lead to excessive nutrient intake, overlapping ingredients or interactions with medications. Some supplements can also affect existing medical conditions. A doctor can review your complete supplement list and identify potential safety concerns.",
        },
        {
          question: "How do I know which vitamins and supplements my body needs?",
          answer: "Your nutritional requirements depend on your diet, medical history, symptoms and individual health circumstances. A doctor may recommend selected blood tests when clinically appropriate rather than suggesting supplements without assessing your needs.",
        },
        {
          question: "Can supplements interact with prescription medications?",
          answer: "Yes. Certain vitamins, minerals and herbal products can affect how prescription medications work or increase the risk of side effects. Dr.Fawezya Al ALi reviews supplement ingredients alongside your medication list to identify possible interactions.",
        },
        {
          question: "Should I stop taking unnecessary supplements after a medical review?",
          answer: "Your doctor can help determine which supplements may be unnecessary, unsuitable or worth continuing based on your health needs. Do not discontinue prescribed medication or medically recommended treatment without discussing it with the relevant healthcare professional.",
        },
        {
          question: "How can I book a supplement review with Dr.Fawezya Al ALi in Dubai?",
          answer: "You can contact Dr.Fawezya Al ALi through the official website to arrange a supplement assessment. Bring your supplement containers or a list showing product names, ingredients, dosages and frequency of use.",
        }
      ]}
      safety={{
        text: "Do not stop a prescribed medicine because of a supplement review without speaking with your prescriber. Swelling of the face or throat, breathing difficulty or a widespread rash can be an emergency. Call",
        emergencyLinks: [{ label: "998 for an ambulance", href: "tel:998" }],
        closing: "in the UAE, or seek emergency care now.",
      }}
      ctaTitle="Bring your supplements and let’s"
      ctaAccent="go through them together."
      ctaDescription="Book a consultation with a doctor who will explain each recommendation."
      showEnquiryForm
    />
  );
}
