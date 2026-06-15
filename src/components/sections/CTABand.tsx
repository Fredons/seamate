// ═══════════════════════════════════════════
// CTABand — "Partnering for Growth" (Stitch). Centered, dual CTA.
// ═══════════════════════════════════════════

import { MailButton } from "../MailButton";
import { MS } from "../icons";

export function CTABand() {
  return (
    <section className="bg-surface py-20 md:py-28 border-t border-steel-line/50" aria-labelledby="cta-heading">
      <div className="mx-auto max-w-[1280px] px-4 md:px-12 text-center">
        <MS name="sailing" className="text-navy text-[56px] mb-6 inline-block" />
        <h2 id="cta-heading" className="font-display text-navy text-[clamp(2rem,4vw,3.2rem)] font-extrabold tracking-[-0.02em]">
          Partnering for Growth
        </h2>
        <p className="font-body text-text-secondary text-lg leading-relaxed max-w-[60ch] mx-auto mt-5">
          Join the energy and maritime leaders who trust Seamate Group for their
          critical African operations. Request our capability statement, or speak
          with the team directly.
        </p>
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 mt-10">
          <MailButton
            variant="action"
            label="Request a Consultation"
            subject="Consultation Request"
            body={"Hello Seamate Group,\n\nWe'd like to arrange a consultation about:\n\n- Division of interest:\n- Scope:\n- Timeline:\n\nThank you,\n"}
          />
          <MailButton
            variant="primary"
            label="Capability Statement"
            subject="Capability Statement Request"
            body={"Hello Seamate Group,\n\nPlease send your latest capability statement.\n\nThank you,\n"}
          />
        </div>
      </div>
    </section>
  );
}
