import React from 'react'
import BreadCrumb from '@/components/breadcrumb';
import ImageView from '@/components/image-view';
import ProductSugg from '@/components/product suggestions';
import ProductInfo from '@/components/product-info';
import { products } from "@/lib/shopData";
import ProductPdf from '@/components/product pdf view';
import ProductSilder from '@/components/product slider';
import ProductVideo from '@/components/product Video';

function ProductPage() {
    return (
        <>
            {/* BreadCrumb Component */}
            <div className="mt-16 pt-2">
                <BreadCrumb
                    page1={"All Products"}
                    page3={"Sunbeam Tote Jeff"}
                />
            </div>

            {/* Image View */}
            <div className="flex justify-between items-start gap-1 mt-8">
                <div>
                    <ImageView
                        cover="/images/Sunbeam_Tote_Jeff.jpg"
                    />
                </div>

                {/* Product Informaction */}
                <div className='items-end p-5 m-1 gap-1'>
                    <ProductInfo />
                </div>
            </div>

            <div className="flex col-span-3 my-2">
                {/* Product Pdf View */}
                <ProductPdf />

                {/* Product Video View */}
                <ProductVideo />

                {/* Product Slider */}
                {/* <ProductSilder /> */}
            </div>

            {/* Product Suggection */}
            <h1 className='text-2xl font-bold m-5'>You May Also Like</h1>
            <div className='grid grid-cols-4'>
                {products
                    .filter((product) => product.category === "product suggestions")
                    .map((product, index) => (
                        <ProductSugg
                            key={index}
                            cover={product.cover}
                            title={product.title}
                            price={product.price}
                        />
                    ))
                }
            </div>
        </>
    )
}

export default ProductPage;
