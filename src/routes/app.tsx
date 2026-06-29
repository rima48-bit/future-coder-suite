import { createFileRoute, Link, Outlet, useRouterState } from "@tanstack/react-router";
import {
  LayoutDashboard,
  User,
  FileText,
  MessageSquare,
  Bookmark,
  Gift,
  PenSquare,
  BookOpen,
  Code2,
  ScrollText,
  Terminal,
  Radar,
  Briefcase,
  FileBadge,
  Files,
  Users,
  Flame,
  ChevronLeft,
} from "lucide-react";

export const Route = createFileRoute("/app")({
  component: AppLayout,
});

const NAV_GROUPS = [
  {
    label: "General",
    items: [
      { to: "/app/dashboard", label: "Dashboard", icon: LayoutDashboard },
      { to: "/app/profile", label: "Profile", icon: User },
      { to: "/app/my-posts", label: "My Posts", icon: FileText },
      { to: "/app/interview-experiences", label: "Interview Experiences", icon: MessageSquare },
      { to: "/app/bookmarks", label: "Bookmarks", icon: Bookmark },
      { to: "/app/goodies", label: "Goodies", icon: Gift },
      { to: "/app/publish", label: "Publish Content", icon: PenSquare },
    ],
  },
  {
    label: "Learn & Practice",
    items: [
      { to: "/app/courses", label: "Courses", icon: BookOpen },
      { to: "/app/practice", label: "Practice (DSA)", icon: Code2 },
      { to: "/app/cheatsheets", label: "Cheat Sheets", icon: ScrollText },
      { to: "/app/sandbox", label: "Live IDE Sandbox", icon: Terminal },
    ],
  },
  {
    label: "Career Tools",
    items: [
      { to: "/app/job-finder", label: "AI Job Finder", icon: Radar },
      { to: "/app/job-tracker", label: "Job Tracker", icon: Briefcase },
      { to: "/app/resume-templates", label: "Resume Templates", icon: FileBadge },
      { to: "/app/my-resumes", label: "My Resumes", icon: Files },
    ],
  },
  {
    label: "Professional Network",
    items: [{ to: "/app/network", label: "Find Coders (Network)", icon: Users }],
  },
  {
    label: "Challenges",
    items: [{ to: "/app/dsa-challenge", label: "100 Days DSA Challenge", icon: Flame }],
  },
] as const;

function AppLayout() {
  const path = useRouterState({ select: (s) => s.location.pathname });
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="grid min-h-screen lg:grid-cols-[280px_1fr]">
        <aside className="hidden border-r border-border bg-brand-surface/40 lg:block">
          <div className="sticky top-0 max-h-screen overflow-y-auto p-6">
            <Link to="/" className="mb-8 flex items-center gap-2 text-sm text-white/60 hover:text-brand-primary">
              <ChevronLeft className="size-4" /> Back to site
            </Link>
            <Link to="/" className="font-display mb-8 block text-xl font-bold text-brand-primary">
              LET'S CODE
            </Link>
            <nav className="space-y-7">
              {NAV_GROUPS.map((g) => (
                <div key={g.label}>
                  <div className="font-display mb-3 text-[10px] font-bold uppercase tracking-widest text-white/40">
                    {g.label}
                  </div>
                  <ul className="space-y-1">
                    {g.items.map((it) => {
                      const Icon = it.icon;
                      const active = path === it.to;
                      return (
                        <li key={it.to}>
                          <Link
                            to={it.to}
                            className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors ${
                              active
                                ? "bg-brand-primary/15 text-brand-primary"
                                : "text-white/70 hover:bg-white/5 hover:text-white"
                            }`}
                          >
                            <Icon className="size-4" />
                            {it.label}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </nav>
          </div>
        </aside>
        <main className="min-w-0">
          <Outlet />
        </main>
      </div>
    </div>
  );
}