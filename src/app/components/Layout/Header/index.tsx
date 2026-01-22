'use client'

import { useEffect, useRef, useState } from 'react'
import Logo from './Logo'
import HeaderLink from '../Header/Navigation/HeaderLink'
import MobileHeaderLink from '../Header/Navigation/MobileHeaderLink'
import { Icon } from '@iconify/react/dist/iconify.js'
import { HeaderItem } from '@/app/types/menu'
import withBasePath from '@/utils/basePath'

const Header: React.FC = () => {
    const [headerData, setHeaderData] = useState<HeaderItem[]>([])

    const [navbarOpen, setNavbarOpen] = useState(false)
    const [sticky, setSticky] = useState(false)

    const mobileMenuRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(withBasePath('/data/data.json'))
                if (!res.ok) throw new Error('Failed to fetch')
                const data = await res.json()
                setHeaderData(data.HeaderData)
            } catch (error) {
                console.error('Error fetching services:', error)
            }
        }
        fetchData()
    }, [])

    const handleScroll = () => {
        setSticky(window.scrollY >= 10)
    }

    const handleClickOutside = (event: MouseEvent) => {
        if (
            mobileMenuRef.current &&
            !mobileMenuRef.current.contains(event.target as Node) &&
            navbarOpen
        ) {
            setNavbarOpen(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            window.removeEventListener('scroll', handleScroll)
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [navbarOpen])

    useEffect(() => {
        if (navbarOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }
    }, [navbarOpen])

            return (
                <header
                    className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500 ${
                        sticky 
                            ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-md py-3 border-b border-gray-100 dark:border-gray-800' 
                            : 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm py-4 shadow-sm'
                    }`}>
                    <div className="w-full">
                        <div className='container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between w-full'>
                            <Logo />
                            <nav className='hidden lg:flex grow items-center gap-6 justify-center ml-8'>
                                {headerData.map((item, index) => (
                                    <HeaderLink key={index} item={item} />
                                ))}
                            </nav>
                            <div className='flex items-center gap-3'>
                                {/* Social Media Icons */}
                                <div className='hidden lg:flex items-center gap-2.5'>
                                    <a
                                        href="https://www.instagram.com/shreeswisdomsacademy/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className='w-9 h-9 rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 hover:from-primary hover:to-primary/90 flex items-center justify-center transition-all duration-300 group shadow-sm hover:shadow-md hover:scale-110'
                                        aria-label='Instagram'
                                    >
                                        <Icon
                                            icon='mdi:instagram'
                                            width={18}
                                            height={18}
                                            className='text-primary group-hover:text-white transition-colors'
                                        />
                                    </a>
                                    <a
                                        href="https://wa.me/918446425052?text=Hello%20Shree%20Wisdoms%20Academy%2C%20I%20would%20like%20to%20know%20more%20about%20your%20courses."
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className='w-9 h-9 rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 hover:from-primary hover:to-primary/90 flex items-center justify-center transition-all duration-300 group shadow-sm hover:shadow-md hover:scale-110'
                                        aria-label='WhatsApp'
                                    >
                                        <Icon
                                            icon='mdi:whatsapp'
                                            width={18}
                                            height={18}
                                            className='text-primary group-hover:text-white transition-colors'
                                        />
                                    </a>
                                    <a
                                        href="https://www.youtube.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className='w-9 h-9 rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 hover:from-primary hover:to-primary/90 flex items-center justify-center transition-all duration-300 group shadow-sm hover:shadow-md hover:scale-110'
                                        aria-label='YouTube'
                                    >
                                        <Icon
                                            icon='mdi:youtube'
                                            width={18}
                                            height={18}
                                            className='text-primary group-hover:text-white transition-colors'
                                        />
                                    </a>
                                    <a
                                        href="https://www.facebook.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className='w-9 h-9 rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 hover:from-primary hover:to-primary/90 flex items-center justify-center transition-all duration-300 group shadow-sm hover:shadow-md hover:scale-110'
                                        aria-label='Facebook'
                                    >
                                        <Icon
                                            icon='mdi:facebook'
                                            width={18}
                                            height={18}
                                            className='text-primary group-hover:text-white transition-colors'
                                        />
                                    </a>
                                </div>
                                <button
                                    onClick={() => setNavbarOpen(!navbarOpen)}
                                    className='block lg:hidden p-2.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 group'
                                    aria-label='Toggle mobile menu'>
                                    <div className='flex flex-col gap-1.5'>
                                        <span className={`block w-6 h-0.5 bg-primary dark:bg-white transition-all duration-300 ${navbarOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                                        <span className={`block w-6 h-0.5 bg-primary dark:bg-white transition-all duration-300 ${navbarOpen ? 'opacity-0' : ''}`}></span>
                                        <span className={`block w-6 h-0.5 bg-primary dark:bg-white transition-all duration-300 ${navbarOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* Mobile Menu Overlay */}
                    {navbarOpen && (
                        <div 
                            className='fixed top-0 left-0 w-full h-full bg-black/60 backdrop-blur-sm z-[60] lg:hidden transition-opacity duration-300'
                            onClick={() => setNavbarOpen(false)}
                        />
                    )}
                    {/* Mobile Menu */}
                    <div
                        ref={mobileMenuRef}
                        className={`lg:hidden fixed top-0 right-0 h-screen w-full max-w-sm bg-white dark:bg-gray-900 shadow-2xl transform transition-all duration-300 ease-out ${
                            navbarOpen 
                                ? 'translate-x-0 opacity-100' 
                                : 'translate-x-full opacity-0 pointer-events-none'
                        } z-[70] flex flex-col`}>
                        <div className='flex items-center justify-between p-6 border-b border-gray-100 dark:border-gray-800 bg-gradient-to-r from-primary/5 to-transparent flex-shrink-0'>
                            <Logo />
                            <button
                                onClick={() => setNavbarOpen(false)}
                                className='w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-primary hover:text-white flex items-center justify-center transition-all duration-300 group'
                                aria-label='Close menu'>
                                <Icon
                                    icon={'material-symbols:close-rounded'}
                                    width={24}
                                    height={24}
                                    className='text-gray-600 dark:text-gray-300 group-hover:text-white transition-colors'
                                />
                            </button>
                        </div>
                        <nav className='flex flex-col flex-1 overflow-y-auto p-6 gap-1 pb-8'>
                            {headerData.map((item, index) => (
                                <MobileHeaderLink key={index} item={item} onLinkClick={() => setNavbarOpen(false)} />
                            ))}
                            {/* Social Media Icons for Mobile */}
                            <div className='mt-auto pt-6 border-t border-gray-100 dark:border-gray-800 pb-4'>
                                <p className='text-sm font-semibold text-gray-500 dark:text-gray-400 mb-4 uppercase tracking-wide'>Follow Us</p>
                                <div className='flex items-center gap-3'>
                                    <a
                                        href="https://www.instagram.com/shreeswisdomsacademy/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className='w-11 h-11 rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 hover:from-primary hover:to-primary/90 flex items-center justify-center transition-all duration-300 group shadow-sm hover:shadow-md hover:scale-110'
                                        aria-label='Instagram'
                                    >
                                        <Icon
                                            icon='mdi:instagram'
                                            width={20}
                                            height={20}
                                            className='text-primary group-hover:text-white transition-colors'
                                        />
                                    </a>
                                    <a
                                        href="https://wa.me/918446425052?text=Hello%20Shree%20Wisdoms%20Academy%2C%20I%20would%20like%20to%20know%20more%20about%20your%20courses."
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className='w-11 h-11 rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 hover:from-primary hover:to-primary/90 flex items-center justify-center transition-all duration-300 group shadow-sm hover:shadow-md hover:scale-110'
                                        aria-label='WhatsApp'
                                    >
                                        <Icon
                                            icon='mdi:whatsapp'
                                            width={20}
                                            height={20}
                                            className='text-primary group-hover:text-white transition-colors'
                                        />
                                    </a>
                                    <a
                                        href="https://www.youtube.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className='w-11 h-11 rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 hover:from-primary hover:to-primary/90 flex items-center justify-center transition-all duration-300 group shadow-sm hover:shadow-md hover:scale-110'
                                        aria-label='YouTube'
                                    >
                                        <Icon
                                            icon='mdi:youtube'
                                            width={20}
                                            height={20}
                                            className='text-primary group-hover:text-white transition-colors'
                                        />
                                    </a>
                                    <a
                                        href="https://www.facebook.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className='w-11 h-11 rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 hover:from-primary hover:to-primary/90 flex items-center justify-center transition-all duration-300 group shadow-sm hover:shadow-md hover:scale-110'
                                        aria-label='Facebook'
                                    >
                                        <Icon
                                            icon='mdi:facebook'
                                            width={20}
                                            height={20}
                                            className='text-primary group-hover:text-white transition-colors'
                                        />
                                    </a>
                                </div>
                            </div>
                        </nav>
                    </div>
                </header>
            )
}

export default Header
