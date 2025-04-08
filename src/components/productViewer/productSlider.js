/* eslint-disable @next/next/no-img-element */
import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { PDFViewer } from "@/components/PDFViewer";
import ProductVideo from "./productVideo";
import ImageView from "../imageView";

const renderMainView = (view) => {
  if (view.type === "video") {
    return <ProductVideo url={view.url} />;
  } else if (view.type === "pdf") {
    return <PDFViewer url={view.url} />;
  } else {
    return <ImageView cover={view.url} />;
  }
};

const renderFormatView = (type, image) => {
  if (type === "video") {
    return <ProductVideo url={image.url} />;
  } else {
    return (
      <img
        src={image?.url}
        alt={type}
        className="max-w-100 h-auto block rounded object-scale-down"
      />
    );
  }
};
export default function ProductSlider({ images, cover }) {
  const [currentView, setCurrentView] = React.useState({ type: 'image', url: cover });
  const renderContent = () => {
    if (images.length < 3) {
      return (
        <CarouselContent className="flex items-center justify-center">
          {images?.map((image, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1" onClick={() => setCurrentView(image)}>
                <Card className="cursor-pointer hover:ring-2 hover:ring-primary transition-all">
                  <CardContent className="p-1">
                    {renderFormatView(image.type, image)}
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      );
    } else {
      console.log(images, images.length);
      return (
        <CarouselContent>
          {images?.map((image, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1" onClick={() => setCurrentView(image)}>
                <Card className="cursor-pointer hover:ring-2 hover:ring-primary transition-all">
                  <CardContent className="p-1">
                    {renderFormatView(image.type, image)}
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      );
    }
  };
  return (
    <div className="flex items-center justify-center flex-col">
      {renderMainView(currentView)}
      <div className="flex gap-2 my-2 ">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full max-w-sm"
        >
          <CarouselContent>{renderContent()}</CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}
