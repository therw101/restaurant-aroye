"use client"

import * as React from "react"
import { motion } from "motion/react"
import { cn } from "@/lib/utils"

export function Skeleton({ className, ...props }) {
  return (
    <motion.div
      className={cn("animate-pulse rounded-md bg-muted", className)}
      initial={{ opacity: 0.6 }}
      animate={{ opacity: [0.6, 1, 0.6] }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      {...props}
    />
  )
}

export function SkeletonCard({ className }) {
  return (
    <div className={cn("border border-border rounded-none bg-card overflow-hidden", className)}>
      <Skeleton className="aspect-4/3 w-full" />
      <div className="p-6 space-y-4">
        <div className="space-y-2">
          <Skeleton className="h-6 w-3/4" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
        </div>
        <div className="flex items-center justify-between pt-4 border-t border-border">
          <Skeleton className="h-8 w-20" />
        </div>
      </div>
    </div>
  )
}

export function SkeletonGalleryItem({ className }) {
  return (
    <Skeleton className={cn("aspect-square w-full", className)} />
  )
}


