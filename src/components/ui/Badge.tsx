import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "green" | "neutral" | "outline";
  dot?: boolean;
  className?: string;
}

export function Badge({ children, variant = "neutral", dot, className }: BadgeProps) {
  const variants = {
    green: "bg-atlas-green-muted text-atlas-green border border-atlas-green/20",
    neutral: "bg-atlas-border-light text-atlas-muted border border-atlas-border",
    outline: "bg-transparent text-atlas-charcoal border border-atlas-border",
  };
  return (
    <span className={cn(
      "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium tracking-wide",
      variants[variant],
      className
    )}>
      {dot && (
        <span className={cn(
          "w-1.5 h-1.5 rounded-full animate-pulse-dot",
          variant === "green" ? "bg-atlas-green" : "bg-atlas-muted"
        )} />
      )}
      {children}
    </span>
  );
}
