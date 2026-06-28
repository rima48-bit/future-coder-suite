import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Brain,
  Briefcase,
  Calendar,
  Check,
  Code2,
  Compass,
  FileText,
  Github,
  Heart,
  Linkedin,
  MessageCircle,
  MessageSquare,
  Minus,
  Plus,
  Radar,
  Rocket,
  Send,
  Sparkles,
  Star,
  Trophy,
  Users,
  Zap,
} from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Let's Code — Everything You Need to Land Your Dream Tech Job" },
      { name: "description", content: "All-in-one platform for student developers: roadmaps, AI tools, mock interviews, community, events and jobs." },
      { property: "og:title", content: "Let's Code — Land Your Dream Tech Job" },
      { property: "og:description", content: "Roadmaps, AI tools, mock interviews, community, events and jobs — everything a student developer needs, in one place." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Breadcrumbs />
      <Hero />
      <Marquee />
      <Roadmap />
      <AITools />
      <CommunityFeed />
      <Events />
      <ProjectShowcase />
      <LearningResources />
      <Stats />
      <Testimonials />
      <Partners />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}

/* ---------------- NAV ---------------- */
const NAV = [
  { label: "Learn", items: ["PYQs", "Interview Questions", "Contests"] },
  { label: "Explore", items: ["Feed", "Roadmaps", "Events"] },
  { label: "Community", items: null },
  { label: "AI Tools", items: null },
  { label: "Jobs", items: null },
];

function Nav() {
  const [open, setOpen] = useState<string | null>(null);
  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <div className="flex items-center gap-10">
          <a href="/" className="font-display text-xl font-bold tracking-tight text-brand-primary">
            LET'S CODE
          </a>
          <div className="hidden items-center gap-7 lg:flex">
            {NAV.map((n) => (
              <div
                key={n.label}
                className="relative"
                onMouseEnter={() => n.items && setOpen(n.label)}
                onMouseLeave={() => setOpen(null)}
              >
                <button className="text-sm font-medium text-white/70 transition-colors hover:text-brand-primary">
                  {n.label}
                </button>
                {n.items && open === n.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute left-1/2 top-full -translate-x-1/2 pt-3"
                  >
                    <div className="min-w-[180px] rounded-xl border border-border bg-card p-2 shadow-2xl">
                      {n.items.map((it) => (
                        <a
                          key={it}
                          href="#"
                          className="block rounded-lg px-3 py-2 text-sm text-white/80 hover:bg-white/5 hover:text-brand-primary"
                        >
                          {it}
                        </a>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="hidden text-sm font-medium text-white/80 hover:text-brand-primary sm:block">
            Log in
          </button>
          <button className="rounded-full bg-white px-5 py-2 text-sm font-bold text-black transition-colors hover:bg-brand-primary">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
}

function Breadcrumbs() {
  return (
    <div className="border-b border-border bg-background/60">
      <div className="mx-auto flex h-10 max-w-7xl items-center gap-2 px-6 text-xs text-white/40">
        <a href="/" className="hover:text-brand-primary">Home</a>
        <span>/</span>
        <span className="text-white/70">Landing</span>
      </div>
    </div>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section className="relative overflow-hidden pb-32 pt-24">
      <div className="absolute inset-0 grid-pattern grid-pattern-fade animate-grid-drift pointer-events-none" />
      {/* corner accents */}
      <div className="absolute left-6 top-24 hidden h-px w-24 bg-brand-primary md:block" />
      <div className="absolute right-6 top-24 hidden h-px w-24 bg-brand-primary md:block" />

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-brand-surface px-4 py-1.5"
        >
          <span className="size-2 animate-pulse rounded-full bg-brand-primary" />
          <span className="text-xs font-medium uppercase tracking-widest text-white/70">
            Everything a student developer needs, in one place
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="font-display max-w-5xl text-5xl font-bold leading-[0.95] tracking-tighter sm:text-7xl md:text-8xl"
        >
          Everything You Need <br className="hidden sm:block" />
          to Land Your <span className="text-brand-primary">Dream Tech Job</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 max-w-2xl text-lg text-white/60"
        >
          Roadmaps, AI-powered mock interviews, and a community of 100k+ student
          builders — the definitive ecosystem to take you from first commit to first offer.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <button className="group flex items-center justify-center gap-2 rounded-xl bg-brand-primary px-8 py-5 text-base font-bold text-black transition-transform hover:scale-[1.02]">
            Check Job Ready Score — Free
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </button>
          <button className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-8 py-5 text-base font-bold text-white transition-colors hover:bg-white/10">
            Start Mock Interview
          </button>
        </motion.div>

        <div className="mt-20 flex flex-wrap gap-3">
          {["React.js", "System Design", "DevOps", "DSA", "Python", "Machine Learning", "Rust"].map(
            (t) => (
              <span
                key={t}
                className="rounded-lg border border-white/5 bg-brand-surface px-4 py-2 text-sm text-white/70"
              >
                {t}
              </span>
            ),
          )}
        </div>
      </div>
    </section>
  );
}

/* ---------------- MARQUEE ---------------- */
function Marquee() {
  const items = [
    "Trusted by 500+ Campus Communities",
    "Featured in TechCrunch",
    "Open Source Excellence",
    "Built for Developers",
    "100k+ Active Builders",
  ];
  const row = [...items, ...items];
  return (
    <div className="overflow-hidden bg-brand-primary py-5">
      <div className="flex w-max animate-marquee gap-12 whitespace-nowrap px-6">
        {row.map((t, i) => (
          <div key={i} className="flex items-center gap-12">
            <Star className="size-5 fill-black text-black" />
            <span className="font-display text-2xl font-bold uppercase italic text-black">
              {t}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------------- ROADMAP ---------------- */
const ROADMAP = [
  { icon: BookOpen, title: "Learn", text: "DSA roadmaps, system design, DevOps & ML guides" },
  { icon: Code2, title: "Practice", text: "Mock interviews, company PYQs & DSA challenges" },
  { icon: Sparkles, title: "Optimize", text: "AI tools for resume, LinkedIn & job ready score" },
  { icon: Users, title: "Connect", text: "16+ tech & city communities on Discord" },
  { icon: Briefcase, title: "Get Hired", text: "Job alerts, startup opps & interview experiences" },
];

function Roadmap() {
  return (
    <section className="bg-white py-32 text-black">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-20">
          <span className="font-display mb-4 block text-sm font-bold uppercase tracking-widest">
            Your Placement Roadmap
          </span>
          <h2 className="font-display text-5xl font-bold tracking-tighter md:text-7xl">
            From Student to Employed.
          </h2>
          <p className="mt-6 max-w-xl text-base text-black/60">
            Every stage of your placement journey — covered in one platform.
          </p>
        </div>

        <div className="grid gap-px md:grid-cols-5">
          {ROADMAP.map((s, i) => {
            const Icon = s.icon;
            const last = i === ROADMAP.length - 1;
            return (
              <div
                key={s.title}
                className={`group relative border border-neutral-200 p-8 transition-all duration-300 ${
                  last
                    ? "bg-brand-primary hover:bg-black hover:text-white"
                    : i % 2 === 0
                      ? "bg-neutral-50 hover:bg-black hover:text-white"
                      : "bg-neutral-100 hover:bg-black hover:text-white"
                }`}
              >
                <div className="flex items-start justify-between">
                  <Icon className="size-6" />
                  <span className="font-display text-4xl font-bold opacity-20">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="font-display mt-8 text-xl font-bold">{s.title}</h3>
                <p className="mt-2 text-sm opacity-70">{s.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- AI TOOLS ---------------- */
const TOOLS = [
  {
    icon: Code2,
    name: "Code Reviewer",
    desc: "Instant feedback on your PRs with a student-friendly AI auditor trained on best practices.",
    tag: "Most popular",
  },
  {
    icon: FileText,
    name: "Resume Scalpel",
    desc: "Fine-tune your resume for FAANG or startup roles with ATS-matching & keyword density.",
    tag: "New",
  },
  {
    icon: Radar,
    name: "Trend Radar",
    desc: "AI-curated feed of new frameworks, libraries and job-market shifts every week.",
    tag: null,
  },
  {
    icon: Brain,
    name: "Interview Buddy",
    desc: "Voice-simulated coding interviews with personalized feedback loops after every round.",
    tag: null,
  },
  {
    icon: Linkedin,
    name: "LinkedIn Lens",
    desc: "Rewrite your headline, summary and experience to attract recruiters in your domain.",
    tag: null,
  },
  {
    icon: Zap,
    name: "Job Ready Score",
    desc: "A live diagnostic of where you stand, what's missing and the fastest path to ready.",
    tag: "Free",
  },
];

function AITools() {
  return (
    <section className="py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <span className="font-display mb-3 block text-sm font-bold uppercase tracking-widest text-brand-primary">
              AI Toolkit
            </span>
            <h2 className="font-display text-4xl font-bold tracking-tighter md:text-6xl">
              Productivity, but engineered.
            </h2>
          </div>
          <button className="flex items-center gap-2 border-b border-brand-primary pb-1 font-medium text-brand-primary">
            Explore all tools <ArrowUpRight className="size-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {TOOLS.map((t) => {
            const Icon = t.icon;
            return (
              <div
                key={t.name}
                className="group rounded-2xl bg-gradient-to-br from-white/10 to-transparent p-px transition-all hover:from-brand-primary/40"
              >
                <div className="flex h-full flex-col rounded-2xl bg-brand-surface p-8">
                  <div className="flex items-start justify-between">
                    <div className="grid size-12 place-items-center rounded-lg border border-white/10 bg-brand-bg text-brand-primary">
                      <Icon className="size-5" />
                    </div>
                    {t.tag && (
                      <span className="rounded-full border border-brand-primary/30 bg-brand-primary/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-brand-primary">
                        {t.tag}
                      </span>
                    )}
                  </div>
                  <h4 className="font-display mt-6 text-xl font-bold">{t.name}</h4>
                  <p className="mt-3 text-sm text-white/55">{t.desc}</p>
                  <div className="mt-6 flex items-center gap-2 text-sm font-medium text-brand-primary opacity-0 transition-opacity group-hover:opacity-100">
                    Try it <ArrowRight className="size-4" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- COMMUNITY FEED ---------------- */
const FEED = [
  {
    user: "Ananya R.",
    role: "IIT Bombay · Y4",
    text: "Just cleared my Stripe SWE final round 🎉 Mock interviews on Let's Code were the single biggest unlock.",
    likes: 432,
    comments: 58,
  },
  {
    user: "Karthik S.",
    role: "NIT Trichy · Y3",
    text: "Shipped a Rust + WASM image filter. Source in the projects feed — would love some PRs.",
    likes: 271,
    comments: 34,
  },
  {
    user: "Maya L.",
    role: "Bootcamp Grad",
    text: "Switched from non-CS to frontend in 9 months. The DSA roadmap kept me sane.",
    likes: 612,
    comments: 91,
  },
];

function CommunityFeed() {
  return (
    <section className="border-y border-border bg-brand-surface/40 py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 flex items-end justify-between">
          <div>
            <span className="font-display mb-3 block text-sm font-bold uppercase tracking-widest text-brand-primary">
              Community Feed
            </span>
            <h2 className="font-display text-4xl font-bold tracking-tighter md:text-6xl">
              Builders talking to builders.
            </h2>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {FEED.map((p) => (
            <div
              key={p.user}
              className="flex flex-col rounded-2xl border border-border bg-brand-bg p-6"
            >
              <div className="flex items-center gap-3">
                <div className="grid size-10 place-items-center rounded-full bg-brand-primary font-bold text-black">
                  {p.user[0]}
                </div>
                <div>
                  <div className="font-medium">{p.user}</div>
                  <div className="text-xs text-white/40">{p.role}</div>
                </div>
              </div>
              <p className="mt-5 flex-1 text-sm leading-relaxed text-white/75">{p.text}</p>
              <div className="mt-6 flex items-center gap-5 text-xs text-white/40">
                <span className="flex items-center gap-1.5">
                  <Heart className="size-3.5" /> {p.likes}
                </span>
                <span className="flex items-center gap-1.5">
                  <MessageCircle className="size-3.5" /> {p.comments}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- EVENTS ---------------- */
const EVENTS = [
  { date: "DEC 14", title: "AI Engineering Bootcamp", city: "Bengaluru · Hybrid", spots: "120 spots" },
  { date: "DEC 21", title: "System Design Mega Workshop", city: "Online", spots: "Unlimited" },
  { date: "JAN 04", title: "48h Web3 Hackathon", city: "Delhi", spots: "60 teams" },
  { date: "JAN 12", title: "Frontend Performance Deep-Dive", city: "Online", spots: "Unlimited" },
];

function Events() {
  return (
    <section className="py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 flex items-end justify-between">
          <div>
            <span className="font-display mb-3 block text-sm font-bold uppercase tracking-widest text-brand-primary">
              Upcoming Events
            </span>
            <h2 className="font-display text-4xl font-bold tracking-tighter md:text-6xl">
              Workshops, bootcamps, hackathons.
            </h2>
          </div>
          <a href="#" className="hidden text-sm font-medium text-brand-primary sm:inline">
            See all →
          </a>
        </div>

        <div className="overflow-hidden rounded-2xl border border-border">
          {EVENTS.map((e, i) => (
            <div
              key={e.title}
              className={`group flex flex-col items-start justify-between gap-4 px-6 py-6 transition-colors hover:bg-brand-primary hover:text-black md:flex-row md:items-center md:px-10 ${
                i !== EVENTS.length - 1 ? "border-b border-border" : ""
              }`}
            >
              <div className="flex items-center gap-6">
                <div className="font-display text-2xl font-bold tabular-nums text-brand-primary group-hover:text-black">
                  {e.date}
                </div>
                <div>
                  <h4 className="font-display text-lg font-bold">{e.title}</h4>
                  <p className="text-sm text-white/50 group-hover:text-black/70">{e.city}</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <span className="text-sm text-white/60 group-hover:text-black/70">{e.spots}</span>
                <button className="flex items-center gap-2 rounded-full border border-white/20 px-5 py-2 text-sm font-medium transition-colors group-hover:border-black group-hover:bg-black group-hover:text-white">
                  Register <ArrowRight className="size-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- PROJECT SHOWCASE ---------------- */
const PROJECTS = [
  { title: "Pulse — AI study planner", author: "Riya K.", stars: 1240, tags: ["React", "OpenAI"] },
  { title: "Quill — Markdown blog engine", author: "Devansh T.", stars: 880, tags: ["Next.js", "MDX"] },
  { title: "Synth — Lo-fi music DSP", author: "Aarav P.", stars: 612, tags: ["Rust", "WASM"] },
  { title: "Atlas — Campus map", author: "Nila M.", stars: 504, tags: ["Mapbox", "TS"] },
];

function ProjectShowcase() {
  return (
    <section className="border-y border-border bg-brand-surface/40 py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16">
          <span className="font-display mb-3 block text-sm font-bold uppercase tracking-widest text-brand-primary">
            Project Showcase
          </span>
          <h2 className="font-display text-4xl font-bold tracking-tighter md:text-6xl">
            Ship-worthy work, by students.
          </h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PROJECTS.map((p) => (
            <a
              key={p.title}
              href="#"
              className="group flex flex-col rounded-2xl border border-border bg-brand-bg p-6 transition-all hover:-translate-y-1 hover:border-brand-primary"
            >
              <div className="mb-6 grid aspect-video place-items-center rounded-lg border border-white/5 bg-gradient-to-br from-brand-primary/10 to-transparent">
                <Rocket className="size-8 text-brand-primary" />
              </div>
              <h4 className="font-display text-lg font-bold">{p.title}</h4>
              <p className="mt-1 text-xs text-white/40">by {p.author}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-white/10 px-2 py-0.5 text-[10px] font-medium text-white/60"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex items-center justify-between text-xs text-white/40">
                <span className="flex items-center gap-1.5">
                  <Star className="size-3.5" /> {p.stars}
                </span>
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- LEARNING RESOURCES ---------------- */
const RES = [
  { icon: Compass, title: "Roadmaps", text: "Step-by-step paths for DSA, frontend, backend, AI/ML, DevOps." },
  { icon: FileText, title: "PYQs", text: "10,000+ company-tagged previous year questions, fully solved." },
  { icon: MessageSquare, title: "Interview Experiences", text: "Raw write-ups from students who just made it." },
  { icon: Trophy, title: "Contests", text: "Weekly DSA and dev contests with leaderboard glory." },
];

function LearningResources() {
  return (
    <section className="py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 max-w-2xl">
          <span className="font-display mb-3 block text-sm font-bold uppercase tracking-widest text-brand-primary">
            Learning Resources
          </span>
          <h2 className="font-display text-4xl font-bold tracking-tighter md:text-6xl">
            Curated, opinionated, free.
          </h2>
        </div>
        <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {RES.map((r) => {
            const Icon = r.icon;
            return (
              <div
                key={r.title}
                className="group flex flex-col bg-brand-bg p-8 transition-colors hover:bg-brand-surface"
              >
                <Icon className="size-7 text-brand-primary" />
                <h4 className="font-display mt-8 text-xl font-bold">{r.title}</h4>
                <p className="mt-2 text-sm text-white/55">{r.text}</p>
                <div className="mt-8 flex items-center gap-2 text-sm font-medium text-brand-primary">
                  Browse <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- STATS ---------------- */
const STAT_ROWS = [
  { label: "Campus Clubs", value: "450+", detail: "Student-led chapters across 12 countries, hosting weekly meetups." },
  { label: "Projects Shipped", value: "12k", detail: "Open-source builds from members, ranging from CLIs to full SaaS." },
  { label: "Discord Members", value: "45k", detail: "An always-on backchannel for code review, bugs and offer letters." },
  { label: "Placement Rate", value: "88%", detail: "Of students completing the full roadmap secure offers within 4 months." },
];

function Stats() {
  return (
    <section className="bg-brand-primary py-40 text-black">
      <div className="mx-auto max-w-7xl px-6">
        <div className="font-display text-[18vw] font-black leading-[0.85] tracking-tighter md:text-[12vw]">
          1L+
        </div>
        <p className="font-display mt-4 max-w-2xl text-2xl font-bold md:text-3xl">
          Developers, creators and tech enthusiasts building the future together.
        </p>

        <div className="mt-20 border-t border-black/15">
          {STAT_ROWS.map((r) => (
            <StatRow key={r.label} {...r} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatRow({ label, value, detail }: { label: string; value: string; detail: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="grid cursor-default grid-cols-[1fr_auto] items-start gap-4 border-b border-black/15 py-8 transition-all hover:bg-black/5 md:px-6"
    >
      <div className="min-w-0">
        <div className="font-display text-2xl font-bold uppercase tracking-tight md:text-3xl">
          {label}
        </div>
        <motion.p
          initial={false}
          animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
          transition={{ duration: 0.25 }}
          className="overflow-hidden text-sm text-black/70 md:text-base"
        >
          <span className="mt-3 block max-w-2xl">{detail}</span>
        </motion.p>
      </div>
      <div className="font-display shrink-0 text-3xl font-black tabular-nums md:text-5xl">
        {value}
      </div>
    </div>
  );
}

/* ---------------- TESTIMONIALS ---------------- */
const TESTI = [
  {
    text: "I went from struggling with recursion to solving DP rounds at Atlassian. The mock interviews were brutal in the best way.",
    name: "Pranav D.",
    role: "SDE Intern @ Atlassian",
  },
  {
    text: "The community is unlike any other discord I've been in. People actually read your code and care.",
    name: "Sara M.",
    role: "ML Engineer @ Razorpay",
  },
  {
    text: "Resume Scalpel got my resume from 'meh' to 4 callbacks in a week. Wild.",
    name: "Jaya N.",
    role: "Frontend @ Vercel",
  },
];

function Testimonials() {
  return (
    <section className="py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16">
          <span className="font-display mb-3 block text-sm font-bold uppercase tracking-widest text-brand-primary">
            Testimonials
          </span>
          <h2 className="font-display max-w-3xl text-4xl font-bold tracking-tighter md:text-6xl">
            The receipts speak louder.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {TESTI.map((t) => (
            <div
              key={t.name}
              className="flex flex-col rounded-2xl border border-border bg-brand-surface p-8"
            >
              <div className="mb-5 flex gap-1 text-brand-primary">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-current" />
                ))}
              </div>
              <p className="flex-1 text-base leading-relaxed text-white/80">"{t.text}"</p>
              <div className="mt-6 border-t border-border pt-4">
                <div className="font-display font-bold">{t.name}</div>
                <div className="text-xs text-white/40">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- PARTNERS ---------------- */
function Partners() {
  const partners = [
    "IIT BOMBAY", "GDG CLOUD", "MICROSOFT LEARN", "ACM CHAPTER",
    "NIT TRICHY", "DTU DEV", "BITS PILANI", "VIT VELLORE",
  ];
  const row = [...partners, ...partners];
  return (
    <section className="border-y border-border py-20">
      <div className="mx-auto mb-10 max-w-7xl px-6">
        <p className="font-display text-center text-sm font-bold uppercase tracking-widest text-white/40">
          Powered by partnerships with 500+ campus communities
        </p>
      </div>
      <div className="overflow-hidden">
        <div className="flex w-max animate-marquee-slow gap-20 px-10 opacity-50">
          {row.map((p, i) => (
            <span key={i} className="font-display text-2xl font-bold tracking-tight">
              {p}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */
const FAQS = [
  { q: "Is the Job Ready Score really free?", a: "Yes. The core assessment is free, forever, for every student." },
  { q: "How do I join my campus community?", a: "After signup, search for your college or city chapter and request to join — most are auto-approved." },
  { q: "Do the AI tools work for non-CS majors?", a: "Absolutely. Roadmaps and tools adapt to your starting point and target role." },
  { q: "Are mock interviews actually with humans?", a: "Both. Voice AI for unlimited practice, plus weekly peer and mentor live rounds." },
  { q: "Can I contribute content or mentor others?", a: "Yes — apply through the Community tab. We review every applicant." },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[1fr_2fr]">
        <div>
          <span className="font-display mb-3 block text-sm font-bold uppercase tracking-widest text-brand-primary">
            FAQ
          </span>
          <h2 className="font-display text-4xl font-bold tracking-tighter md:text-5xl">
            Questions, answered.
          </h2>
          <p className="mt-6 text-white/55">
            Still stuck? Hop into our Discord and a human will reply in minutes.
          </p>
        </div>
        <div className="border-t border-border">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="border-b border-border">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                >
                  <span className="font-display text-lg font-bold md:text-xl">{f.q}</span>
                  {isOpen ? (
                    <Minus className="size-5 shrink-0 text-brand-primary" />
                  ) : (
                    <Plus className="size-5 shrink-0 text-brand-primary" />
                  )}
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="overflow-hidden"
                >
                  <p className="pb-6 pr-10 text-white/60">{f.a}</p>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- FINAL CTA ---------------- */
function FinalCTA() {
  return (
    <section className="relative overflow-hidden border-y border-border py-32">
      <div className="absolute inset-0 grid-pattern grid-pattern-fade opacity-60" />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <h2 className="font-display text-5xl font-bold tracking-tighter md:text-7xl">
          Your first offer is <span className="text-brand-primary">closer than you think.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-white/60">
          Join 100,000+ student developers leveling up their careers with Let's Code.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button className="flex items-center justify-center gap-2 rounded-xl bg-brand-primary px-8 py-5 text-base font-bold text-black transition-transform hover:scale-[1.02]">
            Check Job Ready Score — Free <Check className="size-4" />
          </button>
          <button className="rounded-xl border border-white/15 bg-white/5 px-8 py-5 text-base font-bold text-white transition-colors hover:bg-white/10">
            Start Mock Interview
          </button>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FOOTER ---------------- */
function Footer() {
  return (
    <footer className="bg-brand-bg py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <span className="font-display mb-6 block text-2xl font-bold text-brand-primary">
              LET'S CODE
            </span>
            <p className="max-w-sm text-sm italic text-white/50">
              "The ultimate ecosystem for the next generation of engineers."
            </p>
            <div className="mt-8 flex gap-3">
              {[MessageCircle, Linkedin, Github].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="grid size-10 place-items-center rounded-full bg-brand-surface text-white/70 transition-colors hover:bg-brand-primary hover:text-black"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <FooterCol
            title="Platform"
            links={["Roadmaps", "AI Tools", "PYQs", "Interview Experiences", "Jobs"]}
          />
          <FooterCol
            title="Company"
            links={["About", "Blog", "Contact", "Privacy Policy", "Terms"]}
          />

          <div>
            <h5 className="font-display mb-6 font-bold">Newsletter</h5>
            <p className="mb-4 text-sm text-white/50">
              Weekly. Career moves, AI tools, drops.
            </p>
            <form className="flex items-center gap-2 rounded-full border border-white/10 bg-brand-surface p-1 pl-4">
              <input
                type="email"
                placeholder="you@code.com"
                className="flex-1 bg-transparent text-sm text-white placeholder-white/30 outline-none"
              />
              <button
                type="submit"
                className="grid size-9 place-items-center rounded-full bg-brand-primary text-black"
                aria-label="Subscribe"
              >
                <Send className="size-4" />
              </button>
            </form>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-xs text-white/30 md:flex-row">
          <p>© 2026 Let's Code Platform. All rights reserved.</p>
          <div className="flex items-center gap-6 uppercase tracking-widest">
            <span className="flex items-center gap-2">
              <span className="size-2 animate-pulse rounded-full bg-brand-primary" />
              All systems operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <h5 className="font-display mb-6 font-bold">{title}</h5>
      <ul className="space-y-3 text-sm text-white/50">
        {links.map((l) => (
          <li key={l}>
            <a href="#" className="hover:text-brand-primary">{l}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
