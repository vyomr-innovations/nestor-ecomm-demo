"use client";
import React, { useRef, useState } from "react";

function ProductVideo({ url }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (isPlaying) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <video
      ref={videoRef}
      className="aspect-square max-w-100 h-100 block rounded"
      onClick={togglePlay}
    >
      <source src={url} type="video/mp4" />
    </video>
  );
}

export default ProductVideo;
