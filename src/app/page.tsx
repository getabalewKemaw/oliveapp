import { Navbar } from "@/components/Navbar/Navbar";
import { TrustedBy } from "@/components/Hero/TrustedBy";

export default function Home() {
  return (
    <div className="flex-1 flex flex-col items-center">
      {/* Main Boxed Container */}
      <div className="w-full max-w-[1440px] flex-1 bg-brand-bg rounded-[20px] border border-[#E0E7E1] shadow-sm overflow-hidden flex flex-col">
        
        {/* Navigation Section */}
        <Navbar />

        {/* Hero Section Content Area */}
        <main className="flex-1 flex flex-col items-center pt-12 px-12 text-center">

          {/* Trusted By Section */}
          <TrustedBy />

          {/* Headline Section */}
          <div className="max-w-[672px] mx-auto mb-6">
            <h1 className="text-[36px] font-semibold leading-[40px] tracking-[-0.9px] text-brand-primary text-balance">
              The Safest Way to Shop for Groceries
            </h1>
          </div>

          {/* Subheadline Section */}
          <div className="max-w-[500px] mx-auto mb-10">
            <p className="text-[16px] leading-[24px] text-brand-normal/80 text-balance">
              Use the Olive Food Scanner App to Instantly Eliminate Harmful Ingredients from Your Family's Diet and Get Expert-Backed Food Insights
            </p>
          </div>

          {/* Button Placeholder */}
          <div className="w-56 h-14 bg-[#505E41]/5 rounded-full animate-pulse mx-auto mb-20" />

          {/* App Image Section Placeholder */}
          <div className="relative w-full max-w-[800px] aspect-[16/9] bg-[#505E41]/5 rounded-t-[40px] animate-pulse mx-auto flex items-end justify-center">
            {/* Phone Shape Placeholder */}
            <div className="w-[300px] h-full bg-[#505E41]/5 rounded-t-[60px] border-x-8 border-t-8 border-white/20" />
          </div>

        </main>
      </div>
    </div>
  );
}
