import { createFileRoute } from "@tanstack/react-router";
import { BookOpen, Clock, Play } from "lucide-react";

export const Route = createFileRoute("/app/courses")({
  head: () => ({ meta: [{ title: "Courses — Let's Code" }] }),
  component: Page,
});

const COURSES = [
  { t: "DSA in 60 Days — From Zero to Optimal", level: "Beginner", hrs: 42, progress: 35 },
  { t: "System Design for Indian Tech Interviews", level: "Intermediate", hrs: 18, progress: 0 },
  { t: "Ship Your First AI Agent", level: "Intermediate", hrs: 12, progress: 70 },
  { t: "Frontend Foundations: React, TS, Vite", level: "Beginner", hrs: 24, progress: 100 },
  { t: "Backend with Node, Postgres & RLS", level: "Intermediate", hrs: 20, progress: 12 },
  { t: "DevOps Essentials: Docker → K8s", level: "Advanced", hrs: 26, progress: 0 },
];

function Page() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-10">
      <div className="mb-8">
        <div className="font-display mb-2 text-[11px] font-bold uppercase tracking-widest text-brand-primary">Curriculum</div>
        <h1 className="font-display text-4xl font-bold tracking-tighter">Courses</h1>
        <p className="mt-2 text-sm text-white/55">Opinionated, project-led tracks. Free for students.</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {COURSES.map((c) => (
          <div key={c.t} className="group flex flex-col rounded-2xl border border-border bg-brand-surface p-6">
            <BookOpen className="size-6 text-brand-primary" />
            <h4 className="font-display mt-5 text-lg font-bold">{c.t}</h4>
            <div className="mt-2 flex items-center gap-3 text-xs text-white/45">
              <span>{c.level}</span>
              <span className="flex items-center gap-1"><Clock className="size-3" /> {c.hrs}h</span>
            </div>
            <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-white/5">
              <div className="h-full bg-brand-primary" style={{ width: `${c.progress}%` }} />
            </div>
            <button className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-brand-primary">
              <Play className="size-4" /> {c.progress === 0 ? "Start" : c.progress === 100 ? "Review" : "Resume"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}