'use client'

import { Icon } from '@iconify/react'
import { useState } from 'react'

interface Announcement {
    id: number
    type: 'important' | 'update' | 'event' | 'success'
    title: string
    message: string
    date: string
    icon: string
}

const Announcements = () => {
    const [visible, setVisible] = useState(4)

    const announcements: Announcement[] = [
        {
            id: 1,
            type: 'important',
            title: 'Admissions Open - 2026',
            message:
                'Admissions are now open for 9th-12th, JEE, NEET & MHTCET batches. Limited seats available.',
            date: new Date().toISOString(),
            icon: 'mdi:school'
        },
        {
            id: 2,
            type: 'event',
            title: 'Free Demo Lectures',
            message:
                'Attend free demo lectures and experience our teaching approach before enrolling.',
            date: new Date(Date.now() + 2 * 86400000).toISOString(),
            icon: 'mdi:calendar-star'
        },
        {
            id: 3,
            type: 'update',
            title: 'JEE & NEET 2025 Batches',
            message:
                'New intensive preparation batches starting soon with regular mock tests.',
            date: new Date(Date.now() + 7 * 86400000).toISOString(),
            icon: 'mdi:alert-circle-outline'
        },
        {
            id: 4,
            type: 'success',
            title: 'Outstanding Results - 2024',
            message:
                'Our students achieved excellent ranks in JEE, NEET & MHTCET examinations.',
            date: new Date(Date.now() - 5 * 86400000).toISOString(),
            icon: 'mdi:trophy-outline'
        },
        {
            id: 5,
            type: 'important',
            title: 'MHTCET Batch Starting Soon',
            message:
                'Dedicated MHTCET batch with complete syllabus coverage and test series.',
            date: new Date(Date.now() + 14 * 86400000).toISOString(),
            icon: 'mdi:school-outline'
        }
    ]

    const getBadgeStyle = (type: string) => {
        switch (type) {
            case 'important':
                return 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300'
            case 'event':
                return 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300'
            case 'update':
                return 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300'
            case 'success':
                return 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300'
            default:
                return 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400'
        }
    }

    return (
        <section className="relative py-24 bg-white dark:bg-gray-950 overflow-hidden">
            <div className="pointer-events-none absolute -top-20 right-0 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(0,0,0,0.08),transparent_65%)] dark:bg-[radial-gradient(circle,rgba(255,255,255,0.08),transparent_65%)]" />
            <div className="pointer-events-none absolute bottom-0 left-0 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(0,0,0,0.06),transparent_65%)] dark:bg-[radial-gradient(circle,rgba(255,255,255,0.06),transparent_65%)]" />
            <div className="relative max-w-7xl mx-auto px-4">

                {/* Header */}
                <div className="mb-14 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
                    <div>
                        <div className="inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/10 bg-white/80 dark:bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">
                            Latest Updates
                        </div>
                        <h2 className="mt-4 text-3xl md:text-5xl font-semibold text-gray-900 dark:text-white">
                            Announcements & Highlights
                        </h2>
                        <p className="mt-3 text-gray-600 dark:text-gray-300 max-w-xl text-lg">
                            Stay in the loop with fresh notices, events, and success stories from the academy.
                        </p>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="hidden sm:flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-gray-400">
                            <span className="h-px w-10 bg-gray-200 dark:bg-gray-800" />
                            updates
                        </div>
                        <button
                            onClick={() =>
                                setVisible(visible === 4 ? announcements.length : 4)
                            }
                            className="px-6 py-2.5 rounded-full border border-black/10 dark:border-white/10 bg-white/80 dark:bg-white/5 text-gray-900 dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition text-sm font-semibold"
                        >
                            {visible === 4 ? 'View All' : 'Show Less'}
                        </button>
                    </div>
                </div>

                {/* Card Grid */}
                <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
                    {announcements.slice(0, visible).map(item => (
                        <div
                            key={item.id}
                            className="relative group bg-white/90 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-3xl p-6 shadow-[0_20px_45px_-35px_rgba(0,0,0,0.5)] hover:shadow-[0_25px_55px_-35px_rgba(0,0,0,0.7)] transition"
                        >
                            <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

                            {/* Badge + Date */}
                            <div className="flex items-center justify-between mb-5">
                                <span
                                    className={`text-[11px] font-bold uppercase px-3 py-1 rounded-full ${getBadgeStyle(
                                        item.type
                                    )}`}
                                >
                                    {item.type}
                                </span>
                                <span className="text-xs text-gray-500 dark:text-gray-400 rounded-full bg-black/5 dark:bg-white/10 px-3 py-1">
                                    {new Date(item.date).toLocaleDateString('en-IN', {
                                        day: 'numeric',
                                        month: 'short'
                                    })}
                                </span>
                            </div>

                            {/* Content */}
                            <div className="flex items-start gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-black/5 dark:bg-white/10 text-gray-700 dark:text-gray-200">
                                    <Icon icon={item.icon} className="text-2xl" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                        {item.title}
                                    </h3>

                                    <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                                        {item.message}
                                    </p>
                                </div>
                            </div>

                            {/* Hover underline */}
                            <div className="mt-6 h-0.5 w-0 bg-primary group-hover:w-12 transition-all" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Announcements