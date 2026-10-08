import type { Metadata } from "next";
import Link from "next/link";

/**
 * Privacy policy stub — target for the consent links on /consultation
 * (forms cannot reference a page that doesn't exist).
 * TODO(clinic): replace with the clinic-approved privacy policy text.
 */
export const metadata: Metadata = {
  title: "Privacy policy",
  robots: { index: false, follow: false },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto w-[min(720px,92%)] py-20">
      <h1 className="mb-6 text-3xl font-semibold tracking-[-0.02em] text-ink">
        Privacy policy
      </h1>

      <div className="space-y-4 text-[15.5px] leading-[1.7] text-ink-soft">
        <p>
          TODO(clinic): replace this stub with the clinic-approved privacy
          policy before any campaign goes live.
        </p>
        <p>
          At minimum it should cover: what personal data the enquiry form
          collects (name, WhatsApp number, the concern you select and any
          message you write), why it is collected (to contact you about your
          enquiry), how long it is kept, who it is shared with, and how to
          request access or deletion.
        </p>
        <p>The WhatsApp number and other clinic contact details also need to be added here.</p>
      </div>

      <Link href="/consultation" className="mt-10 inline-block text-blue underline underline-offset-4">
        ← Back to the consultation page
      </Link>
    </main>
  );
}
