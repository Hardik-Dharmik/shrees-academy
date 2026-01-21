'use client'

import Link from 'next/link'
import { Icon } from '@iconify/react'

interface Course {
    id: string
    title: string
    description: string
    icon: string
    slug: string
    accent: string
    bg: string
}

const courses: Course[] = [
    {
        id: '1',
        title: '8th & 9th Foundation',
        description: 'Concept-based learning for State Board students with strong academic foundation.',
        icon: 'mdi:school-outline',
        slug: '8th-9th',
        accent: 'border-cyan-500',
        bg: 'bg-cyan-50'
    },
    {
        id: '2',
        title: '10th Board Preparation',
        description: 'Complete syllabus coverage with regular testing and board-oriented preparation.',
        icon: 'mdi:school',
        slug: '10th',
        accent: 'border-blue-500',
        bg: 'bg-blue-50'
    },
    {
        id: '3',
        title: '11th & 12th Science',
        description: 'In-depth coaching for Physics, Chemistry & Maths with exam focus.',
        icon: 'mdi:book-education-outline',
        slug: '11th-12th-science',
        accent: 'border-green-500',
        bg: 'bg-green-50'
    },
    {
        id: '4',
        title: 'JEE Preparation',
        description: 'Advanced problem-solving and concept clarity for JEE Main & Advanced.',
        icon: 'mdi:calculator-variant-outline',
        slug: 'jee',
        accent: 'border-purple-500',
        bg: 'bg-purple-50'
    },
    {
        id: '5',
        title: 'MHTCET Coaching',
        description: 'Targeted preparation with Maharashtra CET pattern and mock tests.',
        icon: 'mdi:clipboard-text-outline',
        slug: 'mhtcet',
        accent: 'border-indigo-500',
        bg: 'bg-indigo-50'
    },
    {
        id: '6',
        title: 'NEET Preparation',
        description: 'Focused medical entrance coaching with Biology, Physics & Chemistry.',
        icon: 'mdi:medical-bag',
        slug: 'neet',
        accent: 'border-red-500',
        bg: 'bg-red-50'
    }
]

const Courses = () => {
    return (
        <main className="pt-20 bg-white dark:bg-gray-900">

            {/* HERO */}
            <section className="py-24 bg-gradient-to-r from-primary/90 to-primary text-white">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <Icon icon="mdi:book-open-page-variant" className="text-5xl mx-auto mb-6" />
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                        Our Courses
                    </h1>
                    <p className="max-w-3xl mx-auto text-lg md:text-xl text-white/90">
                        Carefully designed academic programs for school students
                        and competitive exam aspirants.
                    </p>
                </div>
            </section>

            {/* COURSES */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4">

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {courses.map((course) => (
                            <Link
                                key={course.id}
                                href={`/courses/${course.slug}`}
                                className="group"
                            >
                                <div
                                    className={`h-full bg-white dark:bg-gray-800 rounded-2xl border-l-4 ${course.accent} shadow-sm hover:shadow-lg transition p-7`}
                                >
                                    {/* Icon */}
                                    <div
                                        className={`w-14 h-14 rounded-xl ${course.bg} flex items-center justify-center mb-6`}
                                    >
                                        <Icon
                                            icon={course.icon}
                                            className="text-primary text-3xl"
                                        />
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-primary transition">
                                        {course.title}
                                    </h3>

                                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                                        {course.description}
                                    </p>

                                    {/* CTA */}
                                    <div className="flex items-center gap-2 text-primary font-semibold">
                                        <span>View Details</span>
                                        <Icon
                                            icon="mdi:arrow-right"
                                            className="group-hover:translate-x-1 transition-transform"
                                        />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* WHY OUR COURSES */}
            <section className="py-20 bg-gray-50 dark:bg-gray-800">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
                        What Makes Our Courses Effective
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                icon: 'mdi:account-group-outline',
                                title: 'Small Batches',
                                desc: 'Better focus and personal attention.'
                            },
                            {
                                icon: 'mdi:clipboard-check-outline',
                                title: 'Regular Testing',
                                desc: 'Continuous evaluation & improvement.'
                            },
                            {
                                icon: 'mdi:book-open-outline',
                                title: 'Quality Material',
                                desc: 'Structured notes & practice papers.'
                            },
                            {
                                icon: 'mdi:school-outline',
                                title: 'Expert Faculty',
                                desc: 'Experienced & dedicated teachers.'
                            }
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-6 text-center"
                            >
                                <Icon
                                    icon={item.icon}
                                    className="text-primary text-4xl mx-auto mb-4"
                                />
                                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-gray-300">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-primary text-white">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <Icon icon="mdi:account-question-outline" className="text-5xl mx-auto mb-6" />
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Not Sure Which Course to Choose?
                    </h2>
                    <p className="text-lg text-white/90 mb-10">
                        Get expert guidance and choose the right path for your future.
                    </p>

                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 px-7 py-3 bg-white text-primary font-semibold rounded-xl hover:bg-gray-100 transition"
                    >
                        Contact Us
                        <Icon icon="mdi:arrow-right" />
                    </Link>
                </div>
            </section>

        </main>
    )
}

export default Courses
