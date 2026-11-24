import {getTranslations} from "next-intl/server";
import CountryCard from "./CountryCard";

export default async function countries(){
    const t  = await getTranslations ("Ka-171");
    return(
        <div className="px-2 md:px-10">
            <div >
             <div className="flex flex-row justify-between md: items-baseline px-8 py-2">
                <h1 className="text-xl font-extrabold">{t("countries-header")}</h1>
                <p className="text-xs  text-gray-500 md:text-sm">{t("validation-date")}</p>
            </div>
                <div>
                    <CountryCard />
                </div>
            </div>

        </div>
    );
}

