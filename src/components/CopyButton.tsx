"use client";

// ═══════════════════════════════════════════
// CopyButton — copies a string to clipboard.
// Used on /contact next to each email and phone.
// ═══════════════════════════════════════════

import { useState } from "react";
import { CopyIcon, CheckIcon } from "./icons";

export function CopyButton({ value, label }: { value: string; label: string }) {
  const [copied, setCopied] = useState(false);

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // clipboard not available — silently fail
    }
  };

  return (
    <button
      type="button"
      onClick={onCopy}
      aria-label={`Copy ${label}`}
      className="w-9 h-9 rounded-full bg-ink/[0.04] border border-ink/[0.06] flex items-center justify-center text-ink/55 hover:text-green hover:border-green/30 hover:bg-green/[0.04] transition-all duration-300"
    >
      {copied ? <CheckIcon className="w-4 h-4 text-green" /> : <CopyIcon />}
    </button>
  );
}
