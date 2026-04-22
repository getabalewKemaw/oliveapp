"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export const HeroScanner = () => {
  const [isScanning, setIsScanning] = useState(true);

  return (
    <div className="relative w-full max-w-[1000px] mx-auto mt-20 perspective-1000">
      {/* Background Scanning Scene */}
      <div className="relative w-full aspect-[21/9] rounded-[40px] overflow-hidden border border-brand-primary/5 shadow-2xl">
        <Image
          src="/ImgAssets/image_4.png"
          alt="Scanning Environment"
          fill
          className="object-cover opacity-90 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/80 via-transparent to-transparent" />
      </div>

      {/* Floating iPhone Mockup */}
      <div className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/4 w-[280px] lg:w-[320px] aspect-[9/19.5] z-20 transition-all duration-700 hover:-translate-y-4">
        {/* iPhone Outer Frame */}
        <div className="relative w-full h-full bg-[#1A1A1A] rounded-[50px] p-2.5 border-[6px] border-[#333] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)]">
          {/* iPhone Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#1A1A1A] rounded-b-2xl z-30" />
          
          {/* Phone Screen Content */}
          <div className="relative w-full h-full bg-white rounded-[40px] overflow-hidden">
            <Image
              src="/ImgAssets/image_34.png"
              alt="Olive App Interface"
              fill
              className="object-cover"
            />
            
            {/* Scanning Laser Animation */}
            {isScanning && (
              <div className="absolute inset-x-0 top-0 h-1 bg-green-400 shadow-[0_0_15px_rgba(74,222,128,0.8)] animate-scan z-40" />
            )}
          </div>
        </div>

        {/* Floating Result Badge Placeholder (Small visual flair) */}
        <div className="absolute -right-12 top-1/4 bg-white p-3 rounded-2xl shadow-xl border border-brand-primary/5 animate-bounce-slow">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-red-500" />
            <span className="text-[10px] font-bold text-brand-primary uppercase">Contaminant Detected</span>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes scan {
          0%, 100% { top: 10%; }
          50% { top: 90%; }
        }
        .animate-scan {
          animation: scan 3s ease-in-out infinite;
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};
