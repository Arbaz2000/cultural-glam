'use client'

import React, { Component } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css/bundle';
import 'swiper/css/effect-fade';
import LPP from "../../../public/images/slider/landingPagePhoto.jpeg"


const SliderOne = () => {
    return (
        <>
            <div className="slider-block style-one bg-linear xl:h-[860px] lg:h-[800px] md:h-[580px] sm:h-[500px] h-[350px] max-[420px]:h-[320px] w-full">
                <div className="slider-main h-full w-full">
                    <Swiper
                        spaceBetween={0}
                        slidesPerView={1}
                        loop={true}
                        pagination={{ clickable: true }}
                        modules={[Pagination, Autoplay]}
                        className='h-full relative'
                        autoplay={{
                            delay: 4000,
                        }}
                    >
                        <SwiperSlide>
                            <div className="slider-item h-screen w-full relative mt-24">
                                <div className="container w-full h-full flex items-center relative">
                                    <div className="text-content basis-1/2 relative z-10 px-6">
                                        <div className="text-sub-display text-white">We are here</div>
                                        <div className="text-display md:mt-5 mt-2 text-white">Book With Us And <strong> Enjoy </strong>Your Travel</div>
                                        <Link href='/shop/breadcrumb-img' className="button-main md:mt-8 mt-3 text-white">Shop Now</Link>
                                    </div>
                                    <div className="sub-img absolute top-0 left-0 w-full h-full">
                                        <Image
                                            src={LPP}
                                            width={670}
                                            height={936}
                                            alt='landing page photo'
                                            style={{
                                                objectFit: 'cover', // Ensure image covers the entire container
                                                width: '100%',
                                                height: '100%',
                                            }}
                                            priority={true}
                                        />
                                    </div>
                                </div>
                            </div>

                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slider-item h-full w-full relative mt-24">
                                <div className="container w-full h-full flex items-center relative">
                                    <div className="text-content basis-1/2">
                                        <div className="text-sub-display">Sale! Up To 50% Off!</div>
                                        <div className="text-display md:mt-5 mt-2">Fashion for Every Occasion</div>
                                        <Link href='/shop/breadcrumb-img' className="button-main md:mt-8 mt-3">Shop Now</Link>
                                    </div>
                                    <div className="sub-img absolute w-1/2 2xl:-right-[60px] -right-[0] sm:-bottom-[60px] bottom-0">
                                        <Image
                                            src={'/images/slider/bg1-2.png'}
                                            width={670}
                                            height={936}
                                            alt='bg1-2'
                                            priority={true}
                                        />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slider-item h-full w-full relative mt-24">
                                <div className="container w-full h-full flex items-center relative">
                                    <div className="text-content basis-1/2">
                                        <div className="text-sub-display">Sale! Up To 50% Off!</div>
                                        <div className="text-display md:mt-5 mt-2">Stylish Looks for Any Season</div>
                                        <Link href='/shop/breadcrumb-img' className="button-main md:mt-8 mt-3">Shop Now</Link>
                                    </div>
                                    <div className="sub-img absolute sm:w-1/2 w-2/3 2xl:-right-[60px] -right-[36px] sm:bottom-0 -bottom-[30px]">
                                        <Image
                                            src={'/images/slider/bg1-3.png'}
                                            width={1000}
                                            height={1000}
                                            alt='landing page photo'
                                            priority={true}
                                        />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </>
    )
}

export default SliderOne