
import { ArrowRight, Sparkles } from "lucide-react";

type HeroProps = {
  eyebrow: string;
  title: string;
  intro: string;
  explore: string;
};

export default function Hero({
  eyebrow,
  title,
  intro,
  explore,
}: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-brand px-5 py-20 text-white sm:px-8 lg:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-36 h-96 w-96 rounded-full border border-white/15"
      />

      <div className="relative mx-auto max-w-6xl">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-semibold">
          <Sparkles size={16} />
          {eyebrow}
        </span>

        <h1 className="mt-7 max-w-3xl text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
          {title}
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-white/85">
          {intro}
        </p>

        <a
          href="#opportunities"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-[#11406e] transition hover:bg-gray-100"
        >
          {explore}
          <ArrowRight size={18} />
        </a>
      </div>
    </section>
  );
}
