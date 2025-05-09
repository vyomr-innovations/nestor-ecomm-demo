"use client"
import React from 'react'
import BreadCrumb from '@/components/breadCrumb';
import ProductCard from "@/components/products/productCard"
import { products } from '@/lib/shopData';
import { useRouter } from 'next/navigation';
function ProductsPage() {
    const router = useRouter()
    return (
        <>
            {/* BreadCrumb Component */}
            <div className="mt-16 pt-2">
                <BreadCrumb
                    page1={"All Products"}
                    catogory={"Sunbeam Tote Jeff"}
                />

                <div className="grid grid-cols-3">
                    {products?.map((product, index) => {
                        return (
                            <ProductCard
                                key={index}
                                id={product.title.toLowerCase().replace(/\s+/g, '-')} // Fallback to index if id not available
                                onClick={() =>
                                    router.push(`/products/${product.title.replace(/\s+/g, "-")}`)
                                }
                                cover={product.cover.url}
                                title={product.title}
                                price={product.price}
                            />
                        );
                    })}
                </div>
            </div>
        </>
    )
}

export default ProductsPage;
