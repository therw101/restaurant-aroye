"use client"

import Image from "next/image"
import {
  ScrollAnimation,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/scroll-animation"
import { motion } from "motion/react"
import { useState } from "react"
import { Skeleton } from "@/components/ui/skeleton"
import { cn } from "@/lib/utils"
import { AnimatedFire } from "@/components/ui/animated-fire"

export function GallerySection({ menuItems }) {
  const [imageLoading, setImageLoading] = useState({})

  const handleImageLoad = (itemId) => {
    setImageLoading((prev) => ({ ...prev, [itemId]: false }))
  }

  const handleImageLoadStart = (itemId) => {
    setImageLoading((prev) => ({ ...prev, [itemId]: true }))
  }

  return (
    <section
      id="gallery"
      className="px-6 py-32 sm:px-8 lg:px-12"
      aria-labelledby="gallery-heading"
    >
      <div className="mx-auto max-w-7xl">
        <ScrollAnimation className="text-center mb-20 space-y-4">
          <h2
            id="gallery-heading"
            className="text-4xl font-light tracking-tight text-foreground sm:text-5xl"
          >
            Menu Gallery
          </h2>
          <p className="text-sm text-muted-foreground font-light max-w-xl mx-auto">
            Explore our diverse menu, every dish prepared with care
          </p>
        </ScrollAnimation>

        <StaggerContainer
          className="grid gap-4 sm:grid-cols-2 md:grid-cols-3"
          staggerDelay={0.05}
        >
          {menuItems.map((item, index) => {
            const itemId = `gallery-${item.name}-${index}`
            const isLoading = imageLoading[itemId] !== false

            return (
              <StaggerItem key={itemId}>
                <motion.div
                  className="group relative aspect-square overflow-hidden border border-border hover:shadow-xl transition-all duration-300 cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ scale: 1.03, y: -4 }}
                >
                  {/* Loading Skeleton */}
                  {isLoading && <Skeleton className="absolute inset-0 z-0" />}

                  <motion.div
                    className="relative w-full h-full"
                    whileHover={{ scale: 1.15 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  >
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      onLoadStart={() => handleImageLoadStart(itemId)}
                      onLoad={() => handleImageLoad(itemId)}
                      className={cn(
                        "object-cover transition-all duration-500 group-hover:scale-110",
                        isLoading && "opacity-0",
                        !isLoading && "opacity-100"
                      )}
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                    />
                  </motion.div>

                  {/* Enhanced Gradient Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Enhanced Content Overlay */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                    initial={{ y: "100%" }}
                    whileHover={{ y: 0 }}
                  >
                    <div className="flex items-center justify-between text-white relative z-10">
                      <div className="flex items-center gap-3">
                        <div>
                          <h3 className="text-base font-semibold mb-1 drop-shadow-lg">
                            {item.name}
                          </h3>
                          <p className="text-sm font-medium drop-shadow-md">
                            {item.price}
                          </p>
                        </div>
                        {/* Animated Fire Icon - Below image content */}
                        {item.spicy && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="flex items-center"
                          >
                            <AnimatedFire size={20} />
                          </motion.div>
                        )}
                      </div>
                    </div>
                  </motion.div>

                  {/* Fire Icon Below Image (Always Visible) */}
                  {item.spicy && (
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center justify-center">
                      <div className="bg-background/90 backdrop-blur-sm px-3 py-1.5 rounded-full border border-red-500/30 shadow-lg">
                        <div className="flex items-center gap-2">
                          <AnimatedFire size={18} />
                          <span className="text-xs font-medium text-red-600 dark:text-red-400">
                            Spicy
                          </span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Shine Effect on Hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  </div>
                </motion.div>
              </StaggerItem>
            )
          })}
        </StaggerContainer>
      </div>
    </section>
  )
}
