import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Hawamahal from "../../../public/images/slider/Hawamahal.jpeg"
import pushkarFair from "../../../public/images/slider/pushkarFair.jpeg"


const Banner = () => {
    return (
        <><div className="container mt-14">
            <div className="heading3 text-center">Travel With Happness <strong>CHAUFFEUR</strong></div>
        </div>
            <div className="banner-block style-one grid sm:grid-cols-2 gap-5 md:pt-20 pt-10">
                <Link href={'/shop/breadcrumb-img'} className="banner-item relative block overflow-hidden duration-500">
                    <div className="banner-img">
                        <Image
                            src={pushkarFair}
                            width={2000}
                            height={1300}
                            alt='banner1'
                            priority={true}
                            className='duration-1000'
                        />
                    </div>
                    <div className="banner-content absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
                        <div className="heading2 text-white">Pushkar Camel Fair</div>
                        <div className="text-button text-white relative inline-block pb-1 border-b-2 border-white duration-500 mt-2">Travel Now</div>
                    </div>
                </Link>
                <Link href={'/shop/breadcrumb-img'} className="banner-item relative block overflow-hidden duration-500">
                    <div className="banner-img">
                        <Image
                            src={Hawamahal}
                            width={2000}
                            height={1300}
                            alt='banner2'
                            priority={true}
                            className='duration-1000'
                        />
                    </div>
                    <div className="banner-content absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
                        <div className="heading2 text-white">Hawamahal Jaipur</div>
                        <div className="text-button text-white relative inline-block pb-1 border-b-2 border-white duration-500 mt-2">Travel Now</div>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default Banner