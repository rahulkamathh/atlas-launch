"use client";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export function Button({ variant = "primary", size = "md", className, children, ...props }: ButtonProps) {
  const variants = {
    primary: "bg-atlas-charcoal text-white hover:bg-atlas-slate shadow-sm",
    secondary: "bg-white text-atlas-charcoal border border-atlas-border hover:border-atlas-green hover:text-atlas-green",
    ghost: "text-atlas-charcoal hover:text-atlas-green hover:bg-atlas-green-muted",
  };
  const sizes = {
    sm: "text-sm px-4 py-2 h-9",
    md: "text-[15px] px-6 py-2.5 h-11",
    lg: "text-base px-8 py-4 h-14",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className={cn(
        "inline-flex items-center justify-center font-medium rounded-full cursor-pointer",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-atlas-green focus-visible:ring-offset-2",
        "transition-colors duration-200",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
}
