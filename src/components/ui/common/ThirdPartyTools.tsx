import Image from "next/image";
import Link from "next/link";
import {Button} from "@/components/ui/shadcn/button";

export function ThirdPartyTools() {

    return (
        <div className="w-full flex flex-col items-center justify-center gap-6">
            <h3 className="text-center text-sm font-semibold text-foreground select-none">
                Third-party tools we’re using for <span className="text-primary">FREE</span> — and we’re grateful to them 💙
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-2">
                <Button asChild variant="outline" className="w-30 h-10 rounded-md cursor-pointer p-2">
                    <Link href="https://www.coingecko.com/en/api" aria-label="CoinGecko API" target="_blank" className="flex items-center justify-center gap-1">
                            <div className="relative w-5 h-5 select-none">
                                <Image
                                    src="/third-party-tools/coingecko/logo-shape.svg"
                                    alt="CoinGecko API logo"
                                    fill
                                />
                            </div>
                             <div className="relative w-14 mt-0.5 aspect-[31/11] select-none">
                                <Image
                                    src="/third-party-tools/coingecko/logo-text.svg"
                                    alt="CoinGecko API logo"
                                    fill
                                    className="dark:invert"
                                />
                            </div>
                        </Link>
                </Button>
                <Button asChild variant="outline" className="w-30 h-10 rounded-md cursor-pointer p-2">
                    <Link href="https://frankfurter.dev/" aria-label="Frankfurter API" target="_blank" className="flex items-center justify-center">
                        <div className="relative w-20 aspect-[9/2] select-none">
                            <Image
                                src="/third-party-tools/frankfurter.svg"
                                alt="Frankfurter logo"
                                fill
                                className="dark:invert"
                            />
                        </div>
                    </Link>
                </Button>
            </div>
        </div>
    )
}