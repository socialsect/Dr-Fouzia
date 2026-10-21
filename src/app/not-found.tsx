import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

const LINKS = [
  { href: "/services", label: "Services" },
  { href: "/functional-medicine", label: "Functional medicine" },
  { href: "/cbt", label: "CBT" },
  { href: "/womens-hormonal-health", label: "Women's hormonal health" },
  { href: "/about-dr-fouzia", label: "About Dr. Fouzia" },
];

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[70vh] w-[min(720px,92%)] flex-col items-start justify-center pb-20 pt-40">
      <p className="mb-3 text-sm font-medium uppercase tracking-[0.14em] text-blue">404</p>
      <h1 className="mb-4 font-serif text-4xl text-ink md:text-5xl">Page not found</h1>
      <p className="mb-8 text-[16px] leading-[1.7] text-ink-soft">
        The page you&apos;re looking for has moved or doesn&apos;t exist. Try one of these instead.
      </p>
      <ul className="mb-10 flex flex-wrap gap-x-6 gap-y-2 text-[15.5px]">
        {LINKS.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="text-blue underline underline-offset-4">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
      <div className="flex gap-3">
        <Link href="/" className="rounded-full bg-blue px-6 py-3 text-sm font-medium text-white">
          Back to home
        </Link>
        <Link href="/book-consultation" className="rounded-full border border-line px-6 py-3 text-sm font-medium text-ink">
          Book a consultation
        </Link>
      </div>
    </main>
  );
}
