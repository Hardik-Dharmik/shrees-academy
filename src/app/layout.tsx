import { Inter } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import Header from "@/app/components/Layout/Header";
import Footer from "@/app/components/Layout/Footer";
import ScrollToTop from "@/app/components/ScrollToTop";
import Aoscompo from "@/utils/aos";

const font = Inter({ subsets: ["latin"] });

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const basePathValue = process.env.NEXT_PUBLIC_BASE_PATH || '';

    return (
        <html lang="en-IN" suppressHydrationWarning className="overflow-x-hidden">
            <body className={`${font.className} overflow-x-hidden`}>
                <style>{`:root{--banner-url: url('${basePathValue}/images/banner/background.png'); --newsletter-url: url('${basePathValue}/images/newsletter/hands.svg');}`}</style>
                <Aoscompo>
                    <Header />
                    {children}
                    <Footer />
                </Aoscompo>
                <ScrollToTop />
            </body>
        </html>
    );
}
