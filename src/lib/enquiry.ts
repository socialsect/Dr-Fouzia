import type { CampaignParams } from "@/lib/campaign";

export const concernOptions = [
  { id: "gut", label: "Gut and digestive health" },
  { id: "womens", label: "Women's health" },
  { id: "cbt", label: "CBT for women (Arabic)" },
  { id: "fatigue", label: "Fatigue and brain fog" },
  { id: "aging", label: "Healthy aging" },
  { id: "supplements", label: "Supplement review" },
  { id: "unsure", label: "Not sure yet" },
] as const;

export type ConcernId = (typeof concernOptions)[number]["id"];

export type ConsultationPreference = "in-person" | "online";
export type LanguagePreference = "arabic" | "english";

export interface EnquiryInput {
  name: string;
  phone: string;
  concern: ConcernId | "";
  message?: string;
  consultationPreference?: ConsultationPreference | "";
  languagePreference?: LanguagePreference | "";
  consent: boolean;
  formVariant: 1 | 2;
  pageLanguage: "en" | "ar";
  /** Honeypot field — bots that fill it are silently dropped. */
  honeypot?: string;
  campaign?: CampaignParams;
}

export interface EnquiryPayload extends Omit<EnquiryInput, "phone" | "concern"> {
  phone: string;
  concern: ConcernId;
  receivedAt: string;
}

export type ValidationErrors = Partial<Record<"name" | "phone" | "concern" | "consent", string>>;

export type ValidationResult =
  | { ok: true; data: EnquiryPayload }
  | { ok: false; errors: ValidationErrors };

/**
 * Normalises a phone number to E.164 +971… .
 * Accepts local (05x…), prefixed (+971 / 971 / 00971) and spaced formats.
 */
export function normalisePhone(raw: string): string | null {
  const digits = raw.replace(/\D/g, "");
  if (!digits) return null;
  const local = digits.startsWith("00971")
    ? digits.slice(5)
    : digits.startsWith("971")
      ? digits.slice(3)
      : digits.startsWith("0")
        ? digits.slice(1)
        : digits;
  if (!/^5[024568]\d{7}$/.test(local)) return null;
  return `+971${local}`;
}

export function validateEnquiry(input: EnquiryInput): ValidationResult {
  const name = input.name.trim();
  const phone = normalisePhone(input.phone);

  const invalid =
    name.length < 2 || phone === null || !input.concern || !input.consent;

  if (invalid) {
    const errors: ValidationErrors = {};
    if (name.length < 2) errors.name = "Please enter your full name.";
    if (phone === null)
      errors.phone = "Please enter a valid WhatsApp number (e.g. 050 123 4567).";
    if (!input.concern)
      errors.concern = "Please choose what you'd like help with.";
    if (!input.consent)
      errors.consent = "Please agree to be contacted about your enquiry.";
    return { ok: false, errors };
  }

  return {
    ok: true,
    data: {
      ...input,
      name,
      phone,
      concern: input.concern as ConcernId,
      message: input.message?.trim() || undefined,
      consultationPreference: input.consultationPreference || undefined,
      languagePreference: input.languagePreference || undefined,
      honeypot: undefined,
      receivedAt: new Date().toISOString(),
    },
  };
}

export type SubmitResult = { ok: true } | { ok: false; error: string };

/**
 * Client-side submission entry point.
 * The notification backend is intentionally NOT wired yet — see
 * src/app/api/enquiry/route.ts (notifyFrontDesk stub).
 */
export async function submitEnquiry(input: EnquiryInput): Promise<SubmitResult> {
  try {
    const res = await fetch("/api/enquiry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(input),
    });
    if (!res.ok) return { ok: false, error: "Request failed" };
    const body = (await res.json()) as { ok?: boolean };
    return body.ok ? { ok: true } : { ok: false, error: "Rejected" };
  } catch {
    return { ok: false, error: "Network error" };
  }
}
