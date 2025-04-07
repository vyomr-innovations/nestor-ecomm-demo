import React from 'react'
import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { products } from '@/lib/shopData'
import ProductPdf from './productPdfView'
import ProductVideo from './productVideo'

function ProductSlider() {
  const filteredProducts = products.filter(product => product.title === "Sunbeam Tote Jeff")

  return (
    <div className="flex justify-center mt-4">
      <Carousel className="w-[270px] h-[270px] mt-2">
        

        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}

export default ProductSlider;
