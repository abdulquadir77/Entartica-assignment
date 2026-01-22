// import React from 'react'

import LoactionCard from "../cards/LoactionCard";

const videoPlay =
  "https://d22pimhl2qmbj7.cloudfront.net/public/Desktop_WONDERLA_Signature_Video_16x9_53417e3f1d.mp4";

const TopSectionVideoPlay = () => {
  return (
    <section className="relative h-[100vh] w-full ">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="h-full w-full object-cover"
        >
          <source src={videoPlay} type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/35" />
      </div>

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <h1 className="text-secondary text-[28px] font-black uppercase leading-tight sm:text-[40px] md:text-[52px] lg:text-[64px]">
          INDIA'S LARGEST <br />
          AMUSEMENT PARK CHAIN!
        </h1>

        <p className="mt-3 text-sm font-semibold text-white sm:text-base">
          CHEERS TO 25 YEARS OF SMILES, MEMORIES, AND JOY 🎉
        </p>
      </div>

      <div className="absolute bottom-[-120px] left-0 z-20 w-full">
        <div className="mx-auto max-w-7xl px-4">
          <p className="mb-4 text-center text-sm font-bold uppercase text-secondary">
            Select Your Wonder Park
          </p>

          <div className="flex justify-center">
           <LoactionCard/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopSectionVideoPlay;
