import {getTranslations} from "next-intl/server";
import {Compoleted_cohorts} from "@/data/KA-171";

export default async function Card(){
    const t  = await getTranslations ("Ka-171");
    return(
        <div>

        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full ">
            
                {Compoleted_cohorts.map((c)=>(
                    <div className="flex bg-white w-full h-full rounded-xl p-5 ">
                    <div key={c.name} className="text-xs ">
                        <h1 className="font-bold ">{c.name}</h1>
                        <div className="grid grid-rows-2 pt-3">
                        <p className="flex">{c.code} Valid untl {c.expire}</p>
                        </div>
                        <p>{c.countries}</p>
                    </div>
                    </div>
                ))}
            
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full ">

        </div>
        </div>
    )
}