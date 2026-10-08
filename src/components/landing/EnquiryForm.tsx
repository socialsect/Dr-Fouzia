"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { useLanding } from "@/components/landing/i18n";
import { WhatsAppButton } from "@/components/landing/WhatsAppButton";
import {
  concernOptions,
  submitEnquiry,
  validateEnquiry,
  type ConcernId,
  type ConsultationPreference,
  type EnquiryInput,
  type LanguagePreference,
  type ValidationErrors,
} from "@/lib/enquiry";
import { captureCampaignParams } from "@/lib/campaign";
import { track } from "@/lib/tracking";
import { siteConfig } from "@/lib/site-config";

interface EnquiryFormProps {
  variant: 1 | 2;
}

const fieldClass =
  "w-full rounded-xl border border-line bg-white px-4 py-3 text-[16px] text-ink outline-none transition-all placeholder:text-muted/70 focus:border-blue focus:ring-4 focus:ring-blue/10";

const labelClass = "mb-1.5 block text-[13px] font-medium text-ink";

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} role="alert" className="mt-1.5 text-[12.5px] font-medium text-danger">
      {message}
    </p>
  );
}

function PillToggle<T extends string>({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: readonly { id: T; label: string }[];
  value: T | "";
  onChange: (value: T | "") => void;
}) {
  return (
    <fieldset>
      <legend className={labelClass}>{label}</legend>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => {
          const active = value === opt.id;
          return (
            <button
              key={opt.id}
              type="button"
              aria-pressed={active}
              onClick={() => onChange(active ? "" : opt.id)}
              className={`rounded-full border px-4 py-2 text-[13.5px] font-medium transition-all duration-300 ${
                active
                  ? "border-blue bg-blue text-white shadow-blue"
                  : "border-line bg-white text-ink hover:border-blue hover:text-blue"
              }`}
            >
              {opt.label}
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}

export function EnquiryForm({ variant }: EnquiryFormProps) {
  const { copy, lang } = useLanding();
  const f = copy.forms;

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [concern, setConcern] = useState<ConcernId | "">("");
  const [message, setMessage] = useState("");
  const [consultation, setConsultation] = useState<ConsultationPreference | "">("");
  const [language, setLanguage] = useState<LanguagePreference | "">("");
  const [consent, setConsent] = useState(false);
  const [honeypot, setHoneypot] = useState("");
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [formError, setFormError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const id = (field: string) => `f${variant}-${field}`;

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormError("");

    const input: EnquiryInput = {
      name,
      phone,
      concern,
      message: variant === 2 ? message : undefined,
      consultationPreference: variant === 2 ? consultation : undefined,
      languagePreference: variant === 2 ? language : undefined,
      consent,
      formVariant: variant,
      pageLanguage: lang,
      honeypot,
      campaign: captureCampaignParams(),
    };

    const result = validateEnquiry(input);
    if (!result.ok) {
      setErrors(result.errors);
      const firstKey = Object.keys(result.errors)[0] as
        | "name"
        | "phone"
        | "concern"
        | "consent"
        | undefined;
      if (firstKey) document.getElementById(id(firstKey))?.focus();
      return;
    }
    setErrors({});

    setSubmitting(true);
    const submitted = await submitEnquiry(input);
    setSubmitting(false);

    if (submitted.ok) {
      track({ name: "Lead", formVariant: variant });
      setSuccess(true);
    } else {
      setFormError(f.errorFallback);
    }
  }

  if (success) {
    return (
      <div
        id={`enquiry-form-${variant}`}
        className="scroll-mt-28 rounded-[var(--radius)] border border-line bg-white p-6 shadow-[var(--shadow-far)] md:p-8"
      >
        <div className="mb-4 grid h-12 w-12 place-items-center rounded-full bg-whatsapp/10 text-whatsapp-deep">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </div>
        <p className="mb-5 text-[17px] font-medium leading-[1.5] text-ink" role="status">
          {f.success}
        </p>
        <WhatsAppButton
          message={f.successWaMessage}
          context="form-success"
          className="w-full justify-center sm:w-auto"
        >
          {f.successCta}
        </WhatsAppButton>
      </div>
    );
  }

  return (
    <div
      id={`enquiry-form-${variant}`}
      className="scroll-mt-28 rounded-[var(--radius)] border border-line bg-white p-6 shadow-[var(--shadow-far)] md:p-8"
    >
      {variant === 1 ? (
        <h2 className="mb-5 text-[19px] font-semibold tracking-[-0.01em] text-ink md:text-[20px]">
          {f.f1Title}
        </h2>
      ) : null}

      <form noValidate onSubmit={handleSubmit}>
        {/* Honeypot — visually hidden (sr-only pattern; never uses off-screen
            coordinates, which would expand the scroll area in RTL). */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            width: "1px",
            height: "1px",
            padding: 0,
            margin: "-1px",
            overflow: "hidden",
            clip: "rect(0 0 0 0)",
            whiteSpace: "nowrap",
            border: 0,
          }}
        >
          <label htmlFor={id("company")}>Company</label>
          <input
            id={id("company")}
            name="company"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className={labelClass} htmlFor={id("name")}>
            {f.name}
          </label>
          <input
            id={id("name")}
            name="name"
            type="text"
            autoComplete="name"
            className={fieldClass}
            value={name}
            onChange={(e) => setName(e.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? id("name-error") : undefined}
          />
          <FieldError id={id("name-error")} message={errors.name} />
        </div>

        <div className="mb-4">
          <label className={labelClass} htmlFor={id("phone")}>
            {f.phone}
          </label>
          <div className="relative">
            <span
              dir="ltr"
              className="pointer-events-none absolute start-4 top-1/2 -translate-y-1/2 text-[14px] font-medium text-muted"
            >
              +971
            </span>
            <input
              id={id("phone")}
              name="phone"
              type="tel"
              inputMode="tel"
              dir="ltr"
              autoComplete="tel"
              placeholder="5X XXX XXXX"
              className={`${fieldClass} ps-16`}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              aria-invalid={Boolean(errors.phone)}
              aria-describedby={errors.phone ? id("phone-error") : undefined}
            />
          </div>
          <FieldError id={id("phone-error")} message={errors.phone} />
        </div>

        <div className="mb-4">
          <label className={labelClass} htmlFor={id("concern")}>
            {f.concernLabel}
          </label>
          <div className="relative">
            <select
              id={id("concern")}
              name="concern"
              className={`${fieldClass} appearance-none pe-10`}
              value={concern}
              onChange={(e) => setConcern(e.target.value as ConcernId | "")}
              aria-invalid={Boolean(errors.concern)}
              aria-describedby={errors.concern ? id("concern-error") : undefined}
            >
              <option value="">{f.concernPlaceholder}</option>
              {concernOptions.map((opt) => (
                <option key={opt.id} value={opt.id}>
                  {opt.label}
                </option>
              ))}
            </select>
            <span className="pointer-events-none absolute end-3.5 top-1/2 -translate-y-1/2 text-muted">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m6 9 6 6 6-6" />
              </svg>
            </span>
          </div>
          <FieldError id={id("concern-error")} message={errors.concern} />
        </div>

        {concern === "cbt" ? (
          <p className="mb-4 rounded-xl bg-sky-light px-4 py-3 text-[13px] leading-[1.6] text-ink-soft">
            {f.cbtNote}
          </p>
        ) : null}

        {variant === 2 ? (
          <>
            <div className="mb-4">
              <label className={labelClass} htmlFor={id("message")}>
                {f.messageLabel}{" "}
                <span className="font-normal text-muted">({f.optional})</span>
              </label>
              <textarea
                id={id("message")}
                name="message"
                rows={2}
                placeholder={f.messagePlaceholder}
                className={`${fieldClass} resize-none`}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <PillToggle<ConsultationPreference>
                label={f.consultationLabel}
                options={f.consultationOptions as readonly {
                  id: ConsultationPreference;
                  label: string;
                }[]}
                value={consultation}
                onChange={setConsultation}
              />
            </div>

            <div className="mb-4">
              <PillToggle<LanguagePreference>
                label={f.languageLabel}
                options={f.languageOptions as readonly {
                  id: LanguagePreference;
                  label: string;
                }[]}
                value={language}
                onChange={setLanguage}
              />
            </div>
          </>
        ) : null}

        <div className="mb-5">
          <div className="flex items-start gap-3">
            <input
              id={id("consent")}
              name="consent"
              type="checkbox"
              className="mt-0.5 h-[18px] w-[18px] shrink-0 accent-blue"
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              aria-invalid={Boolean(errors.consent)}
              aria-describedby={errors.consent ? id("consent-error") : undefined}
            />
            <label htmlFor={id("consent")} className="text-[13px] leading-[1.55] text-ink-soft">
              {f.consent}{" "}
              <Link
                href={siteConfig.privacyPolicyPath}
                className="font-medium text-blue underline underline-offset-2"
              >
                {f.privacyLink}
              </Link>
              .
            </label>
          </div>
          <FieldError id={id("consent-error")} message={errors.consent} />
        </div>

        {formError ? (
          <p role="alert" className="mb-4 text-[13px] font-medium text-danger">
            {formError}
          </p>
        ) : null}

        <button
          type="submit"
          disabled={submitting}
          className="btn btn-primary w-full justify-center disabled:pointer-events-none"
        >
          {submitting ? "…" : variant === 1 ? f.f1Submit : f.f2Submit}
        </button>

        {variant === 1 ? (
          <p className="mt-3 text-center text-[12.5px] leading-[1.5] text-muted">
            {f.f1Micro}
          </p>
        ) : null}
      </form>
    </div>
  );
}
