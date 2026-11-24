
"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import {
  CalendarDays,
  Newspaper,
  X,
} from "lucide-react";

import type { NewsArticle } from "@/lib/news";
import { NewsCard } from "./news-card";

type NewsListProps = {
  articles: NewsArticle[];
  locale: string;
  featuredLabel: string;
  latestTitle: string;
  readMore: string;
};

// Converts Markdown links in JSON paragraphs into real links.
// Example: "Visit the [website](https://example.com)."
function renderArticleText(text: string) {
  const pattern = /\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g;

  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }

    parts.push(
      <a
        key={`${match.index}-${match[2]}`}
        href={match[2]}
        target="_blank"
        rel="noopener noreferrer"
        className="font-semibold text-blue-600 underline decoration-blue-500/50 underline-offset-4 transition-colors hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
      >
        {match[1]}
      </a>
    );

    lastIndex = pattern.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts.length > 0 ? parts : text;
}

export function NewsList({
  articles,
  locale,
  featuredLabel,
  latestTitle,
  readMore,
}: NewsListProps) {
  const [selected, setSelected] = useState<NewsArticle | null>(null);
  const [mounted, setMounted] = useState(false);

  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  const isPolish = locale === "pl";

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!selected) return;

    previousFocusRef.current =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusFrame = requestAnimationFrame(() => {
      closeButtonRef.current?.focus();
    });

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setSelected(null);
      }

      if (event.key === "Tab" && dialogRef.current) {
        const focusable = Array.from(
          dialogRef.current.querySelectorAll<HTMLElement>(
            'button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])'
          )
        );

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (!first || !last) {
          event.preventDefault();
          return;
        }

        if (
          event.shiftKey &&
          document.activeElement === first
        ) {
          event.preventDefault();
          last.focus();
        } else if (
          !event.shiftKey &&
          document.activeElement === last
        ) {
          event.preventDefault();
          first.focus();
        }
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      cancelAnimationFrame(focusFrame);
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      previousFocusRef.current?.focus();
    };
  }, [selected]);

  const [featured, ...remaining] = articles;

  if (!featured) return null;

  const selectedDate = selected
    ? new Intl.DateTimeFormat(
        isPolish ? "pl-PL" : "en-GB",
        {
          day: "numeric",
          month: "long",
          year: "numeric",
          timeZone: "UTC",
        }
      ).format(new Date(`${selected.date}T00:00:00Z`))
    : "";

  return (
    <>
      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-20">
        <p className="mb-6 text-sm font-bold uppercase tracking-widest text-brand-ink">
          {featuredLabel}
        </p>

        <NewsCard
          article={featured}
          locale={locale}
          readMore={readMore}
          onOpen={setSelected}
          featured
        />
      </section>

      {remaining.length > 0 && (
        <section className="bg-surface-2 px-5 py-16 sm:px-8 lg:py-24">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-9 text-2xl font-extrabold tracking-tight sm:text-3xl">
              {latestTitle}
            </h2>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {remaining.map((article) => (
                <NewsCard
                  key={article.slug}
                  article={article}
                  locale={locale}
                  readMore={readMore}
                  onOpen={setSelected}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {mounted &&
        selected &&
        createPortal(
          <div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 p-2 backdrop-blur-sm sm:p-6"
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) {
                setSelected(null);
              }
            }}
          >
            <motion.div
              key={selected.slug}
              ref={dialogRef}
              initial={{
                opacity: 0,
                scale: 0.82,
                y: 45,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              transition={{
                type: "spring",
                stiffness: 230,
                damping: 26,
                mass: 0.85,
              }}
              role="dialog"
              aria-modal="true"
              aria-label={selected.title}
              className="relative flex h-[95dvh] w-full max-w-7xl flex-col overflow-hidden rounded-2xl border border-line bg-surface text-fg shadow-2xl outline-none sm:h-[92dvh] sm:rounded-3xl"
            >
              {/* Top close button */}
              <button
                ref={closeButtonRef}
                type="button"
                aria-label={isPolish ? "Zamknij" : "Close"}
                onClick={() => setSelected(null)}
                className="absolute right-4 top-4 z-30 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-black/80 text-white transition hover:scale-110 hover:bg-black"
              >
                <X size={24} />
              </button>

              {/* Scrollable article */}
              <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain">
                {/* Full image — no cropping */}
                {selected.image ? (
                  <div className="flex w-full items-center justify-center bg-surface-2">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={selected.image}
                      alt={selected.title}
                      className="block max-h-[65dvh] w-full object-contain"
                    />
                  </div>
                ) : (
                  <div className="flex h-60 items-center justify-center bg-brand-tint">
                    <Newspaper
                      size={80}
                      className="text-brand-ink/40"
                    />
                  </div>
                )}

                {/* Article content */}
                <div className="mx-auto max-w-5xl px-6 py-10 sm:px-12 sm:py-14">
                  <div className="mb-6 flex items-center gap-2 text-sm font-medium text-fg-2">
                    <CalendarDays size={18} />

                    <time dateTime={selected.date}>
                      {selectedDate}
                    </time>
                  </div>

                  <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-fg sm:text-4xl lg:text-5xl">
                    {selected.title}
                  </h2>

                  <p className="mt-6 text-lg font-medium leading-8 text-fg-2 sm:text-xl">
                    {selected.description}
                  </p>

                  <div className="my-9 h-px bg-line" />

                  <div className="space-y-6">
                    {selected.content.map((paragraph, index) => (
                      <p
                        key={index}
                        className="text-base leading-8 text-fg-2 sm:text-lg sm:leading-9"
                      >
                        {renderArticleText(paragraph)}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>,
          document.body
        )}
    </>
  );
}
