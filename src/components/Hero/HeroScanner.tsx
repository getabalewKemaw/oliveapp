"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const SCAN_PAIRS = [
  { top: "/ImgAssets/heroScanner/top1.png", bottom: "/ImgAssets/heroScanner/buttom1.png" },
  { top: "/ImgAssets/heroScanner/top2.png", bottom: "/ImgAssets/heroScanner/buttom2.png" },
  { top: "/ImgAssets/heroScanner/top3.png", bottom: "/ImgAssets/heroScanner/buttom3.png" },
  { top: "/ImgAssets/heroScanner/top4.png", bottom: "/ImgAssets/heroScanner/buttom4.png" },
];

export const HeroScanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % SCAN_PAIRS.length);
    }, 4000); // 4 seconds per slide

    return () => clearInterval(interval);
  }, []);

  // Helper to get relative indices for the carousel
  const getIndex = (offset: number) => {
    return (currentIndex + offset + SCAN_PAIRS.length) % SCAN_PAIRS.length;
  };

  return (
    /* Relative positioning in the natural flow, centered */
    <div className="relative w-[400px] mt-0 translate-y-8">

      {/* iPhone Frame: Reduced height (aspect-square + extra) for better clipping */}
      <div className="relative w-full aspect-[9/16] rounded-[50px] p-[4px] shadow-[0_40px_80px_-10px_rgba(0,0,0,0.15)] overflow-hidden"
        style={{ background: "linear-gradient(145deg, #d6d6d6, #e8e8e8, #c8c8c8)" }}>

        {/* Dark Bezel */}
        <div className="w-full h-full bg-[#1C1C1E] rounded-[46px] p-[3px]">

          {/* Pure White Screen */}
          <div className="relative w-full h-full bg-white rounded-[44px] overflow-hidden flex flex-col">

            {/* Dynamic Island */}
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-50" />

            {/* Content Area */}
            <div className="relative flex-1 flex flex-col pt-10 overflow-hidden">
              
              {/* Carousel Container (Top Images) */}
              <div className="relative w-full h-[160px] flex items-center justify-center overflow-visible z-20">
                {/* Previous Image (Left, Blurry, Small) */}
                <div className="absolute left-0 -translate-x-1/2 w-[100px] h-[100px] opacity-20 blur-md scale-75 transition-all duration-1000 ease-in-out">
                  <div className="w-full h-full rounded-[25px] overflow-hidden border border-black/5 bg-white">
                    <Image src={SCAN_PAIRS[getIndex(-1)].top} alt="Prev" fill className="object-cover" />
                  </div>
                </div>

                {/* Current Image (Center, Clear, Large) */}
                <div className="relative w-[150px] h-[150px] z-30 transition-all duration-1000 ease-in-out">
                  <div className="w-full h-full rounded-[35px] overflow-hidden shadow-xl border border-black/5 bg-white">
                    <Image
                      key={currentIndex}
                      src={SCAN_PAIRS[currentIndex].top}
                      alt="Active"
                      fill
                      className="object-cover animate-in fade-in zoom-in duration-700"
                    />
                  </div>
                </div>

                {/* Next Image (Right, Blurry, Small) */}
                <div className="absolute right-0 translate-x-1/2 w-[100px] h-[100px] opacity-20 blur-md scale-75 transition-all duration-1000 ease-in-out">
                  <div className="w-full h-full rounded-[25px] overflow-hidden border border-black/5 bg-white">
                    <Image src={SCAN_PAIRS[getIndex(1)].top} alt="Next" fill className="object-cover" />
                  </div>
                </div>
              </div>

              {/* Bottom Image (The Result Card) */}
              <div className="relative flex-1 -mt-4 z-10">
                <div className="absolute inset-x-0 top-0 h-[140%] transition-all duration-1000 ease-in-out">
                  <Image
                    key={`bottom-${currentIndex}`}
                    src={SCAN_PAIRS[currentIndex].bottom}
                    alt="Result"
                    fill
                    className="object-top object-cover animate-in fade-in slide-in-from-bottom-4 duration-1000"
                  />
                </div>
              </div>

              {/* Home Indicator */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-black/10 rounded-full z-30" />
            </div>
          </div>
        </div>
      </div>

      {/* Extreme Far Left/Right Blurry Cards (Optional visual flair from screenshot) */}
      <div className="absolute -left-20 top-20 w-16 h-16 opacity-5 blur-sm scale-50 -z-10">
         <div className="w-full h-full rounded-2xl bg-white border border-black/5" />
      </div>
      <div className="absolute -right-20 top-20 w-16 h-16 opacity-5 blur-sm scale-50 -z-10">
         <div className="w-full h-full rounded-2xl bg-white border border-black/5" />
      </div>
    </div>
  );
};
