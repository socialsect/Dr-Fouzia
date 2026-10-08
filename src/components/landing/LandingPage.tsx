"use client";

import { LandingProvider } from "@/components/landing/i18n";
import { LandingBootstrap } from "@/components/landing/LandingBootstrap";
import { StickyHeader } from "@/components/landing/StickyHeader";
import { Hero } from "@/components/landing/Hero";
import { SoundFamiliar } from "@/components/landing/SoundFamiliar";
import { Philosophy } from "@/components/landing/Philosophy";
import { Services } from "@/components/landing/Services";
import { WhyPatients } from "@/components/landing/WhyPatients";
import { FirstConsultation } from "@/components/landing/FirstConsultation";
import { VideoWall } from "@/components/landing/VideoWall";
import { Reviews } from "@/components/landing/Reviews";
import { DoctorProfile } from "@/components/landing/DoctorProfile";
import { Faq } from "@/components/landing/Faq";
import { FinalCta } from "@/components/landing/FinalCta";
import { LandingFooter } from "@/components/landing/LandingFooter";
import { StickyBar } from "@/components/landing/StickyBar";

function LandingPageInner() {
  return (
    <>
      <LandingBootstrap />
      <StickyHeader />
      <main>
        <Hero />
        <SoundFamiliar />
        <Philosophy />
        <Services />
        <WhyPatients />
        <FirstConsultation />
        <VideoWall />
        <Reviews />
        <DoctorProfile />
        <Faq />
        <FinalCta />
      </main>
      <LandingFooter />
      <StickyBar />
    </>
  );
}

export function LandingPage() {
  return (
    <LandingProvider>
      <LandingPageInner />
    </LandingProvider>
  );
}
