
import { ShieldCheck } from "lucide-react";

type UniversityProps = {
  label: string;
  title: string;
  text: string;
  charterText: string;
  identifiers: string;
  locale: string;
};

export default function University({
  label,
  title,
  text,
  charterText,
  identifiers,
  locale,
}: UniversityProps) {
  const isPolish = locale === "pl";

  const universityCodes = [
    {
      label: "Erasmus+ code",
      value: "PL KIELCE01",
    },
    {
      label: isPolish
        ? "Identyfikator organizacji (OID)"
        : "Organisation ID (OID)",
      value: "E10134039",
    },
    {
      label: isPolish
        ? "Kod identyfikacyjny uczestnika (PIC)"
        : "Participation Identification Code (PIC)",
      value: "952135317",
    },
  ];

  return (
    <section className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-16 lg:py-24">

      {/* UNIVERSITY INFORMATION */}
      <div>
        <span className="text-sm font-bold uppercase tracking-widest text-brand-ink">
          {label}
        </span>

        <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
          {title}
        </h2>

        <p className="mt-5 leading-8 text-fg-2">
          {text}
        </p>

        <p className="mt-4 leading-8 text-fg-2">
          {charterText}
        </p>
      </div>

      {/* ERASMUS+ IDENTIFIERS */}
      <div className="rounded-3xl border border-line bg-surface p-7 shadow-sm sm:p-9">
        <h3 className="flex items-center gap-3 text-xl font-bold">
          <ShieldCheck className="shrink-0 text-brand-ink" />
          {identifiers}
        </h3>

        <dl className="mt-6 space-y-5">
          {universityCodes.map(({ label, value }) => (
            <div
              key={value}
              className="border-b border-line pb-4 last:border-0"
            >
              <dt className="text-sm text-fg-2">
                {label}
              </dt>

              <dd className="mt-1 break-words text-lg font-bold">
                {value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
