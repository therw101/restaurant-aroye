"use client"
import * as React from "react"
import { motion } from "motion/react"

import { cn } from "@/lib/utils"

function GradientBackground({
  className,
  transition = { duration: 15, ease: "easeInOut", repeat: Infinity },
  ...props
}) {
  return (
    <motion.div
      data-slot="gradient-background"
      className={cn(
        "size-full bg-linear-to-br from-blue-500 via-purple-500 to-pink-500 bg-size-[400%_400%]",
        className
      )}
      animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
      transition={transition}
      style={{
        willChange: "background-position",
        transform: "translateZ(0)",
        backfaceVisibility: "hidden",
        perspective: 1000,
      }}
      {...props}
    />
  )
}

export { GradientBackground }
