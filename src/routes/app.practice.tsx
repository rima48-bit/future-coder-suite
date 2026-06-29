import { createFileRoute } from "@tanstack/react-router";
import { Check, Circle, Lock } from "lucide-react";

export const Route = createFileRoute("/app/practice")({
  head: () => ({ meta: [{ title: "Practice (DSA) — Let's Code" }] }),
  component: Page,
});

const SHEETS = [
  { title: "Arrays & Hashing", solved: 12, total: 18 },
  { title: "Two Pointers", solved: 8, total: 14 },
  { title: "Sliding Window", solved: 3, total: 12 },
  { title: "Stack & Queue", solved: 0, total: 15 },
  { title: "Binary Search", solved: 5, total: 16 },
  { title: "Trees & BST", solved: 0, total: 22 },
  { title: "Graphs", solved: 0, total: 24 },
  { title: "Dynamic Programming", solved: 0, total: 30 },
];

function Page() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-10">
      <div className="mb-8">
        <div className="font-display mb-2 text-[11px] font-bold uppercase tracking-widest text-brand-primary">Practice</div>
        <h1 className="font-display text-4xl font-bold tracking-tighter">DSA Sheets</h1>
        <p className="mt-2 text-sm text-white/55">Pattern-first problem sets. No fluff, just signal.</p>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        {SHEETS.map((s) => {
          const pct = (s.solved / s.total) * 100;
          const done = pct === 100;
          return (
            <div key={s.title} className="rounded-2xl border border-border bg-brand-surface p-5">
              <div className="flex items-center justify-between">
                <div className="font-display text-lg font-bold">{s.title}</div>
                {done ? <Check className="size-4 text-brand-primary" /> : s.solved === 0 ? <Lock className="size-4 text-white/30" /> : <Circle className="size-4 text-brand-primary" />}
              </div>
              <div className="mt-3 flex items-center justify-between text-xs text-white/55">
                <span>{s.solved} / {s.total} solved</span>
                <span className="text-brand-primary">{Math.round(pct)}%</span>
              </div>
              <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/5">
                <div className="h-full bg-brand-primary" style={{ width: `${pct}%` }} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}