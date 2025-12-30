import {z} from "zod";

export const CoinsSchema = z.array(
    z.object({
        id: z.string(),
        current_price: z.string(),
        market_cap: z.string(),
        market_cap_rank: z.string(),
        name: z.string(),
        total_volume: z.string(),
        sparkline7d: z.object({
            price: z.array(z.number())
        })
    })
);

export type Coins = z.infer<typeof CoinsSchema>;
export type SingleCoin = z.infer<typeof CoinsSchema>[number];
export type Sparkline7d = SingleCoin["sparkline7d"];