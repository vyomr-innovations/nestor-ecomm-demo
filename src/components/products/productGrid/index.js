"use cilent"
import React from 'react'
import { Card, CardHeader, CardContent } from "@/components/ui/card"
import Image from 'next/image'

const ProductGrid = ({ title, price, cover }) => {
  return (
    <>
      <main>
        <div>
          <Card className="overflow-hidden border-none shadow-none">
            <div className="flex justify-center relative">
              <CardHeader>
                <Image width={700} height={700} src={cover} alt={title} className='rounded-lg cursor-pointer transition-all duration-200 hover:scale-110 hover:brightness-35' />
              </CardHeader>
              <div className='image-shadow'></div>
            </div>
            <div className="p-1 py-1">
              <CardContent >
                <h2 className="text-xl font-bold text-gray-700 cursor-pointer">{title}</h2>
                <p>{price}</p>
              </CardContent>
            </div>
          </Card>
        </div>
      </main>
    </>
  )

}

export default ProductGrid;
