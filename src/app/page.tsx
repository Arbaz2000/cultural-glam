"use client"
import React from 'react'
import TopNavOne from '@/components/Header/TopNav/TopNavOne'
import MenuOne from '@/components/Header/Menu/MenuOne'
import SliderOne from '@/components/Slider/SliderOne'
import WhatNewOne from '@/components/Home1/WhatNewOne'
import productData from '@/data/Product.json'
import Collection from '@/components/Home1/Collection'
import TabFeatures from '@/components/Home1/TabFeatures'
import TabFeatures2 from '@/components/Home1/TabFeatures2'
import '../stylesGlobals/globals.css'
import Banner from '@/components/Home1/Banner'
import Benefit from '@/components/Home1/Benefit'
import testimonialData from '@/data/Testimonial.json'
import Testimonial from '@/components/Home1/Testimonial'
import Instagram from '@/components/Home1/Instagram'
import Brand from '@/components/Home1/Brand'
import Footer from '@/components/Footer/Footer'
import ModalNewsletter from '@/components/Modal/ModalNewsletter'
import Cars from "@/components/Home1/caars"
import YoutubeVideo from "@/components/Home1/youtube"
import Special from "@/components/Home1/special"
import Package from '@/components/Product/packege'

export default function Home() {
  return (
    <>
      <TopNavOne props="style-one bg-black" slogan="New customers save 10% with the code GET10" />
      <div id="header" className='relative w-full'>
        <MenuOne props="bg-transparent" />
        <SliderOne />
      </div>

      {/* Sidebar */}
      <div className="fixed top-1/3 left-0 z-50 bg-gray-800 text-white w-16 p-4">
        <ul className="space-y-4">
          <li>
            <a href="#header" className="block hover:text-gray-400">Header</a>
          </li>
          <li>
            <a href="#package" className="block hover:text-gray-400">Package</a>
          </li>
          <li>
            <a href="#cars" className="block hover:text-gray-400">Cars</a>
          </li>
          <li>
            <a href="#collection" className="block hover:text-gray-400">Collection</a>
          </li>
          <li>
            <a href="#tabfeatures" className="block hover:text-gray-400">Tab Features</a>
          </li>
          <li>
            <a href="#benefit" className="block hover:text-gray-400">Benefit</a>
          </li>
          <li>
            <a href="#testimonial" className="block hover:text-gray-400">Testimonial</a>
          </li>
          <li>
            <a href="#youtube" className="block hover:text-gray-400">YouTube</a>
          </li>
          <li>
            <a href="#instagram" className="block hover:text-gray-400">Instagram</a>
          </li>
          <li>
            <a href="#brand" className="block hover:text-gray-400">Brand</a>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div id="package">
        <Package />
      </div>
      <div id="cars">
        <Cars />
      </div>
      <div id="collection">
        <Collection />
      </div>
      <div id="tabfeatures">
        <TabFeatures2 />
      </div>
      <div id="benefit">
        <Benefit props="md:py-20 py-10" />
      </div>
      <div id="testimonial">
        <Testimonial data={testimonialData} limit={6} />
      </div>
      <div id="youtube">
        <YoutubeVideo />
      </div>
      <div id="instagram">
        <Instagram />
      </div>
      <div id="brand">
        <Brand />
      </div>
      <Footer />
      <ModalNewsletter />

      {/* Global CSS for Smooth Scrolling */}
      
    </>
  )
}
