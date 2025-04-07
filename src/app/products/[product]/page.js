/* eslint-disable react-hooks/exhaustive-deps */
"use client"
import React, { useState, useEffect } from 'react';
import BreadCrumb from '@/components/breadCrumb';
import ImageView from '@/components/imageView';
import ProductSugg from '@/components/productSuggestions';
import ProductInfo from '@/components/productInfo';
import { products } from "@/lib/shopData";
import { ProductPdf, ProductSlider, ProductVideo } from '@/components/productViewer';
import { SkeletonCard } from '@/components/skeleton';
import ImageGallery from '@/components/ImageGallery';

function ProductPage({ params }) {
    const [loading, setLoading] = useState(true);
    const [product, setProduct] = useState({})
    const getProductId = async () => {
        const id = (await params).product;
        return id
    }
    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 5000);
        getProductId().then((id) => {
            setProduct(products.find(p => p.title.replace(/\s/g, '-') === id))
            console.log(products, id, "this is id andp product")
        })
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {/* BreadCrumb Component */}
            <div className="mt-16 pt-2">
                <BreadCrumb
                />
            </div>

            {/* Image View */}
            <div className="flex flex-col justify-center items-center">
                {product?.cover &&
                    <div className='flex gap-2'>
                        <div className='flex items-center justify-center flex-col'>
                            <ImageView cover={product?.cover} />
                            <div className="flex gap-2 my-2 ">
                                <ProductSlider images={product?.thumbnails} />
                            </div>
                        </div>
                        <div className='items-end p-5 m-1 gap-1'>
                            <ProductInfo product={product} />
                        </div>
                    </div>
                }
            </div>

            {/* Product Suggection */}
            <h1 className="text-2xl font-bold m-5">You May Also Like</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-5">
                {products
                    .filter((product) => product.category === "product suggestions")
                    .map((product, index) => (
                        <ProductSugg
                            key={index}
                            cover={product.cover}
                            title={product.title}
                            price={product.price}
                        />
                    ))}
            </div>

        </>
    )
}

export default ProductPage;
