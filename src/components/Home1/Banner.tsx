// 'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import travler1 from "../../../public/images/tourTravel/travler1.jpg"
import travler2 from "../../../public/images/tourTravel/travler2.jpg"

const Banner = () => {
    return (
        <><div className="container mt-10">
            <div className="heading3 pt-10 pb-5 pl-4 pr-2 bg-[#f5f5f5] text-4xl font-bold mb-2 text-center">Our Happy<strong>Travler</strong></div>
        </div>
            <div className="container mx-auto  justify-between">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 ">
                    <div className='flex flex-col'>
                        <Image
                            src={travler1}
                            alt="kkss"
                            width={500}
                            height={300}
                            className="object-cover"
                        />
                        <p className='font-bold'>Mrs. & Mr. Rottomburg (France)  in trip in India</p>
                    </div>
                    <div className='flex flex-col'>
                        <Image
                            src={travler2}
                            alt="kkss"
                            width={500}
                            height={300}
                            className="object-cover"
                        />
                        <p className='font-bold'>Mrs. & Mr. Rottomburg (France)  in trip in India</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner