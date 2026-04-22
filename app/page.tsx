export default function Home() {
  return (
    <div className="flex-1 flex flex-col items-center">
      {/* Main Boxed Container */}
      <div className="w-full max-w-[1440px] flex-1 bg-hero-bg rounded-[20px] border border-[#E0E7E1] shadow-sm overflow-hidden flex flex-col">

        {/* Navigation Section Placeholder */}
        <header className="w-full h-24 flex items-center px-12">
          {/* Logo Placeholder */}
          <div className="w-32 h-10 bg-[#505E41]/5 rounded-lg animate-pulse" />

          {/* Nav Links Placeholder */}
          <div className="flex-1 flex justify-center gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="w-20 h-4 bg-[#505E41]/5 rounded-full animate-pulse" />
            ))}
          </div>

          {/* CTAs Placeholder */}
          <div className="flex items-center gap-6">
            <div className="w-16 h-4 bg-[#505E41]/5 rounded-full animate-pulse" />
            <div className="w-32 h-12 bg-[#505E41]/5 rounded-full animate-pulse" />
          </div>
        </header>

        {/* Hero Section Content Area */}
        <main className="flex-1 flex flex-col items-center pt-12 px-12 text-center">

          {/* Trusted By Section */}
          <div className="mb-8 w-64 h-8 bg-[#505E41]/5 rounded-full animate-pulse mx-auto" />

          {/* Headline Section */}
          <div className="space-y-4 mb-8">
            <div className="w-[600px] h-16 bg-[#505E41]/5 rounded-2xl animate-pulse mx-auto" />
            <div className="w-[500px] h-16 bg-[#505E41]/5 rounded-2xl animate-pulse mx-auto" />
          </div>

          {/* Subheadline Section */}
          <div className="space-y-2 mb-12">
            <div className="w-[450px] h-4 bg-[#505E41]/5 rounded-full animate-pulse mx-auto" />
            <div className="w-[400px] h-4 bg-[#505E41]/5 rounded-full animate-pulse mx-auto" />
            <div className="w-[350px] h-4 bg-[#505E41]/5 rounded-full animate-pulse mx-auto" />
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
