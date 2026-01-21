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
            title: 'Admissions Open – 2026',
            message:
                'Admissions are now open for 9th–12th, JEE, NEET & MHTCET batches. Limited seats available.',
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
            title: 'Outstanding Results – 2024',
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
                return 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
            case 'event':
                return 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400'
            case 'update':
                return 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
            case 'success':
                return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
            default:
                return 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400'
        }
    }

    return (
        <section className="py-20 bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4">

                {/* Header */}
                <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                            Announcements
                        </h2>
                        <p className="mt-2 text-gray-600 dark:text-gray-400 max-w-xl">
                            Latest updates, notices and important information
                        </p>
                    </div>

                    <button
                        onClick={() =>
                            setVisible(visible === 4 ? announcements.length : 4)
                        }
                        className="self-start md:self-auto px-5 py-2 rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition text-sm font-semibold"
                    >
                        {visible === 4 ? 'View All' : 'Show Less'}
                    </button>
                </div>

                {/* Card Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {announcements.slice(0, visible).map(item => (
                        <div
                            key={item.id}
                            className="relative group bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 shadow-sm hover:shadow-lg transition"
                        >
                            {/* Watermark Icon */}
                            <Icon
                                icon={item.icon}
                                className="absolute right-4 top-4 text-gray-200 dark:text-gray-700 text-5xl"
                            />

                            {/* Badge + Date */}
                            <div className="flex items-center justify-between mb-3">
                                <span
                                    className={`text-xs font-bold uppercase px-3 py-1 rounded-full ${getBadgeStyle(
                                        item.type
                                    )}`}
                                >
                                    {item.type}
                                </span>
                                <span className="text-xs text-gray-500">
                                    {new Date(item.date).toLocaleDateString('en-IN', {
                                        day: 'numeric',
                                        month: 'short'
                                    })}
                                </span>
                            </div>

                            {/* Content */}
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                {item.title}
                            </h3>

                            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                                {item.message}
                            </p>

                            {/* Hover underline */}
                            <div className="mt-4 h-0.5 w-0 bg-primary group-hover:w-12 transition-all" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Announcements
