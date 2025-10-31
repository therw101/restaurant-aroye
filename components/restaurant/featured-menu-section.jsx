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
import { ScrollAnimation, StaggerContainer, StaggerItem } from "@/components/ui/scroll-animation"
import { motion } from "motion/react"

export function FeaturedMenuSection({ menuItems }) {
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
            เมนูแนะนำ
          </h2>
          <p className="text-sm text-muted-foreground font-light max-w-xl mx-auto">
            เมนูคัดสรรพิเศษ ที่คุณไม่ควรพลาด ทุกจานบอกเล่าเรื่องราวของรสชาติไทยแท้
          </p>
        </ScrollAnimation>

        <StaggerContainer className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {menuItems.map((item, index) => (
            <StaggerItem key={`menu-${item.name}-${index}`}>
              <Card className="border border-border rounded-none shadow-none hover:shadow-lg transition-all duration-300 bg-card overflow-hidden group hover:scale-105">
              <div className="aspect-4/3 relative w-full overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className="h-full w-full"
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                </motion.div>
              </div>
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-2">
                  <CardTitle className="text-lg font-normal tracking-tight">
                    {item.name}
                  </CardTitle>
                  {item.spicy && (
                    <span className="text-xs text-destructive font-medium">
                      เผ็ด
                    </span>
                  )}
                </div>
                <CardDescription className="text-sm font-light text-muted-foreground leading-relaxed">
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
                  <Button
                    size="sm"
                    variant="outline"
                    className="h-8 px-6 text-xs font-medium border border-border rounded-none hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105"
                    aria-label={`สั่ง ${item.name}`}
                  >
                    สั่ง
                  </Button>
                </div>
              </CardContent>
            </Card>
          </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
