"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { useState } from "react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

const contactMethods = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16.92z" />
      </svg>
    ),
    label: "Phone",
    value: "Al Borj Medical Center, Dubai",
    sub: "Call the clinic for appointments",
    href: null,
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    label: "WhatsApp",
    value: "Chat with the clinic team",
    sub: "Fastest way to reach us",
    href: buildWhatsAppUrl(""),
    external: true,
    cta: "Open WhatsApp",
    ctaStyle: "whatsapp",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
    label: "Instagram",
    value: "@drfouziaalali",
    sub: "Health tips, updates and patient stories",
    href: "https://instagram.com/drfouziaalali",
    external: true,
    cta: "Follow on Instagram",
    ctaStyle: "ghost",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    label: "Location",
    value: "Al Borj Medical Center",
    sub: "Dubai, UAE — In person & online consultations",
    href: "https://maps.google.com/?q=Al+Borj+Medical+Center+Dubai",
    external: true,
    cta: "Open in Maps",
    ctaStyle: "ghost",
  },
];

const faqs = [
  {
    q: "How do I book a first consultation?",
    a: "The easiest way is via WhatsApp — message the clinic team and they will find a time that works for you. You can also fill in the enquiry form above.",
  },
  {
    q: "Are consultations available online?",
    a: "Yes. Both functional medicine consultations and CBT sessions are available online, wherever you are.",
  },
  {
    q: "How long does a first appointment take?",
    a: "Around 60 minutes. The extra time lets Dr. Fouzia go through your full history, symptoms, medications, supplements, nutrition and sleep — not just the headline concern.",
  },
  {
    q: "How quickly will someone reply?",
    a: "WhatsApp messages are answered the same working day. Form enquiries are also handled within the same working day.",
  },
];

const concerns = [
  "Gut and digestive health",
  "Women's hormonal health",
  "CBT for women (Arabic)",
  "Fatigue and brain fog",
  "Healthy aging",
  "Supplement review",
  "Not sure yet",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [form, setForm] = useState({
    name: "",
    whatsapp: "+971 ",
    concern: "",
    message: "",
    consent: false,
  });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="bg-white">
      {/* ── Hero ── */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-surface-deep">
        <div className="wrap">
          <Reveal direction="left">
            <div className="eyebrow mb-5">Get in touch</div>
          </Reveal>
          <Reveal direction="left" delay={100}>
            <h1
              className="mb-6 max-w-[820px] font-display font-normal leading-[1.04] tracking-[-0.045em] text-ink"
              style={{ fontSize: "clamp(var(--step-4), 6vw, var(--step-6))" }}
            >
              We&rsquo;re here when{" "}
              <em className="text-blue">you&rsquo;re ready.</em>
            </h1>
          </Reveal>
          <Reveal direction="up" delay={180}>
            <p className="max-w-[560px] text-[16px] leading-[1.8] text-ink-soft md:text-[18px]">
              Message the clinic team on WhatsApp for the fastest response, or
              fill in the form and we&rsquo;ll get back to you the same working
              day.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Contact methods + Form ── */}
      <section className="py-16 md:py-24">
        <div className="wrap">
          <div className="grid gap-12 md:grid-cols-[1fr_1.2fr] md:gap-16 lg:gap-24">

            {/* Left — contact cards */}
            <div className="flex flex-col gap-4">
              <Reveal direction="left">
                <h2 className="mb-2 font-display text-[clamp(1.6rem,3vw,2.4rem)] font-normal leading-[1.15] tracking-[-0.03em] text-ink">
                  Ways to reach us
                </h2>
                <p className="mb-8 text-[15px] leading-[1.7] text-ink-soft">
                  WhatsApp is the quickest. Our team typically responds within a
                  few hours during clinic hours.
                </p>
              </Reveal>

              {contactMethods.map((method, i) => (
                <Reveal key={method.label} direction="left" delay={i * 60}>
                  <div className="group flex gap-4 rounded-2xl border border-line bg-white p-5 transition-all duration-300 hover:border-blue/30 hover:shadow-[var(--shadow-far)]">
                    <span className="mt-0.5 flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-surface-deep text-blue">
                      {method.icon}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="text-[11px] font-semibold uppercase tracking-[0.1em] text-muted mb-1">
                        {method.label}
                      </div>
                      <div className="text-[15px] font-semibold text-ink leading-snug">
                        {method.value}
                      </div>
                      <div className="text-[13px] text-ink-soft mt-0.5">
                        {method.sub}
                      </div>
                      {method.cta && method.href && (
                        <Link
                          href={method.href}
                          {...(method.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                          className={`mt-3 inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-[12.5px] font-semibold transition-all duration-200 ${
                            method.ctaStyle === "whatsapp"
                              ? "bg-whatsapp text-white hover:bg-whatsapp-deep"
                              : "border border-line text-blue hover:border-blue"
                          }`}
                        >
                          {method.cta}
                          <span aria-hidden="true">↗</span>
                        </Link>
                      )}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Right — enquiry form */}
            <Reveal direction="right" delay={100}>
              <div>
                <div className="rounded-2xl border border-line bg-white p-6 shadow-[var(--shadow-far)] md:p-8">
                  {submitted ? (
                    <div className="flex flex-col items-center gap-4 py-10 text-center">
                    <span className="flex h-14 w-14 items-center justify-center rounded-full bg-surface-deep text-blue">
                      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                      </svg>
                    </span>
                    <h3 className="font-display text-[1.6rem] font-normal tracking-[-0.02em] text-ink">
                      Message received
                    </h3>
                    <p className="max-w-[340px] text-[15px] leading-[1.7] text-ink-soft">
                      Thank you. Our team will contact you on WhatsApp the same
                      working day.
                    </p>
                    <Link
                      href={buildWhatsAppUrl("")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-whatsapp mt-2"
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.564 4.14 1.534 5.881L0 24l6.291-1.516A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 0 1-5.007-1.374l-.36-.213-3.732.899.937-3.617-.234-.373A9.818 9.818 0 0 1 12 2.182c5.42 0 9.818 4.398 9.818 9.818 0 5.421-4.398 9.818-9.818 9.818z"/>
                      </svg>
                      Chat on WhatsApp now
                    </Link>
                    </div>
                  ) : (
                    <>
                      <div className="mb-6">
                        <h2 className="font-display text-[1.6rem] font-normal leading-[1.15] tracking-[-0.03em] text-ink">
                          Send an enquiry
                        </h2>
                        <p className="mt-1 text-[14px] text-ink-soft">
                          We reply the same working day.
                        </p>
                      </div>

                      <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
                      {/* Name */}
                      <div>
                        <label htmlFor="contact-name" className="mb-1.5 block text-[13px] font-semibold text-ink">
                          Full name <span className="text-danger">*</span>
                        </label>
                        <input
                          id="contact-name"
                          type="text"
                          required
                          placeholder="Your name"
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className="w-full rounded-xl border border-line bg-white px-4 py-3 text-[14px] text-ink placeholder:text-muted-light outline-none transition-all focus:border-blue focus:ring-2 focus:ring-blue/10"
                        />
                      </div>

                      {/* WhatsApp */}
                      <div>
                        <label htmlFor="contact-wa" className="mb-1.5 block text-[13px] font-semibold text-ink">
                          WhatsApp number <span className="text-danger">*</span>
                        </label>
                        <input
                          id="contact-wa"
                          type="tel"
                          required
                          placeholder="+971 50 000 0000"
                          value={form.whatsapp}
                          onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
                          className="w-full rounded-xl border border-line bg-white px-4 py-3 text-[14px] text-ink placeholder:text-muted-light outline-none transition-all focus:border-blue focus:ring-2 focus:ring-blue/10"
                        />
                      </div>

                      {/* Concern */}
                      <div>
                        <label htmlFor="contact-concern" className="mb-1.5 block text-[13px] font-semibold text-ink">
                          What would you like help with?
                        </label>
                        <select
                          id="contact-concern"
                          value={form.concern}
                          onChange={(e) => setForm({ ...form, concern: e.target.value })}
                          className="w-full rounded-xl border border-line bg-white px-4 py-3 text-[14px] text-ink outline-none transition-all focus:border-blue focus:ring-2 focus:ring-blue/10 appearance-none"
                          style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%235A7A8E' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E\")", backgroundRepeat: "no-repeat", backgroundPosition: "right 16px center" }}
                        >
                          <option value="">Select an area</option>
                          {concerns.map((c) => (
                            <option key={c} value={c}>{c}</option>
                          ))}
                        </select>
                        {form.concern === "CBT for women (Arabic)" && (
                          <p className="mt-1.5 text-[12px] text-ink-soft">
                            CBT sessions are one-to-one, in Arabic, for women.
                          </p>
                        )}
                      </div>

                      {/* Message */}
                      <div>
                        <label htmlFor="contact-message" className="mb-1.5 block text-[13px] font-semibold text-ink">
                          Briefly, what are you experiencing? <span className="text-[11px] font-normal text-muted">(optional)</span>
                        </label>
                        <textarea
                          id="contact-message"
                          rows={3}
                          placeholder="e.g. constant bloating for a few months"
                          value={form.message}
                          onChange={(e) => setForm({ ...form, message: e.target.value })}
                          className="w-full rounded-xl border border-line bg-white px-4 py-3 text-[14px] text-ink placeholder:text-muted-light outline-none transition-all focus:border-blue focus:ring-2 focus:ring-blue/10 resize-none"
                        />
                      </div>

                      {/* Consent */}
                      <label className="flex cursor-pointer items-start gap-3">
                        <input
                          type="checkbox"
                          required
                          checked={form.consent}
                          onChange={(e) => setForm({ ...form, consent: e.target.checked })}
                          className="mt-0.5 h-4 w-4 flex-shrink-0 rounded border-line accent-blue"
                        />
                        <span className="text-[12.5px] leading-[1.65] text-ink-soft">
                          I agree to be contacted by Dr. Fouzia&rsquo;s clinic team about my
                          enquiry.{" "}
                          <Link href="/privacy-policy" className="text-blue hover:underline">
                            Privacy policy
                          </Link>
                          .
                        </span>
                      </label>

                      <button
                        type="submit"
                        className="btn btn-primary w-full justify-center mt-1"
                      >
                        Send my enquiry
                      </button>
                      <p className="text-center text-[12px] text-muted">
                        Our team will reply on WhatsApp the same working day.
                      </p>
                      </form>
                    </>
                  )}
                </div>

              </div>
            </Reveal>
          </div>

          {/* Map — a standalone full-width section keeps the layout balanced. */}
          <Reveal direction="up" delay={180}>
            <div className="mt-12 overflow-hidden rounded-2xl border border-line bg-white shadow-[var(--shadow-far)] md:mt-16">
              <div className="p-6 pb-5 md:p-8 md:pb-6">
                <div className="eyebrow mb-3">Find the clinic</div>
                <h2 className="font-display text-[1.7rem] font-normal leading-[1.15] tracking-[-0.03em] text-ink md:text-[2.1rem]">
                  Al Borj Medical Center
                </h2>
                <p className="mt-2 text-[14px] leading-[1.65] text-ink-soft md:text-[15px]">
                  Dubai, UAE — in-person consultations are available here.
                </p>
              </div>
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-surface-deep md:aspect-[2.5/1]">
                <iframe
                  title="Map showing Al Borj Medical Center in Dubai"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4319.920568344681!2d55.26293967538186!3d25.199222477709696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f430034064a5f%3A0xfca8fd41f57f3a0!2sDr.Fawezya%20Al%20ALi%20%7C%20Non-Surgical%20Cosmetic%20Treatment%20%7C%20Skin%20Health%20%7C%20Preventive%20Services%20%7C%20General%20Medicine!5e1!3m2!1sen!2sin!4v1793012471730!5m2!1sen!2sin"
                  className="absolute inset-0 h-full w-full border-0"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </div>
            </div>
          </Reveal>

          {/* Clinic hours — kept separate from the contact cards so the map can
              follow it as its own information section. */}
          <Reveal direction="up" delay={240}>
            <div className="mt-12 rounded-2xl bg-surface-deep p-6 md:mt-16 md:p-8">
              <div className="grid gap-6 md:grid-cols-[0.8fr_1.2fr] md:items-center md:gap-12">
                <div>
                  <div className="eyebrow mb-3">Clinic hours</div>
                  <h2 className="font-display text-[1.7rem] font-normal leading-[1.15] tracking-[-0.03em] text-ink md:text-[2rem]">
                    Plan your visit
                  </h2>
                  <div className="mt-4 flex items-center gap-2 text-[12px] text-muted">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue opacity-60" />
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-blue" />
                    </span>
                    Accepting new patients
                  </div>
                </div>
                <div className="grid gap-2 text-[14px] sm:grid-cols-3 sm:gap-4">
                  {[
                    ["Sunday – Thursday", "9:00 am – 6:00 pm"],
                    ["Friday", "By appointment"],
                    ["Saturday", "Closed"],
                  ].map(([day, time]) => (
                    <div key={day} className="rounded-xl border border-line/70 bg-white/60 px-4 py-3">
                      <span className="block text-ink-soft">{day}</span>
                      <span className="mt-1 block font-medium text-ink">{time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-surface-deep py-16 md:py-20">
        <div className="wrap-narrow">
          <Reveal direction="up">
            <div className="mb-10">
              <div className="eyebrow mb-4">Common questions</div>
              <h2 className="font-display text-[clamp(1.8rem,3.5vw,3rem)] font-normal leading-[1.1] tracking-[-0.035em] text-ink">
                Before you get in touch.
              </h2>
            </div>
          </Reveal>
          <div className="divide-y divide-line border-y border-line">
            {faqs.map((faq, i) => (
              <Reveal key={faq.q} direction="up" delay={(i % 3) * 50}>
                <div>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="flex w-full cursor-pointer items-center justify-between gap-5 py-5 text-left"
                    aria-expanded={openFaq === i}
                  >
                    <span className="text-[15px] font-semibold text-ink">{faq.q}</span>
                    <span
                      className="grid h-8 w-8 flex-shrink-0 place-items-center rounded-full border border-line text-blue transition-transform duration-300"
                      style={{ transform: openFaq === i ? "rotate(45deg)" : "rotate(0deg)" }}
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </button>
                  {openFaq === i && (
                    <p className="pb-5 pr-10 text-[14.5px] leading-[1.75] text-ink-soft">
                      {faq.a}
                    </p>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="bg-white py-16 md:py-24">
        <div className="wrap">
          <Reveal direction="up">
            <div className="rounded-2xl border border-line bg-surface-deep px-6 py-10 md:px-12 md:py-14">
              <div className="eyebrow mb-5">Ready when you are</div>
              <h2 className="mb-4 max-w-[680px] font-display text-[clamp(2rem,4vw,3.5rem)] font-normal leading-[1.08] tracking-[-0.04em] text-ink">
                Talk to a doctor who has time to{" "}
                <em className="text-blue">listen.</em>
              </h2>
              <p className="mb-8 max-w-[520px] text-[16px] leading-[1.75] text-ink-soft">
                Whether you prefer a WhatsApp chat or a full consultation, we
                will help you find the right starting point.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href={buildWhatsAppUrl("")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.564 4.14 1.534 5.881L0 24l6.291-1.516A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 0 1-5.007-1.374l-.36-.213-3.732.899.937-3.617-.234-.373A9.818 9.818 0 0 1 12 2.182c5.42 0 9.818 4.398 9.818 9.818 0 5.421-4.398 9.818-9.818 9.818z"/>
                  </svg>
                  Chat on WhatsApp
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
