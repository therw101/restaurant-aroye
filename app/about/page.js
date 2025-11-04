"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/restaurant/footer"
import { SocialFloatingButtons } from "@/components/restaurant/social-floating-buttons"
import { ReservationSection } from "@/components/restaurant/reservation-section"
import { Separator } from "@/components/ui/separator"
import { TextParallaxContent } from "@/components/ui/text-parallax-content-scroll"
import { motion } from "motion/react"

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-background">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <TextParallaxContent
            imgUrl="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            subheading="Our Story"
            heading="Where It All Began"
          >
            <AboutContent
              title="Born from a Love of Authentic Thai Cuisine"
              description="AROYÉ was born from our family's love of authentic Thai food. We've been serving customers for over 20 years with a simple philosophy: 'Great food starts with great ingredients.' We personally select our ingredients daily from trusted sources—fresh vegetables from local markets, freshly ground spices every morning, and premium quality meats."
            />
          </TextParallaxContent>

          <TextParallaxContent
            imgUrl="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            subheading="Quality"
            heading="Never Compromised"
          >
            <AboutContent
              title="Secret Recipes Passed Down Through Generations"
              description="Every dish is prepared with secret recipes passed down through generations, adapted for modern times while preserving authentic Thai identity and flavors. Our chefs are trained and have years of experience. Every dish is prepared with heart and attention to detail, because we believe food is not just about filling your stomach, but creating an experience that makes you feel warm and happy."
            />
          </TextParallaxContent>

          <TextParallaxContent
            imgUrl="https://images.unsplash.com/photo-1559329007-40df8a9345d8?q=80&w=2416&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            subheading="Modernity"
            heading="Perfectly Blended"
          >
            <AboutContent
              title="An Atmosphere That Perfectly Blends Modernity with Thai Tradition"
              description="The restaurant is decorated in a modern minimalist style blended with beautiful Thai elements, emphasizing cleanliness, beauty, and brightness. Perfect for every occasion—from family meals, social gatherings, to romantic dinners. Service is friendly and warm, like coming home. We are committed to creating a dining experience you'll remember forever."
            />
          </TextParallaxContent>
        </motion.div>
        <Separator />
        <ReservationSection />
      </div>
      <Footer />
      <SocialFloatingButtons />
    </>
  )
}

function AboutContent({ title, description }) {
  return (
    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
      <h2 className="col-span-1 text-3xl font-bold md:col-span-4 text-foreground">
        {title}
      </h2>
      <div className="col-span-1 md:col-span-8">
        <p className="mb-4 text-xl text-muted-foreground md:text-2xl leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  )
}
