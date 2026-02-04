import { Metadata } from 'next'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { notFound } from 'next/navigation'

interface CourseDetail {
    slug: string
    title: string
    description: string
    icon: string
    color: string
    examPattern: {
        title: string
        details: string[]
    }
    syllabus: {
        subjects: string[]
        topics: string[]
    }
    duration: string
    eligibility: string
}

const courseDetails: Record<string, CourseDetail> = {
    '8th-9th': {
        slug: '8th-9th',
        title: '8th and 9th',
        description: 'Comprehensive curriculum covering all subjects for State Board students in 8th and 9th grade.',
        icon: 'mdi:school',
        color: 'bg-cyan-100 text-cyan-600',
        examPattern: {
            title: 'Exam Pattern',
            details: [
                'Annual examination system',
                'Unit tests and periodic assessments',
                'Practical examinations for Science subjects',
                'Internal assessments and projects',
                'Continuous evaluation throughout the year'
            ]
        },
        syllabus: {
            subjects: ['Mathematics', 'Science', 'English', 'Social Studies', 'Second Language'],
            topics: [
                'Basic Algebra, Geometry, Trigonometry, and Arithmetic',
                'Physics, Chemistry, and Biology fundamentals',
                'Grammar, Literature, and Composition',
                'History, Geography, Civics, and Economics',
                'Language proficiency and communication skills'
            ]
        },
        duration: '2 Years (8th and 9th Grade)',
        eligibility: 'Students currently in or entering 8th grade'
    },
    '10th': {
        slug: '10th',
        title: '10th',
        description: 'Comprehensive curriculum covering all subjects for State Board students in 10th grade.',
        icon: 'mdi:school',
        color: 'bg-blue-100 text-blue-600',
        examPattern: {
            title: 'Exam Pattern',
            details: [
                'Annual examination system (Board exam preparation)',
                'Unit tests and periodic assessments',
                'Practical examinations for Science subjects',
                'Internal assessments and projects',
                'Pre-board examinations for practice',
                'SSC Board examination at the end of the year'
            ]
        },
        syllabus: {
            subjects: ['Mathematics', 'Science', 'English', 'Social Studies', 'Second Language'],
            topics: [
                'Advanced Algebra, Geometry, and Trigonometry',
                'Physics, Chemistry, and Biology with practical applications',
                'Grammar, Literature, and Composition',
                'History, Geography, Civics, and Economics',
                'Language proficiency and communication skills',
                'Board exam preparation and practice'
            ]
        },
        duration: '1 Year (10th Grade)',
        eligibility: 'Students currently in or entering 10th grade'
    },
    '11th-12th-science': {
        slug: '11th-12th-science',
        title: '11th and 12th Science',
        description: 'Advanced preparation for 11th and 12th grade Science stream students with comprehensive curriculum coverage.',
        icon: 'mdi:book-education',
        color: 'bg-green-100 text-green-600',
        examPattern: {
            title: 'Exam Pattern',
            details: [
                'Board examinations at the end of 12th grade',
                'Internal assessments throughout the year',
                'Practical examinations for Science subjects',
                'Project work and assignments',
                'Pre-board examinations for practice'
            ]
        },
        syllabus: {
            subjects: ['Physics', 'Chemistry', 'Mathematics', 'English', 'Optional Subject'],
            topics: [
                'Advanced Physics concepts and applications',
                'Organic, Inorganic, and Physical Chemistry',
                'Calculus, Algebra, and Statistics',
                'Advanced English literature and language',
                'Computer Science, Biology, or other electives'
            ]
        },
        duration: '2 Years (11th and 12th Grade)',
        eligibility: 'Students who have completed 10th grade'
    },
    'jee': {
        slug: 'jee',
        title: 'JEE',
        description: 'Expert coaching for JEE (Main & Advanced) entrance examinations with comprehensive study material and mock tests.',
        icon: 'mdi:calculator',
        color: 'bg-purple-100 text-purple-600',
        examPattern: {
            title: 'JEE Exam Pattern',
            details: [
                'JEE Main: 90 questions (Physics, Chemistry, Mathematics) - 3 hours',
                'JEE Advanced: 2 papers, 3 hours each',
                'Multiple Choice Questions (MCQs) and Numerical Value Questions',
                'Negative marking applicable',
                'Computer-based test (CBT) format'
            ]
        },
        syllabus: {
            subjects: ['Physics', 'Chemistry', 'Mathematics'],
            topics: [
                'Mechanics, Thermodynamics, Optics, Modern Physics',
                'Physical, Organic, and Inorganic Chemistry',
                'Algebra, Calculus, Coordinate Geometry, Trigonometry',
                'Problem-solving techniques and shortcuts',
                'Previous year papers and mock tests'
            ]
        },
        duration: '1-2 Years (Intensive coaching program)',
        eligibility: 'Students appearing for 12th board exams or completed 12th grade with PCM'
    },
    'mhtcet': {
        slug: 'mhtcet',
        title: 'MHTCET',
        description: 'Specialized coaching for MHTCET entrance examination with focused preparation strategies and practice tests.',
        icon: 'mdi:school-outline',
        color: 'bg-indigo-100 text-indigo-600',
        examPattern: {
            title: 'MHTCET Exam Pattern',
            details: [
                '150 questions (Physics, Chemistry, Mathematics) - 3 hours',
                'Multiple Choice Questions (MCQs) only',
                'No negative marking',
                'Computer-based test (CBT) format',
                'Questions based on 11th and 12th standard syllabus'
            ]
        },
        syllabus: {
            subjects: ['Physics', 'Chemistry', 'Mathematics'],
            topics: [
                'Mechanics, Thermodynamics, Optics, Modern Physics',
                'Physical, Organic, and Inorganic Chemistry',
                'Algebra, Calculus, Coordinate Geometry, Trigonometry',
                'State board syllabus coverage',
                'Previous year papers and mock tests'
            ]
        },
        duration: '1-2 Years (Intensive coaching program)',
        eligibility: 'Students appearing for 12th board exams or completed 12th grade with PCM'
    },
    'neet': {
        slug: 'neet',
        title: 'NEET',
        description: 'Specialized coaching for NEET (National Eligibility cum Entrance Test) with focused preparation strategies.',
        icon: 'mdi:medical-bag',
        color: 'bg-red-100 text-red-600',
        examPattern: {
            title: 'Exam Pattern',
            details: [
                '180 Multiple Choice Questions (MCQs)',
                'Physics: 45 questions, Chemistry: 45 questions, Biology: 90 questions',
                'Total marks: 720',
                'Duration: 3 hours 20 minutes',
                'Negative marking: -1 for each incorrect answer'
            ]
        },
        syllabus: {
            subjects: ['Physics', 'Chemistry', 'Biology'],
            topics: [
                'Mechanics, Thermodynamics, Optics, Modern Physics, Electronics',
                'Physical, Organic, and Inorganic Chemistry',
                'Botany and Zoology covering all major topics',
                'Human Physiology, Genetics, Ecology',
                'NCERT-based curriculum with advanced concepts'
            ]
        },
        duration: '1-2 Years (Intensive coaching program)',
        eligibility: 'Students appearing for 12th board exams or completed 12th grade with Biology'
    }
}

interface PageProps {
    params: Promise<{
        slug: string
    }>
}

export async function generateStaticParams() {
    return Object.keys(courseDetails).map((slug) => ({
        slug: slug,
    }))
}

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://shreesacademy.in';
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params
    const course = courseDetails[slug]
    if (!course) {
        return {
            title: 'Course Not Found',
        }
    }
    
    const keywords = [
        `${course.title} coaching Nagpur`,
        `${course.title} preparation`,
        `${course.title} course`,
        'coaching classes Nagpur',
        'competitive exam coaching'
    ];
    
    if (course.title.includes('JEE')) {
        keywords.push('JEE Main', 'JEE Advanced', 'engineering entrance exam');
    } else if (course.title.includes('NEET')) {
        keywords.push('medical entrance exam', 'NEET preparation');
    } else if (course.title.includes('MHTCET')) {
        keywords.push('Maharashtra CET', 'engineering CET');
    }
    
    return {
        title: `${course.title} Course - Expert Coaching in Nagpur | Shree's Academy`,
        description: `${course.description} ${course.duration}. Expert coaching in Nagpur with proven track record and comprehensive study material.`,
        keywords,
        openGraph: {
            type: 'website',
            locale: 'en_IN',
            url: `${baseUrl}/courses/${slug}`,
            siteName: "Shree's Academy",
            title: `${course.title} - Shree's Academy`,
            description: course.description,
            images: [
                {
                    url: `${baseUrl}${basePath}/images/logo/logo.png`,
                    width: 1200,
                    height: 630,
                    alt: `${course.title} - Shree Academy`,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: `${course.title} - Shree's Academy`,
            description: course.description,
            images: [`${baseUrl}${basePath}/images/logo/logo.png`],
        },
        alternates: {
            canonical: `${baseUrl}/courses/${slug}`,
        },
    }
}

const CourseDetailPage = async ({ params }: PageProps) => {
    const { slug } = await params
    const course = courseDetails[slug]

    if (!course) {
        notFound()
    }

    // Structured Data for BreadcrumbList
    const breadcrumbStructuredData = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": `${baseUrl}${basePath}`
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Courses",
                "item": `${baseUrl}${basePath}/courses`
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": course.title,
                "item": `${baseUrl}${basePath}/courses/${slug}`
            }
        ]
    };

    // Structured Data for Course
    const courseStructuredData = {
        "@context": "https://schema.org",
        "@type": "Course",
        "name": course.title,
        "description": course.description,
        "provider": {
            "@type": "EducationalOrganization",
            "name": "Shree's Academy",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "Opposite Nikalas Mandir, Itwari",
                "addressLocality": "Nagpur",
                "addressRegion": "Maharashtra",
                "addressCountry": "IN"
            },
            "telephone": "+919823225787",
            "email": "shreeacademy@gmail.com"
        },
        "courseCode": course.slug,
        "educationalLevel": course.title.includes('8th') || course.title.includes('9th') || course.title.includes('10th') ? "Secondary" : course.title.includes('11th') || course.title.includes('12th') ? "Higher Secondary" : "Undergraduate",
        "timeRequired": course.duration,
        "teaches": course.syllabus.topics.join(", "),
        "inLanguage": "en-IN",
        "isAccessibleForFree": false
    };

    return (
        <main className="pt-20">
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 max-w-6xl">
                    {/* Course Header */}
                    <div className="text-center mb-12" data-aos="fade-up">
                        <div className={`w-20 h-20 ${course.color} rounded-lg flex items-center justify-center mx-auto mb-6`}>
                            <Icon icon={course.icon} width={40} height={40} />
                        </div>
                        <h1 className="text-4xl font-bold text-black mb-4">{course.title}</h1>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">{course.description}</p>
                    </div>

                    {/* Course Information Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                        <div className="bg-white border border-gray-200 rounded-lg p-6" data-aos="fade-right">
                            <div className="flex items-center gap-3 mb-4">
                                <Icon icon="mdi:clock-outline" width={24} height={24} className="text-primary" />
                                <h3 className="text-xl font-semibold text-black">Duration</h3>
                            </div>
                            <p className="text-gray-600">{course.duration}</p>
                        </div>
                        <div className="bg-white border border-gray-200 rounded-lg p-6" data-aos="fade-left">
                            <div className="flex items-center gap-3 mb-4">
                                <Icon icon="mdi:account-check" width={24} height={24} className="text-primary" />
                                <h3 className="text-xl font-semibold text-black">Eligibility</h3>
                            </div>
                            <p className="text-gray-600">{course.eligibility}</p>
                        </div>
                    </div>

                    {/* Exam Pattern */}
                    <div className="bg-gradient-to-br from-primary/5 via-cream to-primary/5 rounded-lg p-8 mb-8" data-aos="fade-up">
                        <h2 className="text-3xl font-bold text-black mb-6 flex items-center gap-3">
                            <Icon icon="mdi:file-document" width={32} height={32} className="text-primary" />
                            {course.examPattern.title}
                        </h2>
                        <ul className="space-y-3">
                            {course.examPattern.details.map((detail, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <Icon icon="mdi:check-circle" width={24} height={24} className="text-primary flex-shrink-0 mt-1" />
                                    <span className="text-gray-700">{detail}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Syllabus */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                        <div className="bg-white border border-gray-200 rounded-lg p-8" data-aos="fade-right">
                            <h2 className="text-3xl font-bold text-black mb-6 flex items-center gap-3">
                                <Icon icon="mdi:book-open-variant" width={32} height={32} className="text-primary" />
                                Subjects
                            </h2>
                            <ul className="space-y-3">
                                {course.syllabus.subjects.map((subject, index) => (
                                    <li key={index} className="flex items-center gap-3">
                                        <Icon icon="mdi:book" width={20} height={20} className="text-primary" />
                                        <span className="text-gray-700 font-medium">{subject}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-white border border-gray-200 rounded-lg p-8" data-aos="fade-left">
                            <h2 className="text-3xl font-bold text-black mb-6 flex items-center gap-3">
                                <Icon icon="mdi:format-list-bulleted" width={32} height={32} className="text-primary" />
                                Key Topics
                            </h2>
                            <ul className="space-y-3">
                                {course.syllabus.topics.map((topic, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <Icon icon="mdi:circle-small" width={20} height={20} className="text-primary flex-shrink-0 mt-1" />
                                        <span className="text-gray-700">{topic}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Related Courses Section */}
                    <div className="mt-12 pt-8 border-t border-gray-200" data-aos="fade-up">
                        <h2 className="text-2xl font-bold text-black mb-6 text-center">Explore Other Courses</h2>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link href="/courses" className="text-primary hover:underline font-semibold">All Courses</Link>
                            <span className="text-gray-400">|</span>
                            <Link href="/courses/jee" className="text-primary hover:underline">JEE Coaching</Link>
                            <span className="text-gray-400">|</span>
                            <Link href="/courses/neet" className="text-primary hover:underline">NEET Coaching</Link>
                            <span className="text-gray-400">|</span>
                            <Link href="/courses/mhtcet" className="text-primary hover:underline">MHTCET Coaching</Link>
                            <span className="text-gray-400">|</span>
                            <Link href="/courses/8th-9th" className="text-primary hover:underline">8th-9th Grade</Link>
                            <span className="text-gray-400">|</span>
                            <Link href="/courses/10th" className="text-primary hover:underline">10th Grade</Link>
                            <span className="text-gray-400">|</span>
                            <Link href="/courses/11th-12th-science" className="text-primary hover:underline">11th-12th Science</Link>
                        </div>
                    </div>

                    {/* CTA Button */}
                    <div className="text-center mt-8" data-aos="fade-up">
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-300"
                        >
                            <span>Enroll Now</span>
                            <Icon icon="mdi:arrow-right" width={24} height={24} />
                        </Link>
                        <p className="mt-4 text-gray-600">
                            Learn more <Link href="/about" className="text-primary hover:underline">about us</Link> or 
                            <Link href="/gallery" className="text-primary hover:underline"> view our gallery</Link> to see student achievements.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default CourseDetailPage

