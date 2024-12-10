// @ts-nocheck
'use client'

import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation';
import TopNavOne from '@/components/Header/TopNav/TopNavOne'
import MenuOne from '@/components/Header/Menu/MenuOne'
import ShopFilterCanvas from '@/components/Shop/ShopFilterCanvas'
import productData from '@/data/Product.json'
import Footer from '@/components/Footer/Footer'
import Head from 'next/head'

export default function Fullwidth() {
    const searchParams = useSearchParams();
    const [isMounted, setIsMounted] = useState(false); // State to track if the component is mounted
    const [filteredProducts, setFilteredProducts] = useState(productData);

    const type = searchParams.get('type');
    const category = searchParams.get('category');

    // Filter products based on query params only when the component is mounted
    useEffect(() => {
        setIsMounted(true); // Set the component as mounted when the useEffect runs

        let filtered = productData;

        if (type) {
            filtered = filtered.filter(product => product.type === type);
        }

        if (category) {
            filtered = filtered.filter(product => product.category === category);
        }

        setFilteredProducts(filtered);
    }, [type, category]);

    if (!isMounted) {
        return null; // Prevent rendering during SSR
    }

    return (
        <>
            <Head>
                <title>Shop - Filtered Products</title>
                <meta name="description" content={`Shop for products filtered by type: ${type}, category: ${category}.`} />
            </Head>
            
            <TopNavOne props="style-one bg-black" slogan="New customers save 10% with the code GET10" />
            <div id="header" className='relative w-full'>
                <MenuOne props="bg-transparent" />
            </div>

            <div className="shop-square">
                {filteredProducts.length > 0 ? (
                    <ShopFilterCanvas data={filteredProducts} productPerPage={12} dataType={type} />
                ) : (
                    <div className="text-center py-10 text-gray-600">
                        <h2>No products found matching the filters</h2>
                    </div>
                )}
            </div>

            <Footer />
        </>
    )
}
