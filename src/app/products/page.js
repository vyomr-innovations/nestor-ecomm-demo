import React from 'react'
import BreadCrumb from '@/components/breadCrumb';

function ProductsPage() {
    return (
        <>
            {/* BreadCrumb Component */}
            <div className="mt-16 pt-2">
                <BreadCrumb
                    page1={"All Products"}
                    catogory={"Sunbeam Tote Jeff"}
                />
            </div>
        </>
    )
}

export default ProductsPage;
