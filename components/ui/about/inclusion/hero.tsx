
import { Accessibility } from "lucide-react";

type HeroProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
};

export function Hero({ eyebrow, title, subtitle }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-[#081e33] px-5 py-20 text-white sm:px-8 lg:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-white/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-semibold">
          <Accessibility size={17} />
          {eyebrow}
        </span>

        <h1 className="mt-7 max-w-4xl text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
          {title}
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-white/85">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
