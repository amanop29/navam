"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface GoldButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "filled" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  icon?: boolean;
  className?: string;
  type?: "button" | "submit";
}

export function GoldButton({
  children,
  href,
  onClick,
  variant = "filled",
  size = "md",
  icon = false,
  className,
  type = "button",
}: GoldButtonProps) {
  const sizeClasses = {
    sm: "px-5 py-2 text-xs",
    md: "px-8 py-3 text-sm",
    lg: "px-10 py-4 text-base",
  };

  const variantClasses = {
    filled:
      "bg-gold-gradient text-brown-800 font-semibold hover:shadow-gold-glow-lg",
    outline:
      "border border-gold/40 text-gold hover:bg-gold/10 hover:border-gold",
    ghost: "text-gold hover:bg-gold/10",
  };

  const baseClasses = cn(
    "rounded-full inline-flex items-center gap-2 transition-all duration-300 hover:scale-105 active:scale-95",
    sizeClasses[size],
    variantClasses[variant],
    className
  );

  const content = (
    <>
      {children}
      {icon && (
        <span className="w-8 h-8 rounded-full bg-brown-800/20 flex items-center justify-center">
          <ArrowUpRight className="w-4 h-4" />
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Link href={href} className={baseClasses}>
          {content}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      type={type}
      className={baseClasses}
    >
      {content}
    </motion.button>
  );
}
