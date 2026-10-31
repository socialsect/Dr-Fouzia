import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { PageEnquirySection } from "@/components/layout/PageEnquirySection";

export const metadata: Metadata = {
  title: "Fatigue Doctor Dubai | Low Energy & Brain Fog | Dr Fouzia",
  description:
    "Constantly tired? See a fatigue doctor in Dubai who checks thyroid, iron, sleep, hormones and mood before building your plan. Book a consult with Dr Fouzia.",
};

const contributors = [
  "Poor sleep or sleep apnoea",
  "Anaemia or low iron",
  "Thyroid disease",
  "Low vitamin D or B12",
  "Perimenopause or other hormonal changes",
  "Low mood or depression",
  "Some medicines",
  "Long-term stress or a recent infection",
];

const assessmentItems = [
  "Your health history and when the tiredness began",
  "Sleep and mood screening",
  "A physical examination",
  "Selected tests, such as a full blood count, ferritin, thyroid function, vitamin D, B12 and blood sugar",
];

const faqs = [
  {
    question: "Why do I feel tired all the time even after sleeping?",
    answer: "Persistent tiredness despite adequate sleep can have several causes, including iron deficiency, anaemia, thyroid disorders, vitamin deficiencies, sleep disorders, hormonal changes, medication effects and ongoing stress. Dr.Fawezya Al ALi assesses possible contributors before recommending appropriate management.",
  },
  {
    question: "When should I see a doctor for persistent fatigue in Dubai?",
    answer: "Consult a doctor if fatigue lasts several weeks, affects your daily activities or occurs alongside symptoms such as dizziness, unexplained weight changes, breathlessness or difficulty concentrating. A medical evaluation can help identify possible causes and determine the appropriate next steps.",
  },
  {
    question: "What blood tests can help identify the causes of low energy?",
    answer: "Depending on your symptoms, a doctor may recommend a complete blood count, iron studies, thyroid function, vitamin B12, vitamin D or blood glucose testing. Not everyone needs every test; investigations should be selected according to clinical findings.",
  },
  {
    question: "Can hormonal imbalance cause fatigue and low energy?",
    answer: "Yes. Hormonal conditions involving the thyroid, reproductive hormones or other endocrine systems can contribute to fatigue. Perimenopause and menopause may also affect energy and sleep. A medical assessment helps determine whether hormonal changes are contributing to your symptoms.",
  },
  {
    question: "Can poor gut health contribute to fatigue and brain fog?",
    answer: "Digestive problems may contribute to fatigue through factors such as inadequate nutrient absorption, dietary limitations, disrupted sleep or ongoing discomfort. However, fatigue and brain fog have many possible causes, so a broader medical assessment is important.",
  },
  {
    question: "How does Dr.Fawezya Al ALi assess chronic fatigue?",
    answer: "Dr.Fawezya Al ALi reviews your medical history, sleep patterns, nutrition, medications, stress levels and associated symptoms. Depending on the findings, she may recommend selected investigations and develop a personalised plan addressing identified contributing factors.",
  },
  {
    question: "Can I book a fatigue and low energy consultation in Dubai?",
    answer: "Yes. You can contact Dr.Fawezya Al ALi to arrange an assessment for persistent fatigue, low energy or associated brain fog. Sharing previous blood test results and a history of your symptoms can help make the consultation more productive.",
  }
];

export default function FatigueLowEnergyBrainFogPage() {
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
              Fatigue Doctor in Dubai
              <br />
              <em className="text-blue">Tired all the time? Let’s find out why.</em>
            </h1>
          </Reveal>
          <Reveal direction="up" delay={180}>
            <p className="max-w-[820px] text-[16px] leading-[1.8] text-ink-soft md:text-[18px]">
              Being tired for weeks or months is not something you simply have to put up with. A
              fatigue doctor in Dubai should begin by asking why you are tired, not by assuming it
              is stress. Dr Fouzia, a consultant family physician, looks for medical causes first,
              including thyroid problems, low iron, sleep disorders, blood sugar changes, hormonal
              shifts and low mood. She then builds a plan around what she finds.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-surface-deep py-16 md:py-20">
        <div className="wrap">
          <Reveal direction="up">
            <div className="mb-9 max-w-[720px]">
              <div className="eyebrow mb-4">Low energy doctor in Dubai</div>
              <h2 className="mb-4 font-display text-[clamp(2rem,4vw,3.25rem)] font-normal leading-[1.1] tracking-[-0.035em] text-ink">
                Tiredness can have more than one <em className="text-blue">cause.</em>
              </h2>
              <p className="text-[15px] leading-[1.75] text-ink-soft md:text-[16px]">
                Poor sleep or sleep apnoea, anaemia, thyroid disease, low vitamin D or B12,
                perimenopause, depression, some medicines, long-term stress and recent infections
                can all affect energy. Often, more than one factor is involved.
              </p>
            </div>
          </Reveal>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {contributors.map((item, index) => (
              <Reveal key={item} direction="up" delay={(index % 4) * 45}>
                <div className="flex h-full min-h-[76px] items-start gap-3 rounded-xl border border-line bg-white p-5 text-[14px] leading-[1.65] text-ink-soft">
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
        <div className="wrap grid gap-5 md:grid-cols-2">
          <Reveal direction="up">
            <article className="h-full rounded-2xl border border-line bg-white p-6 md:p-8">
              <div className="eyebrow mb-5">When tiredness lasts</div>
              <h2 className="mb-4 font-display text-[clamp(1.8rem,3.5vw,2.7rem)] font-normal leading-[1.1] tracking-[-0.035em] text-ink">
                Persistent fatigue deserves a closer <em className="text-blue">look.</em>
              </h2>
              <p className="text-[14.5px] leading-[1.75] text-ink-soft">
                Fatigue that continues for a few months, or comes with fever, weight loss or pain,
                needs a fuller medical assessment. ME/CFS is a distinct diagnosis that needs
                careful assessment by an appropriately qualified clinician after other possible
                explanations have been considered.
              </p>
            </article>
          </Reveal>
          <Reveal direction="up" delay={80}>
            <article className="h-full rounded-2xl border border-line bg-surface p-6 md:p-8">
              <div className="eyebrow mb-5">Brain fog treatment in Dubai</div>
              <h2 className="mb-4 font-display text-[clamp(1.8rem,3.5vw,2.7rem)] font-normal leading-[1.1] tracking-[-0.035em] text-ink">
                Brain fog is a symptom, not a <em className="text-blue">diagnosis.</em>
              </h2>
              <p className="mb-6 text-[14.5px] leading-[1.75] text-ink-soft">
                Changes in concentration or memory can be reviewed as part of a fatigue
                assessment. If you are looking for a structured programme, visit the
                brain fog and cognitive wellness page.
              </p>
              <Link
                href="/brain-fog-cognitive-wellness"
                className="font-semibold text-blue underline underline-offset-4"
              >
                Explore brain fog and cognitive wellness <span aria-hidden="true">&#8594;</span>
              </Link>
            </article>
          </Reveal>
        </div>
      </section>

      <section className="bg-surface py-16 md:py-20">
        <div className="wrap grid gap-9 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
          <Reveal direction="left">
            <div className="eyebrow mb-5">What the assessment includes</div>
            <h2 className="max-w-[470px] font-display text-[clamp(2rem,4vw,3.25rem)] font-normal leading-[1.1] tracking-[-0.035em] text-ink">
              Start with your story, then choose tests <em className="text-blue">carefully.</em>
            </h2>
            <p className="mt-5 max-w-[450px] text-[14.5px] leading-[1.75] text-ink-soft">
              The assessment is guided by your symptoms and medical history. Tests are selected
              where they can add useful information.
            </p>
          </Reveal>
          <div className="divide-y divide-line border-y border-line">
            {assessmentItems.map((item, index) => (
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
          <div className="md:col-start-2">
            <Link
              href="/health-marker-review"
              className="font-semibold text-blue underline underline-offset-4"
            >
              Learn about health marker reviews <span aria-hidden="true">&#8594;</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="wrap grid gap-9 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
          <Reveal direction="left">
            <div className="eyebrow mb-5">Practical support</div>
            <h2 className="max-w-[470px] font-display text-[clamp(2rem,4vw,3.25rem)] font-normal leading-[1.1] tracking-[-0.035em] text-ink">
              A plan shaped by what the assessment <em className="text-blue">finds.</em>
            </h2>
          </Reveal>
          <Reveal direction="right">
            <div className="rounded-2xl border border-line bg-white p-6 md:p-8">
              <p className="mb-5 text-[15px] leading-[1.75] text-ink-soft">
                Depending on what is found, your plan may cover a steadier sleep routine, meal
                timing, pacing your activity, stress skills and supplements where they are
                justified.
              </p>
              <div className="flex flex-wrap gap-x-6 gap-y-3 border-t border-line pt-5 text-[14px] font-semibold">
                <Link href="/stress-sleep-energy-reset" className="text-blue underline underline-offset-4">
                  Stress, sleep and energy support
                </Link>
                <Link href="/supplement-review" className="text-blue underline underline-offset-4">
                  Supplement review
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-surface-deep py-12 md:py-16">
        <div className="wrap">
          <Reveal direction="up">
            <div className="rounded-2xl border border-line bg-white p-6 md:p-9">
              <div className="eyebrow mb-4">When to seek urgent help</div>
              <h2 className="mb-4 font-display text-[clamp(1.8rem,3.5vw,2.5rem)] font-normal leading-[1.1] tracking-[-0.035em] text-ink">
                Some symptoms should not <em className="text-blue">wait.</em>
              </h2>
              <p className="max-w-[820px] text-[14.5px] leading-[1.75] text-ink-soft md:text-[15px]">
                Chest pain, breathlessness, fainting, sudden weakness or sudden confusion need
                urgent medical care. Do not wait for a routine appointment. In the UAE, call{" "}
                <a href="tel:998" className="font-semibold text-blue underline underline-offset-4">
                  998 for an ambulance
                </a>
                .
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
                Start finding out what is draining your <em className="text-blue">energy.</em>
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
