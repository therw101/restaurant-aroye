"use client"

import Image from "next/image"
import { ScrollAnimation } from "@/components/ui/scroll-animation"
import { motion } from "motion/react"

export function AboutSection() {
  return (
    <section id="about" className="px-6 py-32 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <ScrollAnimation direction="left" className="aspect-4/3 relative w-full overflow-hidden">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
              className="relative w-full h-full"
            >
              <Image
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80"
                alt="Restaurant Atmosphere"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
          </ScrollAnimation>
          <ScrollAnimation direction="right" className="space-y-8">
            <motion.h2
              className="text-4xl font-light tracking-tight text-foreground sm:text-5xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Our Story
            </motion.h2>
            <motion.div
              className="space-y-6 text-base text-muted-foreground font-light leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Born from our family&apos;s love of authentic Thai food.
                Our authentic Thai restaurant has been serving customers for over 20 years
                with a simple philosophy: &ldquo;Great food must start with great ingredients.&rdquo;
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                We personally select our ingredients daily from trusted sources.
                Fresh vegetables from local markets, freshly ground spices every morning,
                and premium quality meats. Every dish is prepared with secret recipes
                passed down through generations, adapted for modern times
                while preserving authentic Thai identity and flavors.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                Our chefs are trained and have years of experience.
                Every dish is prepared with heart and attention to detail
                because we believe food is not just about filling your stomach,
                but creating an experience that makes you feel warm and happy.
              </motion.p>
            </motion.div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}
