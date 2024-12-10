// @ts-nocheck
'use client'

import React, { useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation';
import TopNavOne from '@/components/Header/TopNav/TopNavOne'
import MenuOne from '@/components/Header/Menu/MenuOne'
import ShopFilterOptions from '@/components/Shop/ShopFilterOptions'
import productData from '@/data/Product.json'
import Footer from '@/components/Footer/Footer'

export default function FilterOptions() {
    const searchParams = useSearchParams();
    const type = searchParams.get('type');
    const category = searchParams.get('category');
    
    const [filteredProducts, setFilteredProducts] = useState(productData);

    // Filter products based on query parameters
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
                <ShopFilterOptions data={filteredProducts} productPerPage={12} />
            </div>
            <Footer />
        </>
    )
}
