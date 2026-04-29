import { createFileRoute } from "@tanstack/react-router";
import aboutImg from "@/assets/about-twists.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Our Story — quindu_braids_" },
      { name: "description", content: "How quindu_braids_ began — a young girl, YouTube tutorials, and a dream to braid." },
      { property: "og:title", content: "Our Story — quindu_braids_" },
      { property: "og:description", content: "How quindu_braids_ began." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <div className="grid gap-12 md:grid-cols-2 md:items-center">
        <img
          src={aboutImg}
          alt="Close-up of neat, uniform natural hair twists"
          className="aspect-square w-full rounded-[2rem] object-cover shadow-xl"
        />
        <div className="space-y-5">
          <p className="font-script text-2xl text-accent">our story</p>
          <h1 className="text-4xl font-semibold text-primary md:text-5xl">How it all started</h1>
          <p className="text-lg leading-relaxed text-muted-foreground">
            It all started with a young girl who always loved braiding hair during the holidays
            but could not afford it. So she taught herself by watching YouTube videos and
            practiced on her own head.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground">
            She later talked to some of her friends who allowed her to braid them — and that's
            how her dream began.
          </p>
          <div className="flex gap-2 pt-4 text-3xl">
            <span>♡</span><span>♡</span><span>♡</span>
          </div>
        </div>
      </div>
    </section>
  );
}
