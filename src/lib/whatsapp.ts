import { siteConfig } from "@/lib/site-config";

/**
 * Builds a wa.me deep link with a pre-filled message.
 * The number comes from the single central config value.
 */
export function buildWhatsAppUrl(message: string): string {
  const number = siteConfig.whatsappNumber.replace(/\D/g, "");
  const base = number ? `https://wa.me/${number}` : "https://wa.me/";
  const text = message.trim();
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}
