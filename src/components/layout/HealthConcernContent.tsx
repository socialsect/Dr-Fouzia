import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { PageEnquirySection } from "@/components/layout/PageEnquirySection";

type PageLink = { label: string; href: string };

type ContentSection = {
  eyebrow: string;
  heading: string;
  accent: string;
  paragraphs: string[];
  bullets?: string[];
  links?: PageLink[];
};

type SafetyNote = {
  text: string;
  emergencyLinks?: PageLink[];
  closing?: string;
  additionalText?: string;
  additionalLinks?: PageLink[];
  additionalClosing?: string;
};

type HealthConcernContentProps = {
  eyebrowLabel?: string;
  highlightsEyebrow?: string;
  title: string;
  highlight: string;
  description: string;
  highlightsTitle: string;
  highlightsAccent: string;
  highlights: string[];
  sections: ContentSection[];
  faqs: { question: string; answer: string }[];
  safety?: SafetyNote;
  ctaTitle: string;
  ctaAccent: string;
  ctaDescription: string;
  showEnquiryForm?: boolean;
};

export function HealthConcernContent({
  eyebrowLabel = "Health concern",
  highlightsEyebrow = "A considered first visit",
  title,
  highlight,
  description,
  highlightsTitle,
  highlightsAccent,
  highlights,
  sections,
  faqs,
  safety,
  ctaTitle,
  ctaAccent,
  ctaDescription,
  showEnquiryForm = false,
}: HealthConcernContentProps) {
  return (
    <main className="bg-white">
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="wrap">
          <Reveal direction="left">
            <div className="eyebrow mb-5">{eyebrowLabel}</div>
          </Reveal>
          <Reveal direction="left" delay={100}>
            <h1
              className="mb-7 max-w-[1000px] font-display font-normal leading-[1.04] tracking-[-0.045em] text-ink"
              style={{ fontSize: "clamp(var(--step-4), 6.2vw, var(--step-6))" }}
            >
              {title}
              <br />
              <em className="text-blue">{highlight}</em>
            </h1>
          </Reveal>
          <Reveal direction="up" delay={180}>
            <p className="max-w-[820px] text-[16px] leading-[1.8] text-ink-soft md:text-[18px]">
              {description}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-surface-deep py-16 md:py-20">
        <div className="wrap">
          <Reveal direction="up">
            <div className="mb-9 max-w-[700px]">
              <div className="eyebrow mb-4">{highlightsEyebrow}</div>
              <h2
                aria-label={`${highlightsTitle} ${highlightsAccent}`}
                className="font-display text-[clamp(2rem,4vw,3.25rem)] font-normal leading-[1.1] tracking-[-0.035em] text-ink"
              >
                {highlightsTitle} <em className="text-blue">{highlightsAccent}</em>
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

      {sections.map((section, index) => (
        <section
          key={section.heading}
          className={`${index % 2 === 1 ? "bg-surface" : "bg-white"} py-16 md:py-24`}
        >
          <div className="wrap grid gap-9 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
            <Reveal direction="left">
              <div className="eyebrow mb-5">{section.eyebrow}</div>
              <h2
                aria-label={`${section.heading} ${section.accent}`}
                className="max-w-[520px] font-display text-[clamp(2rem,4vw,3.25rem)] font-normal leading-[1.1] tracking-[-0.035em] text-ink"
              >
                {section.heading} <em className="text-blue">{section.accent}</em>
              </h2>
            </Reveal>
            <Reveal direction="up">
              <div className="space-y-5">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="text-[14.5px] leading-[1.8] text-ink-soft md:text-[15px]">
                    {paragraph}
                  </p>
                ))}
                {section.bullets && (
                  <div className="divide-y divide-line border-y border-line">
                    {section.bullets.map((item) => (
                      <div key={item} className="flex items-start gap-4 py-4 md:py-5">
                        <span className="mt-0.5 text-blue" aria-hidden="true">
                          &#10003;
                        </span>
                        <p className="text-[14px] leading-[1.7] text-ink-soft md:text-[15px]">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
                {section.links && (
                  <div className="flex flex-wrap gap-x-6 gap-y-3 border-t border-line pt-5 text-[14px] font-semibold">
                    {section.links.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="text-blue underline underline-offset-4"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </Reveal>
          </div>
        </section>
      ))}

      {safety && (
        <section className="bg-white py-8 md:py-12">
          <div className="wrap">
            <Reveal direction="up">
              <div className="rounded-2xl border border-line bg-surface-deep p-6 md:p-8">
                <div className="eyebrow mb-4">When to seek urgent care</div>
                <h2 className="mb-4 font-display text-[clamp(1.8rem,3.5vw,2.5rem)] font-normal leading-[1.1] tracking-[-0.035em] text-ink">
                  Your safety comes <em className="text-blue">first.</em>
                </h2>
                <p className="max-w-[850px] text-[14.5px] leading-[1.8] text-ink-soft">
                  {safety.text}{" "}
                  {safety.emergencyLinks?.map((link, index) => (
                    <span key={link.href}>
                      {index > 0 ? " or " : ""}
                      <a href={link.href} className="font-semibold text-blue underline underline-offset-4">
                        {link.label}
                      </a>
                    </span>
                  ))}
                  {safety.closing ? ` ${safety.closing}` : ""}
                </p>
                {safety.additionalText && (
                  <p className="mt-3 max-w-[850px] text-[14.5px] leading-[1.8] text-ink-soft">
                    {safety.additionalText}{" "}
                    {safety.additionalLinks?.map((link, index) => (
                      <span key={link.href}>
                        {index > 0 ? " or " : ""}
                        <a href={link.href} className="font-semibold text-blue underline underline-offset-4">
                          {link.label}
                        </a>
                      </span>
                    ))}
                    {safety.additionalClosing ? ` ${safety.additionalClosing}` : ""}
                  </p>
                )}
              </div>
            </Reveal>
          </div>
        </section>
      )}

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
              <h2
                aria-label={`${ctaTitle} ${ctaAccent}`}
                className="mb-5 max-w-[760px] font-display text-[clamp(2rem,4vw,3.5rem)] font-normal leading-[1.08] tracking-[-0.04em] text-ink"
              >
                {ctaTitle} <em className="text-blue">{ctaAccent}</em>
              </h2>
              <p className="mb-8 max-w-[640px] text-[16px] leading-[1.75] text-ink-soft md:text-[18px]">
                {ctaDescription}
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
            Information on this site is educational. It does not replace advice from a qualified clinician.
          </p>
        </div>
      </section>
      {showEnquiryForm && <PageEnquirySection />}
    </main>
  );
}
