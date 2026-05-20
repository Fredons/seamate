// ═══════════════════════════════════════════
// Hero — homepage editorial split, server-rendered.
// Tightened from prototype: removed the 3-stat row (moved to /about),
// single floating Dangote badge stays as the proof anchor.
// ═══════════════════════════════════════════

import Image from "next/image";
import { MailButton } from "../MailButton";

export function Hero() {
  return (
    <section className="relative bg-cream overflow-hidden pt-32 pb-20 md:pt-36 md:pb-28">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
          {/* Left — Editorial content */}
          <div className="md:col-span-6 hero-stagger">
            <div className="reveal mb-6">
              <span className="inline-flex items-center gap-2 text-green text-[11px] uppercase tracking-[0.25em] font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-green animate-pulse" />
                Maritime · Energy · Logistics · Advisory · Agro · Academy
              </span>
            </div>

            <h1 className="reveal font-display text-ink text-[clamp(2.8rem,5.5vw,5rem)] leading-[0.95] tracking-tight">
              Built in Lagos.{" "}
              <em className="text-green-muted">Trusted across Africa.</em>
            </h1>

            <p className="reveal text-text-secondary text-lg md:text-xl leading-relaxed max-w-[540px] mt-8">
              An African development platform. Eighteen years of ISO 9001:2015
              operations across maritime, energy, logistics, and workforce
              systems &mdash; for the operators NLNG, Dangote Refinery, and the
              institutions building Africa&rsquo;s next two decades.
            </p>

            <div className="reveal flex flex-col sm:flex-row gap-4 mt-10">
              <MailButton
                label="Request Capability Statement"
                subject="Capability Statement Request"
                body={
                  "Hello Seamate,\n\nPlease send your latest capability statement covering services, certifications, and engagement scope.\n\nThank you,\n"
                }
              />
              <MailButton
                variant="secondary"
                label="Book a Discovery Call"
                subject="Discovery Call Request"
                body={
                  "Hello Seamate,\n\nI'd like to schedule a discovery call to explore working with your team.\n\nA few times that work for me:\n- \n- \n\nThank you,\n"
                }
              />
            </div>
          </div>

          {/* Right — Editorial image with floating credential badge */}
          <div className="md:col-span-6">
            <div className="img-reveal reveal">
              <div className="rounded-[2rem] bg-ink/[0.03] p-1.5 ring-1 ring-ink/[0.04] hover-lift">
                <div className="rounded-[calc(2rem-0.375rem)] overflow-hidden relative aspect-[4/5]">
                  <Image
                    src="/images/hero-vessel.jpg"
                    alt="Seamate vessel operations off the coast of Lagos"
                    fill
                    priority
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="relative -mt-12 md:-mt-10 ml-auto mr-4 md:mr-6 w-fit bg-white rounded-2xl px-5 py-3 shadow-[0_12px_40px_rgba(0,0,0,0.08)] border border-ink/[0.04] animate-float">
                <span className="text-[11px] uppercase tracking-wider text-ink/50">Dangote Refinery</span>
                <span className="block text-ink font-semibold text-sm mt-0.5">Approved Distributor</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
