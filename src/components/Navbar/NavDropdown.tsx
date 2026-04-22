"use client";

import Image from "next/image";
import Link from "next/link";
import { DropdownItem } from "@/types/nav";

interface NavDropdownProps {
  items: DropdownItem[];
  image?: string;
}

export const NavDropdown = ({ items, image }: NavDropdownProps) => {
  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform scale-95 group-hover:scale-100">
      <div className="bg-white rounded-3xl shadow-2xl border border-black/5 overflow-hidden flex min-w-[500px]">
        {/* Left: Menu Items */}
        <div className="flex-1 p-6 grid grid-cols-1 gap-1">
          {items.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="p-4 rounded-2xl hover:bg-brand-bg transition-colors group/item"
            >
              <h4 className="text-sm font-semibold text-brand-normal group-hover/item:text-black">
                {item.title}
              </h4>
              <p className="text-xs text-[#1f1f1f99] mt-1 line-clamp-1">
                {item.description}
              </p>
            </Link>
          ))}
        </div>

        {/* Right: Sidebar Image (Mega Menu Style) */}
        {image && (
          <div className="w-[200px] bg-brand-bg p-4 flex flex-col items-center justify-center text-center border-l border-black/5">
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-4 shadow-sm">
              <Image
                src={image}
                alt="Dropdown preview"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-[10px] font-bold uppercase tracking-wider text-brand-hero opacity-60">
              New Feature
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
