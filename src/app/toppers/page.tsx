'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Icon } from '@iconify/react'

interface Topper {
    id: number
    name: string
    class: string
    rank: number
    percentage: string
    image: string
    subject?: string
    exam?: string
}

interface YearToppers {
    year: number
    toppers: Topper[]
}

const toppersByYear: YearToppers[] = [
    {
        year: 2025,
        toppers: [
            {
                id: 1,
                name: 'Priya Sharma',
                class: '12th Grade',
                rank: 1,
                percentage: '98.5%',
                image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
                subject: 'Science',
                exam: 'JEE Advanced'
            },
            {
                id: 2,
                name: 'Rahul Patel',
                class: '12th Grade',
                rank: 2,
                percentage: '97.8%',
                image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
                subject: 'Science',
                exam: 'NEET'
            },
            {
                id: 3,
                name: 'Ananya Desai',
                class: '12th Grade',
                rank: 3,
                percentage: '96.2%',
                image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
                subject: 'Science',
                exam: 'MHTCET'
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
    },
    {
        year: 2024,
        toppers: [
            {
                id: 1,
                name: 'Sneha Reddy',
                class: '12th Grade',
                rank: 1,
                percentage: '97.2%',
                image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop',
                subject: 'Science',
                exam: 'JEE Advanced'
            },
            {
                id: 2,
                name: 'Vikram Kumar',
                class: '12th Grade',
                rank: 2,
                percentage: '96.5%',
                image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop',
                subject: 'Science',
                exam: 'NEET'
            },
            {
                id: 3,
                name: 'Meera Joshi',
                class: '12th Grade',
                rank: 3,
                percentage: '95.8%',
                image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop',
                subject: 'Science',
                exam: 'MHTCET'
            }
        ]
    },
    {
        year: 2023,
        toppers: [
            {
                id: 1,
                name: 'Aditya Verma',
                class: '12th Grade',
                rank: 1,
                percentage: '96.8%',
                image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
                subject: 'Science',
                exam: 'JEE Advanced'
            },
            {
                id: 2,
                name: 'Kavya Nair',
                class: '12th Grade',
                rank: 2,
                percentage: '95.9%',
                image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
                subject: 'Science',
                exam: 'NEET'
            },
            {
                id: 3,
                name: 'Rohan Malhotra',
                class: '12th Grade',
                rank: 3,
                percentage: '95.1%',
                image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
                subject: 'Science',
                exam: 'MHTCET'
            }
        ]
    },
    {
        year: 2022,
        toppers: [
            {
                id: 1,
                name: 'Isha Gupta',
                class: '12th Grade',
                rank: 1,
                percentage: '96.2%',
                image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
                subject: 'Science',
                exam: 'JEE Advanced'
            },
            {
                id: 2,
                name: 'Aryan Shah',
                class: '12th Grade',
                rank: 2,
                percentage: '95.5%',
                image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
                subject: 'Science',
                exam: 'NEET'
            },
            {
                id: 3,
                name: 'Divya Rao',
                class: '12th Grade',
                rank: 3,
                percentage: '94.8%',
                image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop',
                subject: 'Science',
                exam: 'MHTCET'
            }
        ]
    },
    {
        year: 2021,
        toppers: [
            {
                id: 1,
                name: 'Neha Agarwal',
                class: '12th Grade',
                rank: 1,
                percentage: '95.8%',
                image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
                subject: 'Science',
                exam: 'JEE Advanced'
            },
            {
                id: 2,
                name: 'Siddharth Mehta',
                class: '12th Grade',
                rank: 2,
                percentage: '95.1%',
                image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop',
                subject: 'Science',
                exam: 'NEET'
            },
            {
                id: 3,
                name: 'Pooja Iyer',
                class: '12th Grade',
                rank: 3,
                percentage: '94.5%',
                image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop',
                subject: 'Science',
                exam: 'MHTCET'
            }
        ]
    }
]

const rankTheme = (rank: number) => {
    switch (rank) {
        case 1:
            return {
                border: 'border-yellow-400',
                bg: 'bg-yellow-50',
                badge: 'bg-yellow-100 text-yellow-700'
            }
        case 2:
            return {
                border: 'border-gray-400',
                bg: 'bg-gray-50',
                badge: 'bg-gray-100 text-gray-700'
            }
        case 3:
            return {
                border: 'border-orange-400',
                bg: 'bg-orange-50',
                badge: 'bg-orange-100 text-orange-700'
            }
        default:
            return {
                border: 'border-primary',
                bg: 'bg-primary/5',
                badge: 'bg-primary/10 text-primary'
            }
    }
}

const rankIcon = (rank: number) => {
    if (rank === 1) return 'mdi:trophy'
    if (rank === 2) return 'mdi:medal'
    if (rank === 3) return 'mdi:medal-outline'
    return 'mdi:star'
}

const OurToppers = () => {
    const [selectedYear, setSelectedYear] = useState(2025)
    const years = [2025, 2024, 2023, 2022, 2021]
    const toppers =
        toppersByYear.find(y => y.year === selectedYear)?.toppers || []

    return (
        <main className="pt-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-900">

            {/* HEADER */}
            <section className="py-20 bg-white dark:bg-gray-800 border-b">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <Icon icon="mdi:trophy-variant" className="text-primary text-5xl mb-4 mx-auto" />
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-3">
                        Our Toppers
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        Recognising consistent academic excellence across boards and competitive exams.
                    </p>
                </div>
            </section>

            {/* YEAR SELECTOR */}
            <section className="py-10 bg-gray-100 dark:bg-gray-800">
                <div className="flex justify-center gap-3 flex-wrap">
                    {years.map(year => (
                        <button
                            key={year}
                            onClick={() => setSelectedYear(year)}
                            className={`px-6 py-2 rounded-full text-sm font-semibold transition-all
                                ${selectedYear === year
                                    ? 'bg-gradient-to-r from-primary to-primary/80 text-white shadow-md scale-105'
                                    : 'bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200'}
                            `}
                        >
                            {year}
                        </button>
                    ))}
                </div>
            </section>

            {/* YEAR LABEL */}
            <section className="py-4 text-center">
                <span className="inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-primary/10 text-primary font-semibold">
                    <Icon icon="mdi:calendar" />
                    Toppers of {selectedYear}
                </span>
            </section>

            {/* TOPPERS GRID */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                        {toppers.map(topper => {
                            const theme = rankTheme(topper.rank)

                            return (
                                <div
                                    key={topper.id}
                                    className={`relative bg-white dark:bg-gray-800 rounded-2xl border-l-4 ${theme.border}
                                    shadow-sm hover:shadow-xl transition-all p-6 ${theme.bg}`}
                                >
                                    {/* Rank & Percentage */}
                                    <div className="flex items-center justify-between mb-4">
                                        <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-semibold ${theme.badge}`}>
                                            <Icon icon={rankIcon(topper.rank)} />
                                            Rank {topper.rank}
                                        </span>
                                        <span className="text-xl font-bold text-gray-900 dark:text-white">
                                            {topper.percentage}
                                        </span>
                                    </div>

                                    {/* Student */}
                                    <div className="flex items-center gap-4 mb-4">
                                        <Image
                                            src={topper.image}
                                            alt={topper.name}
                                            width={64}
                                            height={64}
                                            className="rounded-full border object-cover"
                                        />
                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                                {topper.name}
                                            </h3>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                                {topper.class}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Subject & Exam */}
                                    <div className="flex flex-wrap gap-2 text-sm">
                                        {topper.subject && (
                                            <span className="px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">
                                                {topper.subject}
                                            </span>
                                        )}
                                        {topper.exam && (
                                            <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-600 font-medium">
                                                {topper.exam}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* FOOT NOTE */}
            <section className="py-14 bg-primary text-white text-center">
                <Icon icon="mdi:school-outline" className="text-4xl mb-3 mx-auto" />
                <h2 className="text-2xl md:text-3xl font-bold mb-2">
                    Excellence Backed by Consistency
                </h2>
                <p className="text-white/90 max-w-2xl mx-auto">
                    Every year, our students raise the benchmark with dedication and discipline.
                </p>
            </section>

        </main>
    )
}

export default OurToppers
