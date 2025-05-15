"use client"
import ProductCard from '@/components/products/productCard';
import BreadCrumb from '@/components/breadcrumb';
import { products } from '@/lib/shopData';
import React, { useEffect, useState, useCallback } from 'react'
import { useRouter } from 'next/navigation';
function CategoriesPage({ params }) {
    const router = useRouter();
    const [categoryId, setCatogoryId] = useState();
    
    const getId = useCallback(async () => {
        const id = (await params).category;
        setCatogoryId(id);
    }, [params]);
    
    const filteredItems = products.filter(product => product.category === categoryId);
    
    useEffect(() => {
        getId();
    }, [getId])
    return (
        <>
            {/* BreadCrumb Component */}
            <div className="mt-16 pt-2">
                <BreadCrumb
                    page1={"home"}
                    page3={"categories"}
                    page2={categoryId}
                />
                <h1 className='font-bold text-2xl mt-2'>{categoryId}</h1>
                <p className='text-md text-muted-foreground'>
                    Category
                </p>
            </div>

            <div className="grid grid-cols-3">
                {(categoryId && filteredItems) ? filteredItems.map((product, index) => {
                    return (
                        <ProductCard
                            key={index}
                            id={product.title.toLowerCase().replace(/\s+/g, '-')}
                            cover={product.cover.url}
                            title={product.title}
                            price={product.price}
                            onClick={() => router.push(`/products/${product.title.replace(/\s+/g, "-")}`)}                            
                        />
                    )
                }) : null
                }
            </div>
        </>
    );
}

export default CategoriesPage;
