import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">Error 404</p>
        <h1 className="mt-3 font-display text-6xl font-bold tracking-tight text-foreground">
          Page not found
        </h1>
        <p className="mt-3 text-sm leading-6 text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Return home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Empire Labs | AI Software Development & Venture Studio in Johannesburg" },
      {
        name: "description",
        content:
          "Empire Labs (Empire Digitals) is a Johannesburg AI and software engineering studio building autonomous AI agents, secure mobile apps, web platforms, and digital ventures including Nexora AI, PlayMyJam, and MrDocs.",
      },
      {
        name: "keywords",
        content:
          "Empire Labs, Empire Digitals, AI software development South Africa, Johannesburg software studio, autonomous AI agents, Nexora AI, PlayMyJam, MrDocs, custom web development, mobile app development Johannesburg, cybersecurity engineering, MVP development studio",
      },
      { name: "author", content: "Empire Labs" },
      { name: "creator", content: "Empire Labs" },
      { name: "publisher", content: "Empire Labs" },
      {
        name: "robots",
        content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      },
      {
        name: "googlebot",
        content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      },
      { name: "theme-color", content: "#0d111a" },
      { name: "color-scheme", content: "dark" },
      { name: "application-name", content: "Empire Labs" },
      { name: "geo.region", content: "ZA-GP" },
      { name: "geo.placename", content: "Johannesburg" },
      { name: "geo.position", content: "-26.2141;28.0337" },
      { name: "ICBM", content: "-26.2141, 28.0337" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_ZA" },
      { property: "og:site_name", content: "Empire Labs" },
      { property: "og:url", content: "https://www.empirelabs.digital/" },
      {
        property: "og:title",
        content: "Empire Labs | AI Software Development & Venture Studio",
      },
      {
        property: "og:description",
        content:
          "Johannesburg AI and product engineering studio building autonomous AI platforms, biometric security apps, and scalable ventures including Nexora AI, PlayMyJam, and MrDocs.",
      },
      { property: "og:image", content: "https://www.empirelabs.digital/logo.png" },
      { property: "og:image:type", content: "image/png" },
      { property: "og:image:alt", content: "Empire Labs — AI & Product Engineering Studio" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Empire Labs | AI Software Development & Venture Studio",
      },
      {
        name: "twitter:description",
        content:
          "Autonomous AI platforms, secure mobile apps, and digital ventures engineered in Johannesburg — home of Nexora AI, PlayMyJam, and MrDocs.",
      },
      { name: "twitter:image", content: "https://www.empirelabs.digital/logo.png" },
      { name: "twitter:image:alt", content: "Empire Labs — AI & Product Engineering Studio" },
    ],
    links: [
      { rel: "canonical", href: "https://www.empirelabs.digital/" },
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "icon", type: "image/png", sizes: "512x512", href: "/logo-mark.png" },
      { rel: "apple-touch-icon", href: "/logo-mark.png" },
      { rel: "manifest", href: "/site.webmanifest" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&family=Space+Grotesk:wght@500;600;700&display=swap",
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <HeadContent />
      </head>
      <body className="antialiased selection:bg-primary/25 selection:text-foreground">
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
