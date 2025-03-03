import React from 'react'
import Image from 'next/image';
import {
    Card,
    CardFooter
} from "@/components/ui/card";
import Link from 'next/link';

function ProductSugg(cover, title, price) {
    return (
        <div className='flex items-center m-2'>
            <Card className="border-none w-50">
                <Image
                    src={cover}
                    width={300}
                    height={300}
                    className='max-w-100 rounded-lg cursor-pointer'
                    unoptimized
                    alt="Image-view"
                />
                <CardFooter>
                    <h3 className='font-bold text-lg p-2 m-2'><Link href={"#"}>{title}</Link></h3>
                    <p>{price}</p>
                </CardFooter>
            </Card>
        </div>
    )
}

export default ProductSugg;
