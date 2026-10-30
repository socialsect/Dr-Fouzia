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
          question: "Do I need blood tests first?",
          answer:
            "Not always. Dr Fouzia can review your history first and discuss whether any test would be useful before it is ordered.",
        },
        {
          question: "Will the clinic sell me supplements?",
          answer:
            "Ask the clinic about its current product policy. The purpose of a review is to explain recommendations and their reasons clearly.",
        },
        {
          question: "Should I keep taking my supplements before the appointment?",
          answer:
            "Do not start anything new just for the visit, and bring a list of everything you take. If you are concerned about a product or a possible reaction, contact a clinician or pharmacist for advice.",
        },
        {
          question: "Is this the same as a nutrition consultation?",
          answer:
            "No. A supplement review focuses on products you take or are considering. Food-based guidance is covered in a personalised nutrition consultation.",
        },
        {
          question:
            "Where can I get my vitamins and supplements reviewed by a doctor in Dubai?",
          answer:
            "Dr Fouzia Al Ali offers medical supplement reviews in Dubai, assessing your current vitamins, minerals and other supplements alongside your medications, health conditions and relevant laboratory results.",
        },
        {
          question:
            "How do I know which supplements my body actually needs?",
          answer:
            "Supplement requirements depend on dietary intake, medical history, symptoms and nutritional status. A doctor can assess whether supplementation is appropriate and whether relevant tests are needed before recommending specific products.",
        },
        {
          question: "Can taking too many supplements affect my health?",
          answer:
            "Yes. Taking excessive amounts of certain vitamins and minerals can cause adverse effects. Some supplements may also interact with prescription medications or overlap with other products. A medical review helps assess these risks.",
        },
        {
          question:
            "Should I take vitamin D, B12 or iron supplements without a blood test?",
          answer:
            "Not everyone requires these supplements. The decision depends on individual risk factors, dietary intake, symptoms and medical history. Testing may be appropriate when a deficiency is suspected.",
        },
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
