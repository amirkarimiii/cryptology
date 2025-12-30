import Link from "next/link";
import Image from "next/image";
import {Card, CardContent} from "@/components/ui/shadcn/card";
import {formatNumber} from "@/lib/utils/formatNumber";
import {env} from "@env";
import {Coins, CoinsSchema} from "@/lib/schemas/coin.schema";
import {fetchApi} from "@/lib/api";
import {cacheLife} from "next/cache";

export const Platform = async () => {
    "use cache"
    cacheLife("days");
    const data: Coins = await fetchApi("/coins?orderby=marketCap&sort=desc&per_page=3&page=1", CoinsSchema);
    const rankMedal = ["🥇", "🥈", "🥉"]
    const rankBgClasses = ["bg-firstTop", "bg-secondTop", "bg-thirdTop"];
    const ASSETS_URL = env.SERVER_ASSETS_URL


    return (
        <section className="flex flex-col justify-center gap-2 w-max sm:w-150 sm:flex-row md:gap-6" id="platform">
            {
                data.map(((data, index) => (
                    <Link key={index} href={`/`}>
                        <Card className={`${rankBgClasses[Number(data.market_cap_rank) - 1]} shadow-card rounded-2xl transition-transform hover:scale-[1.02] p-0 duration-200 w-70 sm:h-60 sm:w-48`}>
                            <CardContent className="py-2 px-3 flex gap-2 sm:flex-col sm:items-center h-full">
                                <span className="inline-block">{rankMedal[Number(data.market_cap_rank) - 1]}</span>
                                <div className="flex justify-between w-full h-full sm:flex-col sm:items-center">
                                    <div className="flex gap-1 sm:flex-col sm:items-center sm:gap-4">
                                        <div className="relative w-5 aspect-square my-auto sm:w-25">
                                            <Image fill src={`${ASSETS_URL}/coin-logos/${data.id}.png`}
                                                   alt={`${data.name} logo`}/>
                                        </div>
                                        <span className="inline-block text-md font-bold">{data.name}</span>
                                    </div>
                                    <span className="inline-block text-sm my-auto">{formatNumber(Number(data.current_price), {
                                        decimals: 2,
                                        isCurrency: true
                                    })}
                                    </span>
                                </div>
                            </CardContent>
                        </Card>
                    </Link>
                )))
            }
        </section>
    );
};