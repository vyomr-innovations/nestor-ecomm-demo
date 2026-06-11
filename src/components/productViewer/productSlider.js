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
import { Play } from "lucide-react";
import ProductVideo from "./productVideo";
import ImageView from "../imageView";

/** Large main view area */
const renderMainView = (view) => {
  if (view?.type === "video") {
    return <ProductVideo url={view.url} />;
  }
  return <ImageView cover={view?.url} />;
};

/** Small thumbnail — video shows first frame + play icon overlay */
const ThumbnailItem = ({ image }) => {
  if (image.type === "video") {
    return (
      <div className="relative w-full h-full">
        <video
          src={image.url}
          className="w-full h-full object-cover rounded"
          muted
          preload="metadata"
          onLoadedMetadata={(e) => { e.target.currentTime = 0.1; }}
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/30 rounded">
          <Play className="w-4 h-4 text-white fill-white" />
        </div>
      </div>
    );
  }
  return (
    <img
      src={image?.url}
      alt={image?.name || "product"}
      className="w-full h-full object-contain block rounded"
    />
  );
};

export default function ProductSlider({ images, cover }) {
  const [currentView, setCurrentView] = React.useState({ type: "image", url: cover });

  const allThumbnails =
    images && images.length > 0
      ? images
      : [{ url: cover, type: "image" }];

  return (
    <div className="flex items-center justify-center flex-col">
      {/* Main viewer */}
      {renderMainView(currentView)}

      {/* Small thumbnail strip — fixed to original size */}
      <div className="flex gap-2 my-2">
        <Carousel opts={{ align: "start" }} className="w-full max-w-sm">
          <CarouselContent className="flex items-center justify-center">
            {allThumbnails.map((image, index) => (
              <CarouselItem
                key={index}
                className="md:basis-1/2 lg:basis-1/3"
              >
                <div className="p-1" onClick={() => setCurrentView(image)}>
                  <Card
                    className={`cursor-pointer hover:ring-2 hover:ring-primary transition-all ${
                      currentView.url === image.url ? "ring-2 ring-primary" : ""
                    }`}
                  >
                    <CardContent className="p-1">
                      <ThumbnailItem image={image} />
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
    </div>
  );
}
