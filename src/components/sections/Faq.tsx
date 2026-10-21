import { homepageFaqItems } from "@/lib/data";

export function Faq() {
  return (
    <section id="faq" className="bg-white py-16 md:py-24">
      <div className="wrap-narrow">
        <h2
          className="mb-10 font-display font-normal leading-[1.08] tracking-[-0.04em] text-ink"
          style={{ fontSize: "clamp(var(--step-3), 3.8vw, var(--step-4))" }}
        >
          Frequently asked <em className="text-blue">questions</em>
        </h2>

        <div className="divide-y divide-line border-y border-line">
          {homepageFaqItems.map((item) => (
            <details key={item.question} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-[16px] font-semibold text-ink marker:hidden md:text-[18px]">
                <span>{item.question}</span>
                <span
                  aria-hidden="true"
                  className="grid h-8 w-8 flex-shrink-0 place-items-center rounded-full border border-line text-blue transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="max-w-[760px] pt-4 pr-12 text-[14px] leading-[1.7] text-ink-soft md:text-[15px]">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
