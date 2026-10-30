import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Stress and Sleep Doctor Dubai",
  description:
    "Struggling with stress or poor sleep? Dr Fouzia, a stress and sleep doctor in Dubai, offers medical review, lifestyle plans and Calm Mind Sessions. Book a consult.",
};

const sleepFactors = [
  "Sleep timing, caffeine, screens, alcohol and shift patterns",
  "Snoring, pauses in breathing or restless legs",
  "Waking during the night or very early",
  "Medicines and supplements that may affect sleep",
  "Whether Calm Mind Sessions for insomnia may be helpful",
];

const tools = [
  "Breathing and pacing techniques",
  "Light and meal timing",
  "Regular movement",
  "A structured wind-down routine",
];

const faqs = [
  {
    question: "Can stress cause physical symptoms?",
    answer:
      "Stress can be associated with physical symptoms, but those symptoms can also have other causes. They should be assessed medically before being put down to stress.",
  },
  {
    question: "Do I need sleeping tablets?",
    answer:
      "Not necessarily. Calm Mind Sessions for insomnia is a recommended non-drug option for many adults with chronic insomnia. Medication is discussed only when appropriate to the individual assessment.",
  },
  {
    question: "How long until I notice a difference?",
    answer:
      "It varies from person to person. Your doctor can discuss expectations after reviewing your sleep, symptoms and health history.",
  },
];

export default function StressSleepNervousSystemHealthPage() {
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
              Stress and Sleep Doctor in Dubai
              <br />
              <em className="text-blue">Help your body wind down again.</em>
            </h1>
          </Reveal>
          <Reveal direction="up" delay={180}>
            <p className="max-w-[820px] text-[16px] leading-[1.8] text-ink-soft md:text-[18px]">
              Long-term stress and poor sleep can affect each other. When you sleep badly, the
              next day may feel harder, and winding down at night can become difficult. A stress
              and sleep doctor in Dubai can look at both together. Dr Fouzia, a consultant family
              physician, checks for possible medical causes first, then combines functional
              medicine and Calm Mind Sessions tools in a plan suited to your needs.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-surface-deep py-16 md:py-20">
        <div className="wrap grid gap-9 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
          <Reveal direction="left">
            <div className="eyebrow mb-5">Chronic stress treatment in Dubai</div>
            <h2 className="max-w-[480px] font-display text-[clamp(2rem,4vw,3.25rem)] font-normal leading-[1.1] tracking-[-0.035em] text-ink">
              Start with a medical <em className="text-blue">review.</em>
            </h2>
            <p className="mt-5 max-w-[450px] text-[14.5px] leading-[1.75] text-ink-soft">
              Ongoing exhaustion, racing thoughts, palpitations, headaches or an upset stomach
              can have several causes. A first review considers conditions such as anaemia,
              thyroid disease, sleep apnoea or low mood before focusing on workload, routine and
              recovery time.
            </p>
          </Reveal>
          <div className="divide-y divide-line border-y border-line">
            {[
              "Your symptoms and when they started",
              "Relevant medical history and medicines",
              "Workload, daily routine and recovery time",
              "Whether further assessment or referral is appropriate",
            ].map((item, index) => (
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
        <div className="wrap grid gap-9 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
          <Reveal direction="left">
            <div className="eyebrow mb-5">Sleep health doctor in Dubai</div>
            <h2 className="max-w-[470px] font-display text-[clamp(2rem,4vw,3.25rem)] font-normal leading-[1.1] tracking-[-0.035em] text-ink">
              Look at the habits and symptoms around <em className="text-blue">sleep.</em>
            </h2>
          </Reveal>
          <div className="divide-y divide-line border-y border-line">
            {sleepFactors.map((item, index) => (
              <Reveal key={item} direction="up" delay={(index % 3) * 45}>
                <div className="flex items-start gap-4 py-4 md:py-5">
                  <span className="mt-0.5 text-blue" aria-hidden="true">
                    &#10003;
                  </span>
                  <p className="text-[14px] leading-[1.7] text-ink-soft md:text-[15px]">{item}</p>
                </div>
              </Reveal>
            ))}
            <div className="py-5">
              <Link
                href="/calm-mind-sessions-sleep-insomnia"
                className="font-semibold text-blue underline underline-offset-4"
              >
                Learn about Calm Mind Sessions for insomnia <span aria-hidden="true">&#8594;</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface py-16 md:py-20">
        <div className="wrap grid gap-5 md:grid-cols-2">
          <Reveal direction="up">
            <article className="h-full rounded-2xl border border-line bg-white p-6 md:p-8">
              <div className="eyebrow mb-5">Nervous system health, explained plainly</div>
              <h2 className="mb-4 font-display text-[clamp(1.8rem,3.5vw,2.7rem)] font-normal leading-[1.1] tracking-[-0.035em] text-ink">
                Small tools to support alertness and <em className="text-blue">rest.</em>
              </h2>
              <p className="mb-5 text-[14.5px] leading-[1.75] text-ink-soft">
                “Nervous system health” is a way of describing how your body shifts between
                alertness and rest. Practical tools may support stress and sleep habits, but they
                are not a cure for an underlying condition.
              </p>
              <ul className="space-y-3 border-t border-line pt-5 text-[14px] leading-[1.7] text-ink-soft">
                {tools.map((tool) => (
                  <li key={tool} className="flex gap-3">
                    <span className="text-blue" aria-hidden="true">
                      &#10003;
                    </span>
                    <span>{tool}</span>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
          <Reveal direction="up" delay={80}>
            <article className="h-full rounded-2xl border border-line bg-surface-deep p-6 md:p-8">
              <div className="eyebrow mb-5">Stress management in Dubai</div>
              <h2 className="mb-4 font-display text-[clamp(1.8rem,3.5vw,2.7rem)] font-normal leading-[1.1] tracking-[-0.035em] text-ink">
                Skills you can practise beyond the <em className="text-blue">visit.</em>
              </h2>
              <p className="mb-6 text-[14.5px] leading-[1.75] text-ink-soft">
                Calm Mind Sessions can teach skills for worry, rumination and tension that you can
                continue using between appointments.
              </p>
              <Link
                href="/calm-mind-sessions-stress-management"
                className="font-semibold text-blue underline underline-offset-4"
              >
                Explore Calm Mind Sessions for stress management <span aria-hidden="true">&#8594;</span>
              </Link>
            </article>
          </Reveal>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="wrap grid gap-9 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
          <Reveal direction="left">
            <div className="eyebrow mb-5">Who this suits</div>
            <h2 className="max-w-[470px] font-display text-[clamp(2rem,4vw,3.25rem)] font-normal leading-[1.1] tracking-[-0.035em] text-ink">
              When sleep or tension has become hard to <em className="text-blue">manage.</em>
            </h2>
          </Reveal>
          <Reveal direction="right">
            <div className="rounded-2xl border border-line bg-white p-6 md:p-8">
              <p className="text-[14.5px] leading-[1.75] text-ink-soft">
                This consultation may suit people whose sleep has become unreliable, who feel
                constantly on edge, or whose tiredness and tension have lasted for weeks or
                months.
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

      <section className="bg-surface-deep py-12 md:py-16">
        <div className="wrap">
          <Reveal direction="up">
            <div className="rounded-2xl border border-line bg-white p-6 md:p-9">
              <div className="eyebrow mb-4">When to seek urgent help</div>
              <h2 className="mb-4 font-display text-[clamp(1.8rem,3.5vw,2.5rem)] font-normal leading-[1.1] tracking-[-0.035em] text-ink">
                Your safety comes <em className="text-blue">first.</em>
              </h2>
              <p className="max-w-[820px] text-[14.5px] leading-[1.75] text-ink-soft md:text-[15px]">
                If you have thoughts of harming yourself or feel unsafe right now, call UAE
                emergency services: <a href="tel:998" className="font-semibold text-blue underline underline-offset-4">998 for an ambulance</a> or{" "}
                <a href="tel:999" className="font-semibold text-blue underline underline-offset-4">999 for police</a>,
                or go to the nearest emergency department. Seek urgent medical care for chest
                pain or fainting.
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
                Take the first step towards calmer days and better <em className="text-blue">nights.</em>
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
    </main>
  );
}
