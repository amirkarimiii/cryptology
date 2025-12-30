import type {Metadata} from "next";
import {ReactNode} from "react";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import {ThemeProvider} from "@/providers/themeProvider";
import {Footer} from "@/components/layout/Footer";


const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "cryptology",
    description: 'Built by a-karimkhani.ir as a personal portfolio project',
    appleWebApp: true,

    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
        },
    },

};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <ThemeProvider>
                    <div className="container mx-auto">
                        <Navbar/>
                        <main>{children}</main>
                        <Footer/>
                    </div>
                </ThemeProvider>
            </body>
        </html>
    );
}
