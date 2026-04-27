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


  return (
    /* Relative positioning in the natural flow, centered */
    <div className="relative w-[400px] mt-0 translate-y-8">

      {/* iPhone Frame: Reduced height (aspect-square + extra) for better clipping */}
      <div className="relative w-full aspect-[9/16] rounded-[50px] p-[2px] shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)] bg-[#E2E2E2] border-[9px] border-gray-300">

        {/* Pure White Screen - Now sits directly inside the silver frame */}
        <div className="relative w-full h-full bg-white rounded-[38px] flex flex-col">

            {/* Dynamic Island */}
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-50" />

            {/* Content Area */}
            <div className="relative flex-1 flex flex-col pt-10">

              {/* Carousel Container (Top Images) - Slide from right to left */}
              <div className="relative w-full h-[160px] flex items-center justify-center z-20">
                {SCAN_PAIRS.map((pair, index) => {
                  // Calculate position relative to currentIndex
                  // Handle wrapping for infinite feel
                  let diff = index - currentIndex;
                  if (diff > 1) diff -= SCAN_PAIRS.length;
                  if (diff < -1) diff += SCAN_PAIRS.length;

                  // Determine position and style
                  const isActive = diff === 0;
                  const isPrev = diff === -1;
                  const isNext = diff === 1;

                  // If it's not one of these 3, we hide it or keep it far away
                  const isVisible = isActive || isPrev || isNext;

                  return (
                    <div
                      key={index}
                      className="absolute transition-all duration-1000 ease-in-out"
                      style={{
                        transform: `translateX(${diff * 220}px) scale(${isActive ? 1 : 0.65})`,
                        opacity: isActive ? 1 : 0.4,
                        filter: isActive ? "none" : "blur(4px)",
                        zIndex: isActive ? 30 : 20,
                        visibility: isVisible ? "visible" : "hidden",
                      }}
                    >
                      <div className={`w-[150px] h-[150px] rounded-[35px] overflow-hidden ${isActive ? "shadow-2xl" : ""} bg-white`}>
                        <Image
                          src={pair.top}
                          alt={`Scan ${index}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Bottom Image (The Result Card) - Kept inside with its own clipping */}
              <div className="relative flex-1 -mt-4 z-10 overflow-hidden rounded-b-[38px]">
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
  );
};
