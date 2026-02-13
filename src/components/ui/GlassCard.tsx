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
        "backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl",
        hover && "transition-all duration-500 hover:bg-white/[0.08] hover:border-white/20",
        glow && "shadow-gold-glow hover:shadow-gold-glow-lg",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
}
