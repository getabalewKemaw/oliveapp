import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  children: React.ReactNode;
  className?: string;
}

export const Button = ({
  variant = "primary",
  size = "md",
  href,
  children,
  className,
  ...props
}: ButtonProps) => {
  const baseStyles = "inline-flex items-center justify-center rounded-full font-semibold transition-all focus:outline-none disabled:opacity-50 disabled:pointer-events-none";
  
  const variants = {
    primary: "bg-brand-primary text-white hover:opacity-90",
    secondary: "bg-brand-bg text-brand-primary hover:bg-[#E0E7E1]",
    outline: "border border-[#E0E7E1] bg-transparent hover:bg-black/5 text-brand-hero",
    ghost: "bg-transparent hover:bg-black/5 text-brand-hero",
  };

  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-[15px]",
    lg: "px-8 py-4 text-lg",
  };

  const combinedClasses = cn(baseStyles, variants[variant], sizes[size], className);

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
};
