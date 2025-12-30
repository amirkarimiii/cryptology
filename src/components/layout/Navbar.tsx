import {ThemeButton} from "@/components/ui/buttons/ThemeButton";
import {HomeButton} from "@/components/ui/buttons/HomeButton";
import SettingButton from "@/components/ui/buttons/SettingButton";
import {AuthButton} from "@/components/ui/buttons/AuthButton";

export default function Navbar() {
    return (
        <nav className="h-12 flex items-center bg-background">
            <div className="container flex justify-between items-center px-10 w-full">
                <div className="flex items-center gap-4">
                    <HomeButton/>
                    <ThemeButton/>
                    <SettingButton/>
                </div>
                <AuthButton/>
            </div>
        </nav>
    );
}