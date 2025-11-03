"use client"

import * as React from "react"
import { motion } from "motion/react"
import { Flame } from "lucide-react"
import { cn } from "@/lib/utils"

export function AnimatedFire({ className, size = 20 }) {
  return (
    <motion.div
      className={cn("inline-flex items-center justify-center", className)}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
    >
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [-2, 2, -2],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative"
      >
        <Flame
          size={size}
          className="text-red-500 fill-red-500 drop-shadow-lg"
        />
        
        {/* Glowing effect */}
        <motion.div
          className="absolute inset-0 rounded-full blur-md"
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            background: "radial-gradient(circle, rgba(239, 68, 68, 0.4) 0%, transparent 70%)",
          }}
        />
      </motion.div>
      
      {/* Flickering particles */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-red-400 rounded-full"
          style={{
            left: `${20 + i * 10}%`,
            bottom: `${10 + i * 5}%`,
          }}
          animate={{
            y: [0, -8, 0],
            opacity: [0, 1, 0],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 1 + i * 0.3,
            repeat: Infinity,
            delay: i * 0.2,
            ease: "easeOut",
          }}
        />
      ))}
    </motion.div>
  )
}

