
import { ArrowDownToLine } from "lucide-react";

type DocumentsProps = {
  title: string;
  description: string;
  languageNote: string;
  downloadLabel: string;
};

export function Documents({
  title,
  description,
  languageNote,
  downloadLabel,
}: DocumentsProps) {
  return (
    <section className="px-5 py-16 sm:px-8 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-start justify-between gap-8 rounded-3xl bg-brand p-8 text-white md:flex-row md:items-center md:p-10">
          <div>
            <h2 className="text-2xl font-extrabold sm:text-3xl">
              {title}
            </h2>

            <p className="mt-3 max-w-xl leading-7 text-white/85">
              {description}
            </p>

            {languageNote && (
              <p className="mt-3 text-sm text-white/70">
                {languageNote}
              </p>
            )}
          </div>

          <a
            href="/assets/Strategia-wlaczenia.pdf"
            download="Strategia-wlaczenia.pdf"
            className="inline-flex shrink-0 items-center gap-3 rounded-full bg-white px-6 py-3 font-semibold text-[#11406e] transition hover:bg-gray-100"
          >
            <ArrowDownToLine size={20} />
            {downloadLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
