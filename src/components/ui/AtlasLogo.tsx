import { cn } from "@/lib/utils";

interface AtlasLogoProps {
  /** px size of the compass icon */
  iconSize?: number;
  /** show the ATLAS wordmark next to the icon */
  showWordmark?: boolean;
  /** invert to white (for dark backgrounds) */
  invert?: boolean;
  className?: string;
}

export function AtlasIcon({ size = 32, invert = false }: { size?: number; invert?: boolean }) {
  const fill = invert ? "white" : "#1C1C1E";
  // Compass rose: north (tall), east, west (equal), south (shorter), center dot
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* North arrow — tallest */}
      <polygon points="50,4 44,38 56,38" fill={fill} />
      {/* South arrow — slightly shorter */}
      <polygon points="50,96 44,64 56,64" fill={fill} />
      {/* West arrow */}
      <polygon points="4,50 38,44 38,56" fill={fill} />
      {/* East arrow */}
      <polygon points="96,50 62,44 62,56" fill={fill} />
      {/* Center circle */}
      <circle cx="50" cy="50" r="9" fill={fill} />
    </svg>
  );
}

export function AtlasLogo({
  iconSize = 28,
  showWordmark = true,
  invert = false,
  className,
}: AtlasLogoProps) {
  const textColor = invert ? "text-white" : "text-atlas-charcoal";
  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <AtlasIcon size={iconSize} invert={invert} />
      {showWordmark && (
        <span
          className={`font-semibold tracking-[0.18em] uppercase ${textColor}`}
          style={{ fontSize: iconSize * 0.55, letterSpacing: "0.18em" }}
        >
          ATLAS
        </span>
      )}
    </div>
  );
}
