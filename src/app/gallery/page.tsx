'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { useState } from 'react'

interface Event {
    id: number
    title: string
    date: string
    description: string
    images: {
        src: string
        alt: string
    }[]
}

// Dummy event data - replace with actual event images
const events: Event[] = [
    {
        id: 1,
        title: 'Annual Science Exhibition 2024',
        date: 'January 15, 2024',
        description: 'Students showcased their innovative science projects and experiments.',
        images: [
            {
                src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop',
                alt: 'Science Exhibition 1'
            },
            {
                src: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop',
                alt: 'Science Exhibition 2'
            },
            {
                src: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=600&fit=crop',
                alt: 'Science Exhibition 3'
            },
            {
                src: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=600&fit=crop',
                alt: 'Science Exhibition 4'
            },
            {
                src: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop',
                alt: 'Science Exhibition 5'
            },
            {
                src: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop',
                alt: 'Science Exhibition 6'
            }
        ]
    },
    {
        id: 2,
        title: 'Math Olympiad Competition',
        date: 'February 10, 2024',
        description: 'Students participated in challenging math problems and competitions.',
        images: [
            {
                src: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&h=600&fit=crop',
                alt: 'Math Olympiad 1'
            },
            {
                src: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=600&fit=crop',
                alt: 'Math Olympiad 2'
            },
            {
                src: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&h=600&fit=crop',
                alt: 'Math Olympiad 3'
            },
            {
                src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop',
                alt: 'Math Olympiad 4'
            }
        ]
    },
    {
        id: 3,
        title: 'Annual Day Celebration',
        date: 'March 20, 2024',
        description: 'Celebrating achievements and showcasing talent through various performances.',
        images: [
            {
                src: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop',
                alt: 'Annual Day 1'
            },
            {
                src: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop',
                alt: 'Annual Day 2'
            },
            {
                src: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop',
                alt: 'Annual Day 3'
            },
            {
                src: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop',
                alt: 'Annual Day 4'
            },
            {
                src: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=600&fit=crop',
                alt: 'Annual Day 5'
            },
            {
                src: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=600&fit=crop',
                alt: 'Annual Day 6'
            },
            {
                src: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&h=600&fit=crop',
                alt: 'Annual Day 7'
            },
            {
                src: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=600&fit=crop',
                alt: 'Annual Day 8'
            }
        ]
    },
    {
        id: 4,
        title: 'Workshop on Competitive Exam Preparation',
        date: 'April 5, 2024',
        description: 'Expert sessions on JEE, NEET, and MHTCET preparation strategies.',
        images: [
            {
                src: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&h=600&fit=crop',
                alt: 'Workshop 1'
            },
            {
                src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop',
                alt: 'Workshop 2'
            },
            {
                src: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop',
                alt: 'Workshop 3'
            },
            {
                src: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=600&fit=crop',
                alt: 'Workshop 4'
            },
            {
                src: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=600&fit=crop',
                alt: 'Workshop 5'
            }
        ]
    }
]

const Gallery = () => {
    const [selectedEventId, setSelectedEventId] = useState<number | null>(null)
    const [selectedImage, setSelectedImage] = useState<{
        src: string
        alt: string
        eventTitle: string
    } | null>(null)

    const displayImages =
        selectedEventId === null
            ? events.flatMap(e =>
                  e.images.map(img => ({
                      ...img,
                      eventTitle: e.title,
                      eventId: e.id
                  }))
              )
            : events
                  .find(e => e.id === selectedEventId)
                  ?.images.map(img => ({
                      ...img,
                      eventTitle:
                          events.find(e => e.id === selectedEventId)?.title ||
                          '',
                      eventId: selectedEventId
                  })) || []

    const selectedEvent =
        selectedEventId !== null
            ? events.find(e => e.id === selectedEventId)
            : null

    return (
        <main className="pt-20 bg-gray-50 dark:bg-gray-900">

            {/* HERO */}
            <section className="py-24 bg-white dark:bg-gray-800 border-b">
                <div className="max-w-5xl mx-auto px-4 text-center">
                    <Icon
                        icon="mdi:image-multiple-outline"
                        className="text-primary text-5xl mx-auto mb-4"
                    />
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        Gallery
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        A glimpse into our academic events, celebrations, and
                        memorable moments.
                    </p>

                    <div className="flex justify-center gap-4 mt-6 flex-wrap">
                        <Link
                            href="/about"
                            className="text-primary font-semibold hover:underline"
                        >
                            About Us
                        </Link>
                        <span className="text-gray-400">•</span>
                        <Link
                            href="/courses"
                            className="text-primary font-semibold hover:underline"
                        >
                            Our Courses
                        </Link>
                    </div>
                </div>
            </section>

            {/* EVENT FILTER */}
            <section className="py-10 bg-gray-100 dark:bg-gray-800 sticky top-20 z-30 backdrop-blur">
                <div className="max-w-7xl mx-auto px-4 flex flex-wrap gap-3 justify-center">
                    <button
                        onClick={() => setSelectedEventId(null)}
                        className={`px-5 py-2 rounded-full text-sm font-semibold transition
                            ${
                                selectedEventId === null
                                    ? 'bg-primary text-white'
                                    : 'bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-primary/10'
                            }`}
                    >
                        All Events
                    </button>

                    {events.map(event => (
                        <button
                            key={event.id}
                            onClick={() => setSelectedEventId(event.id)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition flex items-center gap-2
                                ${
                                    selectedEventId === event.id
                                        ? 'bg-primary text-white'
                                        : 'bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-primary/10'
                                }`}
                        >
                            <span className="line-clamp-1 max-w-[140px]">
                                {event.title}
                            </span>
                            <span className="text-xs bg-black/10 dark:bg-white/10 px-2 py-0.5 rounded-full">
                                {event.images.length}
                            </span>
                        </button>
                    ))}
                </div>
            </section>

            {/* EVENT INFO */}
            {selectedEvent && (
                <section className="py-12 bg-white dark:bg-gray-800 border-b">
                    <div className="max-w-4xl mx-auto px-4">
                        <div className="rounded-2xl border p-6 bg-gray-50 dark:bg-gray-900">
                            <div className="flex flex-col md:flex-row gap-6">
                                <div className="w-16 h-16 rounded-xl bg-primary text-white flex items-center justify-center">
                                    <Icon
                                        icon="mdi:calendar-star"
                                        width={32}
                                        height={32}
                                    />
                                </div>
                                <div className="flex-1">
                                    <p className="text-sm text-primary font-semibold mb-1">
                                        {selectedEvent.date}
                                    </p>
                                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                                        {selectedEvent.title}
                                    </h2>
                                    <p className="text-gray-600 dark:text-gray-300">
                                        {selectedEvent.description}
                                    </p>
                                </div>
                                <div className="text-center">
                                    <p className="text-2xl font-bold text-primary">
                                        {selectedEvent.images.length}
                                    </p>
                                    <p className="text-sm text-gray-500">
                                        Photos
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* GALLERY */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-5 space-y-5">
                        {displayImages.map((img, idx) => (
                            <div
                                key={idx}
                                onClick={() =>
                                    setSelectedImage({
                                        src: img.src,
                                        alt: img.alt,
                                        eventTitle: img.eventTitle
                                    })
                                }
                                className="relative rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition cursor-pointer bg-gray-200 dark:bg-gray-800 break-inside-avoid"
                            >
                                <Image
                                    src={img.src}
                                    alt={img.alt}
                                    width={800}
                                    height={600}
                                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                                />

                                <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition flex items-end">
                                    <div className="p-4">
                                        <p className="text-white text-sm font-semibold">
                                            {img.alt}
                                        </p>
                                        {selectedEventId === null && (
                                            <p className="text-white/70 text-xs">
                                                {img.eventTitle}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* COUNT */}
                    <div className="mt-12 text-center">
                        <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/10 text-primary font-semibold">
                            <Icon icon="mdi:image-multiple" />
                            {displayImages.length} Photos
                        </span>
                    </div>
                </div>
            </section>

            {/* LIGHTBOX */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
                    onClick={() => setSelectedImage(null)}
                >
                    <div
                        className="relative max-w-5xl w-full"
                        onClick={e => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setSelectedImage(null)}
                            className="absolute -top-10 right-0 text-white"
                        >
                            <Icon icon="mdi:close" width={28} />
                        </button>

                        <div className="rounded-xl overflow-hidden">
                            <Image
                                src={selectedImage.src}
                                alt={selectedImage.alt}
                                width={1200}
                                height={800}
                                className="w-full h-auto object-contain"
                            />
                        </div>

                        <div className="mt-4 text-center">
                            <p className="text-white font-semibold">
                                {selectedImage.alt}
                            </p>
                            {selectedEventId === null && (
                                <p className="text-white/70 text-sm">
                                    {selectedImage.eventTitle}
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </main>
    )
}

export default Gallery
