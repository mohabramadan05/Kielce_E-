
import { BookOpen, Landmark } from "lucide-react";

type IntroductionProps = {
  title: string;
  history: string;
  origins: string;
  dates: {
    label: string;
    year: string;
    description: string;
  }[];
  tasksTitle: string;
  tasksDescription: string;
  tasks: string[];
};

export function Introduction({
  title,
  history,
  origins,
  dates,
  tasksTitle,
  tasksDescription,
  tasks,
}: IntroductionProps) {
  return (
    <>
      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
        <div className="mb-7 flex items-center gap-4">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-tint text-brand-ink">
            <Landmark size={24} />
          </span>
          <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
            {title}
          </h2>
        </div>

        <div className="max-w-4xl space-y-5 leading-8 text-fg-2">
          <p>{history}</p>
          <p>{origins}</p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {dates.map((date) => (
            <div
              key={date.year}
              className="rounded-2xl border border-line bg-surface-2 p-7"
            >
              <p className="text-sm font-semibold text-fg-2">
                {date.label}
              </p>
              <p className="mt-3 text-4xl font-black text-brand-ink">
                {date.year}
              </p>
              {date.description && (
                <p className="mt-3 text-sm text-fg-2">
                  {date.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="bg-surface-2 px-5 py-16 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-7 flex items-center gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-tint text-brand-ink">
              <BookOpen size={24} />
            </span>
            <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
              {tasksTitle}
            </h2>
          </div>

          <p className="mb-8 max-w-3xl leading-8 text-fg-2">
            {tasksDescription}
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            {tasks.map((task, index) => (
              <div
                key={index}
                className="flex gap-4 rounded-2xl border border-line bg-surface p-6"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-tint text-sm font-bold text-brand-ink">
                  {index + 1}
                </span>
                <p className="leading-7 text-fg-2">
                  {task}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
