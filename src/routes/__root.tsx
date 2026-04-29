import { createRootRoute, HeadContent, Link, Scripts } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-primary">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          This braid style doesn't exist yet.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            Back home
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
      { title: "quindu_braids_ — braids with love for your natural hair" },
      { name: "description", content: "Cornrows, twists, and Marley braids in Uganda. Affordable, beautiful styles for your natural hair." },
      { property: "og:title", content: "quindu_braids_ — braids with love for your natural hair" },
      { property: "og:description", content: "Cornrows, twists, and Marley braids in Uganda. Affordable, beautiful styles for your natural hair." },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: "quindu_braids_ — braids with love for your natural hair" },
      { name: "twitter:description", content: "Cornrows, twists, and Marley braids in Uganda. Affordable, beautiful styles for your natural hair." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/f6f1cc22-9b52-4c32-9c13-23272d398577/id-preview-0f2b4b4d--d19face0-6177-4061-baa1-ab9b23ed472d.lovable.app-1777453695403.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/f6f1cc22-9b52-4c32-9c13-23272d398577/id-preview-0f2b4b4d--d19face0-6177-4061-baa1-ab9b23ed472d.lovable.app-1777453695403.png" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootShell,
  component: () => <Layout />,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}
