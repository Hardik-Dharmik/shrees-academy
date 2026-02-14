import Link from 'next/link'
import { Icon } from '@iconify/react'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: "About Shree's Academy",
    description:
        "Learn about Shree's Academy, our mission, values, and approach to helping students excel in board and competitive exams.",
    alternates: {
        canonical: "/about",
    },
}

const AboutUs = () => {
    return (
        <main className="pt-24 bg-white dark:bg-gray-950">
            {/* HERO */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,0,0,0.08),transparent_60%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_60%)]" />
                <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(0,0,0,0.12),transparent_65%)] dark:bg-[radial-gradient(circle,rgba(255,255,255,0.12),transparent_65%)]" />
                <div className="relative max-w-7xl mx-auto px-4 py-20 md:py-24 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/10 bg-white/80 dark:bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">
                            About Shree's Academy
                        </div>
                        <h1 className="mt-5 text-4xl md:text-6xl font-semibold text-gray-900 dark:text-white">
                            Coaching built on care, clarity, and results.
                        </h1>
                        <p className="mt-5 text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl">
                            We help students build strong fundamentals, confident habits, and exam readiness through focused teaching and continuous mentorship.
                        </p>
                        <div className="mt-8 flex flex-wrap items-center gap-4">
                            <Link
                                href="/courses"
                                className="px-6 py-3 rounded-full bg-black text-white font-semibold hover:bg-gray-900 transition"
                            >
                                Explore Courses
                            </Link>
                            <Link
                                href="/contact"
                                className="px-6 py-3 rounded-full border border-black/10 dark:border-white/10 text-gray-900 dark:text-white font-semibold hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition"
                            >
                                Talk to Us
                            </Link>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="absolute -inset-6 rounded-[32px] bg-[linear-gradient(135deg,rgba(0,0,0,0.08),transparent_60%)] dark:bg-[linear-gradient(135deg,rgba(255,255,255,0.12),transparent_60%)]" />
                        <div className="relative rounded-[28px] border border-black/10 dark:border-white/10 bg-white/90 dark:bg-white/5 p-8 shadow-[0_25px_60px_-40px_rgba(0,0,0,0.7)]">
                            <div className="flex items-center gap-3">
                                <div className="h-12 w-12 rounded-2xl bg-black/5 dark:bg-white/10 flex items-center justify-center">
                                    <Icon icon="mdi:school-outline" className="text-2xl text-gray-800 dark:text-gray-200" />
                                </div>
                                <div>
                                    <p className="text-sm uppercase tracking-[0.25em] text-gray-400">Since 2005</p>
                                    <p className="text-lg font-semibold text-gray-900 dark:text-white">Trusted by families across the city</p>
                                </div>
                            </div>
                            <div className="mt-8 grid grid-cols-2 gap-4">
                                {[
                                    { value: '98%', label: 'Parent Satisfaction' },
                                    { value: '10+ yrs', label: 'Teaching Experience' },
                                    { value: '4:1', label: 'Student Mentor Ratio' },
                                    { value: '500+', label: 'Success Stories' }
                                ].map((stat, i) => (
                                    <div key={i} className="rounded-2xl border border-black/5 dark:border-white/10 bg-white/80 dark:bg-white/5 p-4">
                                        <p className="text-2xl font-semibold text-gray-900 dark:text-white">{stat.value}</p>
                                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{stat.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* WHO WE ARE */}
            <section className="py-20 bg-gray-50 dark:bg-gray-900">
                <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white mb-4">
                            Who We Are
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                            Shree's Academy is a dedicated educational institute focused on academic excellence for school students and competitive exam aspirants.
                        </p>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                            With experienced faculty, structured teaching methods, and close student monitoring, we help learners build strong fundamentals and confidence.
                        </p>
                        <Link
                            href="/courses"
                            className="inline-flex items-center gap-2 text-gray-900 dark:text-white font-semibold"
                        >
                            Explore Our Courses
                            <Icon icon="mdi:arrow-right" />
                        </Link>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                        {[
                            { icon: 'mdi:account-group', label: 'Small Batches', desc: 'Focused attention and measurable progress.' },
                            { icon: 'mdi:book-open-variant', label: 'Strong Academics', desc: 'Concept clarity with structured curriculum.' },
                            { icon: 'mdi:chart-line', label: 'Proven Results', desc: 'Consistent performance in board and entrance exams.' },
                            { icon: 'mdi:account-heart', label: 'Student Care', desc: 'Mentorship that builds confidence.' }
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="rounded-2xl border border-black/5 dark:border-white/10 bg-white/90 dark:bg-white/5 p-6 shadow-[0_15px_40px_-30px_rgba(0,0,0,0.6)]"
                            >
                                <div className="h-12 w-12 rounded-2xl bg-black/5 dark:bg-white/10 flex items-center justify-center mb-4">
                                    <Icon icon={item.icon} className="text-2xl text-gray-800 dark:text-gray-200" />
                                </div>
                                <p className="font-semibold text-gray-900 dark:text-white">{item.label}</p>
                                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* WHY TRUST US */}
            <section className="py-20 bg-white dark:bg-gray-950">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
                        <div>
                            <div className="text-xs uppercase tracking-[0.2em] text-gray-400">Why parents trust us</div>
                            <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white">
                                A learning environment that feels personal.
                            </h2>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 max-w-xl">
                            We combine academic rigor with real care so students stay motivated, accountable, and ready for every exam milestone.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            {
                                icon: 'mdi:school',
                                title: 'Experienced Faculty',
                                desc: 'Qualified teachers with years of coaching expertise.'
                            },
                            {
                                icon: 'mdi:clipboard-check-outline',
                                title: 'Regular Assessments',
                                desc: 'Continuous evaluation with actionable feedback.'
                            },
                            {
                                icon: 'mdi:account-check',
                                title: 'Personal Attention',
                                desc: 'Focused guidance for every student.'
                            }
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="group rounded-3xl border border-black/5 dark:border-white/10 bg-white/90 dark:bg-white/5 p-7 shadow-[0_20px_45px_-35px_rgba(0,0,0,0.55)] transition hover:-translate-y-1"
                            >
                                <div className="h-12 w-12 rounded-2xl bg-black/5 dark:bg-white/10 flex items-center justify-center mb-5">
                                    <Icon icon={item.icon} className="text-2xl text-gray-800 dark:text-gray-200" />
                                </div>
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
            <section className="py-20 bg-gray-50 dark:bg-gray-900">
                <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-[1fr_1.1fr] gap-12">
                    <div className="rounded-3xl border border-black/5 dark:border-white/10 bg-white/90 dark:bg-white/5 p-8">
                        <div className="h-12 w-12 rounded-2xl bg-black/5 dark:bg-white/10 flex items-center justify-center mb-5">
                            <Icon icon="mdi:eye-outline" className="text-2xl text-gray-800 dark:text-gray-200" />
                        </div>
                        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">
                            Our Vision
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            To build confident learners who are academically strong, morally grounded, and prepared for future challenges.
                        </p>
                    </div>

                    <div className="rounded-3xl border border-black/5 dark:border-white/10 bg-white/90 dark:bg-white/5 p-8">
                        <div className="h-12 w-12 rounded-2xl bg-black/5 dark:bg-white/10 flex items-center justify-center mb-5">
                            <Icon icon="mdi:heart-outline" className="text-2xl text-gray-800 dark:text-gray-200" />
                        </div>
                        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">
                            Our Values
                        </h2>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {[
                                'Academic Excellence',
                                'Integrity & Transparency',
                                'Student-First Approach',
                                'Continuous Improvement'
                            ].map((value, i) => (
                                <div
                                    key={i}
                                    className="flex items-center gap-3 rounded-2xl border border-black/5 dark:border-white/10 bg-white/80 dark:bg-white/5 px-4 py-3 text-gray-700 dark:text-gray-300"
                                >
                                    <span className="h-2 w-2 rounded-full bg-primary" />
                                    {value}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* MISSION */}
            <section className="py-24 bg-black text-white">
                <div className="max-w-5xl mx-auto px-4 text-center">
                    <div className="mx-auto h-16 w-16 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
                        <Icon icon="mdi:target" className="text-3xl text-white" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-white">
                        Our Mission
                    </h2>
                    <p className="text-lg md:text-xl text-white/80 leading-relaxed">
                        To provide quality, accessible education that nurtures curiosity, builds discipline, and empowers students to achieve academic and personal success.
                    </p>

                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 mt-10 px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-100 transition"
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