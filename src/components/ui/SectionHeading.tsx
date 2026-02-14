"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface SectionHeadingProps {
  title: string;
  label?: string;
  subtitle?: string;
  gold?: boolean;
  centered?: boolean;
  className?: string;
}

export function SectionHeading({
  title,
  label,
  subtitle,
  gold = false,
  centered = true,
  className,
}: SectionHeadingProps) {
  const topLabel = label || subtitle;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(centered && "text-center", className)}
    >
      {topLabel && (
        <p className="text-primary text-sm font-medium uppercase tracking-[0.2em] mb-4">
          {topLabel}
        </p>
      )}
      <h2
        className={cn(
          "text-display font-serif font-bold",
          gold ? "text-primary" : "text-foreground"
        )}
      >
        {title}
      </h2>
      {label && subtitle && (
        <p className="text-neutral-500 mt-4 max-w-2xl mx-auto">{subtitle}</p>
      )}
    </motion.div>
  );
}
