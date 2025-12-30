import Image from "next/image";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/shadcn/table";
import {Coins, CoinsSchema} from "@/lib/schemas/coin.schema";
import {fetchApi} from "@/lib/api";
import {env} from "@env";
import {formatNumber} from "@/lib/utils/formatNumber";
import {Tooltip, TooltipContent, TooltipTrigger} from "@/components/ui/shadcn/tooltip";
import Link from "next/link";
import {Count, CountSchema} from "@/lib/schemas/count.schema";
import {SparklineChart} from "@/components/ui/common/SparklineChart";
import {Badge} from "@/components/ui/shadcn/badge";
import { ArrowLeft } from 'lucide-react';
import {cacheLife} from "next/cache";


export const CoinTable = async () => {

    "use cache"
    cacheLife("days");
    const ASSET_URL = env.SERVER_ASSETS_URL;
    const data: Coins = await fetchApi("/coins?orderby=marketCap&sort=desc&per_page=20&page=1", CoinsSchema);
    const count: Count = await fetchApi("/coins/count", CountSchema);

    return (
        <div className="w-80 mt-20 p-2 sm:w-120 md:w-full flex flex-col items-center rounded-lg shadow-card">
            <h3 className="mb-10 mt-10 text-lg md:text-xl font-bold">
                we listed <span className='underline'>{count.count} coins</span> here!!!
            </h3>
            <Badge className="self-end mr-5 opacity-60 mb-2 md:hidden"><ArrowLeft />Scroll to left</Badge>
            <Table className="overflow-x-auto">
                <TableHeader>
                    <TableRow className="select-none hover:bg-background">
                        <TableHead className="sticky backdrop-blur-sm left-0 z-20">#</TableHead>
                        <TableHead className="sticky backdrop-blur-sm left-11 z-20">Name</TableHead>
                        <TableHead>Price</TableHead>
                        <TableHead>Market Cap</TableHead>
                        <TableHead>24h value</TableHead>
                        <TableHead>Last 7 Days</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody className="border-0">
                    {data.map((row, index) => (
                        <TableRow className="border-0 hover:bg-gray-200 dark:hover:bg-muted/50" key={index}>
                            <TableCell className="sticky backdrop-blur-sm left-0 z-20">
                                <span className="inline-block w-7 my-auto text-balance">
                                    {row.market_cap_rank}
                                </span>
                            </TableCell>
                            <TableCell className="sticky backdrop-blur-sm left-11 z-20">
                                <Link href={`/`} /*will be routed to `/${row.id} after we created that page*/>
                                    <div className="flex flex-row gap-2">
                                        <div className="relative w-5 h-5 my-auto">
                                            <Image fill src={`${ASSET_URL}/coin-logos/${row.id}.png`}
                                                   alt={`${row.id} logo`}/>
                                        </div>
                                        <span className="inline-block w-25 sm:w-33 my-auto text-balance">
                                        {row.name}
                                        </span>
                                    </div>
                                </Link>
                            </TableCell>
                            <TableCell className="min-w-26">
                                <Tooltip>
                                    <TooltipTrigger>
                                        {formatNumber(row.current_price, {decimals: 2, isCurrency: true})}
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        {formatNumber(row.current_price, {isCurrency: true})}
                                    </TooltipContent>
                                </Tooltip>
                            </TableCell>
                            <TableCell className="min-w-26">
                                <Tooltip>
                                    <TooltipTrigger>
                                        {formatNumber(row.market_cap, {decimals: 2, isCurrency: true})}
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        {formatNumber(row.market_cap, {isCurrency: true})}
                                    </TooltipContent>
                                </Tooltip>
                            </TableCell>
                            <TableCell className="min-w-26">
                                <Tooltip>
                                    <TooltipTrigger>
                                        {formatNumber(row.total_volume, {decimals: 2, isCurrency: true})}
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        {formatNumber(row.total_volume, {isCurrency: true})}
                                    </TooltipContent>
                                </Tooltip>
                            </TableCell>
                            <TableCell className="min-w-26">
                                <SparklineChart price={row.sparkline7d.price}/>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};