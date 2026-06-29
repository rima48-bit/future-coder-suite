import { createFileRoute } from "@tanstack/react-router";
import { Play, Terminal } from "lucide-react";

export const Route = createFileRoute("/app/sandbox")({
  head: () => ({ meta: [{ title: "Live IDE Sandbox — Let's Code" }] }),
  component: Page,
});

function Page() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-10">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <div className="font-display mb-2 text-[11px] font-bold uppercase tracking-widest text-brand-primary">Workbench</div>
          <h1 className="font-display text-4xl font-bold tracking-tighter">Live IDE Sandbox</h1>
          <p className="mt-2 text-sm text-white/55">A scratchpad for ideas. JS, TS, Python — run it instantly.</p>
        </div>
        <button className="inline-flex items-center gap-2 rounded-xl bg-brand-primary px-5 py-3 text-sm font-bold text-black">
          <Play className="size-4" /> Run
        </button>
      </div>
      <div className="grid gap-4 lg:grid-cols-2">
        <div className="overflow-hidden rounded-2xl border border-border bg-[#0e0f10] font-mono text-sm">
          <div className="border-b border-border bg-brand-surface px-4 py-2 text-xs uppercase tracking-widest text-white/40">main.ts</div>
          <pre className="p-5 leading-relaxed text-white/80"><code>{`// Welcome to Let's Code Sandbox
const greet = (name: string) =>
  \`hello, \${name} — ship something today\`;

console.log(greet("Vidhi"));
`}</code></pre>
        </div>
        <div className="overflow-hidden rounded-2xl border border-border bg-brand-surface font-mono text-sm">
          <div className="flex items-center gap-2 border-b border-border px-4 py-2 text-xs uppercase tracking-widest text-white/40">
            <Terminal className="size-3.5" /> Output
          </div>
          <pre className="p-5 leading-relaxed text-brand-primary">{`> hello, Vidhi — ship something today`}</pre>
        </div>
      </div>
    </div>
  );
}