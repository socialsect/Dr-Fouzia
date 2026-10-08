export const siteConfig = {
  /**
   * Front-desk WhatsApp number in international format without "+" or spaces.
   * Example: "971501234567"
   * TODO(clinic): REQUIRED before launch — every WhatsApp CTA on the
   * landing page resolves through this single value.
   */
  whatsappNumber: "",

  instagramUrl: "https://instagram.com/drfouziaalali",
  // TODO(clinic): brief section M lists "@dr.fouziaalali" while the live site
  // uses "drfouziaalali". Confirm the correct handle before launch.

  privacyPolicyPath: "/privacy-policy",

  clinic: {
    name: "Al Borj Medical Center",
    city: "Dubai",
    // TODO(clinic): street address, map link, opening hours, phone number —
    // brief section M marks all of these as bracketed placeholders.
    address: null as string | null,
    mapUrl: null as string | null,
    openingHours: null as string | null,
    phone: null as string | null,
    // TODO(clinic): DHA licence / advertising permit number, if required.
    dhaLicence: null as string | null,
  },

  /**
   * TODO(meta-pixel): Meta Pixel ID. When set, PageView / WhatsAppClick /
   * Lead events are forwarded to the Meta Pixel automatically.
   */
  metaPixelId: null as string | null,
};
