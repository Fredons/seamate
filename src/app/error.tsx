"use client";

// ═══════════════════════════════════════════
// Global runtime error boundary.
// ═══════════════════════════════════════════

import { useEffect } from "react";

export default function GlobalError({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    // Hook a logger here in production.
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-20 bg-cream">
      <div className="max-w-[640px] text-center">
        <span className="font-mono text-green text-[11px] uppercase tracking-[0.25em] block mb-6">
          Something went wrong
        </span>
        <h1 className="font-display text-ink text-4xl md:text-5xl leading-tight tracking-tight">
          We hit rough water.{" "}
          <em className="text-green-muted">Reloading should help.</em>
        </h1>
        <p className="text-text-secondary text-base leading-relaxed mt-6">
          If this keeps happening, email{" "}
          <a href="mailto:info@seamategroup.com" className="text-green underline-offset-4 hover:underline">
            info@seamategroup.com
          </a>{" "}
          and we&rsquo;ll fix it.
        </p>
        <button
          type="button"
          onClick={reset}
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-green hover:bg-green-light px-6 py-3 text-cream font-semibold text-[14px] tracking-wide transition-all duration-500 active:scale-[0.98]"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
