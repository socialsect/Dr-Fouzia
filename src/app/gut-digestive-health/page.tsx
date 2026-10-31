import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { PageEnquirySection } from "@/components/layout/PageEnquirySection";

export const metadata: Metadata = {
  title: "Gut Health Doctor Dubai | Digestive Care | Dr Fouzia",
  description:
    "See a gut health doctor in Dubai for bloating, reflux and bowel changes. Medical assessment first, then nutrition and lifestyle support. Book a consult.",
};

const highlights = [
  "Help with bloating, wind, constipation and loose stools",
  "Red-flag symptoms checked before anything else",
  "Reflux and indigestion reviewed, including triggers and medicines",
  "Food and symptom patterns mapped, with testing only when it is justified",
  "Possible conditions such as IBS, coeliac disease and bacterial overgrowth considered",
  "Support for gut symptoms that flare with stress",
];

const conditions = [
  { label: "Bloating, wind and abdominal discomfort", href: "/gut-brain-health-program" },
  { label: "Constipation or loose stools", href: "/gut-brain-health-program" },
  { label: "Reflux and indigestion", href: "/gut-brain-health-program" },
  { label: "Food and symptom patterns", href: "/personalised-nutrition" },
];

const consultationIncludes = [
  "A history of your symptoms",
  "A look at your diet and daily routine",
  "A physical examination",
  "Selected tests where they are justified, such as blood tests, coeliac screening or stool tests",
];

const faqs = [
  {
    question: "When should I consult a gut health doctor in Dubai?",
    answer: "You should consider consulting a gut health doctor if you experience persistent bloating, constipation, diarrhoea, acid reflux, indigestion or recurring abdominal discomfort. Dr.Fawezya Al ALi evaluates digestive symptoms, medical history and possible warning signs before recommending appropriate investigations or management.",
  },
  {
    question: "What are the common causes of bloating and digestive problems?",
    answer: "Bloating and digestive discomfort can be associated with food intolerances, constipation, irritable bowel syndrome, gastrointestinal conditions, dietary habits and stress. A medical assessment helps identify possible contributors and determine whether further investigations are needed.",
  },
  {
    question: "Can functional medicine help with chronic digestive problems?",
    answer: "A functional medicine approach can help assess ongoing digestive symptoms by considering diet, lifestyle, medications, stress and relevant medical conditions. Dr.Fawezya Al ALi uses this information alongside conventional medical assessment to develop an appropriate digestive health plan.",
  },
  {
    question: "Can stress affect gut health and digestion?",
    answer: "Yes. The digestive system and brain communicate through the gut-brain axis. Stress can influence gut movement, digestive sensitivity and symptom perception, potentially contributing to bloating, abdominal discomfort and changes in bowel habits.",
  },
  {
    question: "What tests may be recommended for digestive health problems?",
    answer: "Depending on your symptoms, a doctor may recommend blood tests, coeliac screening, stool investigations or other gastrointestinal assessments. The choice of testing depends on your medical history, examination and any warning signs.",
  },
  {
    question: "Can dietary changes improve digestive health?",
    answer: "Dietary changes may help manage certain digestive symptoms, depending on their underlying cause. Dr.Fawezya Al ALi may recommend personalised dietary adjustments, appropriate meal patterns and symptom tracking rather than unnecessary food restrictions.",
  },
  {
    question: "How can I book a gut health consultation with Dr.Fawezya Al ALi in Dubai?",
    answer: "You can contact Dr.Fawezya Al ALi through the official website to arrange a digestive health consultation. Explain your symptoms, how long you have experienced them and any previous investigations to help guide your assessment.",
  }
];

export default function GutDigestiveHealthPage() {
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
              Gut Health Doctor in Dubai
              <br />
              <em className="text-blue">Safe checks first, then practical support</em>
            </h1>
          </Reveal>
          <Reveal direction="up" delay={180}>
            <p className="max-w-[830px] text-[16px] leading-[1.8] text-ink-soft md:text-[18px]">
              Bloating, reflux, constipation and an unsettled stomach are common, but they are
              not always harmless. A gut health doctor in Dubai should first rule out anything
              serious, then work out what is driving your everyday symptoms. Dr Fouzia combines
              a physician’s assessment with functional medicine tools, so you get both safety
              checks and a plan you can follow.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-surface-deep py-16 md:py-20">
        <div className="wrap">
          <Reveal direction="up">
            <div className="mb-9 max-w-[680px]">
              <div className="eyebrow mb-4">Digestive care</div>
              <h2 className="font-display text-[clamp(2rem,4vw,3.25rem)] font-normal leading-[1.1] tracking-[-0.035em] text-ink">
                Understand the pattern behind your <em className="text-blue">symptoms.</em>
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

      <section className="py-16 md:py-20">
        <div className="wrap">
          <Reveal direction="up">
            <div className="rounded-2xl border border-danger/20 bg-[#FFF8F6] p-6 md:p-9">
              <div className="mb-4 text-[12px] font-semibold uppercase tracking-[0.12em] text-danger">
                Check the red flags first
              </div>
              <h2 className="mb-4 max-w-[780px] font-display text-[clamp(1.8rem,3.4vw,2.7rem)] font-normal leading-[1.12] tracking-[-0.035em] text-ink">
                Some symptoms need medical assessment before a lifestyle <em className="text-blue">plan.</em>
              </h2>
              <p className="mb-5 max-w-[820px] text-[14.5px] leading-[1.75] text-ink-soft md:text-[15px]">
                Seek prompt medical advice if you notice blood in your stool, black stools,
                unexplained weight loss, vomiting that will not stop, difficulty swallowing,
                anaemia, or a new change in bowel habit that lasts. These need investigation
                before any lifestyle plan.
              </p>
              <p className="text-[13px] leading-[1.65] text-ink-soft">
                This page is educational and cannot assess urgent symptoms. If symptoms are severe
                or sudden, seek urgent medical help.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-surface py-16 md:py-20">
        <div className="wrap grid gap-9 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
          <Reveal direction="left">
            <div className="eyebrow mb-5">Common reasons</div>
            <h2 className="max-w-[460px] font-display text-[clamp(2rem,4vw,3.25rem)] font-normal leading-[1.1] tracking-[-0.035em] text-ink">
              Bloating can have more than one <em className="text-blue">cause.</em>
            </h2>
          </Reveal>
          <Reveal direction="right">
            <div className="space-y-6 text-[15px] leading-[1.8] text-ink-soft md:text-[16px]">
              <p>
                Bloating can come from eating patterns, food intolerances, constipation, irritable
                bowel syndrome, coeliac disease or bacterial overgrowth in the small bowel. A
                proper assessment helps distinguish between possible causes.
              </p>
              <p>
                Food and symptom patterns can offer useful clues. Testing is considered when it
                is justified by your history and is likely to guide care.
              </p>
              <div className="grid gap-x-6 sm:grid-cols-2">
                {conditions.map((condition) => (
                  <Link key={condition.label} href={condition.href} className="group flex items-center justify-between gap-3 border-t border-line py-3 font-medium text-ink transition-colors hover:text-blue">
                    <span>{condition.label}</span>
                    <span className="text-blue transition-transform group-hover:translate-x-1" aria-hidden="true">&#8594;</span>
                  </Link>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="wrap grid gap-9 md:grid-cols-[0.78fr_1.22fr] md:gap-16">
          <Reveal direction="left">
            <div className="eyebrow mb-5">Your consultation</div>
            <h2 className="max-w-[460px] font-display text-[clamp(2rem,4vw,3.25rem)] font-normal leading-[1.1] tracking-[-0.035em] text-ink">
              What a gut health consultation in Dubai <em className="text-blue">includes.</em>
            </h2>
          </Reveal>
          <Reveal direction="right">
            <div className="rounded-2xl border border-line bg-surface p-6 md:p-8">
              <ul className="space-y-4">
                {consultationIncludes.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[14px] leading-[1.7] text-ink-soft md:text-[15px]">
                    <span className="mt-0.5 text-blue" aria-hidden="true">&#10003;</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/health-marker-review" className="mt-6 inline-flex items-center gap-2 border-t border-line pt-5 text-[13px] font-semibold text-blue transition-all hover:gap-3">
                Learn about health marker review <span aria-hidden="true">&#8594;</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-surface-deep py-16 md:py-20">
        <div className="wrap grid gap-5 md:grid-cols-2">
          <Reveal direction="up">
            <article className="h-full rounded-2xl border border-line bg-white p-6 md:p-8">
              <div className="eyebrow mb-5">Evidence and limits</div>
              <h2 className="mb-4 font-display text-[clamp(1.7rem,3vw,2.5rem)] font-normal leading-[1.12] tracking-[-0.03em] text-ink">
                Practical support, explained <em className="text-blue">clearly.</em>
              </h2>
              <p className="mb-5 text-[14px] leading-[1.75] text-ink-soft">
                Meal patterns, fibre, hydration and a careful trial of dietary changes are well
                supported. Probiotics help some people but not all.
              </p>
              <p className="text-[14px] leading-[1.75] text-ink-soft">
                Microbiome tests and food-sensitivity (IgG) tests are not reliable guides for most
                people, so they are used cautiously and explained honestly.
              </p>
              <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 border-t border-line pt-5">
                <Link href="/personalised-nutrition" className="text-[12.5px] font-semibold text-blue">Personalised nutrition &#8594;</Link>
                <Link href="/supplement-review" className="text-[12.5px] font-semibold text-blue">Supplement review &#8594;</Link>
              </div>
            </article>
          </Reveal>
          <Reveal direction="up" delay={80}>
            <article className="h-full rounded-2xl border border-line bg-white p-6 md:p-8">
              <div className="eyebrow mb-5">Digestive health and stress</div>
              <h2 className="mb-4 font-display text-[clamp(1.7rem,3vw,2.5rem)] font-normal leading-[1.12] tracking-[-0.03em] text-ink">
                Mind and gut can affect each <em className="text-blue">other.</em>
              </h2>
              <p className="mb-6 text-[14px] leading-[1.75] text-ink-soft">
                Stress and worry can make gut symptoms stronger, and gut discomfort can in turn
                disturb sleep and mood. Where it fits, Dr Fouzia adds Calm Mind Sessions skills for the stress
                side.
              </p>
              <div className="flex flex-wrap gap-x-5 gap-y-2 border-t border-line pt-5">
                <Link href="/gut-brain-health-program" className="text-[12.5px] font-semibold text-blue">Gut brain health programme &#8594;</Link>
                <Link href="/calm-mind-sessions-anxiety" className="text-[12.5px] font-semibold text-blue">Calm Mind Sessions for anxiety &#8594;</Link>
              </div>
            </article>
          </Reveal>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="wrap-narrow">
          <Reveal direction="up">
            <div className="mb-5">
              <div className="eyebrow mb-4">Who it suits</div>
              <h2 className="font-display text-[clamp(2rem,4vw,3.25rem)] font-normal leading-[1.1] tracking-[-0.035em] text-ink">
                Get support for ongoing digestive <em className="text-blue">concerns.</em>
              </h2>
            </div>
            <p className="max-w-[760px] text-[15px] leading-[1.8] text-ink-soft md:text-[16px]">
              This approach may suit anyone with bloating, reflux, constipation, diarrhoea, food
              worries or unexplained abdominal discomfort. The first step is a medical assessment
              to understand what may be contributing and whether further investigation is needed.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-surface py-16 md:py-20">
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

      <section className="py-16 md:py-24">
        <div className="wrap">
          <Reveal direction="up">
            <div className="mb-8 rounded-2xl border border-danger/20 bg-[#FFF8F6] px-6 py-7 md:px-9">
              <div className="mb-2 text-[12px] font-semibold uppercase tracking-[0.12em] text-danger">Urgent care</div>
              <p className="mb-3 text-[15px] font-semibold leading-[1.6] text-ink">
                Seek urgent medical help for severe abdominal pain, vomiting blood or black stools.
              </p>
              <p className="text-[14px] leading-[1.7] text-ink-soft">
                In the UAE, call <a href="tel:998" className="font-semibold text-danger underline underline-offset-2">998 for an ambulance</a> in an emergency.
              </p>
            </div>
          </Reveal>
          <Reveal direction="up" delay={80}>
            <div className="rounded-2xl border border-line bg-surface-deep px-6 py-10 md:px-12 md:py-14">
              <div className="eyebrow mb-5">Ready when you are</div>
              <h2 className="mb-5 max-w-[760px] font-display text-[clamp(2rem,4vw,3.5rem)] font-normal leading-[1.08] tracking-[-0.04em] text-ink">
                Get to the bottom of your digestive <em className="text-blue">symptoms.</em>
              </h2>
              <p className="mb-8 max-w-[640px] text-[16px] leading-[1.75] text-ink-soft md:text-[18px]">
                Book a consultation and talk it through with a doctor who has time to listen.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact" className="btn btn-primary">Book a consultation</Link>
                <Link href="/services" className="btn btn-ghost">Explore services</Link>
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
