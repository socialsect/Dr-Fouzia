import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { PageEnquirySection } from "@/components/layout/PageEnquirySection";

export const metadata: Metadata = {
  title: "Women’s Health Doctor Dubai | Hormonal Health | Dr Fouzia",
  description:
    "A women’s health doctor in Dubai for irregular periods, PMS, PCOS symptoms, perimenopause and mood changes. Medical assessment and personalised care.",
};

const highlights = [
  "Irregular, heavy or painful periods reviewed",
  "PMS and mood changes across the cycle discussed",
  "Possible PCOS assessed using recognised criteria",
  "Perimenopause and menopause symptoms discussed, with options explained",
  "Thyroid, iron and blood sugar considered alongside reproductive hormones",
  "Bone and heart health included in midlife discussions",
];

const concerns = [
  "Irregular, heavy or painful periods",
  "PMS and mood changes across the cycle",
  "Possible PCOS",
  "Acne or changes in hair growth",
  "Perimenopause and menopause symptoms",
];

const assessmentSteps = [
  "Discuss your symptoms, health history and what has changed",
  "Review cycle timing, sleep, mood, nutrition and movement where relevant",
  "Consider thyroid function, iron, blood sugar and reproductive hormones",
  "Choose tests only when they can help answer a clinical question",
];

const faqs = [
  {
    question: "What can a women’s health doctor help with?",
    answer:
      "A women’s health consultation can cover cycle changes, PMS, possible PCOS, perimenopause and menopause symptoms, as well as relevant general health concerns.",
  },
  {
    question: "Do I need hormone tests?",
    answer:
      "Not always. Your symptoms and medical history guide whether tests may help. If a hormone test is useful, its timing may be planned around your cycle.",
  },
  {
    question: "How is PCOS assessed?",
    answer:
      "PCOS is assessed using recognised clinical criteria. Dr Fouzia can review your symptoms and discuss which examination or tests may be appropriate.",
  },
  {
    question: "Can stress affect my cycle?",
    answer:
      "Stress and anxiety can be among the factors associated with irregular periods. A change in your usual pattern is still worth discussing with a clinician.",
  },
  {
    question: "Will every concern need medication?",
    answer:
      "No. Depending on the assessment, support may include lifestyle and nutrition guidance, Calm Mind Sessions for mood or sleep, or medical treatment when indicated.",
  },
  {
    question:
      "Where can I consult a women's hormonal health doctor in Dubai?",
    answer:
      "Dr Fouzia Al Ali provides women's hormonal health consultations in Dubai, addressing menstrual irregularities, PMS, PCOS, thyroid-related concerns, perimenopause and menopause symptoms.",
  },
  {
    question: "What are the common signs of hormonal imbalance in women?",
    answer:
      "Common symptoms may include irregular periods, heavy menstruation, mood changes, acne, sleep difficulties, unexplained fatigue, weight changes and hot flushes. These symptoms can have different medical causes and require appropriate assessment.",
  },
  {
    question:
      "Can hormonal changes cause fatigue, mood swings and poor sleep?",
    answer:
      "Yes. Hormonal fluctuations during the menstrual cycle, perimenopause and menopause can influence energy levels, mood and sleep. Other causes, including thyroid conditions and anaemia, may also contribute.",
  },
  {
    question:
      "When should I see a doctor for irregular periods or suspected PCOS?",
    answer:
      "Consult a doctor if periods are consistently irregular, unusually heavy or painful, or accompanied by other concerning symptoms. A medical assessment can help investigate PCOS, thyroid conditions and other possible causes.",
  },
];

export default function WomensHormonalHealthPage() {
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
              Women’s Health Doctor in Dubai
              <br />
              <em className="text-blue">Hormone changes, explained and checked.</em>
            </h1>
          </Reveal>
          <Reveal direction="up" delay={180}>
            <p className="max-w-[820px] text-[16px] leading-[1.8] text-ink-soft md:text-[18px]">
              Cycle changes, sleep trouble, mood swings and tiredness are easy to dismiss, but
              they deserve proper attention. Choosing a women’s health doctor in Dubai means
              finding someone who takes these changes seriously and checks for medical causes.
              Dr Fouzia is a consultant family physician who explains hormonal health in plain
              language and avoids a one-size-fits-all plan.
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
                Women’s health, approached with <em className="text-blue">care.</em>
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
            <div className="eyebrow mb-5">Women’s hormonal health in Dubai</div>
            <h2 className="max-w-[470px] font-display text-[clamp(2rem,4vw,3.25rem)] font-normal leading-[1.1] tracking-[-0.035em] text-ink">
              Concerns worth talking <em className="text-blue">through.</em>
            </h2>
            <p className="mt-5 max-w-[450px] text-[14.5px] leading-[1.75] text-ink-soft">
              Hormonal and cycle-related symptoms can have different causes. A careful review
              helps decide what needs investigation and what support may be useful.
            </p>
          </Reveal>
          <div className="divide-y divide-line border-y border-line">
            {concerns.map((item, index) => (
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
            <div className="eyebrow mb-5">Assessment before assumptions</div>
            <h2 className="max-w-[480px] font-display text-[clamp(2rem,4vw,3.25rem)] font-normal leading-[1.1] tracking-[-0.035em] text-ink">
              Not every symptom is <em className="text-blue">hormonal.</em>
            </h2>
            <p className="mt-5 max-w-[450px] text-[14.5px] leading-[1.75] text-ink-soft">
              Tiredness, low mood or weight change can have many causes. Dr Fouzia reviews
              thyroid function, iron, blood sugar and mood alongside reproductive hormones.
              Hormone tests are timed to your cycle when needed and used only when they can help.
            </p>
            <Link
              href="/health-marker-review"
              className="mt-6 inline-block font-semibold text-blue underline underline-offset-4"
            >
              Learn about health marker reviews <span aria-hidden="true">&#8594;</span>
            </Link>
          </Reveal>
          <div className="divide-y divide-line border-y border-line">
            {assessmentSteps.map((item, index) => (
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

      <section className="py-16 md:py-24">
        <div className="wrap grid gap-5 md:grid-cols-2">
          <Reveal direction="up">
            <article className="h-full rounded-2xl border border-line bg-white p-6 md:p-8">
              <div className="eyebrow mb-5">A clearer meaning</div>
              <h2 className="mb-4 font-display text-[clamp(1.8rem,3.5vw,2.7rem)] font-normal leading-[1.1] tracking-[-0.035em] text-ink">
                “Hormonal balance” is a phrase, not a <em className="text-blue">diagnosis.</em>
              </h2>
              <p className="text-[14.5px] leading-[1.75] text-ink-soft">
                Care focuses on identifying specific conditions and supporting the foundations
                of wellbeing, including sleep, nutrition, stress and movement.
              </p>
            </article>
          </Reveal>
          <Reveal direction="up" delay={80}>
            <article className="h-full rounded-2xl border border-line bg-surface p-6 md:p-8">
              <div className="eyebrow mb-5">Treatment options</div>
              <h2 className="mb-4 font-display text-[clamp(1.8rem,3.5vw,2.7rem)] font-normal leading-[1.1] tracking-[-0.035em] text-ink">
                Support that fits your <em className="text-blue">assessment.</em>
              </h2>
              <p className="mb-6 text-[14.5px] leading-[1.75] text-ink-soft">
                Depending on what you need, support may include lifestyle and nutrition guidance,
                Calm Mind Sessions for mood or sleep, and medical treatment where indicated. Options are
                discussed after assessment.
              </p>
              <div className="flex flex-wrap gap-x-6 gap-y-3 border-t border-line pt-5 text-[14px] font-semibold">
                <Link href="/womens-midlife-wellness" className="text-blue underline underline-offset-4">
                  Women’s midlife wellness
                </Link>
                <Link href="/calm-mind-sessions-sleep-insomnia" className="text-blue underline underline-offset-4">
                  Calm Mind Sessions for sleep concerns
                </Link>
              </div>
            </article>
          </Reveal>
        </div>
      </section>

      <section className="bg-surface-deep py-16 md:py-20">
        <div className="wrap grid gap-9 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
          <Reveal direction="left">
            <div className="eyebrow mb-5">Women’s wellness</div>
            <h2 className="max-w-[470px] font-display text-[clamp(2rem,4vw,3.25rem)] font-normal leading-[1.1] tracking-[-0.035em] text-ink">
              The whole picture matters <em className="text-blue">over time.</em>
            </h2>
          </Reveal>
          <Reveal direction="right">
            <div className="rounded-2xl border border-line bg-white p-6 md:p-8">
              <p className="mb-6 text-[14.5px] leading-[1.75] text-ink-soft">
                Bone and heart health, metabolic health, mental wellbeing and routine screening
                all form part of long-term women’s health. Your care can take these areas into
                account alongside the concern that brought you in.
              </p>
              <Link
                href="/metabolic-health-weight-management"
                className="font-semibold text-blue underline underline-offset-4"
              >
                Explore metabolic health support <span aria-hidden="true">&#8594;</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="wrap">
          <Reveal direction="up">
            <div className="rounded-2xl border border-line bg-surface p-6 md:p-9">
              <div className="eyebrow mb-4">When to see a doctor promptly</div>
              <h2 className="mb-4 font-display text-[clamp(1.8rem,3.5vw,2.5rem)] font-normal leading-[1.1] tracking-[-0.035em] text-ink">
                Some changes should be <em className="text-blue">checked.</em>
              </h2>
              <p className="max-w-[820px] text-[14.5px] leading-[1.75] text-ink-soft md:text-[15px]">
                Arrange medical advice for heavy bleeding, severe pelvic pain, bleeding after
                menopause or a new breast lump. Bleeding after menopause should always be
                checked, even if it happens once or is only spotting.
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
                Get clear answers about your hormonal <em className="text-blue">health.</em>
              </h2>
              <p className="mb-8 max-w-[640px] text-[16px] leading-[1.75] text-ink-soft md:text-[18px]">
                Book a consultation and talk it through with a doctor who has time to listen.
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
      <PageEnquirySection />
    </main>
  );
}
