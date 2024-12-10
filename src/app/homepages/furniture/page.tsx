import React from 'react'
import TopNavThree from '@/components/Header/TopNav/TopNavThree'
import MenuFurniture from '@/components/Header/Menu/MenuFurniture'
import SliderFurniture from '@/components/Slider/SliderFurniture'
import BannerTop from '@/components/Home3/BannerTop'
import productData from '@/data/Product.json'
import Benefit from '@/components/Home1/Benefit'
import dataTestimonial from '@/data/Testimonial.json'
import Brand from '@/components/Home1/Brand'
import Footer from '@/components/Footer/Footer'
import ModalNewsletter from '@/components/Modal/ModalNewsletter'

export default function HomeFurniture() {
    return (
        <>
            <TopNavThree props="style-three bg-white" />
            <div id="header" className='relative w-full'>
                <MenuFurniture props="bg-white" />
                <BannerTop props="bg-green py-3" textColor='text-black' bgLine='bg-black' />
                <SliderFurniture />
            </div>
            <Benefit props="md:pt-20 pt-10" />
            <Brand />
            <Footer />
            <ModalNewsletter />
        </>
    )
}
