import Image from "next/image";
import {ThirdPartyTools} from "@/components/ui/common/ThirdPartyTools";
import {Statistics} from "@/components/ui/sections/banner/Statistics";

export function Banner() {
    return (
        <section className="max-w-[1280px] mx-auto px-4 py-8 flex flex-col items-center">
            <div
                className="
                  w-full shadow-card rounded-2xl
                  p-6 md:p-10 banner-gradient
                  "
            >
                <div className="flex flex-col gap-8 md:flex-row items-center justify-between">
                    <div className="flex flex-col items-center gap-4 lg:flex-row">
                        <div className="relative flex-shrink-0 flex justify-center md:justify-start w-40 sm:w-50 md:w-60 aspect-[113/100] big-section-icon select-none">
                            <Image
                                src="/direction-base-icons/left-to-right/coin-banner.svg"
                                alt="Coin Banner Icon"
                                fill
                                priority
                                className="object-contain select-none pointer-events-none"
                            />
                        </div>
                        <div className="flex flex-col text-center justify-center text-foreground md:text-start">
                            <span className="text-2xl font-medium xl:text-3xl select-none">Welcome to Cryptology</span>
                            <span className="text-sm xl:text-lg opacity-70 select-none">This is a demo site, Not something you can seriously use</span>
                        </div>
                    </div>
                    <div className="block md:hidden w-full mt-6">
                        <ThirdPartyTools />
                    </div>
                    <div className=" max-w-md bg-background shadow-card rounded-xl flex items-center justify-center p-4">
                        <Statistics/>
                    </div>
                </div>
                <div className="hidden md:block w-full mt-6">
                    <ThirdPartyTools />
                </div>
            </div>
        </section>
    )
}