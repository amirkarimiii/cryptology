"use client"

import {Button} from "@/components/ui/shadcn/button";
import Image from "next/image";
import {useTheme} from "next-themes";


export function ThemeButton() {

    const {theme , setTheme} = useTheme();

    return (
        <Button variant="outline" className="w-max h-max rounded-md p-1 cursor-pointer" onClick={() => {setTheme(
            theme === "light" ? "dark" : "light"
        )}}>
            <div className="relative w-5 h-5 rounded-md select-none">
                <Image
                    src="/toggle.svg"
                    alt="Theme toggle"
                    fill
                    className={`w-full h-full transition duration-300 dark:invert`}
                />
            </div>

        </Button>
    );
}