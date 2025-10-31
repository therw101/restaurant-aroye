"use client"

import { Separator } from "@/components/ui/separator"

export function Footer() {
  return (
    <footer
      className="border-t border-border px-6 py-16 sm:px-8 lg:px-12"
      role="contentinfo"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-12">
          <address className="not-italic">
            <h3 className="text-sm font-medium mb-6 text-foreground">
              ติดต่อเรา
            </h3>
            <div className="space-y-2 text-sm text-muted-foreground font-light">
              <p>123 ถนนสุขุมวิท</p>
              <p>กรุงเทพมหานคร 10110</p>
              <a
                href="tel:021234567"
                className="block mt-4 hover:text-primary transition-colors"
              >
                โทร: 02-123-4567
              </a>
            </div>
          </address>

          <div>
            <h3 className="text-sm font-medium mb-6 text-foreground">
              เวลาทำการ
            </h3>
            <div className="space-y-2 text-sm text-muted-foreground font-light">
              <time className="block">จันทร์ - ศุกร์: 11:00 - 21:00</time>
              <time className="block">เสาร์ - อาทิตย์: 10:00 - 22:00</time>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium mb-6 text-foreground">
              ติดตามเรา
            </h3>
            <div className="space-y-3 text-sm font-light">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Facebook
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Instagram
              </a>
              <a
                href="https://line.me"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Line
              </a>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="text-center">
          <p className="text-xs text-muted-foreground font-light">
            © {new Date().getFullYear()} AROYÉ. สงวนลิขสิทธิ์.
          </p>
        </div>
      </div>
    </footer>
  )
}
