'use client'

import Link from 'next/link'
import { Icon } from '@iconify/react'

const AboutUs = () => {
    return (
        <main className="pt-20 bg-white dark:bg-gray-900">

            {/* HERO */}
            <section className="py-20 bg-gradient-to-r from-primary to-primary/90 text-white">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <Icon icon="mdi:school-outline" className="text-5xl mx-auto mb-6" />
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                        About Shree's Academy
                    </h1>
                    <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/90">
                        A trusted coaching institute shaping confident, capable
                        and successful students.
                    </p>
                </div>
            </section>

            {/* WHO WE ARE */}
            <section className="py-20 bg-gray-50 dark:bg-gray-800">
                <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
                    
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                            Who We Are
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                        Shree's Academy is a dedicated educational institute
                            focused on academic excellence for school students and
                            competitive exam aspirants.
                        </p>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                            With experienced faculty, structured teaching methods,
                            and close student monitoring, we help learners build
                            strong fundamentals and confidence.
                        </p>

                        <Link
                            href="/courses"
                            className="inline-flex items-center gap-2 text-primary font-semibold"
                        >
                            Explore Our Courses
                            <Icon icon="mdi:arrow-right" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                        {[
                            { icon: 'mdi:account-group', label: 'Small Batches' },
                            { icon: 'mdi:book-open-variant', label: 'Strong Academics' },
                            { icon: 'mdi:chart-line', label: 'Proven Results' },
                            { icon: 'mdi:account-heart', label: 'Student Care' }
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow text-center"
                            >
                                <Icon icon={item.icon} className="text-primary text-3xl mb-3" />
                                <p className="font-semibold text-gray-800 dark:text-white">
                                    {item.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* WHY TRUST US */}
            <section className="py-20 bg-white dark:bg-gray-900">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
                        Why Parents Trust Us
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: 'mdi:school',
                                title: 'Experienced Faculty',
                                desc: 'Qualified teachers with years of teaching expertise.'
                            },
                            {
                                icon: 'mdi:clipboard-check-outline',
                                title: 'Regular Assessments',
                                desc: 'Continuous evaluation to track student progress.'
                            },
                            {
                                icon: 'mdi:account-check',
                                title: 'Personal Attention',
                                desc: 'Focused guidance for every student.'
                            }
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="p-8 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-primary transition"
                            >
                                <Icon icon={item.icon} className="text-primary text-4xl mb-4" />
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* VISION & VALUES */}
            <section className="py-20 bg-gray-50 dark:bg-gray-800">
                <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12">
                    
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                            Our Vision
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            To build confident learners who are academically strong,
                            morally grounded, and prepared for future challenges.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                            Our Values
                        </h2>
                        <ul className="space-y-4">
                            {[
                                'Academic Excellence',
                                'Integrity & Transparency',
                                'Student-First Approach',
                                'Continuous Improvement'
                            ].map((value, i) => (
                                <li
                                    key={i}
                                    className="flex items-center gap-3 text-gray-700 dark:text-gray-300"
                                >
                                    <Icon icon="mdi:check-circle" className="text-primary text-xl" />
                                    {value}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* MISSION */}
            <section className="py-24 bg-primary text-white">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <Icon icon="mdi:target" className="text-5xl mx-auto mb-6" />
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                        Our Mission
                    </h2>
                    <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                        To provide quality, accessible education that nurtures
                        curiosity, builds discipline, and empowers students to
                        achieve academic and personal success.
                    </p>

                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 mt-10 px-6 py-3 bg-white text-primary font-semibold rounded-xl hover:bg-gray-100 transition"
                    >
                        Get in Touch
                        <Icon icon="mdi:arrow-right" />
                    </Link>
                </div>
            </section>
        </main>
    )
}

export default AboutUs
