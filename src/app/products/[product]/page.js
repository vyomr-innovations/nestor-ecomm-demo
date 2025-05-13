/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useState, useEffect } from "react";
import BreadCrumb from "@/components/breadCrumb";
import ImageView from "@/components/imageView";
import ProductSugg from "@/components/productSuggestions";
import ProductInfo from "@/components/productInfo";
import { products } from "@/lib/shopData";
import { ProductSlider } from "@/components/productViewer";
import { SkeletonCard } from "@/components/skeleton";
import ImageGallery from "@/components/ImageGallery";
import { PDFViewer } from "@/components/PDFViewer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductShare from "@/components/productShare";

function ProductPage({ params }) {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState({});
  const getProductId = async () => {
    const id = (await params).product;
    return id;
  };
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 5000);
    getProductId().then((id) => {
      setProduct(products.find((p) => p.title.replace(/\s/g, "-") === id));
      console.log(products, id, "this is id and product");
    });
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* BreadCrumb Component */}
      <div className="mt-16 pt-2">
        <BreadCrumb />
      </div>

      {/* Image View */}

      <div className="flex flex-col justify-center items-center">
        {product?.cover && (
          <Tabs defaultValue="product" className="w-full max-w-6xl">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="product">Product</TabsTrigger>
              <TabsTrigger value="documentation">Documentation</TabsTrigger>
            </TabsList>

            {/* Product Share */}
            <div className="flex justify-center items-center">
              <ProductShare
                productUrl={`${product.title}`}
                productImageUrl={product.cover.url}
              />
            </div>



            <TabsContent value="product" className="mt-4">
              <div className="flex gap-2 flex-wrap lg:flex-nowrap">
                <ProductSlider
                  images={product?.thumbnails}
                  cover={product?.cover.url}
                />
                <div className="items-end p-5 m-1 gap-1">
                  <ProductInfo product={product} />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="documentation" className="mt-4">
              <PDFViewer url="/sample.pdf" />
            </TabsContent>
          </Tabs>
        )}
      </div>

      {/* Product Suggection */}
      <h1 className="text-2xl font-bold m-5">You May Also Like</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-5">
        {products
          .filter((product) => product.category === "product suggestions")
          .map((product, index) => (
            <ProductSugg
              key={index}
              cover={product.cover.url}
              title={product.title}
              price={product.price}
            />
          ))}
      </div>
    </>
  );
}

export default ProductPage;
