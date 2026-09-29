import type { Metadata } from "next";
import { Inter, DM_Serif_Display } from "next/font/google";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const dmSerif = DM_Serif_Display({
  weight: "400",
  variable: "--font-dm-serif",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Dr. Fouzia Al Ali — Functional Medicine & Lifestyle | Dubai",
    template: "%s | Dr. Fouzia Al Ali",
  },
  description:
    "Dr. Fouzia Al Ali is a Consultant Family Physician with 26+ years of experience in functional medicine, lifestyle medicine, and holistic healthcare in Dubai, UAE.",
  keywords: [
    "functional medicine Dubai",
    "lifestyle medicine",
    "holistic healthcare",
    "Dr. Fouzia",
    "women's health",
    "gut health",
    "hormonal health",
    "metabolic health",
    "healthy aging",
    "CBT Dubai",
  ],
  openGraph: {
    type: "website",
    locale: "en_AE",
    siteName: "Dr. Fouzia Al Ali",
    title: "Dr. Fouzia Al Ali — Functional Medicine & Lifestyle | Dubai",
    description:
      "Holistic, root-cause care for health and wellbeing. Led by Dr. Fouzia Al Ali, Consultant Family Physician. Dubai, UAE.",
  },
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${dmSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
