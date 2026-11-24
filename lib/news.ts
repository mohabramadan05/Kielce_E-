
import enMessages from "@/messages/en.json";
import plMessages from "@/messages/pl.json";

export type NewsLink = {
  label: string;
  url: string;
};

export type NewsArticle = {
  slug: string;
  date: string;
  image: string | null;
  title: string;
  description: string;
  content: string[];
  links: NewsLink[];
};

type NewsKey = keyof typeof enMessages.NewsArticles;

type NewsEntry = {
  slug: string;
  date: string;
  image: string | null;
  key: NewsKey;
  links: NewsLink[];
};

const news: NewsEntry[] = [
  {
    slug: "erasmus-bip-huelva-2026",
    date: "2026-10-02",
    image: "/images/ErasmusBlendedjpg.jpg",
    key: "huelvaProgramme",
    links: [
      {
        label: "University of Huelva",
        url: "https://www.uhu.es/",
      },
      {
        label: "Sustainable Mining BIP",
        url: "https://www.uhu.es/internacionalizacion/sustainable-mining-projects-integrating-digital-and-automated-solutions-economic-social-and",
      },
    ],
  },

  {
    slug: "international-start-2026",
    date: "2026-10-01",
    image: "/images/erasmus-start.jpg",
    key: "internationalStart",
    links: [
      {
        label: "Orientation Days Photo Gallery",
        url: "https://www.flickr.com/photos/203673294@N06/albums/72177720335911310",
      },
      {
        label: "Design Institute Kielce",
        url: "https://idkielce.pl/",
      },
      {
        label: "OMPiO Kielce",
        url: "https://ompio.pl/",
      },
    ],
  },

  {
    slug: "erasmus-orientation-days-2026",
    date: "2026-09-17",
    image: "/images/oritantation.jpg",
    key: "orientationInvitation",
    links: [],
  },
{
  slug: "ka171-international-teaching-staff-2026",
  date: "2026-06-19",
  image: "/images/k171.jpg",
  key: "ka171TeachingStaff",
  links: [],
},  

];

export function getNews(locale: string): NewsArticle[] {
  const messages =
    locale === "pl"
      ? plMessages.NewsArticles
      : enMessages.NewsArticles;

  return news
    .map((article): NewsArticle => {
      const translation = messages[article.key];

      return {
        slug: article.slug,
        date: article.date,
        image: article.image,
        title: translation.title,
        description: translation.description,
        content: translation.content,
        links: article.links,
      };
    })
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getNewsBySlug(
  locale: string,
  slug: string
): NewsArticle | undefined {
  return getNews(locale).find(
    (article) => article.slug === slug
  );
}
