"use client"

import type React from "react"
import { cn } from "@/lib/utils"

interface MarqueeProps {
  className?: string
  children: React.ReactNode
  direction?: "left" | "right"
  pauseOnHover?: boolean
  speed?: "slow" | "normal" | "fast"
}

export function Marquee({
  className,
  children,
  direction = "left",
  pauseOnHover = true,
  speed = "normal",
}: MarqueeProps) {
  // Map speed names to CSS class names
  const speedClassMap = {
    slow: "animate-marquee-slow",
    normal: "animate-marquee-normal",
    fast: "animate-marquee-fast",
  }

  const speedClass = speedClassMap[speed]
  const directionClass = direction === "right" ? "flex-row-reverse" : "flex-row"

  return (
    <div className={cn("relative w-full overflow-hidden", className)}>
      <div
        className={cn(
          "flex gap-4 whitespace-nowrap",
          directionClass,
          speedClass,
          pauseOnHover && "hover:[animation-play-state:paused]",
        )}
      >
        <div className="flex shrink-0 gap-4 min-w-full">{children}</div>
        <div className="flex shrink-0 gap-4 min-w-full" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  )
}

