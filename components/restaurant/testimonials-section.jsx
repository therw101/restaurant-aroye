"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ScrollAnimation, StaggerContainer, StaggerItem } from "@/components/ui/scroll-animation"
import { motion } from "motion/react"
import { Star } from "lucide-react"
import { cn } from "@/lib/utils"

export function TestimonialsSection({ testimonials }) {
  // Generate avatar URLs based on names (using a simple hash approach)
  const getAvatarUrl = (name) => {
    const seed = name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0)
    return `https://i.pravatar.cc/150?u=${seed}`
  }

  return (
    <section
      className="px-6 py-32 sm:px-8 lg:px-12 bg-muted/30"
      aria-labelledby="testimonials-heading"
    >
      <div className="mx-auto max-w-7xl">
        <ScrollAnimation className="text-center mb-20 space-y-4">
          <h2
            id="testimonials-heading"
            className="text-4xl font-light tracking-tight text-foreground sm:text-5xl"
          >
            Customer Reviews
          </h2>
          <p className="text-sm text-muted-foreground font-light">
            127 reviews | Average rating 4.8/5 from customers who trust us
          </p>
        </ScrollAnimation>

        <StaggerContainer className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <StaggerItem key={`testimonial-${testimonial.name}-${index}`}>
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
              <Card className="border border-border rounded-none shadow-none bg-card relative overflow-hidden transition-all duration-300 hover:shadow-lg dark:hover:shadow-primary/5">
                {/* Decorative Quote Mark */}
                <div className="absolute right-6 top-6 text-6xl font-serif text-muted-foreground/20 pointer-events-none">
                  &ldquo;
                </div>

                <CardContent className="p-6 md:p-8">
                  <div className="flex flex-col gap-4 justify-between h-full">
                    {/* Rating Stars */}
                    {testimonial.rating > 0 && (
                      <div className="flex gap-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            size={16}
                            className={cn(
                              i < testimonial.rating
                                ? "fill-yellow-400 text-yellow-400"
                                : "fill-muted text-muted"
                            )}
                          />
                        ))}
                      </div>
                    )}

                    {/* Testimonial Text */}
                    <p className="text-base text-muted-foreground font-light leading-relaxed relative z-10">
                      {testimonial.comment}
                    </p>

                    {/* Customer Info */}
                    <div className="flex items-center gap-4 justify-start pt-2">
                      <Avatar className="h-12 w-12">
                        <AvatarImage 
                          src={getAvatarUrl(testimonial.name)} 
                          alt={testimonial.name}
                        />
                        <AvatarFallback className="bg-muted text-muted-foreground">
                          {testimonial.name[0]}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col">
                        <h3 className="font-semibold text-foreground text-sm">
                          {testimonial.name}
                        </h3>
                        <p className="text-xs text-muted-foreground font-light">
                          {testimonial.date}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
            </Card>
            </motion.div>
          </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
