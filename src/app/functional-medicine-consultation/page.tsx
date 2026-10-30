import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { PageEnquirySection } from "@/components/layout/PageEnquirySection";

export const metadata: Metadata = {
  title: "Functional Medicine Consultation Dubai | Dr Fouzia Al Ali",
  description:
    "Book a functional medicine consultation in Dubai. A long, unhurried visit covering your history, symptoms and goals, with clear next steps afterwards.",
};

const highlights = [
  "A longer visit, so nothing important gets rushed",
  "A careful look at your symptoms, medical history and daily habits",
  "A review of how hormones, metabolism, digestion and energy may be linked",
  "Blood tests or other investigations suggested only if they would help",
  "Clear next steps covering food, sleep, movement and stress",
  "A follow-up visit to go through results and adjust the plan",
];

const consultationTopics = [
  "When your symptoms began and how they have changed",
  "Medical, family and medication history",
  "Sleep, food, movement, stress and work",
  "Gut, hormones, energy and mood",
  "Your goals and what matters most to you",
];

const faqs = [
  {
    question: "Do I need tests before I come?",
    answer: "No. Bring any you already have.",
  },
  {
    question: "What happens after the consultation?",
    answer:
      "You and Dr Fouzia will discuss a plan and, if needed, tests and a follow-up visit.",
  },
  {
    question: "Do I have to commit to treatment?",
    answer: "No. The decision is yours.",
  },
  {
    question:
      "What happens during a functional medicine consultation in Dubai?",
    answer:
      "A functional medicine consultation with Dr Fouzia Al Ali involves reviewing your symptoms, medical history, medications, lifestyle, nutrition, sleep and health goals. Relevant investigations may be recommended before developing a personalised care plan.",
  },
  {
    question:
      "How much does a functional medicine consultation cost in Dubai?",
    answer:
      "Consultation fees depend on the appointment type and services required. Contact Dr Fouzia Al Ali's clinic directly to confirm the current consultation charges and available appointment options.",
  },
  {
    question:
      "Do I need blood tests before my functional medicine consultation?",
    answer:
      "No, you do not necessarily need blood tests before your first appointment. Dr Fouzia Al Ali reviews your medical history and symptoms before deciding whether specific blood tests or investigations would provide useful information.",
  },
  {
    question:
      "What should I bring to my first functional medicine appointment?",
    answer:
      "Bring previous laboratory reports, medical records, a list of medications and supplements, and details of your current symptoms. Information about your sleep, diet and lifestyle can also help make the consultation more productive.",
  },
];

export default function FunctionalMedicineConsultationPage() {
  return (
    <main className="bg-white">
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="wrap">
          <Reveal direction="left">
            <div className="eyebrow mb-5">The consultation</div>
          </Reveal>
          <Reveal direction="left" delay={100}>
            <h1
              className="mb-7 max-w-[1000px] font-display font-normal leading-[1.04] tracking-[-0.045em] text-ink"
              style={{ fontSize: "clamp(var(--step-4), 6.2vw, var(--step-6))" }}
            >
              Functional Medicine Consultation in Dubai
              <br />
              <em className="text-blue">Time to talk. A plan you can follow.</em>
            </h1>
          </Reveal>
          <Reveal direction="up" delay={180}>
            <p className="max-w-[820px] text-[16px] leading-[1.8] text-ink-soft md:text-[18px]">
              A functional medicine consultation in Dubai with Dr Fouzia is a long, structured
              appointment built to understand your whole health story, not just the symptom that
              brought you in. By the end you should know what may be contributing to how you feel,
              which tests are worth doing and what to change first.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-surface-deep py-16 md:py-20">
        <div className="wrap">
          <Reveal direction="up">
            <div className="mb-9 max-w-[680px]">
              <div className="eyebrow mb-4">A considered first visit</div>
              <h2 className="font-display text-[clamp(2rem,4vw,3.25rem)] font-normal leading-[1.1] tracking-[-0.035em] text-ink">
                A consultation shaped around <em className="text-blue">you.</em>
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
        <div className="wrap grid gap-9 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
          <Reveal direction="left">
            <div className="eyebrow mb-5">Your health story</div>
            <h2 className="max-w-[460px] font-display text-[clamp(2rem,4vw,3.25rem)] font-normal leading-[1.1] tracking-[-0.035em] text-ink">
              What the consultation <em className="text-blue">covers.</em>
            </h2>
          </Reveal>
          <div className="divide-y divide-line border-y border-line">
            {consultationTopics.map((topic, index) => (
              <Reveal key={topic} direction="up" delay={(index % 3) * 45}>
                <div className="flex items-start gap-4 py-4 md:py-5">
                  <span className="mt-0.5 text-blue" aria-hidden="true">&#10003;</span>
                  <p className="text-[14px] leading-[1.7] text-ink-soft md:text-[15px]">{topic}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-16 md:py-20">
        <div className="wrap grid gap-9 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
          <Reveal direction="left">
            <div className="eyebrow mb-5">Before your visit</div>
            <h2 className="max-w-[470px] font-display text-[clamp(2rem,4vw,3.25rem)] font-normal leading-[1.1] tracking-[-0.035em] text-ink">
              A little preparation can make your visit <em className="text-blue">easier.</em>
            </h2>
          </Reveal>
          <Reveal direction="right">
            <div className="rounded-2xl border border-line bg-white p-6 md:p-8">
              <p className="mb-5 text-[15px] leading-[1.75] text-ink-soft">
                Bring these details if you have them:
              </p>
              <ul className="space-y-3 text-[14px] leading-[1.7] text-ink-soft">
                <li className="flex gap-3"><span className="text-blue">&#10003;</span><span>A list of your medicines and supplements, including doses</span></li>
                <li className="flex gap-3"><span className="text-blue">&#10003;</span><span>Recent blood tests or scans</span></li>
                <li className="flex gap-3"><span className="text-blue">&#10003;</span><span>A short timeline of your symptoms</span></li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="wrap grid gap-5 md:grid-cols-2">
          <Reveal direction="up">
            <article className="h-full rounded-2xl border border-line bg-white p-6 md:p-8">
              <div className="eyebrow mb-5">After your consultation</div>
              <h2 className="mb-4 font-display text-[clamp(1.7rem,3vw,2.5rem)] font-normal leading-[1.12] tracking-[-0.03em] text-ink">
                Clear next steps, at a <em className="text-blue">steady pace.</em>
              </h2>
              <p className="text-[14.5px] leading-[1.75] text-ink-soft">
                Tests are suggested only where they add useful information. You can discuss a
                manageable place to start, usually with two or three changes rather than twenty,
                and arrange a follow-up if needed.
              </p>
            </article>
          </Reveal>
          <Reveal direction="up" delay={80}>
            <article className="h-full rounded-2xl border border-line bg-surface p-6 md:p-8">
              <div className="eyebrow mb-5">Who it suits</div>
              <h2 className="mb-4 font-display text-[clamp(1.7rem,3vw,2.5rem)] font-normal leading-[1.12] tracking-[-0.03em] text-ink">
                For the questions that need <em className="text-blue">more time.</em>
              </h2>
              <p className="mb-6 text-[14.5px] leading-[1.75] text-ink-soft">
                This consultation may suit people with long-running symptoms, unclear test
                results, several symptoms at once, or a wish for preventive care.
              </p>
              <p className="border-t border-line pt-5 text-[13.5px] leading-[1.7] text-ink-soft">
                Urgent symptoms and conditions that need a specialist to lead care should be
                assessed through the appropriate urgent or specialist service. Dr Fouzia can
                refer you on when that is the better route.
              </p>
            </article>
          </Reveal>
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
              <h2 className="mb-5 max-w-[760px] font-display text-[clamp(2rem,4vw,3.5rem)] font-normal leading-[1.08] tracking-[-0.04em] text-ink">
                Take the first step with a proper <em className="text-blue">conversation.</em>
              </h2>
              <p className="mb-8 max-w-[640px] text-[16px] leading-[1.75] text-ink-soft md:text-[18px]">
                Book your consultation and tell your story to a doctor who has time to hear it.
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
