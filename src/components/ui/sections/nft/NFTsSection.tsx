import Image  from "next/image";

export const NfTsSection = () => {

    const description = "Here, we explore the NFTs we engage with, tracking their market performance, rarity, ownership changes, and real-time trends across platforms."

    return (
        <section className="max-w-[1280px] mx-auto px-4 py-8 flex flex-col items-center">
            <div className="w-full flex flex-col items-center lg:max-w-230">
                <h3 className="font-bold text-4xl mt-20 mb-15 lg:mb-10">NFTs</h3>
                <div className="flex flex-col items-center gap-4 lg:flex-row">
                    <div className="relative flex-shrink-0 flex justify-center md:justify-start w-40 sm:w-50 md:w-60 aspect-[113/100] big-section-icon">
                        <Image
                            src="/direction-base-icons/left-to-right/nft.svg"
                            alt="nft"
                            fill
                            priority
                            className="object-contain select-none pointer-events-none"
                        />
                    </div>
                    <div className="flex flex-col text-center justify-center text-foreground lg:text-start">
                        <span className="text-2xl font-medium xl:text-3xl">Coming Soon!</span>
                        <span className="text-sm xl:text-lg opacity-70 w-70 mt-5 sm:w-90 md:w-120">
                        {description}
                    </span>
                    </div>
                </div>
            </div>
        </section>
    );
};