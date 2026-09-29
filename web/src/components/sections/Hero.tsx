import Link from "next/link";

const coverItems = [
  { num: 1, title: "Functional Medicine", desc: "root-cause assessment" },
  { num: 2, title: "Women's Hormones & Stress", desc: "cycles, mood, sleep" },
  { num: 3, title: "Gut–Brain Health", desc: "digestion, clarity, energy" },
  { num: 4, title: "Metabolic & Weight", desc: "nutrition, lifestyle, habits" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-sky-light via-white to-white pt-32 pb-16 md:pt-40 md:pb-20">
      <div className="wrap">
        <div className="grid items-center gap-12 md:grid-cols-[1.25fr_1fr] md:gap-20">
          {/* Left — copy */}
          <div>
            <h1
              className="mb-10 font-display font-normal leading-[1.08] tracking-[-0.04em] text-ink"
              style={{ fontSize: "clamp(var(--step-5), 6.5vw, 72px)" }}
            >
              Symptoms don&rsquo;t
              <br />
              exist in <em className="text-blue">isolation.</em>
              <br />
              Neither should
              <br />
              your care.
            </h1>

            <p className="mb-12 max-w-[520px] text-ink-soft" style={{ fontSize: "var(--step-0)", lineHeight: 1.6 }}>
              Dr. Fouzia looks at the full picture&mdash;your history, lifestyle,
              nutrition, sleep, stress and hormones&mdash;to understand what&rsquo;s
              really going on.
            </p>

            {/* Buttons */}
            <div className="mb-14 flex flex-wrap gap-3.5">
              <Link href="/book-consultation" className="btn btn-primary">
                Book free consult
              </Link>
              <Link href="/#services" className="btn btn-ghost">
                Explore services
              </Link>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap items-baseline gap-x-8 gap-y-3 border-t border-line pt-6">
              <div className="flex items-baseline gap-2">
                <span className="font-display text-[32px] font-normal tracking-[-0.03em] text-blue">
                  1500+
                </span>
                <span className="text-muted" style={{ fontSize: "var(--step--1)" }}>
                  patients
                </span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="font-display text-[32px] font-normal tracking-[-0.03em] text-ink">
                  26
                </span>
                <span className="text-muted" style={{ fontSize: "var(--step--1)" }}>
                  years experience
                </span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="font-display text-[32px] font-normal tracking-[-0.03em] text-ink">
                  1:1
                </span>
                <span className="text-muted" style={{ fontSize: "var(--step--1)" }}>
                  personalized care
                </span>
              </div>
            </div>
          </div>

          {/* Right — cover card */}
          <div className="relative hidden md:block">
            <div
              className="relative rotate-[2deg] border border-line bg-white p-9 transition-transform duration-500 hover:rotate-0"
              style={{ borderRadius: "var(--radius)", boxShadow: "var(--shadow-far)" }}
            >
              {/* Badge */}
              <span className="absolute -top-4 right-6 rotate-[4deg] rounded-full bg-[#F39034] px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.15em] text-white">
                Start here
              </span>

              <div className="mb-2 text-[11px] font-bold uppercase tracking-[0.15em] text-muted">
                What Dr. Fouzia covers
              </div>
              <h3
                className="mb-6 font-display font-semibold tracking-[-0.02em] text-ink"
                style={{ fontSize: "var(--step-2)" }}
              >
                Eight services, one philosophy
              </h3>

              <ul className="flex flex-col">
                {coverItems.map((item) => (
                  <li
                    key={item.num}
                    className="flex items-start gap-3.5 border-b border-line py-3.5 text-[15px] last:border-b-0"
                  >
                    <span className="grid h-7 w-7 flex-shrink-0 place-items-center rounded-lg bg-[#F4ECE0] font-display text-[14px] font-bold text-ink">
                      {item.num}
                    </span>
                    <div>
                      <strong className="font-semibold text-ink">{item.title}</strong>{" "}
                      <span className="text-blue">&#8594;</span>{" "}
                      <span className="text-ink-soft">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
