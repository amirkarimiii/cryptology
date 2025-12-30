import { z } from 'zod';

export const GlobalInfoSchema = z.array(
    z.object({
        active_cryptocurrencies: z.string(),
        markets: z.string(),
        total_market_cap_usd: z.string(),
        total_volume_usd: z.string(),
    })
);

export type GlobalInfo = z.infer<typeof GlobalInfoSchema>[number];
