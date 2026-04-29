import { createFileRoute, Link } from "@tanstack/react-router";
import cornrows from "@/assets/service-cornrows.jpg";
import twists from "@/assets/service-twists.jpg";
import marley from "@/assets/service-marley.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services & Prices — quindu_braids_" },
      { name: "description", content: "Cornrows, natural hair twists, Marley braids and kinky twists. Transparent pricing in UGX." },
      { property: "og:title", content: "Services & Prices — quindu_braids_" },
      { property: "og:description", content: "Cornrows, twists, and Marley braids — transparent prices." },
    ],
  }),
  component: Services,
});

const services = [
  {
    name: "Natural Hair Twists",
    price: "15,000 – 25,000 UGX",
    desc: "All sizes — perfect for protecting and showing off your natural texture.",
    img: cornrows,
  },
  {
    name: "Cornrows",
    price: "30,000 – 50,000 UGX",
    desc: "Classic, neat cornrows tailored to your scalp pattern.",
    img: twists,
  },
  {
    name: "Marley Braids / Kinky Twists",
    price: "60,000 – 80,000 UGX",
    desc: "Long-lasting and lightweight. Pricing depends on length and size.",
    img: marley,
  },
];

function Services() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <p className="font-script text-2xl text-accent">what we offer</p>
        <h1 className="mt-2 text-4xl font-semibold text-primary md:text-5xl">
          Styles & pricing
        </h1>
        <p className="mt-4 text-muted-foreground">
          Honest prices, beautiful results. Reach out to book your slot.
        </p>
      </div>

      <div className="mt-14 grid gap-8 md:grid-cols-3">
        {services.map((s) => (
          <article
            key={s.name}
            className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={s.img}
                alt={s.name}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="flex flex-1 flex-col gap-3 p-6">
              <h2 className="text-2xl font-semibold text-primary">{s.name}</h2>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
              <p className="mt-auto pt-4 font-script text-2xl text-accent">{s.price}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-14 text-center">
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/20 hover:scale-105 transition-transform"
        >
          Book your style →
        </Link>
      </div>
    </section>
  );
}
