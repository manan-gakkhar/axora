import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

interface IconWrapperProps {
  icon: LucideIcon;
  className?: string;
  gradientFrom?: string;
  gradientTo?: string;
  glowColor?: string;
  size?: number;
  hoverEffect?: boolean;
}

export function IconWrapper({
  icon: Icon,
  className,
  gradientFrom = "from-orange-500",
  gradientTo = "to-amber-500",
  glowColor = "rgba(255, 165, 0, 0.5)",
  size = 24,
  hoverEffect = true
}: IconWrapperProps) {
  const wrapperVariants = {
    initial: { scale: 1 },
    hover: hoverEffect ? { scale: 1.05 } : { scale: 1 }
  };

  const glowVariants = {
    initial: { opacity: 0.5 },
    hover: hoverEffect ? { opacity: 0.8 } : { opacity: 0.5 }
  };

  return (
    <motion.div
      className={cn("relative flex items-center justify-center", className)}
      initial="initial"
      whileHover="hover"
      variants={wrapperVariants}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      {/* Glow Effect */}
      <motion.div 
        className="absolute inset-0 rounded-full blur-lg"
        variants={glowVariants}
        style={{ 
          background: `radial-gradient(circle, ${glowColor} 0%, transparent 70%)`,
          opacity: 0.5
        }}
      />

      {/* Gradient Background */}
      <div className={`w-full h-full rounded-full bg-gradient-to-br ${gradientFrom} ${gradientTo} p-0.5`}>
        <div className="w-full h-full rounded-full bg-black/80 backdrop-blur-sm flex items-center justify-center">
          <Icon size={size} className="text-white" strokeWidth={1.5} />
        </div>
      </div>
    </motion.div>
  );
} 