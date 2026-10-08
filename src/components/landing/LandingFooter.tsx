"use client";

import Link from "next/link";
import { useLanding } from "@/components/landing/i18n";
import { siteConfig } from "@/lib/site-config";

export function LandingFooter() {
  const { copy } = useLanding();
  const f = copy.footer;

  return (
    <footer className="border-t border-line bg-white pb-24 pt-12 md:pb-12 md:pt-16">
      <div className="wrap">
        <div className="grid gap-8 border-b border-line pb-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.08em] text-muted">
              {f.detailsLabel}
            </p>
            <p className="text-[14px] font-medium text-ink">{f.clinicLine}</p>
            {/* TODO(clinic): address, hours, phone — brief §M */}
            <p className="mt-2 text-[13px] leading-[1.6] text-muted">
              {f.addressTODO}
              <br />
              {f.hoursTODO}
              <br />
              {f.phoneTODO}
            </p>
          </div>

          <div>
            <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.08em] text-muted">
              Follow
            </p>
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[14px] text-ink underline-offset-4 hover:text-blue hover:underline"
            >
              {f.instagramLabel}
            </a>
          </div>

          <div>
            <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.08em] text-muted">
              Legal
            </p>
            <Link
              href={siteConfig.privacyPolicyPath}
              className="text-[14px] text-ink underline-offset-4 hover:text-blue hover:underline"
            >
              {f.privacyLabel}
            </Link>
          </div>

          <div>
            <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.08em] text-muted">
              Licence
            </p>
            <p className="text-[13px] leading-[1.6] text-muted">{f.licenceTODO}</p>
          </div>
        </div>

        <p className="border-b border-line py-6 text-[12.5px] leading-[1.65] text-muted">
          <span className="font-semibold text-ink-soft">{f.disclaimerLabel}:</span>{" "}
          {f.disclaimer}
        </p>

        <p className="pt-6 text-[12.5px] text-muted">
          © {new Date().getFullYear()} {f.rights}
        </p>
      </div>
    </footer>
  );
}
