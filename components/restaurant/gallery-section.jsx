"use client"

import Image from "next/image"
import { ScrollAnimation, StaggerContainer, StaggerItem } from "@/components/ui/scroll-animation"
import { motion } from "motion/react"

export function GallerySection({ menuItems }) {
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
            แกลเลอรี่เมนู
          </h2>
          <p className="text-sm text-muted-foreground font-light max-w-xl mx-auto">
            สำรวจเมนูหลากหลายของเรา ทุกจานปรุงด้วยความใส่ใจ
          </p>
        </ScrollAnimation>

        <StaggerContainer className="grid gap-4 sm:grid-cols-2 md:grid-cols-3" staggerDelay={0.05}>
          {menuItems.map((item, index) => (
            <StaggerItem key={`gallery-${item.name}-${index}`}>
              <motion.div
                className="group relative aspect-square overflow-hidden border border-border hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                  />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <motion.div
                  className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                  initial={{ y: "100%" }}
                  whileHover={{ y: 0 }}
                >
                  <div className="flex items-center justify-between text-white">
                    <div>
                      <h3 className="text-base font-medium mb-1">{item.name}</h3>
                      <p className="text-sm font-light">{item.price}</p>
                    </div>
                    {item.spicy && (
                      <span className="text-xs px-2 py-1 bg-destructive/40 backdrop-blur-sm rounded text-destructive-foreground">
                        เผ็ด
                      </span>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
