
import { FileText, Info } from "lucide-react";

type AgreementRule = {
  title: string;
  description: string;
};

type AgreementProps = {
  title: string;
  fundingNote: string;
  rules: AgreementRule[];
};

// Converts link syntax from the translation JSON into
// clickable links inside agreement paragraphs.
function renderText(text: string) {
  const regex =
    /\[([^\]]+)\]\((https?:\/\/[^)\s]+|mailto:[^)\s]+|\/[^)\s]+)\)/g;

  const parts = text.split(regex);

  return parts.map((part, index) => {
    if (index % 3 === 1) {
      const href = parts[index + 1];
      const external = href.startsWith("http");

      return (
        <a
          key={index}
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          className="
            font-semibold
            text-blue-600
            underline
            decoration-blue-500/60
            underline-offset-4
            transition-colors
            hover:text-blue-800
            dark:text-blue-400
            dark:hover:text-blue-300
          "
        >
          {part}
        </a>
      );
    }

    if (index % 3 === 2) {
      return null;
    }

    return part;
  });
}

export function Agreement({
  title,
  fundingNote,
  rules,
}: AgreementProps) {
  return (
    <section className="bg-surface-2 px-5 py-16 sm:px-8 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-9 flex items-center gap-4">
          <span
            className="
              flex h-12 w-12 shrink-0
              items-center justify-center
              rounded-2xl bg-brand-tint
              text-brand-ink
            "
          >
            <FileText size={24} />
          </span>

          <h2 className="text-2xl font-extrabold text-fg sm:text-3xl">
            {title}
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {rules.map((rule) => (
            <article
              key={rule.title}
              className="
                rounded-2xl border border-line
                bg-surface p-7
                transition-shadow duration-300
                hover:shadow-md
              "
            >
              <h3 className="text-xl font-bold text-fg">
                {rule.title}
              </h3>

              <p className="mt-4 whitespace-pre-line leading-8 text-fg-2">
                {renderText(rule.description)}
              </p>
            </article>
          ))}
        </div>

        <div
          className="
            mt-7 flex items-start gap-3
            rounded-2xl border border-line
            bg-surface p-6
          "
        >
          <Info
            size={22}
            className="mt-1 shrink-0 text-brand-ink"
          />

          <p className="leading-7 text-fg-2">
            {renderText(fundingNote)}
          </p>
        </div>
      </div>
    </section>
  );
}
