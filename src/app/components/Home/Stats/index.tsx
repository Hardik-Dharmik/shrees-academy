'use client'

import { useEffect, useState, useRef } from 'react'
import { Icon } from '@iconify/react'

interface StatItem {
    id: number
    label: string
    value: number
    suffix?: string
    icon: string
}

const stats: StatItem[] = [
    {
        id: 1,
        label: 'Centres',
        value: 6,
        icon: 'mdi:office-building'
    },
    {
        id: 2,
        label: 'Teachers',
        value: 30,
        suffix: '+',
        icon: 'mdi:account-group'
    },
    {
        id: 3,
        label: 'Students',
        value: 20000,
        suffix: '+',
        icon: 'mdi:school'
    },
    {
        id: 4,
        label: 'Years of Experience',
        value: 15,
        suffix: '+',
        icon: 'mdi:calendar-clock'
    }
]

const Stats = () => {
    const [isVisible, setIsVisible] = useState(false)
    const [counts, setCounts] = useState({
        centres: 0,
        teachers: 0,
        students: 0,
        experience: 0
    })
    const sectionRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !isVisible) {
                        setIsVisible(true)
                    }
                })
            },
            { threshold: 0.3 }
        )

        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current)
            }
        }
    }, [isVisible])

    useEffect(() => {
        if (!isVisible) return

        const duration = 2000 // 2 seconds
        const steps = 60
        const interval = duration / steps
        const timers: NodeJS.Timeout[] = []

        stats.forEach((stat) => {
            let currentStep = 0
            const increment = stat.value / steps

            const timer = setInterval(() => {
                currentStep++
                const currentValue = Math.min(
                    Math.floor(increment * currentStep),
                    stat.value
                )

                const key = stat.label.toLowerCase().replace(/\s+/g, '')
                let stateKey: keyof typeof counts

                switch (key) {
                    case 'centres':
                        stateKey = 'centres'
                        break
                    case 'teachers':
                        stateKey = 'teachers'
                        break
                    case 'students':
                        stateKey = 'students'
                        break
                    case 'yearsofexperience':
                        stateKey = 'experience'
                        break
                    default:
                        return
                }

                setCounts((prev) => ({
                    ...prev,
                    [stateKey]: currentValue
                }))

                if (currentStep >= steps) {
                    clearInterval(timer)
                    // Ensure final value is set
                    setCounts((prev) => ({
                        ...prev,
                        [stateKey]: stat.value
                    }))
                }
            }, interval)

            timers.push(timer)
        })

        return () => {
            timers.forEach((timer) => clearInterval(timer))
        }
    }, [isVisible])

    const getCount = (label: string) => {
        const key = label.toLowerCase().replace(/\s+/g, '')
        switch (key) {
            case 'centres':
                return counts.centres
            case 'teachers':
                return counts.teachers
            case 'students':
                return counts.students
            case 'yearsofexperience':
                return counts.experience
            default:
                return 0
        }
    }

    return (
        <section
            ref={sectionRef}
            className='bg-gradient-to-br from-primary via-primary/90 to-primary/80 py-16'
            data-aos='fade-up'
        >
            <div className='container mx-auto px-4'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                    {stats.map((stat, index) => (
                        <div
                            key={stat.id}
                            className='text-center'
                            data-aos='zoom-in'
                            data-aos-delay={index * 100}
                        >
                            <div className='bg-white/10 backdrop-blur-sm rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4'>
                                <Icon
                                    icon={stat.icon}
                                    width={40}
                                    height={40}
                                    className='text-white'
                                />
                            </div>
                            <div className='text-white'>
                                <div className='text-4xl md:text-5xl font-bold mb-2'>
                                    {getCount(stat.label).toLocaleString()}
                                    {stat.suffix && (
                                        <span className='text-3xl md:text-4xl'>
                                            {stat.suffix}
                                        </span>
                                    )}
                                </div>
                                <div className='text-lg md:text-xl font-medium'>
                                    {stat.label}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Stats

