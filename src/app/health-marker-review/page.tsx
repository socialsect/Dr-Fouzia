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
          question: "What is a health marker review?",
          answer: "A health marker review involves interpreting laboratory results alongside your symptoms, medical history, medications and lifestyle. Dr.Fawezya Al ALi explains what relevant results may indicate and whether further assessment or follow-up is appropriate.",
        },
        {
          question: "Can a doctor review my existing blood test reports in Dubai?",
          answer: "Yes. Dr.Fawezya Al ALi can review reports from other laboratories and explain relevant findings in the context of your health history. You should bring your available laboratory reports and medication list to the consultation.",
        },
        {
          question: "Which blood test markers are important for overall health?",
          answer: "Commonly reviewed markers may include blood glucose, cholesterol, thyroid function, complete blood count, iron status and selected vitamin levels. The appropriate markers depend on your age, symptoms, medical history and individual risk factors.",
        },
        {
          question: "What does it mean if my blood test results are normal but I still feel unwell?",
          answer: "Normal laboratory results do not always explain persistent symptoms. Some conditions require additional clinical assessment, while certain symptoms may not be reflected in routine blood tests. Dr.Fawezya Al ALi reviews results alongside your medical history to determine appropriate next steps.",
        },
        {
          question: "Should I repeat my blood tests if my results are borderline?",
          answer: "Not necessarily. Whether repeat testing is appropriate depends on the specific marker, the degree of variation, your symptoms and relevant medical risks. Your doctor can explain whether monitoring, further investigation or no immediate action is needed.",
        },
        {
          question: "Can a health marker review help identify nutritional deficiencies?",
          answer: "A health marker review may help identify possible deficiencies when relevant tests are available. Depending on your symptoms, the doctor may assess iron, vitamin B12, vitamin D or other nutritional markers and recommend appropriate follow-up.",
        },
        {
          question: "How do I book a health marker review with Dr.Fawezya Al ALi in Dubai?",
          answer: "Contact Dr.Fawezya Al ALi through the official website to arrange a health marker review. Bring recent laboratory reports, your medication and supplement list, and a summary of any symptoms you are experiencing.",
        }
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
