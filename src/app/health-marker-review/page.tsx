import type { Metadata } from "next";
import { HealthConcernContent } from "@/components/layout/HealthConcernContent";

export const metadata: Metadata = {
  title: "Health Assessment Dubai",
  description:
    "Bring your blood test results to Dr Fouzia in Dubai for a doctor-led review that explains what they may mean in the context of your health.",
};

export default function HealthMarkerReviewPage() {
  return (
    <HealthConcernContent
      title="Health Assessment in Dubai"
      highlight="Understand what your results are telling you"
      description="A page of blood results can be hard to read, especially when a report says ‘normal’ but you still feel unwell. Dr Fouzia is a consultant family physician who puts laboratory results alongside your symptoms, history and medicines, then explains them in plain language."
      highlightsTitle="Your results"
      highlightsAccent="in context."
      highlights={[
        "Key health markers explained one by one",
        "Reports from another laboratory can be reviewed; ask the clinic about testing options",
        "Heart and metabolic markers discussed alongside your history",
        "Thyroid, iron or vitamin tests considered when relevant to your symptoms",
        "Reference ranges explained, including what a result near the edge may mean",
        "Repeat tests discussed only when they could help guide care",
      ]}
      sections={[
        {
          eyebrow: "Blood test review in Dubai",
          heading: "Bring the information that",
          accent: "adds context.",
          paragraphs: [
            "A result is interpreted alongside your symptoms and health history. Bring your recent laboratory reports, a list of medicines and supplements, and a note of your main symptoms and when they started.",
          ],
          bullets: [
            "Recent laboratory reports, on paper or on your phone",
            "A list of medicines and supplements",
            "Your main symptoms and when they started",
            "Relevant family history, such as heart disease, diabetes or thyroid problems",
          ],
        },
        {
          eyebrow: "Laboratory results review in Dubai",
          heading: "Understand what matters and",
          accent: "what comes next.",
          paragraphs: [
            "You receive a clear explanation of each result, which findings may matter for you and which may need little action. A written list of next steps may include lifestyle changes, further tests or referral to a specialist.",
          ],
          links: [
            { label: "Read about functional medicine consultations", href: "/functional-medicine-consultation" },
            { label: "Explore metabolic health", href: "/metabolic-health-weight-management" },
          ],
        },
        {
          eyebrow: "A health assessment alongside standard care",
          heading: "Tests should answer a",
          accent: "useful question.",
          paragraphs: [
            "Reference ranges differ between tests and laboratories. A result inside a reference range does not always explain ongoing symptoms, and a result outside it does not automatically mean disease. Dr Fouzia uses the report, your symptoms and clinical judgement to decide whether anything needs follow-up.",
            "Further tests are considered when they could help guide your care. This review supports routine medical care; it does not replace it.",
          ],
        },
        {
          eyebrow: "Who this suits",
          heading: "For a clearer view of your",
          accent: "health results.",
          paragraphs: [
            "This review may suit adults who have recent blood tests they would like explained, people with ongoing symptoms despite ‘normal’ results, or those discussing a preventive baseline with their doctor.",
          ],
        },
      ]}
      faqs={[
        {
          question: "Do I need to fast before testing?",
          answer:
            "It depends on the tests being considered. The clinic will tell you about any preparation when your appointment and tests are arranged.",
        },
        {
          question: "Can you review results from another clinic?",
          answer:
            "Yes. Bring a copy of the report and its reference ranges so the results can be discussed in context.",
        },
        {
          question: "Will I be sent for lots of tests?",
          answer:
            "Tests are selected for a reason. Your doctor can explain what each test may help answer before it is arranged.",
        },
        {
          question: "How soon will I get results?",
          answer:
            "Turnaround times depend on the tests and laboratory. Contact the clinic for current timing and fees.",
        },
        {
          question:
            "Where can I get my blood test results reviewed by a doctor in Dubai?",
          answer:
            "Dr Fouzia Al Ali offers health marker reviews in Dubai, where laboratory results are interpreted alongside your medical history, symptoms, medications and relevant health concerns.",
        },
        {
          question:
            "Can a doctor explain normal blood test results if I still feel unwell?",
          answer:
            "Yes. A result within a laboratory's reference range does not always explain how you feel. A doctor can review the complete report alongside your symptoms, medical history and other relevant health factors.",
        },
        {
          question:
            "Which blood markers should be checked during a health assessment?",
          answer:
            "Depending on your medical history and symptoms, a health assessment may consider blood count, iron, thyroid function, vitamin levels, blood glucose, cholesterol and other relevant markers. Not everyone requires every test.",
        },
        {
          question:
            "Do I need to repeat blood tests if my previous results are normal?",
          answer:
            "Not necessarily. Repeat testing depends on your symptoms, medical history, previous results and whether new information would influence your healthcare plan. Dr Fouzia Al Ali recommends further testing when clinically justified.",
        },
      ]}
      safety={{
        text: "If a report is marked urgent or critical, contact the clinician who ordered it promptly. Chest pain, severe shortness of breath or fainting needs emergency medical care. Call",
        emergencyLinks: [{ label: "998 for an ambulance", href: "tel:998" }],
        closing: "in the UAE.",
      }}
      ctaTitle="Bring your results and let’s"
      ctaAccent="make sense of them."
      ctaDescription="Talk through your numbers with a doctor who has time to explain."
      showEnquiryForm
    />
  );
}
