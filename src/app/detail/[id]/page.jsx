'use client'; // Mark this as a Client Component

import React from 'react';
import { useRouter } from 'next/navigation'; // Correct import
import Image from 'next/image';
import MenuOne from '@/components/Header/Menu/MenuOne';
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import Footer from '@/components/Footer/Footer';
import { Tours } from '../../pages/package-tours/page'; // Import your tours array

const TourDetail = ({ params }) => {
  const { id } = params; // Access id from params

  // Find the tour by the ID (Client-side logic)
  const tour = Tours.find((tour) => tour.id === id);

  if (!tour) {
    return <div>Loading...</div>; // Handle case when tour data is not found
  }

  return (
    <>
    <div id="header" className="relative w-full">
        <MenuOne props="bg-transparent" />
        <Breadcrumb heading="Explore India" subHeading="Discover India" />
      </div>
    <div className="container mx-auto py-8">
      <div className="max-w-2xl mx-auto">
        {/* Ensure the image field is correct */}
        <Image
          src={tour.image}
          alt={tour.title}
          width={800}
          height={500}
          className="object-cover rounded-lg"
        />
        <h1 className="text-3xl font-bold mt-4">{tour.title}</h1>
        {/* Handle the 'cities' field dynamically */}
        <p className="text-xl mt-2">
          <span className="font-semibold text-primary">Cities: </span>
          {typeof tour.cities === 'string'
            ? tour.cities
            : `${tour.cities?.destinations} - ${tour.cities?.duration || ''}`}
        </p>

        <div className="mt-4">
          {/* Loop through the description items */}
          {tour.description.map((item, index) => (
            <div key={index}>
              {item.type === 'heading' && <h3 className="text-2xl font-semibold">{item.content}</h3>}
              {item.type === 'text' && <p>{item.content}</p>}
              {item.type === 'list' && (
                <ul>
                  {Array.isArray(item.content) &&
                    item.content.map((listItem, idx) => (
                      <li key={idx}>{listItem}</li>
                    ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default TourDetail;
