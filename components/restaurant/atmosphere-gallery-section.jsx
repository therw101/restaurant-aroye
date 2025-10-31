"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "motion/react"

export function AtmosphereGallerySection({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlaying || images.length === 0) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000) // Change image every 5 seconds

    return () => clearInterval(interval)
  }, [isAutoPlaying, images.length])

  const goToPrevious = useCallback(() => {
    setIsAutoPlaying(false)
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    )
  }, [images.length])

  const goToNext = useCallback(() => {
    setIsAutoPlaying(false)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }, [images.length])

  const goToSlide = useCallback(
    (index) => {
      setIsAutoPlaying(false)
      setCurrentIndex(index)
    },
    []
  )

  if (!images || images.length === 0) return null

  return (
    <section
      id="atmosphere-gallery"
      className="relative px-6 py-32 sm:px-8 lg:px-12 overflow-hidden"
      aria-labelledby="atmosphere-gallery-heading"
    >
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-20 space-y-4">
          <h2
            id="atmosphere-gallery-heading"
            className="text-4xl font-light tracking-tight text-foreground sm:text-5xl"
          >
            บรรยากาศร้านอาหาร
          </h2>
          <p className="text-sm text-muted-foreground font-light max-w-xl mx-auto">
            สำรวจบรรยากาศที่น่าดื่มด่ำของเรา สถานที่ที่คุณจะได้สัมผัสความสุขในการรับประทานอาหาร
          </p>
        </div>

        {/* Main Gallery Container */}
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg border border-border shadow-lg">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Image
                src={images[currentIndex].image}
                alt={images[currentIndex].title}
                fill
                className="object-cover"
                priority={currentIndex === 0}
                sizes="100vw"
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12 lg:p-16">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="text-white"
                >
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-3">
                    {images[currentIndex].title}
                  </h3>
                  <p className="text-base sm:text-lg text-white/90 font-light">
                    {images[currentIndex].description}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/30 backdrop-blur-sm text-white hover:bg-black/50 transition-all duration-300 hover:scale-110"
            aria-label="Previous image"
          >
            <svg
              className="w-6 h-6 sm:w-8 sm:h-8"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/30 backdrop-blur-sm text-white hover:bg-black/50 transition-all duration-300 hover:scale-110"
            aria-label="Next image"
          >
            <svg
              className="w-6 h-6 sm:w-8 sm:h-8"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "w-8 bg-foreground"
                  : "w-2 bg-muted-foreground/50 hover:bg-muted-foreground/75"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Image Counter */}
        <div className="text-center mt-6">
          <span className="text-sm text-muted-foreground font-light">
            {currentIndex + 1} / {images.length}
          </span>
        </div>
      </div>
    </section>
  )
}

