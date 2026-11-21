
import { Globe2 } from "lucide-react";

type IntroductionProps = {
  whatLabel: string;
  whatTitle: string;
  whatText1: string;
  whatText2: string;
  periodTitle: string;
  periodText: string;
  budgetLabel: string;
  billion: string;
};

export default function Introduction({
  whatLabel,
  whatTitle,
  whatText1,
  whatText2,
  periodTitle,
  periodText,
  budgetLabel,
  billion,
}: IntroductionProps) {
  return (
    <section className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:py-24">

      {/* ABOUT ERASMUS+ */}
      <div>
        <span className="text-sm font-bold uppercase tracking-widest text-brand-ink">
          {whatLabel}
        </span>

        <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
          {whatTitle}
        </h2>

        <p className="mt-6 leading-8 text-fg-2">
          {whatText1}
        </p>

        <p className="mt-4 leading-8 text-fg-2">
          {whatText2}
        </p>
      </div>

      {/* PROGRAMME INFORMATION */}
      <div className="rounded-3xl border border-line bg-surface-2 p-7 sm:p-9">
        <Globe2
          size={32}
          className="text-brand-ink"
        />

        <h3 className="mt-6 text-xl font-bold">
          {periodTitle}
        </h3>

        <p className="mt-3 text-4xl font-black text-brand-ink">
          2021–2027
        </p>

        <p className="mt-4 text-sm leading-6 text-fg-2">
          {periodText}
        </p>

        <div className="mt-7 border-t border-line pt-6">
          <p className="text-sm text-fg-2">
            {budgetLabel}
          </p>

          <p className="mt-2 text-3xl font-bold">
            €26.2 {billion}
          </p>
        </div>
      </div>

    </section>
  );
}
