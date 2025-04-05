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

function ProductPage() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 5000);
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
            <div className="flex justify-between items-start gap-1 mt-8">
                {loading ? (
                    <SkeletonCard />
                ) : (
                    <>
                        <div>
                            <ImageView cover="/images/Sunbeam_Tote_Jeff.jpg" />
                        </div>
                        <div className='items-end p-5 m-1 gap-1'>
                            <ProductInfo />
                        </div>
                    </>
                )}
            </div>

            <div className="flex col-span-3 my-2">
                {/* Product option images */}
                {/* <ImageGallery /> */}

                {/* Product Pdf View */}
                {/* <ProductPdf /> */}

                {/* Product Video View */}
                {/* <ProductVideo /> */}

                {/* Product Slider */}
                <ProductSlider />
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
