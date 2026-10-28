"use client";

import { Reveal } from "@/components/ui/Reveal";
import { LandingProvider, useLanding } from "@/components/landing/i18n";
import { EnquiryForm } from "@/components/landing/EnquiryForm";
import { WhatsAppButton } from "@/components/landing/WhatsAppButton";

const nextSteps = [
  {
    title: "Share your details",
    text: "Tell us what you would like help with. It takes about a minute.",
  },
  {
    title: "We reply the same working day",
    text: "The clinic team will message you on WhatsApp to find a time that suits you.",
  },
  {
    title: "Meet Dr. Fouzia",
    text: "A longer first visit, in person in Dubai or online, so nothing gets rushed.",
  },
];

const clinicDetails = [
  ["Clinic", "Al Borj Medical Center, Dubai"],
  ["Consultations", "In person or online"],
  ["Hours", "Sun – Thu, 9:00 am – 6:00 pm"],
];

function PageEnquirySectionInner() {
  const { copy } = useLanding();
  const c = copy.finalCta;

  return (
    <section
      id="enquiry"
      className="scroll-mt-24 bg-gradient-to-br from-sky-light via-white to-white py-16 md:py-24"
    >
      <div className="wrap">
        <div className="grid gap-10 md:grid-cols-[1fr_0.9fr] md:gap-14 lg:gap-20">
          <div className="flex flex-col">
            <Reveal direction="up">
              <div className="eyebrow mb-5">Get in touch</div>
              <h2
                className="mb-5 font-display font-normal leading-[1.08] tracking-[-0.04em] text-ink"
                style={{ fontSize: "clamp(var(--step-3), 3.8vw, var(--step-5))" }}
              >
                {c.heading}
              </h2>
            </Reveal>
            <Reveal direction="up" delay={100}>
              <p className="mb-8 max-w-[520px] text-[16px] leading-[1.65] text-ink-soft">
                {c.sub}
              </p>
            </Reveal>
            <Reveal direction="up" delay={180}>
              <WhatsAppButton
                message={c.waMessage}
                context="page-enquiry-section"
                className="justify-center sm:justify-start"
              >
                {c.whatsappCta}
              </WhatsAppButton>
            </Reveal>

            <Reveal direction="up" delay={240}>
              <div className="mt-10 border-t border-line pt-8">
                <div className="mb-5 text-[11px] font-semibold uppercase tracking-[0.1em] text-muted">
                  What happens next
                </div>
                <ol className="space-y-5">
                  {nextSteps.map((step, i) => (
                    <li key={step.title} className="flex items-start gap-4">
                      <span className="grid h-9 w-9 flex-shrink-0 place-items-center rounded-full border border-line bg-white font-display text-[16px] text-blue">
                        {i + 1}
                      </span>
                      <div>
                        <div className="text-[15px] font-semibold text-ink">{step.title}</div>
                        <p className="mt-0.5 text-[14px] leading-[1.6] text-ink-soft">{step.text}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>

            <Reveal direction="up" delay={300}>
              <div className="mt-8 rounded-2xl border border-line bg-white/70 p-5 md:mt-auto">
                <dl className="space-y-2.5 text-[14px]">
                  {clinicDetails.map(([label, value]) => (
                    <div key={label} className="flex items-baseline justify-between gap-4">
                      <dt className="text-ink-soft">{label}</dt>
                      <dd className="text-right font-medium text-ink">{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Reveal>
          </div>

          <Reveal direction="up" delay={150}>
            <EnquiryForm variant={2} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/**
 * Enquiry form section for the bottom of content pages.
 * Reuses the landing-page form (same validation, /api/enquiry, tracking),
 * wrapped in its own provider so it works outside LandingPage.
 */
export function PageEnquirySection() {
  return (
    <LandingProvider>
      <PageEnquirySectionInner />
    </LandingProvider>
  );
}
