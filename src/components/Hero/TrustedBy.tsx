import Image from "next/image";

const AVATARS = [
  "/ImgAssets/image_1.png",
  "/ImgAssets/image_3.png",
  "/ImgAssets/image_5.png",
  "/ImgAssets/image_7.png",
];

export const TrustedBy = () => {
  return (
    <div className="flex items-center gap-3 mb-12">
      {/* Avatar Stack */}
      <div className="flex -space-x-3">
        {AVATARS.map((src, i) => (
          <div
            key={i}
            className="relative w-10 h-10 rounded-full border-2 border-white overflow-hidden shadow-sm"
          >
            <Image
              src={src}
              alt={`Happy User ${i + 1}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
        {/* Count Badge */}
        <div className="relative w-10 h-10 rounded-full border-2 border-white bg-brand-bg flex items-center justify-center shadow-sm">
          <span className="text-xs font-bold text-brand-primary">3k+</span>
        </div>
      </div>

      {/* Social Proof Text */}
      <span className="text-sm font-normal text-brand-hero opacity-80">
        Trusted by thousands of healthy families
      </span>
    </div>
  );
};
