
import Image from "next/image";

import erasmusPolish1 from "@/assets/erasmuspolish1.png";
import erasmusPolish2 from "@/assets/erasmuspolish2.png";

import erasmusEnglish1 from "@/assets/erasmusenglish1.png";
import erasmusEnglish2 from "@/assets/erasmusenglish2.png";

type LeafletsProps = {
  locale: string;
};

export default function Leaflets({
  locale,
}: LeafletsProps) {
  const isPolish = locale === "pl";

  // Automatically select images by language
  const leaflet1 = isPolish
    ? erasmusPolish1
    : erasmusEnglish1;

  const leaflet2 = isPolish
    ? erasmusPolish2
    : erasmusEnglish2;

  const title = isPolish
    ? "Materiały informacyjne Erasmus+"
    : "Erasmus+ Information Materials";

  const description = isPolish
    ? "Zapoznaj się z oficjalnymi materiałami informacyjnymi programu Erasmus+."
    : "Explore the Erasmus+ information leaflets.";

  const images = [
    {
      src: leaflet1,
      alt: isPolish
        ? "Materiały informacyjne Erasmus+ - strona pierwsza"
        : "Erasmus+ information leaflet - first side",
    },
    {
      src: leaflet2,
      alt: isPolish
        ? "Materiały informacyjne Erasmus+ - strona druga"
        : "Erasmus+ information leaflet - second side",
    },
  ];

  return (
    <section className="bg-surface-2 px-5 py-16 sm:px-8 lg:py-24">
      <div className="mx-auto max-w-6xl">

        {/* SECTION HEADING */}
        <h2 className="text-3xl font-extrabold sm:text-4xl">
          {title}
        </h2>

        <p className="mt-4 text-fg-2">
          {description}
        </p>

        {/* LEAFLET IMAGES */}
        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {images.map((image, index) => (
            <a
              key={index}
              href={image.src.src}
              target="_blank"
              rel="noopener noreferrer"
              className="block overflow-hidden rounded-2xl border border-line bg-surface transition hover:shadow-lg"
            >
              <Image
                src={image.src}
                alt={image.alt}
                className="h-auto w-full"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
