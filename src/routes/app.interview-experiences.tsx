import { createFileRoute } from "@tanstack/react-router";
import { Building2, Plus, Star } from "lucide-react";

export const Route = createFileRoute("/app/interview-experiences")({
  head: () => ({ meta: [{ title: "Interview Experiences — Let's Code" }] }),
  component: Page,
});

const EXPS = [
  { co: "Google", role: "SWE I", outcome: "Offer", rounds: 5, author: "Ananya R.", stipend: "₹42 LPA" },
  { co: "Stripe", role: "SWE Intern", outcome: "Offer", rounds: 4, author: "Karthik S.", stipend: "$9k/mo" },
  { co: "Atlassian", role: "Frontend", outcome: "Offer", rounds: 4, author: "Pranav D.", stipend: "₹28 LPA" },
  { co: "Razorpay", role: "ML Eng", outcome: "Rejected at L4", rounds: 4, author: "Sara M.", stipend: "—" },
];

function Page() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-10">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <div className="font-display mb-2 text-[11px] font-bold uppercase tracking-widest text-brand-primary">Community</div>
          <h1 className="font-display text-4xl font-bold tracking-tighter">Interview Experiences</h1>
          <p className="mt-2 text-sm text-white/55">Raw write-ups from students who just made it (or didn't).</p>
        </div>
        <button className="inline-flex items-center gap-2 rounded-xl bg-brand-primary px-5 py-3 text-sm font-bold text-black">
          <Plus className="size-4" /> Share yours
        </button>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {EXPS.map((e) => (
          <div key={e.co + e.author} className="rounded-2xl border border-border bg-brand-surface p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="grid size-10 place-items-center rounded-lg bg-brand-primary/15 text-brand-primary">
                  <Building2 className="size-5" />
                </div>
                <div>
                  <div className="font-display font-bold">{e.co} · {e.role}</div>
                  <div className="text-xs text-white/45">by {e.author}</div>
                </div>
              </div>
              <span className={`rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-widest ${e.outcome === "Offer" ? "bg-brand-primary text-black" : "border border-white/15 text-white/60"}`}>
                {e.outcome}
              </span>
            </div>
            <div className="mt-5 grid grid-cols-3 gap-3 text-xs">
              <div className="rounded-lg bg-brand-bg px-3 py-2"><div className="text-white/40">Rounds</div><div className="font-display font-bold">{e.rounds}</div></div>
              <div className="rounded-lg bg-brand-bg px-3 py-2"><div className="text-white/40">Comp</div><div className="font-display font-bold">{e.stipend}</div></div>
              <div className="rounded-lg bg-brand-bg px-3 py-2"><div className="text-white/40">Rating</div><div className="flex gap-0.5 text-brand-primary">{Array.from({ length: 4 }).map((_, i) => <Star key={i} className="size-3 fill-current" />)}</div></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}