import * as React from "react"
import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import ProductPdf from './productPdfView'
import ProductVideo from './productVideo'

export function ProductSlider() {
  // Temporary array with 3 sample images
  const sampleProducts = [
    {
      title: "Sunbeam Tote Jeff",
      cover: "/images/Sunbeam_Tote_Jeff.jpg",
    },
    {
      title: "Chestnut Carryall Bag",
      cover: "/images/Chestnut_Carryall_Bag.jpg",
    },
    {
      title: "Tech Gear Pouch",
      cover: "/images/Tech_Gear_Pouch.png",
    },
    {
      title: "Luxury Evening Clutch",
      cover: "/images/Luxury_Evening_Clutch.png",
    },
  ]

  return (
    <div className="flex justify-center mt-4">
      <Carousel
        opts={{ align: "start" }}
        className="w-full max-w-[900px]"
      >
        <CarouselContent>
          {sampleProducts.map((product, index) => (
            <CarouselItem key={index} className="basis-1/3 flex justify-center">
              <div className="p-1 w-full">
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
          <CarouselItem className="basis-1/3 flex justify-center">
            <div className="p-1 w-full">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center rounded-lg p-0 bg-gray-100">
                  <ProductPdf />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>

          {/* Product Video View Slide */}
          <CarouselItem className="basis-1/3 flex justify-center">
            <div className="p-1 w-full">
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
