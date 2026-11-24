
import { Globe2, Target } from "lucide-react";

type StrategyProps = {
  title: string;
  description: string;
  goals: string[];
  internationalisationTitle: string;
  internationalisation: string[];
};

export function Strategy({
  title,
  description,
  goals,
  internationalisationTitle,
  internationalisation,
}: StrategyProps) {
  return (
    <>
      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
        <div className="mb-7 flex items-center gap-4">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-tint text-brand-ink">
            <Target size={24} />
          </span>

          <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
            {title}
          </h2>
        </div>

        <p className="mb-8 max-w-3xl leading-8 text-fg-2">
          {description}
        </p>

        <div className="space-y-4">
          {goals.map((goal, index) => (
            <div
              key={index}
              className="flex gap-5 rounded-2xl border border-line bg-surface p-6"
            >
              <span className="text-xl font-extrabold text-brand-ink">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="leading-8 text-fg-2">
                {goal}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-surface-2 px-5 py-16 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-7 flex items-center gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-tint text-brand-ink">
              <Globe2 size={24} />
            </span>
            <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
              {internationalisationTitle}
            </h2>
          </div>

          <div className="max-w-4xl space-y-6 leading-8 text-fg-2">
            {internationalisation.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
