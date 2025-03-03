import React from 'react'
import BreadCrumb from '@/components/breadcrumb';
import ImageView from '@/components/image-view';


function ProductPage() {
    return (
        <>
            {/* BreadCrumb Component */}
            <div className="mt-16 pt-2">
                <BreadCrumb
                    page1={"All Products"}
                    catogory={"Sunbeam Tote Jeff"}
                />
            </div>
            <ImageView/>
        </>
    )
}

export default ProductPage;
