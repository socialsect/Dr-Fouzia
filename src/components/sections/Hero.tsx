import Link from "next/link";

const coverItems = [
  { num: 1, title: "Functional medicine", desc: "root-cause review" },
  { num: 2, title: "Women's health", desc: "cycles, mood, midlife" },
  { num: 3, title: "Gut and digestion", desc: "bloating, reflux, bowels" },
  { num: 4, title: "Metabolic health", desc: "weight, blood sugar, energy" },
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
              style={{ fontSize: "clamp(var(--step-4), 6.5vw, 72px)" }}
            >
              Functional Medicine Doctor in <em className="text-blue">Dubai</em>
            </h1>

            <p
              className="mb-6 -mt-5 font-display text-blue"
              style={{ fontSize: "clamp(var(--step-1), 2.8vw, var(--step-2))" }}
            >
              Find the cause. Then fix the plan.
            </p>

            <p className="mb-10 max-w-[520px] text-ink-soft" style={{ fontSize: "var(--step-0)", lineHeight: 1.6 }}>
              Dr Fouzia Al Ali is a consultant family physician who takes the
              time to understand your sleep, stress, digestion and hormones
              before suggesting a single test or supplement.
            </p>

            {/* Buttons */}
            <div className="mb-10 flex flex-wrap gap-3.5">
              <Link href="/contact" className="btn btn-primary">
                Book free consult
              </Link>
              <Link href="/#services" className="btn btn-ghost">
                See services
              </Link>
            </div>

            {/* Keep the trust strip free of unconfirmed patient and experience counts. */}
            <div className="border-t border-line pt-5">
              <p className="font-display text-[20px] tracking-[-0.02em] text-ink">
                One doctor
              </p>
              <p className="text-muted" style={{ fontSize: "var(--step--1)" }}>
                from first visit to follow-up
              </p>
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
                Consultations in Dubai
              </span>

              <h3
                className="mb-6 font-display font-semibold tracking-[-0.02em] text-ink"
                style={{ fontSize: "var(--step-2)" }}
              >
                Where Dr Fouzia can <em className="text-blue">help</em>
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
