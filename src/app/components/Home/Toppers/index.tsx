'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '@iconify/react'

interface Topper {
    id: number
    name: string
    class: string
    rank: number
    percentage: string
    image: string
    subject?: string
}

const toppers: Topper[] = [
    {
        id: 1,
        name: 'Priya Sharma',
        class: '12th Grade',
        rank: 1,
        percentage: '98.5%',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
        subject: 'Science'
    },
    {
        id: 2,
        name: 'Rahul Patel',
        class: '12th Grade',
        rank: 2,
        percentage: '97.8%',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
        subject: 'Commerce'
    },
    {
        id: 3,
        name: 'Ananya Desai',
        class: '11th Grade',
        rank: 1,
        percentage: '96.2%',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
        subject: 'Science'
    },
    {
        id: 4,
        name: 'Arjun Singh',
        class: '10th Grade',
        rank: 1,
        percentage: '95.5%',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
        subject: 'All Subjects'
    }
]

const rankColor = (rank: number) => {
    if (rank === 1) return 'bg-yellow-100 text-yellow-800'
    if (rank === 2) return 'bg-slate-100 text-slate-700'
    if (rank === 3) return 'bg-orange-100 text-orange-800'
    return 'bg-blue-100 text-blue-800'
}

const accentBorder = (rank: number) => {
    if (rank === 1) return 'border-yellow-400'
    if (rank === 2) return 'border-slate-400'
    if (rank === 3) return 'border-orange-400'
    return 'border-blue-400'
}

const Toppers = () => {
    return (
        <section className="py-20 bg-gradient-to-b from-primary/5 to-transparent dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4">

                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center justify-center mb-4">
                        <Icon
                            icon="mdi:trophy-award"
                            className="text-primary text-4xl"
                        />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                        Our Top Performers
                    </h2>
                    <p className="mt-3 max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
                        Celebrating students who achieved outstanding academic results
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {toppers.map((topper) => (
                        <div
                            key={topper.id}
                            className={`relative bg-white dark:bg-gray-800 rounded-2xl border-2 ${accentBorder(
                                topper.rank
                            )} shadow-sm hover:shadow-lg transition`}
                        >
                            {/* Rank Badge */}
                            <div
                                className={`absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold ${rankColor(
                                    topper.rank
                                )}`}
                            >
                                Rank #{topper.rank}
                            </div>

                            {/* Card Body */}
                            <div className="pt-10 px-6 pb-6 text-center">
                                <Image
                                    src={topper.image}
                                    alt={topper.name}
                                    width={96}
                                    height={96}
                                    className="mx-auto rounded-full border-4 border-white shadow-md object-cover"
                                />

                                <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
                                    {topper.name}
                                </h3>

                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    {topper.class}
                                </p>

                                <div className="mt-4 text-2xl font-bold text-primary">
                                    {topper.percentage}
                                </div>

                                {topper.subject && (
                                    <div className="mt-3 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                                        <Icon icon="mdi:book-open-variant" />
                                        {topper.subject}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer CTA */}
                <div className="mt-16 text-center">
                    <Link
                        href="/results"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-white font-semibold hover:bg-primary/90 transition"
                    >
                        View All Results
                        <Icon icon="mdi:arrow-right" />
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Toppers
