import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgeCheck,
  Bot,
  BrainCircuit,
  Code2,
  Cpu,
  DatabaseZap,
  FileSignature,
  Fingerprint,
  Globe2,
  Layers3,
  LockKeyhole,
  Mail,
  MapPin,
  Music2,
  Network,
  Phone,
  Rocket,
  ScanFace,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  Sparkles,
  Star,
  TerminalSquare,
  Workflow,
} from "lucide-react";

import heroImage from "@/assets/empire-tech-workspace.jpg";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Empire Digitals | AI Software Development" },
      {
        name: "description",
        content:
          "Empire Digitals builds dark-mode modern software, AI apps, vibe-coded prototypes, cybersecurity systems, mobile apps and enterprise web platforms.",
      },
      { property: "og:title", content: "Empire Digitals | AI Software Development" },
      {
        property: "og:description",
        content:
          "A Johannesburg software studio building AI products, secure platforms, mobile apps and company ventures including PlayMyJam.",
      },
    ],
  }),
  component: Index,
});

const projects = [
  {
    name: "PlayMyJam",
    badge: "Music bidding platform",
    href: "https://playmyjam.empiredigitals.org/",
    icon: Music2,
    description:
      "A nightlife music product where fans influence live sets, DJs monetize demand, venues discover audience taste and promoters build music-led communities.",
    metrics: ["Live song bidding", "DJ dashboards", "Club discovery"],
  },
  {
    name: "Valid",
    badge: "AI anti-counterfeit system",
    href: "https://valid.empiredigitals.org/",
    icon: ShieldCheck,
    description:
      "Brand-protection software for product authentication, QR identity, verification scans and traceability workflows across fashion and consumer goods.",
    metrics: ["QR verification", "Counterfeit defense", "Product intelligence"],
  },
  {
    name: "MrDocs",
    badge: "Biometric document security",
    href: "https://play.google.com/store/apps/details?id=com.empiredigitals.doneDeal",
    icon: FileSignature,
    description:
      "A secure signing experience that connects facial verification, tamper-aware QR codes and identity evidence for contracts, NDAs and sensitive documents.",
    metrics: ["Selfie proof", "Secure QR", "Audit trails"],
  },
  {
    name: "The Lifestyle",
    badge: "On-demand lifestyle network",
    href: "https://lifestyle.empiredigitals.org/",
    icon: Sparkles,
    description:
      "A premium marketplace for bookings, social experiences, transport and lifestyle services with polished mobile-first user journeys.",
    metrics: ["Marketplace UX", "Bookings", "Concierge flows"],
  },
  {
    name: "SmartStore",
    badge: "Commerce infrastructure",
    href: "https://smartstore.empiredigitals.org/",
    icon: ShoppingBag,
    description:
      "Digital storefront tooling for sellers that need fast online presence, payment-ready commerce flows and customer acquisition foundations.",
    metrics: ["Online stores", "Seller tools", "Growth pages"],
  },
];

const services = [
  {
    title: "AI Products & Automation",
    icon: BrainCircuit,
    copy: "Custom copilots, fraud signals, smart workflows, document intelligence and practical AI features that reduce manual work.",
  },
  {
    title: "Vibe Coding Sprints",
    icon: Bot,
    copy: "Rapid product ideation, AI-assisted prototyping and launchable MVPs for founders who need momentum without losing engineering quality.",
  },
  {
    title: "Cybersecurity Engineering",
    icon: LockKeyhole,
    copy: "Authentication, role-based access, secure APIs, audit trails, QR trust layers and threat-aware architecture for sensitive products.",
  },
  {
    title: "Web & Mobile Platforms",
    icon: Smartphone,
    copy: "Responsive web apps, native-feeling mobile experiences, dashboards, portals and scalable systems built for real business operations.",
  },
  {
    title: "Cloud & Data Systems",
    icon: DatabaseZap,
    copy: "Databases, storage, server functions, analytics pipelines and backend workflows for products that need reliability from day one.",
  },
  {
    title: "Product Design Systems",
    icon: Layers3,
    copy: "Sharp UI, design tokens, reusable components, conversion-focused interfaces and brand-consistent digital experiences.",
  },
];

const capabilities = [
  { label: "AI copilots", icon: Cpu },
  { label: "Secure portals", icon: ShieldCheck },
  { label: "Mobile apps", icon: Smartphone },
  { label: "API platforms", icon: Network },
  { label: "Automation", icon: Workflow },
  { label: "MVP launches", icon: Rocket },
];

const process = [
  "Map the product opportunity, risks and user journey.",
  "Prototype fast with AI-assisted build loops and strong design direction.",
  "Engineer secure data, auth, integrations and product workflows.",
  "Launch, measure and improve the platform around real user behavior.",
];

function Index() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <section className="relative isolate min-h-[92vh] bg-hero-gradient text-foreground">
        <div className="absolute inset-0 grid-glow opacity-40" aria-hidden="true" />
        <img
          src={heroImage}
          alt="Empire Digitals software engineers collaborating in a modern technology studio"
          className="absolute inset-0 h-full w-full object-cover opacity-28 mix-blend-screen"
          width={1600}
          height={1000}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/70 to-background" aria-hidden="true" />

        <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
          <a href="/" className="group flex items-center gap-3" aria-label="Empire Digitals home">
            <span className="flex size-11 items-center justify-center rounded-lg border border-border bg-card text-primary shadow-panel backdrop-blur-md transition-transform group-hover:scale-105">
              <Globe2 className="size-5" />
            </span>
            <span className="text-lg font-black tracking-tight">Empire Digitals</span>
          </a>
          <nav className="hidden items-center gap-7 text-sm font-semibold text-muted-foreground md:flex">
            <a className="transition-colors hover:text-foreground" href="#services">Services</a>
            <a className="transition-colors hover:text-foreground" href="#projects">Projects</a>
            <a className="transition-colors hover:text-foreground" href="#contact">Contact</a>
          </nav>
          <Button asChild variant="glass" className="hidden md:inline-flex">
            <a href="mailto:info@empiredigitals.org">Start a project</a>
          </Button>
        </header>

        <div className="relative z-10 mx-auto grid max-w-7xl gap-12 px-6 pb-16 pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:pb-24 lg:pt-24">
          <div className="reveal-up max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold text-muted-foreground shadow-panel backdrop-blur-md">
              <BadgeCheck className="size-4 text-primary" /> Johannesburg software, AI and security studio
            </div>
            <h1 className="text-balance text-5xl font-black leading-[0.95] tracking-tight md:text-7xl lg:text-8xl">
              Dark-mode software for bold digital empires.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl">
              Empire Digitals designs and engineers AI products, secure platforms, mobile apps, web systems and vibe-coded MVPs for companies that want speed, polish and serious technical depth.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="hero" size="lg" className="h-12 px-6">
                <a href="#projects">Explore the portfolio <ArrowRight className="size-4" /></a>
              </Button>
              <Button asChild variant="glass" size="lg" className="h-12 px-6">
                <a href="tel:+27105102699">Call +27 10 510 2699</a>
              </Button>
            </div>
            <div className="mt-10 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-3">
              {capabilities.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-3 text-sm font-bold shadow-panel backdrop-blur-md">
                    <Icon className="size-4 text-primary" /> {item.label}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="reveal-up rounded-2xl border border-border bg-card p-4 shadow-glow backdrop-blur-xl [animation-delay:120ms]">
            <div className="rounded-xl bg-panel-gradient p-5 shadow-panel">
              <div className="mb-6 flex items-center justify-between">
                <span className="text-sm font-bold uppercase tracking-[0.24em] text-muted-foreground">Build console</span>
                <span className="rounded-full bg-accent-gradient px-3 py-1 text-xs font-black text-primary-foreground">ONLINE</span>
              </div>
              <div className="rounded-lg border border-border bg-background/50 p-4 font-mono text-sm leading-7 text-muted-foreground">
                <p><span className="text-primary">empire</span> init ai-platform</p>
                <p><span className="text-primary">stack</span> web · mobile · cloud · security</p>
                <p><span className="text-primary">mode</span> vibe-code sprint + senior review</p>
                <p><span className="text-primary">ship</span> polished product, not placeholder UI</p>
              </div>
              <div className="mt-5 grid gap-3">
                {projects.slice(0, 4).map((project, index) => {
                  const Icon = project.icon;
                  return (
                    <a key={project.name} href={project.href} className="group flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-all hover:-translate-y-1 hover:shadow-panel">
                      <span className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-secondary text-primary"><Icon className="size-5" /></span>
                      <span className="min-w-0 flex-1">
                        <span className="block font-black">{project.name}</span>
                        <span className="block truncate text-sm text-muted-foreground">{project.badge}</span>
                      </span>
                      <span className="text-sm font-black text-primary">0{index + 1}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.28em] text-primary">What we build</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">Software with AI speed, security discipline and product taste.</h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article key={service.title} className="group rounded-xl border border-border bg-card p-6 shadow-panel transition-all hover:-translate-y-1 hover:border-primary/50">
                  <div className="mb-7 flex size-13 items-center justify-center rounded-lg bg-accent-gradient text-primary-foreground shadow-glow"><Icon className="size-6" /></div>
                  <h3 className="text-xl font-black">{service.title}</h3>
                  <p className="mt-3 leading-7 text-muted-foreground">{service.copy}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-surface px-6 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.28em] text-primary">Engineering approach</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">Creative when it matters. Rigorous where it counts.</h2>
            <p className="mt-5 leading-8 text-muted-foreground">
              We use AI-assisted development to move quickly, then harden the work with architecture, secure data handling, clean interfaces and launch-ready execution.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {process.map((item, index) => (
              <div key={item} className="rounded-xl border border-border bg-card p-6 shadow-panel">
                <div className="mb-5 flex size-10 items-center justify-center rounded-lg bg-secondary font-black text-primary">{index + 1}</div>
                <p className="font-bold leading-7">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-3xl">
              <p className="text-sm font-black uppercase tracking-[0.28em] text-primary">Company projects</p>
              <h2 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">A portfolio of platforms with real market logic.</h2>
            </div>
            <p className="max-w-sm leading-7 text-muted-foreground">Music technology, anti-counterfeit AI, secure documents, lifestyle marketplaces and commerce systems built under one company vision.</p>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {projects.map((project) => {
              const Icon = project.icon;
              return (
                <article key={project.name} className="group overflow-hidden rounded-xl border border-border bg-card shadow-panel transition-all hover:-translate-y-1 hover:shadow-glow">
                  <div className="h-1.5 bg-accent-gradient" />
                  <div className="p-7">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <span className="flex size-14 items-center justify-center rounded-lg bg-secondary text-primary"><Icon className="size-6" /></span>
                        <div>
                          <h3 className="text-2xl font-black">{project.name}</h3>
                          <p className="text-sm font-bold text-primary">{project.badge}</p>
                        </div>
                      </div>
                      <Star className="size-5 text-accent" />
                    </div>
                    <p className="mt-6 leading-8 text-muted-foreground">{project.description}</p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.metrics.map((metric) => (
                        <span key={metric} className="rounded-full bg-secondary px-3 py-1 text-xs font-bold text-secondary-foreground">{metric}</span>
                      ))}
                    </div>
                    <a href={project.href} className="mt-7 inline-flex items-center gap-2 font-black text-primary transition-transform group-hover:translate-x-1">
                      Explore project <ArrowRight className="size-4" />
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-6 pb-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 rounded-2xl border border-border bg-panel-gradient p-8 shadow-glow md:grid-cols-[0.9fr_1.1fr] md:p-12">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.28em] text-primary">Why Empire Digitals</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">A studio for founders and teams who want more than a template.</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { text: "AI-native delivery without junior-looking shortcuts", icon: TerminalSquare },
              { text: "Security-first systems for identity and trust", icon: ScanFace },
              { text: "Product thinking from prototype to growth", icon: Fingerprint },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.text} className="rounded-xl border border-border bg-card p-5 shadow-panel backdrop-blur-md">
                  <Icon className="mb-5 size-6 text-primary" />
                  <p className="font-bold leading-6">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <footer id="contact" className="border-t border-border bg-surface px-6 py-14 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <h2 className="text-3xl font-black">Empire Digitals</h2>
            <p className="mt-2 max-w-xl text-muted-foreground">80 Booysens Rd, Johannesburg, Selby. Available Mon-Sat, 9:00-17:00.</p>
          </div>
          <div className="flex flex-col gap-3 text-sm font-bold md:items-end">
            <a className="inline-flex items-center gap-2 text-primary" href="tel:+27105102699"><Phone className="size-4" /> +27 10 510 2699</a>
            <a className="inline-flex items-center gap-2 text-primary" href="mailto:info@empiredigitals.org"><Mail className="size-4" /> <span suppressHydrationWarning>info@empiredigitals.org</span></a>
            <span className="inline-flex items-center gap-2 text-muted-foreground"><MapPin className="size-4" /> Johannesburg, South Africa</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
