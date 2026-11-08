import { getTranslations } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";
import logo from "../../assets/logo-uni.png";

export async function Footer() {
  const t = await getTranslations("Footer");

  return (
    <footer className="">
      <div className="border-t border-line px-10 py-5 flex justify-between items-start">
        <div className="flex flex-col gap-4 items-start justify-start flex-1 mr-8">
          <Image src={logo} width={100} height={0} alt="University Logo" />
          <p className="text-fg-4">
            {t("dept")} <br />
            al. Tysiąclecia Państwa Polskiego 7, 25-314 Kielce <br />
            Room 4.09, 4.20, 4.21 Building C<br />
            <br />
            +48 41 34 24 773 · erasmus@tu.kielce.pl
          </p>
        </div>
        <div className="flex flex-col gap-1 flex-1">
          <h4 className="text-fg-4">{t("expolre")}</h4>
          <Link href="/students/incoming" className="text-fg">{t("incoming")}</Link>
          <Link href="/students/outgoing" className="text-fg">{t("outgoing")}</Link>
          <Link href="/students/partner-universities" className="text-fg">{t("partners")}</Link>
        </div>
        <div className="flex flex-col gap-1 flex-1">
          <h4 className="text-fg-4">{t("follow")}</h4>
          <Link href="https://www.facebook.com/profile.php?id=100057494289288#" className="text-fg">Facebook</Link>
          <Link href="https://www.instagram.com/kut_international/" className="text-fg">Instagram</Link>
          <Link href="https://www.flickr.com/photos/191991580@N08/" className="text-fg">Flickr</Link>
        </div>
      </div>
      <div className="border-t border-line px-10 py-5 flex justify-start">
        <p className="text-fg-4">{t("bottom")}</p>
      </div>
    </footer>
  );
}
