"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ScrollAnimation,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/scroll-animation"
import { motion } from "motion/react"
import { useState } from "react"
import { Spinner } from "@/components/ui/spinner"
import { Skeleton } from "@/components/ui/skeleton"
import { cn } from "@/lib/utils"
import { toast } from "sonner"
import { AnimatedFire } from "@/components/ui/animated-fire"

export function FeaturedMenuSection({ menuItems }) {
  const [loadingItems, setLoadingItems] = useState({})
  const [imageLoading, setImageLoading] = useState({})

  const handleAddToCart = async (itemName, itemId, itemPrice) => {
    // Set loading state for this specific item
    setLoadingItems((prev) => ({ ...prev, [itemId]: true }))

    // Show loading toast
    const toastId = toast.loading("Adding menu item...", {
      description: itemName,
    })

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // In a real app, you would add to cart here
      // await addToCart({ name: itemName, price: itemPrice })

      // Success toast
      toast.success("Menu item added!", {
        id: toastId,
        description: `${itemName} - ${itemPrice}`,
        duration: 3000,
        action: {
          label: "View Cart",
          onClick: () => {
            // Navigate to cart or open cart drawer
            console.log("Navigate to cart")
          },
        },
      })
    } catch (error) {
      // Error toast
      toast.error("An error occurred", {
        id: toastId,
        description: "Unable to add menu item. Please try again",
        duration: 3000,
      })
    } finally {
      // Clear loading state
      setLoadingItems((prev) => {
        const newState = { ...prev }
        delete newState[itemId]
        return newState
      })
    }
  }

  const handleImageLoad = (itemId) => {
    setImageLoading((prev) => ({ ...prev, [itemId]: false }))
  }

  const handleImageLoadStart = (itemId) => {
    setImageLoading((prev) => ({ ...prev, [itemId]: true }))
  }

  return (
    <section
      id="menu"
      className="px-6 py-32 sm:px-8 lg:px-12"
      aria-labelledby="menu-heading"
    >
      <div className="mx-auto max-w-7xl">
        <ScrollAnimation className="text-center mb-20 space-y-4">
          <h2
            id="menu-heading"
            className="text-4xl font-light tracking-tight text-foreground sm:text-5xl"
          >
            Featured Menu
          </h2>
          <p className="text-sm text-muted-foreground font-light max-w-xl mx-auto">
            Specially curated menu items you shouldn&apos;t miss Every dish tells the
            story of authentic Thai flavors
          </p>
        </ScrollAnimation>

        <StaggerContainer className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {menuItems.map((item, index) => {
            const itemId = `menu-${item.name}-${index}`
            const isLoading = imageLoading[itemId] !== false

            return (
              <StaggerItem key={`menu-${item.name}-${index}`}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
                >
                  <Card className="border border-border rounded-none shadow-none hover:shadow-lg transition-all duration-300 bg-card overflow-hidden group">
                    <div className="aspect-4/3 relative w-full overflow-hidden">
                      {/* Loading Skeleton */}
                      {isLoading && (
                        <Skeleton className="absolute inset-0 z-0" />
                      )}

                      <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                        className="h-full w-full relative"
                      >
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          onLoadStart={() => handleImageLoadStart(itemId)}
                          onLoad={() => handleImageLoad(itemId)}
                          className={cn(
                            "object-cover transition-all duration-300 group-hover:scale-105",
                            isLoading && "opacity-0",
                            !isLoading && "opacity-100"
                          )}
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                        />
                      </motion.div>

                      {/* Add Button - Appears on Hover */}
                      {/* <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-full flex justify-center z-20">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group-hover:opacity-100 opacity-0 transition-opacity duration-300"
                  >
                    <Button
                      size="sm"
                      onClick={() => handleAddToCart(item.name, itemId, item.price)}
                      disabled={loadingItems[itemId]}
                      className="h-10 px-8 text-sm font-bold uppercase transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 bg-background/80 text-foreground backdrop-blur-sm border border-border/50 shadow-lg hover:bg-primary hover:text-primary-foreground disabled:opacity-70 disabled:cursor-not-allowed min-w-[100px]"
                      aria-label={`Order ${item.name}`}
                    >
                      {loadingItems[itemId] ? (
                        <div className="flex items-center gap-2">
                          <Spinner size="sm" />
                          <span>Adding...</span>
                        </div>
                      ) : (
                        "Order"
                      )}
                    </Button>
                  </motion.div>
                </div> */}
                    </div>

                    {/* Fire Icon Below Image */}
                    {item.spicy && (
                      <div className="relative px-6 pt-4 pb-2">
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3, duration: 0.4 }}
                          className="inline-flex items-center gap-2 bg-red-50 dark:bg-red-950/30 px-3 py-1.5 rounded-full border border-red-200 dark:border-red-800/50"
                        >
                          <AnimatedFire size={16} />
                          <span className="text-xs font-medium text-red-600 dark:text-red-400">
                            Spicy
                          </span>
                        </motion.div>
                      </div>
                    )}

                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between mb-2">
                        <CardTitle className="text-lg font-normal tracking-tight">
                          {item.name}
                        </CardTitle>
                      </div>
                      <CardDescription className="text-sm font-light text-muted-foreground leading-relaxed line-clamp-3">
                        {item.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="flex items-end justify-between pt-4 border-t border-border">
                        <div>
                          <p className="text-2xl font-light text-foreground">
                            {item.price}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </StaggerItem>
            )
          })}
        </StaggerContainer>
      </div>
    </section>
  )
}
