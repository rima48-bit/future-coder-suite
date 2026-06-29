import { createFileRoute } from "@tanstack/react-router";
import { Gift, Lock, Sparkles } from "lucide-react";

export const Route = createFileRoute("/app/goodies")({
  head: () => ({ meta: [{ title: "Goodies — Let's Code" }] }),
  component: Page,
});

const SWAG = [
  { t: "LC Hacker Hoodie", pts: 1200, img: "🧥" },
  { t: "Mechanical Keycap Set", pts: 850, img: "⌨️" },
  { t: "Sticker Bomb Pack", pts: 150, img: "🪪" },
  { t: "Pro Annual Subscription", pts: 2000, img: "💎" },
  { t: "Limited Tee — Drop 02", pts: 600, img: "👕" },
  { t: "Notebook + Pen Combo", pts: 300, img: "📓" },
];

function Page() {
  const balance = 20;
  return (
    <div className="mx-auto max-w-6xl px-6 py-10">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-6">
        <div>
          <div className="font-display mb-2 text-[11px] font-bold uppercase tracking-widest text-brand-primary">Rewards</div>
          <h1 className="font-display text-4xl font-bold tracking-tighter">Goodies & Swag</h1>
          <p className="mt-2 text-sm text-white/55">Redeem LC Points for community drops & subscriptions.</p>
        </div>
        <div className="rounded-2xl bg-brand-primary px-6 py-4 text-black">
          <div className="text-[10px] font-bold uppercase tracking-widest opacity-70">Balance</div>
          <div className="font-display flex items-center gap-2 text-3xl font-black">
            <Sparkles className="size-5" /> {balance} LC
          </div>
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {SWAG.map((s) => {
          const locked = s.pts > balance;
          return (
            <div key={s.t} className="rounded-2xl border border-border bg-brand-surface p-6">
              <div className="text-5xl">{s.img}</div>
              <h4 className="font-display mt-4 text-lg font-bold">{s.t}</h4>
              <div className="mt-2 text-xs uppercase tracking-widest text-brand-primary">{s.pts} pts</div>
              <button disabled={locked} className={`mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm font-bold ${locked ? "border border-white/10 bg-white/5 text-white/40" : "bg-brand-primary text-black hover:scale-[1.02] transition-transform"}`}>
                {locked ? <><Lock className="size-3.5" /> Need {s.pts - balance} more</> : <><Gift className="size-3.5" /> Redeem</>}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}