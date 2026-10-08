export interface CampaignParams {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
  fbclid?: string;
  gclid?: string;
}

const STORAGE_KEY = "lp_campaign_params";

const PARAM_KEYS: (keyof CampaignParams)[] = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "fbclid",
  "gclid",
];

function readFromLocation(): CampaignParams {
  if (typeof window === "undefined") return {};
  const params = new URLSearchParams(window.location.search);
  const captured: CampaignParams = {};
  for (const key of PARAM_KEYS) {
    const value = params.get(key);
    if (value) captured[key] = value;
  }
  return captured;
}

/**
 * Captures UTM/fbclid/gclid from the landing URL and keeps them in
 * sessionStorage so they survive the visitor's journey through the page.
 * Nothing is transmitted anywhere until a form backend is connected.
 */
export function captureCampaignParams(): CampaignParams {
  if (typeof window === "undefined") return {};
  try {
    const fromUrl = readFromLocation();
    const existing = getCampaignParams();
    const merged = { ...existing, ...fromUrl };
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
    return merged;
  } catch {
    return readFromLocation();
  }
}

export function getCampaignParams(): CampaignParams {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.sessionStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as CampaignParams) : {};
  } catch {
    return {};
  }
}
