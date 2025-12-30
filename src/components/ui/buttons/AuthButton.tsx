"use client"

import {Button} from "@/components/ui/shadcn/button";

export function AuthButton() {

    return (
        <Button variant="outline" className="w-max h-max rounded-md py-1 px-3 cursor-pointer select-none" onClick={() => {}}>
            sign in or signup
        </Button>
    )
}