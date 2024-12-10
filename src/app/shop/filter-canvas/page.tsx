// @ts-nocheck
'use client'

import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation';
import TopNavOne from '@/components/Header/TopNav/TopNavOne'
import MenuOne from '@/components/Header/Menu/MenuOne'
import ShopFilterCanvas from '@/components/Shop/ShopFilterCanvas'
import productData from '@/data/Product.json'
import Footer from '@/components/Footer/Footer'

export default function FilterCanvas() {
    const searchParams = useSearchParams();
    const [filteredProducts, setFilteredProducts] = useState(productData);
    const type = searchParams.get('type');
    const category = searchParams.get('category');

    // Filter products based on query params
    useEffect(() => {
        let filtered = productData;

        if (type) {
            filtered = filtered.filter(product => product.type === type);
        }

        if (category) {
            filtered = filtered.filter(product => product.category === category);
        }

        setFilteredProducts(filtered);
    }, [type, category]);

    return (
        <>
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
