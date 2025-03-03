"use cilent";
import React from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import Image from "next/image";

const productCard = ({ title, price, cover, onClick }) => {
  return (
    <Card className="overflow-hidden border-none shadow-none">
      <div onClick={onClick} className="flex justify-center relative">
        <CardHeader>
          <Image
            width={1024}
            height={720}
            src={cover}
            alt={title}
            className="rounded-lg cursor-pointer transition-all duration-200 hover:scale-110 hover:brightness-35"
          />
        </CardHeader>
        <div className="image-shadow"></div>
      </div>
      <div className="p-1 py-1">
        <CardContent>
          <h2 className="text-xl font- text-gray-600 cursor-pointer">
            {title}
          </h2>
          <p>{price}</p>
        </CardContent>
      </div>
    </Card>
  );
};

export default productCard;
