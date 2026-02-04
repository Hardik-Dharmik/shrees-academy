import { Metadata } from 'next'
import GalleryClient from './GalleryClient'

export const metadata: Metadata = {
    title: "Gallery | Shree's Academy",
    description:
        "Explore photos from Shree's Academy events, workshops, celebrations, and student activities.",
    alternates: {
        canonical: "/gallery",
    },
}

const Gallery = () => {
    return <GalleryClient />
}

export default Gallery