import { ServicePage } from "@/components/layout/ServicePage";

export const metadata = {
  title: "Preventive Health & Lifestyle Medicine",
  description:
    "Proactive preventive health and lifestyle medicine in Dubai. Reduce disease risk, optimise wellbeing, and build resilience through evidence-based strategies.",
};

export default function PreventiveHealthLifestyleMedicinePage() {
  return (
    <ServicePage
      showEnquiryForm
      eyebrow="Health Concern"
      title="Preventive Health & Lifestyle Medicine"
      highlight="The best treatment is never needing it"
      description="Most chronic diseases develop silently over years before symptoms appear. Preventive health means catching risk factors early and using lifestyle as medicine — nutrition, movement, sleep, stress management, and connection — to build a body that resists disease and recovers quickly."
      bullets={[
        "Comprehensive preventive health screening",
        "Cardiovascular and metabolic risk assessment",
        "Lifestyle behaviour change coaching",
        "Movement and exercise prescription",
        "Stress and resilience building strategies",
        "Long-term health optimisation planning",
      ]}
      cta={{ label: "Book a consultation", href: "/contact" }}
      relatedLinks={[
        { label: "Health Marker Review", href: "/health-marker-review" },
        { label: "Healthy Aging & Longevity", href: "/healthy-aging-longevity" },
        { label: "Metabolic Health", href: "/metabolic-health-weight-management" },
      ]}
      faqs={[
        {
          question: "What is preventive health and lifestyle medicine?",
          answer: "Preventive health and lifestyle medicine focus on reducing the risk of chronic diseases through early risk assessment and sustainable lifestyle habits. This includes nutrition, physical activity, sleep, stress management and appropriate medical screening.",
        },
        {
          question: "Who should consider a preventive health consultation in Dubai?",
          answer: "Adults who want to understand their health risks, monitor existing conditions or improve long-term wellbeing may benefit from preventive healthcare. It can be particularly useful for people with a family history of diabetes, cardiovascular disease or metabolic conditions.",
        },
        {
          question: "What is included in a preventive health assessment?",
          answer: "A preventive health assessment may include a review of blood pressure, cholesterol, blood glucose, medical history, family history, lifestyle habits and age-appropriate screening requirements. Dr.Fawezya Al ALi recommends investigations according to individual risk factors.",
        },
        {
          question: "Can lifestyle medicine help reduce the risk of chronic diseases?",
          answer: "Healthy lifestyle habits can help reduce the risk of several chronic conditions. Balanced nutrition, regular exercise, adequate sleep, avoiding tobacco and maintaining a healthy weight can support cardiovascular and metabolic health.",
        },
        {
          question: "How often should I have a preventive health check-up?",
          answer: "The frequency of health check-ups depends on your age, medical history, risk factors and previous results. Some people may need annual reviews, while others require more frequent monitoring based on existing health conditions.",
        },
        {
          question: "Does preventive healthcare include nutrition and exercise guidance?",
          answer: "Yes. Lifestyle medicine may include personalised nutrition recommendations, physical activity planning, sleep improvement and stress management strategies. These recommendations are adapted to your medical needs, fitness level and daily routine.",
        },
        {
          question: "Where can I book a preventive health consultation in Dubai?",
          answer: "You can contact Dr.Fawezya Al ALi through the official website to arrange a preventive health consultation. Discuss your family medical history, lifestyle habits and health goals to help guide your assessment.",
        }
      ]}
    />
  );
}
