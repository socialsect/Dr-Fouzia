import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { PageEnquirySection } from "@/components/layout/PageEnquirySection";

export const metadata: Metadata = {
  title: "Metabolic Health Dubai | Weight Management Doctor",
  description:
    "Metabolic health in Dubai: a doctor-led review of weight, blood sugar and insulin resistance with Dr Fouzia, a family physician. Book a consultation.",
};

const highlights = [
  "Blood sugar and HbA1c considered as part of a metabolic review",
  "Cholesterol and blood fat levels reviewed where relevant",
  "Thyroid function considered as a possible contributor",
  "Waist, blood pressure and other measurements may be recorded",
  "Food planning shaped around your culture, routine and preferences",
  "Realistic habit changes you can keep up",
];

const contributors = [
  "Thyroid changes",
  "Hormonal shifts",
  "Poor sleep",
  "Some medicines that affect appetite",
];

const steps = [
  "A consultation about your history, symptoms and goals",
  "A physical review and selected tests when useful",
  "A prioritised written plan for food, movement, sleep and stress",
  "Follow-up visits to review progress and adjust the plan",
];

const faqs = [
  {
    question: "Is weight management only about diet?",
    answer:
      "No. Sleep, stress, hormones, medicines and medical conditions can all affect weight, so these can be reviewed alongside food and activity.",
  },
  {
    question: "Can you check for insulin resistance?",
    answer:
      "A doctor can assess your risk through your history, physical review and selected blood tests when appropriate. Which tests are useful depends on your situation and can be discussed during the consultation.",
  },
  {
    question: "I have prediabetes. Should I book?",
    answer:
      "If you want help understanding your result and planning next steps, a consultation may help. Your clinician can explain the result and discuss whether monitoring or further tests are appropriate.",
  },
  {
    question: "Will I lose weight?",
    answer:
      "Results vary and cannot be promised. The aim is to agree on a safe, sustainable plan that fits your health and circumstances.",
  },
  {
    question: "Is this suitable during pregnancy or with an eating disorder?",
    answer:
      "These situations need specific medical guidance. Please tell the clinician when arranging care so the safest next step can be discussed.",
  },
];

export default function MetabolicHealthWeightManagementPage() {
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
              Metabolic Health in Dubai
              <br />
              <em className="text-blue">A doctor-led approach to weight.</em>
            </h1>
          </Reveal>
          <Reveal direction="up" delay={180}>
            <p className="max-w-[820px] text-[16px] leading-[1.8] text-ink-soft md:text-[18px]">
              Metabolic health describes how your body handles blood sugar, stores fat and uses
              energy. When it changes, weight may change too, along with appetite, energy or
              sleep. Metabolic health care in Dubai with Dr Fouzia starts with a medical review
              rather than a diet sheet, because the right plan depends on what is happening in
              your body.
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
                Understand the picture beyond the <em className="text-blue">scale.</em>
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
            <div className="eyebrow mb-5">Weight management doctor in Dubai</div>
            <h2 className="max-w-[480px] font-display text-[clamp(2rem,4vw,3.25rem)] font-normal leading-[1.1] tracking-[-0.035em] text-ink">
              Start by asking what may be <em className="text-blue">contributing.</em>
            </h2>
            <p className="mt-5 max-w-[450px] text-[14.5px] leading-[1.75] text-ink-soft">
              A medical review can look for factors that may affect weight or appetite before
              building a plan. Dr Fouzia reviews these alongside your routine, food preferences
              and health history.
            </p>
          </Reveal>
          <div className="divide-y divide-line border-y border-line">
            {contributors.map((item, index) => (
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
        <div className="wrap grid gap-9 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
          <Reveal direction="left">
            <div className="eyebrow mb-5">Insulin resistance and blood sugar</div>
            <h2 className="max-w-[470px] font-display text-[clamp(2rem,4vw,3.25rem)] font-normal leading-[1.1] tracking-[-0.035em] text-ink">
              Review the markers that can guide <em className="text-blue">next steps.</em>
            </h2>
          </Reveal>
          <Reveal direction="right">
            <div className="rounded-2xl border border-line bg-white p-6 md:p-8">
              <p className="mb-5 text-[14.5px] leading-[1.75] text-ink-soft">
                Insulin resistance can develop without obvious symptoms. A review may include
                your health history, waist measurement and blood pressure, along with selected
                tests such as fasting glucose, HbA1c or lipids when appropriate. Your clinician
                can explain what each result means and which tests make sense for you.
              </p>
              <Link
                href="/health-marker-review"
                className="font-semibold text-blue underline underline-offset-4"
              >
                Learn about health marker reviews <span aria-hidden="true">&#8594;</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="wrap grid gap-5 md:grid-cols-2">
          <Reveal direction="up">
            <article className="h-full rounded-2xl border border-line bg-white p-6 md:p-8">
              <div className="eyebrow mb-5">Prediabetes</div>
              <h2 className="mb-4 font-display text-[clamp(1.8rem,3.5vw,2.7rem)] font-normal leading-[1.1] tracking-[-0.035em] text-ink">
                Use raised results to plan your <em className="text-blue">next step.</em>
              </h2>
              <p className="text-[14.5px] leading-[1.75] text-ink-soft">
                If a test has shown raised glucose or HbA1c, an early conversation can help you
                understand the result. A visit can cover food patterns, movement, sleep and
                stress, and whether further tests, monitoring or referral should be discussed.
              </p>
            </article>
          </Reveal>
          <Reveal direction="up" delay={80}>
            <article className="h-full rounded-2xl border border-line bg-surface p-6 md:p-8">
              <div className="eyebrow mb-5">A metabolic health doctor who looks beyond the scale</div>
              <h2 className="mb-4 font-display text-[clamp(1.8rem,3.5vw,2.7rem)] font-normal leading-[1.1] tracking-[-0.035em] text-ink">
                Energy, appetite and sleep are part of the <em className="text-blue">picture.</em>
              </h2>
              <p className="mb-6 text-[14.5px] leading-[1.75] text-ink-soft">
                Weight is one measure among several. A plan can also consider energy, hunger
                cues, sleep quality and stress. If eating is tied to emotions, Calm Mind Sessions support is
                available.
              </p>
              <Link
                href="/calm-mind-sessions-emotional-eating"
                className="font-semibold text-blue underline underline-offset-4"
              >
                Explore Calm Mind Sessions for emotional eating <span aria-hidden="true">&#8594;</span>
              </Link>
            </article>
          </Reveal>
        </div>
      </section>

      <section className="bg-surface-deep py-16 md:py-20">
        <div className="wrap">
          <Reveal direction="up">
            <div className="mb-9 max-w-[700px]">
              <div className="eyebrow mb-4">What to expect</div>
              <h2 className="font-display text-[clamp(2rem,4vw,3.25rem)] font-normal leading-[1.1] tracking-[-0.035em] text-ink">
                A clear plan, built <em className="text-blue">together.</em>
              </h2>
            </div>
          </Reveal>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((item, index) => (
              <Reveal key={item} direction="up" delay={(index % 4) * 55}>
                <article className="h-full rounded-xl border border-line bg-white p-5 md:p-6">
                  <div className="mb-5 font-display text-[2rem] leading-none text-blue">
                    0{index + 1}
                  </div>
                  <p className="text-[14px] leading-[1.7] text-ink-soft">{item}</p>
                </article>
              </Reveal>
            ))}
          </div>
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

      <section className="bg-surface-deep py-12 md:py-16">
        <div className="wrap">
          <Reveal direction="up">
            <div className="rounded-2xl border border-line bg-white p-6 md:p-9">
              <div className="eyebrow mb-4">When to seek urgent care</div>
              <h2 className="mb-4 font-display text-[clamp(1.8rem,3.5vw,2.5rem)] font-normal leading-[1.1] tracking-[-0.035em] text-ink">
                Don’t wait with serious <em className="text-blue">symptoms.</em>
              </h2>
              <p className="max-w-[820px] text-[14.5px] leading-[1.75] text-ink-soft md:text-[15px]">
                Get medical advice promptly if you are unusually thirsty and urinating more,
                especially with unexplained weight loss. Chest pain or vomiting that will not
                stop needs urgent medical care, particularly if you have diabetes.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="wrap">
          <Reveal direction="up">
            <div className="rounded-2xl border border-line bg-surface-deep px-6 py-10 md:px-12 md:py-14">
              <div className="eyebrow mb-5">Ready when you are</div>
              <h2 className="mb-5 max-w-[760px] font-display text-[clamp(2rem,4vw,3.5rem)] font-normal leading-[1.08] tracking-[-0.04em] text-ink">
                Understand what may be behind your <em className="text-blue">weight.</em>
              </h2>
              <p className="mb-8 max-w-[640px] text-[16px] leading-[1.75] text-ink-soft md:text-[18px]">
                Book a consultation and talk it through with a doctor who has time to listen.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact" className="btn btn-primary">
                  Book a consultation
                </Link>
                <Link href="/services" className="btn btn-ghost">
                  Explore services
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
