import { createFileRoute } from "@tanstack/react-router";
import { Github, Linkedin, Mail, MapPin, ExternalLink, GraduationCap, Briefcase, Star, Code2 } from "lucide-react";

export const Route = createFileRoute("/app/profile")({
  head: () => ({ meta: [{ title: "Profile — Let's Code" }] }),
  component: Profile,
});

function Profile() {
  return (
    <div className="mx-auto max-w-7xl space-y-10 px-6 py-10">
      {/* Header */}
      <section className="relative overflow-hidden rounded-3xl border border-border bg-brand-surface p-8 md:p-10">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="relative grid gap-8 md:grid-cols-[auto_1fr_auto] md:items-center">
          <div className="grid size-28 place-items-center rounded-3xl bg-brand-primary font-display text-4xl font-black text-black">
            VB
          </div>
          <div>
            <div className="mb-2 inline-flex rounded-full border border-brand-primary/40 bg-brand-primary/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-brand-primary">
              Pro Builder
            </div>
            <h1 className="font-display text-4xl font-bold tracking-tighter md:text-5xl">
              Vidhi Bhutia
            </h1>
            <p className="mt-2 flex flex-wrap items-center gap-3 text-sm text-white/60">
              <span className="flex items-center gap-1.5"><MapPin className="size-3.5" /> Pune, Maharashtra, India</span>
              <span>·</span>
              <a href="#" className="flex items-center gap-1.5 text-brand-primary hover:underline">
                vidhibhutia.xyz <ExternalLink className="size-3.5" />
              </a>
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <a href="#" className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-brand-bg px-3 py-2 text-sm hover:border-brand-primary hover:text-brand-primary">
              <Linkedin className="size-4" /> LinkedIn
            </a>
            <a href="#" className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-brand-bg px-3 py-2 text-sm hover:border-brand-primary hover:text-brand-primary">
              <Github className="size-4" /> GitHub
            </a>
            <a href="#" className="inline-flex items-center gap-1.5 rounded-lg bg-brand-primary px-4 py-2 text-sm font-bold text-black">
              <Mail className="size-4" /> Hire Me
            </a>
          </div>
        </div>
      </section>

      {/* Bio */}
      <section className="grid gap-5 lg:grid-cols-[2fr_1fr]">
        <div className="rounded-3xl border border-border bg-brand-surface p-8">
          <h3 className="font-display text-xl font-bold">Professional Bio</h3>
          <p className="mt-4 text-sm leading-relaxed text-white/70">
            CSE & Business Systems undergraduate at Vellore Institute of Technology (VIT) Vellore,
            holding a 9.11 CGPA. I operate at the intersection of AI agent design, rapid application
            orchestration and backend infrastructure. My development background spans building
            enterprise workforce analytics systems, ML-powered log monitors at Morgan Stanley and
            shipping open-source libraries. Passionate about vibe-coding and engineering resilient
            codebases.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {[
            { v: "10,046", l: "Followers" },
            { v: "478", l: "Following" },
            { v: "12+", l: "Projects" },
            { v: "9.11", l: "VIT CGPA" },
          ].map((s) => (
            <div key={s.l} className="rounded-2xl border border-border bg-brand-surface p-5">
              <div className="font-display text-3xl font-black text-brand-primary">{s.v}</div>
              <div className="mt-1 text-xs uppercase tracking-widest text-white/45">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Tabs simulated as anchors */}
      <nav className="flex flex-wrap gap-2 border-b border-border pb-3 text-sm">
        {["Summary & Education", "Work Experience", "Featured Projects", "Curated Skill Set"].map((t, i) => (
          <a
            key={t}
            href={`#${t.toLowerCase().replace(/[^a-z]+/g, "-")}`}
            className={`rounded-full px-4 py-2 transition-colors ${
              i === 0
                ? "bg-brand-primary text-black"
                : "border border-white/10 text-white/60 hover:border-brand-primary hover:text-brand-primary"
            }`}
          >
            {t}
          </a>
        ))}
      </nav>

      {/* Education */}
      <section id="summary-education" className="grid gap-5 lg:grid-cols-[1.4fr_1fr]">
        <div className="rounded-3xl border border-border bg-brand-surface p-8">
          <div className="font-display mb-2 text-[11px] font-bold uppercase tracking-widest text-brand-primary">
            Academic Timeline
          </div>
          <h3 className="font-display text-2xl font-bold tracking-tight">Education</h3>
          <div className="mt-6 space-y-6">
            {[
              {
                period: "2022 — 2026",
                score: "CGPA 9.11 / 10",
                title: "B.Tech, Computer Science Engineering & Business Systems",
                place: "Vellore Institute of Technology, Vellore",
              },
              {
                period: "2021",
                score: "95.8%",
                title: "Class XII Secondary Certificate (CBSE)",
                place: "Scindia Kanya Vidyalaya, Gwalior",
              },
              {
                period: "2019",
                score: "92.6%",
                title: "Class X Secondary Certificate (CBSE)",
                place: "Delhi Public School, Katni",
              },
            ].map((e) => (
              <div key={e.title} className="rounded-2xl border border-border bg-brand-bg p-5">
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-white/45">
                  <span className="flex items-center gap-1.5">
                    <GraduationCap className="size-3.5" /> {e.period}
                  </span>
                  <span className="rounded-full bg-brand-primary/15 px-2 py-0.5 font-bold text-brand-primary">
                    {e.score}
                  </span>
                </div>
                <div className="font-display mt-3 text-lg font-bold">{e.title}</div>
                <div className="text-sm text-white/55">{e.place}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-3xl border border-border bg-brand-surface p-8">
          <div className="font-display mb-2 text-[11px] font-bold uppercase tracking-widest text-brand-primary">
            Summary of Impact
          </div>
          <h3 className="font-display text-2xl font-bold tracking-tight">Highlights</h3>
          <ul className="mt-6 space-y-5 text-sm text-white/70">
            {[
              "Full-lifecycle agent engineering: designed LangGraph nodes paired with Gemini APIs to build research & synthesis pipelines that cut latency by 40%.",
              "Enterprise workforce optimization: shipped tracking models and robust RBAC controls for user auth across live client suites.",
              "Corporate analytics at Morgan Stanley: analysed 50,000+ daily system logs to spot bottlenecks and sped up client onboarding by 30%.",
            ].map((t, i) => (
              <li key={i} className="flex gap-3">
                <Star className="mt-0.5 size-4 shrink-0 text-brand-primary" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Experience + Skills */}
      <section className="grid gap-5 lg:grid-cols-2">
        <div className="rounded-3xl border border-border bg-brand-surface p-8">
          <div className="font-display mb-2 text-[11px] font-bold uppercase tracking-widest text-brand-primary">
            Work Experience
          </div>
          <h3 className="font-display text-2xl font-bold tracking-tight">Recent Roles</h3>
          <div className="mt-6 space-y-4">
            {[
              { role: "AI Agents SWE Intern", co: "Independent / OSS", period: "2025 — Now" },
              { role: "Software Engineer Intern", co: "Morgan Stanley", period: "Summer 2024" },
              { role: "Open-Source Maintainer", co: "LangGraph Community", period: "2023 — Now" },
            ].map((e) => (
              <div key={e.role} className="flex items-start gap-4 rounded-2xl border border-border bg-brand-bg p-5">
                <Briefcase className="mt-1 size-4 text-brand-primary" />
                <div>
                  <div className="font-display font-bold">{e.role}</div>
                  <div className="text-sm text-white/55">{e.co} · {e.period}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-3xl border border-border bg-brand-surface p-8">
          <div className="font-display mb-2 text-[11px] font-bold uppercase tracking-widest text-brand-primary">
            Curated Skill Set
          </div>
          <h3 className="font-display text-2xl font-bold tracking-tight">Tools I ship with</h3>
          <div className="mt-6 flex flex-wrap gap-2">
            {[
              "TypeScript", "React", "Next.js", "Node", "Python", "LangGraph", "Gemini API",
              "PostgreSQL", "Supabase", "Docker", "AWS", "Tailwind", "tRPC", "Vite", "WASM",
            ].map((s) => (
              <span key={s} className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-brand-bg px-3 py-1.5 text-xs text-white/70">
                <Code2 className="size-3" /> {s}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}