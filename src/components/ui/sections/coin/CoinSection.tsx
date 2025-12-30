import {Platform} from "@/components/ui/sections/coin/Platform";
import {CoinTable} from "@/components/ui/sections/coin/CoinTable";

export const CoinSection = () => {
    return (
        <section className="max-w-[1280px] mx-auto px-4 py-8 flex flex-col items-center" id="coin-section">
            <Platform />
            <section>
                <CoinTable/>
            </section>
        </section>
    );
};