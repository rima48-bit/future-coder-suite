import { createFileRoute } from "@tanstack/react-router";
import { Search, Sparkles, MapPin, Building2 } from "lucide-react";

export const Route = createFileRoute("/app/job-finder")({
  head: () => ({ meta: [{ title: "AI Job Finder — Let's Code" }] }),
  component: Page,
});

const JOBS = [
  { co: "Linear", role: "Frontend Engineer", loc: "Remote", fit: 92, verdict: "Apply now" },
  { co: "Razorpay", role: "ML Engineer", loc: "Bengaluru", fit: 81, verdict: "Apply" },
  { co: "Zerodha", role: "Backend Engineer", loc: "Bengaluru", fit: 74, verdict: "Consider" },
  { co: "Postman", role: "DevRel Intern", loc: "Hybrid", fit: 68, verdict: "Stretch" },
  { co: "TCS", role: "Systems Engineer", loc: "Pune", fit: 41, verdict: "Skip" },
];

function Page() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-10">
      <div className="mb-8">
        <div className="font-display mb-2 text-[11px] font-bold uppercase tracking-widest text-brand-primary">Career Tools</div>
        <h1 className="font-display text-4xl font-bold tracking-tighter">AI Job Finder</h1>
        <p className="mt-2 text-sm text-white/55">We scan boards, score each role by fit, and tell you whether to apply.</p>
      </div>
      <div className="mb-6 flex items-center gap-3 rounded-2xl border border-border bg-brand-surface p-3 pl-5">
        <Search className="size-4 text-brand-primary" />
        <input placeholder="Try: 'remote react intern in India' or 'AI agents SDE-1'" className="flex-1 bg-transparent text-sm placeholder-white/30 outline-none" />
        <button className="inline-flex items-center gap-2 rounded-xl bg-brand-primary px-4 py-2 text-sm font-bold text-black"><Sparkles className="size-4" /> Run Match</button>
      </div>
      <div className="space-y-3">
        {JOBS.map((j) => (
          <div key={j.co + j.role} className="grid grid-cols-[auto_1fr_auto_auto] items-center gap-5 rounded-2xl border border-border bg-brand-surface p-5">
            <div className="grid size-11 place-items-center rounded-lg border border-white/10 bg-brand-bg text-brand-primary">
              <Building2 className="size-5" />
            </div>
            <div>
              <div className="font-display font-bold">{j.role}</div>
              <div className="flex items-center gap-2 text-xs text-white/45"><span>{j.co}</span> · <span className="flex items-center gap-1"><MapPin className="size-3" /> {j.loc}</span></div>
            </div>
            <div className="text-right">
              <div className="font-display text-2xl font-black text-brand-primary">{j.fit}</div>
              <div className="text-[10px] uppercase tracking-widest text-white/40">Fit Score</div>
            </div>
            <button className="rounded-full bg-brand-primary px-4 py-2 text-xs font-bold text-black">{j.verdict}</button>
          </div>
        ))}
      </div>
    </div>
  );
}