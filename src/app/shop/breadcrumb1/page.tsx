// @ts-nocheck 
'use client'

import React, { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation';
import TopNavOne from '@/components/Header/TopNav/TopNavOne'
import MenuOne from '@/components/Header/Menu/MenuOne'
import ShopBreadCrumb1 from '@/components/Shop/ShopBreadCrumb1'
// import productData from '@/data/Product.json'
import Footer from '@/components/Footer/Footer'

export default function BreadCrumb1() {
    const searchParams = useSearchParams();

    const [type, setType] = useState<string | null>(null); // Simplified type state definition
    const gender = searchParams.get('gender');
    const category = searchParams.get('category');

    // Get 'type' from query params and update the state
    useEffect(() => {
        const datatype = searchParams.get('type');
        setType(datatype);
    }, [searchParams]);

    return (
        <>
            <TopNavOne props="style-one bg-black" slogan="New customers save 10% with the code GET10" />
            <div id="header" className="relative w-full">
                <MenuOne props="bg-transparent" />
            </div>
            
            <ShopBreadCrumb1 
                // data={productData} 
                productPerPage={9} 
                dataType={type} 
                gender={gender} 
                category={category} 
            />
            
            <Footer />
        </>
    );
}
