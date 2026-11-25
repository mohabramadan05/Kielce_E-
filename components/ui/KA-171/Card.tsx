import {getTranslations} from "next-intl/server";
import {Compoleted_cohorts} from "@/data/KA-171";
import {Applications} from "@/data/KA-171"
import { link } from "framer-motion/client";

export default async function Card(){
    const t  = await getTranslations ("Ka-171");
    return(
        <div>

        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full ">
            
                {Compoleted_cohorts.map((c)=>(
                    <div key={c.name} className="flex bg-bg w-full h-full rounded-xl p-5 text-sm">
                    <div className=" ">
                        <h1 className="font-bold ">{c.name}</h1>
                        <div className="grid grid-rows-2 pt-3">
                        <p className="flex">{c.code} {t("expired")} {c.expire}</p>
                        </div>
                        <p>{c.countryKeys.map((key) => t(key)).join(", ")}</p>
                    </div>
                    </div>
                ))}
            
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full ">

        </div>


        <div>
            
            <div className="grid grid-cols-1  mt-12 w-full gap-4 md:grid-cols-2">
            <h1 className="flex flex-col py-4 text-xl font-extrabold">
                {t("Rules-header")}
            </h1>
            <div>
            </div>
            {Applications.map((A)=>(
                <div key={A.titleKey} className="border border-line bg-bg rounded-2xl p-4">
                    <h1 className="text-l font-bold">{t(A.titleKey)}</h1>
                    {A.link.map((l) => (
                        <a
                            key={t(l.labelKey)} href={t(l.href)} target="_blank" className="text-sm text-brand-ink hover:underline flex flex-col pt-2">
                                {t(l.labelKey)} →
                        </a>  
                    ))}
                </div>    
            ))}

            </div>
        </div>
        
        </div>
    )
}