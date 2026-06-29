import { createFileRoute } from "@tanstack/react-router";
import { ScrollText, Download } from "lucide-react";

export const Route = createFileRoute("/app/cheatsheets")({
  head: () => ({ meta: [{ title: "Cheat Sheets — Let's Code" }] }),
  component: Page,
});

const SHEETS = [
  "Big-O Complexity", "Git Survival Kit", "SQL JOINs Visual", "Regex by Example",
  "Linux for Devs", "TypeScript Tricks", "React Hooks", "Tailwind v4",
  "HTTP Status Codes", "Docker One-Pager", "Postgres Indexing", "System Design Glossary",
];

function Page() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-10">
      <div className="mb-8">
        <div className="font-display mb-2 text-[11px] font-bold uppercase tracking-widest text-brand-primary">Reference</div>
        <h1 className="font-display text-4xl font-bold tracking-tighter">Cheat Sheets</h1>
        <p className="mt-2 text-sm text-white/55">Print-friendly one-pagers for everything you keep forgetting.</p>
      </div>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {SHEETS.map((s) => (
          <div key={s} className="group flex items-center justify-between rounded-2xl border border-border bg-brand-surface p-5 transition-colors hover:border-brand-primary/40">
            <div className="flex items-center gap-3">
              <ScrollText className="size-5 text-brand-primary" />
              <span className="font-display font-bold">{s}</span>
            </div>
            <button className="text-white/40 group-hover:text-brand-primary"><Download className="size-4" /></button>
          </div>
        ))}
      </div>
    </div>
  );
}