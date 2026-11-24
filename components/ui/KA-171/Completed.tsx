import {getTranslations} from "next-intl/server";
import Card from "./Card";
export default async function Completed(){
    const t  = await getTranslations ("Ka-171");
    return(
        <div className="px-16"> 
            <h1 className="text-xl font-extrabold  py-4">
                {t("Completed")}
            </h1>
            <Card/>
        </div>
    )
}