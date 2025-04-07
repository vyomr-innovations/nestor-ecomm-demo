/* eslint-disable @next/next/no-img-element */
import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"

export default function ProductSlider({ images }) {
  const renderContent = () => {
    if (images.length == 1 || images.length == 2) {
      return <CarouselContent className="flex items-center justify-center">
        {images?.map((image, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="p-1">
                  <img src={image} alt={image} className="max-w-100 h-auto block rounded object-scale-down" />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    } else {
      return <CarouselContent>
        {images?.map((image, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="p-1">
                  <img src={image} alt={image} className="max-w-100 h-auto block rounded object-scale-down" />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    }
  }
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-sm"
    >

      <CarouselContent className="flex items-center justify-center">
        {renderContent()}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
