import React from 'react'
import BreadCrumb from '@/components/breadcrumb';
import ImageView from '@/components/image-view';
import ProductSugg from '@/components/product suggestions';
import ProductInfo from '@/components/product-info';


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
                    <ImageView />
                </div>

                {/* Product Informaction */}
                <div className='items-end p-5 m-1 gap-1'>
                    <ProductInfo />
                </div>
            </div>

            {/* Product Suggection */}
            <div className='grid grid-cols-4 p-2'>
                <ProductSugg
                    cover={"/images/Chestnut_Carryall_Bag.jpg"}
                    title={"Chestnut Carryall Bag"}
                    price={"$10.00"}
                />
            </div>
        </>
    )
}

export default ProductPage;
