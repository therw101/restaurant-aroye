"use client"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card"
import { ScrollAnimation } from "@/components/ui/scroll-animation"
import { motion } from "motion/react"

export function ReservationSection() {
  return (
    <section id="contact" className="px-6 py-32 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-3xl">
        <ScrollAnimation>
          <Card className="border border-border rounded-none shadow-none bg-card">
          <CardHeader className="text-center pb-8">
            <h2 className="text-4xl font-light tracking-tight text-foreground sm:text-5xl mb-4">
              จองโต๊ะล่วงหน้า
            </h2>
            <CardDescription className="text-sm font-light">
              จองโต๊ะล่วงหน้าเพื่อรับประสบการณ์การรับประทานอาหารที่สมบูรณ์แบบ
              <br />
              เราจะเตรียมโต๊ะและเตรียมความพร้อมให้คุณทุกอย่าง
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Button
                  size="lg"
                  className="w-full sm:w-auto h-12 px-8 text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 rounded-none transition-all duration-300"
                  asChild
                >
                  <a href="tel:021234567" aria-label="โทรจองโต๊ะ">
                    โทร: 02-123-4567
                  </a>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto h-12 px-8 text-sm font-medium border border-border rounded-none hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                  asChild
                >
                <a href="mailto:info@restaurant.com" aria-label="ส่งอีเมล">
                  อีเมล: info@restaurant.com
                </a>
              </Button>
              </motion.div>
            </div>
            <motion.div
              className="text-center pt-4"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <p className="text-xs text-muted-foreground font-light">
                🎉 โปรโมชั่นพิเศษ: จองโต๊ะสำหรับ 3 คนขึ้นไป รับส่วนลด 10%
                <br />
                ใช้ได้ทุกวัน ยกเว้นวันหยุดนักขัตฤกษ์
              </p>
            </motion.div>
          </CardContent>
        </Card>
        </ScrollAnimation>
      </div>
    </section>
  )
}
