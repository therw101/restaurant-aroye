"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { motion } from "motion/react"

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden min-h-screen flex items-center pt-20"
      aria-labelledby="hero-heading"
    >
      <div className="w-full">
        <div className="grid md:grid-cols-2 gap-0 items-stretch min-h-screen">
          {/* Image - Left Side */}
          <motion.div
            className="relative w-full overflow-hidden order-2 md:order-1"
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
              <Image
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1920&q=80"
                alt="Thai Food"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
          </motion.div>

          {/* Content - Right Side */}
          <div className="flex items-center justify-center p-8 sm:p-12 lg:p-16 order-1 md:order-2">
            <div className="w-full max-w-2xl space-y-8">
              <motion.div
                className="inline-block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span className="text-xs font-medium tracking-wider text-muted-foreground uppercase">
                  Authentic Thai Taste, 20 Years Tradition
                </span>
              </motion.div>

              <motion.h1
                id="hero-heading"
                className="text-5xl font-light tracking-tight text-foreground sm:text-7xl lg:text-8xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                The Taste of
                <motion.span
                  className="block mt-2 font-normal"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  Authentic Thailand
                </motion.span>
              </motion.h1>

              <motion.p
                className="mt-8 text-lg leading-relaxed text-muted-foreground font-light"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                Experience authentic Thai flavors with fresh aromatic spices
                <br />
                Every dish prepared with heart, from premium ingredients to flavors that make you
                <br />
                feel like coming home
              </motion.p>

              {/* Trust Signals */}
              <motion.div
                className="flex flex-wrap items-center gap-8 text-sm text-muted-foreground mt-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
              >
                <div className="flex items-center gap-3">
                  <span className="text-foreground font-medium">4.8</span>
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <motion.span
                        key={i}
                        className="text-destructive"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 1.2 + i * 0.1 }}
                      >
                        ★
                      </motion.span>
                    ))}
                  </div>
                  <span>(127 reviews)</span>
                </div>
                <Separator orientation="vertical" className="h-4" />
                <span>20+ Years Serving</span>
                <Separator orientation="vertical" className="h-4" />
                <span>Professional Chefs</span>
              </motion.div>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 mt-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 }}
              >
                <Button
                  size="lg"
                  className="h-12 px-8 text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 rounded-none transition-all duration-300 hover:scale-105"
                >
                  View Menu Online
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-12 px-8 text-sm font-medium border border-border rounded-none hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-105"
                >
                  Reserve Table
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
