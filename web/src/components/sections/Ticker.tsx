import { tickerItems } from "@/lib/data";

export function Ticker() {
  const repeated = [...tickerItems, ...tickerItems];

  return (
    <div className="overflow-hidden bg-ink py-5">
      <div className="ticker-track hover:[animation-play-state:paused]">
        {repeated.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex shrink-0 items-center gap-8 whitespace-nowrap px-8 font-display font-medium tracking-[-0.01em] text-white/90"
            style={{ fontSize: "clamp(18px, 2.2vw, 26px)" }}
          >
            <span className={i % 2 === 1 ? "italic" : ""} style={i % 2 === 1 ? { color: "#B7AFB5" } : undefined}>
              {item}
            </span>
            <span className="text-[18px]" style={{ color: "#F39034" }}>&#10022;</span>
          </span>
        ))}
      </div>
    </div>
  );
}
