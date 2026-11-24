
import {
  GraduationCap,
  ClipboardCheck,
  Send,
  UserRoundPlus,
  FileCheck2,
  type LucideIcon,
} from "lucide-react";

type ProcessSection = {
  title: string;
  items: string[];
};

type ProcessProps = {
  title: string;
  subtitle: string;
  sections: ProcessSection[];
};

const icons: LucideIcon[] = [
  GraduationCap,
  ClipboardCheck,
  Send,
  UserRoundPlus,
  FileCheck2,
];

// Supports clickable links written in en.json and pl.json.
// Example: [Erasmus+ Programme Guide](https://example.com)
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

export function Process({
  title,
  subtitle,
  sections,
}: ProcessProps) {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
      <div className="mb-10">
        <h2 className="text-2xl font-extrabold text-fg sm:text-3xl">
          {title}
        </h2>

        <p className="mt-4 max-w-3xl leading-8 text-fg-2">
          {renderText(subtitle)}
        </p>
      </div>

      <div className="space-y-6">
        {sections.map((section, index) => {
          const Icon = icons[index] ?? FileCheck2;

          return (
            <article
              key={section.title}
              className="
                rounded-2xl border border-line
                bg-surface p-6
                transition-shadow duration-300
                hover:shadow-lg
                sm:p-8
              "
            >
              <div className="flex items-center gap-4">
                <span
                  className="
                    flex h-12 w-12 shrink-0
                    items-center justify-center
                    rounded-xl bg-brand-tint
                    text-brand-ink
                  "
                >
                  <Icon size={24} />
                </span>

                <div>
                  <p className="text-sm font-semibold text-brand-ink">
                    {String(index + 1).padStart(2, "0")}
                  </p>

                  <h3 className="text-xl font-bold text-fg sm:text-2xl">
                    {section.title}
                  </h3>
                </div>
              </div>

              <ul className="mt-6 space-y-4">
                {section.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="flex items-start gap-3 leading-8 text-fg-2"
                  >
                    <span
                      className="
                        mt-3 h-2 w-2 shrink-0
                        rounded-full bg-brand
                      "
                    />

                    <span>
                      {renderText(item)}
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>
    </section>
  );
}
