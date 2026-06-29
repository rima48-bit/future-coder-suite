import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/app/job-tracker")({
  head: () => ({ meta: [{ title: "Job Tracker — Let's Code" }] }),
  component: Page,
});

const COLS: { title: string; items: { co: string; role: string }[] }[] = [
  { title: "Wishlist", items: [{ co: "Linear", role: "FE Eng" }, { co: "Vercel", role: "DX Eng" }] },
  { title: "Applied", items: [{ co: "Razorpay", role: "ML Eng" }, { co: "Postman", role: "DevRel" }, { co: "Zerodha", role: "BE Eng" }] },
  { title: "Interview", items: [{ co: "Atlassian", role: "FE" }] },
  { title: "Offer", items: [] },
];

function Page() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-10">
      <div className="mb-8">
        <div className="font-display mb-2 text-[11px] font-bold uppercase tracking-widest text-brand-primary">Pipeline</div>
        <h1 className="font-display text-4xl font-bold tracking-tighter">Job Tracker</h1>
        <p className="mt-2 text-sm text-white/55">Kanban for every application. Never lose track again.</p>
      </div>
      <div className="grid gap-4 lg:grid-cols-4">
        {COLS.map((c) => (
          <div key={c.title} className="rounded-2xl border border-border bg-brand-surface p-4">
            <div className="mb-3 flex items-center justify-between">
              <div className="font-display text-xs font-bold uppercase tracking-widest text-brand-primary">{c.title}</div>
              <span className="rounded-full bg-white/5 px-2 py-0.5 text-xs">{c.items.length}</span>
            </div>
            <div className="space-y-2">
              {c.items.map((it) => (
                <div key={it.co} className="rounded-xl border border-border bg-brand-bg p-3">
                  <div className="font-display font-bold">{it.role}</div>
                  <div className="text-xs text-white/45">{it.co}</div>
                </div>
              ))}
              {c.items.length === 0 && (
                <div className="rounded-xl border border-dashed border-white/10 p-6 text-center text-xs text-white/40">Empty — yet.</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}