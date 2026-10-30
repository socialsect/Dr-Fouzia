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
          question: "What is preventive medicine and why is it important?",
          answer:
            "Preventive medicine focuses on identifying health risks early and supporting long-term health through appropriate screening, nutrition, physical activity, sleep and lifestyle changes. It aims to reduce the risk of preventable health complications.",
        },
        {
          question:
            "Where can I get a preventive health assessment in Dubai?",
          answer:
            "Dr Fouzia Al Ali offers preventive health assessments in Dubai, considering medical history, cardiovascular risk, metabolic health, lifestyle habits and screening requirements to develop an individualised prevention plan.",
        },
        {
          question:
            "Which health checks should adults consider for disease prevention?",
          answer:
            "Appropriate health checks depend on age, sex, family history and individual risk factors. They may include blood pressure, cholesterol, blood glucose and recommended age-appropriate screening tests.",
        },
        {
          question:
            "Can lifestyle medicine help reduce the risk of diabetes and heart disease?",
          answer:
            "Lifestyle medicine supports cardiovascular and metabolic health through balanced nutrition, regular physical activity, healthy weight management, adequate sleep and stress management. These measures can help reduce risk, although individual outcomes vary.",
        },
      ]}
    />
  );
}
