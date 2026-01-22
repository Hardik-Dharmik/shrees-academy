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
        <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[length:20px_20px]"></div>
            </div>

            {/* Main Footer Content */}
            <div className="relative max-w-7xl mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

                    {/* Brand Section */}
                    <div className="lg:col-span-1">
                        <div className="mb-6">
                            <Image
                                src={withBasePath('/images/logo/logo.png')}
                                alt="Shree's Academy"
                                width={180}
                                height={72}
                                className="h-14 w-auto mb-4"
                            />
                            <p className="text-gray-400 leading-relaxed text-sm">
                                Empowering students to achieve excellence in competitive exams through
                                personalized coaching, innovative teaching methods, and unwavering commitment
                                to academic success.
                            </p>
                        </div>

                        {/* Social Media */}
                        <div className="flex gap-3">
                            {[
                                { icon: 'mdi:instagram', href: 'https://www.instagram.com/shreeswisdomsacademy/', color: 'hover:text-pink-400' },
                                { icon: 'mdi:whatsapp', href: 'https://wa.me/919372016215', color: 'hover:text-green-400' },
                                { icon: 'mdi:youtube', href: 'https://www.youtube.com', color: 'hover:text-red-500' },
                                { icon: 'mdi:facebook', href: 'https://www.facebook.com', color: 'hover:text-blue-500' }
                            ].map((item, i) => (
                                <a
                                    key={i}
                                    href={item.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`w-12 h-12 rounded-full bg-gray-800 hover:bg-gray-700 border border-gray-700 flex items-center justify-center transition-all duration-300 transform hover:scale-110 ${item.color}`}
                                >
                                    <Icon icon={item.icon} className="text-xl" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-bold text-lg mb-6 relative">
                            Quick Links
                            <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-primary"></span>
                        </h4>
                        <ul className="space-y-3">
                            {footerLinks
                                .find(section => section.section === 'Coaching Centre')
                                ?.links.slice(0, 6)
                                .map((link, j) => (
                                    <li key={j}>
                                        <Link
                                            href={link.href}
                                            scroll={link.href !== '/'}
                                            className="text-gray-400 hover:text-primary transition-all duration-300 flex items-center gap-3 group"
                                        >
                                            <span className="w-1.5 h-1.5 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                            <span className="group-hover:translate-x-1 transition-transform">{link.label}</span>
                                        </Link>
                                    </li>
                                ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-white font-bold text-lg mb-6 relative">
                            Our Services
                            <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-primary"></span>
                        </h4>
                        <ul className="space-y-3 text-gray-400">
                            <li className="flex items-center gap-3">
                                <Icon icon="mdi:book-open-page-variant" className="text-primary text-lg" />
                                <span>Board Exam Coaching</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Icon icon="mdi:target" className="text-primary text-lg" />
                                <span>JEE/NEET Preparation</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Icon icon="mdi:school" className="text-primary text-lg" />
                                <span>MHTCET Training</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Icon icon="mdi:account-group" className="text-primary text-lg" />
                                <span>Personalized Mentoring</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Icon icon="mdi:test-tube" className="text-primary text-lg" />
                                <span>Mock Tests & Analysis</span>
                            </li>
                        </ul>
                    </div>

                    {/* Contact & Newsletter */}
                    <div>
                        <h4 className="text-white font-bold text-lg mb-6 relative">
                            Get In Touch
                            <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-primary"></span>
                        </h4>

                        {/* Contact Info */}
                        <div className="space-y-4 mb-6">
                            <div className="flex gap-3">
                                <Icon icon="mdi:map-marker" className="text-primary text-xl flex-shrink-0 mt-1" />
                                <div className="text-sm text-gray-400">
                                    <p>Opposite Nikalas Mandir, Itwari, Nagpur, Maharashtra.</p>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <Icon icon="mdi:map-marker" className="text-primary text-xl flex-shrink-0 mt-1" />
                                <div className="text-sm text-gray-400">
                                    <p>Near Railway Crossing, Namdev Nagar, Binaki, Nagpur, Maharashtra.</p>
                                </div>
                            </div>

                            <div className="flex gap-3">
                                <Icon icon="mdi:phone" className="text-primary text-xl flex-shrink-0" />
                                <div className="text-sm text-gray-400 space-y-1">
                                    <a href="tel:+919372016215" className="block hover:text-primary transition">
                                        +91 9823225787
                                    </a>
                                    <a href="tel:+919172331808" className="block hover:text-primary transition">
                                        +91 8446425052
                                    </a>
                                </div>
                            </div>

                            <div className="flex gap-3">
                                <Icon icon="mdi:email" className="text-primary text-xl flex-shrink-0" />
                                <a
                                    href="mailto:sonkusareclasses@gmail.com"
                                    className="text-sm text-gray-400 hover:text-primary transition break-all"
                                >
                                    shreeacademy@gmail.com
                                </a>
                            </div>
                        </div>

                        {/* Newsletter Signup */}
                        {/* <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                            <h5 className="text-white font-semibold mb-2 text-sm">Stay Updated</h5>
                            <p className="text-xs text-gray-400 mb-3">Get latest news and updates</p>
                            <div className="flex gap-2">
                                <input
                                    type="email"
                                    placeholder="Your email"
                                    className="flex-1 px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-sm text-white placeholder-gray-400 focus:outline-none focus:border-primary"
                                />
                                <button className="px-4 py-2 bg-primary hover:bg-primary/90 text-white rounded-md text-sm font-medium transition">
                                    Subscribe
                                </button>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="relative border-t border-gray-700/50 bg-gray-900/50 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto px-4 py-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-gray-400">
                            <p>© {new Date().getFullYear()} Shree's Academy. All Rights Reserved.</p>
                            
                        </div>

                        {/* <div className="flex gap-6 text-sm">
                            <Link href="/privacy-policy" className="text-gray-400 hover:text-primary transition">
                                Privacy Policy
                            </Link>
                            <Link href="/terms" className="text-gray-400 hover:text-primary transition">
                                Terms & Conditions
                            </Link>
                        </div> */}
                    </div>
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-32 translate-x-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/5 rounded-full blur-3xl translate-y-24 -translate-x-24"></div>
        </footer>
    )
}

export default Footer
