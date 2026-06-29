import { createFileRoute } from "@tanstack/react-router";
import { Image, Code2, Hash, Send } from "lucide-react";

export const Route = createFileRoute("/app/publish")({
  head: () => ({ meta: [{ title: "Publish Content — Let's Code" }] }),
  component: Page,
});

function Page() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-10">
      <div className="mb-8">
        <div className="font-display mb-2 text-[11px] font-bold uppercase tracking-widest text-brand-primary">Create</div>
        <h1 className="font-display text-4xl font-bold tracking-tighter">Publish Content</h1>
        <p className="mt-2 text-sm text-white/55">Share an article, an interview experience or a project log. Earn LC Points.</p>
      </div>
      <div className="rounded-3xl border border-border bg-brand-surface p-6">
        <input placeholder="Catchy title…" className="w-full bg-transparent font-display text-3xl font-bold tracking-tight placeholder-white/30 outline-none" />
        <textarea rows={10} placeholder="Tell the story. Markdown supported." className="mt-4 w-full resize-none bg-transparent text-sm leading-relaxed placeholder-white/30 outline-none" />
        <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-4">
          <div className="flex gap-2 text-white/50">
            <button className="grid size-9 place-items-center rounded-lg hover:bg-white/5 hover:text-brand-primary"><Image className="size-4" /></button>
            <button className="grid size-9 place-items-center rounded-lg hover:bg-white/5 hover:text-brand-primary"><Code2 className="size-4" /></button>
            <button className="grid size-9 place-items-center rounded-lg hover:bg-white/5 hover:text-brand-primary"><Hash className="size-4" /></button>
          </div>
          <button className="inline-flex items-center gap-2 rounded-xl bg-brand-primary px-5 py-3 text-sm font-bold text-black">
            Publish <Send className="size-4" />
          </button>
        </div>
      </div>
    </div>
  );
}