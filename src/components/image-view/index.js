/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
function ImageView() {
    return (
        <div className="flex justify-between items-start gap-1 mt-8">
            <div className='cursor-pointer'>
                <Image
                    src="/images/Sunbeam_Tote_Jeff.jpg"
                    width={2000}
                    height={2500}
                    unoptimized
                    className=""
                    alt="Image view"
                ></Image>
            </div>
            <div className='items-end p-5 m-1 gap-1'>
                <h1 className='text-3xl font-bold'>Sunbeam Tote Jeff</h1>
                <h2 className='text-2xl text-gray-500'>$25.00</h2>

                <p className='mt-5'>Brighten your day with this cheerful yellow bag. Its vibrant color and ample
                    storage space make it an excellent choice for shopping or day trips. Lightweight
                    and durable, it's designed for comfort and convenience.
                </p>

                <Button className='rounded-full h-10 w-full p-2 mt-7 text-lg'>Add to cart</Button>

            </div>
        </div>
    )
}
export default ImageView
