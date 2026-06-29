import { createFileRoute } from "@tanstack/react-router";
import { Bookmark, ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/app/bookmarks")({
  head: () => ({ meta: [{ title: "Bookmarks — Let's Code" }] }),
  component: Page,
});

const ITEMS = [
  { t: "System Design Primer — Top 50 Patterns", tag: "Resource" },
  { t: "Atlassian SDE-1 OA Walkthrough", tag: "PYQ" },
  { t: "Tanstack Start v1 Cheat Sheet", tag: "Cheat Sheet" },
  { t: "AI Job Finder — Saved Search: Remote · React", tag: "Search" },
  { t: "Discord: AI Agents Builders weekly room", tag: "Community" },
];

function Page() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-10">
      <div className="mb-8">
        <div className="font-display mb-2 text-[11px] font-bold uppercase tracking-widest text-brand-primary">Saved</div>
        <h1 className="font-display text-4xl font-bold tracking-tighter">Bookmarks</h1>
        <p className="mt-2 text-sm text-white/55">All your saved articles, searches & resources, in one library.</p>
      </div>
      <div className="overflow-hidden rounded-2xl border border-border bg-brand-surface">
        {ITEMS.map((it, i) => (
          <a key={i} href="#" className="group flex items-center gap-4 border-b border-border px-6 py-5 last:border-0 hover:bg-white/5">
            <Bookmark className="size-4 text-brand-primary" />
            <div className="flex-1">
              <div className="font-display font-bold group-hover:text-brand-primary">{it.t}</div>
              <div className="text-xs uppercase tracking-widest text-white/40">{it.tag}</div>
            </div>
            <ArrowUpRight className="size-4 opacity-0 group-hover:opacity-100" />
          </a>
        ))}
      </div>
    </div>
  );
}