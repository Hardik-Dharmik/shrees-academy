'use client'

import { Icon } from '@iconify/react'

interface Facility {
    id: number
    title: string
    description: string
    icon: string
    accent: string
    bg: string
}

const facilities: Facility[] = [
    {
        id: 1,
        title: 'Small Batch Sizes',
        description: 'Limited students per batch for focused and personalized attention.',
        icon: 'mdi:account-group',
        accent: 'from-blue-500 to-blue-600',
        bg: 'bg-blue-50 dark:bg-blue-900/20'
    },
    {
        id: 2,
        title: 'Regular Tests & Assessments',
        description: 'Weekly and monthly tests to monitor academic progress.',
        icon: 'mdi:clipboard-text-outline',
        accent: 'from-green-500 to-green-600',
        bg: 'bg-green-50 dark:bg-green-900/20'
    },
    {
        id: 3,
        title: 'Doubt Clearing Sessions',
        description: 'Dedicated sessions to strengthen conceptual understanding.',
        icon: 'mdi:help-circle-outline',
        accent: 'from-purple-500 to-purple-600',
        bg: 'bg-purple-50 dark:bg-purple-900/20'
    },
    {
        id: 4,
        title: 'Study Materials',
        description: 'Comprehensive notes and practice papers for all subjects.',
        icon: 'mdi:book-open-page-variant',
        accent: 'from-orange-500 to-orange-600',
        bg: 'bg-orange-50 dark:bg-orange-900/20'
    },
    {
        id: 5,
        title: 'Experienced Faculty',
        description: 'Highly qualified teachers with strong academic background.',
        icon: 'mdi:school-outline',
        accent: 'from-pink-500 to-pink-600',
        bg: 'bg-pink-50 dark:bg-pink-900/20'
    },
    {
        id: 7,
        title: 'Exam Preparation',
        description: 'Focused preparation for Boards, JEE, NEET & MHTCET.',
        icon: 'mdi:certificate-outline',
        accent: 'from-red-500 to-red-600',
        bg: 'bg-red-50 dark:bg-red-900/20'
    },
    {
        id: 8,
        title: 'Revision Sessions',
        description: 'Regular revision sessions to reinforce important topics.',
        icon: 'mdi:refresh-circle-outline',
        accent: 'from-yellow-500 to-yellow-600',
        bg: 'bg-yellow-50 dark:bg-yellow-900/20'
    }
]

const Facilities = () => {
    return (
        <section className="py-20 bg-gray-50 dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4">

                {/* Header */}
                <div className="text-center mb-16">
                    <Icon
                        icon="mdi:school-outline"
                        className="text-primary text-4xl mx-auto mb-4"
                    />
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                        Our Facilities
                    </h2>
                    <p className="mt-3 max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
                        A complete learning ecosystem designed to help students succeed
                        academically with confidence.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {facilities.map((facility) => (
                        <div
                            key={facility.id}
                            className="relative bg-white dark:bg-gray-800 rounded-2xl pt-12 px-6 pb-6 shadow-sm hover:shadow-lg transition-all duration-300"
                        >
                            {/* Accent bar */}
                            <div
                                className={`absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-gradient-to-r ${facility.accent}`}
                            />

                            {/* Floating Icon */}
                            <div
                                className={`absolute -top-6 left-6 w-12 h-12 rounded-xl flex items-center justify-center shadow-md ${facility.bg}`}
                            >
                                <Icon
                                    icon={facility.icon}
                                    width={26}
                                    className="text-gray-800 dark:text-white"
                                />
                            </div>

                            {/* Content */}
                            <h3 className="mt-6 text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                {facility.title}
                            </h3>

                            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                                {facility.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Footer Note */}
                <div className="mt-16 text-center">
                    <p className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                        <Icon icon="mdi:information-outline" className="text-primary" />
                        Facilities designed for focused learning and strong results
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Facilities
