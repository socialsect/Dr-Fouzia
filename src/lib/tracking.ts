import { siteConfig } from "@/lib/site-config";

export type TrackingEvent =
  | { name: "PageView"; page: string }
  | { name: "WhatsAppClick"; context: string }
  | { name: "Lead"; formVariant: 1 | 2 };

type Handler = (event: TrackingEvent) => void;

const handlers = new Set<Handler>();

/**
 * Register a tracking backend. When siteConfig.metaPixelId is provided,
 * enableMetaPixel() subscribes here — components never need to change.
 */
export function onTrackingEvent(handler: Handler): () => void {
  handlers.add(handler);
  return () => {
    handlers.delete(handler);
  };
}

export function track(event: TrackingEvent): void {
  handlers.forEach((handler) => {
    try {
      handler(event);
    } catch {
      // A failing analytics backend must never break the page.
    }
  });
}

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

function toFbqArgs(event: TrackingEvent): [string, Record<string, unknown>?] {
  switch (event.name) {
    case "PageView":
      return ["PageView"];
    case "WhatsAppClick":
      return ["Contact", { context: event.context }];
    case "Lead":
      return ["Lead", { form_variant: event.formVariant }];
  }
}

/**
 * TODO(meta-pixel): set siteConfig.metaPixelId and every tracked event
 * (PageView, WhatsAppClick → Contact, Lead) is forwarded to the Meta Pixel.
 */
export function enableMetaPixel(pixelId: string): void {
  if (typeof window === "undefined" || window.fbq) return;

  const fbq = function fbq(...args: unknown[]) {
    const w = fbq as unknown as { queue: unknown[][] };
    w.queue.push(args);
  } as { queue?: unknown[][]; (...args: unknown[]): void };
  fbq.queue = [];
  window.fbq = fbq as unknown as typeof window.fbq;

  fbq("init", pixelId);
  fbq("track", "PageView");

  const script = document.createElement("script");
  script.async = true;
  script.src = "https://connect.facebook.net/en_US/fbevents.js";
  document.head.appendChild(script);

  onTrackingEvent((event) => {
    const [eventName, data] = toFbqArgs(event);
    window.fbq?.("track", eventName, data);
  });
}

export function initTracking(): void {
  if (siteConfig.metaPixelId) enableMetaPixel(siteConfig.metaPixelId);
}
