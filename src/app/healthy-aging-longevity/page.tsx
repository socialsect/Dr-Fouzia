import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { PageEnquirySection } from "@/components/layout/PageEnquirySection";

export const metadata: Metadata = {
  title: "Healthy Aging Doctor Dubai | Longevity & Prevention",
  description:
    "See a healthy aging doctor in Dubai. Dr Fouzia offers preventive health reviews and longevity-focused care built on evidence. Book a consultation.",
};

const highlights = [
  "Heart and blood vessel risk reviewed, including blood pressure and cholesterol",
  "Blood sugar and metabolic health considered early",
  "Muscle and bone health discussed, including strength and protein priorities",
  "Sleep and stress habits reviewed",
  "Screening due for your age and sex discussed, with referral where needed",
  "Memory and thinking concerns listened to, assessed or referred when appropriate",
];

const priorities = [
  "Review blood pressure, cholesterol, glucose and other relevant markers",
  "Set nutrition, protein, movement and strength priorities",
  "Discuss sleep and stress habits",
  "Review screening that is appropriate to your age, sex and history",
  "Make a realistic plan that fits your life",
];

const faqs = [
  {
    question: "What is healthy ageing and longevity medicine?",
    answer: "Healthy ageing and longevity medicine focus on maintaining physical function, metabolic health, cardiovascular wellness, cognitive function and quality of life as people grow older. The approach prioritises evidence-based prevention and individual health risk assessment.",
  },
  {
    question: "Who should consult a healthy ageing doctor in Dubai?",
    answer: "Adults interested in maintaining long-term health, assessing age-related risk factors or improving lifestyle habits may benefit from a healthy ageing consultation. It can also help individuals with a family history of cardiovascular disease, diabetes or other chronic conditions.",
  },
  {
    question: "What does a healthy ageing assessment include?",
    answer: "A healthy ageing assessment may include reviewing blood pressure, cholesterol, blood glucose, bone health, muscle strength, nutrition, sleep, stress and age-appropriate screening. Dr.Fawezya Al ALi tailors the assessment according to your medical history and health priorities.",
  },
  {
    question: "Can lifestyle changes improve healthy ageing and longevity?",
    answer: "Yes. Regular exercise, strength training, balanced nutrition, adequate protein intake, good sleep and avoidance of tobacco support healthy ageing. These habits can help maintain muscle strength, cardiovascular health, metabolic function and independence.",
  },
  {
    question: "Which health markers are important for longevity?",
    answer: "Important health markers may include blood pressure, cholesterol, blood glucose, kidney function and other tests selected according to individual risk factors. Bone health, muscle function and age-appropriate screening are also important parts of preventive care.",
  },
  {
    question: "Can functional medicine support healthy ageing?",
    answer: "Functional medicine can provide a broader assessment of factors influencing long-term health, including nutrition, metabolism, sleep, stress and lifestyle. Dr.Fawezya Al ALi combines this approach with preventive medical care to support individual health goals.",
  },
  {
    question: "How can I book a healthy ageing and longevity consultation in Dubai?",
    answer: "You can contact Dr.Fawezya Al ALi through the official website to arrange a healthy ageing assessment. Bring your recent health reports, medication list and information about your lifestyle and family medical history.",
  }
];

export default function HealthyAgingLongevityPage() {
  return (
    <main className="bg-white">
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="wrap">
          <Reveal direction="left">
            <div className="eyebrow mb-5">Health concern</div>
          </Reveal>
          <Reveal direction="left" delay={100}>
            <h1
              className="mb-7 max-w-[1000px] font-display font-normal leading-[1.04] tracking-[-0.045em] text-ink"
              style={{ fontSize: "clamp(var(--step-4), 6.2vw, var(--step-6))" }}
            >
              Healthy Aging Doctor in Dubai
              <br />
              <em className="text-blue">Plan for the years ahead.</em>
            </h1>
          </Reveal>
          <Reveal direction="up" delay={180}>
            <p className="max-w-[820px] text-[16px] leading-[1.8] text-ink-soft md:text-[18px]">
              Healthy aging is about adding good years, not only more of them. A healthy aging
              doctor in Dubai can help you spot health risks early, review the basics and plan
              around what matters to you. Dr Fouzia is a consultant family physician, so
              longevity advice here is grounded in preventive medicine rather than trends.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-surface-deep py-16 md:py-20">
        <div className="wrap">
          <Reveal direction="up">
            <div className="mb-9 max-w-[700px]">
              <div className="eyebrow mb-4">A considered first visit</div>
              <h2 className="font-display text-[clamp(2rem,4vw,3.25rem)] font-normal leading-[1.1] tracking-[-0.035em] text-ink">
                A preventive review shaped around <em className="text-blue">you.</em>
              </h2>
            </div>
          </Reveal>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {highlights.map((item, index) => (
              <Reveal key={item} direction="up" delay={(index % 3) * 55}>
                <div className="flex h-full min-h-[92px] items-start gap-3 rounded-xl border border-line bg-white p-5 text-[14px] leading-[1.7] text-ink-soft">
                  <span className="mt-0.5 text-blue" aria-hidden="true">
                    &#10003;
                  </span>
                  <span>{item}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="wrap grid gap-9 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
          <Reveal direction="left">
            <div className="eyebrow mb-5">Longevity doctor in Dubai</div>
            <h2 className="max-w-[480px] font-display text-[clamp(2rem,4vw,3.25rem)] font-normal leading-[1.1] tracking-[-0.035em] text-ink">
              What a preventive review <em className="text-blue">covers.</em>
            </h2>
            <p className="mt-5 max-w-[450px] text-[14.5px] leading-[1.75] text-ink-soft">
              Longevity medicine can mean different things in different clinics. Here it means a
              careful review of cardiovascular and metabolic health, bone and muscle health,
              sleep, stress and screening that may be due. Tests are chosen for a reason, and
              limits in the evidence are explained.
            </p>
          </Reveal>
          <div className="divide-y divide-line border-y border-line">
            {priorities.map((item, index) => (
              <Reveal key={item} direction="up" delay={(index % 3) * 45}>
                <div className="flex items-start gap-4 py-4 md:py-5">
                  <span className="mt-0.5 text-blue" aria-hidden="true">
                    &#10003;
                  </span>
                  <p className="text-[14px] leading-[1.7] text-ink-soft md:text-[15px]">{item}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-16 md:py-20">
        <div className="wrap grid gap-5 md:grid-cols-2">
          <Reveal direction="up">
            <article className="h-full rounded-2xl border border-line bg-white p-6 md:p-8">
              <div className="eyebrow mb-5">Who this suits</div>
              <h2 className="mb-4 font-display text-[clamp(1.8rem,3.5vw,2.7rem)] font-normal leading-[1.1] tracking-[-0.035em] text-ink">
                For a clearer view of your <em className="text-blue">health.</em>
              </h2>
              <p className="text-[14.5px] leading-[1.75] text-ink-soft">
                A preventive review may suit adults who want to understand their health risks,
                people with a family history of heart disease or diabetes, and those entering
                midlife who want a practical plan.
              </p>
            </article>
          </Reveal>
          <Reveal direction="up" delay={80}>
            <article className="h-full rounded-2xl border border-line bg-surface-deep p-6 md:p-8">
              <div className="eyebrow mb-5">Programme options</div>
              <h2 className="mb-4 font-display text-[clamp(1.8rem,3.5vw,2.7rem)] font-normal leading-[1.1] tracking-[-0.035em] text-ink">
                One review or a more structured <em className="text-blue">pathway.</em>
              </h2>
              <p className="mb-6 text-[14.5px] leading-[1.75] text-ink-soft">
                For a longer healthy aging pathway with follow-up, explore the programme. For a
                focused assessment, see the biological age page.
              </p>
              <div className="flex flex-wrap gap-x-6 gap-y-3 border-t border-line pt-5 text-[14px] font-semibold">
                <Link href="/healthy-aging-biological-age-reset" className="text-blue underline underline-offset-4">
                  Healthy aging programme
                </Link>
                <Link href="/biological-age-reset" className="text-blue underline underline-offset-4">
                  Biological age assessment
                </Link>
              </div>
            </article>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="wrap-narrow">
          <Reveal direction="up">
            <div className="mb-6">
              <div className="eyebrow mb-4">A few helpful answers</div>
              <h2 className="font-display text-[clamp(2rem,4vw,3.25rem)] font-normal leading-[1.1] tracking-[-0.035em] text-ink">
                Frequently asked <em className="text-blue">questions.</em>
              </h2>
            </div>
          </Reveal>
          <div className="divide-y divide-line border-y border-line">
            {faqs.map((faq) => (
              <details key={faq.question} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-left font-semibold text-ink marker:content-none">
                  {faq.question}
                  <span
                    className="grid h-8 w-8 flex-shrink-0 place-items-center rounded-full border border-line text-blue transition-transform group-open:rotate-45"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </summary>
                <p className="max-w-[760px] pt-4 pr-10 text-[15px] leading-[1.75] text-ink-soft">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="wrap">
          <Reveal direction="up">
            <div className="rounded-2xl border border-line bg-surface-deep px-6 py-10 md:px-12 md:py-14">
              <div className="eyebrow mb-5">Ready when you are</div>
              <h2 className="mb-5 max-w-[760px] font-display text-[clamp(2rem,4vw,3.5rem)] font-normal leading-[1.08] tracking-[-0.04em] text-ink">
                Start planning for the <em className="text-blue">long term.</em>
              </h2>
              <p className="mb-8 max-w-[640px] text-[16px] leading-[1.75] text-ink-soft md:text-[18px]">
                Book a consultation and talk it through with a doctor who has time to listen.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact" className="btn btn-primary">
                  Book a consultation
                </Link>
                <Link href="/contact" className="btn btn-ghost">
                  Get in touch
                </Link>
              </div>
            </div>
          </Reveal>
          <p className="mt-8 text-center text-[12px] leading-[1.65] text-muted">
            Information on this site is educational. It does not replace advice from a qualified
            clinician.
          </p>
        </div>
      </section>
      <PageEnquirySection />
    </main>
  );
}
