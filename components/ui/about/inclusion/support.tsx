
import { HeartHandshake } from "lucide-react";

type Initiative = {
  title: string;
  description: string;
};

type SupportProps = {
  title: string;
  intro: string;
  initiatives: Initiative[];
};

export function Support({
  title,
  intro,
  initiatives,
}: SupportProps) {
  return (
    <section className="bg-surface-2 px-5 py-16 sm:px-8 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-7 flex items-center gap-4">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-tint text-brand-ink">
            <HeartHandshake size={24} />
          </span>

          <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
            {title}
          </h2>
        </div>

        <p className="mb-8 leading-8 text-fg-2">
          {intro}
        </p>

        <div className="grid gap-5 md:grid-cols-2">
          {initiatives.map((item, index) => (
            <article
              key={item.title}
              className="rounded-2xl border border-line bg-surface p-7"
            >
              <div className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-tint font-bold text-brand-ink">
                  {index + 1}
                </span>

                <div>
                  <h3 className="text-lg font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-3 leading-7 text-fg-2">
                    {item.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
