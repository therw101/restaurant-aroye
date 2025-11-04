"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card"
import { ScrollAnimation } from "@/components/ui/scroll-animation"
import { motion } from "motion/react"
import { MapPin, CalendarDays, Users2, Clock, Phone, Mail } from "lucide-react"
import { cn } from "@/lib/utils"
import { Spinner } from "@/components/ui/spinner"
import { toast } from "sonner"

export function ReservationSection() {
  const [date, setDate] = useState("Today")
  const [time, setTime] = useState("19:00")
  const [guests, setGuests] = useState(2)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmittingDate, setIsSubmittingDate] = useState(false)
  const [isSubmittingTime, setIsSubmittingTime] = useState(false)
  const [isSubmittingGuests, setIsSubmittingGuests] = useState(false)

  const handleDateClick = async () => {
    setIsSubmittingDate(true)
    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 300))
    const dates = ["Today", "Tomorrow", "Other"]
    const currentIndex = dates.indexOf(date)
    const newDate = dates[(currentIndex + 1) % dates.length]
    setDate(newDate)
    setIsSubmittingDate(false)

    toast.success("Date changed", {
      description: `Selected date: ${newDate}`,
    })
  }

  const handleTimeClick = async () => {
    setIsSubmittingTime(true)
    await new Promise((resolve) => setTimeout(resolve, 300))
    const times = ["17:00", "18:00", "19:00", "20:00", "21:00"]
    const currentIndex = times.indexOf(time)
    const newTime = times[(currentIndex + 1) % times.length]
    setTime(newTime)
    setIsSubmittingTime(false)

    toast.success("Time changed", {
      description: `Selected time: ${newTime}`,
    })
  }

  const handleGuestsClick = async () => {
    setIsSubmittingGuests(true)
    await new Promise((resolve) => setTimeout(resolve, 300))
    const newGuests = guests >= 8 ? 2 : guests + 1
    setGuests(newGuests)
    setIsSubmittingGuests(false)

    toast.success("Number of guests changed", {
      description: `Guests: ${newGuests}`,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Show loading toast
    const toastId = toast.loading("Processing reservation...", {
      description: "Please wait",
    })

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // In a real app, you would call your API here
      // const response = await fetch('/api/reservations', { ... })

      // Success toast
      toast.success("Reservation successful!", {
        id: toastId,
        description: `${date} at ${time} for ${guests} guests`,
        duration: 5000,
      })

      // Reset form (optional)
      // setDate("Today")
      // setTime("19:00")
      // setGuests(2)
    } catch (error) {
      // Error toast
      toast.error("An error occurred", {
        id: toastId,
        description: "Unable to make reservation. Please try again",
        duration: 5000,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="contact" className="px-6 py-32 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-3xl">
        <ScrollAnimation>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Card className="border border-border rounded-none shadow-none bg-card">
              <CardHeader className="text-center pb-8">
                <h2 className="text-4xl font-light tracking-tight text-foreground sm:text-5xl mb-4">
                  Make a Reservation
                </h2>
                <CardDescription className="text-sm font-light">
                  Reserve a table in advance for the perfect dining experience
                  <br />
                  We&apos;ll prepare your table and everything ready for you
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Location Section */}
                  <motion.div variants={itemVariants} className="space-y-2">
                    <h3 className="font-medium text-card-foreground text-sm">
                      Address
                    </h3>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                      <input
                        type="text"
                        value="123 Sukhumvit Road, Bangkok"
                        readOnly
                        className="h-12 w-full rounded-none border border-input bg-transparent pl-10 pr-4 text-foreground ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      />
                    </div>
                  </motion.div>

                  {/* Booking Details */}
                  <motion.div variants={itemVariants} className="space-y-2">
                    <h3 className="font-medium text-card-foreground text-sm">
                      Reservation Details
                    </h3>
                    <div className="flex flex-col gap-2 sm:flex-row">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={handleDateClick}
                        disabled={isSubmittingDate || isSubmitting}
                        className="flex h-12 flex-1 items-center justify-start gap-3 rounded-none bg-background px-4 text-left font-normal text-muted-foreground hover:bg-accent hover:text-accent-foreground disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmittingDate ? (
                          <Spinner
                            size="sm"
                            className="text-muted-foreground"
                          />
                        ) : (
                          <CalendarDays className="h-5 w-5" />
                        )}
                        <span>{date}</span>
                      </Button>
                      <div className="flex flex-1 gap-2">
                        <Button
                          type="button"
                          variant="outline"
                          onClick={handleTimeClick}
                          disabled={isSubmittingTime || isSubmitting}
                          className="flex h-12 flex-1 items-center justify-start gap-3 rounded-none bg-background px-4 text-left font-normal text-muted-foreground hover:bg-accent hover:text-accent-foreground disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {isSubmittingTime ? (
                            <Spinner
                              size="sm"
                              className="text-muted-foreground"
                            />
                          ) : (
                            <Clock className="h-5 w-5" />
                          )}
                          <span>{time}</span>
                        </Button>
                        <Button
                          type="button"
                          variant="outline"
                          onClick={handleGuestsClick}
                          disabled={isSubmittingGuests || isSubmitting}
                          className="flex h-12 flex-1 items-center justify-start gap-3 rounded-none bg-background px-4 text-left font-normal text-muted-foreground hover:bg-accent hover:text-accent-foreground disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {isSubmittingGuests ? (
                            <Spinner
                              size="sm"
                              className="text-muted-foreground"
                            />
                          ) : (
                            <Users2 className="h-5 w-5" />
                          )}
                          <span>{guests} guests</span>
                        </Button>
                      </div>
                    </div>
                  </motion.div>

                  {/* Submit Button */}
                  <motion.div variants={itemVariants}>
                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="h-12 w-full rounded-none text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed relative"
                    >
                      {isSubmitting ? (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="flex items-center justify-center gap-2"
                        >
                          <Spinner
                            size="sm"
                            className="text-primary-foreground"
                          />
                          <span>Reserving...</span>
                        </motion.div>
                      ) : (
                        <motion.span
                          whileTap={{ scale: 0.98 }}
                          className="inline-block"
                        >
                          Reserve Table
                        </motion.span>
                      )}
                    </Button>
                  </motion.div>
                </form>

                {/* Contact Info */}
                <motion.div
                  variants={itemVariants}
                  className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6 border-t border-border"
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Button
                      size="lg"
                      variant="ghost"
                      className="h-12 px-6 text-sm font-medium rounded-none transition-all duration-300"
                      asChild
                    >
                      <a
                        href="tel:021234567"
                        aria-label="Call to reserve"
                        className="flex items-center gap-2"
                      >
                        <Phone className="h-4 w-4" />
                        <span>02-123-4567</span>
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
                      variant="ghost"
                      className="h-12 px-6 text-sm font-medium rounded-none transition-all duration-300"
                      asChild
                    >
                      <a
                        href="mailto:info@restaurant.com"
                        aria-label="Send email"
                        className="flex items-center gap-2"
                      >
                        <Mail className="h-4 w-4" />
                        <span>info@restaurant.com</span>
                      </a>
                    </Button>
                  </motion.div>
                </motion.div>

                {/* Promo Banner */}
                <motion.div
                  className="text-center pt-4"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <p className="text-xs text-muted-foreground font-light">
                    🎉 Special Promotion: Reserve a table for 3+ guests and get
                    10% off
                    <br />
                    Valid every day except public holidays
                  </p>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </ScrollAnimation>
      </div>
    </section>
  )
}
