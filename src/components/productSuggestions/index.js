import React from 'react'
import Image from 'next/image';
import { Card, CardFooter } from "@/components/ui/card";
import Link from 'next/link';

function ProductSugg({ cover, title, price }) {
    return (
        <>
            <div className='flex items-center m-2'>
                <Card className="border-none w-50 shadow-md hover:scale-105 transition-transform duration-300">
                    <Image
                        src={cover}
                        width={300}
                        height={300}
                        className='max-w-100 rounded-lg cursor-pointer'
                        unoptimized
                        alt="Image-view"
                    />
                    <CardFooter>
                        <div className="flex flex-col p-1 m-1">
                            <Link href={`/products/${title.replace(/\s+/g, '-')}`} className='no-underline'>
                                <h3 className='font-semibold text-lg hover:text-blue-600'>{title}</h3>
                            </Link>
                            <p>{price}</p>
                        </div>
                    </CardFooter>
                </Card>
            </div>
        </>
    )
}

export default ProductSugg;
