import { Link, Outlet } from "@tanstack/react-router";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "Our Story" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Book Us" },
] as const;

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link to="/" className="font-script text-3xl text-primary leading-none">
            quindu_braids_
          </Link>
          <nav className="flex items-center gap-1 sm:gap-2">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                className="rounded-full px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary data-[status=active]:bg-secondary data-[status=active]:text-primary"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <Outlet />
      </main>
      <footer className="border-t border-border/60 bg-secondary/40">
        <div className="mx-auto max-w-6xl px-6 py-8 text-center text-sm text-muted-foreground">
          <p className="font-script text-xl text-primary">braids with love for your natural hair</p>
          <p className="mt-2">© {new Date().getFullYear()} quindu_braids_ · Made with care</p>
        </div>
      </footer>
    </div>
  );
}
