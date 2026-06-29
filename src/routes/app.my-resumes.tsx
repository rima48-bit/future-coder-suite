import { createFileRoute } from "@tanstack/react-router";
import { Files, Download, Pencil, Plus } from "lucide-react";

export const Route = createFileRoute("/app/my-resumes")({
  head: () => ({ meta: [{ title: "My Resumes — Let's Code" }] }),
  component: Page,
});

const MINE = [
  { t: "Vidhi — SWE General v3.pdf", u: "Updated 2 days ago", ats: 96 },
  { t: "Vidhi — AI Agents Focus.pdf", u: "Updated 1 week ago", ats: 94 },
  { t: "Vidhi — Frontend Specialist.pdf", u: "Updated 3 weeks ago", ats: 92 },
];

function Page() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-10">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <div className="font-display mb-2 text-[11px] font-bold uppercase tracking-widest text-brand-primary">My Files</div>
          <h1 className="font-display text-4xl font-bold tracking-tighter">My Resumes</h1>
          <p className="mt-2 text-sm text-white/55">Every version, every variant, in one place.</p>
        </div>
        <button className="inline-flex items-center gap-2 rounded-xl bg-brand-primary px-5 py-3 text-sm font-bold text-black">
          <Plus className="size-4" /> New Resume
        </button>
      </div>
      <div className="space-y-3">
        {MINE.map((m) => (
          <div key={m.t} className="flex items-center gap-4 rounded-2xl border border-border bg-brand-surface p-5">
            <div className="grid size-11 place-items-center rounded-lg bg-brand-primary/15 text-brand-primary"><Files className="size-5" /></div>
            <div className="flex-1">
              <div className="font-display font-bold">{m.t}</div>
              <div className="text-xs text-white/45">{m.u}</div>
            </div>
            <span className="rounded-full bg-brand-primary/15 px-2 py-0.5 text-[10px] font-bold text-brand-primary">ATS {m.ats}</span>
            <button className="grid size-9 place-items-center rounded-lg border border-white/10 hover:border-brand-primary hover:text-brand-primary"><Pencil className="size-4" /></button>
            <button className="grid size-9 place-items-center rounded-lg border border-white/10 hover:border-brand-primary hover:text-brand-primary"><Download className="size-4" /></button>
          </div>
        ))}
      </div>
    </div>
  );
}