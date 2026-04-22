import { Navbar } from "@/components/Navbar/Navbar";
import { TrustedBy } from "@/components/Hero/TrustedBy";
import { Button } from "@/components/ui/Button";
import { HeroScanner } from "@/components/Hero/HeroScanner";

export default function Home() {
  return (
    <div className="flex-1 flex flex-col items-center">
      {/* Main Boxed Container */}
      <div className="w-full max-w-[1440px] flex-1 bg-brand-bg rounded-[20px] border border-brand-hero/10 shadow-sm overflow-hidden flex flex-col">

        {/* Navigation Section */}
        <Navbar />

        {/* Hero Section Content Area */}
        <main className="flex-1 flex flex-col items-center pt-16 px-12 text-center pb-40">

          {/* Trusted By Section */}
          <TrustedBy />

          {/* Headline Section */}
          <div className="max-w-[800px] mx-auto mb-8">
            <h1 className="text-[70px] font-semibold  leading-[1.1] tracking-[-2px] text-brand-primary text-balance">
              The Safest Way to Shop for Groceries
            </h1>
          </div>

          {/* Subheadline Section */}
          <div className="max-w-[540px] mx-auto mb-10">
            <p className="text-[18px] font-medium leading-[26px] text-brand-normal/80 text-balance">
              Use the Olive Food Scanner App to Instantly Eliminate Harmful Ingredients from Your Family&#39;s Diet and Get Expert-Backed Food Insights
            </p>
          </div>

          {/* Download Button */}
          <Button href="https://apps.apple.com/us/app/olive-holistic-food-scanner/id6739765789" className="gap-2.5 px-8 py-4 mb-20">
            <svg viewBox="0 0 384 512" width="18" height="18" fill="currentColor">
              <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
            </svg>
            Download for iOS
          </Button>

          {/* Hero Scanner Visual */}
          <HeroScanner />

        </main>
      </div>
    </div>
  );
}
