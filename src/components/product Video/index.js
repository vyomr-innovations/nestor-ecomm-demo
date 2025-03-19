"use client"
import React, { useRef, useState } from 'react';

function ProductVideo() {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlay = () => {
        if (isPlaying) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0; // Reset to the start
        } else {
            videoRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <video
            ref={videoRef}
            width="235"
            height="500"
            className="rounded-lg m-4 bg-black cursor-pointer"
            onClick={togglePlay}
        >
            <source src="/video/3_9_2025.mp4" type="video/mp4" />
        </video>
    );
}

export default ProductVideo;
