import { createFileRoute } from "@tanstack/react-router";
import { FileBadge } from "lucide-react";

export const Route = createFileRoute("/app/resume-templates")({
  head: () => ({ meta: [{ title: "Resume Templates — Let's Code" }] }),
  component: Page,
});

const TPL = [
  { t: "Minimal Engineer", d: "ATS-safe, one column, dense.", ats: 98 },
  { t: "FAANG Standard", d: "Classic Google/Meta layout.", ats: 96 },
  { t: "Product Builder", d: "Project-led with live demo links.", ats: 92 },
  { t: "Startup Generalist", d: "Cross-functional, results-first.", ats: 94 },
  { t: "Research / ML", d: "Publications, papers, models.", ats: 91 },
  { t: "Designer-Engineer", d: "Subtle typographic flair.", ats: 88 },
];

function Page() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-10">
      <div className="mb-8">
        <div className="font-display mb-2 text-[11px] font-bold uppercase tracking-widest text-brand-primary">Templates</div>
        <h1 className="font-display text-4xl font-bold tracking-tighter">Resume Templates</h1>
        <p className="mt-2 text-sm text-white/55">All ATS-verified. Pick one, plug your story in.</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {TPL.map((t) => (
          <div key={t.t} className="rounded-2xl border border-border bg-brand-surface p-6">
            <div className="aspect-[3/4] rounded-xl border border-white/10 bg-brand-bg p-4">
              <div className="h-2 w-24 rounded bg-white/30" />
              <div className="mt-1 h-1 w-16 rounded bg-white/15" />
              <div className="mt-4 space-y-1">
                {Array.from({ length: 9 }).map((_, i) => <div key={i} className="h-1 rounded bg-white/10" style={{ width: `${60 + ((i * 13) % 35)}%` }} />)}
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <div>
                <div className="font-display font-bold">{t.t}</div>
                <div className="text-xs text-white/45">{t.d}</div>
              </div>
              <span className="rounded-full bg-brand-primary/15 px-2 py-0.5 text-[10px] font-bold text-brand-primary">ATS {t.ats}</span>
            </div>
            <button className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-primary px-4 py-2 text-sm font-bold text-black">
              <FileBadge className="size-4" /> Use template
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}