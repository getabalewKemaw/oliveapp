"use client";

export const HeroScanner = () => {
  return (
    /* Relative positioning in the natural flow, centered */
    <div className="relative w-[300px] mt-4 translate-y-8">

      {/* iPhone Frame: thin silver outer → thin dark bezel → white screen */}
      <div className="relative w-full aspect-[9/19.5] rounded-[50px] p-[4px] shadow-[0_40px_80px_-10px_rgba(0,0,0,0.15)]"
        style={{ background: "linear-gradient(145deg, #d6d6d6, #e8e8e8, #c8c8c8)" }}>

        {/* Dark Bezel */}
        <div className="w-full h-full bg-[#1C1C1E] rounded-[46px] p-[3px]">

          {/* Pure White Screen */}
          <div className="relative w-full h-full bg-white rounded-[44px] overflow-hidden flex flex-col">

            {/* Dynamic Island */}
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-50" />

            {/* Empty Screen Body — ready for content */}
            <div className="flex-1 pt-12 px-4 pb-4">

              {/* Header zone placeholder */}
              <div className="w-full h-[150px] bg-brand-bg/40 rounded-2xl mb-5" />

              {/* Product row placeholder */}
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 bg-brand-bg/40 rounded-xl flex-shrink-0" />
                <div className="flex-1 space-y-2">
                  <div className="w-full h-3 bg-brand-bg/40 rounded" />
                  <div className="w-2/3 h-3 bg-brand-bg/30 rounded" />
                </div>
              </div>

              {/* Score placeholder */}
              <div className="flex items-center gap-2 mb-5">
                <div className="w-4 h-4 rounded-full bg-brand-bg/40" />
                <div className="w-16 h-4 bg-brand-bg/40 rounded" />
              </div>

              {/* Insight box placeholder */}
              <div className="w-full h-28 bg-brand-bg/30 rounded-2xl mb-5" />

              {/* Breakdown label placeholder */}
              <div className="w-20 h-3 bg-brand-bg/40 rounded" />

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
