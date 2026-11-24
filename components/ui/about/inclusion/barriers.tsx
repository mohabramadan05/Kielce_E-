
import { CheckCircle2, HandHeart, Target, Users } from "lucide-react";

type Objective = {
  title: string;
  description: string;
};

type BarriersProps = {
  objectivesTitle: string;
  objectivesIntro: string;
  objectives: Objective[];
  targetsTitle: string;
  targetsIntro: string;
  targets: string[];
};

export function Barriers({
  objectivesTitle,
  objectivesIntro,
  objectives,
  targetsTitle,
  targetsIntro,
  targets,
}: BarriersProps) {
  return (
    <>
      <section className="bg-surface-2 px-5 py-16 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-7 flex items-center gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-tint text-brand-ink">
              <Target size={24} />
            </span>

            <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
              {objectivesTitle}
            </h2>
          </div>

          <p className="mb-8 leading-8 text-fg-2">
            {objectivesIntro}
          </p>

          <div className="grid gap-5 md:grid-cols-2">
            {objectives.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-line bg-surface p-7"
              >
                <span className="inline-flex rounded-xl bg-brand-tint p-3 text-brand-ink">
                  <CheckCircle2 size={25} />
                </span>

                <h3 className="mt-5 text-xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-fg-2">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
        <div className="mb-7 flex items-center gap-4">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-tint text-brand-ink">
            <Users size={24} />
          </span>

          <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
            {targetsTitle}
          </h2>
        </div>

        <p className="mb-8 leading-8 text-fg-2">
          {targetsIntro}
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          {targets.map((item, index) => (
            <div
              key={index}
              className="flex gap-4 rounded-2xl border border-line bg-surface-2 p-6"
            >
              <HandHeart
                size={23}
                className="mt-1 shrink-0 text-brand-ink"
              />

              <p className="leading-7 text-fg-2">
                {item}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
