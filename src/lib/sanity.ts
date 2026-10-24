import { createClient } from "@sanity/client";

export const sanity = createClient({
  // Fallback keeps import-time safe until the project ID is set; fetches then fail and pages degrade.
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "unconfigured",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2025-05-30",
  useCdn: false,
});
