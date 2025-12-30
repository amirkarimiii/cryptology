import {Banner} from "@/components/ui/sections/banner/Banner";
import {CoinSection} from "@/components/ui/sections/coin/CoinSection";
import {ExchangesSection} from "@/components/ui/sections/exchanges/ExchangesSection";
import {NfTsSection} from "@/components/ui/sections/nft/NFTsSection";
import {NewsSection} from "@/components/ui/sections/news/NewsSection";

export default function Home() {
  return (
    <>
        <Banner/>
        <CoinSection/>
        <ExchangesSection/>
        <NfTsSection/>
        <NewsSection/>
    </>
  );
}
