import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-braids.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-24">
        <div className="space-y-6">
          <p className="font-script text-3xl text-accent">welcome to our site</p>
          <h1 className="text-5xl font-semibold leading-tight text-primary md:text-6xl">
            Braids with love<br />
            <span className="italic text-accent">for your natural hair</span>
          </h1>
          <p className="max-w-md text-lg text-muted-foreground">
            Cornrows, natural twists, Marley braids and kinky twists — handcrafted with patience, care, and a whole lot of love.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/20 transition-transform hover:scale-105"
            >
              Book a session →
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center rounded-full border border-border bg-card px-6 py-3 text-sm font-medium text-foreground hover:bg-secondary"
            >
              See styles & prices
            </Link>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-accent/30 via-rose/20 to-transparent blur-2xl" />
          <img
            src={heroImg}
            alt="Long, beautifully braided natural hair viewed from the back"
            className="relative aspect-[4/5] w-full rounded-[2rem] object-cover shadow-2xl"
            loading="eager"
          />
          <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-card px-5 py-3 shadow-xl md:block">
            <p className="font-script text-2xl text-primary">made for you ♡</p>
          </div>
        </div>
      </div>
    </section>
  );
}
