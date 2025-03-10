"use client"
import ProductCard from '@/components/products/productCard';
import BreadCrumb from '../../components/breadcrumb';
import { products } from '@/lib/shopData';
import React from 'react';
import CategoryGrid from '@/components/categories/categorieCard';

function CategoriesPage() {
    return (
        <>
            {/* BreadCrumb Component */}
            <div className=" pt-2 my-16">
                <BreadCrumb
                    page1={"Home"}
                    catogory={"Categories"}
                    page2={"Apparel"}
                />
                <h1 className='font-bold text-2xl mt-2'>Categories</h1>
            </div>

            {/* CategoryGrid Component */}
            <div className="grid grid-cols-2 gap-3">
                <CategoryGrid
                    title={"Apparel"}
                    cover={"/images/apparel.avif"}
                    description={"Shop now"}
                />
                <CategoryGrid
                    title={"Accessories"}
                    cover={"/images/accessories.avif"}
                    description={"Shop now"}
                />
                <CategoryGrid
                    title={"Digital"}
                    cover={"/images/Workspace_Carft_Pro.jpg"}
                    description={"Shop now"}
                />
            </div>
        </>
    );
}

export default CategoriesPage;
