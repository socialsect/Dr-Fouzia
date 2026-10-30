import { Hero } from "@/components/sections/Hero";
import { Ticker } from "@/components/sections/Ticker";
import { ConnectedHealth } from "@/components/sections/ConnectedHealth";
import { Services } from "@/components/sections/Services";
import { Doctor } from "@/components/sections/Doctor";
import { Process } from "@/components/sections/Process";
import { Why } from "@/components/sections/Why";
import { PageEnquirySection } from "@/components/layout/PageEnquirySection";
import { Instagram } from "@/components/sections/Instagram";
import { Contact } from "@/components/sections/Contact";
import { Faq } from "@/components/sections/Faq";
import { homepageFaqItems } from "@/lib/data";

const homepageStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Physician",
      name: "Dr Fouzia Al Ali",
      url: "https://drfouziaalali.com/",
      jobTitle: "Consultant Family Physician",
      description:
        "Dr Fouzia Al Ali is a consultant family physician offering functional medicine, women's health, Calm Mind Sessions and aesthetic care in Dubai.",
    },
    {
      "@type": "MedicalBusiness",
      name: "Dr Fouzia Al Ali",
      url: "https://drfouziaalali.com/",
      areaServed: "Dubai, UAE",
    },
    {
      "@type": "FAQPage",
      mainEntity: homepageFaqItems.map(({ question, answer }) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: {
          "@type": "Answer",
          text: answer,
        },
      })),
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homepageStructuredData).replace(/</g, "\\u003c"),
        }}
      />
      <main>
        <Hero />
        <Ticker />
        <ConnectedHealth />
        <Services />
        <Doctor />
        <Process />
        <Why />
        <PageEnquirySection />
        <Instagram />
        <Contact />
        <Faq />
      </main>
    </>
  );
}
