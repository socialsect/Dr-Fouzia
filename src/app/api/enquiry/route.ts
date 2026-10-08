import { validateEnquiry, type EnquiryInput, type EnquiryPayload } from "@/lib/enquiry";

export const runtime = "nodejs";

/**
 * TODO(security): add per-IP rate limiting here once the notification
 * backend is decided. Architecture is ready — no CAPTCHA by design.
 */
async function checkRateLimit(): Promise<boolean> {
  return true;
}

/**
 * TODO(clinic): the enquiry destination has NOT been decided yet.
 * Connect one of the following without touching any component:
 *  - WhatsApp Cloud API → front desk
 *  - Email (Resend / SMTP) → front desk inbox
 *  - CRM / form service webhook
 *
 * Until then, enquiries are validated and acknowledged but not delivered.
 * Do NOT log PII in production.
 */
async function notifyFrontDesk(enquiry: EnquiryPayload): Promise<void> {
  if (process.env.NODE_ENV !== "production") {
    console.info("[enquiry] received (delivery not yet configured):", {
      name: enquiry.name,
      phone: enquiry.phone,
      concern: enquiry.concern,
      formVariant: enquiry.formVariant,
      campaign: enquiry.campaign,
    });
  }
}

export async function POST(request: Request): Promise<Response> {
  const allowed = await checkRateLimit();
  if (!allowed) {
    return Response.json({ ok: false, error: "Too many requests" }, { status: 429 });
  }

  let input: EnquiryInput;
  try {
    input = (await request.json()) as EnquiryInput;
  } catch {
    return Response.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  // Honeypot: pretend success, deliver nothing.
  if (input.honeypot) {
    return Response.json({ ok: true });
  }

  const result = validateEnquiry(input);
  if (!result.ok) {
    return Response.json({ ok: false, errors: result.errors }, { status: 422 });
  }

  await notifyFrontDesk(result.data);

  return Response.json({ ok: true });
}
