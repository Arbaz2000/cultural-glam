// @ts-nocheck 
'use client'

import React, { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation';
import TopNavOne from '@/components/Header/TopNav/TopNavOne'
import MenuOne from '@/components/Header/Menu/MenuOne'
import ShopBreadCrumb1 from '@/components/Shop/ShopBreadCrumb1'
import productData from '@/data/Product.json'
import Footer from '@/components/Footer/Footer'

export default function DefaultGrid() {
    const searchParams = useSearchParams();
    const [filteredProducts, setFilteredProducts] = useState(productData);
    const type = searchParams.get('type');
    const gender = searchParams.get('gender');
    const category = searchParams.get('category');

    // Filter products based on query params
    useEffect(() => {
        let filtered = productData;

        if (type) {
            filtered = filtered.filter(product => product.type === type);
        }

        if (gender) {
            filtered = filtered.filter(product => product.gender === gender);
        }

        if (category) {
            filtered = filtered.filter(product => product.category === category);
        }

        setFilteredProducts(filtered);
    }, [type, gender, category]);

    return (
        <>
            <TopNavOne props="style-one bg-black" slogan="New customers save 10% with the code GET10" />
            <div id="header" className='relative w-full'>
                <MenuOne props="bg-transparent" />
            </div>

            <div className="shop-square">
                {filteredProducts.length > 0 ? (
                    <ShopBreadCrumb1 data={filteredProducts} productPerPage={9} dataType={type} gender={gender} category={category} />
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
