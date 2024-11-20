'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css/bundle';
import { useRouter } from 'next/navigation';
import ride1 from "../../../public/images/slider/ride1.jpeg"
import ride2 from "../../../public/images/slider/ride2.jpeg"
import ride3 from "../../../public/images/slider/ride3.jpeg"
import ride4 from "../../../public/images/slider/ride4.jpeg"


// import Fade from 'react-reveal'

const Collection = () => {
    const router = useRouter()

    const handleTypeClick = (type: string) => {
        router.push(`/shop/breadcrumb1?type=${type}`);
    };

    return (
        <>
            <div className="collection-block md:pt-20 pt-10">
                <div className="container">
                    <div className="heading3 text-center">Travel With Happness <strong>CHAUFFEUR</strong></div>
                </div>
            </div>
        </>
    )
}

export default Collection