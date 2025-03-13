"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface MarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
  pauseOnHover?: boolean
  direction?: "left" | "right"
  speed?: number
  className?: string
  children: React.ReactNode
}

export function Marquee({
  pauseOnHover = true,
  direction = "left",
  speed = 40,
  className,
  children,
  ...props
}: MarqueeProps) {
  const [containerWidth, setContainerWidth] = useState(0)
  const [contentWidth, setContentWidth] = useState(0)
  const [duration, setDuration] = useState(0)

  const containerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (containerRef.current && contentRef.current) {
      const calculateWidth = () => {
        const containerWidth = containerRef.current?.offsetWidth || 0
        const contentWidth = contentRef.current?.scrollWidth || 0

        setContainerWidth(containerWidth)
        setContentWidth(contentWidth)

        // Calculate duration based on content width and speed
        // The larger the content, the longer the duration
        const calculatedDuration = (contentWidth / speed) * 1.5
        setDuration(calculatedDuration)
      }

      calculateWidth()

      // Recalculate on window resize
      window.addEventListener("resize", calculateWidth)
      return () => window.removeEventListener("resize", calculateWidth)
    }
  }, [speed, children])

  // Only render the marquee if we need to scroll (content wider than container)
  const shouldAnimate = contentWidth > containerWidth

  return (
    <div ref={containerRef} className={cn("relative overflow-hidden", className)} {...props}>
      <div
        ref={contentRef}
        className={cn(
          "flex min-w-full shrink-0 gap-4",
          shouldAnimate && "animate-marquee",
          pauseOnHover && shouldAnimate && "hover:[animation-play-state:paused]",
        )}
        style={{
          animationDuration: `${duration}s`,
          animationDirection: direction === "right" ? "reverse" : "normal",
        }}
      >
        {children}

        {/* Duplicate the content for a seamless loop if we need to animate */}
        {shouldAnimate && (
          <div aria-hidden="true" className="flex min-w-full shrink-0 gap-4">
            {children}
          </div>
        )}
      </div>
    </div>
  )
}

