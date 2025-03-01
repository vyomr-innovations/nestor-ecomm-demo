"use client"
import ProductCard from '@/components/products/productCard';
import BreadCrumb from '../../components/breadcrumb';
import { products } from '@/lib/shopData';
import React from 'react';

function CategoriesPage() {
    return (
        <>
            {/* BreadCrumb Component */}
            <div className="mt-16 pt-2">
                <BreadCrumb
                    page1={"Home"}
                    catogory={"Categories"}
                    page2={"Apparel"}
                />
                <h1 className='font-bold text-2xl mt-2'>Apparel</h1>
                <p className='text-md text-muted-foreground'>
                    Category
                </p>
            </div>
            
            <div className="grid grid-cols-3">
                {products.map((product, index) => {
                    return (
                        <ProductCard
                            key={index}
                            cover={product.cover}
                            title={product.title}
                            price={product.price}
                        />
                    )
                })}
            </div>
        </>
    )
}

export default CategoriesPage;
