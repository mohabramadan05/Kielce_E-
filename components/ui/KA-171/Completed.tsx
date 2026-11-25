import {getTranslations} from "next-intl/server";
import Card from "./Card";
import { Applications } from "@/data/KA-171";


export default async function Completed(){
    const t  = await getTranslations ("Ka-171");
    return(
        <div className="px-16 bg-surface-2 p-8"> 
            <h1 className="text-xl font-extrabold py-4">
                {t("Completed")}
            </h1>
            <Card/>
        </div>
        
    )
}