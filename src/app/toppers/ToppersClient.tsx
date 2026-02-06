'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Icon } from '@iconify/react'
import withBasePath from '@/utils/basePath'

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
                name: 'Mahebeejzara Ansari',
                class: '12th',
                rank: 1,
                percentage: '94%',
                image: withBasePath('/images/toppers_2025/mahebeejzara_ansari_12th_94.jpeg'),
                subject: 'Science',
                // exam: 'HSSC'
            },
            {
                id: 2,
                name: 'Himanshu Damke',
                class: '12th',
                rank: 2,
                percentage: '90%',
                image: withBasePath('/images/toppers_2025/himanshu_damke_12th_90.jpeg'),
                subject: 'Science',
                // exam: 'NEET'
            },
            {
                id: 3,
                name: 'Saniya Chakole',
                class: '12th',
                rank: 3,
                percentage: '87%',
                image: withBasePath('/images/toppers_2025/saniya_chakole_12th_87.jpeg'),
                subject: 'Science',
                // exam: 'MHTCET'
            },
            {
                id: 4,
                name: 'Riya Khapekar',
                class: '12th',
                rank: 4,
                percentage: '86%',
                image: withBasePath('/images/toppers_2025/riya_khapekar_12th_86.jpeg'),
                subject: 'Science'
            },
            {
                id: 5,
                name: 'Harshita Gokhale',
                class: '10th',
                rank: 1,
                percentage: '95%',
                image: withBasePath('/images/toppers_2025/harshita_gokhale_10th_95.jpeg'),
                subject: 'All Subjects',
                // exam: 'HSSC'
            },
            {
                id: 6,
                name: 'Khushi Wadibhasme',
                class: '10th',
                rank: 2,
                percentage: '94%',
                image: withBasePath('/images/toppers_2025/khushi_wadibhasme_10th_94.jpeg'),
                subject: 'All Subjects',
                // exam: 'NEET'
            },
            {
                id: 7,
                name: 'Manas Dawale',
                class: '10th',
                rank: 3,
                percentage: '93%',
                image: withBasePath('/images/toppers_2025/manas_dawale_10th_93.jpeg'),
                subject: 'All Subjects',
                // exam: 'MHTCET'
            },
            
        ]
    },
    {
        year: 2024,
        toppers: [
            {
                id: 1,
                name: 'Yash Dharmik',
                class: '12th',
                rank: 1,
                percentage: '96.2%',
                image: withBasePath('/images/toppers_2024/yash_dharmik_12_962.jpeg'),
                subject: 'Science',
                // exam: 'JEE Advanced'
            },
            {
                id: 2,
                name: 'Kadambari Ninave',
                class: '12th',
                rank: 2,
                percentage: '95.3%',
                image: withBasePath('/images/toppers_2024/kadambari_ninave_12_953.jpeg'),
                subject: 'Science',
                // exam: 'NEET'
            },
            {
                id: 3,
                name: 'Muskan Dewani',
                class: '12th',
                rank: 3,
                percentage: '88%',
                image: withBasePath('/images/toppers_2024/muskan_dewani_12_88.jpeg'),
                subject: 'Science',
                // exam: 'MHTCET'
            },
            {
                id: 4,
                name: 'Asim Patel',
                class: '12th',
                rank: 4,
                percentage: '82%',
                image: withBasePath('/images/toppers_2024/asim_patel_12_82.jpeg'),
                subject: 'Science',
                // exam: 'MHTCET'
            },
            {
                id: 5,
                name: 'Akshara Shete',
                class: '10th',
                rank: 1,
                percentage: '97%',
                image: withBasePath('/images/toppers_2024/akshara_shete_10_97.jpeg'),
                subject: 'All Subjects',
                // exam: 'MHTCET'
            },
            {
                id: 6,
                name: 'Bhoomi Gumgaokar',
                class: '10th',
                rank: 1,
                percentage: '97%',
                image: withBasePath('/images/toppers_2024/bhoomi_gumgaokar_10_97.jpeg'),
                subject: 'All Subjects',
                // exam: 'MHTCET'
            },
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

const ToppersClient = () => {
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
                                    className={`group relative overflow-hidden rounded-3xl border ${theme.border}
                                    bg-white dark:bg-gray-800 shadow-sm hover:shadow-2xl transition-all`}
                                >
                                    {/* Ribbon */}
                                    <div className="absolute -right-12 top-6 rotate-45">
                                        <span className={`px-12 py-1.5 text-xs font-semibold tracking-wider uppercase ${theme.badge}`}>
                                            Rank {topper.rank}
                                        </span>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-[140px,1fr] gap-5 p-6">
                                        {/* Photo */}
                                        <div className="flex justify-center sm:justify-start">
                                            <div className="relative">
                                                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-primary/30 to-transparent blur-sm" />
                                                <Image
                                                    src={topper.image}
                                                    alt={topper.name}
                                                    width={140}
                                                    height={140}
                                                    className="relative rounded-3xl object-cover shadow-lg"
                                                />
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="flex flex-col justify-between">
                                            <div>
                                                <p className="text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-2">
                                                    Top Performer
                                                </p>
                                                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                                                    {topper.name}
                                                </h3>
                                                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                                                    {topper.class}
                                                </p>
                                            </div>

                                            <div className="mt-5 flex items-center justify-between">
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
                                                <div className="text-right">
                                                    <p className="text-[10px] uppercase tracking-wider text-gray-500 dark:text-gray-400">
                                                        Percentage
                                                    </p>
                                                    <p className="text-2xl font-bold text-gray-900 dark:text-white">
                                                        {topper.percentage}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
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

export default ToppersClient
