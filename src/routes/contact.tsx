import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Book Us — quindu_braids_" },
      { name: "description", content: "Call or message quindu_braids_ on Instagram & TikTok to book your braiding session." },
      { property: "og:title", content: "Book Us — quindu_braids_" },
      { property: "og:description", content: "Call or message us to book your braiding session." },
    ],
  }),
  component: Contact,
});

const contacts = [
  {
    label: "Call or WhatsApp",
    value: "+256 767 984 960",
    href: "tel:+256767984960",
    icon: "☎",
  },
  {
    label: "Instagram",
    value: "@quindu_braids_",
    href: "https://instagram.com/quindu_braids_",
    icon: "◐",
  },
  {
    label: "TikTok",
    value: "@quindu_braids_",
    href: "https://tiktok.com/@quindu_braids_",
    icon: "♪",
  },
];

function Contact() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-16 md:py-24">
      <div className="text-center">
        <p className="font-script text-2xl text-accent">★ get in touch ★</p>
        <h1 className="mt-2 text-4xl font-semibold text-primary md:text-5xl">How to book us</h1>
        <p className="mt-4 text-muted-foreground">
          Pick whichever feels easiest — we'll reply quickly and lock in your appointment.
        </p>
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {contacts.map((c) => (
          <a
            key={c.label}
            href={c.href}
            target={c.href.startsWith("http") ? "_blank" : undefined}
            rel="noreferrer"
            className="group flex flex-col items-center gap-3 rounded-3xl border border-border bg-card p-8 text-center shadow-sm transition-all hover:-translate-y-1 hover:border-accent hover:shadow-xl"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-secondary text-2xl text-primary transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
              {c.icon}
            </div>
            <p className="text-sm uppercase tracking-wide text-muted-foreground">{c.label}</p>
            <p className="font-script text-2xl text-primary">{c.value}</p>
          </a>
        ))}
      </div>

      <div className="mt-16 rounded-3xl bg-gradient-to-br from-secondary via-background to-accent/20 p-10 text-center">
        <p className="font-script text-3xl text-primary">braids with love for your natural hair ♡</p>
      </div>
    </section>
  );
}
