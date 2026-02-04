import { Inter } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import Header from "@/app/components/Layout/Header";
import Footer from "@/app/components/Layout/Footer";
import ScrollToTop from "@/app/components/ScrollToTop";
import Aoscompo from "@/utils/aos";

const font = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    metadataBase: new URL("https://shreesacademy.in"),
    title: {
        default: "Shree's Academy | Coaching for School & Competitive Exams",
        template: "%s | Shree's Academy",
    },
    description:
        "Shree's Academy offers focused coaching for school students and competitive exams with experienced faculty, structured learning, and proven results.",
    alternates: {
        canonical: "/",
    },
    openGraph: {
        type: "website",
        url: "/",
        title: "Shree's Academy | Coaching for School & Competitive Exams",
        description:
            "Focused coaching for school students and competitive exams with experienced faculty, structured learning, and proven results.",
        siteName: "Shree's Academy",
        locale: "en_IN",
        images: [
            {
                url: "/images/logo/logo.png",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Shree's Academy | Coaching for School & Competitive Exams",
        description:
            "Focused coaching for school students and competitive exams with experienced faculty, structured learning, and proven results.",
        images: ["/images/logo/logo.png"],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
        },
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const basePathValue = process.env.NEXT_PUBLIC_BASE_PATH || '';
    const baseUrl = "https://shreesacademy.in";
    const organizationStructuredData = {
        "@context": "https://schema.org",
        "@type": "EducationalOrganization",
        name: "Shree's Academy",
        url: baseUrl,
        logo: `${baseUrl}/images/logo/logo.png`,
        contactPoint: [
            {
                "@type": "ContactPoint",
                telephone: "+91-9823225787",
                contactType: "Admissions",
                areaServed: "IN",
                availableLanguage: ["en", "hi", "mr"],
            },
            {
                "@type": "ContactPoint",
                telephone: "+91-8446425052",
                contactType: "WhatsApp",
                areaServed: "IN",
                availableLanguage: ["en", "hi", "mr"],
            },
        ],
        address: [
            {
                "@type": "PostalAddress",
                streetAddress: "Opposite Nikalas Mandir, Itwari",
                addressLocality: "Nagpur",
                addressRegion: "Maharashtra",
                addressCountry: "IN",
            },
            {
                "@type": "PostalAddress",
                streetAddress: "Near Railway Crossing, Namdev Nagar, Binaki",
                addressLocality: "Nagpur",
                addressRegion: "Maharashtra",
                addressCountry: "IN",
            },
        ],
    };

    return (
        <html lang="en-IN" suppressHydrationWarning className="overflow-x-hidden">
            <body className={`${font.className} overflow-x-hidden`}>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(organizationStructuredData),
                    }}
                />
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
