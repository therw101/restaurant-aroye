"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function TestimonialsSection({ testimonials }) {
  return (
    <section
      className="px-6 py-32 sm:px-8 lg:px-12 bg-muted/30"
      aria-labelledby="testimonials-heading"
    >
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-20 space-y-4">
          <h2
            id="testimonials-heading"
            className="text-4xl font-light tracking-tight text-foreground sm:text-5xl"
          >
            ความประทับใจจากลูกค้า
          </h2>
          <p className="text-sm text-muted-foreground font-light">
            127 รีวิว | คะแนนเฉลี่ย 4.8/5 จากลูกค้าที่ไว้วางใจเรา
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card
              key={`testimonial-${testimonial.name}-${index}`}
              className="border border-border rounded-none shadow-none bg-card"
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <CardTitle className="text-base font-normal">
                      {testimonial.name}
                    </CardTitle>
                    <CardDescription className="text-xs mt-1 font-light">
                      {testimonial.date}
                    </CardDescription>
                  </div>
                  <div className="flex gap-0.5">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <span key={i} className="text-destructive text-sm">
                        ★
                      </span>
                    ))}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm text-muted-foreground font-light leading-relaxed italic">
                  &ldquo;{testimonial.comment}&rdquo;
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
