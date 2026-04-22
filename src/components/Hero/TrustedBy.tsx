import Image from "next/image";

const AVATARS = [
  "/ImgAssets/image_1.png",
  "/ImgAssets/image_3.png",
  "/ImgAssets/image_5.png",
  "/ImgAssets/image_7.png",
  "/ImgAssets/image_9.png",
];

export const TrustedBy = () => {
  return (
    <div className="flex items-center gap-3 mb-10 bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full border border-brand-primary/5 shadow-sm transition-all hover:scale-105 cursor-default">
      {/* Avatar Stack */}
      <div className="flex -space-x-3">
        {AVATARS.map((src, i) => (
          <div
            key={i}
            className="relative w-8 h-8 rounded-full border-2 border-white overflow-hidden shadow-sm"
          >
            <Image
              src={src}
              alt={`Happy User ${i + 1}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {/* Social Proof Text */}
      <span className="text-xs font-medium text-brand-hero tracking-tight">
        Trusted by <span className="text-brand-primary font-bold">10,000+</span> healthy families
      </span>
    </div>
  );
};
