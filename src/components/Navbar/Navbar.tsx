"use client";

import Link from "next/link";
import { NAV_LINKS } from "@/constants/nav";
import { NavDropdown } from "@/components/Navbar/NavDropdown";
import { Button } from "@/components/ui/Button";
import { ChevronDown } from "lucide-react";

export const Navbar = () => {
  return (
    <header className="w-full h-24 flex items-center justify-between px-12 relative z-50">
      {/* Logo */}
      <Link href="/" className="flex-shrink-0">
        <img
          src="/ImgAssets/logoimg.svg"
          alt="Olive Logo"
        />
      </Link>

      {/* Navigation Links (Centered) */}
      <nav className="hidden lg:flex flex-1 justify-center items-center gap-1">
        {NAV_LINKS.map((link) => (
          <div key={link.label} className="group relative">
            <Link
              href={link.href}
              className="px-4 py-2 text-sm font-medium text-brand-normal hover:text-black flex items-center gap-1 transition-colors"
            >
              {link.label}
              {link.dropdownItems && (
                <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
              )}
            </Link>

            {link.dropdownItems && (
              <NavDropdown
                items={link.dropdownItems}
                image={link.dropdownImage}
              />
            )}
          </div>
        ))}
      </nav>

      {/* CTAs */}
      <div className="flex items-center gap-6">
        <Link
          href="/sign-in"
          className="text-sm font-medium text-brand-normal hover:text-black transition-colors"
        >
          Sign in
        </Link>
        <Button href="/get-olive" className="gap-2">
          Get Olive
          <span className="text-base">→</span>
        </Button>
      </div>
    </header>
  );
};
