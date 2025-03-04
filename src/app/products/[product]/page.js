import React from 'react'
import BreadCrumb from '@/components/breadcrumb';
import ImageView from '@/components/image-view';
import ProductSugg from '@/components/product suggestions';
import ProductInfo from '@/components/product-info';
import { products } from "@/lib/shopData";

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

            {/* Product Suggection */}
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

                {/* <ProductSugg
                    cover={"/images/Chestnut_Carryall_Bag.jpg"}
                    title={"Chestnut Carryall Bag"}
                    price={"$10.00"}
                />
                <ProductSugg
                    cover={"/images/Versatile_Tote_Backpack.png"}
                    title={"Veratile Tote Backpack"}
                    price={"$1,000.00"}
                />
                <ProductSugg
                    cover={"/images/Eco_friendly_Tote.png"}
                    title={"Eco friendly Tote"}
                    price={"$300.00"}
                />
                <ProductSugg
                    cover={"/images/Classic_Messenger_Bag.png"}
                    title={"Classic Messenger Bag"}
                    price={"$700.00"}
                /> */}
            </div>
        </>
    )
}

export default ProductPage;
