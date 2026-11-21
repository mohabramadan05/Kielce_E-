import { getTranslations } from "next-intl/server";
import { siteConfig } from "@/config/site";
import { NavLinks } from "./NavLinks";
import { LanguageSwitcher } from "./LanguageSwitcher";
import Image from "next/image";
import logo from "../../assets/logo-uni.png";
import type { NavItem } from "@/types/nav";
import Link from "next/link";

export async function Header() {
  const t = await getTranslations("Header");
  const items: NavItem[] = siteConfig.nav.map((n) =>
    "children" in n
      ? {
          label: t(n.key),
          children: n.children.map((c) => ({ label: t(c.key), href: c.href })),
        }
      : { label: t(n.key), href: n.href },
  );

  return (
    <header className="sticky top-0 z-100 bg-bg/80 backdrop-blur border-b border-line">
      <div className="mx-auto flex h-16 md:h-20 max-w-360 items-center justify-between gap-2 px-4">
        <div className="flex min-w-0 items-center gap-2 md:gap-4">
          <Link href="/" className="shrink-0">
            <Image
              src={logo}
              width={0}
              height={50}
              alt={siteConfig.name}
              className="h-8 md:h-12 w-auto"
            />
          </Link>

          <span className="hidden md:block h-6 w-0.5 mx-2 rounded-full bg-gray-400" />

          <Link
            href="/"
            className="hidden sm:block min-w-0 truncate text-brand text-base md:text-xl font-bold"
          >
            {siteConfig.name}
          </Link>

          <div className="flex items-center gap-4">
            <NavLinks items={items} toggleLabel={t("toggleMenu")} />
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-2 md:gap-4">
          <LanguageSwitcher />
          <Link
            href="/students/outgoing"
            className="bg-brand px-3 py-1.5 md:px-4 md:py-2 text-sm md:text-base font-medium rounded-full text-cyan-50 whitespace-nowrap"
          >
            {t("apply")}
          </Link>
        </div>
      </div>
    </header>
  );
}