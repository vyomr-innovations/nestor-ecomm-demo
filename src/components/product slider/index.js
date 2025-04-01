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
import ProductPdf from '../product pdf view'
import ProductVideo from '../product Video'


function ProductSlider() {
  const filteredProducts = products.filter(product => product.title === "Sunbeam Tote Jeff")

  return (
    <div>
      <Carousel className="w-[270px] h-[270px] mt-2">
        <CarouselContent>
          {filteredProducts.map((product, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-0 rounded-lg bg-gray-100">
                    <Image
                      src={product.cover}
                      alt={product.title}
                      height={230}
                      width={230}
                      className="object-contain cursor-pointer rounded-lg"
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}

          {/* Product PDF View Slide */}
          <CarouselItem>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center rounded-lg p-0 bg-gray-100">
                  <ProductPdf />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>

          {/* Product Video View Slide */}
          <CarouselItem>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-0 rounded-lg bg-gray-100">
                  <ProductVideo />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}

export default ProductSlider;
