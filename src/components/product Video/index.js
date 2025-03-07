import React from 'react';

function ProductVideo() {
    return (
        <video width="235" height="500" controls muted
            className='rounded-lg m-4 bg-black'>
            <source src="/video/product-video.mp4" type="video/mp4" />
        </video>
    );
}

export default ProductVideo;
