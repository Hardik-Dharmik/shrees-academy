import { Metadata } from 'next'
import ToppersClient from './ToppersClient'

export const metadata: Metadata = {
    title: "Our Toppers | Shree's Academy",
    description:
        "Celebrating Shree's Academy toppers and academic achievers across boards and competitive exams.",
    alternates: {
        canonical: "/toppers",
    },
}

const OurToppers = () => {
    return <ToppersClient />
}

export default OurToppers