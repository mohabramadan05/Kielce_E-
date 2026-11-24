
import { ClipboardCheck, Globe2 } from "lucide-react";

type CommitmentsProps = {
  monitoringTitle: string;
  monitoringText: string;
  summaryTitle: string;
  summaryText: string;
};

export function Commitments({
  monitoringTitle,
  monitoringText,
  summaryTitle,
  summaryText,
}: CommitmentsProps) {
  return (
    <>
      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
        <div className="mb-7 flex items-center gap-4">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-tint text-brand-ink">
            <ClipboardCheck size={24} />
          </span>

          <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
            {monitoringTitle}
          </h2>
        </div>

        <p className="max-w-4xl leading-8 text-fg-2">
          {monitoringText}
        </p>
      </section>

      <section className="bg-surface-2 px-5 py-16 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-7 flex items-center gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-tint text-brand-ink">
              <Globe2 size={24} />
            </span>

            <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
              {summaryTitle}
            </h2>
          </div>

          <p className="max-w-4xl leading-8 text-fg-2">
            {summaryText}
          </p>
        </div>
      </section>
    </>
  );
}
