"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "motion/react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when scrolling
  useEffect(() => {
    const handleScroll = () => {
      setIsMobileMenuOpen(false)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    const targetId = href.replace("#", "")
    const element = document.getElementById(targetId)

    if (element) {
      const navbarHeight = 80 // h-20 = 80px
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - navbarHeight

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })

      // Close mobile menu after click
      setIsMobileMenuOpen(false)
    }
  }

  const handleHomeClick = (e) => {
    e.preventDefault()
    // If already on home page, scroll to top
    if (window.location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    } else {
      // If on another page, navigate to home
      window.location.href = "/"
    }
    setIsMobileMenuOpen(false)
  }

  const navItems = [
    { href: "/", label: "Home", isHome: true },
    { href: "#menu", label: "Menu", isExternal: false },
    { href: "#gallery", label: "Gallery", isExternal: false },
    { href: "/about", label: "About", isExternal: true },
    { href: "/contact", label: "Contact", isExternal: true },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "backdrop-blur-md bg-background/80 border-b border-border/50 shadow-sm"
          : "backdrop-blur-sm bg-background/40 border-b border-border/20"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            onClick={handleHomeClick}
            className="text-xl font-light tracking-tight text-foreground hover:opacity-70 transition-opacity cursor-pointer"
          >
            AROYÉ
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) =>
              item.isHome ? (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={handleHomeClick}
                  className="text-sm font-light text-foreground/80 hover:text-foreground transition-colors relative group cursor-pointer"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
                </a>
              ) : item.isExternal ? (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-light text-foreground/80 hover:text-foreground transition-colors relative group cursor-pointer"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
                </Link>
              ) : (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-sm font-light text-foreground/80 hover:text-foreground transition-colors relative group cursor-pointer"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
                </a>
              )
            )}
            <ThemeToggle />
            <Button
              size="sm"
              className="h-9 px-6 text-xs font-medium bg-primary text-primary-foreground hover:bg-primary/90 rounded-none ml-4"
            >
              Reserve Table
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-foreground hover:bg-accent/50 rounded-md transition-colors"
              aria-label="Menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 12h18M3 6h18M3 18h18" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden border-t border-border/50 overflow-hidden"
          >
            <div className="px-6 py-6 space-y-4 bg-background/95 backdrop-blur-md">
              {navItems.map((item, index) =>
                item.isHome ? (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={handleHomeClick}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.2 }}
                    className="block text-base font-light text-foreground/80 hover:text-foreground transition-colors py-2 border-b border-border/30 last:border-b-0"
                  >
                    {item.label}
                  </motion.a>
                ) : item.isExternal ? (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.2 }}
                  >
                    <Link
                      href={item.href}
                      className="block text-base font-light text-foreground/80 hover:text-foreground transition-colors py-2 border-b border-border/30 last:border-b-0"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ) : (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.2 }}
                    className="block text-base font-light text-foreground/80 hover:text-foreground transition-colors py-2 border-b border-border/30 last:border-b-0"
                  >
                    {item.label}
                  </motion.a>
                )
              )}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navItems.length * 0.05, duration: 0.2 }}
                className="mt-4"
              >
                <Button
                  size="lg"
                  className="w-full h-11 text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 rounded-none"
                  onClick={() => {
                    handleNavClick({ preventDefault: () => {} }, "#contact")
                  }}
                >
                  Reserve Table
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
