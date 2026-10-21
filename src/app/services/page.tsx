import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Healthcare Services Dubai | Functional, CBT & Aesthetic",
  description:
    "Healthcare services in Dubai with Dr Fouzia: functional medicine, CBT, women’s health, programmes and aesthetic medicine, all under one doctor-led practice.",
};

const primaryServices = [
  {
    number: "01",
    title: "Functional medicine consultation",
    description: "A detailed review of what may be behind ongoing symptoms.",
    links: [{ label: "Explore service", href: "/functional-medicine-consultation" }],
  },
  {
    number: "02",
    title: "Women’s hormonal health",
    description: "Support for cycles, PMS, perimenopause and menopause.",
    links: [{ label: "Explore service", href: "/womens-hormonal-health" }],
  },
  {
    number: "03",
    title: "Thyroid and metabolic health",
    description: "Checks on thyroid function, blood sugar and weight-related concerns.",
    links: [{ label: "Explore service", href: "/metabolic-health-weight-management" }],
  },
  {
    number: "04",
    title: "Gut and digestive health",
    description: "Help with bloating, reflux and bowel changes, with red flags checked first.",
    links: [{ label: "Explore service", href: "/gut-digestive-health" }],
  },
  {
    number: "05",
    title: "Stress, sleep and energy",
    description: "Practical plans for poor sleep, constant tension and tiredness.",
    links: [{ label: "Explore service", href: "/stress-sleep-nervous-system-health" }],
  },
  {
    number: "06",
    title: "Blood test and nutrition review",
    description: "Results explained in plain language, with nutrient gaps and food choices addressed.",
    links: [
      { label: "Health marker review", href: "/health-marker-review" },
      { label: "Personalised nutrition", href: "/personalised-nutrition" },
    ],
  },
  {
    number: "07",
    title: "Supplement review",
    description: "A check of what you take, what overlaps and what you may not need.",
    links: [{ label: "Explore service", href: "/supplement-review" }],
  },
  {
    number: "08",
    title: "Lifestyle plans",
    description: "Simple, written steps for food, movement, sleep and stress.",
    links: [{ label: "Explore service", href: "/functional-medicine" }],
  },
];

const additionalServices = [
  {
    title: "CBT in Dubai",
    description: "Skills-based therapy for anxiety, overthinking, stress, low mood and sleep.",
    href: "/cbt",
  },
  {
    title: "Healthy aging and longevity",
    description: "Preventive reviews and long-term planning.",
    href: "/healthy-aging-longevity",
  },
  {
    title: "Combined programmes",
    description: "Structured plans that join medical care with therapy skills.",
    href: "/integrated-functional-medicine-cbt",
  },
  {
    title: "Aesthetic medicine in Dubai",
    description: "Doctor-led, non-surgical treatments after a full consultation.",
    href: "/aesthetic-medicine",
  },
];

const startingPoints = [
  { need: "Ongoing physical symptoms", service: "Functional medicine consultation", href: "/functional-medicine-consultation" },
  { need: "Worry, low mood, sleep or stress", service: "CBT", href: "/cbt" },
  { need: "Hormone or cycle changes", service: "Women’s health", href: "/womens-hormonal-health" },
  { need: "Both body and mind", service: "Integrated programme", href: "/integrated-functional-medicine-cbt" },
  { need: "Cosmetic goals", service: "Aesthetic consultation", href: "/aesthetic-medicine" },
];

const steps = [
  "Consultation about your history, symptoms and goals.",
  "Medical review, with tests only where they will help.",
  "A written plan with clear priorities.",
  "Follow-up visits to adjust as you go.",
];

const faqs = [
  {
    question: "Which service should I book first?",
    answer: "A consultation is the best start. Dr Fouzia will advise on the right path.",
  },
  {
    question: "Can I combine services?",
    answer: "Yes. Many plans combine medical care with therapy or lifestyle support.",
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-white">
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="wrap">
          <Reveal direction="left">
            <div className="eyebrow mb-5">What we offer</div>
          </Reveal>
          <Reveal direction="left" delay={100}>
            <h1
              className="mb-7 max-w-[950px] font-display font-normal leading-[1.04] tracking-[-0.045em] text-ink"
              style={{ fontSize: "clamp(var(--step-4), 6.2vw, var(--step-6))" }}
            >
              Healthcare Services in Dubai
              <br />
              <em className="text-blue">Built around your story</em>
            </h1>
          </Reveal>
          <Reveal direction="up" delay={180}>
            <p className="max-w-[790px] text-[16px] leading-[1.8] text-ink-soft md:text-[18px]">
              This page brings together the healthcare services Dr Fouzia offers in Dubai. Every
              service begins with a medical conversation about your symptoms, history and goals,
              so the plan fits you rather than a template. Not sure where to begin? A first
              consultation helps you decide.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-surface-deep py-16 md:py-20">
        <div className="wrap">
          <Reveal direction="up">
            <div className="mb-9 max-w-[700px]">
              <div className="eyebrow mb-4">Medical care, shaped around your needs</div>
              <h2 className="font-display text-[clamp(2rem,4vw,3.25rem)] font-normal leading-[1.1] tracking-[-0.035em] text-ink">
                Explore the services that fit your <em className="text-blue">next step.</em>
              </h2>
            </div>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {primaryServices.map((service, index) => (
              <Reveal key={service.number} direction="up" delay={(index % 4) * 55}>
                <article className="group flex h-full flex-col rounded-2xl border border-line bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue hover:shadow-[var(--shadow-far)] md:p-6">
                  <div className="mb-5 flex items-center justify-between">
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-surface text-blue">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    </span>
                    <span className="text-[12px] font-semibold tracking-[0.08em] text-muted">{service.number}</span>
                  </div>
                  <h3 className="mb-3 text-[16px] font-semibold leading-[1.35] tracking-[-0.01em] text-ink md:text-[17px]">
                    {service.title}
                  </h3>
                  <p className="mb-5 flex-1 text-[14px] leading-[1.7] text-ink-soft">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-x-4 gap-y-2 border-t border-line-light pt-4">
                    {service.links.map((link) => (
                      <Link key={link.href} href={link.href} className="inline-flex items-center gap-1 text-[12.5px] font-semibold text-blue transition-all hover:gap-2">
                        {link.label} <span aria-hidden="true">&#8594;</span>
                      </Link>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="wrap">
          <Reveal direction="up">
            <div className="mb-9 max-w-[700px]">
              <div className="eyebrow mb-4">More ways we can help</div>
              <h2 className="font-display text-[clamp(2rem,4vw,3.25rem)] font-normal leading-[1.1] tracking-[-0.035em] text-ink">
                Other services, the same <em className="text-blue">personal approach.</em>
              </h2>
            </div>
          </Reveal>
          <div className="grid gap-x-8 md:grid-cols-2">
            {additionalServices.map((service, index) => (
              <Reveal key={service.href} direction="up" delay={(index % 2) * 70}>
                <Link href={service.href} className="group flex h-full items-start justify-between gap-5 border-t border-line py-6 transition-colors hover:text-blue">
                  <span>
                    <span className="mb-2 block font-display text-[23px] leading-[1.2] tracking-[-0.02em] text-ink group-hover:text-blue md:text-[27px]">
                      {service.title}
                    </span>
                    <span className="block max-w-[480px] text-[14px] leading-[1.7] text-ink-soft">
                      {service.description}
                    </span>
                  </span>
                  <span className="mt-1 text-[20px] text-blue transition-transform group-hover:translate-x-1" aria-hidden="true">
                    &#8594;
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-16 md:py-20">
        <div className="wrap">
          <div className="grid gap-9 md:grid-cols-[0.75fr_1.25fr] md:gap-16">
            <Reveal direction="left">
              <div className="eyebrow mb-5">Where to start</div>
              <h2 className="max-w-[430px] font-display text-[clamp(2rem,4vw,3.25rem)] font-normal leading-[1.1] tracking-[-0.035em] text-ink">
                Choose a starting point. We’ll help with the <em className="text-blue">next step.</em>
              </h2>
            </Reveal>
            <div className="divide-y divide-line border-y border-line">
              {startingPoints.map((item, index) => (
                <Reveal key={item.need} direction="up" delay={(index % 3) * 45}>
                  <div className="flex flex-col gap-2 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-5 md:py-5">
                    <p className="text-[14px] text-ink-soft md:text-[15px]">{item.need}</p>
                    <Link href={item.href} className="inline-flex items-center gap-1 text-[14px] font-semibold text-blue transition-all hover:gap-2">
                      {item.service} <span aria-hidden="true">&#8594;</span>
                    </Link>
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
            <div className="mb-10 max-w-[650px]">
              <div className="eyebrow mb-4">A clear process</div>
              <h2 className="font-display text-[clamp(2rem,4vw,3.25rem)] font-normal leading-[1.1] tracking-[-0.035em] text-ink">
                How every service <em className="text-blue">works.</em>
              </h2>
            </div>
          </Reveal>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-7">
            {steps.map((step, index) => (
              <Reveal key={step} direction="up" delay={index * 65}>
                <div className="h-full border-t border-line pt-5">
                  <span className="mb-4 block font-display text-[34px] leading-none text-blue/70">0{index + 1}</span>
                  <p className="text-[15px] leading-[1.7] text-ink-soft">{step}</p>
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
                Talk to a doctor who has time to <em className="text-blue">listen.</em>
              </h2>
              <p className="mb-8 max-w-[620px] text-[16px] leading-[1.75] text-ink-soft md:text-[18px]">
                Tell us what is bothering you and we will point you to the right service.
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
    </main>
  );
}
