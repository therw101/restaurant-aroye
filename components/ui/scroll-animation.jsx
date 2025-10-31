"use client"

import { motion, useInView } from "motion/react"
import { useRef } from "react"

export function ScrollAnimation({
  children,
  className,
  delay = 0,
  duration = 0.6,
  direction = "up",
  distance = 50,
  once = true,
  ...props
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, margin: "-100px" })

  const directions = {
    up: { y: distance, x: 0 },
    down: { y: -distance, x: 0 },
    left: { y: 0, x: distance },
    right: { y: 0, x: -distance },
    fade: { y: 0, x: 0 },
  }

  const initial = directions[direction] || directions.up

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...initial }}
      animate={
        isInView ? { opacity: 1, y: 0, x: 0 } : { opacity: 0, ...initial }
      }
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export function StaggerContainer({
  children,
  className,
  staggerDelay = 0.1,
  ...props
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({
  children,
  className,
  direction = "up",
  distance = 30,
  ...props
}) {
  const directions = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
    fade: { y: 0, x: 0 },
  }

  const initial = directions[direction] || directions.up

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, ...initial },
        visible: {
          opacity: 1,
          y: 0,
          x: 0,
          transition: {
            duration: 0.6,
            ease: [0.25, 0.1, 0.25, 1],
          },
        },
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}
