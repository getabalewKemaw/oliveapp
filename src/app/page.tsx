import { Navbar } from "@/components/Navbar/Navbar";
import { TrustedBy } from "@/components/Hero/TrustedBy";
import { Button } from "@/components/ui/Button";
import { Apple } from "lucide-react";

export default function Home() {
  return (
    <div className="flex-1 flex flex-col items-center">
      {/* Main Boxed Container */}
      <div className="w-full max-w-[1440px] flex-1 bg-brand-bg rounded-[20px] border border-brand-hero/10 shadow-sm overflow-hidden flex flex-col">
        
        {/* Navigation Section */}
        <Navbar />

        {/* Hero Section Content Area */}
        <main className="flex-1 flex flex-col items-center pt-16 px-12 text-center">

          {/* Trusted By Section */}
          <TrustedBy />

          {/* Headline Section */}
          <div className="max-w-[672px] mx-auto mb-8">
            <h1 className="text-5xl font-semibold leading-tight tracking-[-0.9px] text-brand-primary text-balance">
              The Safest Way to Shop for Groceries
            </h1>
          </div>

          {/* Subheadline Section */}
          <div className="max-w-[480px] mx-auto mb-10">
            <p className="text-base leading-relaxed text-brand-hero/70 text-balance">
              Use the Olive Food Scanner App to Instantly Eliminate Harmful Ingredients from Your Family&#39;s Diet and Get Expert-Backed Food Insights
            </p>
          </div>

          {/* Download Button */}
          <Button href="https://apps.apple.com/us/app/olive-holistic-food-scanner/id6739765789" className="gap-2 mb-20">
            <Apple size={18} fill="white" />
            Download for iOS
          </Button>

          {/* App Image Section Placeholder */}
          <div className="relative w-full max-w-[800px] aspect-[16/9] bg-brand-hero/5 rounded-t-[40px] animate-pulse mx-auto flex items-end justify-center">
            <div className="w-[300px] h-full bg-brand-hero/5 rounded-t-[60px] border-x-8 border-t-8 border-white/20" />
          </div>

        </main>
      </div>
    </div>
  );
}
