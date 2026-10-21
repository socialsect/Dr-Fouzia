"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

export function Contact() {
  return (
    <section id="contact" className="bg-surface-deep py-16 md:py-24">
      <div className="wrap-narrow text-center">
        <Reveal direction="up">
          <div className="eyebrow justify-center mb-5">Your next step</div>
        </Reveal>
        <Reveal direction="up" delay={100}>
          <h2
            className="mb-5 font-display font-normal leading-[1.08] tracking-[-0.04em] text-ink"
            style={{ fontSize: "clamp(var(--step-3), 3.8vw, var(--step-4))" }}
          >
            Ready for a clearer picture of your <em className="text-blue">health?</em>
          </h2>
        </Reveal>
        <Reveal direction="up" delay={200}>
          <p className="mx-auto mb-10 max-w-[440px] text-ink-soft" style={{ fontSize: "var(--step-0)", lineHeight: 1.7 }}>
            Book a consultation and tell your story to a doctor who has the time
            to hear it.
          </p>
        </Reveal>
        <Reveal direction="up" delay={300}>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/consultation#enquiry-form-1" className="btn btn-primary">
              Book free consult
            </Link>
            <Link href="/consultation#enquiry-form-2" className="btn btn-ghost">
              Get in touch
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
