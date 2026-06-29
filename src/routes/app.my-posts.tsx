import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageCircle, Eye, Heart, PenSquare, Plus } from "lucide-react";

export const Route = createFileRoute("/app/my-posts")({
  head: () => ({ meta: [{ title: "My Posts — Let's Code" }] }),
  component: MyPosts,
});

const POSTS = [
  { title: "How I cracked an AI Agents interview at 8 hours notice", tag: "Interview", views: 1842, likes: 214, comments: 39, date: "3d ago" },
  { title: "Designing LangGraph nodes that don't hallucinate", tag: "AI", views: 921, likes: 132, comments: 17, date: "1w ago" },
  { title: "Why your DSA prep is plateauing (and the fix)", tag: "DSA", views: 3210, likes: 451, comments: 88, date: "3w ago" },
];

function MyPosts() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-10">
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <div className="font-display mb-2 text-[11px] font-bold uppercase tracking-widest text-brand-primary">
            Authored
          </div>
          <h1 className="font-display text-4xl font-bold tracking-tighter">My Posts</h1>
          <p className="mt-2 text-sm text-white/55">Everything you've published on Let's Code.</p>
        </div>
        <Link to="/app/publish" className="inline-flex items-center gap-2 rounded-xl bg-brand-primary px-5 py-3 text-sm font-bold text-black">
          <Plus className="size-4" /> New Post
        </Link>
      </div>
      <div className="space-y-3">
        {POSTS.map((p) => (
          <article key={p.title} className="group rounded-2xl border border-border bg-brand-surface p-6 transition-colors hover:border-brand-primary/40">
            <div className="mb-2 flex items-center gap-3 text-[11px] uppercase tracking-widest text-white/45">
              <span className="rounded-full border border-brand-primary/30 bg-brand-primary/10 px-2 py-0.5 text-brand-primary">{p.tag}</span>
              <span>{p.date}</span>
            </div>
            <h3 className="font-display text-xl font-bold transition-colors group-hover:text-brand-primary">{p.title}</h3>
            <div className="mt-4 flex items-center gap-5 text-xs text-white/45">
              <span className="flex items-center gap-1.5"><Eye className="size-3.5" /> {p.views}</span>
              <span className="flex items-center gap-1.5"><Heart className="size-3.5" /> {p.likes}</span>
              <span className="flex items-center gap-1.5"><MessageCircle className="size-3.5" /> {p.comments}</span>
              <span className="ml-auto inline-flex items-center gap-1 text-brand-primary opacity-0 group-hover:opacity-100">
                <PenSquare className="size-3.5" /> Edit
              </span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}