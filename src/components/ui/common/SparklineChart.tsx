"use client";

import { Sparkline7d } from "@/lib/schemas/coin.schema";
import { LineChart, Line, ResponsiveContainer, YAxis } from "recharts";
import {calculateDynamicYDomain} from "@/lib/utils/chartUtils";

export const SparklineChart = ({ price }: Sparkline7d) => {
    if (!price || price.length < 2)
        return <div className="bg-gray-400/40 rounded-md w-full h-full" />;

    const isUp = price.at(-1)! >= price.at(-2)!;
    const data = price.map((v) => ({ value: v }));
    const [yMin, yMax] = calculateDynamicYDomain({ price });

    return (
        <div>
            <ResponsiveContainer width="100%" height={60}>
                <LineChart data={data} margin={{ top: 2, bottom: 2, left: 0, right: 0 }}>
                    <YAxis type="number" domain={[yMin, yMax]} hide />
                    <Line
                        type="monotone"
                        dataKey="value"
                        stroke={isUp ? "#16a34a" : "#dc2626"}
                        strokeWidth={1.5}
                        dot={false}
                        activeDot={false}
                        isAnimationActive={false}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};
