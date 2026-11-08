import { getTranslations } from "next-intl/server";
import { siteConfig } from "@/config/site";
import { NavLinks } from "./NavLinks";
import { LanguageSwitcher } from "./LanguageSwitcher";
import Image from "next/image";
import logo from "../../assets/logo-uni.png";
import type { NavItem } from "@/types/nav";
import Link from 'next/link'

export async function Header() {
  const t = await getTranslations("Header");
const items: NavItem[] = siteConfig.nav.map((n) =>
    "children" in n
      ? { label: t(n.key), children: n.children.map((c) => ({ label: t(c.key), href: c.href })) }
      : { label: t(n.key), href: n.href }
  );

  return (
    <header className="sticky top-0 z-50 bg-bg/80 backdrop-blur border-b border-line">
      <div className="mx-auto flex h-20 max-w-360 items-center justify-between  px-4">
        <div className="flex justify-center items-center gap-4">
          <Image
            src={logo}
            width={0}
            height={50}
            alt="Picture of the author"
          />
          <span className="h-6.5 w-0.5 m-4 rounded-full bg-gray-400"></span>
          <h2 className="text-brand text-xl font-bold ">{siteConfig.name}</h2>
          <div className="flex flex-row items-center gap-4 ml-2">
            <NavLinks items={items} toggleLabel={t("toggleMenu")} />
          </div>
        </div>
        <div className="flex gap-4">
          <LanguageSwitcher />
          <Link href="/students/outgoing" className="bg-brand p-2 pl-4 pr-4 font-medium rounded-full text-cyan-50">{t("apply")}</Link>
        </div>
      </div>
    </header>
  );
}
