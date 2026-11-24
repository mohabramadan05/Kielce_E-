
type TransportProps = {
  title: string;
  description: string;
  appStoreLabel: string;
  googlePlayLabel: string;
  jakdojadeDescription: string;
  boltDescription: string;
  uberDescription: string;
};

const apps = [
  {
    name: "Jakdojade",
    image: "/images/jak.png",
    descriptionKey: "jakdojade" as const,
    apple:
      "https://apps.apple.com/pl/app/jakdojade-timetables/id506795511",
    android:
      "https://play.google.com/store/apps/details?id=com.citynav.jakdojade.pl.android",
  },
  {
    name: "Bolt",
    image: "/images/bolt.png",
    descriptionKey: "bolt" as const,
    apple:
      "https://apps.apple.com/pl/app/bolt-request-a-ride/id675033630",
    android:
      "https://play.google.com/store/apps/details?id=ee.mtakso.client",
  },
  {
    name: "Uber",
    image: "/images/uber.png",
    descriptionKey: "uber" as const,
    apple:
      "https://apps.apple.com/pl/app/uber-rides-eats-and-more/id368677368",
    android:
      "https://play.google.com/store/apps/details?id=com.ubercab",
  },
];


function StoreBadge({
  href,
  image,
  alt,
}: {
  href: string;
  image: string;
  alt: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={alt}
      className="
        relative block
        h-[65px] w-[210px]
        max-w-full
        overflow-hidden
        rounded-lg
        focus-visible:outline-2
        focus-visible:outline-offset-2
        focus-visible:outline-brand-ink
      "
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={image}
        alt={alt}
        className="
          absolute left-1/2 top-1/2
          h-[200 px] w-[600px] max-w-none
          -translate-x-1/2 -translate-y-1/2
          object-contain
        "
      />
    </a>
  );
}


export function Transport({
  title,
  description,
  appStoreLabel,
  googlePlayLabel,
  jakdojadeDescription,
  boltDescription,
  uberDescription,
}: TransportProps) {
  const descriptions = {
    jakdojade: jakdojadeDescription,
    bolt: boltDescription,
    uber: uberDescription,
  };

  return (
    <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
      {/* Section heading */}
      <div className="mb-9">
        <h2 className="text-2xl font-extrabold sm:text-3xl">
          {title}
        </h2>

        <p className="mt-3 text-fg-2">
          {description}
        </p>
      </div>

      {/* Application cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {apps.map((app) => (
          <article
            key={app.name}
            className="
              flex h-full flex-col
              rounded-2xl border border-line
              bg-surface p-7
              transition-all duration-300 ease-out
              hover:-translate-y-1 hover:shadow-lg
            "
          >
            {/* Application logo */}
            <div
              className="
                mb-6 flex h-20 w-20
                items-center justify-center
                overflow-hidden rounded-2xl
                bg-surface-2
              "
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={app.image}
                alt={`${app.name} app`}
                width={80}
                height={80}
                className="h-full w-full object-contain"
              />
            </div>

            {/* Application name */}
            <h3 className="text-2xl font-extrabold text-fg">
              {app.name}
            </h3>

            {/* Application description */}
            <p className="mt-4 flex-1 leading-8 text-fg-2">
              {descriptions[app.descriptionKey]}
            </p>

            {/* Store download badges */}
            <div className="mt-8 border-t border-line pt-6">
              <div className="flex flex-col items-center gap-2">
                <StoreBadge
                  href={app.apple}
                  image="/images/app-store.svg"
                  alt={`${appStoreLabel}: ${app.name}`}
                />

                <StoreBadge
                  href={app.android}
                  image="/images/google-play.svg"
                  alt={`${googlePlayLabel}: ${app.name}`}
                />
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
