"use client"

import { useState } from "react"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/restaurant/footer"
import { SocialFloatingButtons } from "@/components/restaurant/social-floating-buttons"
import { ReservationSection } from "@/components/restaurant/reservation-section"
import { Separator } from "@/components/ui/separator"
import { ScrollAnimation } from "@/components/ui/scroll-animation"
import { Card } from "@/components/ui/card"
import { motion } from "motion/react"
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  MessageCircle,
  Send,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Spinner } from "@/components/ui/spinner"
import { toast } from "sonner"
import { cn } from "@/lib/utils"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    const toastId = toast.loading("Sending message...", {
      description: "Please wait",
    })

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))
      toast.success("Message sent successfully!", {
        id: toastId,
        description: "We will contact you as soon as possible",
        duration: 5000,
      })
      setFormData({ name: "", email: "", message: "" })
    } catch (error) {
      toast.error("An error occurred", {
        id: toastId,
        description: "Unable to send message. Please try again",
        duration: 5000,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-background">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Hero Header with Image */}
          <section className="relative overflow-hidden">
            <div className="relative h-[60vh] min-h-[400px]">
              <Image
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=80"
                alt="Contact Us"
                fill
                className="object-cover"
                priority
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/40 to-black/60" />
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-center px-6 z-10"
                >
                  <h1 className="text-5xl font-light tracking-tight text-white sm:text-6xl lg:text-7xl mb-6">
                    Contact Us
                  </h1>
                  <p className="text-lg text-white/90 font-light max-w-2xl mx-auto leading-relaxed">
                    We&apos;re ready to listen and answer your questions anytime
                    <br />
                    Contact us through any channel that&apos;s convenient for you
                  </p>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Contact Information Section */}
          <section className="px-6 py-32 sm:px-8 lg:px-12 bg-background">
            <div className="mx-auto max-w-7xl">
              <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
                {/* Contact Details */}
                <ScrollAnimation direction="left" className="space-y-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                  >
                    <h2 className="text-4xl font-light tracking-tight text-foreground sm:text-5xl mb-12">
                      Contact Information
                    </h2>
                  </motion.div>

                  {/* Contact Cards Grid */}
                  <div className="grid gap-6">
                    {/* Address Card */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                    >
                      <ContactCard
                        icon={<MapPin className="h-6 w-6" />}
                        title="Address"
                        content={
                          <>
                            <p className="text-foreground font-light">
                              123 Sukhumvit Road
                            </p>
                            <p className="text-foreground font-light">
                              Bangkok 10110
                            </p>
                            <p className="text-foreground font-light">
                              Thailand
                            </p>
                          </>
                        }
                      />
                    </motion.div>

                    {/* Phone & Email Row */}
                    <div className="grid sm:grid-cols-2 gap-6">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                      >
                        <ContactCard
                          icon={<Phone className="h-5 w-5" />}
                          title="Phone"
                          content={
                            <a
                              href="tel:021234567"
                              className="text-lg text-foreground font-light hover:text-primary transition-colors block"
                            >
                              02-123-4567
                            </a>
                          }
                        />
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                      >
                        <ContactCard
                          icon={<Mail className="h-5 w-5" />}
                          title="Email"
                          content={
                            <a
                              href="mailto:info@restaurant.com"
                              className="text-sm text-muted-foreground font-light hover:text-primary transition-colors break-all block"
                            >
                              info@restaurant.com
                            </a>
                          }
                        />
                      </motion.div>
                    </div>

                    {/* Hours Card */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                    >
                      <ContactCard
                        icon={<Clock className="h-6 w-6" />}
                        title="Opening Hours"
                        content={
                          <div className="space-y-3">
                            <div>
                              <p className="text-sm text-muted-foreground font-light mb-1">
                                Weekdays
                              </p>
                              <p className="text-foreground font-light">
                                Monday - Friday: 11:00 - 21:00
                              </p>
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground font-light mb-1">
                                Weekends
                              </p>
                              <p className="text-foreground font-light">
                                Saturday - Sunday: 10:00 - 22:00
                              </p>
                            </div>
                          </div>
                        }
                      />
                    </motion.div>

                    {/* Social Media Card */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                    >
                      <ContactCard
                        title="Follow Us"
                        content={
                          <div className="flex flex-wrap items-center gap-4">
                            <motion.a
                              href="https://facebook.com"
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="flex items-center gap-2 px-4 py-2 border border-border hover:bg-accent hover:text-accent-foreground text-foreground transition-colors"
                            >
                              <Facebook className="h-5 w-5" />
                              <span className="text-sm font-light">
                                Facebook
                              </span>
                            </motion.a>
                            <motion.a
                              href="https://instagram.com"
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="flex items-center gap-2 px-4 py-2 border border-border hover:bg-accent hover:text-accent-foreground text-foreground transition-colors"
                            >
                              <Instagram className="h-5 w-5" />
                              <span className="text-sm font-light">
                                Instagram
                              </span>
                            </motion.a>
                            <motion.a
                              href="https://line.me"
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="flex items-center gap-2 px-4 py-2 border border-border hover:bg-accent hover:text-accent-foreground text-foreground transition-colors"
                            >
                              <MessageCircle className="h-5 w-5" />
                              <span className="text-sm font-light">Line</span>
                            </motion.a>
                          </div>
                        }
                      />
                    </motion.div>
                  </div>
                </ScrollAnimation>

                {/* Contact Form */}
                <ScrollAnimation direction="right">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="space-y-8"
                  >
                    <div>
                      <h2 className="text-4xl font-light tracking-tight text-foreground sm:text-5xl mb-4">
                        Send Message
                      </h2>
                      <p className="text-base text-muted-foreground font-light">
                        We&apos;ll respond as soon as possible
                      </p>
                    </div>

                    <Card className="p-8 border border-border bg-card">
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: 0.1 }}
                        >
                          <label
                            htmlFor="name"
                            className="block text-sm font-medium text-foreground mb-2"
                          >
                            Your Name
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="Please enter your name"
                            className="w-full h-12 border border-input bg-background px-4 text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-all"
                          />
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: 0.2 }}
                        >
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium text-foreground mb-2"
                          >
                            Your Email
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="example@email.com"
                            className="w-full h-12 border border-input bg-background px-4 text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-all"
                          />
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: 0.3 }}
                        >
                          <label
                            htmlFor="message"
                            className="block text-sm font-medium text-foreground mb-2"
                          >
                            Message
                          </label>
                          <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows={6}
                            placeholder="Please enter your message..."
                            className="w-full border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 resize-none transition-all"
                          />
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: 0.4 }}
                        >
                          <Button
                            type="submit"
                            size="lg"
                            disabled={isSubmitting}
                            className="h-12 w-full px-8 text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 rounded-none transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                          >
                            {isSubmitting ? (
                              <div className="flex items-center gap-2">
                                <Spinner size="sm" />
                                <span>Sending...</span>
                              </div>
                            ) : (
                              <div className="flex items-center gap-2">
                                <Send className="h-4 w-4" />
                                <span>Send Message</span>
                              </div>
                            )}
                          </Button>
                        </motion.div>
                      </form>
                    </Card>
                  </motion.div>
                </ScrollAnimation>
              </div>
            </div>
          </section>

          <Separator />

          {/* Map Section */}
          <section className="px-6 py-32 sm:px-8 lg:px-12 bg-muted/30">
            <div className="mx-auto max-w-6xl">
              <ScrollAnimation>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="space-y-8"
                >
                  <div className="text-center">
                    <h2 className="text-4xl font-light tracking-tight text-foreground sm:text-5xl mb-4">
                      Find Us
                    </h2>
                    <p className="text-base text-muted-foreground font-light">
                      Visit our restaurant
                    </p>
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.3 }}
                    className="relative w-full h-[500px] overflow-hidden rounded-lg shadow-lg"
                  >
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.566477893!2d100.5017654!3d13.7563309!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDQ1JzIyLjgiTiAxMDAgwrAzMCcwNi4zIlE!5e0!3m2!1sen!2sth!4v1234567890"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="absolute inset-0"
                    />
                  </motion.div>
                </motion.div>
              </ScrollAnimation>
            </div>
          </section>
          <Separator />
          <ReservationSection />
        </motion.div>
      </div>
      <Footer />
      <SocialFloatingButtons />
    </>
  )
}

function ContactCard({ icon, title, content, className }) {
  return (
    <Card
      className={cn(
        "p-6 border border-border bg-card hover:shadow-md transition-all duration-300",
        className
      )}
    >
      <div className="flex items-start gap-4">
        {icon && (
          <div className="p-3 rounded-lg shrink-0 bg-muted/50">
            <div className="text-muted-foreground">{icon}</div>
          </div>
        )}
        <div className="flex-1 space-y-2">
          {title && (
            <h3 className="text-base font-medium text-foreground">{title}</h3>
          )}
          <div className="text-sm text-muted-foreground">{content}</div>
        </div>
      </div>
    </Card>
  )
}
