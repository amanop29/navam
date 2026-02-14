"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  hover?: boolean;
  glow?: boolean;
  className?: string;
}

export function GlassCard({
  children,
  hover = false,
  glow = false,
  className,
  ...props
}: GlassCardProps) {
  return (
    <motion.div
      className={cn(
        "bg-white border border-cream-300 rounded-2xl shadow-soft",
        hover && "transition-all duration-300 hover:shadow-card hover:border-cream-400",
        glow && "hover:shadow-elevated",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
}
