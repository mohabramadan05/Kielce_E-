
"use client";

import { motion } from "framer-motion";
import { CalendarDays, Newspaper, ArrowUpRight } from "lucide-react";
import type { NewsArticle } from "@/lib/news";

type NewsCardProps = {
  article: NewsArticle;
  locale: string;
  readMore: string;
  onOpen: (article: NewsArticle) => void;
  featured?: boolean;
};

export function NewsCard({
  article,
  locale,
  readMore,
  onOpen,
  featured = false,
}: NewsCardProps) {
  const date = new Intl.DateTimeFormat(
    locale === "pl" ? "pl-PL" : "en-GB",
    { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }
  ).format(new Date(`${article.date}T00:00:00Z`));

  return (
    <motion.article
      layoutId={`news-${article.slug}`}
      onClick={() => onOpen(article)}
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 250, damping: 28 }}
      className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-line bg-surface shadow-sm hover:shadow-xl"
    >
      <div className={`relative overflow-hidden bg-brand-tint ${featured ? "h-72" : "h-52"}`}>
        {article.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={article.image}
            alt={article.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <Newspaper size={52} className="text-brand-ink/40" />
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex items-center gap-2 text-sm text-fg-2">
          <CalendarDays size={16} />
          <time dateTime={article.date}>{date}</time>
        </div>

        <h2 className={`font-extrabold text-fg ${featured ? "text-2xl sm:text-3xl" : "text-xl"}`}>
          {article.title}
        </h2>

        <p className="mt-4 flex-1 leading-7 text-fg-2">
          {article.description}
        </p>

        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            onOpen(article);
          }}
          className="mt-6 inline-flex w-fit items-center gap-2 font-semibold text-brand-ink"
        >
          {readMore}
          <ArrowUpRight size={18} />
        </button>
      </div>
    </motion.article>
  );
}
