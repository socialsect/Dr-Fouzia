"use client";

import { useEffect } from "react";
import { captureCampaignParams } from "@/lib/campaign";
import { initTracking, track } from "@/lib/tracking";

/**
 * Mount-once helpers for the landing page: campaign capture + PageView.
 */
export function LandingBootstrap() {
  useEffect(() => {
    captureCampaignParams();
    initTracking();
    track({ name: "PageView", page: "consultation" });
  }, []);

  return null;
}
