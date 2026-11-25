import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  BrainCircuit,
  BriefcaseBusiness,
  Cpu,
  DatabaseZap,
  FileSignature,
  Globe2,
  GraduationCap,
  Layers3,
  LockKeyhole,
  Mail,
  MapPin,
  Menu,
  Music2,
  Network,
  Phone,
  Plane,
  Rocket,
  ShieldCheck,
  Smartphone,
  Sparkles,
  TrendingUp,
  Workflow,
  X,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Empire Labs | AI & Product Engineering Studio" },
      {
        name: "description",
        content:
          "Empire Labs is a Johannesburg software and AI engineering studio building autonomous platforms, secure digital products, mobile apps, and venture software including Nexora AI, PlayMyJam, MrDocs, and The Lifestyle.",
      },
      { property: "og:title", content: "Empire Labs | AI & Product Engineering Studio" },
      {
        property: "og:description",
        content:
          "A Johannesburg software studio building autonomous AI products, secure platforms, mobile apps, and company ventures including Nexora AI and PlayMyJam.",
      },
    ],
  }),
  component: Index,
});

interface Project {
  id: string;
  index: string;
  name: string;
  tagline: string;
  category: string;
  href: string;
  domain: string;
  status: string;
  icon: typeof Bot;
  description: string;
  highlights: string[];
  featured?: boolean;
}

const projects: Project[] = [
  {
    id: "nexora",
    index: "01",
    name: "Nexora AI",
    tagline: "Autonomous Workforce Platform",
    category: "Autonomous AI",
    href: "https://nexora.empirelabs.digital/",
    domain: "nexora.empirelabs.digital",
    status: "Flagship",
    icon: BrainCircuit,
    featured: true,
    description:
      "An autonomous AI workforce engineered to accelerate high-stakes human milestones — drafting tailored CVs, assembling international relocation and visa dossiers, preparing investor pitch memos, and executing global scholarship applications with autonomous outreach.",
    highlights: [
      "Employment & CV agents",
      "Relocation & visa dossiers",
      "Investor pitch memos",
      "Global scholarship outreach",
    ],
  },
  {
    id: "playmyjam",
    index: "02",
    name: "PlayMyJam",
    tagline: "Live Music Bidding Platform",
    category: "Music Tech",
    href: "https://playmyjam.empiredigitals.org/",
    domain: "playmyjam.empiredigitals.org",
    status: "Live",
    icon: Music2,
    description:
      "A nightlife music economy where fans bid to influence live sets, DJs monetize real-time demand, venues uncover audience taste, and promoters build music-led communities.",
    highlights: ["Live song bidding", "DJ dashboards", "Club discovery"],
  },
  {
    id: "mrdocs",
    index: "03",
    name: "MrDocs",
    tagline: "Biometric Document Security",
    category: "Trust & Identity",
    href: "https://play.google.com/store/apps/details?id=com.empiredigitals.doneDeal",
    domain: "play.google.com/store",
    status: "Android",
    icon: FileSignature,
    description:
      "A tamper-evident signing platform pairing facial verification, cryptographic QR codes, and verifiable identity evidence for contracts, NDAs, and sensitive agreements.",
    highlights: ["Facial verification", "Tamper-aware QR", "Verifiable audit trails"],
  },
  {
    id: "lifestyle",
    index: "04",
    name: "The Lifestyle",
    tagline: "On-Demand Lifestyle Network",
    category: "Marketplace",
    href: "https://lifestyle.empiredigitals.org/",
    domain: "lifestyle.empiredigitals.org",
    status: "Live",
    icon: Sparkles,
    description:
      "A curated marketplace connecting members to bookings, social experiences, private transport, and concierge services through polished mobile-first journeys.",
    highlights: ["Marketplace UX", "Concierge bookings", "Mobile-first flows"],
  },
];

const nexoraTracks = [
  {
    label: "Employment",
    detail: "Tailored CVs & autonomous job applications",
    icon: BriefcaseBusiness,
  },
  {
    label: "Relocation & Visas",
    detail: "Structured international pathway dossiers",
    icon: Plane,
  },
  {
    label: "Investors",
    detail: "Fundraising pitch memos & outreach",
    icon: TrendingUp,
  },
  {
    label: "Scholarships",
    detail: "Global scholarship matching & drafting",
    icon: GraduationCap,
  },
];

const services = [
  {
    index: "01",
    title: "Autonomous AI & Agents",
    icon: BrainCircuit,
    copy: "Production AI agents, custom copilots, document intelligence, and automated outreach pipelines designed around measurable outcomes.",
  },
  {
    index: "02",
    title: "Rapid MVP Sprints",
    icon: Bot,
    copy: "AI-accelerated prototyping paired with senior architecture so founders go from concept to launchable product in weeks, not quarters.",
  },
  {
    index: "03",
    title: "Security & Identity Systems",
    icon: LockKeyhole,
    copy: "Biometric verification, role-based access, cryptographic QR trust layers, hardened APIs, and verifiable audit trails.",
  },
  {
    index: "04",
    title: "Web & Mobile Platforms",
    icon: Smartphone,
    copy: "High-craft web applications, native-feeling mobile products, real-time dashboards, and multi-sided marketplaces built to scale.",
  },
  {
    index: "05",
    title: "Cloud & Data Architecture",
    icon: DatabaseZap,
    copy: "Resilient backend infrastructure, serverless workflows, data pipelines, and observability engineered for day-one reliability.",
  },
  {
    index: "06",
    title: "Interface & Design Systems",
    icon: Layers3,
    copy: "Cohesive visual identities, reusable component libraries, and conversion-focused product interfaces with zero template bloat.",
  },
];

const capabilities = [
  { label: "Autonomous AI", icon: Cpu },
  { label: "Secure Identity", icon: ShieldCheck },
  { label: "Mobile & Web", icon: Smartphone },
  { label: "API Infrastructure", icon: Network },
  { label: "Workflow Automation", icon: Workflow },
  { label: "Venture Launches", icon: Rocket },
];

const processSteps = [
  {
    step: "01",
    title: "Frame the system",
    copy: "Map the market opportunity, technical risks, and core user loops before writing a line of production code.",
  },
  {
    step: "02",
    title: "Prototype at velocity",
    copy: "Use AI-assisted engineering loops and tight design direction to put interactive software in front of users fast.",
  },
  {
    step: "03",
    title: "Harden for scale",
    copy: "Lock down authentication, data models, integrations, and edge-case resilience with senior engineering review.",
  },
  {
    step: "04",
    title: "Ship & compound",
    copy: "Launch cleanly, instrument real user behavior, and iterate continuously as the product gains traction.",
  },
];

function Index() {
  const [activeProjectId, setActiveProjectId] = useState<string>(projects[0].id);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const activeProject = projects.find((p) => p.id === activeProjectId) ?? projects[0];
  const ActiveIcon = activeProject.icon;
  const featuredProject = projects[0];
  const secondaryProjects = projects.slice(1);

  return (
    <div className="relative min-h-screen overflow-x-clip bg-background text-foreground">
      {/* Ambient top mesh & subtle dot texture */}
      <div className="pointer-events-none fixed inset-0 -z-10 bg-mesh-hero" aria-hidden="true" />
      <div
        className="pointer-events-none fixed inset-0 -z-10 bg-dot-grid opacity-35 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_78%)]"
        aria-hidden="true"
      />

      {/* Sticky Header */}
      <header className="sticky top-0 z-50 border-b border-border/70 bg-background/75 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
          <a href="#" className="group flex items-center gap-3" aria-label="Empire Labs home">
            <span className="relative flex size-9 items-center justify-center rounded-lg border border-border bg-secondary text-foreground transition-colors group-hover:border-primary/50 group-hover:text-primary">
              <Globe2 className="size-4" />
            </span>
            <div className="flex items-baseline gap-2.5">
              <span className="font-display text-base font-bold tracking-tight">Empire Labs</span>
              <span className="hidden font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground sm:inline">
                JHB // ZA
              </span>
            </div>
          </a>

          <nav className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex">
            <a className="transition-colors hover:text-foreground" href="#projects">
              Ventures
            </a>
            <a className="transition-colors hover:text-foreground" href="#services">
              Capabilities
            </a>
            <a className="transition-colors hover:text-foreground" href="#process">
              Process
            </a>
            <a className="transition-colors hover:text-foreground" href="#contact">
              Contact
            </a>
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <Button asChild variant="glass" size="sm">
              <a href="mailto:info@empirelabs.digital">Start a project</a>
            </Button>
          </div>

          <button
            type="button"
            className="inline-flex size-9 items-center justify-center rounded-lg border border-border bg-card text-foreground md:hidden"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="border-t border-border bg-background/95 px-6 py-4 backdrop-blur-xl md:hidden">
            <nav className="flex flex-col gap-3 text-sm font-medium text-muted-foreground">
              <a
                className="py-1.5 transition-colors hover:text-foreground"
                href="#projects"
                onClick={() => setMobileMenuOpen(false)}
              >
                Ventures
              </a>
              <a
                className="py-1.5 transition-colors hover:text-foreground"
                href="#services"
                onClick={() => setMobileMenuOpen(false)}
              >
                Capabilities
              </a>
              <a
                className="py-1.5 transition-colors hover:text-foreground"
                href="#process"
                onClick={() => setMobileMenuOpen(false)}
              >
                Process
              </a>
              <a
                className="py-1.5 transition-colors hover:text-foreground"
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
              <Button asChild variant="hero" size="sm" className="mt-2 w-full">
                <a href="mailto:info@empirelabs.digital" onClick={() => setMobileMenuOpen(false)}>
                  Start a project
                </a>
              </Button>
            </nav>
          </div>
        )}
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative px-6 pb-20 pt-16 lg:px-8 lg:pb-28 lg:pt-24">
          <div className="mx-auto grid max-w-7xl items-start gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            {/* Left Copy */}
            <div className="reveal-up">
              <div className="inline-flex items-center gap-2.5 rounded-full border border-border bg-card/80 px-3.5 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur-md">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal opacity-70" />
                  <span className="relative inline-flex size-2 rounded-full bg-signal" />
                </span>
                Johannesburg AI &amp; Software Engineering Studio
              </div>

              <h1 className="mt-7 text-balance font-display text-5xl font-bold leading-[1.02] tracking-[-0.03em] sm:text-6xl lg:text-7xl">
                Engineering <span className="text-gradient-studio">autonomous AI</span> &amp;
                high-trust software.
              </h1>

              <p className="mt-6 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                Empire Labs designs and builds AI workforce platforms, secure mobile apps, and
                venture-grade digital products — combining rapid AI-native execution with senior
                systems engineering.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-3.5">
                <Button asChild variant="hero" size="lg">
                  <a href="#projects">
                    Explore ventures <ArrowRight className="size-4" />
                  </a>
                </Button>
                <Button asChild variant="glass" size="lg">
                  <a href="https://nexora.empirelabs.digital/" target="_blank" rel="noreferrer">
                    Launch Nexora AI <ArrowUpRight className="size-4" />
                  </a>
                </Button>
              </div>

              {/* Studio Metrics Strip */}
              <div className="mt-12 grid max-w-xl grid-cols-3 gap-6 border-t border-border/80 pt-7">
                <div>
                  <p className="font-display text-2xl font-bold tracking-tight sm:text-3xl">04</p>
                  <p className="mt-1 text-xs text-muted-foreground">Live ventures shipped</p>
                </div>
                <div>
                  <p className="font-display text-2xl font-bold tracking-tight sm:text-3xl">AI+</p>
                  <p className="mt-1 text-xs text-muted-foreground">Autonomous agent systems</p>
                </div>
                <div>
                  <p className="font-display text-2xl font-bold tracking-tight sm:text-3xl">JHB</p>
                  <p className="mt-1 text-xs text-muted-foreground">Built in South Africa</p>
                </div>
              </div>
            </div>

            {/* Right Interactive Venture Console */}
            <div className="reveal-up [animation-delay:120ms]">
              <div className="overflow-hidden rounded-2xl border border-border bg-card-sheen shadow-panel backdrop-blur-xl">
                {/* Window Header */}
                <div className="flex items-center justify-between border-b border-border/80 px-5 py-3.5">
                  <div className="flex items-center gap-2">
                    <span className="size-2.5 rounded-full bg-border" />
                    <span className="size-2.5 rounded-full bg-border" />
                    <span className="size-2.5 rounded-full bg-border" />
                    <span className="ml-2 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                      venture.index
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-signal/30 bg-signal/10 px-2.5 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-signal">
                    <span className="size-1.5 rounded-full bg-signal" /> 4 Active
                  </span>
                </div>

                {/* Project Switcher Tabs */}
                <div className="grid grid-cols-2 gap-1.5 border-b border-border/80 bg-background/40 p-2.5 sm:grid-cols-4">
                  {projects.map((project) => {
                    const isActive = project.id === activeProject.id;
                    return (
                      <button
                        key={project.id}
                        type="button"
                        onClick={() => setActiveProjectId(project.id)}
                        className={cn(
                          "flex flex-col items-start rounded-lg px-3 py-2 text-left transition-all",
                          isActive
                            ? "bg-secondary text-foreground shadow-sm ring-1 ring-primary/40"
                            : "text-muted-foreground hover:bg-secondary/50 hover:text-foreground",
                        )}
                      >
                        <span className="font-mono text-[10px] text-primary">{project.index}</span>
                        <span className="mt-0.5 truncate text-xs font-semibold">
                          {project.name}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Active Venture Preview */}
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3.5">
                      <span className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary">
                        <ActiveIcon className="size-5" />
                      </span>
                      <div>
                        <div className="flex items-center gap-2">
                          <h2 className="font-display text-xl font-bold">{activeProject.name}</h2>
                          <span className="rounded-full border border-border bg-secondary px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                            {activeProject.status}
                          </span>
                        </div>
                        <p className="text-sm text-primary">{activeProject.tagline}</p>
                      </div>
                    </div>
                  </div>

                  <p className="mt-5 text-sm leading-6 text-muted-foreground">
                    {activeProject.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {activeProject.highlights.map((item) => (
                      <span
                        key={item}
                        className="rounded-md border border-border/80 bg-background/60 px-2.5 py-1 font-mono text-[11px] text-secondary-foreground"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-border/80 pt-5">
                    <span className="truncate font-mono text-xs text-muted-foreground">
                      {activeProject.domain}
                    </span>
                    <a
                      href={activeProject.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-foreground transition-colors hover:text-primary"
                    >
                      Visit platform <ArrowUpRight className="size-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Capability Ribbon */}
          <div className="mx-auto mt-16 max-w-7xl border-y border-border/70 py-5">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
              {capabilities.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="flex items-center gap-2.5 text-xs font-medium text-muted-foreground"
                  >
                    <Icon className="size-4 shrink-0 text-primary" />
                    <span>{item.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Ventures / Portfolio Section */}
        <section id="projects" className="px-6 py-20 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div className="max-w-2xl">
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.24em] text-primary">
                  Selected Ventures
                </p>
                <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-5xl">
                  Platforms engineered with real market logic.
                </h2>
              </div>
              <p className="max-w-sm text-sm leading-6 text-muted-foreground">
                Autonomous AI agents, live nightlife music economies, biometric document security,
                and on-demand lifestyle networks built under one studio roof.
              </p>
            </div>

            {/* Flagship Spotlight: Nexora AI */}
            <article className="group relative mt-12 overflow-hidden rounded-2xl border border-primary/30 bg-card-sheen p-7 shadow-glow transition-all hover:border-primary/50 md:p-10">
              <div
                className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-primary/15 blur-3xl transition-opacity group-hover:opacity-100"
                aria-hidden="true"
              />
              <div className="relative grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
                <div>
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/15 px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-wider text-primary">
                      <BrainCircuit className="size-3.5" /> Flagship Venture
                    </span>
                    <span className="rounded-full border border-border bg-background/60 px-3 py-1 font-mono text-[11px] text-muted-foreground">
                      {featuredProject.domain}
                    </span>
                  </div>

                  <h3 className="mt-5 font-display text-3xl font-bold tracking-tight sm:text-4xl">
                    {featuredProject.name}
                  </h3>
                  <p className="mt-1 text-base font-medium text-primary">
                    {featuredProject.tagline}
                  </p>

                  <p className="mt-5 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
                    {featuredProject.description}
                  </p>

                  <div className="mt-7 flex flex-wrap items-center gap-4">
                    <Button asChild variant="hero" size="default">
                      <a href={featuredProject.href} target="_blank" rel="noreferrer">
                        Explore Nexora AI <ArrowUpRight className="size-4" />
                      </a>
                    </Button>
                    <span className="font-mono text-xs text-muted-foreground">
                      Autonomous outreach · Multi-domain agents
                    </span>
                  </div>
                </div>

                {/* Nexora Agent Tracks Visual Panel */}
                <div className="grid gap-3 sm:grid-cols-2">
                  {nexoraTracks.map((track) => {
                    const TrackIcon = track.icon;
                    return (
                      <div
                        key={track.label}
                        className="rounded-xl border border-border/80 bg-background/65 p-4 backdrop-blur-md transition-colors hover:border-primary/40"
                      >
                        <div className="flex items-center justify-between">
                          <span className="flex size-9 items-center justify-center rounded-lg bg-primary/12 text-primary">
                            <TrackIcon className="size-4" />
                          </span>
                          <span className="font-mono text-[10px] uppercase tracking-wider text-signal">
                            Active
                          </span>
                        </div>
                        <p className="mt-3.5 font-display text-sm font-bold">{track.label}</p>
                        <p className="mt-1 text-xs leading-5 text-muted-foreground">
                          {track.detail}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </article>

            {/* Remaining 3 Ventures in Clean 3-Column Bento Grid */}
            <div className="mt-6 grid gap-6 md:grid-cols-3">
              {secondaryProjects.map((project) => {
                const Icon = project.icon;
                return (
                  <article
                    key={project.id}
                    className="group flex flex-col justify-between rounded-2xl border border-border bg-card-sheen p-7 shadow-panel transition-all hover:-translate-y-1 hover:border-foreground/20"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-3">
                        <span className="flex size-11 items-center justify-center rounded-xl border border-border bg-secondary text-primary transition-colors group-hover:border-primary/40">
                          <Icon className="size-5" />
                        </span>
                        <span className="font-mono text-xs text-muted-foreground">
                          {project.index} / {project.category}
                        </span>
                      </div>

                      <h3 className="mt-6 font-display text-2xl font-bold tracking-tight">
                        {project.name}
                      </h3>
                      <p className="mt-1 text-sm font-medium text-primary">{project.tagline}</p>

                      <p className="mt-4 text-sm leading-6 text-muted-foreground">
                        {project.description}
                      </p>
                    </div>

                    <div className="mt-6 border-t border-border/70 pt-5">
                      <div className="flex flex-wrap gap-1.5">
                        {project.highlights.map((metric) => (
                          <span
                            key={metric}
                            className="rounded-md bg-secondary/90 px-2.5 py-1 font-mono text-[11px] text-secondary-foreground"
                          >
                            {metric}
                          </span>
                        ))}
                      </div>
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-foreground transition-colors group-hover:text-primary"
                      >
                        Explore project{" "}
                        <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </a>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Services / Capabilities Section */}
        <section
          id="services"
          className="border-y border-border/70 bg-surface/65 px-6 py-20 lg:px-8 lg:py-28"
        >
          <div className="mx-auto max-w-7xl">
            <div className="max-w-2xl">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.24em] text-primary">
                Capabilities
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-5xl">
                AI velocity, security discipline, and product craft.
              </h2>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <article
                    key={service.title}
                    className="group rounded-2xl border border-border bg-card/85 p-6 transition-all hover:border-primary/40 hover:bg-surface-elevated"
                  >
                    <div className="flex items-center justify-between">
                      <span className="flex size-10 items-center justify-center rounded-lg border border-border bg-secondary text-primary transition-colors group-hover:border-primary/40">
                        <Icon className="size-5" />
                      </span>
                      <span className="font-mono text-xs text-muted-foreground">
                        {service.index}
                      </span>
                    </div>
                    <h3 className="mt-6 font-display text-lg font-bold tracking-tight">
                      {service.title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-6 text-muted-foreground">{service.copy}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Engineering Process Section */}
        <section id="process" className="px-6 py-20 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div className="max-w-2xl">
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.24em] text-primary">
                  How We Ship
                </p>
                <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-5xl">
                  Creative where it matters. Rigorous where it counts.
                </h2>
              </div>
              <p className="max-w-md text-sm leading-6 text-muted-foreground">
                We combine AI-assisted build loops with senior engineering discipline — delivering
                clean interfaces, resilient data systems, and production-ready launches.
              </p>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {processSteps.map((item) => (
                <div
                  key={item.step}
                  className="relative rounded-2xl border border-border bg-card-sheen p-6 shadow-panel"
                >
                  <span className="font-mono text-xs font-semibold text-primary">{item.step}</span>
                  <h3 className="mt-4 font-display text-lg font-bold tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-6 text-muted-foreground">{item.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Closing CTA Band */}
        <section className="px-6 pb-20 lg:px-8 lg:pb-28">
          <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl border border-primary/25 bg-card-sheen p-8 shadow-glow md:p-14">
            <div className="grid items-center gap-8 lg:grid-cols-[1.2fr_0.8fr]">
              <div>
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.24em] text-primary">
                  Start Building
                </p>
                <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-5xl">
                  Ready to ship something beyond a template?
                </h2>
                <p className="mt-4 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
                  Whether you need an autonomous AI platform, a high-trust mobile app, or a rapid
                  venture MVP, our Johannesburg engineering team is ready to partner.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
                <Button asChild variant="hero" size="lg">
                  <a href="mailto:info@empirelabs.digital">
                    <Mail className="size-4" /> Email the studio
                  </a>
                </Button>
                <Button asChild variant="glass" size="lg">
                  <a href="tel:+27105102699">
                    <Phone className="size-4" /> +27 10 510 2699
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="contact" className="border-t border-border/80 bg-surface/80 px-6 py-14 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.2fr_0.8fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex size-8 items-center justify-center rounded-lg border border-border bg-secondary text-primary">
                <Globe2 className="size-4" />
              </span>
              <span className="font-display text-lg font-bold tracking-tight">Empire Labs</span>
            </div>
            <p className="mt-3 max-w-sm text-sm leading-6 text-muted-foreground">
              Software, autonomous AI, and digital venture engineering studio based in Johannesburg,
              South Africa.
            </p>
          </div>

          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Ventures
            </p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {projects.map((project) => (
                <li key={project.id}>
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {project.name} <ArrowUpRight className="size-3.5" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Contact
            </p>
            <div className="mt-4 flex flex-col gap-2.5 text-sm">
              <a
                className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
                href="tel:+27105102699"
              >
                <Phone className="size-4 text-primary" /> +27 10 510 2699
              </a>
              <a
                className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
                href="mailto:info@empirelabs.digital"
              >
                <Mail className="size-4 text-primary" />{" "}
                <span suppressHydrationWarning>info@empirelabs.digital</span>
              </a>
              <span className="inline-flex items-start gap-2 text-muted-foreground">
                <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
                <span>80 Booysens Rd, Selby, Johannesburg · Mon–Sat, 09:00–17:00</span>
              </span>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-12 flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-border/70 pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Empire Labs. All rights reserved.</p>
          <p className="font-mono uppercase tracking-[0.18em]">Johannesburg · South Africa</p>
        </div>
      </footer>
    </div>
  );
}
