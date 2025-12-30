"use client"

import Image from "next/image";

export default function Error () {

    return (
        <main>
            <section className="max-w-[1280px] mx-auto px-4 py-8 flex flex-col items-center">
                <div className="w-full shadow-card rounded-2xl p-6 md:p-10 md:w-160 banner-gradient mt-20">
                    <div className="flex flex-col gap-8 items-center justify-between">
                        <div className="flex flex-col items-center gap-4">
                            <div className="relative flex-shrink-0 flex justify-center md:justify-start w-40 sm:w-50 md:w-60 aspect-[113/100] big-section-icon select-none">
                                <Image
                                    src="/direction-base-icons/left-to-right/coin-banner.svg"
                                    alt="Coin Banner Icon"
                                    fill
                                    priority
                                    className="object-contain select-none pointer-events-none"
                                />
                            </div>
                            <div className="flex flex-col text-center justify-center text-foreground gap-3">
                                <span className="text-sm font-medium xl:text-md opacity-70 select-none">Sorry, but</span>
                                <span className="text-2xl font-medium xl:text-3xl select-none">An Error Occurred...</span>
                            </div>
                        </div>
                    </div>
                </div>
                <span className="inline-block text-sm font-light py-10 select-none">&copy; all rights reserved</span>
            </section>
        </main>
    );
};