import { createFileRoute } from "@tanstack/react-router";
import { MapPin, UserPlus, Github } from "lucide-react";

export const Route = createFileRoute("/app/network")({
  head: () => ({ meta: [{ title: "Find Coders — Let's Code" }] }),
  component: Page,
});

const PEOPLE = [
  { n: "Rhea N.", h: "Full-stack · React + Go", loc: "Bangalore", stack: ["React", "Go", "PG"] },
  { n: "Aman K.", h: "ML / LLMs Researcher", loc: "Hyderabad", stack: ["PyTorch", "LangGraph"] },
  { n: "Sneha P.", h: "Mobile Lead · Flutter", loc: "Pune", stack: ["Flutter", "Firebase"] },
  { n: "Ishaan R.", h: "DevOps + SRE", loc: "Remote", stack: ["K8s", "Terraform", "Go"] },
  { n: "Tara V.", h: "Frontend / Design Eng", loc: "Bangalore", stack: ["React", "Three.js"] },
  { n: "Karan S.", h: "Backend · Rust + WASM", loc: "Delhi", stack: ["Rust", "WASM"] },
];

function Page() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-10">
      <div className="mb-8">
        <div className="font-display mb-2 text-[11px] font-bold uppercase tracking-widest text-brand-primary">Network</div>
        <h1 className="font-display text-4xl font-bold tracking-tighter">Find Coders</h1>
        <p className="mt-2 text-sm text-white/55">Filter by stack, city or vibe — start a collab in one click.</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {PEOPLE.map((p) => (
          <div key={p.n} className="rounded-2xl border border-border bg-brand-surface p-6">
            <div className="flex items-center gap-3">
              <div className="grid size-11 place-items-center rounded-full bg-brand-primary font-display font-bold text-black">{p.n[0]}</div>
              <div>
                <div className="font-display font-bold">{p.n}</div>
                <div className="text-xs text-white/45">{p.h}</div>
              </div>
            </div>
            <div className="mt-4 flex items-center gap-1.5 text-xs text-white/55"><MapPin className="size-3.5" /> {p.loc}</div>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {p.stack.map((s) => <span key={s} className="rounded border border-white/10 bg-brand-bg px-2 py-0.5 text-[10px] text-white/65">{s}</span>)}
            </div>
            <div className="mt-5 flex gap-2">
              <button className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-brand-primary px-3 py-2 text-xs font-bold text-black"><UserPlus className="size-3.5" /> Connect</button>
              <button className="grid size-9 place-items-center rounded-lg border border-white/10 hover:border-brand-primary hover:text-brand-primary"><Github className="size-4" /></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}