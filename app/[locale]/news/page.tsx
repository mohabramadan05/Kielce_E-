
import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { Hero } from "@/components/ui/News/hero";
import { NewsList } from "@/components/ui/News/news-list";
import { getNews } from "@/lib/news";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { locale } = await params;

  const t = await getTranslations({
    locale,
    namespace: "NewsPage",
  });

  return {
    title: `${t("title")} | Erasmus+ KUT`,
    description: t("intro"),
  };
}

export default async function NewsPage({ params }: Props) {
  const { locale } = await params;

  setRequestLocale(locale);

  const t = await getTranslations({
    locale,
    namespace: "NewsPage",
  });

  const articles = getNews(locale);

  return (
    <div className="bg-bg text-fg">
      <Hero
        eyebrow={t("eyebrow")}
        title={t("title")}
        intro={t("intro")}
      />

      <NewsList
        articles={articles}
        locale={locale}
        featuredLabel={t("featured")}
        latestTitle={t("latest")}
        readMore={t("readMore")}
      />
    </div>
  );
}
