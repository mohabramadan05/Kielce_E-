
import { BookOpen } from "lucide-react";

type IntroductionProps = {
  title: string;
  description: string;
};

export function Introduction({
  title,
  description,
}: IntroductionProps) {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
      <div className="mb-7 flex items-center gap-4">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-tint text-brand-ink">
          <BookOpen size={24} />
        </span>

        <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
          {title}
        </h2>
      </div>

      <p className="max-w-4xl leading-8 text-fg-2">
        {description}
      </p>
    </section>
  );
}
