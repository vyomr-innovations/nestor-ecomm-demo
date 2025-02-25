import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="w-full h-[500px] bg-[#F7F5F6] rounded-lg flex gap-4 overflow-hidden my-2">
      <div className="flex flex-col gap-3 text-left p-32 px-28 space-y-2">
        <h1 className="text-4xl font-bold">
          Discover our <br />
          Curated Collection
        </h1>
        <p className="text-gray-600">
          Explore our carefully selected products for your home and lifestyle.
        </p>
        <Button className=" w-50 self-start p-5 font-bold rounded-full">Shop Now</Button>
      </div>
      <div className="flex flex-col gap-3 text-left">
        <Image
          src="/images/cup_banner.avif"
          width={600}
          height={100}
          unoptimized
          className="max-w-full h-auto object-scale-down"
          alt="banner cup"
        />
      </div>
    </div>
  );
};

export default Banner;
