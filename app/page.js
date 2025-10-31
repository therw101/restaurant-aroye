"use client"

import { Separator } from "@/components/ui/separator"
import { RestaurantStructuredData } from "@/app/components/structured-data"
import { Navbar } from "@/components/navbar"
import { LoadingScreen } from "@/components/loading"
import { HeroSection } from "@/components/restaurant/hero-section"
import { FeaturedMenuSection } from "@/components/restaurant/featured-menu-section"
import { FeaturesSection } from "@/components/restaurant/features-section"
import { GallerySection } from "@/components/restaurant/gallery-section"
import { AtmosphereGallerySection } from "@/components/restaurant/atmosphere-gallery-section"
import { TestimonialsSection } from "@/components/restaurant/testimonials-section"
import { AboutSection } from "@/components/restaurant/about-section"
import { ReservationSection } from "@/components/restaurant/reservation-section"
import { Footer } from "@/components/restaurant/footer"
import { SocialFloatingButtons } from "@/components/restaurant/social-floating-buttons"
import { motion, stagger, useAnimate } from "motion/react"
import {
  featuredMenu,
  galleryMenu,
  features,
  testimonials,
  atmosphereImages,
} from "@/lib/data"
export default function Home() {
  return (
    <>
      {/* <LoadingScreen /> */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      >
        <RestaurantStructuredData />
        <Navbar />
        <div className="min-h-screen bg-background">
          <HeroSection />
          <Separator />
          <FeaturedMenuSection menuItems={featuredMenu} />
          <Separator />
          <FeaturesSection features={features} />
          <Separator />
          <GallerySection menuItems={galleryMenu} />
          <Separator />
          <AtmosphereGallerySection images={atmosphereImages} />
          <Separator />
          <TestimonialsSection testimonials={testimonials} />
          <Separator />
          <AboutSection />
          <Separator />
          <ReservationSection />
          <Footer />
        </div>
        <SocialFloatingButtons />
      </motion.div>
    </>
  )
}
