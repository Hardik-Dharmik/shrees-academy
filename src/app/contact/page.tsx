import Link from 'next/link'
import { Icon } from '@iconify/react'
import ContactForm from '@/app/components/Contact/Form'

const ContactUs = () => {
    return (
        <main className="pt-20">
            {/* HERO */}
            <section className="relative py-24 bg-gradient-to-br from-primary via-primary/90 to-primary overflow-hidden">
                <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/20 rounded-full blur-3xl"></div>
                <div className="absolute top-32 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>

                <div className="container mx-auto px-4 text-center relative z-10">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Contact <span className="text-yellow-300">Us</span>
                    </h1>
                    <p className="text-white/90 max-w-2xl mx-auto text-lg">
                        Reach out to us for admissions, courses, or any academic guidance.
                    </p>
                </div>
            </section>

            {/* QUICK CONTACT CARDS */}
            <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                        {[
                            { icon: 'mdi:map-marker', title: 'Centers', desc: '2 Locations in Nagpur' },
                            { icon: 'mdi:phone', title: 'Call', desc: 'Multiple contact numbers' },
                            { icon: 'mdi:whatsapp', title: 'WhatsApp', desc: '+91 8446425052' },
                            { icon: 'mdi:email', title: 'Email', desc: 'shreeacademy@gmail.com' }
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl border border-gray-100 p-6 transition-all hover:-translate-y-2"
                            >
                                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                                    <Icon icon={item.icon} width={28} className="text-primary" />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                                <p className="text-sm text-gray-600">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* INFO + FORM */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
                        {/* INFO */}
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                Get in <span className="text-primary">Touch</span>
                            </h2>

                            {/* LOCATIONS */}
                            <div className="mb-8">
                                <h3 className="font-semibold text-gray-800 flex items-center gap-2 mb-3">
                                    <Icon icon="mdi:map-marker-radius" className="text-primary" />
                                    Our Locations
                                </h3>
                                <p className="text-gray-600 text-sm mb-2">
                                    1. Opposite Nikalas Mandir, Itwari, Nagpur, Maharashtra.
                                </p>
                                <p className="text-gray-600 text-sm mb-2">
                                    2. Near Railway Crossing, Namdev Nagar, Binaki, Nagpur, Maharashtra.
                                </p>
                            </div>

                            {/* PHONES */}
                            <div className="mb-8">
                                <h3 className="font-semibold text-gray-800 flex items-center gap-2 mb-3">
                                    <Icon icon="mdi:phone" className="text-primary" />
                                    Phone Numbers
                                </h3>
                                {[
                                    '+91 9823225787',
                                    '+91 8446425052'
                                ].map((num, i) => (
                                    <a
                                        key={i}
                                        href={`tel:${num.replace(/\s/g, '')}`}
                                        className="block text-sm text-gray-600 hover:text-primary transition mb-1"
                                    >
                                        {num}
                                    </a>
                                ))}
                            </div>

                            <p className="text-sm text-gray-600">
                                Learn more{' '}
                                <Link href="/about" className="text-primary font-semibold hover:underline">
                                    about us
                                </Link>{' '}
                                or explore{' '}
                                <Link href="/courses" className="text-primary font-semibold hover:underline">
                                    our courses
                                </Link>{' '}
                                like JEE, NEET & MHTCET.
                            </p>
                        </div>

                        {/* FORM */}
                        <div className="bg-primary/5 rounded-3xl shadow-xl p-8 border border-primary/10">
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                Send a <span className="text-primary">Message</span>
                            </h3>
                            <p className="text-sm text-gray-600 mb-6">
                                Fill out the form and we’ll respond shortly.
                            </p>
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>

            {/* MAP */}
            <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900">
                            Find Us on <span className="text-primary">Map</span>
                        </h2>
                    </div>

                    <div className="max-w-6xl mx-auto rounded-3xl overflow-hidden shadow-2xl border">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3221.8272193277053!2d79.1488565744999!3d21.158478983312072"
                            width="100%"
                            height="550"
                            loading="lazy"
                            className="w-full"
                        ></iframe>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default ContactUs
