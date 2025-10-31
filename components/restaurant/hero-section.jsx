"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

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
          <div className="relative w-full overflow-hidden order-2 md:order-1">
            <Image
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1920&q=80"
              alt="อาหารไทย"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Content - Right Side */}
          <div className="flex items-center justify-center p-8 sm:p-12 lg:p-16 order-1 md:order-2">
            <div className="w-full max-w-2xl space-y-8">
              <div className="inline-block">
                <span className="text-xs font-medium tracking-wider text-muted-foreground uppercase">
                  รสชาติไทยแท้ สืบทอดมา 20 ปี
                </span>
              </div>

              <h1
                id="hero-heading"
                className="text-5xl font-light tracking-tight text-foreground sm:text-7xl lg:text-8xl"
              >
                รสชาติแห่ง
                <span className="block mt-2 font-normal">ความเป็นไทย</span>
              </h1>

              <p className="mt-8 text-lg leading-relaxed text-muted-foreground font-light">
                เปิดประสบการณ์รสชาติอาหารไทยแท้ที่หอมกลิ่นเครื่องเทศสดใหม่
                <br />
                ทุกจานปรุงด้วยใจ จากวัตถุดิบคุณภาพพรีเมียม สู่รสชาติที่ทำให้คุณ
                <br />
                รู้สึกเหมือนกลับบ้าน
              </p>

              {/* Trust Signals */}
              <div className="flex flex-wrap items-center gap-8 text-sm text-muted-foreground mt-12">
                <div className="flex items-center gap-3">
                  <span className="text-foreground font-medium">4.8</span>
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i} className="text-destructive">
                        ★
                      </span>
                    ))}
                  </div>
                  <span>(127 รีวิว)</span>
                </div>
                <Separator orientation="vertical" className="h-4" />
                <span>เปิดบริการ 20+ ปี</span>
                <Separator orientation="vertical" className="h-4" />
                <span>เชฟมืออาชีพ</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-12">
                <Button
                  size="lg"
                  className="h-12 px-8 text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 rounded-none"
                >
                  ดูเมนูออนไลน์
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-12 px-8 text-sm font-medium border border-border rounded-none hover:bg-accent hover:text-accent-foreground"
                >
                  จองโต๊ะ
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
