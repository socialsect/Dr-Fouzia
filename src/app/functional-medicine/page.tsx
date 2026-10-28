import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { PageEnquirySection } from "@/components/layout/PageEnquirySection";

export const metadata: Metadata = {
  title: "Functional Medicine in Dubai | Dr Fouzia Al Ali",
  description:
    "Functional medicine in Dubai led by a consultant family physician. A detailed history, selected tests and a personalised plan for ongoing symptoms. Book a consult.",
};

const highlights = [
  "Looks for the causes behind long-running symptoms, not just the symptoms",
  "Connects gut, hormones, metabolism and stress instead of treating them apart",
  "Uses tests only when the result will change your plan",
  "Builds a plan around food, movement, sleep and, where justified, supplements",
  "Focuses on prevention as well as managing existing problems",
  "Treats you as a partner who helps make the decisions",
];

const concerns = [
  { label: "Tiredness and brain fog", href: "/fatigue-low-energy-brain-fog" },
  { label: "Bloating and digestive problems", href: "/gut-digestive-health" },
  { label: "Hormonal changes", href: "/womens-hormonal-health" },
  { label: "Weight and blood sugar", href: "/metabolic-health-weight-management" },
  { label: "Stress and poor sleep", href: "/stress-sleep-nervous-system-health" },
  { label: "Skin and hair changes", href: "/skin-hair-health" },
];

const steps = [
  "You complete a short intake form before the visit.",
  "A detailed consultation covers your history and goals.",
  "Targeted tests are suggested if they are useful.",
  "You receive a written plan, with nutrition and supplement advice where needed.",
  "Follow-up visits adjust the plan as you progress.",
];

const faqs = [
  {
    question: "What is functional medicine?",
    answer:
      "A personalised approach that looks for the factors behind symptoms, used alongside conventional medicine.",
  },
  {
    question: "Is functional medicine evidence-based?",
    answer:
      "Parts of it are well supported, such as nutrition, sleep and lifestyle. Some tests and supplements have limited evidence, and Dr Fouzia explains this.",
  },
  {
    question: "How is it different from a regular GP visit?",
    answer:
      "Visits are longer, the history is broader and the plan puts lifestyle first.",
  },
  {
    question: "Will I need lots of tests?",
    answer: "No. Only the ones likely to help.",
  },
  {
    question: "How long until I notice a change?",
    answer: "It varies, and no outcome can be guaranteed.",
  },
];

export default function FunctionalMedicinePage() {
  return (
    <main className="bg-white">
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="wrap">
          <Reveal direction="left">
            <div className="eyebrow mb-5">The approach</div>
          </Reveal>
          <Reveal direction="left" delay={100}>
            <h1
              className="mb-7 max-w-[1000px] font-display font-normal leading-[1.04] tracking-[-0.045em] text-ink"
              style={{ fontSize: "clamp(var(--step-4), 6.2vw, var(--step-6))" }}
            >
              Functional Medicine in Dubai
              <br />
              <em className="text-blue">Understanding why symptoms happen</em>
            </h1>
          </Reveal>
          <Reveal direction="up" delay={180}>
            <p className="max-w-[820px] text-[16px] leading-[1.8] text-ink-soft md:text-[18px]">
              Most medical care asks what condition you have. Functional medicine in Dubai with
              Dr Fouzia also asks why your body ended up here. She looks at how nutrition, sleep,
              stress, digestion, hormones and daily habits connect, and uses what she finds to
              shape a plan that suits you. Because she is a family physician, every step rests on
              sound conventional medicine.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-surface-deep py-16 md:py-20">
        <div className="wrap">
          <Reveal direction="up">
            <div className="mb-9 max-w-[680px]">
              <div className="eyebrow mb-4">A whole-person view</div>
              <h2 className="font-display text-[clamp(2rem,4vw,3.25rem)] font-normal leading-[1.1] tracking-[-0.035em] text-ink">
                Care that looks at the <em className="text-blue">whole picture.</em>
              </h2>
            </div>
          </Reveal>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {highlights.map((item, index) => (
              <Reveal key={item} direction="up" delay={(index % 3) * 55}>
                <div className="flex h-full items-start gap-3 rounded-xl border border-line bg-white p-5 text-[14px] leading-[1.7] text-ink-soft">
                  <span className="mt-0.5 text-blue" aria-hidden="true">&#10003;</span>
                  <span>{item}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="wrap grid gap-10 md:grid-cols-[0.82fr_1.18fr] md:gap-16">
          <Reveal direction="left">
            <div className="eyebrow mb-5">A closer look</div>
            <h2 className="max-w-[500px] font-display text-[clamp(2rem,4vw,3.25rem)] font-normal leading-[1.1] tracking-[-0.035em] text-ink">
              What a functional medicine doctor in Dubai <em className="text-blue">actually does.</em>
            </h2>
          </Reveal>
          <Reveal direction="right">
            <div className="space-y-6 text-[16px] leading-[1.8] text-ink-soft md:text-[18px]">
              <p>
                A functional medicine doctor takes a longer, more detailed history than a usual
                appointment. She reviews the timeline of your symptoms, looks for patterns, uses
                selected tests and recommends changes to food, sleep, activity and stress.
              </p>
              <p>
                Supplements or medicines are added only when there is a clear reason. Tests are
                chosen to help guide decisions, and your plan is reviewed as your health changes.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-surface py-16 md:py-20">
        <div className="wrap grid gap-9 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
          <Reveal direction="left">
            <div className="eyebrow mb-5">Choosing a doctor</div>
            <h2 className="max-w-[460px] font-display text-[clamp(2rem,4vw,3.25rem)] font-normal leading-[1.1] tracking-[-0.035em] text-ink">
              Know what to ask before you <em className="text-blue">begin.</em>
            </h2>
          </Reveal>
          <Reveal direction="right">
            <div className="rounded-2xl border border-line bg-white p-6 md:p-8">
              <p className="text-[15px] leading-[1.8] text-ink-soft md:text-[16px]">
                When choosing a functional medicine doctor in Dubai, it is reasonable to ask about
                their medical licence, functional medicine training and how they work with or
                refer patients to other specialists. A clear explanation of tests, evidence and
                treatment options can help you decide whether the approach is right for you.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="wrap">
          <Reveal direction="up">
            <div className="mb-9 max-w-[650px]">
              <div className="eyebrow mb-4">Concerns people bring</div>
              <h2 className="font-display text-[clamp(2rem,4vw,3.25rem)] font-normal leading-[1.1] tracking-[-0.035em] text-ink">
                Start with what is affecting your <em className="text-blue">day to day.</em>
              </h2>
            </div>
          </Reveal>
          <div className="grid gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
            {concerns.map((concern, index) => (
              <Reveal key={concern.href} direction="up" delay={(index % 3) * 55}>
                <Link href={concern.href} className="group flex items-center justify-between gap-4 border-t border-line py-5 text-[15px] font-medium text-ink transition-colors hover:text-blue">
                  {concern.label}
                  <span className="text-blue transition-transform group-hover:translate-x-1" aria-hidden="true">&#8594;</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface-deep py-16 md:py-20">
        <div className="wrap">
          <div className="grid gap-9 md:grid-cols-[0.75fr_1.25fr] md:gap-16">
            <Reveal direction="left">
              <div className="eyebrow mb-5">Your visit</div>
              <h2 className="max-w-[440px] font-display text-[clamp(2rem,4vw,3.25rem)] font-normal leading-[1.1] tracking-[-0.035em] text-ink">
                What happens at a functional medicine clinic in <em className="text-blue">Dubai</em>
              </h2>
            </Reveal>
            <div className="divide-y divide-line border-y border-line">
              {steps.map((step, index) => (
                <Reveal key={step} direction="up" delay={(index % 3) * 45}>
                  <div className="flex items-start gap-5 py-4 md:py-5">
                    <span className="font-display text-[22px] leading-none text-blue/70">0{index + 1}</span>
                    <div className="flex min-w-0 flex-1 flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                      <p className="text-[14px] leading-[1.7] text-ink-soft md:text-[15px]">{step}</p>
                      {index === 1 && <Link href="/functional-medicine-consultation" className="text-[12px] font-semibold text-blue">Consultation details &#8594;</Link>}
                      {index === 2 && <Link href="/health-marker-review" className="text-[12px] font-semibold text-blue">Health marker review &#8594;</Link>}
                      {index === 3 && (
                        <span className="flex flex-wrap gap-x-3 gap-y-1">
                          <Link href="/personalised-nutrition" className="text-[12px] font-semibold text-blue">Nutrition &#8594;</Link>
                          <Link href="/supplement-review" className="text-[12px] font-semibold text-blue">Supplements &#8594;</Link>
                        </span>
                      )}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="wrap">
          <Reveal direction="up">
            <div className="mb-9 max-w-[700px]">
              <div className="eyebrow mb-4">Honest about the evidence</div>
              <h2 className="font-display text-[clamp(2rem,4vw,3.25rem)] font-normal leading-[1.1] tracking-[-0.035em] text-ink">
                Clear about what is known, and what is <em className="text-blue">not.</em>
              </h2>
            </div>
          </Reveal>
          <div className="grid gap-4 md:grid-cols-2">
            <Reveal direction="up">
              <article className="h-full rounded-2xl border border-line bg-surface p-6 md:p-8">
                <h3 className="mb-4 font-display text-[25px] leading-[1.2] tracking-[-0.025em] text-ink">Evidence and limits</h3>
                <p className="text-[14.5px] leading-[1.75] text-ink-soft md:text-[15px]">
                  Not every functional medicine test or therapy has strong evidence behind it.
                  Dr Fouzia recommends tests only when they affect decisions, and she tells you
                  plainly when the evidence is limited.
                </p>
              </article>
            </Reveal>
            <Reveal direction="up" delay={80}>
              <article className="h-full rounded-2xl border border-line bg-surface p-6 md:p-8">
                <h3 className="mb-4 font-display text-[25px] leading-[1.2] tracking-[-0.025em] text-ink">When another route is needed</h3>
                <p className="text-[14.5px] leading-[1.75] text-ink-soft md:text-[15px]">
                  Red-flag symptoms, sudden illness and conditions that need urgent or specialist
                  care come first. In those cases, you are referred on straight away.
                </p>
              </article>
            </Reveal>
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
                  <span className="grid h-8 w-8 flex-shrink-0 place-items-center rounded-full border border-line text-blue transition-transform group-open:rotate-45" aria-hidden="true">+</span>
                </summary>
                <p className="max-w-[760px] pt-4 pr-10 text-[15px] leading-[1.75] text-ink-soft">{faq.answer}</p>
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
                Let’s look at the whole <em className="text-blue">picture.</em>
              </h2>
              <p className="mb-8 max-w-[640px] text-[16px] leading-[1.75] text-ink-soft md:text-[18px]">
                Book a consultation and tell your story to a doctor who has time to hear it.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/consultation#enquiry-form-1" className="btn btn-primary">Book a consultation</Link>
                <Link href="/consultation#enquiry-form-2" className="btn btn-ghost">Get in touch</Link>
              </div>
            </div>
          </Reveal>
          <p className="mt-8 text-center text-[12px] leading-[1.65] text-muted">
            Information on this site is educational. It does not replace advice from a qualified clinician.
          </p>
        </div>
      </section>
      <PageEnquirySection />
    </main>
  );
}
