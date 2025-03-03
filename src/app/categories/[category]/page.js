"use client"
import ProductCard from '@/components/products/productCard';
import BreadCrumb from '@/components/breadcrumb';
import { products } from '@/lib/shopData';
import React, { useEffect, useState } from 'react'
function CategoriesPage({ params }) {
    const [categoryId, setCatogoryId] = useState()
    const getId = async () => {
        const id = (await params).category;
        setCatogoryId(id);
    }
    const filteredItems = products.filter(product => product.category === categoryId);
    useEffect(() => {
        getId()
    }, [])
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
                            cover={product.cover}
                            title={product.title}
                            price={product.price}
                        />
                    )
                }) : null
                }
            </div>
        </>
    );
}

export default CategoriesPage;
