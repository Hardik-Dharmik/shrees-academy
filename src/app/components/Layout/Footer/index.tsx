'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Icon } from '@iconify/react'
import { useEffect, useState } from 'react'
import { FooterLinkType } from '@/app/types/footerlinks'
import withBasePath from '@/utils/basePath'

const Footer = () => {
    const [footerLinks, setFooterLinks] = useState<FooterLinkType[]>([])

    useEffect(() => {
        fetch(withBasePath('/data/data.json'))
            .then(res => res.json())
            .then(data => setFooterLinks(data.FooterLinkData))
    }, [])

    return (
        <footer className="bg-gray-950 text-gray-300">

            {/* TOP COLOR BAND */}
            <div className="bg-primary">
                <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
                    <Image
                        src={withBasePath('/images/logo/logo.png')}
                        alt="Shree's Academy"
                        width={150}
                        height={60}
                        className="h-12 w-auto"
                    />

                    <div className="flex gap-3">
                        {[
                            { icon: 'mdi:instagram', href: 'https://www.instagram.com/wisdomqualityeducation_/' },
                            { icon: 'mdi:whatsapp', href: 'https://wa.me/919372016215' },
                            { icon: 'mdi:youtube', href: 'https://www.youtube.com' },
                            { icon: 'mdi:facebook', href: 'https://www.facebook.com' }
                        ].map((item, i) => (
                            <a
                                key={i}
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white/20 hover:bg-white text-white hover:text-primary flex items-center justify-center transition"
                            >
                                <Icon icon={item.icon} className="text-xl" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* MAIN FOOTER CONTENT */}
            <div className="max-w-7xl mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

                    {/* About */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">
                            About Shree's Academy
                        </h4>
                        <p className="text-sm text-gray-400 leading-relaxed">
                            Dedicated coaching institute providing quality education
                            for Boards, JEE, NEET & MHTCET with a strong focus on results
                            and personal attention.
                        </p>
                    </div>

                    {/* Links */}
                    {footerLinks
                        .filter(section => section.section !== 'Support')
                        .slice(0, 2)
                        .map((section, i) => (
                            <div key={i}>
                                <h4 className="text-white font-semibold mb-4">
                                    {section.section}
                                </h4>
                                <ul className="space-y-3 text-sm">
                                    {section.links.map((link, j) => (
                                        <li key={j}>
                                            <Link
                                                href={link.href}
                                                scroll={link.href !== '/'}
                                                className="hover:text-primary transition flex items-center gap-2"
                                            >
                                                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}

                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">
                            Contact Details
                        </h4>

                        <div className="space-y-4 text-sm">
                            <div className="flex gap-3">
                                <Icon icon="mdi:map-marker" className="text-primary text-xl" />
                                <p className="text-gray-400 leading-relaxed">
                                    Minimata Nagar, Janki Nagar, Nagpur <br />
                                    Bhandewadi Road, Pardi <br />
                                    Netaji Nagar, Nagpur
                                </p>
                            </div>

                            <div className="flex gap-3">
                                <Icon icon="mdi:phone" className="text-primary text-xl" />
                                <div className="space-y-1">
                                    <a href="tel:+919372016215" className="block hover:text-primary">
                                        +91 9372016215
                                    </a>
                                    <a href="tel:+919172331808" className="block hover:text-primary">
                                        +91 9172331808
                                    </a>
                                </div>
                            </div>

                            <div className="flex gap-3">
                                <Icon icon="mdi:email" className="text-primary text-xl" />
                                <a
                                    href="mailto:sonkusareclasses@gmail.com"
                                    className="hover:text-primary break-all"
                                >
                                    sonkusareclasses@gmail.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* BOTTOM BAR */}
            <div className="border-t border-gray-800">
                <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-gray-500 text-center md:text-left">
                        © {new Date().getFullYear()} Shree's Academy. All Rights Reserved.
                    </p>

                    <div className="flex gap-6 text-sm">
                        <Link href="/privacy-policy" className="hover:text-primary">
                            Privacy Policy
                        </Link>
                        <Link href="/terms" className="hover:text-primary">
                            Terms & Conditions
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
