import {Button} from "@/components/ui/shadcn/button";
import Image from "next/image";
import Link from "next/link";

export function HomeButton() {

    return (
        <Button variant="outline" className="rounded-md p-1 w-max h-max">
            <Link href="/" className="flex gap-2 w-max h-max md:w-25 rounded-md">
                <div className="relative w-5 h-5 select-none">
                    <Image
                        src="/icon.svg"
                        alt="Home toggle"
                        fill
                        className={`w-full h-full transition duration-300 dark:invert`}
                    />
                </div>
                <div className="relative w-18 aspect-auto hidden md:block select-none">
                    <Image
                        src="/lang-base-icons/en/label.svg"
                        alt="label"
                        fill
                        className={`w-full h-full transition duration-300 dark:invert`}
                    />
                </div>
            </Link>
        </Button>
    )
}