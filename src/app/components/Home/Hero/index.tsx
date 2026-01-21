'use client'

import Image from 'next/image'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Announcements from '../Announcements'
import Stats from '../Stats'
import Facilities from '../Facilities'
import withBasePath from '@/utils/basePath'

const Banner = () => {
    // Carousel images from public/images/carousal folder
    const carouselImages = [
        {
            src: withBasePath('/images/carousal/c1.jpeg'),
            alt: 'Shree\'s Academy - Leading coaching classes in Nagpur for JEE, NEET, and MHTCET preparation'
        },
        {
            src: withBasePath('/images/carousal/c2.jpeg'),
            alt: 'Expert faculty and comprehensive coaching for competitive exams at Sonkusare Classes, Nagpur'
        },
    ]

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000,
        fade: true,
        cssEase: 'linear',
        arrows: true,
        pauseOnHover: true,
    }

    return (
        <>
            <style dangerouslySetInnerHTML={{
                __html: `
                    .hero-carousel .slick-prev,
                    .hero-carousel .slick-next {
                        z-index: 10;
                        width: 50px;
                        height: 50px;
                    }
                    .hero-carousel .slick-prev {
                        left: 25px;
                    }
                    .hero-carousel .slick-next {
                        right: 25px;
                    }
                    .hero-carousel .slick-prev:before,
                    .hero-carousel .slick-next:before {
                        font-size: 40px;
                        color: white;
                        opacity: 0.8;
                    }
                    .hero-carousel .slick-prev:hover:before,
                    .hero-carousel .slick-next:hover:before {
                        opacity: 1;
                    }
                    .hero-carousel .slick-dots {
                        bottom: 30px;
                    }
                    .hero-carousel .slick-dots li button:before {
                        font-size: 12px;
                        color: white;
                        opacity: 0.5;
                    }
                    .hero-carousel .slick-dots li.slick-active button:before {
                        opacity: 1;
                        color: white;
                    }
                `
            }} />
            <section id='Home' className='relative w-full overflow-hidden pt-20 sm:pt-20'>
                <div className='absolute hidden top-32 left-0 right-0 z-10 text-center px-4'>
                    <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-2xl mb-4'>
                    Shree's Academy
                    </h1>
                    <p className='text-xl md:text-2xl text-white drop-shadow-lg max-w-3xl mx-auto'>
                        Leading Coaching Classes in Nagpur for JEE, NEET & MHTCET
                    </p>
                </div>
                <Slider {...settings} className='hero-carousel w-full'>
                    {carouselImages.map((image, index) => (
                        <div key={index} className='relative w-full'>
                            <div className='relative w-full h-[20vh] md:h-[75vh] min-h-[200px] md:min-h-[400px]'>
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    fill
                                    priority={index === 0}
                                    className='object-contain sm:object-cover'
                                    sizes='100vw'
                                />
                                {/* Dark overlay for better text readability */}
                                {/* <div className='absolute inset-0 bg-black/40' /> */}
                            </div>
                        </div>
                    ))}
                </Slider>
            </section>

            <Announcements />
            <Stats />
            <Facilities />
        </>
    )
}

export default Banner
