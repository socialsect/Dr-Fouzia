import type { Metadata } from "next";
import { LandingPage } from "@/components/landing/LandingPage";

/**
 * Meta-ad campaign landing page (brief §2 flow A–M).
 * Noindex: paid traffic only — keep search engines on the homepage.
 */
export const metadata: Metadata = {
  title: "Dr. Fouzia Al Ali — Consultation",
  description:
    "Personalized care for gut health, women's health, fatigue and stress, plus one-to-one CBT for women in Arabic. In person in Dubai or online.",
  robots: { index: false, follow: false },
};

export default function ConsultationPage() {
  return <LandingPage />;
}
