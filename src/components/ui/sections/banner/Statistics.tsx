import {GlobalInfo, GlobalInfoSchema} from "@/lib/schemas/globalInfo.schema";
import {fetchApi} from "@/lib/api";
import {Button} from "@/components/ui/shadcn/button";
import {formatNumber} from "@/lib/utils/formatNumber";
import {Tooltip, TooltipTrigger, TooltipContent} from "@/components/ui/shadcn/tooltip";
import {cacheLife} from "next/cache";

export const Statistics = async () => {

    "use cache"
    cacheLife("days");
    const data: GlobalInfo[] = await fetchApi('/global/info', GlobalInfoSchema);

    const stats = data[0];

    return (
        <div className="w-60">
            <Button asChild variant="ghost" className="justify-between hover:font-bold hover:shadow-card">
                <a className="w-full text-sm sm:text-base font-medium" href="#coin-section">
                    <div>
                        Coins
                    </div>
                    <div>
                        {formatNumber(stats.active_cryptocurrencies)}
                    </div>
                </a>
            </Button>
            <Button asChild variant="ghost" className="justify-between hover:font-bold hover:shadow-card">
                <a className="w-full text-sm sm:text-base font-medium" href="#exchanges-section">
                    <div>
                        Exchanges
                    </div>
                    <div>
                        {formatNumber(stats.markets)}
                    </div>
                </a>
            </Button>
            <Button asChild variant="ghost" className="justify-between hover:font-bold hover:shadow-card">
                <div className="w-full text-sm sm:text-base font-medium">
                    <div>
                        Market Cap
                    </div>
                    <Tooltip>
                        <TooltipTrigger>
                            {formatNumber(stats.total_market_cap_usd, {decimals: 2, isCurrency: true})}
                        </TooltipTrigger>
                        <TooltipContent>
                            {formatNumber(stats.total_market_cap_usd)}
                        </TooltipContent>
                    </Tooltip>
                </div>
            </Button>
            <Button asChild variant="ghost" className="justify-between hover:font-bold hover:shadow-card">
                <div className="w-full text-sm sm:text-base font-medium">
                    <div>
                        24h Vol
                    </div>
                    <Tooltip>
                        <TooltipTrigger>
                            {formatNumber(stats.total_volume_usd, {decimals: 1, isCurrency: true})}
                        </TooltipTrigger>
                        <TooltipContent>
                            {formatNumber(stats.total_volume_usd)}
                        </TooltipContent>
                    </Tooltip>
                </div>
            </Button>
        </div>
    );
};