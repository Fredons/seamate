// ═══════════════════════════════════════════
// Loading — quiet skeleton shown during route segment streaming.
// ═══════════════════════════════════════════

export default function Loading() {
  return (
    <div className="min-h-screen bg-cream flex items-center justify-center px-6">
      <div className="flex items-center gap-3">
        <span className="inline-block w-2 h-2 rounded-full bg-green animate-pulse" />
        <span className="font-mono text-ink/45 text-[12px] uppercase tracking-[0.25em]">Loading</span>
      </div>
    </div>
  );
}
