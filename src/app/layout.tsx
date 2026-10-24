import type { Metadata } from "next";
import { Inter, DM_Serif_Display } from "next/font/google";
import Script from "next/script";
import { SiteChrome } from "@/components/layout/SiteChrome";
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
    default: "Functional Medicine Doctor Dubai | Dr Fouzia Al Ali",
    template: "%s | Dr. Fouzia Al Ali",
  },
  description:
    "See a functional medicine doctor in Dubai who looks for the cause, not just the symptom. Dr Fouzia, a family physician, offers unhurried care. Book a consult.",
  keywords: [
    "functional medicine doctor Dubai",
    "functional medicine Dubai",
    "family physician Dubai",
    "holistic doctor Dubai",
    "women's health doctor Dubai",
  ],
  openGraph: {
    type: "website",
    locale: "en_AE",
    siteName: "Dr. Fouzia Al Ali",
    title: "Functional Medicine Doctor Dubai | Dr Fouzia Al Ali",
    description:
      "See a functional medicine doctor in Dubai who looks for the cause, not just the symptom. Dr Fouzia, a family physician, offers unhurried care. Book a consult.",
  },
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${dmSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full" suppressHydrationWarning>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-NWRMS6MNS2"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-NWRMS6MNS2');
          `}
        </Script>
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
