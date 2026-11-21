
import {
  BookOpen,
  FileText,
  ExternalLink,
} from "lucide-react";

type DocumentsProps = {
  title: string;
  intro: string;
  charter: string;
  policy: string;
  inclusion: string;
};


const documentLinks = {
  charter: "/assets/erasmus-charter.pdf",
  policy: "/assets/policy-statement.pdf",
  inclusion: "/assets/inclusion-strategy.pdf",
};


export default function Documents({
  title,
  intro,
  charter,
  policy,
  inclusion,
}: DocumentsProps) {
  const documents = [
    {
      key: "charter",
      name: charter,
      href: documentLinks.charter,
    },
    {
      key: "policy",
      name: policy,
      href: documentLinks.policy,
    },
    {
      key: "inclusion",
      name: inclusion,
      href: documentLinks.inclusion,
    },
  ];

  return (
    <section className="border-t border-line bg-surface-2 px-5 py-16 sm:px-8 lg:py-20">
      <div className="mx-auto max-w-6xl">

        {/* SECTION TITLE */}
        <div className="flex items-center gap-3">
          <BookOpen
            size={28}
            className="shrink-0 text-brand-ink"
          />

          <h2 className="text-3xl font-extrabold">
            {title}
          </h2>
        </div>

        <p className="mt-4 max-w-2xl leading-7 text-fg-2">
          {intro}
        </p>

        {/* DOCUMENT CARDS */}
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {documents.map((document) => (
            <a
              key={document.key}
              href={document.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex min-h-36 flex-col justify-between rounded-2xl border border-line bg-surface p-6 transition hover:border-brand-ink hover:shadow-lg"
            >
              <FileText
                size={26}
                className="text-brand-ink"
              />

              <span className="mt-5 flex items-center justify-between gap-3 font-semibold">
                {document.name}

                <ExternalLink
                  size={18}
                  className="shrink-0 text-fg-2 group-hover:text-brand-ink"
                />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
