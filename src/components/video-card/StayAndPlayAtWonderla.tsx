// import React from 'react'
import { useRef, useState } from "react";
import { FaPlay } from "react-icons/fa";

const StayAndPlayAtWonderla = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      videoRef.current.controls = true;
      setIsPlaying(true);
    }
  };
  return (
    <div className="px-6 py-6">
      <div
        className="
        
    text-center
    text-[40px]
    
    pb-8
    sm:text-[46px]
    md:text-[51px]
    lg:text-6xl
    font-black
    uppercase
    !leading-[38px]
    sm:!leading-[45px]
    md:!leading-[51px]
    lg:!leading-[60px]
    tracking-[-0.04em]
    text-textColor
    [&>b]:text-secondary
    [&>b]:text-6xl
  "
      >
        <b>Stay &amp; Play</b>
        <br />
        at Wonderla
      </div>

      <div className="relative w-full h-[500px]  rounded-3xl overflow-hidden">
        {/* Video */}
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
        >
          <source
            src="https://d22pimhl2qmbj7.cloudfront.net/public/WONDERLA_Stay_at_Resort_232356a494.mp4"
            type="video/mp4"
          />
        </video>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Play Button */}
        {!isPlaying && (
          <button
            onClick={handlePlay}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-lg">
              <FaPlay className="text-blue-600 text-xl ml-1" />
            </div>
          </button>
        )}

        {/* Text Content */}
        <div className="absolute bottom-10 left-10 max-w-xl text-white">
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
            YOUR ALL-IN-ONE <br /> TICKET FOR RIDES <br /> AND RELAXATION!
          </h1>

          <p className="mt-4 text-sm md:text-base text-gray-200">
            Experience a new mashup of comfort and adventure at India’s
            first-ever luxury resort set within an amusement park!
          </p>
        </div>

        {/* CTA Button */}
        <button className="absolute bottom-10 right-10 bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-8 py-3 rounded-full transition">
          Plan Your Stay
        </button>
      </div>
    </div>
  );
};

export default StayAndPlayAtWonderla;
