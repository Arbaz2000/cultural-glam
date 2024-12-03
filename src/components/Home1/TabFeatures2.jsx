'use client'
import Image from 'next/image';
import React from 'react'
import incredebilerajasthan from "../../../public/images/tourTravel/incridebilerajasthan.jpeg"

const Benefit = () => {
    return (
        <>
            <div className="what-new-block">
                <div className="container mx-auto px-4">
                    <div className="heading flex flex-col text-center">
                        <div className="heading3 pt-10 pb-5 pl-4 pr-2 bg-[#f5f5f5] text-4xl font-bold mb-2 sm:text-3xl text-xl">
                            About Rajasthan
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row justify-between items-center'>
                        {/* Text Section */}
                        <div className="text-black mt-10 sm:ml-0 md:ml-20 sm:text-base md:text-lg w-full md:w-1/2 px-4">
                            <span className='text-2xl text-black font-bold'>
                                About <br />Incredible Rajasthan
                            </span>
                            <p className="mt-2">
                                Rajasthan, often referred to as the "Land of Kings," is a state that exudes timeless charm, steeped in rich history and vibrant culture. From the majestic palaces of Jaipur to the haunting beauty of the Thar Desert, Rajasthan offers a captivating blend of architectural wonders, colorful traditions, and breathtaking landscapes. The state is renowned for its royal heritage, with its forts and temples narrating tales of bravery and grandeur. Visitors are enchanted by its bustling markets, traditional dance forms like Ghoomar, and the hospitality of its people. Rajasthan is truly a place where the past and present merge, offering an unforgettable experience.
                            </p>
                        </div>

                        {/* Image Section */}
                        <div className="w-full md:w-1/2 mt-10 md:mt-0">
                            <Image
                                src={incredebilerajasthan}
                                alt="A view showcasing the beauty of Rajasthan"
                                width={1600} // Specify the image width (as per original size)
                                height={1067} // Specify the image height (proportional to width to avoid stretching)
                                className="mx-auto   rounded-xl w-full h-auto"
                                style={{ objectFit: 'cover' }} // Ensures the image fills the space without distortion
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Benefit;
