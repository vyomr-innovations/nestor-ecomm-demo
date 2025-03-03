/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Image from 'next/image';

function ImageView() {
    return (
        <Image
            src="/images/Sunbeam_Tote_Jeff.jpg"
            width={1800}
            height={1800}
            unoptimized
            className='cursor-pointer rounded-md'
            alt="Image view"
        />
    )
}
export default ImageView;
