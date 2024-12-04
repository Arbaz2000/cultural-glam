'use client'
import React from "react";
import Image from 'next/image';
import { FaWhatsapp } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import Link from 'next/link';

import goldenTriangleTour from "../../../public/images/slider/packegeTours/GoldenTriangle.jpeg";
import rajasthan from "../../../public/images/slider/packegeTours/Rajasthan10DayesOne.jpeg";
import rajasthanTour from "../../../public/images/slider/packegeTours/Rajasthan10DayesTwo.jpeg";
import rajasthanPlaceTour from "../../../public/images/slider/packegeTours/Rajasthan8Days.jpeg";
import rajasthanEthnic from "../../../public/images/slider/packegeTours/rajasthanEthnic.jpeg";
import rajasthanDesert from "../../../public/images/slider/packegeTours/sliderfour.png";
import rajasthanFort from "../../../public/images/slider/packegeTours/Rajasthan20Days.jpeg";

const tours = [
  {
    id: "1",
    title: "Golden Triangle Tour India:",
    days: "6 Days",
    src: goldenTriangleTour,
    description: "Experience India's cultural splendor with the Golden Triangle Tour, covering Delhi, Agra, and Jaipur. Visit iconic landmarks like the Taj Mahal, Red Fort, and Amber Fort, immersing in history and heritage."
  },
  {
    id: "2",
    title: "Rajasthan:",
    days: "11 Days",
    src: rajasthan,
    description: "Rajasthan offers a stunning blend of rich history, royal palaces, and desert landscapes. Explore vibrant cities like Jaipur, Udaipur, and Jodhpur, with their majestic forts, temples, and colorful cultural experiences."
  },
  {
    id: "3",
    title: "Rajasthan Tours:",
    days: "8 Days",
    src: rajasthanTour,
    description: "Rajasthan offers a stunning blend of rich history, royal palaces, and desert landscapes. Explore vibrant cities like Jaipur, Udaipur, and Jodhpur, with their majestic forts, temples, and colorful cultural experiences."
  },
  {
    id: "4",
    title: "Rajasthan Place Tours:",
    days: "10 Days",
    src: rajasthanPlaceTour,
    description: "Rajasthan Place Tours take you through awe-inspiring forts, palaces, and temples. Visit Udaipur’s Lake Palace, Jodhpur’s Mehrangarh Fort, and Jaipur’s Amber Fort, offering rich history and regal architecture in every corner."
  },
  {
    id: "5",
    title: "Rajasthan Ethnic Tours:",
    days: "10 Days",
    src: rajasthanEthnic,
    description: "Rajasthan offers a stunning blend of rich history, Rajasthan royal palaces, and desert landscapes. Explore vibrant cities like Jaipur, Udaipur, and Jodhpur, with their majestic forts, temples, and colorful cultural experiences."
  },
  {
    id: "6",
    title: "Rajasthan Desert:",
    days: "16 Days",
    src: rajasthanDesert,
    description: "Rajasthan Desert Tours offer a unique experience of the Thar Desert. Enjoy camel rides, desert safaris, and starlit camps while discovering sand dunes, traditional villages, and the rugged beauty of Rajasthan's arid landscapes."
  },
  {
    id: "7",
    title: "Rajasthan Fort Tours:",
    days: "20 Days",
    src: rajasthanFort,
    description: "Rajasthan Fort Tours highlight the state's architectural marvels. Visit imposing structures like the Mehrangarh Fort, Amber Fort, and Chittorgarh Fort, each showcasing the rich military history, grandeur, and beauty of Rajasthan’s royal past."
  }
];

const Package = () => {
  return (
    <div className="bg-slate-50">
      <div className="py-10">
        <p className="text-4xl font-bold mb-2 text-center">Explore Your Package Tours</p>
      </div>
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tours.map((tour) => (
            <Link key={tour.id} href={`/detail/${tour.id}`}>
              <div className="block rounded-lg shadow-md overflow-hidden">
                <Image
                  src={tour.src}
                  alt={tour.title}
                  width={500}
                  height={300}
                  className="object-cover"
                />
                <div className="p-4 flex flex-row justify-between">
                  <h2 className="text-xl font-bold mb-2">{tour.title}</h2>
                  <p className="text-gray-700 font-bold">{tour.days}</p>
                </div>
                <p className="ml-3 text-gray-700">{tour.description}</p>
                <div className="p-4 flex flex-row justify-between bg-[#edf6f9]">
                  <button className="text-l py-1 text-[#FFFFFF] rounded-md bg-[#1677FF] hover:bg-[#023e8a]">Details</button>
                  <div className="flex flex-row space-x-5">
                    <FaWhatsapp className="text-success text-3xl"/>
                    <CiMail className="text-red text-3xl"/>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Package;
