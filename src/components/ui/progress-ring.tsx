import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";

interface ProgressRingProps {
  progress: number;
  size?: number;
  strokeWidth?: number;
  className?: string;
  color?: string;
}

export const ProgressRing = ({
  progress,
  size = 120,
  strokeWidth = 12,
  className,
  color = "#8B5CF6",
}: ProgressRingProps) => {
  const circleRef = useRef<SVGCircleElement>(null);

  useEffect(() => {
    if (circleRef.current) {
      const radius = (size - strokeWidth) / 2;
      const circumference = radius * 2 * Math.PI;
      const offset = circumference - (progress / 100) * circumference;
      
      circleRef.current.style.strokeDasharray = `${circumference} ${circumference}`;
      circleRef.current.style.strokeDashoffset = `${offset}`;
    }
  }, [progress, size, strokeWidth]);

  return (
    <svg
      className={cn("transform -rotate-90", className)}
      width={size}
      height={size}
    >
      <circle
        className="stroke-gray-200"
        strokeWidth={strokeWidth}
        fill="transparent"
        r={(size - strokeWidth) / 2}
        cx={size / 2}
        cy={size / 2}
      />
      <circle
        ref={circleRef}
        className="animate-progress-ring"
        stroke={color}
        strokeWidth={strokeWidth}
        fill="transparent"
        r={(size - strokeWidth) / 2}
        cx={size / 2}
        cy={size / 2}
      />
    </svg>
  );
};