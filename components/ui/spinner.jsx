"use client"

import * as React from "react"
import { motion } from "motion/react"
import { cn } from "@/lib/utils"

const spinnerVariants = {
  animate: {
    rotate: 360,
    transition: {
      duration: 1,
      repeat: Infinity,
      ease: "linear",
    },
  },
}

export function Spinner({ className, size = "default" }) {
  const sizeClasses = {
    sm: "h-4 w-4",
    default: "h-5 w-5",
    lg: "h-6 w-6",
  }

  return (
    <motion.div
      variants={spinnerVariants}
      animate="animate"
      className={cn("inline-block", sizeClasses[size], className)}
    >
      <svg
        className="h-full w-full"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray="32"
          strokeDashoffset="32"
          opacity="0.3"
        />
        <circle
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray="32"
          strokeDashoffset="24"
        />
      </svg>
    </motion.div>
  )
}

export function LoadingDots({ className }) {
  return (
    <div className={cn("flex items-center gap-1.5", className)}>
      {[0, 1, 2].map((index) => (
        <motion.div
          key={index}
          className="h-2 w-2 rounded-full bg-current"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            delay: index * 0.2,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}
