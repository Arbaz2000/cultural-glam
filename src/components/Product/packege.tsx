
'use client'
import React, { useState } from "react";
import Image from 'next/image'; // Assuming you're using Next.js
import { FaCircleArrowLeft } from "react-icons/fa6";
import { FaCircleArrowRight } from "react-icons/fa6";

import goldenTriangleTour from "../../../public/images/slider/GoldenTriangle.jpeg"
import rajasthan from "../../../public/images/slider/Rajasthan10DayesOne.jpeg"
import rajasthanTour from "../../../public/images/slider/Rajasthan10DayesTwo.jpeg"
import rajasthanPlaceTour from "../../../public/images/slider/Rajasthan8Days.jpeg"
import rajasthanEthnic from "../../../public/images/slider/rajasthanEthnic.jpeg"
import rajasthanDesert from "../../../public/images/slider/sliderfour.png"
import rajasthanFort from "../../../public/images/slider/Rajasthan20Days.jpeg"
import Link from 'next/link'

const tours = [
  {
    title: "Golden Triangle Tour India:",
    days: "6 Days",
    src: goldenTriangleTour,
    description: "Experience India's cultural splendor with the Golden Triangle Tour, covering Delhi, Agra, and Jaipur. Visit iconic landmarks like the Taj Mahal, Red Fort, and Amber Fort, immersing in history and heritage."
  },
  {
    title: "Rajasthan:",
    days: "11 Days",
    src: rajasthan,
    description: "Rajasthan offers a stunning blend of rich history, royal palaces, and desert landscapes. Explore vibrant cities like Jaipur, Udaipur, and Jodhpur, with their majestic forts, temples, and colorful cultural experiences."
  },
  {
    title: "Rajasthan Tours:",
    days: "8 Days",
    src: rajasthanTour,
    description: "Rajasthan offers a stunning blend of rich history, royal palaces, and desert landscapes. Explore vibrant cities like Jaipur, Udaipur, and Jodhpur, with their majestic forts, temples, and colorful cultural experiences."
  },
  {
    title: "Rajasthan Place Tours:",
    days: "10 Days",
    src: rajasthanPlaceTour,
    description: "Rajasthan Place Tours take you through awe-inspiring forts, palaces, and temples. Visit Udaipur’s Lake Palace, Jodhpur’s Mehrangarh Fort, and Jaipur’s Amber Fort, offering rich history and regal architecture in every corner."
  },
  {
    title: "Rajasthan Ethnic Tours:",
    days: "10 Days",
    src: rajasthanEthnic,
    description: "Rajasthan offers a stunning blend of rich history, royal palaces, and desert landscapes. Explore vibrant cities like Jaipur, Udaipur, and Jodhpur, with their majestic forts, temples, and colorful cultural experiences."
  },
  {
    title: "Rajasthan Desert:",
    days: "16 Days",
    src: rajasthanDesert,
    description: "Rajasthan Desert Tours offer a unique experience of the Thar Desert. Enjoy camel rides, desert safaris, and starlit camps while discovering sand dunes, traditional villages, and the rugged beauty of Rajasthan's arid landscapes."
  },
  {
    title: "Rajasthan Fort Tours:",
    days: "20 Days",
    src: rajasthanFort,
    description: "Rajasthan Fort Tours highlight the state's architectural marvels. Visit imposing structures like the Mehrangarh Fort, Amber Fort, and Chittorgarh Fort, each showcasing the rich military history, grandeur, and beauty of Rajasthan’s royal past."
  }
];

const Package = () => {
  return (
    <>
      <Link href="/pages/package-tours ">
        <div className="px-20 bg-slate-50">
          <div className="bg-slate-50 py-16">
            <p className="text-4xl font-bold mb-8 text-center">Explore Your Packege Tours</p>
          </div>
          <hr className="border-gray-800 mb-14" />
          <div className="container mx-auto py-12 ">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
              {tours.map((tours) => (
                <a
                  key={tours.title}
                  className="block rounded-lg shadow-md overflow-hidden"
                >
                  <Image
                    src={tours.src}
                    alt={tours.title}
                    width={500}
                    height={300}
                    className="object-cover"
                  />
                  <div className="p-4">
                    <h2 className="text-xl font-bold mb-2">{tours.title}</h2>
                    <p className="text-gray-700 text-sm">
                      {tours.description}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Package;
