"use client";

export const HeroScanner = () => {
  return (
    <div className="relative w-full h-[520px]">
      
      {/* Background Visual Depth (Clean Empty Cards) */}
      <div className="absolute inset-0 flex items-center justify-center -z-10 pointer-events-none">
        <div className="absolute left-[12%] top-[20%] w-24 h-24 bg-white/40 rounded-2xl border border-white/20 backdrop-blur-md opacity-30 -rotate-6 shadow-sm" />
        <div className="absolute left-[8%] bottom-[30%] w-20 h-20 bg-white/40 rounded-2xl border border-white/20 backdrop-blur-md opacity-20 rotate-12 shadow-sm" />
        <div className="absolute right-[12%] top-[25%] w-24 h-24 bg-white/40 rounded-2xl border border-white/20 backdrop-blur-md opacity-30 rotate-12 shadow-sm" />
        <div className="absolute right-[8%] bottom-[25%] w-20 h-20 bg-white/40 rounded-2xl border border-white/20 backdrop-blur-md opacity-20 -rotate-12 shadow-sm" />
      </div>

      {/* Main Phone Wrapper */}
      <div className="absolute bottom-0 right-8 w-[280px] group">
        
        {/* iPhone Outer Frame (Brand Hero Color) */}
        <div className="relative w-full aspect-[9/19.5] bg-[#E2E2E2] rounded-[55px] p-[3px] shadow-[0_30px_80px_-10px_rgba(0,0,0,0.12)] overflow-hidden">
          
          {/* Inner Black Bezel */}
          <div className="w-full h-full bg-black rounded-[52px] p-2">
            
            {/* Display Screen (Pure White) */}
            <div className="relative w-full h-full bg-white rounded-[44px] overflow-hidden flex flex-col">
              
              {/* Dynamic Island */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-28 h-7 bg-black rounded-full z-50 flex items-center justify-end px-4">
                 <div className="w-2 h-2 rounded-full bg-white/10" />
              </div>

              {/* Empty UI Skeleton (Ready for data) */}
              <div className="flex-1 pt-12 px-5">
                
                {/* Header Section Placeholder */}
                <div className="w-full h-[180px] bg-brand-bg/30 rounded-3xl mb-8 border border-brand-primary/5" />

                {/* Product Info Placeholder */}
                <div className="flex items-start gap-4 mb-8">
                  <div className="w-16 h-16 bg-brand-bg/30 rounded-2xl flex-shrink-0" />
                  <div className="flex-1 space-y-2 mt-1">
                    <div className="w-full h-4 bg-brand-bg/30 rounded-md" />
                    <div className="w-2/3 h-3 bg-brand-bg/20 rounded-md" />
                  </div>
                </div>

                {/* Score Placeholder */}
                <div className="flex items-center gap-3 mb-8">
                   <div className="w-5 h-5 rounded-full bg-brand-bg/40" />
                   <div className="w-20 h-6 bg-brand-bg/30 rounded-lg" />
                </div>

                {/* Insight Box Placeholder */}
                <div className="w-full h-32 bg-brand-bg/20 rounded-3xl border border-brand-primary/5" />

                {/* Content Divider */}
                <div className="w-24 h-4 bg-brand-bg/40 rounded-lg mt-8" />

              </div>
            </div>
          </div>
        </div>

        {/* Home Indicator Bar */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-32 h-1.5 bg-black/10 rounded-full z-50" />
      </div>
    </div>
  );
};
