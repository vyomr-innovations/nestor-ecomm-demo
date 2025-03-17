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

function ProductSlider() {
  const filteredProducts = products.filter(product => product.title === "Sunbeam Tote Jeff")

  return (
    <div>
      <Carousel className="w-full max-w-xs mt-2">
        <CarouselContent>
          {filteredProducts.map((product, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-0 bg-black rounded-lg">
                    <Image
                      src={product.cover}
                      alt={product.title}
                      height={230}
                      width={230}
                      className="object-contain"
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}

export default ProductSlider
