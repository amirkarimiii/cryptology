"use client"

import {Button} from "@/components/ui/shadcn/button";
import Image from "next/image";
import { ClockFading } from 'lucide-react';
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/shadcn/dialog";
import {Alert, AlertDescription, AlertTitle} from "@/components/ui/shadcn/alert";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem, SelectLabel,
    SelectTrigger,
    SelectValue
} from "@/components/ui/shadcn/select";
import {Separator} from "@/components/ui/shadcn/separator";

function SettingButton() {

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline" className="w-max h-max rounded-md p-1 cursor-pointer">
                    <div className="relative w-5 h-5 rounded-md select-none">
                        <Image
                            src="/settings.svg"
                            alt="Setting toggle"
                            fill
                            className={`w-full h-full transition duration-300 dark:invert`}
                        />
                    </div>
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle className="select-none">Edit Preferences</DialogTitle>
                    <Alert>
                        <ClockFading/>
                        <AlertTitle className="italic select-none">Coming Soon</AlertTitle>
                        <AlertDescription>
                            <span className="italic select-none">This section will be activated once localization is added to the project. For now, we’ve chosen to keep the scope focused on the MVP.</span>
                        </AlertDescription>
                    </Alert>
                </DialogHeader>
                <h3 className="mt-2 font-medium text-sm select-none">Language preferences</h3>
                <Select defaultValue="en">
                    <SelectTrigger className="w-[180px] select-none">
                        <SelectValue placeholder="Select a Language" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Language</SelectLabel>
                            <SelectItem value="en">English</SelectItem>
                            <SelectItem disabled value="es">Español</SelectItem>
                            <SelectItem disabled value="fa">فارسی</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
                <Separator />
                <h3 className="mt-2 font-medium text-sm select-none">Currency preferences</h3>
                <Select defaultValue="usd">
                    <SelectTrigger className="w-[180px] select-none">
                        <SelectValue placeholder="Select a Currency" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Currency</SelectLabel>
                            <SelectItem value="usd">$ US Dollars</SelectItem>
                            <SelectItem disabled value="eur">€ Euro</SelectItem>
                            <SelectItem disabled value="gbp">£ Pound</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
                <DialogFooter>
                    <Button className="select-none">Save changes</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default SettingButton