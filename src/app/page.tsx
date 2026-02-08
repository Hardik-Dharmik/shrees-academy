import React from 'react'
import { Metadata } from 'next'
import Hero from '@/app/components/Home/Hero'
import Companies from '@/app/components/Home/Companies'
import NamesList from '@/app/components/Home/Courses'
import Mentor from '@/app/components/Home/Mentor'
import Testimonial from '@/app/components/Home/Testimonial'
import Newsletter from '@/app/components/Home/Newsletter'
import Toppers from '@/app/components/Home/Toppers'
import ContactForm from './components/Contact/Form'

export const metadata: Metadata = {
  title: "Shree's Academy | Coaching for School & Competitive Exams",
  description:
    "Shree's Academy (Shrees Academy) provides focused coaching for school students and competitive exams with experienced faculty, structured learning, and proven results.",
  alternates: {
    canonical: "/",
  },
}


export default function Home() {
  return (
    <main>
      <Hero />
      <Toppers />
      {/* <Companies />
      <NamesList />
      <Mentor />
      <Testimonial />
      <ContactForm />
      <Newsletter /> */}
    </main>
  )
}
