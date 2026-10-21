import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Dr Fouzia Dubai | Family Physician & Functional Medicine",
  description:
    "Meet Dr Fouzia, a consultant family physician in Dubai. Learn about her whole-person approach, functional medicine, CBT and aesthetic care.",
};

const highlights = [
  "Hormonal and women’s health: cycles, thyroid, perimenopause and menopause",
  "Gut and digestive care: bloating, reflux and bowel changes, with red flags checked first",
  "Sleep, stress and energy: practical plans for people who feel worn out",
  "Purposeful testing: blood tests and other markers chosen because they will change your care",
  "Nutrition, lifestyle and supplements: advice you can follow, with supplements only when justified",
  "Clear explanations: you leave knowing what was found, why it matters and what to do first",
];

const approach = [
  "She listens first, and lets you tell the whole story.",
  "She tests with a reason.",
  "She explains every recommendation in plain language.",
  "She refers you when a specialist is the better choice.",
];

const faqs = [
  {
    question: "Who is Dr Fouzia Al Ali?",
    answer:
      "A consultant family physician in Dubai who practises functional medicine, CBT and aesthetic medicine.",
  },
  {
    question: "What conditions does she see patients for?",
    answer:
      "Common reasons include fatigue, gut and digestive symptoms, hormonal changes, stress and sleep problems, weight and metabolic concerns, and aesthetic goals. She does not treat emergencies.",
  },
];

export default function AboutDrFouziaPage() {
  return (
    <main className="bg-white">
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="wrap">
          <Reveal direction="left">
            <div className="eyebrow mb-5">Meet your doctor</div>
          </Reveal>

          <Reveal direction="left" delay={100}>
            <h1
              className="mb-7 max-w-[1000px] font-display font-normal leading-[1.04] tracking-[-0.045em] text-ink"
              style={{ fontSize: "clamp(var(--step-4), 6.2vw, var(--step-6))" }}
            >
              Meet Dr Fouzia, Family Physician in Dubai
              <br />
              <em className="text-blue">Functional medicine, CBT and aesthetic care</em>
            </h1>
          </Reveal>

          <Reveal direction="up" delay={180}>
            <p className="max-w-[790px] text-[16px] leading-[1.8] text-ink-soft md:text-[18px]">
              Dr Fouzia Al Ali is a consultant family physician based in Dubai. Her patients come
              with symptoms that have not made sense elsewhere, such as constant tiredness,
              digestive trouble, hormone changes or stress that will not lift. She starts with a
              careful medical review, then looks at the lifestyle, nutrition and emotional factors
              that sit alongside it.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-surface-deep py-16 md:py-20">
        <div className="wrap">
          <Reveal direction="up">
            <div className="mb-8 max-w-[700px]">
              <div className="eyebrow mb-4">Care shaped around you</div>
              <h2 className="font-display text-[clamp(2rem,4vw,3.25rem)] font-normal leading-[1.1] tracking-[-0.035em] text-ink">
                A clearer picture of your <em className="text-blue">health.</em>
              </h2>
            </div>
          </Reveal>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {highlights.map((item, index) => (
              <Reveal key={item} direction="up" delay={index * 45}>
                <div className="flex h-full items-start gap-3 rounded-xl border border-line bg-white p-5 text-[14px] leading-[1.65] text-ink-soft transition-colors hover:border-blue/30">
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
        <div className="wrap grid gap-10 md:grid-cols-[0.85fr_1.15fr] md:gap-16">
          <Reveal direction="left">
            <div className="eyebrow mb-5">Care over time</div>
            <h2 className="max-w-[480px] font-display text-[clamp(2.1rem,4vw,3.5rem)] font-normal leading-[1.08] tracking-[-0.04em] text-ink">
              A family physician for the <em className="text-blue">long term.</em>
            </h2>
          </Reveal>
          <Reveal direction="right">
            <div className="space-y-6 text-[16px] leading-[1.8] text-ink-soft md:text-[18px]">
              <p>
                Family medicine is built on continuity. Dr Fouzia follows how your health changes
                across months and years, which helps her notice patterns and adjust your plan
                realistically instead of starting again at every visit.
              </p>
              <p>
                Her functional medicine work builds on standard medical assessment. She reads
                usual tests, works with other specialists and refers you on when someone else is
                better placed to help.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-surface py-16 md:py-20">
        <div className="wrap">
          <Reveal direction="up">
            <div className="mb-9 max-w-[650px]">
              <div className="eyebrow mb-4">Whole-person care</div>
              <h2 className="font-display text-[clamp(2rem,4vw,3.25rem)] font-normal leading-[1.1] tracking-[-0.035em] text-ink">
                Support for mind and body, with <em className="text-blue">care and clarity.</em>
              </h2>
            </div>
          </Reveal>
          <div className="grid gap-4 md:grid-cols-2">
            <Reveal direction="up">
              <article className="h-full rounded-2xl border border-line bg-white p-6 md:p-8">
                <h3 className="mb-4 font-display text-[26px] leading-[1.15] tracking-[-0.025em] text-ink md:text-[30px]">
                  CBT and mind-body care
                </h3>
                <p className="text-[15px] leading-[1.75] text-ink-soft">
                  For concerns such as anxiety, low mood or poor sleep, care can consider possible
                  physical factors alongside practical thinking and behaviour skills.
                </p>
              </article>
            </Reveal>
            <Reveal direction="up" delay={90}>
              <article className="h-full rounded-2xl border border-line bg-white p-6 md:p-8">
                <h3 className="mb-4 font-display text-[26px] leading-[1.15] tracking-[-0.025em] text-ink md:text-[30px]">
                  Aesthetic care, measured and honest
                </h3>
                <p className="text-[15px] leading-[1.75] text-ink-soft">
                  Aesthetic treatments are considered after a full consultation and safety check.
                  Dr Fouzia will tell you when a treatment is not needed or is not suitable.
                </p>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="wrap grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
          <Reveal direction="left">
            <div className="eyebrow mb-5">How she works</div>
            <h2 className="max-w-[440px] font-display text-[clamp(2.1rem,4vw,3.5rem)] font-normal leading-[1.08] tracking-[-0.04em] text-ink">
              Start with your <em className="text-blue">story.</em>
            </h2>
          </Reveal>
          <div className="divide-y divide-line border-y border-line">
            {approach.map((item, index) => (
              <Reveal key={item} direction="up" delay={index * 60}>
                <div className="flex items-start gap-5 py-5 md:py-6">
                  <span className="font-display text-[22px] leading-none text-blue/70">
                    0{index + 1}
                  </span>
                  <p className="text-[16px] leading-[1.65] text-ink-soft">{item}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface-deep py-16 md:py-20">
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
                  <span className="grid h-8 w-8 flex-shrink-0 place-items-center rounded-full border border-line text-blue transition-transform group-open:rotate-45" aria-hidden="true">
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
              <h2 className="mb-5 max-w-[720px] font-display text-[clamp(2rem,4vw,3.5rem)] font-normal leading-[1.08] tracking-[-0.04em] text-ink">
                Start with a conversation about your <em className="text-blue">health.</em>
              </h2>
              <p className="mb-8 max-w-[620px] text-[16px] leading-[1.75] text-ink-soft md:text-[18px]">
                Share your story with a doctor who has the time to listen.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/consultation#enquiry-form-1" className="btn btn-primary">
                  Book a consultation
                </Link>
                <Link href="/consultation#enquiry-form-2" className="btn btn-ghost">
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
    </main>
  );
}
