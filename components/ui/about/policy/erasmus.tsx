
import {
  GraduationCap,
  Users,
  Globe2,
  type LucideIcon,
} from "lucide-react";

type ErasmusProps = {
  participationTitle: string;
  participation: string[];
  mobilityTitle: string;
  mobility: string[];
  inclusionTitle: string;
  inclusion: string[];
};

type SectionProps = {
  title: string;
  paragraphs: string[];
  icon: LucideIcon;
  alternate?: boolean;
};

function Section({
  title,
  paragraphs,
  icon: Icon,
  alternate = false,
}: SectionProps) {
  return (
    <section
      className={
        alternate
          ? "bg-surface-2 px-5 py-16 sm:px-8 lg:py-24"
          : "px-5 py-16 sm:px-8 lg:py-24"
      }
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-7 flex items-center gap-4">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-tint text-brand-ink">
            <Icon size={24} />
          </span>

          <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
            {title}
          </h2>
        </div>

        <div className="max-w-4xl space-y-6 leading-8 text-fg-2">
          {paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Erasmus({
  participationTitle,
  participation,
  mobilityTitle,
  mobility,
  inclusionTitle,
  inclusion,
}: ErasmusProps) {
  return (
    <>
      <Section
        title={participationTitle}
        paragraphs={participation}
        icon={GraduationCap}
      />

      <Section
        title={mobilityTitle}
        paragraphs={mobility}
        icon={Users}
        alternate
      />

      <Section
        title={inclusionTitle}
        paragraphs={inclusion}
        icon={Globe2}
      />
    </>
  );
}
