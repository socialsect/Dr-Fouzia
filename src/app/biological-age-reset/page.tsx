import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { PageEnquirySection } from "@/components/layout/PageEnquirySection";

export const metadata: Metadata = {
  title: "Biological Age Dubai | Assessment & Practical Plan",
  description:
    "Biological age in Dubai: understand what your health markers say and build a plan with Dr Fouzia, a family physician. Book an assessment today.",
};

const highlights = [
  "A medical history and clinical review, so results are read in context",
  "Blood pressure and body measurements recorded",
  "Selected health markers considered; the exact panel is confirmed with the clinic",
  "Sleep, movement, stress and food habits reviewed",
  "A plain explanation of what your result can and cannot tell you",
  "A written plan for changeable factors, with follow-up discussed",
];

const reviewItems = [
  "Your health history, goals and relevant risk factors",
  "Blood pressure and body measurements",
  "Selected markers, depending on the assessment method and your needs",
  "Sleep, movement, food and stress habits",
  "What the result can and cannot tell you",
];

const faqs = [
  {
    question: "Is biological age scientifically proven?",
    answer:
      "Biological age is an active area of research. Different methods can give different results, so a number should be interpreted in context and not treated as a diagnosis.",
  },
  {
    question: "How often should I repeat an assessment?",
    answer:
      "There is no single interval for everyone. Timing depends on the method, markers and plan. The clinic should explain when a repeat, if any, would be useful.",
  },
  {
    question: "Do I need to fast before an assessment?",
    answer:
      "Preparation depends on which tests are included. Confirm the instructions with the clinic before your appointment.",
  },
  {
    question: "Can it replace a routine health check?",
    answer:
      "No. It can add context to preventive care, but it does not replace routine medical care or screening recommended for you.",
  },
];

export default function BiologicalAgeResetPage() {
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
              Biological Age in Dubai
              <br />
              <em className="text-blue">An assessment and a practical plan.</em>
            </h1>
          </Reveal>
          <Reveal direction="up" delay={180}>
            <p className="max-w-[820px] text-[16px] leading-[1.8] text-ink-soft md:text-[18px]">
              Your biological age is an estimate of how your body is functioning compared with
              patterns for your age group, and it can differ from the number on your passport.
              A biological age assessment in Dubai with Dr Fouzia combines a clinical review
              with selected markers, then turns the findings into a practical plan. Methods
              vary, so she explains what a result can and cannot tell you.
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
                Put health markers in <em className="text-blue">context.</em>
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
            <div className="eyebrow mb-5">What a biological age assessment includes</div>
            <h2 className="max-w-[480px] font-display text-[clamp(2rem,4vw,3.25rem)] font-normal leading-[1.1] tracking-[-0.035em] text-ink">
              The method matters as much as the <em className="text-blue">number.</em>
            </h2>
            <p className="mt-5 max-w-[450px] text-[14.5px] leading-[1.75] text-ink-soft">
              Methods and marker panels vary. The exact assessment method and tests included
              should be confirmed with the clinic before your appointment.
            </p>
          </Reveal>
          <div className="divide-y divide-line border-y border-line">
            {reviewItems.map((item, index) => (
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
              <div className="eyebrow mb-5">What “biological age reset” means here</div>
              <h2 className="mb-4 font-display text-[clamp(1.8rem,3.5vw,2.7rem)] font-normal leading-[1.1] tracking-[-0.035em] text-ink">
                A plan for factors you can <em className="text-blue">change.</em>
              </h2>
              <p className="text-[14.5px] leading-[1.75] text-ink-soft">
                “Reset” refers to a structured plan around factors such as nutrition, strength,
                sleep, stress and metabolic health, followed by a discussion about whether
                rechecking selected markers would be useful. It does not turn back the clock,
                and no result is guaranteed.
              </p>
            </article>
          </Reveal>
          <Reveal direction="up" delay={80}>
            <article className="h-full rounded-2xl border border-line bg-surface-deep p-6 md:p-8">
              <div className="eyebrow mb-5">Part of a wider healthy aging programme</div>
              <h2 className="mb-4 font-display text-[clamp(1.8rem,3.5vw,2.7rem)] font-normal leading-[1.1] tracking-[-0.035em] text-ink">
                Start with an assessment, then decide what’s <em className="text-blue">next.</em>
              </h2>
              <p className="mb-6 text-[14.5px] leading-[1.75] text-ink-soft">
                If you are considering ongoing follow-up and monitoring, read about the broader
                healthy aging programme.
              </p>
              <Link
                href="/healthy-aging-biological-age-reset"
                className="font-semibold text-blue underline underline-offset-4"
              >
                Explore the healthy aging programme <span aria-hidden="true">&#8594;</span>
              </Link>
            </article>
          </Reveal>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="wrap grid gap-9 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
          <Reveal direction="left">
            <div className="eyebrow mb-5">Who should consider it</div>
            <h2 className="max-w-[470px] font-display text-[clamp(2rem,4vw,3.25rem)] font-normal leading-[1.1] tracking-[-0.035em] text-ink">
              For a baseline or a more informed <em className="text-blue">plan.</em>
            </h2>
          </Reveal>
          <Reveal direction="right">
            <div className="rounded-2xl border border-line bg-white p-6 md:p-8">
              <p className="text-[14.5px] leading-[1.75] text-ink-soft">
                You might consider an assessment if you want a baseline, have risk factors such
                as raised blood pressure or glucose, or are planning preventive care over time.
                A clinician can help decide whether this type of assessment is suitable for you.
              </p>
            </div>
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
                Understand what your markers can <em className="text-blue">tell you.</em>
              </h2>
              <p className="mb-8 max-w-[640px] text-[16px] leading-[1.75] text-ink-soft md:text-[18px]">
                Book an assessment and talk it through with a doctor who has time to listen.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/consultation#enquiry-form-1" className="btn btn-primary">
                  Book an assessment
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
      <PageEnquirySection />
    </main>
  );
}
