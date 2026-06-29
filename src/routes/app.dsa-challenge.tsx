import { createFileRoute } from "@tanstack/react-router";
import { Flame, Check, Lock } from "lucide-react";

export const Route = createFileRoute("/app/dsa-challenge")({
  head: () => ({ meta: [{ title: "100 Days DSA Challenge — Let's Code" }] }),
  component: Page,
});

function Page() {
  const completed = 23;
  const total = 100;
  return (
    <div className="mx-auto max-w-6xl px-6 py-10">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <div className="font-display mb-2 text-[11px] font-bold uppercase tracking-widest text-brand-primary">Streak</div>
          <h1 className="font-display flex items-center gap-2 text-4xl font-bold tracking-tighter">
            <Flame className="size-8 text-brand-primary" /> 100 Days DSA Challenge
          </h1>
          <p className="mt-2 text-sm text-white/55">One problem a day. No skipped days. No excuses.</p>
        </div>
        <div className="rounded-2xl border border-border bg-brand-surface px-6 py-4">
          <div className="text-[10px] uppercase tracking-widest text-white/40">Progress</div>
          <div className="font-display text-3xl font-black text-brand-primary">{completed} / {total}</div>
        </div>
      </div>
      <div className="grid grid-cols-10 gap-2 sm:grid-cols-20">
        {Array.from({ length: total }).map((_, i) => {
          const done = i < completed;
          const today = i === completed;
          return (
            <div
              key={i}
              className={`grid aspect-square place-items-center rounded-lg border text-[10px] font-bold transition-colors ${
                done
                  ? "border-brand-primary/40 bg-brand-primary/15 text-brand-primary"
                  : today
                    ? "border-brand-primary bg-brand-primary text-black"
                    : "border-white/10 bg-brand-surface text-white/40"
              }`}
            >
              {done ? <Check className="size-3" /> : today ? i + 1 : <Lock className="size-3" />}
            </div>
          );
        })}
      </div>
    </div>
  );
}