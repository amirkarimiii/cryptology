import {Sparkline7d} from "@/lib/schemas/coin.schema";

export function calculateDynamicYDomain(
    { price }: Sparkline7d,
    paddingPercent = 0.1
): [number, number] {
    if (!price || price.length === 0) return [0, 0];

    const min = Math.min(...price);
    const max = Math.max(...price);

    if (min === max) {
        return [min * 0.99, max * 1.01];
    }

    const padding = (max - min) * paddingPercent;
    return [min - padding, max + padding];
}
