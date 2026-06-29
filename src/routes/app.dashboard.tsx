import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  Bookmark,
  Briefcase,
  Cloud,
  Compass,
  Eye,
  FileText,
  Flame,
  Globe,
  Hospital,
  Lock,
  PenSquare,
  Sparkles,
  Star,
  Target,
  Trophy,
} from "lucide-react";

export const Route = createFileRoute("/app/dashboard")({
  head: () => ({ meta: [{ title: "My Space — Let's Code" }] }),
  component: Dashboard,
});

function Dashboard() {
  return (
    <div className="mx-auto max-w-7xl space-y-10 px-6 py-10">
      {/* Header card */}
      <section className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-brand-primary/15 via-brand-surface to-brand-bg p-8 md:p-10">
        <div className="absolute inset-0 grid-pattern opacity-25" />
        <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="mb-3 flex flex-wrap items-center gap-2 text-[11px] font-bold uppercase tracking-widest">
              <span className="rounded-full border border-brand-primary/40 bg-brand-primary/10 px-3 py-1 text-brand-primary">
                My Space · Dashboard
              </span>
              <span className="rounded-full bg-brand-primary px-3 py-1 text-black">
                ⚡ Immediate Joiner — L1
              </span>
            </div>
            <h1 className="font-display text-4xl font-bold tracking-tighter md:text-5xl">
              Good evening, Vidhi.
            </h1>
            <p className="mt-3 max-w-xl text-white/65">
              Welcome back. You're tracking{" "}
              <span className="font-bold text-brand-primary">90% interview readiness</span>.
              Keep the streak alive.
            </p>
          </div>
          <Link
            to="/app/profile"
            className="inline-flex items-center gap-2 self-start rounded-xl border border-brand-primary/40 bg-brand-primary/10 px-5 py-3 text-sm font-bold text-brand-primary transition-colors hover:bg-brand-primary hover:text-black"
          >
            Edit Profile <ArrowUpRight className="size-4" />
          </Link>
        </div>
        <div className="relative mt-8 grid gap-3 sm:grid-cols-4">
          {[
            { v: "6", l: "Profile Views", i: Eye },
            { v: "0", l: "Apps Tracked", i: Briefcase },
            { v: "20", l: "LC Points", i: Sparkles },
            { v: "1/4", l: "Badges", i: Trophy },
          ].map((s) => {
            const I = s.i;
            return (
              <div key={s.l} className="rounded-2xl border border-white/10 bg-brand-bg/60 p-4">
                <I className="size-4 text-brand-primary" />
                <div className="font-display mt-3 text-2xl font-black">{s.v}</div>
                <div className="text-[11px] uppercase tracking-widest text-white/45">{s.l}</div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Recommended next steps */}
      <Section eyebrow="Preparation Roadmap" title="Recommended next steps">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              n: 1,
              t: "Find jobs matching your skills",
              d: "Our AI scans job boards, scores each role by fit, and tells you whether to apply.",
              cta: "Open AI Job Finder",
              to: "/app/job-finder",
            },
            {
              n: 2,
              t: "Track your applications",
              d: "Never lose track of where you applied. Get prep links when interviews are scheduled.",
              cta: "Open Job Tracker",
              to: "/app/job-tracker",
            },
            {
              n: 3,
              t: "Share an interview experience",
              d: "Help others prepare while earning extra Let's Code reward points.",
              cta: "Write Experience",
              to: "/app/interview-experiences",
            },
          ].map((s) => (
            <div
              key={s.n}
              className="group relative flex flex-col rounded-2xl border border-border bg-brand-surface p-6 transition-colors hover:border-brand-primary/50"
            >
              <span className="font-display absolute right-5 top-4 text-6xl font-black text-brand-primary/10">
                0{s.n}
              </span>
              <span className="grid size-9 place-items-center rounded-lg bg-brand-primary/15 font-display font-bold text-brand-primary">
                {s.n}
              </span>
              <h4 className="font-display mt-5 text-lg font-bold">{s.t}</h4>
              <p className="mt-2 flex-1 text-sm text-white/55">{s.d}</p>
              <Link
                to={s.to}
                className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-brand-primary"
              >
                {s.cta} <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          ))}
        </div>
      </Section>

      {/* Latest jobs */}
      <Section
        eyebrow="Active Boards"
        title="Latest jobs for you"
        right={
          <Link to="/app/job-finder" className="text-sm font-bold text-brand-primary hover:underline">
            View All →
          </Link>
        }
      >
        <div className="grid gap-3">
          {[
            { icon: Cloud, role: "Software Engineer", co: "Akamai Technologies", loc: "Remote" },
            { icon: Globe, role: "Software Engineer", co: "Cisco", loc: "Remote" },
            { icon: Hospital, role: "Engineering Intern", co: "Stryker", loc: "Bengaluru" },
            { icon: Cloud, role: "Software Engineer — AMTS", co: "Salesforce", loc: "Hyderabad, India" },
          ].map((j, i) => {
            const I = j.icon;
            return (
              <div
                key={i}
                className="flex items-center justify-between gap-4 rounded-2xl border border-border bg-brand-bg p-5 transition-colors hover:border-brand-primary/40"
              >
                <div className="flex items-center gap-4">
                  <div className="grid size-11 place-items-center rounded-lg border border-white/10 bg-brand-surface text-brand-primary">
                    <I className="size-5" />
                  </div>
                  <div>
                    <div className="font-display font-bold">{j.role}</div>
                    <div className="text-xs text-white/50">
                      {j.co} · {j.loc}
                    </div>
                  </div>
                </div>
                <button className="rounded-full bg-brand-primary px-4 py-2 text-xs font-bold text-black transition-transform hover:scale-105">
                  Apply Now
                </button>
              </div>
            );
          })}
        </div>
        <p className="mt-4 text-xs text-white/45">
          🎯 Add skills on your profile to unlock personalised job recommendations.
        </p>
      </Section>

      {/* Module grid */}
      <div className="grid gap-5 lg:grid-cols-2">
        <ModuleCard
          eyebrow="Curriculum"
          title="Interview Prep"
          icon={FileText}
          items={[
            { label: "🔥 100 Days DSA Challenge", to: "/app/dsa-challenge" },
            { label: "Community Interview Experiences", to: "/app/interview-experiences" },
            { label: "PYQs & Previous Papers", to: "/app/practice" },
          ]}
        />
        <ModuleCard
          eyebrow="Co-Pilot Suite"
          title="AI Copilot Tools"
          icon={Sparkles}
          items={[
            { label: "AI Job Finder & Matcher", to: "/app/job-finder" },
            { label: "AI Resume Studio Builder", to: "/app/my-resumes" },
            { label: "AI Mock Technical Interview", to: "/app/practice" },
          ]}
        />
        <ModuleCard
          eyebrow="Applications"
          title="Jobs & Tracking"
          icon={Briefcase}
          items={[
            { label: "My Job Application Tracker", to: "/app/job-tracker" },
            { label: "ATS Resume Builder Templates", to: "/app/resume-templates" },
            { label: "Startups Directory Network", to: "/app/network" },
          ]}
        />
        <ModuleCard
          eyebrow="Library"
          title="Learn & Explore"
          icon={Compass}
          items={[
            { label: "My Bookmarks Library", to: "/app/bookmarks" },
            { label: "Interactive Learning Resources", to: "/app/courses" },
            { label: "Developer Tech Blogs Feed", to: "/app/my-posts" },
          ]}
        />
      </div>

      {/* LC Points + Badges */}
      <div className="grid gap-5 lg:grid-cols-[1fr_1.4fr]">
        <div className="rounded-3xl bg-brand-primary p-8 text-black">
          <div className="font-display mb-2 text-[11px] font-bold uppercase tracking-widest">
            LC Points · Context
          </div>
          <h3 className="font-display text-3xl font-bold tracking-tighter">
            Unlock goodies & swag.
          </h3>
          <p className="mt-3 text-sm text-black/70">
            You currently have <b>20 LC Points</b>. Publish high-quality articles, solve DSA sheets
            or share interview experiences to accumulate more — then redeem swag goods.
          </p>
          <Link
            to="/app/publish"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-black px-5 py-3 text-sm font-bold text-brand-primary"
          >
            <PenSquare className="size-4" /> Publish Content
          </Link>
        </div>
        <div className="rounded-3xl border border-border bg-brand-surface p-8">
          <div className="mb-1 flex items-center justify-between">
            <div className="font-display text-[11px] font-bold uppercase tracking-widest text-white/45">
              Trophy Hub
            </div>
            <Link to="/app/goodies" className="text-xs font-bold text-brand-primary hover:underline">
              All badges →
            </Link>
          </div>
          <h3 className="font-display text-2xl font-bold tracking-tight">Badges & Unlocks</h3>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {[
              { i: Trophy, t: "First Steps", d: "Open or enrol in any course to begin your journey.", unlocked: true },
              { i: Target, t: "Code Architect", d: "Solve a DSA sheet problem by passing all test cases.", unlocked: false },
              { i: Star, t: "Sandbox Explorer", d: "Compile your first JS snippet in the live IDE Sandbox.", unlocked: false },
              { i: Award, t: "Champion Learner", d: "Reach Level 2 or higher by earning training XP.", unlocked: false },
            ].map((b) => {
              const I = b.i;
              return (
                <div
                  key={b.t}
                  className={`rounded-2xl border p-4 transition-colors ${
                    b.unlocked
                      ? "border-brand-primary/40 bg-brand-primary/10"
                      : "border-white/10 bg-brand-bg"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div
                      className={`grid size-9 place-items-center rounded-lg ${
                        b.unlocked ? "bg-brand-primary text-black" : "bg-white/5 text-white/40"
                      }`}
                    >
                      {b.unlocked ? <I className="size-4" /> : <Lock className="size-4" />}
                    </div>
                    {!b.unlocked && (
                      <span className="text-[10px] font-bold uppercase tracking-widest text-white/30">
                        Locked
                      </span>
                    )}
                  </div>
                  <div className="font-display mt-3 font-bold">{b.t}</div>
                  <div className="mt-1 text-xs text-white/55">{b.d}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

function Section({
  eyebrow,
  title,
  children,
  right,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
  right?: React.ReactNode;
}) {
  return (
    <section>
      <div className="mb-5 flex items-end justify-between gap-4">
        <div>
          <div className="font-display mb-2 text-[11px] font-bold uppercase tracking-widest text-brand-primary">
            {eyebrow}
          </div>
          <h2 className="font-display text-2xl font-bold tracking-tight md:text-3xl">{title}</h2>
        </div>
        {right}
      </div>
      {children}
    </section>
  );
}

function ModuleCard({
  eyebrow,
  title,
  icon: Icon,
  items,
}: {
  eyebrow: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  items: { label: string; to: string }[];
}) {
  return (
    <div className="rounded-3xl border border-border bg-brand-surface p-6">
      <div className="flex items-start justify-between">
        <div>
          <div className="font-display text-[11px] font-bold uppercase tracking-widest text-white/40">
            {eyebrow}
          </div>
          <h3 className="font-display mt-1 text-xl font-bold tracking-tight">{title}</h3>
        </div>
        <div className="grid size-10 place-items-center rounded-lg bg-brand-primary/15 text-brand-primary">
          <Icon className="size-4" />
        </div>
      </div>
      <ul className="mt-5 divide-y divide-border">
        {items.map((it) => (
          <li key={it.to}>
            <Link
              to={it.to}
              className="group flex items-center justify-between py-3 text-sm text-white/75 hover:text-brand-primary"
            >
              <span className="flex items-center gap-2">
                <Bookmark className="size-3.5 opacity-40 group-hover:opacity-100" />
                {it.label}
              </span>
              <ArrowRight className="size-4 opacity-0 transition-opacity group-hover:opacity-100" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}